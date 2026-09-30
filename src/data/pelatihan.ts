export type SesiPelatihan = {
  id: string;
  tema: string;
  tanggal: string;
  hari: string;
  waktu: string;
  format: string;
  harga: string;
  kuota: string;
  deskripsi: string;
  materi: string[];
  pamflet: string;
};

export type Mitra = {
  slug: string;
  sesiId: string;
  nama: string;
  jabatan: string;
  wa: string;
  foto: string;
  form: string;
  penyajian: string;
  testimoni: { nama: string; teks: string }[];
};

export const sesiPelatihan: SesiPelatihan[] = [
  {
    id: "canva-okt-2026",
    tema: "Pelatihan Canva",
    tanggal: "2026-10-08",
    hari: "Kamis, 8 Oktober 2026",
    waktu: "09.00 - 12.00 WIB",
    format: "Online via Google Meet",
    harga: "Rp 149.000",
    kuota: "60 peserta",
    deskripsi:
      "Kuasai Canva dari nol sampai bisa membuat materi visual, presentasi, dan konten promosi yang siap pakai.",
    materi: [
      "Navigasi dasar dan elemen desain",
      "Membuat presentasi profesional",
      "Template dan tulisan yang siap pakai",
      "Ekspor untuk cetak dan media sosial",
    ],
    pamflet: "/assets/flyer/contoh-pamflet-1.webp",
  },
  {
    id: "gemini-okt-2026",
    tema: "Pelatihan Gemini AI",
    tanggal: "2026-10-15",
    hari: "Kamis, 15 Oktober 2026",
    waktu: "09.00 - 12.00 WIB",
    format: "Online via Google Meet",
    harga: "Rp 149.000",
    kuota: "60 peserta",
    deskripsi:
      "Manfaatkan kecerdasan buatan Gemini untuk menyiapkan materi ajar, soal evaluasi, dan Dumas lebih cepat.",
    materi: [
      "Dasar prompt untuk pendidik",
      "Menyusun materi dan soal otomatis",
      "Membantu analisis Dumas",
      "Etika dan verifikasi hasil AI",
    ],
    pamflet: "/assets/flyer/contoh-pamflet-2.webp",
  },
];

export const mitra: Mitra[] = [
  {
    slug: "pelatihan-canva",
    sesiId: "canva-okt-2026",
    nama: "Muhammad Miftahussurur",
    jabatan: "Koordinator Pelatihan",
    wa: "628991945123",
    foto: "/assets/foto_webp/koordinator-miftahussurur.webp",
    form: "https://docs.google.com/forms/d/contoh-canva-mft",
    penyajian:
      "Pendekatan praktik langsung: Anda berlatih sambil dibimbing, bukan sekadar teori.",
    testimoni: [
      {
        nama: "Ibu Rina, SD Inpres Soasio",
        teks: "Materinya jelas dan langsung bisa saya pakai untuk membuat bahan ajar besok.",
      },
      {
        nama: "Bapak Andi, SMPN 3 Bandung",
        teks: "Canva yang dulu saya kebal, sekarang jadi alat favorit saya.",
      },
    ],
  },
  {
    slug: "pelatihan-canva-budi",
    sesiId: "canva-okt-2026",
    nama: "Budi Santoso",
    jabatan: "Trainer Canva",
    wa: "628991945124",
    foto: "/assets/foto_webp/koordinator-miftahussurur.webp",
    form: "https://docs.google.com/forms/d/contoh-canva-budi",
    penyajian:
      "Pendekatan berbasis studi kasus: bawakan masalah nyata dari kelas Anda sendiri.",
    testimoni: [
      {
        nama: "Ibu Sari, SD Negeri 2 Semarang",
        teks: "Karena kasusnya dari kelas saya sendiri, terasa sangat relevan.",
      },
    ],
  },
  {
    slug: "pelatihan-canva-siti",
    sesiId: "canva-okt-2026",
    nama: "Siti Rahmah",
    jabatan: "Trainer Canva",
    wa: "628991945125",
    foto: "/assets/foto_webp/koordinator-miftahussurur.webp",
    form: "https://docs.google.com/forms/d/contoh-canva-siti",
    penyajian:
      "Materi singkat agar padat, lalu dilanjutkan sesi tanya jawab panjang bersama peserta.",
    testimoni: [
      {
        nama: "Bapak Hendra, SD Negeri 5 Yogyakarta",
        teks: "Sesi tanya jawabnya panjang dan tidak terburu-buru. Sangat membantu.",
      },
    ],
  },
];
