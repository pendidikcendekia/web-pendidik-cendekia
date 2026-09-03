export default function ChannelSection() {
  return (
    <section className="bg-krem py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 mb-6 text-sm font-semibold">Ikuti Kami</p>
        <div className="flex justify-center gap-8 text-biru">
          <a
            href="https://wa.me/628991945123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:text-buah transition"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
            <span className="text-xs">WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/pendidikcendekia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:text-buah transition"
          >
            <i className="fab fa-instagram text-3xl"></i>
            <span className="text-xs">Instagram</span>
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
  );
}
