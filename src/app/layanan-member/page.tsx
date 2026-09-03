"use client";

import { useState, useRef } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbx9lewD5QbzG4CF6-3K3tFxh80c5dA7QVE0BuKPQW9J6-GXDbIt-9o53jFfm24FSq1z/exec";

interface Pelatihan {
  topik: string;
  tanggal: string;
  nomor: string;
  linkSertifikat: string;
  gdrive: string;
  youtube: string;
}

interface Peserta {
  nama: string;
  asalInstansi: string;
  email: string;
  pelatihan: Pelatihan[];
}

function normalisasiPeserta(p: Record<string, unknown>): Peserta {
  const rawPelatihan = Array.isArray(p.pelatihan) ? p.pelatihan : [];
  const pelatihan: Pelatihan[] = rawPelatihan.map(
    (r: Record<string, unknown>) => ({
      topik: (r.namaPelatihan as string) || (r.topik as string) || "Pelatihan",
      tanggal: (r.tanggal as string) || "",
      nomor: (r.nomorSertifikat as string) || (r.nomor as string) || "",
      linkSertifikat: (r.linkSertifikat as string) || "",
      gdrive:
        (r.linkFasilitas as string) ||
        (r.linkMateri as string) ||
        (r.gdrive as string) ||
        "",
      youtube: (r.linkRekaman as string) || (r.youtube as string) || "",
    })
  );
  return {
    nama: (p.nama as string) || "?",
    asalInstansi: (p.asalInstansi as string) || "",
    email: (p.email as string) || "",
    pelatihan,
  };
}

