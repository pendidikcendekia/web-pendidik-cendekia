import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mitra, sesiPelatihan, type Mitra } from "@/data/pelatihan";
import MitraFormulir from "@/components/MitraFormulir";

export function generateStaticParams() {
  return mitra.map((m) => ({ slug: m.slug }));
}

function cariMitra(slug: string): Mitra | undefined {
  return mitra.find((m) => m.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = cariMitra(slug);
  if (!m) return { title: "Pelatihan" };
  const sesi = sesiPelatihan.find((s) => s.id === m.sesiId);
  if (!sesi) return { title: "Pelatihan" };

  const judul = `${sesi.tema} bersama ${m.nama} — ${sesi.hari}`;
  const deskripsi = `${sesi.deskripsi} Daftar sekarang bersama ${m.nama} (${m.jabatan}). ${sesi.format}, ${sesi.harga}, ${sesi.kuota}. ${m.penyajian}`;

  return {
    title: judul,
    description: deskripsi,
    alternates: { canonical: `/mitra/${m.slug}` },
    openGraph: {
      title: judul,
      description: deskripsi,
      type: "website",
      images: [sesi.pamflet],
    },
  };
}

export default async function HalamanMitra({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = cariMitra(slug);
  if (!m) notFound();

  const sesi = sesiPelatihan.find((s) => s.id === m.sesiId);
  if (!sesi) notFound();

  const info = [
    { label: "Tanggal", nilai: sesi.hari, ikon: "fa-calendar-day" },
    { label: "Waktu", nilai: sesi.waktu, ikon: "fa-clock" },
    { label: "Format", nilai: sesi.format, ikon: "fa-video" },
    { label: "Untuk", nilai: sesi.siapa, ikon: "fa-users" },
  ];

  return (
    <>
      {/* ===== HERO: PELATIHAN PENGEMBANGAN KOMPETENSI ===== */}
      <section className="hero-orange relative overflow-hidden text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <i className="fas fa-calendar-check mr-1"></i>PROGRAM PELATIHAN
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Pelatihan Pengembangan Kompetensi
          </h1>
          <p className="text-white/95 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {sesi.deskripsi}
          </p>
          <a
            href="#daftar-pelatihan"
            className="mt-8 inline-block bg-white text-[#f75624] font-bold px-8 py-3 rounded-full hover:bg-[#16528F] hover:text-white transition"
          >
            Lihat Detail Pelatihan
          </a>
        </div>
      </section>

      {/* ===== 1. PELATIHAN TERDEKAT ===== */}
      <section
        id="daftar-pelatihan"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-krem">
          <div className="grid md:grid-cols-2">
            <div className="bg-krem p-3 flex items-center justify-center">
              <img
                src={sesi.pamflet}
                alt={`Pamflet ${sesi.tema}`}
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-4">
                PELATIHAN TERDEKAT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-biru mb-3">
                {sesi.tema}
              </h2>
              <p className="text-gray-600 mb-6">{sesi.tentang}</p>
              <ul className="space-y-2 mb-6 text-biru">
                {info.map((i) => (
                  <li key={i.label}>
                    <i className={`fas ${i.ikon} text-buah w-6`}></i>{" "}
                    {i.nilai}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#formulir"
                  className="bg-buah text-white font-bold px-8 py-3 rounded-full hover:bg-biru transition text-center"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="#formulir"
                  className="bg-transparent border-2 border-buah text-buah font-bold px-8 py-3 rounded-full hover:bg-buah hover:text-white transition text-center"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. FORMULIR & DETAIL (WA ke nomor admin halaman ini) ===== */}
      <MitraFormulir m={m} sesi={sesi} />

      {/* ===== 3. CONTOH SERTIFIKAT ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                {[
                  "Cek keabsahan cukup dengan nama yang terdaftar",
                  "Hasil pengecekan langsung tertera di halaman",
                  "Dikeluarkan resmi oleh PT Cipta Arah Cendekia",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center text-xs">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-600 text-sm">{t}</span>
                  </li>
                ))}
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
                src={sesi.fotoSertifikat}
                alt="Contoh Sertifikat Kegiatan Pendidik Cendekia"
                loading="lazy"
                className="w-full max-w-sm h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. AKSES FASILITAS (BELAJAR MANDIRI) ===== */}
      <section className="py-6 md:py-12 bg-krem">
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
                  {[
                    { i: "fa-box-open", t: "Akses materi & rekaman" },
                    { i: "fa-certificate", t: "E-Sertifikat Pelatihan" },
                    { i: "fa-chalkboard-user", t: "Pendampingan mentor" },
                    { i: "fa-users", t: "Grup diskusi peserta" },
                  ].map((f) => (
                    <div key={f.t} className="flex items-center gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                        <i className={`fas ${f.i}`}></i>
                      </span>
                      <span className="text-gray-700 text-sm">{f.t}</span>
                    </div>
                  ))}
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

      {/* ===== 5. PENYELENGGARA + TESTIMONI ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Penyelenggara dan Kesan Peserta
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Pelatihan ini ditangani oleh {m.nama}
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="bg-biru text-white rounded-3xl p-6 md:p-10 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <img
                src={m.foto}
                alt={m.nama}
                loading="lazy"
                className="w-28 h-28 rounded-full object-cover border-4 border-white/25 shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold">{m.nama}</h3>
                <p className="text-white/70 text-sm mt-1">{m.jabatan}</p>
                <p className="text-white/85 text-sm mt-3 leading-relaxed">
                  {m.penyajian}
                </p>
              </div>
            </div>
          </div>

          {m.testimoni.length > 0 && (
            <>
              <h3 className="text-xl font-bold text-biru text-center mb-6">
                Kata Mereka yang Sudah Daftar
              </h3>
              <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {m.testimoni.map((t) => (
                  <figure
                    key={t.nama}
                    className="bg-krem rounded-2xl p-6 shadow-sm"
                  >
                    <i
                      className="fas fa-quote-left text-buah/30 text-2xl"
                      aria-hidden="true"
                    ></i>
                    <blockquote className="text-gray-700 mt-2 leading-relaxed">
                      {t.teks}
                    </blockquote>
                    <figcaption className="text-sm font-bold text-biru mt-4">
                      {t.nama}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ===== AJAKAN MENDAFTAR ===== */}
      <section className="py-10 md:py-14 bg-buah text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Kuota {sesi.kuota} &middot; {sesi.hari}
          </h2>
          <p className="text-white/90 mt-2">
            Jangan sampai kehabisan tempat. Daftar sekarang juga bersama{" "}
            {m.nama}.
          </p>
          <a
            href="#formulir"
            className="mt-6 inline-block bg-white text-[#f75624] font-bold px-8 py-3 rounded-full hover:bg-[#16528F] hover:text-white transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
