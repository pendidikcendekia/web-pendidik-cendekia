"use client";

const KUNCI = "wa-admin-aktif";
const defaultNomor = "628991945123";
const defaultPesan = "Halo, saya ingin klaim sertifikat";

export function setAdminAktif(nomor: string, pesan: string) {
  try {
    sessionStorage.setItem(
      KUNCI,
      JSON.stringify({ nomor, pesan, at: Date.now() })
    );
  } catch {
    // storage penuh atau diblokir — abaikan, tetap pakai nomor default
  }
}

function bacaAdminAktif() {
  if (typeof window === "undefined") {
    return { nomor: defaultNomor, pesan: defaultPesan };
  }
  try {
    const mentah = sessionStorage.getItem(KUNCI);
    if (!mentah) return { nomor: defaultNomor, pesan: defaultPesan };
    const { nomor, pesan } = JSON.parse(mentah);
    if (!nomor) return { nomor: defaultNomor, pesan: defaultPesan };
    return { nomor, pesan: pesan || defaultPesan };
  } catch {
    return { nomor: defaultNomor, pesan: defaultPesan };
  }
}

export default function WhatsAppFloat() {
  function saatKlik(e: React.MouseEvent<HTMLAnchorElement>) {
    const { nomor, pesan } = bacaAdminAktif();
    e.preventDefault();
    window.open(
      `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
      "_blank",
      "noopener"
    );
    try {
      sessionStorage.removeItem(KUNCI);
    } catch {
      // abaikan
    }
  }

  return (
    <a
      href={`https://wa.me/${defaultNomor}?text=${encodeURIComponent(defaultPesan)}`}
      onClick={saatKlik}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition z-50"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      <span className="text-sm font-semibold leading-tight">
        Klaim Sertifikat
      </span>
    </a>
  );
}
