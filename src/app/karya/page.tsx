"use client";

import { useState, useCallback } from "react";

export default function KaryaPage() {
  const [filterMapel, setFilterMapel] = useState("");
  const [filterJenjang, setFilterJenjang] = useState("");

  const karya = [
    {
      mapel: "matematika",
      jenjang: "sd",
      img: "/assets/karya/Sampul-MPI-1.webp",
      alt: "Sampul Karya Tarik Tambang Matematika",
      tag: "Gim Pembelajaran",
      title: "Tarik Tambang Matematika",
      author: "Ibu Rina",
      instansi: "SD Inpres Soasio",
      desc: "Gim interaktif untuk melatih operasi hitung dasar dengan cara yang menyenangkan.",
      link: "http://s.id/ttmifp",
    },
    {
      mapel: "ipas",
      jenjang: "sd",
      img: "/assets/karya/Sampul-MPI-2.webp",
      alt: "Sampul Karya Adu Cepat Isi Botol",
      tag: "Gim Pembelajaran",
      title: "Adu Cepat Isi Botol",
      author: "Ibu Sari",
      instansi: "SDN Gamping",
      desc: "Permainan adu cepat yang membahas materi perubahan iklim untuk siswa IPAS SD.",
      link: "https://s.id/isibotolcuaca",
    },
    {
      mapel: "matematika",
      jenjang: "sd",
      img: "/assets/karya/Sampul-MPI-3.webp",
      alt: "Sampul Karya MPI Peluang",
      tag: "Multimedia Interaktif",
      title: "MPI Peluang",
      author: "Bapak Dedi",
      instansi: "SMPN 2 Bantul",
      desc: "Media interaktif untuk memahami analisis data dan peluang pada Matematika SD.",
      link: "https://s.id/peluang5sd",
    },
  ];

  const filtered = karya.filter(
    (k) =>
      (!filterMapel || k.mapel === filterMapel) &&
      (!filterJenjang || k.jenjang === filterJenjang)
  );

  const resetFilter = useCallback(() => {
    setFilterMapel("");
    setFilterJenjang("");
  }, []);

  return (
    <>
      {/* ===== HERO KARYA ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full bg-white overflow-hidden ring-8 ring-[#16528F] shadow-xl flex items-center justify-center">
                  <img
                    src="/assets/Elemen/Karya-Elemen-1.webp"
                    alt="Ilustrasi Karya Pendidik Cendekia"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-44 h-2 bg-buah rounded-full mt-6 shadow-md"></div>
                <div className="w-28 h-2 bg-buah/40 rounded-full mt-1.5"></div>
              </div>
            </div>

            <div className="hero-safir relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#0b2d55]/30 p-8 md:p-12 text-white">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -bottom-28 -right-20 w-96 h-96 rounded-full bg-[#ffd954]/10 blur-3xl"></div>
              </div>
              <div className="relative">
                <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                  <i className="fas fa-box-open mr-1"></i>KARYA PESERTA
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                  Karya Peserta
                </h1>
                <p className="text-[#ffb38c] font-semibold mb-4">
                  Belajar, Berkarya, Berdampak.
                </p>
                <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                  Pendidik Cendekia mewadahi pendidik untuk berbagi dan
                  memublikasikan karya sebagai bagian dari akselerasi
                  pembelajaran digital. Berikut karya peserta pelatihan Pendidik
                  Cendekia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#karya-pilihan"
                    className="bg-white text-[#0f3d6d] px-8 py-4 rounded-full font-bold shadow-lg shadow-[#0b2d55]/40 hover:bg-krem transition text-center"
                  >
                    Lihat Karya
                  </a>
                  <a
                    href="#publish-karya"
                    className="bg-buah text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#8f3415]/50 hover:bg-[#e3491d] transition text-center"
                  >
                    Publish Karya Anda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HEADING KARYA PILIHAN ===== */}
      <section id="karya-pilihan" className="pt-16 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            KARYA PILIHAN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-biru">
            Karya Pilihan
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Karya-karya pilihan dari peserta pelatihan, siap Anda pelajari dan
            jadikan inspirasi pembelajaran digital.
          </p>
          <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
        </div>
      </section>

      {/* ===== FILTER KARYA ===== */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
          <div className="bg-gradient-to-br from-[#F75624] to-[#e3491d] rounded-3xl px-6 py-6 shadow-lg shadow-[#c43b12]/25">
            <div className="flex flex-col md:flex-row md:items-center gap-5 justify-center">
              <div className="md:flex-1 max-w-sm w-full">
                <label className="flex items-center gap-2 text-xs font-bold text-white mb-2 uppercase tracking-wider">
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white inline-flex items-center justify-center text-sm">
                    <i className="fas fa-book-open"></i>
                  </span>
                  Mata Pelajaran
                </label>
                <select
                  value={filterMapel}
                  onChange={(e) => setFilterMapel(e.target.value)}
                  className="w-full bg-white border-2 border-white/40 rounded-xl px-4 py-3 text-biru font-semibold shadow-sm hover:border-white focus:border-white focus:outline-none transition cursor-pointer"
                >
                  <option value="">Semua Mata Pelajaran</option>
                  <option value="matematika">Matematika</option>
                  <option value="ipa">IPA</option>
                  <option value="ipas">IPAS</option>
                  <option value="ips">IPS</option>
                  <option value="bindo">Bahasa Indonesia</option>
                  <option value="bing">Bahasa Inggris</option>
                  <option value="ppkn">PPKn</option>
                  <option value="seni">Seni Budaya</option>
                  <option value="pjok">PJOK</option>
                  <option value="kejuruan">Kejuruan</option>
                  <option value="umum">Umum</option>
                </select>
              </div>
              <div className="md:flex-1 max-w-sm w-full">
                <label className="flex items-center gap-2 text-xs font-bold text-white mb-2 uppercase tracking-wider">
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white inline-flex items-center justify-center text-sm">
                    <i className="fas fa-school"></i>
                  </span>
                  Jenjang
                </label>
                <select
                  value={filterJenjang}
                  onChange={(e) => setFilterJenjang(e.target.value)}
                  className="w-full bg-white border-2 border-white/40 rounded-xl px-4 py-3 text-biru font-semibold shadow-sm hover:border-white focus:border-white focus:outline-none transition cursor-pointer"
                >
                  <option value="">Semua Jenjang</option>
                  <option value="paud">PAUD</option>
                  <option value="sd">SD</option>
                  <option value="smp">SMP</option>
                  <option value="sma">SMA</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={resetFilter}
                  className="bg-white text-[#F75624] font-bold px-5 py-3 rounded-xl hover:bg-krem transition shadow-sm"
                >
                  <i className="fas fa-rotate-left mr-2"></i>Reset
                </button>
                <span className="text-sm font-bold text-white bg-white/15 px-4 py-3 rounded-xl border border-white/30">
                  {filtered.length} karya ditemukan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRID KARYA ===== */}
      <section className="pt-0 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filtered.map((k, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-krem shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
                >
                  <div className="bg-krem p-3">
                    <img
                      src={k.img}
                      alt={k.alt}
                      className="w-full h-96 md:h-[30rem] object-contain rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                        {k.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-biru text-xl">{k.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">
                      Disusun oleh:{" "}
                      <span className="font-medium text-biru">{k.author}</span>{" "}
                      ({k.instansi})
                    </p>
                    <p className="text-gray-600 text-sm mt-3 mb-6 leading-relaxed">
                      {k.desc}
                    </p>
                    <a
                      href={k.link}
                      target="_blank"
                      className="mt-auto bg-buah text-white font-bold py-3 rounded-full text-center hover:bg-biru transition"
                    >
                      Lihat Karya{" "}
                      <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-14">
              <i className="fas fa-search text-4xl text-gray-300 mb-3"></i>
              <p className="text-gray-500 font-semibold">
                Tidak ada karya yang cocok dengan filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA PUBLISH KARYA ===== */}
      <section id="publish-karya" className="py-6 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#16528F] via-[#10385f] to-[#0b2d55] rounded-[2.5rem] px-6 py-14 md:py-16 text-center shadow-2xl shadow-[#0b2d55]/30">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-28 -right-20 w-96 h-96 rounded-full bg-[#ffd954]/10 blur-3xl"></div>
              <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071c35]/50 to-transparent"></div>
            </div>
            <div className="relative">
              <p className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <i className="fas fa-box-open mr-1"></i>PUBLISH KARYA
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Mau Publish Karya Anda?
              </h2>
              <div className="w-20 h-1 bg-buah mx-auto rounded-full mb-6"></div>
              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Pendidik Cendekia memfasilitasi Anda untuk menerbitkan karya
                pembelajaran, seperti gim, multimedia interaktif, modul, atau kuis
                digital. Kirimkan karya yang sudah jadi, atau konsultasikan ide
                Anda dan biarkan kami mendampingi dari nol hingga siap digunakan.
              </p>

              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <p className="text-white/90 font-semibold mb-2">
                    Sudah punya karya?
                  </p>
                  <a
                    href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20mempublikasikan%20karya%20saya."
                    target="_blank"
                    className="block bg-buah text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#8f3415]/50 hover:bg-[#e3491d] transition"
                  >
                    <i className="fas fa-upload mr-2"></i>Publish Karya
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
                    Mau membuat karya mulai dari nol?
                  </p>
                  <a
                    href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20membuat%20karya%20pembelajaran%20mulai%20dari%20nol%2C%20mohon%20didampingi."
                    target="_blank"
                    className="block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0b2d55] transition"
                  >
                    <i className="fas fa-wand-magic-sparkles mr-2"></i>Diskusi
                    Membuat Karya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHANNEL ===== */}
      <section className="bg-krem py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-6 text-sm font-semibold">
            Ikuti Kami
          </p>
          <div className="flex justify-center gap-8 text-biru">
            <a
              href="https://wa.me/628991945123"
              target="_blank"
              className="flex flex-col items-center gap-1 hover:text-buah transition"
            >
              <i className="fab fa-whatsapp text-3xl"></i>
              <span className="text-xs">WhatsApp</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:text-buah transition"
            >
              <i className="fab fa-instagram text-3xl"></i>
              <span className="text-xs">Instagram</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:text-buah transition"
            >
              <i className="fab fa-youtube text-3xl"></i>
              <span className="text-xs">YouTube</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:text-buah transition"
            >
              <i className="fab fa-facebook text-3xl"></i>
              <span className="text-xs">Facebook</span>
            </a>
            <a
              href="mailto:pendidikcendekia@gmail.com"
              className="flex flex-col items-center gap-1 hover:text-buah transition"
            >
              <i className="fas fa-envelope text-3xl"></i>
              <span className="text-xs">Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
