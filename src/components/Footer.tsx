import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-biru text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/">
            <img
              src="/assets/logo/logo-pc-footer.png"
              alt="Logo Pendidik Cendekia"
              loading="lazy"
              className="h-28 w-auto mb-3 hover:opacity-80 transition"
            />
          </Link>
          <p className="text-white/80 text-sm">
            Unit dari PT Cipta Arah Cendekia. Ekosistem pengembangan kompetensi
            guru.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-krem mb-3">Menu</h4>
          <ul className="text-white/80 text-sm space-y-1">
            <li>
              <Link href="/tentang" className="hover:text-krem transition">
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="/program/pelatihan-terbaru"
                className="hover:text-krem transition"
              >
                Pelatihan Terbaru
              </Link>
            </li>
            <li>
              <Link
                href="/program/belajar-mandiri"
                className="hover:text-krem transition"
              >
                Belajar Mandiri
              </Link>
            </li>
            <li>
              <Link href="/karya" className="hover:text-krem transition">
                Karya
              </Link>
            </li>
            <li>
              <Link href="/artikel" className="hover:text-krem transition">
                Artikel
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-krem mb-3">Kontak</h4>
          <ul className="text-white/80 text-sm space-y-1">
            <li>📍 Yogyakarta, Indonesia</li>
            <li>✉️ pendidikcendekia@gmail.com</li>
            <li>📸 @pendidikcendekia</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white/60 text-sm mt-8 border-t border-white/20 pt-6">
        © 2026 Pendidik Cendekia - PT Cipta Arah Cendekia ·
      </div>
    </footer>
  );
}
