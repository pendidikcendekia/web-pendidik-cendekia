"use client";

import Link from "next/link";
import { useState } from "react";

export default function PelatihanTerbaruPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wa, setWa] = useState("");
  const [instansi, setInstansi] = useState("");
  const [provinsi, setProvinsi] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !wa) {
      alert("Mohon lengkapi nama, email, dan nomor WA.");
      return;
    }

    const msg = encodeURIComponent(
      "Halo Admin Pendidik Cendekia, saya daftar Pelatihan Optimalisasi Ruang Murid dalam Pembelajaran Digital.\n" +
        "Nama: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "WA: " +
        wa +
        "\n" +
        "Instansi: " +
        instansi +
        "\n" +
        "Asal Provinsi: " +
        provinsi +
        "\n\n" +
        "Mohon info lebih lanjut untuk pembayaran dan link kelas."
    );

    window.open("https://wa.me/628991945123?text=" + msg, "_blank");
    setFormSubmitted(true);
  }

  function resetForm() {
    setFormSubmitted(false);
    setName("");
    setEmail("");
    setWa("");
    setInstansi("");
    setProvinsi("");
  }

  function toggleAccordion(i: number) {
    setOpenAccordion((prev) => (prev === i ? null : i));
  }

  return (
    <>
      {/* ===== HERO PELATIHAN TERBARU ===== */}
      <section className="hero-orange relative overflow-hidden text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <i className="fas fa-calendar-check mr-1"></i>PROGRAM PELATIHAN
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Pelatihan Terbaru
          </h1>
          <p className="text-white/95 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Lihat berbagai pelatihan yang akan segera dilaksanakan beserta
            informasi jadwal dan programnya.
          </p>
          <a
            href="#daftar-pelatihan"
            className="mt-8 inline-block bg-white text-[#f75624] font-bold px-8 py-3 rounded-full hover:bg-[#16528F] hover:text-white transition"
          >
            Daftar Pelatihan Terbaru
          </a>
        </div>
      </section>

      {/* ===== FEATURED TRAINING ===== */}
      <section
        id="daftar-pelatihan"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-krem">
          <div className="grid md:grid-cols-2">
            <div className="bg-krem p-3 flex items-center justify-center">
              <img
                src="/assets/flyer/contoh-pamflet-1.webp"
                alt="Flyer Pelatihan Terdekat"
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-4">
                PELATIHAN TERDEKAT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-biru mb-3">
                Optimalisasi Ruang Murid dalam Pembelajaran Digital
              </h2>
              <p className="text-gray-600 mb-6">
                Pelatihan praktis minggu ini untuk mengenal dan menguasai Ruang
                Murid, mulai dari membuat materi interaktif hingga memantau
                perkembangan murid.
              </p>
              <ul className="space-y-2 mb-6 text-biru">
                <li>
                  <i className="fas fa-calendar-day text-buah w-6"></i> Sabtu, 5
                  September 2026
                </li>
                <li>
                  <i className="fas fa-clock text-buah w-6"></i> 09.00 - 11.30
                  WIB
                </li>
                <li>
                  <i className="fas fa-video text-buah w-6"></i> Via Zoom Meeting
                </li>
                <li>
                  <i className="fas fa-users text-buah w-6"></i> Guru &amp; Tenaga
                  Kependidikan
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#formulir"
                  className="bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="#detail-kegiatan"
                  className="bg-transparent border-2 border-buah text-buah font-bold px-8 py-3 rounded-full hover:bg-buah hover:text-white transition text-center"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DETAIL KEGIATAN ===== */}
      <section id="detail-kegiatan" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              FORMULIR &amp; DETAIL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Formulir dan Detail Kegiatan
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Informasi lengkap pelatihan dan pendaftaran
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* KOLOM KIRI: FORM DAFTAR */}
            <div
              id="formulir"
              className="bg-krem rounded-3xl border border-buah/20 p-6 md:p-8"
            >
              <div className="bg-biru text-white rounded-2xl px-5 py-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  <i className="fas fa-pen-to-square mr-2"></i>Pendaftaran
                  Pelatihan Terbaru
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Isi data di bawah, klik Kirim. Data otomatis terkirim ke
                  WhatsApp admin untuk konfirmasi pembayaran.
                </p>
              </div>
              {formSubmitted ? (
                <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="text-green-800 font-bold mb-2">
                    Terima kasih!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Pendaftaran Anda telah dikirim. Admin akan menghubungi via
                    WhatsApp untuk proses selanjutnya.
                  </p>
                  <button
                    onClick={resetForm}
                    className="inline-block mt-4 text-sm font-semibold text-green-700 underline hover:text-green-900"
                  >
                    Edit atau Daftarkan Orang Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-label="Nama lengkap"
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="email"
                    placeholder="Email aktif"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email aktif"
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="tel"
                    placeholder="Nomor WhatsApp (contoh: 62812xxxx)"
                    required
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    aria-label="Nomor WhatsApp"
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="text"
                    placeholder="Instansi / Sekolah"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    aria-label="Instansi atau sekolah"
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="text"
                    placeholder="Asal Provinsi"
                    value={provinsi}
                    onChange={(e) => setProvinsi(e.target.value)}
                    aria-label="Asal provinsi"
                    className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <button
                    type="submit"
                    className="w-full bg-buah text-white font-bold py-3 rounded-full hover:bg-biru transition"
                  >
                    Kirim Pendaftaran
                  </button>
                </form>
              )}
            </div>

            {/* KOLOM KANAN: DETAIL KEGIATAN (ACCORDION) */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-krem overflow-hidden shadow">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="flex items-center justify-between gap-3 w-full bg-buah text-white font-semibold px-5 py-4 text-left hover:bg-[#e3491d] transition"
                >
                  <span>
                    <i className="fas fa-book-open mr-2"></i>Tentang Pelatihan
                  </span>
                  <i
                    className={`fas fa-chevron-down transition-transform ${openAccordion === 0 ? "rotate-180" : ""}`}
                  ></i>
                </button>
                <div
                  className={`${openAccordion === 0 ? "" : "hidden"} px-5 py-4 text-gray-600 leading-relaxed`}
                >
                  <p>
                    Ruang Murid adalah salah satu fitur andalan Merdeka Mengajar
                    untuk mendukung pembelajaran daring yang aktif dan
                    menyenangkan. Pelatihan ini mengantar Anda langkah demi
                    langkah memakai Ruang Murid dalam kegiatan belajar-mengajar
                    setiap hari, sekaligus menyelaraskannya dengan implementasi
                    IFP di satuan pendidikan Anda.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-krem overflow-hidden shadow">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="flex items-center justify-between gap-3 w-full bg-buah text-white font-semibold px-5 py-4 text-left hover:bg-[#e3491d] transition"
                >
                  <span>
                    <i className="fas fa-graduation-cap mr-2"></i>Apa yang Akan
                    Dipelajari
                  </span>
                  <i
                    className={`fas fa-chevron-down transition-transform ${openAccordion === 1 ? "rotate-180" : ""}`}
                  ></i>
                </button>
                <div
                  className={`${openAccordion === 1 ? "" : "hidden"} px-5 py-4 text-gray-600 leading-relaxed`}
                >
                  <ul className="space-y-2">
                    <li>
                      <i className="fas fa-check-circle text-buah mr-2"></i>
                      Mengenal fitur-fitur utama Ruang Murid
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-buah mr-2"></i>
                      Membuat dan membagikan materi interaktif
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-buah mr-2"></i>
                      Memanfaatkan tugas, kuis, dan forum diskusi
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-buah mr-2"></i>
                      Mengelola aktivitas dan memantau perkembangan murid
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-buah mr-2"></i>
                      Strategi integrasi Ruang Murid dengan implementasi IFP
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-buah mr-2"></i>
                      Praktik langsung dan studi kasus nyata
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-krem overflow-hidden shadow">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="flex items-center justify-between gap-3 w-full bg-buah text-white font-semibold px-5 py-4 text-left hover:bg-[#e3491d] transition"
                >
                  <span>
                    <i className="fas fa-gift mr-2"></i>Fasilitas
                  </span>
                  <i
                    className={`fas fa-chevron-down transition-transform ${openAccordion === 2 ? "rotate-180" : ""}`}
                  ></i>
                </button>
                <div
                  className={`${openAccordion === 2 ? "" : "hidden"} px-5 py-4 text-gray-600 leading-relaxed`}
                >
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                        <i className="fas fa-certificate"></i>
                      </span>
                      <span className="text-gray-700">
                        <strong className="text-biru">E-Sertifikat Pelatihan</strong>{" "}
                        terbit atas nama peserta, dapat divalidasi secara online.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                        <i className="fas fa-play-circle"></i>
                      </span>
                      <span className="text-gray-700">
                        <strong className="text-biru">Rekaman &amp; materi</strong>{" "}
                        kelas yang bisa diakses kapan saja setelah pelatihan.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                        <i className="fas fa-comments"></i>
                      </span>
                      <span className="text-gray-700">
                        <strong className="text-biru">Grup diskusi peserta</strong>{" "}
                        untuk bertanya dan berbagi praktik bersama mentor.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                        <i className="fas fa-headset"></i>
                      </span>
                      <span className="text-gray-700">
                        <strong className="text-biru">Pendampingan WhatsApp</strong>{" "}
                        langsung dari mentor untuk peserta.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTOH SERTIFIKAT KEGIATAN ===== */}
      <section
        id="contoh-sertifikat"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-krem">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <span className="inline-block bg-krem text-buah text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-4 self-start">
                CONTOH SERTIFIKAT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-biru mb-3">
                Sertifikat dapat di Validasi
              </h2>
              <p className="text-gray-600 mb-6">
                Setiap peserta memperoleh e-sertifikat atas namanya sendiri.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center text-xs">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="text-gray-600 text-sm">
                    Cek keabsahan cukup dengan nama yang terdaftar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center text-xs">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="text-gray-600 text-sm">
                    Hasil pengecekan langsung tertera di halaman
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center text-xs">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="text-gray-600 text-sm">
                    Dikeluarkan resmi oleh PT Cipta Arah Cendekia
                  </span>
                </li>
              </ul>
              <div>
                <Link
                  href="/layanan-member"
                  className="inline-block bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                >
                  Validasi Sertifikat
                </Link>
                <p className="text-gray-400 text-xs mt-4">
                  No. AHU-037669.AH.01.30.Tahun 2025
                </p>
              </div>
            </div>
            <div className="order-first md:order-last bg-krem p-3 flex items-center justify-center">
              <img
                src="/assets/flyer/Contoh-Sertifikat.webp"
                alt="Contoh Sertifikat Kegiatan Pendidik Cendekia"
                loading="lazy"
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PELATIHAN LAINNYA ===== */}
      <section id="pelatihan-lainnya" className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Pelatihan Lainnya
            </h2>
            <p className="text-gray-500 mt-3">
              Pelatihan terjadwal selanjutnya yang bisa Anda ikuti
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-krem p-3 flex items-center justify-center">
                  <img
                    src="/assets/flyer/contoh-pamflet-2.webp"
                    alt="Flyer Workshop Karya Ilmiah"
                    className="w-full h-56 md:h-72 object-cover object-top rounded-xl shadow-2xl"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-3">
                    WORKSHOP
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-biru mb-3">
                    Kelas Menulis Karya Ilmiah Guru
                  </h3>
                  <ul className="space-y-2 mb-6 text-biru">
                    <li>
                      <i className="fas fa-calendar-day text-buah w-6"></i>{" "}
                      Sabtu, 12 September 2026
                    </li>
                    <li>
                      <i className="fas fa-clock text-buah w-6"></i> 09.00 -
                      12.00 WIB
                    </li>
                    <li>
                      <i className="fas fa-video text-buah w-6"></i> Via Zoom
                      Meeting
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20daftar%20Workshop%20Kelas%20Menulis%20Karya%20Ilmiah%20Guru."
                    target="_blank"
                    className="inline-block bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-krem p-3 flex items-center justify-center">
                  <img
                    src="/assets/flyer/contoh-pamflet-3.webp"
                    alt="Flyer Seminar Media AI"
                    className="w-full h-56 md:h-72 object-cover object-top rounded-xl shadow-2xl"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-3">
                    SEMINAR
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-biru mb-3">
                    Seminar Media Pembelajaran Interaktif berbasis AI
                  </h3>
                  <ul className="space-y-2 mb-6 text-biru">
                    <li>
                      <i className="fas fa-calendar-day text-buah w-6"></i>{" "}
                      Sabtu, 19 September 2026
                    </li>
                    <li>
                      <i className="fas fa-clock text-buah w-6"></i> 09.00 -
                      11.00 WIB
                    </li>
                    <li>
                      <i className="fas fa-video text-buah w-6"></i> Via Zoom
                      Meeting
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20daftar%20Seminar%20Media%20Pembelajaran%20Interaktif%20berbasis%20AI."
                    target="_blank"
                    className="inline-block bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PENAWARAN MANDIRI BELAJAR ===== */}
      <section id="penawaran-mandiri-belajar" className="py-6 md:py-12 bg-krem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Akses Fasilitas Pelatihan
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Materi dan rekaman pelatihan yang telah berlangsung, lengkap dengan
              pendampingan mentor dan e-sertifikat.
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="bg-white rounded-3xl border border-krem shadow-sm overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-krem text-buah text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4 self-start">
                  BELAJAR MANDIRI
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-biru mb-3">
                  Tak Bisa Hadir? Belajar Mandiri Tetap Bisa
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bagi Anda yang berhalangan hadir atau ingin mengulang materi,
                  tersedia akses rekaman dan materi belajar mandiri — lengkap
                  dengan e-sertifikat dan pendampingan dalam grup diskusi.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                      <i className="fas fa-box-open"></i>
                    </span>
                    <span className="text-gray-700 text-sm">
                      Akses materi &amp; rekaman
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                      <i className="fas fa-certificate"></i>
                    </span>
                    <span className="text-gray-700 text-sm">
                      E-Sertifikat Pelatihan
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                      <i className="fas fa-chalkboard-user"></i>
                    </span>
                    <span className="text-gray-700 text-sm">
                      Pendampingan mentor
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                      <i className="fas fa-users"></i>
                    </span>
                    <span className="text-gray-700 text-sm">
                      Grup diskusi peserta
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/program/mandiri-belajar#formulir"
                    className="bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                  >
                    Ajukan Fasilitas
                  </Link>
                  <Link
                    href="/program/mandiri-belajar#pilihan-tema"
                    className="border-2 border-buah text-buah font-bold px-8 py-3 rounded-full hover:bg-buah hover:text-white transition text-center"
                  >
                    Lihat Pilihan Tema
                  </Link>
                </div>
              </div>
              <div className="order-first md:order-last md:col-span-2 bg-krem p-4 flex items-center justify-center">
                <img
                  src="/assets/flyer/Flyer-Belajar-Mandiri.webp"
                  alt="Flyer Mandiri Belajar Pendidik Cendekia"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AJAKAN BERKEMBANG ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Belajar - Bertumbuh - Berdampak
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-biru mb-4">
            Langkah Kecil Hari Ini, Dampak Besar untuk Kelas Anda
          </h2>
          <div className="w-20 h-1 bg-buah mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Setiap pelatihan di Pendidik Cendekia dirancang agar bisa langsung
            Anda praktikkan. Pilih pelatihan yang paling pas dengan kebutuhan
            Anda, dan biarkan kompetensi Anda tumbuh satu langkah setiap kali
            belajar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#formulir"
              className="bg-buah text-white px-8 py-4 rounded-full font-bold hover:bg-biru transition text-center"
            >
              Daftar Sekarang
            </a>
            <a
              href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20berkonsultasi%20memilih%20pelatihan%20yang%20sesuai."
              target="_blank"
              className="border-2 border-buah text-buah px-8 py-4 rounded-full font-bold hover:bg-buah hover:text-white transition text-center"
            >
              Diskusi dengan Admin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
