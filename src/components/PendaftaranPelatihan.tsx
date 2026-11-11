"use client";

import { useMemo, useState } from "react";
import { dataPelatihan } from "@/data/jadwal";
import styles from "./PendaftaranPelatihan.module.css";

type Props = {
  slug: string;
  wa: string;
  waTampil: string;
  poster: string;
  googleAdsId?: string;
  conversionLabel?: string;
};

const namaBulan: Record<string, number> = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
};

function keyToDate(key: string): number {
  const bagian = key.trim().split(/\s+/);
  const bulan = namaBulan[bagian[0].toLowerCase()];
  const tahun = Number(bagian[1]);
  if (bulan === undefined || isNaN(tahun)) return 0;
  return new Date(tahun, bulan, 1).getTime();
}

function getStatusPelatihan(
  tanggalISO: string,
): "E-Learning" | "Pelatihan Mendatang" {
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);

  const tanggalPelatihan = new Date(tanggalISO + "T00:00:00");

  return tanggalPelatihan < hariIni ? "E-Learning" : "Pelatihan Mendatang";
}

export default function PendaftaranPelatihan({
  slug,
  wa,
  waTampil,
  poster,
  googleAdsId,
  conversionLabel,
}: Props) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [instansi, setInstansi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [waPeserta, setWaPeserta] = useState("");
  const [pilihan, setPilihan] = useState<Record<string, number[]>>({});
  const [temaOpen, setTemaOpen] = useState(false);
  const [viewer, setViewer] = useState<string | null>(null);

  const bulanUrut = useMemo(
    () =>
      Object.keys(dataPelatihan).sort((a, b) => keyToDate(a) - keyToDate(b)),
    [],
  );

  const jumlahPilihan = bulanUrut.reduce(
    (total, bulan) => total + (pilihan[bulan]?.length ?? 0),
    0,
  );

  function toggleTema(bulan: string, index: number) {
    setPilihan((prev) => {
      const terpilih = prev[bulan] ?? [];
      const baru = terpilih.includes(index)
        ? terpilih.filter((i) => i !== index)
        : [...terpilih, index];
      return { ...prev, [bulan]: baru };
    });
  }

  function lacak() {
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void })
      .gtag;
    gtag?.("event", "kirim_formulir", {
      event_category: "pelatihan",
      event_label: slug,
      event_value: 1,
    });
  }

  function lacakKonversi() {
    if (!googleAdsId || !conversionLabel) return;

    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void })
      .gtag;

    gtag?.("event", "conversion", {
      send_to: `${googleAdsId}/${conversionLabel}`,
      value: 1.0,
      currency: "IDR",
    });
  }

  function kirim(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (jumlahPilihan === 0) {
      alert("Silakan centang minimal satu tema pelatihan.");
      return;
    }

    let rincian = "";

    bulanUrut.forEach((bulan) => {
      const dipilih = pilihan[bulan];
      if (!dipilih || dipilih.length === 0) return;

      rincian += "\nBulan: " + bulan + "\n";

      [...dipilih]
        .sort((a, b) => a - b)
        .forEach((index, nomor) => {
          const item = dataPelatihan[bulan][index];
          const status = getStatusPelatihan(item.tanggalISO);

          rincian += `${nomor + 1}. ${item.tema} - ${item.tanggal} (${status})\n`;
        });
    });

    const pesan = `Halo Admin Pendidik Cendekia,

Saya ingin mendaftar pelatihan.

*DATA PESERTA*

Nama: ${nama}
Email: ${email}
Instansi: ${instansi}
Kabupaten/Kota: ${kabupaten}
Provinsi: ${provinsi}
No. WhatsApp: ${waPeserta}

*PILIHAN PELATIHAN*
${rincian}
Mohon informasi selanjutnya mengenai pendaftaran dan pembayaran.

Terima kasih.`;

    lacak();
    lacakKonversi();

    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(pesan)}`,
      "_blank",
    );
  }

  function showImg(src: string) {
    setViewer(src);
  }

  function hideImg() {
    setViewer(null);
  }

  return (
    <section className={styles.pc}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <div>
            <div className={styles.brandName}>PENDIDIK CENDEKIA</div>
            <div className={styles.brandSub}>
              PENGEMBANGAN KOMPETENSI PENDIDIK
            </div>
          </div>
        </div>

        <h1 className={styles.headerTitle}>
          Tingkatkan Kompetensi, Ciptakan Inovasi.
        </h1>

        <p className={styles.headerText}>
          Kembangkan kemampuan dan wawasan melalui pelatihan edukatif, inovatif,
          dan relevan dengan kebutuhan pendidikan masa kini.
        </p>

        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.infoLabel}>PENDIDIK CENDEKIA PROGRAM</div>

            <h2 className={styles.infoTitle}>
              Saatnya Mengembangkan Potensi dan Profesionalisme Anda!
            </h2>

            <p className={styles.infoText}>
              Ikuti program pelatihan untuk meningkatkan kompetensi, memperluas
              wawasan, dan mengembangkan keterampilan digital.
            </p>

            <div className={styles.features}>
              <span className={styles.feature}>
                Surat Undangan & Sertifikat Pelatihan
              </span>

              <span className={styles.feature}>Materi & Absensi</span>

              <span className={styles.feature}>Rekaman Kegiatan</span>
            </div>
          </div>

          <h2 className={styles.formTitle}>Formulir Pendaftaran</h2>

          <p className={styles.formSubtitle}>
            Lengkapi data berikut untuk melanjutkan proses pendaftaran pelatihan.
          </p>

          <form id="daftarForm" onSubmit={kirim}>
            <label htmlFor="nama">Nama Lengkap Beserta Gelar</label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              placeholder="Contoh: Budi Santoso, S.Pd."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            <label htmlFor="email">Email Aktif</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="contoh@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="instansi">Asal Sekolah/Instansi</label>
            <input
              type="text"
              id="instansi"
              name="instansi"
              required
              placeholder="Nama sekolah/instansi"
              value={instansi}
              onChange={(e) => setInstansi(e.target.value)}
            />

            <label htmlFor="kabupaten">Kabupaten/Kota</label>
            <input
              type="text"
              id="kabupaten"
              name="kabupaten"
              required
              placeholder="Nama kabupaten/kota"
              value={kabupaten}
              onChange={(e) => setKabupaten(e.target.value)}
            />

            <label htmlFor="provinsi">Provinsi</label>
            <input
              type="text"
              id="provinsi"
              name="provinsi"
              required
              placeholder="Nama provinsi"
              value={provinsi}
              onChange={(e) => setProvinsi(e.target.value)}
            />

            <label htmlFor="wa">Nomor WhatsApp Aktif</label>
            <input
              type="tel"
              id="wa"
              name="wa"
              required
              placeholder="Contoh: 6281234567890"
              value={waPeserta}
              onChange={(e) => setWaPeserta(e.target.value)}
            />

            <button
              type="button"
              className={`${styles.toggleTema} ${temaOpen ? styles.open : ""}`}
              onClick={() => setTemaOpen((terbuka) => !terbuka)}
              aria-expanded={temaOpen}
              aria-controls="temaList"
            >
              <span>Pilih Tema Pelatihan (bisa lebih dari satu)</span>
              <span className={styles.arrow}>▼</span>
            </button>

            <div
              id="temaList"
              className={`${styles.temaList} ${temaOpen ? styles.open : ""}`}
            >
              {bulanUrut.map((bulan) => (
                <div key={bulan} className={styles.bulanGroup}>
                  <div className={styles.bulanJudul}>{bulan}</div>

                  {dataPelatihan[bulan].map((item, index) => (
                    <label key={`${bulan}-${index}`} className={styles.temaItem}>
                      <input
                        type="checkbox"
                        checked={pilihan[bulan]?.includes(index) ?? false}
                        onChange={() => toggleTema(bulan, index)}
                      />
                      <span>{item.tema}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>

            {jumlahPilihan > 0 && (
              <div id="jadwalBox" className={styles.schedule}>
                <div className={styles.scheduleTitle}>INFORMASI KEGIATAN</div>

                <div id="detailKegiatan">
                  {bulanUrut.map((bulan) => {
                    const dipilih = pilihan[bulan];
                    if (!dipilih || dipilih.length === 0) return null;

                    return (
                      <div key={bulan} className={styles.bulanGroup}>
                        <div className={styles.ringkasBulan}>{bulan}</div>

                        {[...dipilih]
                          .sort((a, b) => a - b)
                          .map((index) => {
                            const item = dataPelatihan[bulan][index];
                            const status = getStatusPelatihan(item.tanggalISO);

                            return (
                              <div key={index} className={styles.ringkasItem}>
                                <span className={styles.ringkasTema}>
                                  {item.tema}
                                </span>
                                <span className={styles.ringkasMeta}>
                                  {item.tanggal}
                                </span>
                                <span
                                  className={`${styles.status} ${
                                    status === "E-Learning"
                                      ? styles.elearning
                                      : styles.live
                                  }`}
                                >
                                  {status}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <button type="submit" className={styles.button}>
              KIRIM PENDAFTARAN
            </button>

            <div className={styles.note}>
              Setelah mengisi formulir, Anda akan diarahkan ke WhatsApp Admin
              Pendidik Cendekia untuk melanjutkan pendaftaran.
            </div>
          </form>
        </div>

        <div className={styles.right}>
          <div className={styles.posterCard}>
            <div className={styles.posterTitle}>INFORMASI PELATIHAN</div>

            <button
              type="button"
              className={styles.posterButton}
              onClick={() => showImg(poster)}
              aria-label="Perbesar poster pelatihan"
            >
              <img
                className={styles.poster}
                src={poster}
                alt="Poster Pelatihan Pendidik Cendekia"
              />
            </button>

            <div className={styles.posterNote}>
              Klik poster untuk memperbesar gambar.
            </div>
          </div>

          <div className={styles.contact}>
            <div className={styles.contactTitle}>INFORMASI PENDAFTARAN</div>

            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent(
                "Halo Admin Pendidik Cendekia, saya ingin mendaftar pelatihan.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
              aria-label={`Daftar melalui WhatsApp ${waTampil}`}
            >
              Daftar Melalui WhatsApp
            </a>
          </div>
        </div>
      </div>

      {viewer && (
        <div
          id="pcViewer"
          className={styles.viewer}
          onClick={(e) => {
            if (e.target === e.currentTarget) hideImg();
          }}
        >
          <button
            type="button"
            className={styles.close}
            onClick={hideImg}
            aria-label="Tutup poster"
          >
            ✕
          </button>

          <img
            id="pcFull"
            className={styles.full}
            src={viewer}
            alt="Poster diperbesar"
          />

          <div style={{ textAlign: "center" }}>
            <a
              id="pcDownload"
              className={styles.download}
              href={viewer}
              download="Poster-Pendidik-Cendekia.webp"
            >
              Unduh Poster
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
