"use client";

import { usePathname } from "next/navigation";
import { isHalamanMitra } from "@/lib/mitra-path";

const nomor = "628991945123";
const pesan = "Halo, saya ingin klaim sertifikat";

export default function WhatsAppFloat() {
  const pathname = usePathname();

  if (isHalamanMitra(pathname)) return null;

  return (
    <a
      href={`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`}
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
