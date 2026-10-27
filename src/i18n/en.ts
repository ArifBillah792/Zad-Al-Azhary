const en = {
  dir: "ltr" as "ltr" | "rtl",
  locale: "en-GB",
  langName: "English",
  currency: "EGP",

  meta: {
    title: "Zad Al-Azhari notes, 1st year Usul al-Din (Darrasa) 2026/27",
    description:
      "Approved summary notes for all six 1st-year Usul al-Din subjects at Al-Azhar, Darrasa. Full color, exam questions, textbook page tracker. Free delivery in Darrasa and Nasr City.",
  },

  nav: {
    subjects: "Subjects",
    group: "Group offer",
    order: "Order",
    faq: "Questions",
    language: "Language",
  },

  hero: {
    context: "1st year, Faculty of Usul al-Din, Darrasa, 2026/27",
    title: "Your first year at Al-Azhar, summarized subject by subject",
    lead: "Six approved notes that follow your official textbooks page by page, with exam practice, mind maps and tables. Printed in full color and delivered free.",
    ctaFull: "Order the full set",
    ctaGroup: "Order with 5 friends",
    batch: "First batch is limited",
    deliveryFrom: "Delivery starts {date}",
  },

  subjects: {
    title: "The six subjects",
    lead: "Pick the notes you need, or take the full set.",
    names: {
      nahw: "Nahw & Sarf",
      mantiq: "Mantiq (Tasawwurat)",
      sunnah: "History of the Prophetic Sunnah",
      fiqh: "Fiqh al-Ibadat",
      nuzum: "Islamic Systems",
      quran: "Ulum al-Quran",
    },
    selectAll: "Select all six",
    clear: "Clear",
    selected: "{n} of 6 selected",
    total: "Total",
    goToOrder: "Continue to order",
  },

  features: {
    title: "What's inside every note",
    items: [
      {
        key: "exam",
        title: "Exam practice",
        text: "Drills and past-style questions at the end of each chapter, so you know what the exam will ask.",
      },
      {
        key: "tracker",
        title: "Textbook page tracker",
        text: "Every point is marked with its page in the official book, so you can check the original in seconds.",
      },
      {
        key: "maps",
        title: "Mind maps and tables",
        text: "Long chapters turned into one-page maps and comparison tables for quick revision.",
      },
      {
        key: "color",
        title: "Full color print",
        text: "Color-coded headings, definitions and evidence make each page easy to scan.",
      },
    ],
    trackerDemo: "The definition of the noun and its signs",
    trackerPage: "p. 47",
  },

  group: {
    title: "Order with 5 friends and everyone pays less",
    lead: "Collect six students for the full set. You pay the least as thanks for organizing.",
    you: "You",
    friend: "Friend",
    instead: "instead of {price}",
    groupTotal: "The group pays {total} instead of {normal}",
    cta: "Start a group order",
    note: "The group offer applies to the full set of six notes.",
  },

  samples: {
    title: "See the pages before you order",
    lead: "Real pages from the notes.",
    alt: "Sample page {n}",
    soon: "Sample page",
  },

  order: {
    title: "Place your order",
    lead: "Fill in the form and send it to us. We confirm every order and arrange delivery.",
    modeLabel: "Order type",
    modeIndividual: "Just me",
    modeGroup: "Group of 6",
    subjectsLabel: "Notes",
    fullSet: "Full set (all six)",
    pickSubjects: "Choose subjects above",
    edit: "Change",
    name: "Your name",
    phone: "Phone or WhatsApp number",
    area: "Delivery area",
    areas: {
      darrasa: "Darrasa",
      nasr7: "7th District, Nasr City",
      nasr10: "10th District, Nasr City",
    },
    address: "Address or building (optional)",
    payment: "Payment",
    payments: {
      vodafone: "Vodafone Cash",
      instapay: "InstaPay",
      cod: "Cash on delivery",
    },
    friendsLabel: "Your 5 friends",
    friendName: "Friend {n}: name",
    friendPhone: "Phone",
    summary: "Your order",
    youPay: "You pay",
    friendsPay: "Each friend pays",
    groupTotal: "Group total",
    delivery: "Delivery",
    free: "Free",
    sendTelegram: "Send order on Telegram",
    sendWhatsapp: "Send on WhatsApp",
    copied: "Order copied. Paste it in the Telegram chat and send.",
    errors: {
      name: "Enter your name.",
      phone: "Enter a phone number we can reach you on.",
      subjects: "Choose at least one subject.",
      friends: "Enter the names of all 5 friends.",
    },
    msg: {
      heading: "New order, Zad Al-Azhari",
      type: "Type",
      name: "Name",
      phone: "Phone",
      area: "Area",
      address: "Address",
      payment: "Payment",
      notes: "Notes",
      friends: "Friends",
      total: "Total",
    },
  },

  info: {
    deliveryTitle: "Free delivery",
    deliveryText: "Darrasa, and the 7th and 10th Districts in Nasr City.",
    paymentTitle: "Pay your way",
    paymentText: "Vodafone Cash, InstaPay, or cash when the notes arrive.",
    startTitle: "First batch",
    startText: "Delivery starts {date}. Copies are limited.",
  },

  faq: {
    title: "Questions",
    items: [
      {
        q: "Are these notes approved?",
        a: "Yes. Zad Al-Azhari notes are prepared for the 1st-year Usul al-Din curriculum in Darrasa for 2026/27 and follow the official textbooks.",
      },
      {
        q: "Can I buy just one subject?",
        a: "Yes. Choose any subjects you need. The group discount applies to the full set of six.",
      },
      {
        q: "How does the group offer work?",
        a: "You collect 5 friends, and all six of you order the full set. You pay {organizer} and each friend pays {friend}, instead of {full}.",
      },
      {
        q: "How do I pay?",
        a: "Vodafone Cash or InstaPay to {number}, or cash on delivery.",
      },
      {
        q: "Where do you deliver?",
        a: "Darrasa, and the 7th and 10th Districts in Nasr City. Delivery is free.",
      },
    ],
  },

  footer: {
    rights: "Zad Al-Azhari",
    joinTelegram: "Join our Telegram group",
  },
};

export type Dict = typeof en;
export default en;
