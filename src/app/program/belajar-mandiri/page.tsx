"use client";

import { useState } from "react";

export default function BelajarMandiriPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
      "Halo Admin Pendidik Cendekia, saya ingin mendaftar Program Belajar Mandiri.\n" +
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
        "Mohon info lebih lanjut untuk pembayaran dan akses materi."
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

  return (
    <>
      {/* ===== APA ITU BELAJAR MANDIRI ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/flyer/Flyer-Belajar-Mandiri.webp"
                alt="Flyer Belajar Mandiri"
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                PROGRAM BELAJAR MANDIRI
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-biru mb-3">
                Belajar Kapan Saja, di Mana Saja!
              </h1>
              <p className="text-buah font-semibold mb-2">
                Fleksibel, Efektif, Tetap Terbimbing.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Program belajar mandiri dirancang bagi Anda yang ingin
                meningkatkan kompetensi secara fleksibel melalui akses rekaman
                dan materi berkualitas, dengan tetap mendapatkan bimbingan
                intensif dari mentor di dalam grup diskusi.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-krem rounded-2xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <i className="fas fa-box-open text-xl text-buah"></i>
                  </div>
                  <p className="font-bold text-biru text-xs">
                    Akses Materi &amp; Rekaman
                  </p>
                </div>
                <div className="bg-krem rounded-2xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <i className="fas fa-chalkboard-user text-xl text-buah"></i>
                  </div>
                  <p className="font-bold text-biru text-xs">
                    Bimbingan Intensif
                  </p>
                </div>
                <div className="bg-krem rounded-2xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <i className="fas fa-users text-xl text-buah"></i>
                  </div>
                  <p className="font-bold text-biru text-xs">Grup Diskusi</p>
                </div>
                <div className="bg-krem rounded-2xl p-4 text-center relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm ring-2 ring-buah/40">
                    <i className="fas fa-file-certificate text-xl text-buah"></i>
                  </div>
                  <span className="absolute top-1 right-1 bg-buah text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                    Resmi
                  </span>
                  <p className="font-bold text-biru text-xs">Sertifikat</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#form-daftar"
                  className="bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                >
                  Daftar Program
                </a>
                <a
                  href="#daftar-materi"
                  className="border-2 border-buah text-buah font-bold px-8 py-3 rounded-full hover:bg-buah hover:text-white transition text-center"
                >
                  Lihat Materi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ALUR PROGRAM ===== */}
      <section className="py-6 md:py-12 bg-krem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              ALUR PROGRAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Alur Program
            </h2>
            <p className="text-gray-500 mt-3">
              Empat langkah mudah untuk mulai belajar bersama
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-buah text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">Daftar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Isi formulir pendaftaran, admin konfirmasi lewat WhatsApp.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-buah text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Akses Materi &amp; Rekaman
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Materi dan rekaman pelatihan langsung terbuka untuk dipelajari.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-buah text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Gabung Grup Diskusi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diskusi dan bimbingan intensif bersama mentor.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-buah text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                4
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Terima Sertifikat
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sertifikat resmi PT Cipta Arah Cendekia dikirim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM PENDAFTARAN BELAJAR MANDIRI ===== */}
      <section id="form-daftar" className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              PENDAFTARAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Formulir Pendaftaran
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Siap belajar? Isi formulir di bawah, tim kami akan menghubungi
              Anda melalui WhatsApp untuk konfirmasi.
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-krem rounded-3xl border border-buah/20 p-6 md:p-8">
              <div className="bg-biru text-white rounded-2xl px-5 py-4 mb-6 shadow-lg shadow-biru/40 border-b-4 border-biru/60">
                <h2 className="text-xl md:text-2xl font-bold">
                  <i className="fas fa-pen-to-square mr-2"></i>Daftar Program
                </h2>
                <p className="text-white/80 text-sm mt-1">
                  Isi data di bawah, klik Kirim. Data otomatis terkirim ke
                  WhatsApp admin untuk konfirmasi.
                </p>
              </div>
              {formSubmitted ? (
                <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="text-green-800 font-bold mb-2">
                    Terima kasih!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Pendaftaran Anda telah dikirim. Admin akan menghubungi via
                    WhatsApp untuk konfirmasi.
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

            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/flyer/Contoh-Sertifikat.webp"
                  alt="Contoh Sertifikat"
                  className="w-full h-auto"
                />
                <div className="bg-biru text-white text-center font-bold py-2.5">
                  Contoh Sertifikat
                </div>
              </div>
              <div className="w-full max-w-xs text-center pt-3">
                <p className="text-gray-500 text-xs">
                  Sertifikat dikeluarkan oleh PT Cipta Arah Cendekia
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Nomor: AHU-037669.AH.01.30.Tahun 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DAFTAR MATERI ===== */}
      <section id="daftar-materi" className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              DAFTAR MATERI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Pilih Topik Belajar Anda
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Topik terlengkap yang bisa dipelajari mandiri, kapan saja dan di
              mana saja.
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="bg-krem p-3">
                <img
                  src="/assets/flyer/contoh-pamflet-1.webp"
                  alt="Flyer Topik Ruang Murid"
                  className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    Akses Materi Pelatihan
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    Sep 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg mb-6">
                  Optimalisasi Ruang Murid dalam Pembelajaran Digital
                </h3>
                <a
                  href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20belajar%20mandiri%20topik%3A%20Optimalisasi%20Ruang%20Murid%20dalam%20Pembelajaran%20Digital."
                  target="_blank"
                  className="mt-auto bg-buah text-white font-bold py-3 rounded-full text-center hover:bg-biru transition"
                >
                  Pilih Topik Ini
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="bg-krem p-3">
                <img
                  src="/assets/flyer/contoh-pamflet-2.webp"
                  alt="Flyer Topik Karya Ilmiah"
                  className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    Akses Materi Pelatihan
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    Sep 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg mb-6">
                  Kelas Menulis Karya Ilmiah Guru
                </h3>
                <a
                  href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20belajar%20mandiri%20topik%3A%20Kelas%20Menulis%20Karya%20Ilmiah%20Guru."
                  target="_blank"
                  className="mt-auto bg-buah text-white font-bold py-3 rounded-full text-center hover:bg-biru transition"
                >
                  Pilih Topik Ini
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="bg-krem p-3">
                <img
                  src="/assets/flyer/contoh-pamflet-3.webp"
                  alt="Flyer Topik Media AI"
                  className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    Akses Materi Pelatihan
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    Sep 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg mb-6">
                  Seminar Media Pembelajaran Interaktif berbasis AI
                </h3>
                <a
                  href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20belajar%20mandiri%20topik%3A%20Media%20Pembelajaran%20Interaktif%20berbasis%20AI."
                  target="_blank"
                  className="mt-auto bg-buah text-white font-bold py-3 rounded-full text-center hover:bg-biru transition"
                >
                  Pilih Topik Ini
                </a>
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
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Belajar mandiri memberi Anda kebebasan memilih waktu dan topik, tanpa
            kehilangan bimbingan. Mulai dari materi pilihan Anda hari ini, dan
            biarkan kompetensi Anda tumbuh selangkah demi selangkah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#form-daftar"
              className="bg-buah text-white px-8 py-4 rounded-full font-bold hover:bg-biru transition text-center"
            >
              Daftar Sekarang
            </a>
            <a
              href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20berkonsultasi%20memilih%20program%20belajar%20mandiri%20yang%20sesuai."
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
