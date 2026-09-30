"use client";

import { useEffect, useState } from "react";
import type { Mitra, SesiPelatihan } from "@/data/pelatihan";
import { setAdminAktif } from "@/components/WhatsAppFloat";

type Props = {
  m: Mitra;
  sesi: SesiPelatihan;
};

function lacak(slug: string, aksi: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  gtag?.("event", aksi, {
    event_category: "pelatihan",
    event_label: slug,
    event_value: 1,
  });
}

export default function MitraFormulir({ m, sesi }: Props) {
  const [terkirim, setTerkirim] = useState(false);
  const [buka, setBuka] = useState<number | null>(0);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [wa, setWa] = useState("");
  const [instansi, setInstansi] = useState("");
  const [provinsi, setProvinsi] = useState("");

  useEffect(() => {
    setAdminAktif(
      m.wa,
      `Halo ${m.nama}, saya ingin bertanya tentang ${sesi.tema}.`
    );
  }, [m.wa, m.nama, sesi.tema]);

  function kirim(e: React.FormEvent) {
    e.preventDefault();
    lacak(m.slug, "kirim_formulir");

    const pesan = encodeURIComponent(
      `Halo ${m.nama}, saya daftar ${sesi.tema}.\n` +
        `Nama: ${nama}\n` +
        `Email: ${email}\n` +
        `WA: ${wa}\n` +
        `Instansi: ${instansi}\n` +
        `Asal Provinsi: ${provinsi}\n\n` +
        `Mohon info lebih lanjut untuk pembayaran dan link kelas.`,
    );

    window.open(`https://wa.me/${m.wa}?text=${pesan}`, "_blank");
    setTerkirim(true);
  }

  function ulang() {
    setTerkirim(false);
    setNama("");
    setEmail("");
    setWa("");
    setInstansi("");
    setProvinsi("");
  }

  const isiKelas = "w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-buah";

  const accordions = [
    {
      judul: "Tentang Pelatihan",
      ikon: "fa-book-open",
      isi: <p>{sesi.tentang}</p>,
    },
    {
      judul: "Apa yang Akan Dipelajari",
      ikon: "fa-graduation-cap",
      isi: (
        <ul className="space-y-2">
          {sesi.materi.map((t) => (
            <li key={t}>
              <i className="fas fa-check-circle text-buah mr-2"></i>
              {t}
            </li>
          ))}
        </ul>
      ),
    },
    {
      judul: "Fasilitas",
      ikon: "fa-gift",
      isi: (
        <ul className="space-y-3">
          {sesi.fasilitas.map((f) => (
            <li key={f.judul} className="flex items-start gap-3">
              <span className="shrink-0 w-9 h-9 rounded-full bg-white ring-2 ring-buah text-buah flex items-center justify-center">
                <i className={`fas ${f.ikon}`}></i>
              </span>
              <span className="text-gray-700">
                <strong className="text-biru">{f.judul}</strong> {f.teks}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="formulir" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            FORMULIR &amp; DETAIL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-biru">
            Formulir dan Detail Kegiatan
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Informasi lengkap pelatihan dan pendaftaran bersama {m.nama}
          </p>
          <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* FORMULIR — WA tujuan = nomor admin halaman ini */}
          <div className="bg-krem rounded-3xl border border-buah/20 p-6 md:p-8">
            <div className="bg-biru text-white rounded-2xl px-5 py-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold">
                <i className="fas fa-pen-to-square mr-2"></i>Pendaftaran
                Pelatihan
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Isi data di bawah, klik Kirim. Data otomatis terkirim ke
                WhatsApp {m.nama} untuk konfirmasi pembayaran.
              </p>
            </div>

            {terkirim ? (
              <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-green-800 font-bold mb-2">
                  Terima kasih!
                </h3>
                <p className="text-green-700 text-sm">
                  Pendaftaran Anda telah dikirim ke WhatsApp {m.nama}.
                </p>
                <button
                  onClick={ulang}
                  className="inline-block mt-4 text-sm font-semibold text-green-700 underline hover:text-green-900"
                >
                  Edit atau Daftarkan Orang Lain
                </button>
              </div>
            ) : (
              <form onSubmit={kirim}>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  aria-label="Nama lengkap"
                  className={isiKelas}
                />
                <input
                  type="email"
                  placeholder="Email aktif"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email aktif"
                  className={isiKelas}
                />
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp (contoh: 62812xxxx)"
                  required
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  aria-label="Nomor WhatsApp"
                  className={isiKelas}
                />
                <input
                  type="text"
                  placeholder="Instansi / Sekolah"
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  aria-label="Instansi atau sekolah"
                  className={isiKelas}
                />
                <input
                  type="text"
                  placeholder="Asal Provinsi"
                  value={provinsi}
                  onChange={(e) => setProvinsi(e.target.value)}
                  aria-label="Asal provinsi"
                  className={`${isiKelas} mb-4`}
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

          {/* DETAIL */}
          <div className="space-y-4">
            {accordions.map((a, i) => (
              <div
                key={a.judul}
                className="bg-white rounded-2xl border border-krem overflow-hidden shadow"
              >
                <button
                  onClick={() => setBuka(buka === i ? null : i)}
                  className="flex items-center justify-between gap-3 w-full bg-buah text-white font-semibold px-5 py-4 text-left hover:bg-[#e3491d] transition"
                >
                  <span>
                    <i className={`fas ${a.ikon} mr-2`}></i>
                    {a.judul}
                  </span>
                  <i
                    className={`fas fa-chevron-down transition-transform ${buka === i ? "rotate-180" : ""}`}
                  ></i>
                </button>
                <div
                  className={`${buka === i ? "" : "hidden"} px-5 py-4 text-gray-600 leading-relaxed`}
                >
                  {a.isi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
