import Link from "next/link";

export const metadata = {
  title: "Pendidik Cendekia - Panduan Membuat Multimedia Interaktif untuk Guru SD",
  description:
    "Panduan lengkap membuat Multimedia Pembelajaran Interaktif (MPI) untuk guru SD. Langkah demi langkah dengan contoh praktis.",
  openGraph: {
    title: "Pendidik Cendekia - Panduan Membuat MPI untuk Guru SD",
    description:
      "Panduan lengkap membuat Multimedia Pembelajaran Interaktif untuk guru SD.",
    url: "https://pendidikcendekia.vercel.app/artikel/panduan-membuat-mpi-guru-sd",
    type: "article",
    images: ["/assets/logo/logo-pc.png"],
  },
  alternates: {
    canonical:
      "https://pendidikcendekia.vercel.app/artikel/panduan-membuat-mpi-guru-sd",
  },
};

export default function PanduanMembuatMpiPage() {
  return (
    <>
      {/* ===== BREADCRUMB ===== */}
      <div className="bg-krem py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
          <Link href="/" className="text-biru hover:text-buah transition">
            Beranda
          </Link>
          <span className="text-gray-400 mx-2">/</span>
          <Link href="/artikel" className="text-biru hover:text-buah transition">
            Artikel
          </Link>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-500 font-semibold">
            Panduan Membuat Multimedia Interaktif untuk Guru SD
          </span>
        </div>
      </div>

      {/* ===== ISI ARTIKEL ===== */}
      <article className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block bg-buah text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full mb-3">
              Tutorial
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-biru leading-snug mb-4">
              Panduan Membuat Multimedia Interaktif untuk Guru SD
            </h1>
            <p className="text-gray-500 text-sm">
              Ditulis oleh{" "}
              <span className="font-semibold text-biru">
                Tim Pendidik Cendekia
              </span>{" "}
              · 26 Agustus 2026 · 5 menit baca
            </p>
            <div className="w-20 h-1 bg-buah rounded-full mt-6"></div>
          </div>

          <div className="bg-krem rounded-3xl p-6 mb-8">
            <img
              src="/assets/karya/Sampul-MPI-1.png"
              alt="Sampul MPI Tarik Tambang Matematika"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-contain h-72"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-5">
            Para guru SD kini dituntut menghadirkan pembelajaran yang lebih hidup
            dan menyenangkan di kelas. Salah satu cara yang terbukti efektif
            adalah menggunakan{" "}
            <strong>Multimedia Interaktif (MPI)</strong> — media belajar yang
            memadukan teks, gambar, suara, dan animasi, serta memberi siswa
            kesempatan berinteraksi langsung dengan materi. Contoh sederhananya
            bisa Anda lihat pada kumpulan karya peserta pelatihan kami, seperti
            gim &quot;Tarik Tambang Matematika&quot;.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Kabar baiknya, membuat MPI tidak perlu jago coding atau alat yang
            mahal. Dengan perangkat yang sudah tersedia di sekolah dan sedikit
            kreativitas, Anda bisa menyusun media pembelajaran yang menarik
            dalam beberapa jam. Berikut panduan langkah demi langkahnya.
          </p>

          <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
            Langkah-Langkah Membuat MPI
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ikuti lima langkah sederhana ini. Anda bebas memulai dari mana saja
            sesuai kenyamanan, tetapi urutan berikut paling cocok bagi pemula.
          </p>

          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-5">
            <li>
              <strong>Tentukan tujuan dan materi.</strong> Pilih satu kompetensi
              dasar yang ingin dicapai dan fokus pada satu topik kecil agar media
              tidak terlalu penuh.
            </li>
            <li>
              <strong>Siapkan aset.</strong> Kumpulkan gambar, audio, atau video
              sederhana. Bisa memakai gambar dari koleksi pribadi atau situs
              gambar bebas hak cipta.
            </li>
            <li>
              <strong>Pilih platform.</strong> Guru pemula dapat memakai aplikasi
              presentasi biasa, atau alat berbasis web yang sudah menyediakan
              fitur kuis dan drag-and-drop.
            </li>
            <li>
              <strong>Rakit dan uji coba.</strong> Susun materi, tambahkan kuis
              atau tombol navigasi, lalu coba dulu pada salah satu rekan atau
              siswa sebelum dipakai di kelas.
            </li>
            <li>
              <strong>Terapkan dan evaluasi.</strong> Gunakan di kelas, amati
              respons siswa, lalu perbaiki bagian yang masih membingungkan.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-biru mt-10 mb-4">
            Tips Tambahan agar Kelas Makin Hidup
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Gunakan bahasa yang dekat dengan siswa, tampilkan karakter atau tokoh
            yang mereka kenal, dan selipkan tantangan kecil di akhir materi agar
            siswa termotivasi. Jangan lupa melibatkan siswa secara berpasangan
            atau berkelompok saat memakai media tersebut.
          </p>

          <div className="bg-krem border-l-4 border-buah rounded-r-2xl p-5 mb-8">
            <p className="text-gray-700 leading-relaxed text-sm font-semibold">
              Catatan: MPI singkatan dari{" "}
              <strong>Multimedia Interaktif</strong> — media pembelajaran yang
              menggabungkan berbagai elemen (teks, gambar, audio, animasi) dengan
              fitur interaksi bagi siswa.
            </p>
          </div>

          <div className="bg-gray-50 border border-krem rounded-3xl p-8 text-center">
            <p className="font-bold text-biru text-lg mb-2">
              Mau membuat MPI sambil dibimbing langsung?
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Ikuti pelatihan kami dan dapatkan pendampingan sampai MPI Anda
              jadi.
            </p>
            <a
              href="https://wa.me/628991945123?text=Halo%20Admin%20Pendidik%20Cendekia%2C%20saya%20ingin%20mendaftar%20pelatihan%20pembuatan%20Multimedia%20Interaktif."
              target="_blank"
              className="inline-block bg-buah text-white px-8 py-3 rounded-full font-bold hover:bg-biru transition"
            >
              Daftar via WhatsApp{" "}
              <i className="fab fa-whatsapp ml-2"></i>
            </a>
          </div>

          <div className="flex justify-between mt-10 text-sm font-semibold">
            <Link
              href="/artikel"
              className="text-biru hover:text-buah transition"
            >
              <i className="fas fa-arrow-left mr-2"></i>Kembali ke Artikel
            </Link>
            <Link
              href="/artikel"
              className="text-biru hover:text-buah transition"
            >
              Artikel Berikutnya
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </article>

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
