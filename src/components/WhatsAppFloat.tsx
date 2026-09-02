export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/628991945123?text=Halo,%20saya%20ingin%20klaim%20sertifikat"
      target="_blank"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition z-50"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      <span className="text-sm font-semibold leading-tight">
        Klaim Sertifikat
      </span>
    </a>
  );
}
