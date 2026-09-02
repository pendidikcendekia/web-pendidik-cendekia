"use client";

import { useState } from "react";

const ADMIN_LIST = [
  { nama: "Bima", wa: "628991945123", telp: "+62 895-1945-123" },
  { nama: "Ayu", wa: "6281276543210", telp: "+62 812-7654-3210" },
  { nama: "Citra", wa: "6281398765432", telp: "+62 813-9876-5432" },
];

export default function KontakPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("Layanan & Informasi Program");
  const [pesan, setPesan] = useState("");

  const filteredAdmin = ADMIN_LIST.filter((a) =>
    a.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchMessage =
    searchQuery.trim() === ""
      ? ""
      : filteredAdmin.length === 0
        ? "Tidak ditemukan rekan dengan nama tersebut."
        : `Ditemukan ${filteredAdmin.length} rekan.`;

  function kirimKeluhan(e: React.FormEvent) {
    e.preventDefault();
    let msg = "Halo Admin Pendidik Cendekia";
    if (nama.trim()) msg += `, saya ${nama.trim()}`;
    msg += ".\n\nSaya ingin menyampaikan keluhan/laporan.\nJenis: " + jenis;
    if (pesan.trim()) msg += "\nUraian: " + pesan.trim();
    window.open(
      "https://wa.me/628991945123?text=" + encodeURIComponent(msg),
      "_blank"
    );
  }

  return (
    <>
      {/* ===== HERO REKAN PENDIDIK CENDEKIA ===== */}
      <section className="hero-karya relative overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-28 w-[30rem] h-[30rem] rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-[#ffd954]/10 blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <i className="fas fa-headset mr-1"></i>KONTAK
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rekan Pendidik Cendekia
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-5 leading-relaxed">
            Rekan kami siap melayani Anda — pendaftaran pelatihan, informasi
            program, konsultasi karya dan artikel, hingga kebutuhan lain
            seputar Pendidik Cendekia.
          </p>
          <p className="text-[#ffd954] text-sm md:text-base font-semibold max-w-3xl mx-auto mb-8 leading-relaxed">
            Waspada penipuan! Pastikan Anda bertransaksi hanya dengan nomor yang
            tertera pada daftar tim di bawah ini.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#rekan-tim"
              className="bg-white text-[#0f3d6d] px-8 py-4 rounded-full font-bold shadow-lg shadow-[#0b2d55]/40 hover:bg-krem transition text-center"
            >
              <i className="fas fa-address-book mr-2"></i>Daftar Tim
            </a>
            <a
              href="#keluhan-laporan"
              className="bg-buah text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#8f3415]/50 hover:bg-[#e3491d] transition text-center"
            >
              <i className="fas fa-shield-halved mr-2"></i>Keluhan / Laporan
            </a>
          </div>
        </div>
      </section>

      {/* ===== BLOK 2: REKAN TIM ===== */}
      <section id="rekan-tim" className="py-6 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              DAFTAR TIM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Rekan Tim Kami
            </h2>
            <p className="text-gray-500 mt-3">
              Hubungi rekan yang pertama kali menghubungi Anda, atau pilih yang
              paling sesuai
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <i className="fas fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Cari nama rekan (Bima, Ayu, Citra)…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-krem rounded-full pl-12 pr-5 py-3.5 text-biru placeholder-gray-400 shadow-md focus:outline-none focus:border-buah transition"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              {searchMessage}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {filteredAdmin.map((a) => (
              <div
                key={a.nama}
                className="bg-white rounded-3xl p-6 text-center border border-krem shadow-sm hover:shadow-xl hover:-translate-y-1 transition w-full max-w-[280px]"
              >
                <div className="w-20 h-20 bg-krem rounded-full p-1.5 ring-2 ring-buah mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/assets/logo/logo-pc.png"
                    alt={`Profil ${a.nama}`}
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-bold text-biru text-lg">{a.nama}</h3>
                <p className="text-biru font-semibold text-sm mb-4">{a.telp}</p>
                <a
                  href={`https://wa.me/${a.wa}?text=Halo%20${a.nama}%2C%20saya%20ingin%20bertanya%20tentang%20Pendidik%20Cendekia.`}
                  target="_blank"
                  className="block bg-buah text-white font-bold px-5 py-2.5 rounded-full hover:bg-biru transition text-xs"
                >
                  <i className="fab fa-whatsapp mr-1.5"></i>Chat {a.nama}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOK 3: KELUHAN / LAPORAN ===== */}
      <section id="keluhan-laporan" className="py-6 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              KELUHAN / LAPORAN
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Sampaikan Keluhan Anda
            </h2>
            <p className="text-gray-500 mt-3">
              Jika ada kendala atau pengalaman yang kurang menyenangkan,
              sampaikan kepada kami melalui saluran ini
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="bg-[#dbf3fa] rounded-3xl border border-[#16528F]/10 shadow-lg shadow-[#16528F]/5 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-biru mb-1">
              Form Keluhan / Laporan
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Isi form berikut, laporan Anda otomatis terkirim melalui WhatsApp
              Admin.
            </p>
            <form onSubmit={kirimKeluhan} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full border border-[#c5e9f6] bg-white rounded-xl px-4 py-3 text-biru placeholder-gray-400 focus:outline-none focus:border-buah transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Jenis Keluhan / Laporan
                </label>
                <select
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                  className="w-full border border-[#c5e9f6] bg-white rounded-xl px-4 py-3 text-biru focus:outline-none focus:border-buah transition"
                >
                  <option>Layanan &amp; Informasi Program</option>
                  <option>Administrasi &amp; Sertifikat</option>
                  <option>Pembayaran</option>
                  <option>Perilaku Admin</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Uraian Keluhan / Laporan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan kronologi atau uraian masalah Anda..."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full border border-[#c5e9f6] bg-white rounded-xl px-4 py-3 text-biru placeholder-gray-400 focus:outline-none focus:border-buah transition resize-none"
                ></textarea>
              </div>
              <p className="text-gray-500 text-xs text-center pb-1">
                Keluhan Anda kami tangani serius dan ditindaklanjuti oleh
                manajemen
              </p>
              <div className="flex justify-center -mb-8">
                <button
                  type="submit"
                  className="bg-buah text-white px-9 py-4 rounded-full font-bold shadow-xl shadow-[#8f3415]/30 hover:bg-[#e3491d] hover:-translate-y-0.5 transition inline-flex items-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Kirim Keluhan via
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CHANNEL LAINNYA ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              SALURAN LAIN
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Channel Lainnya
            </h2>
            <p className="text-gray-500 mt-3">
              Ikuti kami dan terhubung melalui media resmi Pendidik Cendekia
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:pendidikcendekia@gmail.com"
              className="bg-krem rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition block group"
            >
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru text-lg">Email</h3>
              <p className="text-gray-500 text-xs mt-1 break-all">
                pendidikcendekia@gmail.com
              </p>
              <p className="text-buah text-sm font-semibold mt-3">
                kirim email →
              </p>
            </a>
            <a
              href="https://instagram.com/pendidikcendekia"
              target="_blank"
              className="bg-krem rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition block group"
            >
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <i className="fab fa-instagram text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru text-lg">Instagram</h3>
              <p className="text-gray-500 text-xs mt-1">@pendidikcendekia</p>
              <p className="text-buah text-sm font-semibold mt-3">
                ikut kami →
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
