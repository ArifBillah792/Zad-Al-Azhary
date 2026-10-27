import type { Dict } from "./en";

const ms: Dict = {
  dir: "ltr",
  locale: "ms-MY",
  langName: "Bahasa Melayu",
  currency: "EGP",

  meta: {
    title: "Nota Zad Al-Azhari, Tahun 1 Usuluddin (Darrasa) 2026/2027",
    description:
      "Nota ringkasan yang diiktiraf untuk enam subjek Tahun 1 Usuluddin, Al-Azhar Darrasa. Warna penuh, latihan peperiksaan, penjejak halaman buku. Penghantaran percuma di Darrasa dan Nasr City.",
  },

  nav: {
    subjects: "Subjek",
    group: "Tawaran berkumpulan",
    order: "Pesan",
    faq: "Soalan",
    language: "Bahasa",
  },

  hero: {
    context: "Tahun 1, Fakulti Usuluddin, Darrasa, Sesi 2026/2027",
    title: "Tahun pertama anda di Al-Azhar, diringkaskan subjek demi subjek",
    lead: "Enam nota yang diiktiraf, mengikut buku teks rasmi halaman demi halaman, dengan latihan peperiksaan, peta minda dan jadual. Dicetak warna penuh dan dihantar percuma.",
    ctaFull: "Pesan set lengkap",
    ctaGroup: "Pesan bersama 5 rakan",
    batch: "Kuantiti kumpulan pertama terhad",
    deliveryFrom: "Penghantaran bermula {date}",
  },

  subjects: {
    title: "Enam subjek",
    lead: "Pilih nota yang anda perlukan, atau ambil set lengkap.",
    names: {
      nahw: "Nahu & Sorof",
      mantiq: "Ilmu Mantiq (Tasawwur)",
      sunnah: "Tarikh Sunnah Nabawiyyah",
      fiqh: "Fiqh Ibadat",
      nuzum: "Sistem-Sistem Islam",
      quran: "Ulum Al-Quran",
    },
    selectAll: "Pilih keenam-enam",
    clear: "Kosongkan",
    selected: "{n} daripada 6 dipilih",
    total: "Jumlah",
    goToOrder: "Teruskan pesanan",
  },

  features: {
    title: "Kandungan setiap nota",
    items: [
      {
        key: "exam",
        title: "Latihan peperiksaan",
        text: "Soalan gaya peperiksaan di hujung setiap bab, supaya anda tahu apa yang akan ditanya.",
      },
      {
        key: "tracker",
        title: "Penjejak halaman buku",
        text: "Setiap isi ditanda dengan halamannya dalam buku rasmi, jadi anda boleh semak teks asal dalam beberapa saat.",
      },
      {
        key: "maps",
        title: "Peta minda dan jadual",
        text: "Bab yang panjang dijadikan peta satu halaman dan jadual perbandingan untuk ulang kaji pantas.",
      },
      {
        key: "color",
        title: "Warna penuh",
        text: "Tajuk, takrif dan dalil berwarna berbeza, jadi setiap halaman mudah dibaca.",
      },
    ],
    trackerDemo: "Takrif isim dan tanda-tandanya",
    trackerPage: "hlm. 47",
  },

  group: {
    title: "Pesan bersama 5 rakan, semua bayar kurang",
    lead: "Kumpulkan enam pelajar untuk set lengkap. Anda bayar paling sedikit sebagai penghargaan atas usaha anda.",
    you: "Anda",
    friend: "Rakan",
    instead: "berbanding {price}",
    groupTotal: "Kumpulan bayar {total} berbanding {normal}",
    cta: "Mulakan pesanan berkumpulan",
    note: "Tawaran berkumpulan untuk set lengkap enam nota.",
  },

  samples: {
    title: "Lihat halaman sebelum memesan",
    lead: "Halaman sebenar daripada nota.",
    alt: "Contoh halaman {n}",
    soon: "Contoh halaman",
  },

  order: {
    title: "Buat pesanan",
    lead: "Isi borang dan hantar kepada kami. Kami sahkan setiap pesanan dan aturkan penghantaran.",
    modeLabel: "Jenis pesanan",
    modeIndividual: "Saya sahaja",
    modeGroup: "Kumpulan 6 orang",
    subjectsLabel: "Nota",
    fullSet: "Set lengkap (enam subjek)",
    pickSubjects: "Pilih subjek di atas",
    edit: "Tukar",
    name: "Nama anda",
    phone: "Nombor telefon atau WhatsApp",
    area: "Kawasan penghantaran",
    areas: {
      darrasa: "Darrasa",
      nasr7: "Hayyu Sabie (7th District), Nasr City",
      nasr10: "Hayyu Asyir (10th District), Nasr City",
    },
    address: "Alamat atau bangunan (pilihan)",
    payment: "Bayaran",
    payments: {
      vodafone: "Vodafone Cash",
      instapay: "InstaPay",
      cod: "Bayar semasa terima",
    },
    friendsLabel: "5 rakan anda",
    friendName: "Rakan {n}: nama",
    friendPhone: "Telefon",
    summary: "Pesanan anda",
    youPay: "Anda bayar",
    friendsPay: "Setiap rakan bayar",
    groupTotal: "Jumlah kumpulan",
    delivery: "Penghantaran",
    free: "Percuma",
    sendTelegram: "Hantar pesanan di Telegram",
    sendWhatsapp: "Hantar di WhatsApp",
    copied: "Pesanan disalin. Tampal dalam sembang Telegram dan hantar.",
    errors: {
      name: "Masukkan nama anda.",
      phone: "Masukkan nombor telefon untuk kami hubungi.",
      subjects: "Pilih sekurang-kurangnya satu subjek.",
      friends: "Masukkan nama kelima-lima rakan.",
    },
    msg: {
      heading: "Pesanan baharu, Zad Al-Azhari",
      type: "Jenis",
      name: "Nama",
      phone: "Telefon",
      area: "Kawasan",
      address: "Alamat",
      payment: "Bayaran",
      notes: "Nota",
      friends: "Rakan",
      total: "Jumlah",
    },
  },

  info: {
    deliveryTitle: "Penghantaran percuma",
    deliveryText: "Darrasa, serta Hayyu Sabie dan Hayyu Asyir di Nasr City.",
    paymentTitle: "Bayar cara anda",
    paymentText: "Vodafone Cash, InstaPay, atau tunai semasa nota sampai.",
    startTitle: "Kumpulan pertama",
    startText: "Penghantaran bermula {date}. Kuantiti terhad.",
  },

  faq: {
    title: "Soalan lazim",
    items: [
      {
        q: "Adakah nota ini diiktiraf?",
        a: "Ya. Nota Zad Al-Azhari disediakan untuk sukatan Tahun 1 Usuluddin di Darrasa bagi sesi 2026/2027 dan mengikut buku teks rasmi.",
      },
      {
        q: "Bolehkah saya beli satu subjek sahaja?",
        a: "Boleh. Pilih subjek yang anda perlukan. Diskaun berkumpulan untuk set lengkap enam nota.",
      },
      {
        q: "Bagaimana tawaran berkumpulan berfungsi?",
        a: "Anda kumpulkan 5 rakan dan berenam memesan set lengkap. Anda bayar {organizer} dan setiap rakan bayar {friend}, berbanding {full}.",
      },
      {
        q: "Bagaimana cara bayar?",
        a: "Vodafone Cash atau InstaPay ke {number}, atau bayar semasa terima.",
      },
      {
        q: "Di mana penghantaran dibuat?",
        a: "Darrasa, serta Hayyu Sabie dan Hayyu Asyir di Nasr City. Penghantaran percuma.",
      },
    ],
  },

  footer: {
    rights: "Platform Zad Al-Azhari",
    joinTelegram: "Sertai kumpulan Telegram kami",
  },
};

export default ms;
