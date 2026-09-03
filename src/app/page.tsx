import type { Metadata } from "next";
import Link from "next/link";
import ChannelSection from "@/components/ChannelSection";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Pendidik Cendekia - Platform pengembangan kompetensi guru Indonesia. Webinar, workshop, dan mentoring bersertifikat untuk pendidik profesional.",
  openGraph: {
    title: "Pendidik Cendekia - Beranda",
    description:
      "Platform pengembangan kompetensi guru Indonesia. Webinar, workshop, dan mentoring bersertifikat.",
    url: "https://pendidikcendekia.vercel.app/",
  },
};

export default function Beranda() {
  return (
    <>
      {/* HERO */}
      <section className="hero-orange relative overflow-hidden text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
                🎓 PT Cipta Arah Cendekia
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Digitalisasi Pembelajaran
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
                Wadah pengembangan profesional guru di era digital melalui
                webinar, workshop, dan mentoring yang inspiratif dan interaktif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/program/pelatihan-terbaru"
                  className="bg-white text-buah px-8 py-4 rounded-full font-bold hover:bg-krem transition text-center"
                >
                  Daftar Sekarang →
                </Link>
                <Link
                  href="/program/pelatihan-terbaru"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-buah transition text-center"
                >
                  Lihat Jadwal
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/flyer/contoh-pamflet-2.webp"
                alt="Flyer Pendidik Cendekia"
                className="w-full max-w-xs h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              KEUNGGULAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Mengapa Memilih Pendidik Cendekia
            </h2>
            <p className="text-gray-500 mt-3">
              Kelebihan yang kami berikan untuk pengembangan Anda
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-krem hover:bg-orange-100 transition">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-biru text-lg mb-2">Bersertifikat</h3>
              <p className="text-gray-500 text-sm">
                Setiap pelatihan dilengkapi sertifikat resmi yang dapat
                divalidasi.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-krem hover:bg-orange-100 transition">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-biru text-lg mb-2">Praktis</h3>
              <p className="text-gray-500 text-sm">
                Materi langsung bisa dipraktikkan dalam kegiatan belajar
                mengajar.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-krem hover:bg-orange-100 transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-biru text-lg mb-2">Mentoring</h3>
              <p className="text-gray-500 text-sm">
                Pendampingan personal via WhatsApp untuk setiap peserta.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-krem hover:bg-orange-100 transition">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Mengikuti Zaman
              </h3>
              <p className="text-gray-500 text-sm">
                Topik terkini: AI, kurikulum merdeka, dan pembelajaran digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PELATIHAN TERBARU */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              PELATIHAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Pelatihan Terbaru
            </h2>
            <p className="text-gray-500 mt-3">
              Daftar sekarang sebelum kuota habis!
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pelatihan 1 */}
            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="bg-krem p-3">
                <img
                  src="/assets/flyer/contoh-pamflet-2.webp"
                  alt="Flyer Webinar Optimalisasi KKA"
                  className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    WEBINAR
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    4 JP
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg mb-6">
                  Optimalisasi KKA untuk Pembelajaran Koding dan AI
                </h3>
                <p className="text-gray-500 text-xs mb-3">
                  📅 30 Agustus 2026 | 🕐 19:30 WIB
                </p>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-buah font-bold">Hubungi Admin</span>
                  <a
                    href="https://wa.me/628991945123?text=Halo,%20saya%20ingin%20daftar%20Webinar%20Optimalisasi%20KKA"
                    target="_blank"
                    className="bg-buah text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-biru transition"
                  >
                    Daftar via WhatsApp →
                  </a>
                </div>
              </div>
            </div>
            {/* Pelatihan 2 */}
            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="bg-krem p-3">
                <img
                  src="/assets/flyer/contoh-pamflet-3.webp"
                  alt="Flyer Workshop Deep Learning"
                  className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    WORKSHOP
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    12 JP
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg mb-6">
                  Strategi Pembelajaran Mendalam Berbasis Deep Learning
                </h3>
                <p className="text-gray-500 text-xs mb-3">
                  📅 6 September 2026 | 🕐 09:00-12:00 WIB
                </p>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-buah font-bold">Hubungi Admin</span>
                  <a
                    href="https://wa.me/628991945123?text=Halo,%20saya%20ingin%20daftar%20Workshop%20Deep%20Learning"
                    target="_blank"
                    className="bg-buah text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-biru transition"
                  >
                    Daftar via WhatsApp →
                  </a>
                </div>
              </div>
            </div>
            {/* Pelatihan 3 */}
            <div className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="bg-krem p-3">
                <img
                  src="/assets/flyer/contoh-pamflet-1.webp"
                  alt="Flyer Optimalisasi Ruang Murid"
                  className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    WEBINAR
                  </span>
                  <span className="inline-block border-2 border-buah text-buah text-xs font-bold px-3 py-0.5 rounded-full">
                    Sep 2026
                  </span>
                </div>
                <h3 className="font-bold text-biru text-lg mb-6">
                  Optimalisasi Ruang Murid dalam Pembelajaran Digital
                </h3>
                <p className="text-gray-500 text-xs mb-3">
                  📅 Sabtu, 5 September 2026 | 🕐 09.00-11.30 WIB
                </p>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-buah font-bold">Hubungi Admin</span>
                  <a
                    href="https://wa.me/628991945123?text=Halo,%20saya%20ingin%20daftar%20Pelatihan%20Optimalisasi%20Ruang%20Murid%20dalam%20Pembelajaran%20Digital"
                    target="_blank"
                    className="bg-buah text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-biru transition"
                  >
                    Daftar via WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/program/pelatihan-terbaru"
              className="inline-block border-2 border-buah text-buah px-6 py-3 rounded-full font-semibold hover:bg-buah hover:text-white transition"
            >
              Lihat Semua Jadwal →
            </Link>
          </div>
        </div>
      </section>

      {/* KARYA PESERTA */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              KARYA PESERTA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Karya Peserta
            </h2>
            <p className="text-gray-500 mt-3">
              Karya terbaik dari para peserta pelatihan
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-krem rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex items-center max-w-3xl mx-auto w-full">
              <img
                src="/assets/karya/Sampul-MPI-1.webp"
                alt="Tarik Tambang Matematika"
                loading="lazy"
                className="w-40 h-40 object-cover shrink-0"
              />
              <div className="p-4 text-left">
                <h3 className="font-bold text-biru text-lg">
                  Tarik Tambang Matematika
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  Tipe:{" "}
                  <span className="font-medium text-buah">
                    Gim Pembelajaran
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Disusun oleh:{" "}
                  <span className="font-medium text-biru">Ibu Rina</span> (SD
                  Inpres Soasio)
                </p>
              </div>
            </div>
            <div className="bg-krem rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex items-center max-w-3xl mx-auto w-full">
              <img
                src="/assets/karya/Sampul-MPI-2.webp"
                alt="Adu Cepat Isi Botol"
                loading="lazy"
                className="w-40 h-40 object-cover shrink-0"
              />
              <div className="p-4 text-left">
                <h3 className="font-bold text-biru text-lg">
                  Adu Cepat Isi Botol
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  Tipe:{" "}
                  <span className="font-medium text-buah">
                    Gim Pembelajaran
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Materi:{" "}
                  <span className="font-medium text-biru">
                    Perubahan Iklim (IPAS SD)
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Disusun oleh:{" "}
                  <span className="font-medium text-biru">Ibu Sari</span> (SDN
                  Gamping)
                </p>
              </div>
            </div>
            <div className="bg-krem rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex items-center max-w-3xl mx-auto w-full">
              <img
                src="/assets/karya/Sampul-MPI-3.webp"
                alt="MPI Peluang"
                loading="lazy"
                className="w-40 h-40 object-cover shrink-0"
              />
              <div className="p-4 text-left">
                <h3 className="font-bold text-biru text-lg">MPI Peluang</h3>
                <p className="text-gray-500 text-xs mt-1">
                  Tipe:{" "}
                  <span className="font-medium text-buah">
                    Multimedia Interaktif
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Materi:{" "}
                  <span className="font-medium text-biru">
                    Analisis Data dan Peluang (Matematika SD)
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Disusun oleh:{" "}
                  <span className="font-medium text-biru">Bapak Dedi</span>{" "}
                  (SMPN 2 Bantul)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              TESTIMONI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Apa Kata Mereka
            </h2>
            <p className="text-gray-500 mt-3">Testimoni peserta pelatihan</p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-krem p-6 rounded-2xl">
              <p className="text-buah mb-3">★★★★★</p>
              <p className="text-gray-700 italic mb-4">
                &quot;Materinya sangat praktis dan langsung bisa diterapkan di
                kelas.&quot;
              </p>
              <p className="font-semibold text-biru">— Guru SD, Yogyakarta</p>
            </div>
            <div className="bg-krem p-6 rounded-2xl">
              <p className="text-buah mb-3">★★★★★</p>
              <p className="text-gray-700 italic mb-4">
                &quot;Mentoringnya luar biasa! Admin selalu fast response dan
                membantu.&quot;
              </p>
              <p className="font-semibold text-biru">
                — Guru SMP, Surabaya
              </p>
            </div>
            <div className="bg-krem p-6 rounded-2xl">
              <p className="text-buah mb-3">★★★★★</p>
              <p className="text-gray-700 italic mb-4">
                &quot;Sertifikatnya resmi dan langsung bisa dipakai untuk
                kenaikan pangkat.&quot;
              </p>
              <p className="font-semibold text-biru">— Guru SMA, Jakarta</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPINTAS TENTANG */}
      <section className="py-6 md:py-12 bg-buah text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sepintas Tentang Pendidik Cendekia
          </h2>
          <p className="text-white/95 mb-8 leading-relaxed">
            Pendidik Cendekia adalah unit dari PT Cipta Arah Cendekia yang fokus
            pada pengembangan kompetensi guru. Kami menghadirkan ekosistem
            pengembangan diri dengan semangat{" "}
            <span className="font-semibold underline">
              Belajar - Bertumbuh - Berdampak
            </span>
            .
          </p>
          <Link
            href="/tentang"
            className="bg-white text-buah px-8 py-4 rounded-full font-bold hover:bg-krem transition"
          >
            Kenali Kami Lebih Dekat →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-biru mb-4">
            Jadi Tunggu Apa Lagi?
          </h2>
          <p className="text-gray-500 mb-8">
            Daftar pelatihan sekarang dan kembangkan kompetensi Anda bersama
            Pendidik Cendekia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/628991945123"
              target="_blank"
              className="bg-buah text-white px-8 py-4 rounded-full font-bold hover:bg-biru transition text-center"
            >
              Daftar Sekarang
            </a>
            <Link
              href="/program/pelatihan-terbaru"
              className="border-2 border-buah text-buah px-8 py-4 rounded-full font-bold hover:bg-buah hover:text-white transition text-center"
            >
              Lihat Jadwal
            </Link>
          </div>
        </div>
      </section>

      <ChannelSection />
    </>
  );
}
