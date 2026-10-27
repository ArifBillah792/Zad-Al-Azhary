// ─────────────────────────────────────────────────────────────
//  ZAD AL-AZHARI — single place for prices, contacts and dates.
//  Change values here; every language updates automatically.
// ─────────────────────────────────────────────────────────────

export const contact = {
  // Personal Telegram username (no @). Leave "" to fall back to the group link.
  // With a username, the order message opens pre-filled in your chat.
  telegramUsername: "",
  telegramGroup: "https://t.me/+g5I3X_q-eS5iYTg0",
  whatsapp: "201128544651", // international format, no + or spaces
};

export const payment = {
  vodafoneCash: "+20 112 854 4651",
  instaPay: "+20 112 854 4651",
  cashOnDelivery: true,
};

export const delivery = {
  // ISO date of the first delivery day
  startDate: "2026-10-28",
  fee: 0, // 0 = free
  areas: ["darrasa", "nasr7", "nasr10"] as const,
};

export const pricing = {
  fullPackage: 650,
  groupOrganizer: 500,
  groupFriend: 550,
  groupFriends: 5, // friends besides the organizer
};

export type SubjectId =
  | "nahw"
  | "mantiq"
  | "sunnah"
  | "fiqh"
  | "nuzum"
  | "quran";

export interface Subject {
  id: SubjectId;
  price: number;
  arabic: string; // shown in Amiri on every language, like the cover of the note
  color: string; // booklet cover color
}

export const subjects: Subject[] = [
  { id: "nahw", price: 120, arabic: "النحو والصرف", color: "#173a63" },
  { id: "mantiq", price: 120, arabic: "علم المنطق", color: "#6b2a3a" },
  { id: "sunnah", price: 100, arabic: "تاريخ السنة النبوية", color: "#2f6b52" },
  { id: "fiqh", price: 110, arabic: "فقه العبادات", color: "#8a6a2b" },
  { id: "nuzum", price: 100, arabic: "النظم الإسلامية", color: "#3d3f73" },
  { id: "quran", price: 100, arabic: "علوم القرآن", color: "#1f4f5c" },
];

export const languages = ["ar", "en", "bn", "ms"] as const;
export type Lang = (typeof languages)[number];
