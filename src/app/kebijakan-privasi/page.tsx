import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi PT Cipta Arah Cendekia - Pendidik Cendekia. Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
  alternates: {
    canonical: "https://pendidikcendekia.vercel.app/kebijakan-privasi",
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-krem text-buah text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            KEBIJAKAN
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-biru mb-3">
            Kebijakan Privasi
          </h1>
          <p className="text-gray-500 text-sm">
            Terakhir diperbarui: 3 September 2026
          </p>
          <div className="w-20 h-1 bg-buah rounded-full mt-6"></div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-5">
          PT Cipta Arah Cendekia (&quot;kami&quot;) menghargai privasi Anda.
          Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan melindungi informasi pribadi yang Anda berikan saat
          mengakses website{" "}
          <span className="font-semibold text-biru">
            Pendidik Cendekia
          </span>{" "}
          (pendidikcendekia.vercel.app).
        </p>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          1. Informasi yang Kami Kumpulkan
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Kami dapat mengumpulkan informasi berikut:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-5">
          <li>
            <strong>Informasi pendaftaran</strong>: nama, email, nomor WhatsApp,
            instansi, dan asal provinsi yang Anda isi pada formulir pendaftaran
            pelatihan.
          </li>
          <li>
            <strong>Data penggunaan</strong>: halaman yang Anda kunjungi, durasi
            kunjungan, perangkat, dan lokasi umum melalui Google Analytics.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          2. Cara Kami Menggunakan Informasi
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-5">
          <li>Memproses pendaftaran dan konfirmasi pelatihan.</li>
          <li>Mengirim informasi terkait pelatihan dan program kepada Anda.</li>
          <li>
            Menganalisis penggunaan website untuk meningkatkan kualitas layanan.
          </li>
          <li>
            Menyediakan layanan validasi sertifikat dan riwayat pelatihan.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          3. Berbagi Informasi
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi
          Anda kepada pihak lain. Informasi hanya digunakan untuk keperluan
          internal dan layanan yang Anda ikuti.
        </p>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          4. Google Analytics
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Website kami menggunakan Google Analytics untuk memahami perilaku
          pengunjung. Google Analytics mengumpulkan data seperti jenis browser,
          perangkat, halaman yang dikunjungi, dan durasi kunjungan secara
          anonim. Anda dapat mempelajari kebijakan privasi Google di{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="text-buah hover:underline"
          >
            policies.google.com/privacy
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          5. Keamanan Data
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Kami menerapkan langkah-langkah yang wajar untuk melindungi informasi
          pribadi Anda dari akses, pengubahan, atau pengungkapan yang tidak
          sah.
        </p>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          6. Hak Anda
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Anda berhak meminta akses, perbaikan, atau penghapusan informasi
          pribadi Anda. Untuk menggunakan hak ini, silakan hubungi kami melalui
          kontak di bawah.
        </p>

        <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
          7. Kontak
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan
          hubungi kami melalui WhatsApp di{" "}
          <a
            href="https://wa.me/628991945123"
            target="_blank"
            className="text-buah hover:underline font-semibold"
          >
            62899-1945-123
          </a>{" "}
          atau email{" "}
          <a
            href="mailto:pendidikcendekia@gmail.com"
            className="text-buah hover:underline font-semibold"
          >
            pendidikcendekia@gmail.com
          </a>
          .
        </p>

        <div className="mt-10 pt-6 border-t border-krem">
          <Link
            href="/"
            className="text-biru hover:text-buah transition font-semibold"
          >
            <i className="fas fa-arrow-left mr-2"></i>Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
