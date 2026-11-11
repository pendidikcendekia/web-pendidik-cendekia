export type TrackingIklan = {
  googleTagId?: string;
  googleAdsId?: string;
  conversionLabel?: string;
};

export type HalamanIklan = {
  slug: string;
  wa: string;
  waTampil: string;
  poster: string;
  judul: string;
  deskripsi: string;
  tracking?: TrackingIklan;
};

// Tambah halaman iklan baru = tambah satu objek di array ini.
export const halamanIklan: HalamanIklan[] = [
  {
    slug: "pelatihanguru",
    wa: "6289682682790",
    waTampil: "0896-8268-2790",
    poster: "/assets/flyer/pamflet-paket-nov-26.webp",
    judul: "Pelatihan Guru",
    deskripsi:
      "Tingkatkan kompetensi dan ciptakan inovasi melalui pelatihan guru Pendidik Cendekia. Pilih tema pelatihan, isi formulir, lalu daftar langsung via WhatsApp.",
    tracking: {
      googleTagId: "GTM-TJDSV9JH",
      googleAdsId: "AW-18564792599",
      conversionLabel: "PRclCOnqgrUdEJeCsZRF",
    },
  },
];
