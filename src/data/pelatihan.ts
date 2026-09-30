export type Fasilitas = { ikon: string; judul: string; teks: string };

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
  tentang: string;
  materi: string[];
  fasilitas: Fasilitas[];
  siapa: string;
  pamflet: string;
  fotoSertifikat: string;
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

const fasilitasStandar: Fasilitas[] = [
  {
    ikon: "fa-certificate",
    judul: "E-Sertifikat Pelatihan",
    teks: "Terbit atas nama peserta, dapat divalidasi secara online.",
  },
  {
    ikon: "fa-play-circle",
    judul: "Rekaman dan materi",
    teks: "Kelas yang bisa diakses kapan saja setelah pelatihan selesai.",
  },
  {
    ikon: "fa-comments",
    judul: "Grup diskusi peserta",
    teks: "Untuk bertanya dan berbagi praktik bersama mentor.",
  },
  {
    ikon: "fa-headset",
    judul: "Pendampingan WhatsApp",
    teks: "Mendampingan langsung dari mentor untuk peserta.",
  },
];

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
    tentang:
      "Canva adalah aplikasi desain gratis yang banyak dipakai guru untuk membuat materi ajar, infografis, dan poster kegiatan. Pelatihan ini mengantar Anda langkah demi langkah, mulai dari memilih template hingga mengekspor hasil desain untuk dicetak atau dibagikan ke media sosial.",
    materi: [
      "Navigasi dasar dan elemen desain",
      "Membuat presentasi profesional",
      "Template dan tulisan yang siap pakai",
      "Ekspor untuk cetak dan media sosial",
    ],
    fasilitas: fasilitasStandar,
    siapa: "Guru dan tenaga kependidikan",
    pamflet: "/assets/flyer/contoh-pamflet-1.webp",
    fotoSertifikat: "/assets/flyer/Contoh-Sertifikat.webp",
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
    tentang:
      "Gemini adalah asisten AI dari Google yang bisa membantu pendidik menyiapkan materi, membuat soal evaluasi, dan mengolah hasil Dumas. Pelatihan ini membahas cara memberi perintah yang tepat, praktis yang bisa langsung diterapkan, serta etika dan batas penggunaan AI dalam kegiatan belajar-mengajar.",
    materi: [
      "Dasar prompt untuk pendidik",
      "Menyusun materi dan soal otomatis",
      "Membantu analisis Dumas",
      "Etika dan verifikasi hasil AI",
    ],
    fasilitas: fasilitasStandar,
    siapa: "Guru dan tenaga kependidikan",
    pamflet: "/assets/flyer/contoh-pamflet-2.webp",
    fotoSertifikat: "/assets/flyer/Contoh-Sertifikat.webp",
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
      {
        nama: "Ibu Tuti, SD Negeri 4 Semarang",
        teks: "Penjelasannya runtut, tidak ada yang membingungkan. Sangat membantu untuk tugas sekolah.",
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
      {
        nama: "Bapak Joko, SMP Negeri 6 Solo",
        teks: "Contoh kasusnya nyata, bukan teori. Saya langsung paham cara memakainya.",
      },
      {
        nama: "Ibu Maya, SDTK 1 Yustania, Papua",
        teks: "Materi, panduan, dan pendampingan semuanya lengkap.",
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
      {
        nama: "Ibu Lina, SMPN 2 Malang",
        teks: "Materinya singkat tapi padat, lalu banyak tanya jawab. Pas banget buat guru sibuk.",
      },
      {
        nama: "Bapak Wahyu, SD Negeri 9, Yogyakarta",
        teks: "Saya ikut karena temannya sudah sukses. Ternyata memang beda.",
      },
    ],
  },
];
