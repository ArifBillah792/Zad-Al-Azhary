// Order form behaviour: subject picker, group mode, summary, and sending
// the order as a pre-filled Telegram / WhatsApp message.

type Data = {
  lang: string;
  currency: string;
  contact: { telegramUsername: string; telegramGroup: string; whatsapp: string };
  pricing: { fullPackage: number; groupOrganizer: number; groupFriend: number; groupFriends: number };
  subjects: { id: string; price: number; name: string }[];
  t: Record<string, any>;
};

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector(sel) as T | null;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll(sel)) as T[];

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export function initOrder() {
  const raw = document.getElementById("order-data")?.textContent;
  const form = $<HTMLFormElement>("#order-form");
  if (!raw || !form) return;
  const data: Data = JSON.parse(raw);
  const t = data.t;
  const money = (n: number) => `${n} ${data.currency}`;

  const boxes = $$<HTMLInputElement>('input[name="subject"]');
  const modeInputs = $$<HTMLInputElement>('input[name="mode"]', form);
  const friendsBox = $("[data-friends]", form)!;

  const mode = () => (modeInputs.find((i) => i.checked)?.value ?? "individual") as "individual" | "group";
  const selected = () => boxes.filter((b) => b.checked).map((b) => data.subjects.find((s) => s.id === b.value)!);

  function setMode(m: "individual" | "group") {
    modeInputs.forEach((i) => (i.checked = i.value === m));
    render();
  }

  function render() {
    const sel = selected();
    const sum = sel.reduce((a, s) => a + s.price, 0);
    const isGroup = mode() === "group";

    // Subjects section bar
    const label = $("[data-selected-label]");
    if (label) label.textContent = (label.dataset.template ?? "").replace("{n}", String(sel.length));
    const total = $("[data-total]");
    if (total) total.textContent = money(sum);

    // Chosen notes in the form
    const chosen = $("[data-chosen]", form)!;
    if (isGroup) {
      chosen.innerHTML = `<span class="rounded-lg bg-gold/15 px-3 py-1.5 text-sm font-semibold text-gold-soft">${esc(t.fullSet)}</span>`;
    } else if (sel.length === 0) {
      chosen.innerHTML = `<a href="#subjects" class="px-1 text-sm text-gold underline underline-offset-4">${esc(t.pickSubjects)}</a>`;
    } else {
      chosen.innerHTML =
        (sel.length === data.subjects.length
          ? `<span class="rounded-lg bg-gold/15 px-3 py-1.5 text-sm font-semibold text-gold-soft">${esc(t.fullSet)}</span>`
          : sel.map((s) => `<span class="rounded-lg bg-ink-2 px-3 py-1.5 text-sm">${esc(s.name)}</span>`).join("")) +
        `<a href="#subjects" class="ms-auto px-2 text-sm text-gold underline underline-offset-4">${esc(t.edit)}</a>`;
    }

    friendsBox.classList.toggle("hidden", !isGroup);

    // Summary
    const dl = $("[data-summary]", form)!;
    const row = (k: string, v: string) =>
      `<div class="flex justify-between gap-4"><dt class="text-muted">${esc(k)}</dt><dd class="tabular-nums">${esc(v)}</dd></div>`;
    const p = data.pricing;
    if (isGroup) {
      dl.innerHTML =
        row(t.fullSet, `× ${p.groupFriends + 1}`) +
        row(t.youPay, money(p.groupOrganizer)) +
        row(`${t.friendsPay} (× ${p.groupFriends})`, money(p.groupFriend));
      $("[data-order-total]", form)!.textContent = money(p.groupOrganizer + p.groupFriend * p.groupFriends);
      $("[data-total-label]", form)!.textContent = t.groupTotal;
    } else {
      dl.innerHTML = sel.length
        ? sel.map((s) => row(s.name, money(s.price))).join("")
        : `<p class="text-muted">${esc(t.pickSubjects)}</p>`;
      $("[data-order-total]", form)!.textContent = money(sum);
      $("[data-total-label]", form)!.textContent = t.youPay;
    }
  }

  // ── Wiring ───────────────────────────────────────────────
  boxes.forEach((b) => b.addEventListener("change", render));
  modeInputs.forEach((i) => i.addEventListener("change", render));

  $("[data-select-all]")?.addEventListener("click", () => {
    boxes.forEach((b) => (b.checked = true));
    render();
  });
  $("[data-clear]")?.addEventListener("click", () => {
    boxes.forEach((b) => (b.checked = false));
    render();
  });
  $$('[data-preset="full"]').forEach((a) =>
    a.addEventListener("click", () => {
      boxes.forEach((b) => (b.checked = true));
      setMode("individual");
    }),
  );
  $$("[data-start-group]").forEach((btn) =>
    btn.addEventListener("click", () => {
      setMode("group");
      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => form.querySelector<HTMLInputElement>('[name="name"]')?.focus({ preventScroll: true }), 500);
    }),
  );

  // ── Validation + message ─────────────────────────────────
  function showError(key: string, on: boolean, input?: HTMLElement | null) {
    $(`[data-error="${key}"]`, form)?.classList.toggle("hidden", !on);
    if (input) input.setAttribute("aria-invalid", on ? "true" : "false");
  }

  function validate(): boolean {
    const f = new FormData(form);
    const isGroup = mode() === "group";
    let ok = true;
    let first: HTMLElement | null = null;
    const mark = (key: string, bad: boolean, el?: HTMLElement | null) => {
      showError(key, bad, el);
      if (bad) { ok = false; first ??= el ?? $(`[data-error="${key}"]`, form); }
    };
    mark("subjects", !isGroup && selected().length === 0, $("[data-chosen]", form));
    mark("name", !String(f.get("name") ?? "").trim(), $('[name="name"]', form));
    mark("phone", String(f.get("phone") ?? "").replace(/\D/g, "").length < 8, $('[name="phone"]', form));
    if (isGroup) {
      const missing = Array.from({ length: data.pricing.groupFriends }, (_, i) => $<HTMLInputElement>(`[name="friend${i + 1}"]`, form)!)
        .filter((el) => !el.value.trim());
      $$<HTMLInputElement>('[name^="friend"]:not([name^="friendPhone"])', form).forEach((el) =>
        el.setAttribute("aria-invalid", el.value.trim() ? "false" : "true"),
      );
      mark("friends", missing.length > 0, missing[0]);
    }
    if (first) (first as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
    return ok;
  }

  function buildMessage(): string {
    const f = new FormData(form);
    const m = t.msg;
    const isGroup = mode() === "group";
    const p = data.pricing;
    const payId = String(f.get("payment"));
    const areaId = String(f.get("area"));
    const lines: string[] = [`*${m.heading}*`, ""];
    lines.push(`${m.type}: ${isGroup ? t.modeGroup : t.modeIndividual}`);

    if (isGroup) {
      lines.push(`${m.notes}: ${t.fullSet}`);
    } else {
      const sel = selected();
      lines.push(`${m.notes}:`);
      sel.forEach((s) => lines.push(`- ${s.name} (${money(s.price)})`));
    }
    lines.push("");
    lines.push(`${m.name}: ${String(f.get("name")).trim()}`);
    lines.push(`${m.phone}: ${String(f.get("phone")).trim()}`);
    lines.push(`${m.area}: ${t.areas[areaId] ?? areaId}`);
    const address = String(f.get("address") ?? "").trim();
    if (address) lines.push(`${m.address}: ${address}`);
    lines.push(`${m.payment}: ${t.payments[payId] ?? payId}`);

    if (isGroup) {
      lines.push("", `${m.friends}:`);
      for (let i = 1; i <= p.groupFriends; i++) {
        const name = String(f.get(`friend${i}`) ?? "").trim();
        const phone = String(f.get(`friendPhone${i}`) ?? "").trim();
        lines.push(`${i}. ${name}${phone ? ` (${phone})` : ""}`);
      }
      lines.push("", `${t.youPay}: ${money(p.groupOrganizer)}`, `${t.friendsPay}: ${money(p.groupFriend)}`);
      lines.push(`${m.total}: ${money(p.groupOrganizer + p.groupFriend * p.groupFriends)}`);
    } else {
      lines.push("", `${m.total}: ${money(selected().reduce((a, s) => a + s.price, 0))}`);
    }
    return lines.join("\n");
  }

  async function copy(text: string) {
    try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const channel = (e as SubmitEvent).submitter?.getAttribute("data-send") ?? "telegram";
    const msg = buildMessage();
    const enc = encodeURIComponent(msg);

    if (channel === "whatsapp") {
      window.open(`https://wa.me/${data.contact.whatsapp}?text=${enc}`, "_blank", "noopener");
      return;
    }
    // Telegram: a personal username can be pre-filled; a group invite link cannot,
    // so the message is copied and the student pastes it.
    const copied = await copy(msg);
    const url = data.contact.telegramUsername
      ? `https://t.me/${data.contact.telegramUsername}?text=${enc}`
      : data.contact.telegramGroup;
    if (copied) $("[data-copied]", form)?.classList.remove("hidden");
    window.open(url, "_blank", "noopener");
  });

  render();
}
