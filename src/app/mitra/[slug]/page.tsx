import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { mitra, sesiPelatihan, type Mitra } from "@/data/pelatihan";
import MitraCta from "@/components/MitraCta";

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
    { label: "Tanggal", nilai: sesi.hari },
    { label: "Waktu", nilai: sesi.waktu },
    { label: "Format", nilai: sesi.format },
    { label: "Kuota", nilai: sesi.kuota },
  ];

  return (
    <>
      {/* ---- HERO ---- */}
      <section className="bg-krem py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full">
                {sesi.hari}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-biru mt-4 leading-tight">
                {sesi.tema}
              </h1>
              <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
                {sesi.deskripsi}
              </p>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-5">
                <span className="text-3xl font-extrabold text-buah">
                  {sesi.harga}
                </span>
                <span className="text-sm text-gray-600">
                  / peserta &middot; {sesi.kuota}
                </span>
              </div>

              <div className="mt-6">
                <MitraCta
                  slug={m.slug}
                  nama={m.nama}
                  form={m.form}
                  wa={m.wa}
                  pesan="Pendaftaran pelatihan"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <Image
                src={sesi.pamflet}
                alt={`Pamflet ${sesi.tema}`}
                width={606}
                height={800}
                priority
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- INFORMASI ---- */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {info.map((i) => (
              <div
                key={i.label}
                className="bg-krem rounded-2xl p-5 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-buah">
                  {i.label}
                </p>
                <p className="text-sm font-semibold text-biru mt-2">{i.nilai}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-10">
            <div className="md:col-span-3 bg-white rounded-2xl border border-krem p-6 md:p-8">
              <h2 className="text-2xl font-bold text-biru">Yang Akan Dipelajari</h2>
              <ul className="mt-4 space-y-3">
                {sesi.materi.map((materi) => (
                  <li key={materi} className="flex gap-3 text-gray-700">
                    <i
                      className="fa-solid fa-circle-check text-buah mt-1 shrink-0"
                      aria-hidden="true"
                    ></i>
                    <span>{materi}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-biru text-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold">Dibimbing oleh</h2>
              <div className="flex items-center gap-4 mt-5">
                <Image
                  src={m.foto}
                  alt={m.nama}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/25 shrink-0"
                />
                <div>
                  <p className="font-bold text-lg leading-tight">{m.nama}</p>
                  <p className="text-sm text-white/70">{m.jabatan}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 mt-4 leading-relaxed">
                {m.penyajian}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- TESTIMONI ---- */}
      {m.testimoni.length > 0 && (
        <section className="py-8 md:py-12 bg-krem">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-biru">
                Kata Mereka yang Sudah Daftar
              </h2>
              <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {m.testimoni.map((t) => (
                <figure
                  key={t.nama}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <i
                    className="fa-solid fa-quote-left text-buah/30 text-2xl"
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
          </div>
        </section>
      )}

      {/* ---- CTA BAWAH ---- */}
      <section className="py-10 md:py-14 bg-buah text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Kuota {sesi.kuota} &middot; {sesi.hari}
          </h2>
          <p className="text-white/90 mt-2">
            Jangan sampai kehabisan tempat. Daftar sekarang juga bersama{" "}
            {m.nama}.
          </p>
          <div className="mt-6 flex justify-center">
            <MitraCta
              slug={m.slug}
              nama={m.nama}
              form={m.form}
              wa={m.wa}
              pesan="Pendaftaran pelatihan"
              varian="bawah"
            />
          </div>
        </div>
      </section>
    </>
  );
}
