import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-8xl md:text-9xl font-extrabold text-buah mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-biru mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Sepertinya halaman yang Anda cari sudah dipindah, dihapus, atau
          alamatnya salah. Jangan khawatir, mari kembali ke beranda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="bg-buah text-white font-bold px-8 py-3.5 rounded-full hover:bg-biru transition"
          >
            <i className="fas fa-home mr-2"></i>Kembali ke Beranda
          </Link>
          <Link
            href="/program/pelatihan-terbaru"
            className="border-2 border-buah text-buah font-bold px-8 py-3.5 rounded-full hover:bg-buah hover:text-white transition"
          >
            Lihat Pelatihan
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-8">
          Atau hubungi kami via{" "}
          <a
            href="https://wa.me/628991945123"
            target="_blank"
            className="text-buah font-semibold hover:underline"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
