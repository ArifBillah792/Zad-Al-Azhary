import ar from "./ar";
import en from "./en";
import bn from "./bn";
import ms from "./ms";
import type { Dict } from "./en";
import type { Lang } from "../config/site";
import { delivery } from "../config/site";

export const dictionaries: Record<Lang, Dict> = { ar, en, bn, ms };

export function t(lang: Lang): Dict {
  return dictionaries[lang];
}

/** Replace {key} placeholders. */
export function fill(text: string, vars: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

/** Format a price in the page's language: "650 EGP" / "650 ج.م" */
export function money(lang: Lang, value: number) {
  return `${value} ${dictionaries[lang].currency}`;
}

/** "Wednesday 28 October" in the page's language */
export function startDate(lang: Lang) {
  const d = new Date(delivery.startDate + "T12:00:00");
  return new Intl.DateTimeFormat(dictionaries[lang].locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    numberingSystem: lang === "bn" ? "beng" : "latn",
  }).format(d);
}
