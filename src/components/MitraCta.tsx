"use client";

type Props = {
  slug: string;
  nama: string;
  form: string;
  wa: string;
  pesan: string;
  varian?: "hero" | "bawah";
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

export default function MitraCta({
  slug,
  nama,
  form,
  wa,
  pesan,
  varian = "hero",
}: Props) {
  const teksWa = encodeURIComponent(
    `Halo ${nama}, saya melihat pelatihan di web Pendidik Cendekia. Saya ingin mendaftar.`,
  );
  const compact = varian === "bawah";

  return (
    <div className={compact ? "flex flex-col sm:flex-row gap-3" : "flex flex-col gap-3"}>
      <a
        href={form}
        target="_blank"
        rel="noopener"
        onClick={() => lacak(slug, "daftar_form")}
        className={`inline-flex items-center justify-center gap-2 bg-buah text-white font-bold rounded-full hover:bg-biru transition ${
          compact ? "px-6 py-3 text-sm" : "px-7 py-4 text-base"
        }`}
      >
        <i className="fa-solid fa-file-pen" aria-hidden="true"></i>
        Daftar Sekarang
      </a>
      <a
        href={`https://wa.me/${wa}?text=${teksWa}`}
        target="_blank"
        rel="noopener"
        onClick={() => lacak(slug, "chat_whatsapp")}
        className={`inline-flex items-center justify-center gap-2 bg-white text-biru font-bold border-2 border-biru rounded-full hover:bg-biru hover:text-white transition ${
          compact ? "px-6 py-3 text-sm" : "px-7 py-4 text-base"
        }`}
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        Tanya via WhatsApp
      </a>
      <span className="sr-only">{pesan}</span>
    </div>
  );
}
