"use client";

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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-28 w-[30rem] h-[30rem] rounded-full bg-white/15 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-yellow-200/10 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-calendar-check mr-1"></i>Update Agustus 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pelatihan Terbaru
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mb-6">
            Tingkatkan kompetensi mengajarmu lewat webinar, workshop, dan seminar
            bersertifikat bersama praktisi dan pakar pendidikan.
          </p>
          <a
            href="#daftar-pelatihan"
            className="inline-block bg-white text-[#f75624] font-bold px-6 py-3 rounded-full hover:bg-[#16528F] hover:text-white transition"
          >
            Lihat Pelatihan
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
                src="/assets/flyer/contoh-pamflet-1.png"
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
              DETAIL KEGIATAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Detail Kegiatan
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
                  <i className="fas fa-pen-to-square mr-2"></i>Formulir
                  Pendaftaran
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
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="email"
                    placeholder="Email aktif"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="tel"
                    placeholder="Nomor WhatsApp (contoh: 62812xxxx)"
                    required
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="text"
                    placeholder="Instansi / Sekolah"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-buah"
                  />
                  <input
                    type="text"
                    placeholder="Asal Provinsi"
                    value={provinsi}
                    onChange={(e) => setProvinsi(e.target.value)}
                    className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-buah"
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
                  <ul className="space-y-2">
                    <li>
                      <i className="fas fa-file-certificate text-buah mr-2"></i>
                      Sertifikat pelatihan digital
                    </li>
                    <li>
                      <i className="fas fa-download text-buah mr-2"></i>Materi dan
                      rekaman kelas
                    </li>
                    <li>
                      <i className="fas fa-comments text-buah mr-2"></i>Akses grup
                      diskusi peserta
                    </li>
                    <li>
                      <i className="fas fa-headset text-buah mr-2"></i>
                      Pendampingan via WhatsApp
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PELATIHAN LAINNYA ===== */}
      <section className="py-6 md:py-12 bg-white">
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
                    src="/assets/flyer/contoh-pamflet-2.png"
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
                    src="/assets/flyer/contoh-pamflet-3.png"
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
