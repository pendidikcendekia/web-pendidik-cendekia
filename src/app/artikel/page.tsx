import Link from "next/link";
import ChannelSection from "@/components/ChannelSection";

export const metadata = {
  title: "Pendidik Cendekia - Artikel",
  description:
    "Artikel dan panduan praktis untuk guru. Tips mengajar, teknologi pendidik, dan pengembangan profesional berkelanjutan.",
  openGraph: {
    title: "Pendidik Cendekia - Artikel",
    description:
      "Artikel dan panduan praktis untuk guru. Tips mengajar dan teknologi pendidik.",
    url: "https://pendidikcendekia.vercel.app/artikel",
    type: "website",
    images: ["/assets/logo/logo-pc.png"],
  },
  alternates: {
    canonical: "https://pendidikcendekia.vercel.app/artikel",
  },
};

export default function ArtikelPage() {
  return (
    <>
      {/* ===== HERO ARTIKEL ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <i className="fas fa-newspaper mr-1"></i>ARTIKEL
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biru mb-3">
                Artikel
              </h1>
              <p className="text-buah font-semibold mb-4">
                Berbagi Wawasan, Menginspirasi Pendidik.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Pendidik Cendekia menyediakan wadah bagi tulisan-tulisan
                inspiratif dan praktis seputar pembelajaran digital. Guru maupun
                peserta dapat turut menulis dan berbagi karyanya, serta berita
                terkini pendidikan yang kami rangkum untuk Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#artikel-terbaru"
                  className="bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                >
                  Baca Artikel
                </Link>
                <a
                  href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20mempublikasikan%20artikel%20saya."
                  target="_blank"
                  className="border-2 border-buah text-buah font-bold px-8 py-3 rounded-full hover:bg-buah hover:text-white transition text-center"
                >
                  Publish Artikel
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-72 md:w-[26rem] md:h-[26rem] bg-krem rounded-full flex items-center justify-center">
                  <img
                    src="/assets/Elemen/Artikel-Elemen-1.webp"
                    alt="Ilustrasi Artikel Pendidik Cendekia"
                    className="w-60 h-60 md:w-[22rem] md:h-[22rem] object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="w-44 h-2 bg-buah rounded-full mt-6 shadow-md"></div>
                <div className="w-28 h-2 bg-buah/40 rounded-full mt-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HEADING ARTIKEL TERBARU ===== */}
      <section id="artikel-terbaru" className="pt-16 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            ARTIKEL TERBARU
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-biru">
            Artikel Terbaru
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Tulisan pilihan seputar pembelajaran digital dan pengembangan
            kompetensi guru.
          </p>
          <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
        </div>
      </section>

      {/* ===== DAFTAR ARTIKEL ===== */}
      <section className="pt-0 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* ARTIKEL 1 */}
            <article className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col-reverse md:flex-row">
              <div className="p-6 flex flex-col md:flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    Tutorial
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    26 Agu 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg md:text-xl leading-snug mb-1">
                  Panduan Membuat Multimedia Interaktif untuk Guru SD
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-2">
                  Ditulis oleh{" "}
                  <span className="font-semibold text-biru">
                    Tim Pendidik Cendekia
                  </span>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Langkah-langkah praktis menyusun media pembelajaran interaktif
                  yang mudah dipakai di kelas — mulai dari menentukan tujuan,
                  menyiapkan aset, hingga mengujinya bersama siswa.
                </p>
                <Link
                  href="/artikel/panduan-membuat-mpi-guru-sd"
                  className="mt-auto self-start bg-buah text-white font-bold px-5 py-2.5 rounded-full hover:bg-biru transition text-xs"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-arrow-right ml-1.5"></i>
                </Link>
              </div>
              <Link
                href="/artikel/panduan-membuat-mpi-guru-sd"
                className="block md:w-72 md:shrink-0 bg-krem p-3 md:p-4 flex items-center"
              >
                <img
                  src="/assets/article-covers/panduan-membuat-mpi.svg"
                  alt="Sampul Panduan Membuat MPI"
                  className="w-full h-40 md:h-52 object-cover rounded-xl shadow-xl"
                />
              </Link>
            </article>

            {/* ARTIKEL 2 */}
            <article className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col-reverse md:flex-row">
              <div className="p-6 flex flex-col md:flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    Tips
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    19 Agu 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg md:text-xl leading-snug mb-1">
                  5 Trik Menghidupkan Kelas dengan Gim Edukasi
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-2">
                  Ditulis oleh{" "}
                  <span className="font-semibold text-biru">
                    Tim Pendidik Cendekia
                  </span>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Cara sederhana memanfaatkan gim edukasi agar siswa lebih
                  antusias belajar di dalam kelas — lengkap dengan contoh yang
                  bisa langsung Anda coba.
                </p>
                <a
                  href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20membaca%20artikel%3A%205%20Trik%20Menghidupkan%20Kelas%20dengan%20Gim%20Edukasi."
                  target="_blank"
                  className="mt-auto self-start bg-buah text-white font-bold px-5 py-2.5 rounded-full hover:bg-biru transition text-xs"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-arrow-right ml-1.5"></i>
                </a>
              </div>
              <a
                href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20membaca%20artikel%3A%205%20Trik%20Menghidupkan%20Kelas%20dengan%20Gim%20Edukasi."
                target="_blank"
                className="block md:w-72 md:shrink-0 bg-krem p-3 md:p-4 flex items-center"
              >
                <img
                  src="/assets/article-covers/5-trik-gim-edukasi.svg"
                  alt="Sampul 5 Trik Gim Edukasi"
                  className="w-full h-40 md:h-52 object-cover rounded-xl shadow-xl"
                />
              </a>
            </article>

            {/* ARTIKEL 3 */}
            <article className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col-reverse md:flex-row">
              <div className="p-6 flex flex-col md:flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    Inspirasi
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    12 Agu 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg md:text-xl leading-snug mb-1">
                  Kisah Guru: dari Kelas Biasa Menjadi Kelas Digital
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-2">
                  Ditulis oleh{" "}
                  <span className="font-semibold text-biru">
                    Tim Pendidik Cendekia
                  </span>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Perjalanan seorang guru mengubah cara mengajarnya berkat
                  pelatihan di Pendidik Cendekia — dari yang awalnya ragu hingga
                  berhasil menghadirkan pembelajaran digital.
                </p>
                <a
                  href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20membaca%20artikel%3A%20Kisah%20Guru%3A%20dari%20Kelas%20Biasa%20Menjadi%20Kelas%20Digital."
                  target="_blank"
                  className="mt-auto self-start bg-buah text-white font-bold px-5 py-2.5 rounded-full hover:bg-biru transition text-xs"
                >
                  Baca Selengkapnya{" "}
                  <i className="fas fa-arrow-right ml-1.5"></i>
                </a>
              </div>
              <a
                href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20membaca%20artikel%3A%20Kisah%20Guru%3A%20dari%20Kelas%20Biasa%20Menjadi%20Kelas%20Digital."
                target="_blank"
                className="block md:w-72 md:shrink-0 bg-krem p-3 md:p-4 flex items-center"
              >
                <img
                  src="/assets/article-covers/kisah-guru-kelas-digital.svg"
                  alt="Sampul Kisah Guru"
                  className="w-full h-40 md:h-52 object-cover rounded-xl shadow-xl"
                />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CTA PUBLISH ARTIKEL ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#16528F] via-[#10385f] to-[#0b2d55] rounded-[2.5rem] px-6 py-14 md:py-16 text-center shadow-2xl shadow-[#0b2d55]/30">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071c35]/50 to-transparent"></div>
            </div>
            <div className="relative">
              <p className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <i className="fas fa-pen-nib mr-1"></i>PUBLISH ARTIKEL
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Mau Publish Artikel Anda?
              </h2>
              <div className="w-20 h-1 bg-buah mx-auto rounded-full mb-6"></div>
              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Pendidik Cendekia memfasilitasi Anda untuk menerbitkan artikel,
                tulisan, atau opini seputar pendidikan. Kirimkan artikel yang
                sudah jadi, atau konsultasikan rencana tulisan Anda dan biarkan
                kami mendampingi dari nol hingga siap terbit.
              </p>

              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <p className="text-white/90 font-semibold mb-2">
                    Sudah punya artikel?
                  </p>
                  <a
                    href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20mempublikasikan%20artikel%20saya."
                    target="_blank"
                    className="block bg-white text-[#0b2d55] px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#0b2d55]/40 hover:bg-krem transition"
                  >
                    <i className="fas fa-upload mr-2"></i>Publish Artikel
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/25"></div>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                    atau
                  </span>
                  <div className="h-px flex-1 bg-white/25"></div>
                </div>
                <div>
                  <p className="text-white/90 font-semibold mb-2">
                    Mau menulis artikel mulai dari nol?
                  </p>
                  <a
                    href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20menulis%20artikel%20mulai%20dari%20nol%2C%20mohon%20didampingi."
                    target="_blank"
                    className="block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0b2d55] transition"
                  >
                    <i className="fas fa-pen-nib mr-2"></i>Diskusi Menulis Artikel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHANNEL ===== */}
      <ChannelSection />
    </>
  );
}