export default function LayananMemberPage() {
  const [kataKunci, setKataKunci] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [found, setFound] = useState(false);
  const [daftarPeserta, setDaftarPeserta] = useState<Peserta[]>([]);
  const [keterangan, setKeterangan] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function validasiSertifikat(e: React.FormEvent) {
    e.preventDefault();
    const kw = kataKunci.trim().toLowerCase();
    if (!kw) {
      setShowResults(true);
      setFound(false);
      setDaftarPeserta([]);
      return;
    }

    setLoading(true);
    setShowResults(false);

    const isEmail = kw.includes("@");
    let result: Peserta[] = [];

    if (API_URL) {
      abortRef.current = new AbortController();
      try {
        const param = isEmail ? "email" : "nama";
        const res = await fetch(
          API_URL + "?" + param + "=" + encodeURIComponent(kw),
          { signal: abortRef.current.signal }
        );
        const json = await res.json();
        result = (json.data || [])
          .filter((p: Record<string, unknown>) => {
            const pel = Array.isArray(p.pelatihan) ? p.pelatihan : [];
            return pel.length > 0;
          })
          .map(normalisasiPeserta);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        result = [];
      }
    }

    setLoading(false);
    setShowResults(true);
    setFound(result.length > 0);
    setDaftarPeserta(result);
    setKeterangan(
      result.length > 1
        ? `Ditemukan ${result.length} peserta dengan nama serupa. Periksa asal instansi untuk memastikan.`
        : ""
    );

    setTimeout(() => {
      document.getElementById("hasil")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function tutupLoading() {
    abortRef.current?.abort();
    setLoading(false);
  }

  return (
    <>
      {/* ===== HERO 1 ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-safir relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#0b2d55]/30 px-6 py-14 md:py-16 text-center text-white">
            <div className="relative">
              <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <i className="fas fa-certificate mr-1"></i>ARSIP PESERTA
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                Validasi &amp; Arsip Pelatihan
              </h1>
              <p className="text-[#ffb38c] font-semibold mb-5">
                Sertifikat, Fasilitas, dan Rekaman dalam Satu Tempat.
              </p>
              <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                Validasi keabsahan sertifikat serta akses kembali materi dan
                fasilitas pelatihan yang telah Anda ikuti — semuanya tersimpan
                rapi dalam satu arsip.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="#form-validasi"
                  className="bg-white text-[#0f3d6d] px-8 py-4 rounded-full font-bold shadow-lg shadow-[#0b2d55]/40 hover:bg-krem transition text-center"
                >
                  Cek Sertifikat &amp; Arsip Anda
                </a>
                <a
                  href="#belajar-mandiri"
                  className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#0f3d6d] transition text-center"
                >
                  Belum Punya Sertifikat?
                </a>
              </div>
              <p className="text-white/70 text-sm mt-6">
                <i className="fas fa-circle-check mr-1"></i>Gratis &amp; tanpa
                login · Belajar Bertumbuh Berdampak
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM VALIDASI ===== */}
      <section id="form-validasi" className="pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              CEK DATA ANDA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Masukkan Data Peserta
            </h2>
            <p className="text-gray-500 mt-3">
              Isi nama atau email yang digunakan saat mendaftar pelatihan
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <form
            onSubmit={validasiSertifikat}
            className="bg-[#dbf3fa] rounded-3xl border border-[#16528F]/10 shadow-lg shadow-[#16528F]/5 p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-1">
                Cek Sertifikat
              </label>
              <input
                type="text"
                placeholder="Masukkan nama atau email"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                className="w-full border border-[#c5e9f6] bg-white rounded-xl px-4 py-3 text-biru placeholder-gray-400 focus:outline-none focus:border-buah transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-buah text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-[#8f3415]/30 hover:bg-[#e3491d] transition"
            >
              <i className="fas fa-magnifying-glass mr-2"></i>Validasi
              Sertifikat
            </button>
            <p className="text-gray-500 text-xs text-center">
              Masukkan nama atau email yang digunakan saat mendaftar pelatihan.
            </p>
          </form>
        </div>
      </section>

      {/* ===== LOADING OVERLAY ===== */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-white rounded-3xl px-8 py-10 flex flex-col items-center gap-4 shadow-2xl relative">
            <button
              onClick={tutupLoading}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 transition"
            >
              <i className="fas fa-xmark text-sm"></i>
            </button>
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-buah border-t-transparent animate-spin"></div>
            </div>
            <p className="text-biru font-bold text-lg">Mencari data Anda...</p>
            <p className="text-gray-400 text-sm text-center">
              Mohon tunggu sebentar
            </p>
          </div>
        </div>
      )}

      {/* ===== HASIL VALIDASI ===== */}
      {showResults && (
        <section id="hasil" className="pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {found ? (
              <>
                {daftarPeserta.map((peserta, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl border border-krem shadow-sm overflow-hidden mb-6"
                  >
                    <div className="flex items-center gap-4 p-6 md:p-8 bg-[#dbf3fa] flex-wrap">
                      <div className="w-16 h-16 rounded-full bg-white ring-4 ring-[#16528F] flex items-center justify-center text-2xl font-extrabold text-[#16528F]">
                        {(peserta.nama || "?").charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-biru">
                          {peserta.nama}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {peserta.asalInstansi}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {peserta.email}
                        </p>
                      </div>
                      <div className="text-center">
                        <span className="inline-block bg-[#16528F] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          TERVERIFIKASI
                        </span>
                        <p className="text-xs text-biru font-semibold mt-2">
                          <i className="fas fa-folder-open mr-1"></i>
                          {peserta.pelatihan.length} Pelatihan
                        </p>
                      </div>
                    </div>

                    <div className="text-center pt-6">
                      <h4 className="text-lg font-bold text-biru">
                        Riwayat Pelatihan
                      </h4>
                      <div className="w-16 h-1 bg-buah mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                      {peserta.pelatihan.map((p, pi) => (
                        <div
                          key={pi}
                          className="bg-[#fbfbfb] rounded-2xl border border-krem p-5 flex flex-col gap-4"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#dbf3fa] rounded-full flex items-center justify-center text-[#16528F] shrink-0">
                              <i className="fas fa-users-viewfinder text-lg"></i>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-biru leading-snug">
                                {p.topik}
                              </h5>
                              <p className="text-gray-500 text-xs mt-1">
                                <i className="fas fa-calendar-day mr-1"></i>
                                {p.tanggal}
                                {p.nomor && (
                                  <>
                                    <span className="mx-2 text-gray-300">
                                      |
                                    </span>
                                    <span className="font-semibold text-biru">
                                      No. Sertifikat: {p.nomor}
                                    </span>
                                  </>
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2.5">
                            {p.linkSertifikat ? (
                              <a
                                href={p.linkSertifikat}
                                target="_blank"
                                className="bg-buah text-white font-bold px-5 py-2.5 rounded-full hover:bg-biru transition text-xs text-center"
                              >
                                <i className="fas fa-download mr-1.5"></i>
                                Sertifikat
                              </a>
                            ) : (
                              <button
                                onClick={() =>
                                  alert(
                                    `Sertifikat ${p.nomor} segera hadir.`
                                  )
                                }
                                className="bg-buah text-white font-bold px-5 py-2.5 rounded-full hover:bg-biru transition text-xs text-center"
                              >
                                <i className="fas fa-download mr-1.5"></i>
                                Sertifikat
                              </button>
                            )}
                            <a
                              href={p.gdrive}
                              target="_blank"
                              className="bg-white border-2 border-buah text-buah font-bold px-5 py-2 rounded-full hover:bg-buah hover:text-white transition text-xs text-center"
                            >
                              <i className="fas fa-folder-open mr-1.5"></i>
                              Fasilitas
                            </a>
                            <a
                              href={p.youtube}
                              target="_blank"
                              className="bg-white border-2 border-[#16528F] text-[#16528F] font-bold px-5 py-2 rounded-full hover:bg-[#16528F] hover:text-white transition text-xs text-center"
                            >
                              <i className="fas fa-play mr-1.5"></i>Rekaman
                              Kegiatan
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {keterangan && (
                  <p className="text-center text-xs text-gray-400 mt-4">
                    {keterangan}
                  </p>
                )}
              </>
            ) : (
              <div className="bg-krem rounded-3xl border border-krem p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-circle-question text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-biru">
                  Data Tidak Ditemukan
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl mx-auto leading-relaxed">
                  Hasil validasi tidak menemukan data Anda. Pastikan nama atau
                  email yang Anda masukkan sesuai dengan data saat pendaftaran
                  pelatihan.
                </p>
                <a
                  href="#belajar-mandiri"
                  className="mt-6 inline-block bg-buah text-white font-bold px-7 py-3.5 rounded-full hover:bg-biru transition"
                >
                  Lihat Penawaran Belajar Mandiri{" "}
                  <i className="fas fa-arrow-down ml-1.5"></i>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== PENAWARAN: BELAJAR MANDIRI & PELATIHAN ===== */}
      <section id="belajar-mandiri" className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              PENAWARAN KHUSUS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Belum Punya Sertifikat?
            </h2>
            <p className="text-gray-500 mt-3">
              Mulai dari sini untuk memperoleh sertifikat, materi, dan rekaman
              resmi Pendidik Cendekia
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-krem shadow-sm p-8 text-center hover:shadow-xl hover:-translate-y-1 transition flex flex-col">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru text-lg">Belajar Mandiri</h3>
              <p className="text-gray-500 text-sm mt-2 mb-6 leading-relaxed flex-1">
                Belajar sesuai ritme Anda tanpa terikat jadwal. Selesaikan materi
                pilihan, lalu peroleh sertifikat resmi Pendidik Cendekia.
              </p>
              <a
                href="/program/belajar-mandiri"
                className="bg-buah text-white font-bold px-6 py-3 rounded-full hover:bg-biru transition text-sm"
              >
                <i className="fas fa-play mr-1.5"></i>Mulai Belajar Mandiri
              </a>
            </div>

            <div className="hero-safir relative overflow-hidden rounded-3xl shadow-2xl shadow-[#0b2d55]/30 p-8 text-center text-white flex flex-col">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-days text-2xl"></i>
                </div>
                <h3 className="font-bold text-xl">Pelatihan Terbaru</h3>
                <p className="text-white/90 text-sm mt-2 mb-6 leading-relaxed">
                  Ikuti webinar, seminar, atau workshop bersama praktisi —
                  dapatkan sertifikat, materi, dan rekaman kegiatan setiap
                  pelatihan.
                </p>
                <a
                  href="/program/pelatihan-terbaru"
                  className="bg-white text-[#0f3d6d] font-bold px-6 py-3 rounded-full shadow-lg shadow-[#0b2d55]/40 hover:bg-krem transition text-sm inline-block"
                >
                  <i className="fas fa-arrow-right mr-1.5"></i>Lihat Jadwal
                  Pelatihan
                </a>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">
            Butuh bantuan memilih jalur yang tepat?
            <a
              href="/kontak"
              className="text-buah font-semibold hover:underline"
            >
              Hubungi Admin
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
