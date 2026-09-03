export const metadata = {
  title: "Pendidik Cendekia - Tentang Kami",
  description:
    "Kenali Pendidik Cendekia lebih dekat. Visi, misi, dan tim kami dalam mengembangkan kompetensi pendidik Indonesia.",
  openGraph: {
    title: "Pendidik Cendekia - Tentang Kami",
    description:
      "Visi, misi, dan tim Pendidik Cendekia dalam mengembangkan kompetensi pendidik Indonesia.",
    url: "https://pendidikcendekia.vercel.app/tentang",
    type: "website",
    images: ["/assets/logo/logo-pc.png"],
  },
  alternates: {
    canonical: "https://pendidikcendekia.vercel.app/tentang",
  },
};

export default function TentangPage() {
  return (
    <>
      {/* ===== HERO TENTANG ===== */}
      <section className="hero-orange relative overflow-hidden text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="inline-block bg-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <i className="fas fa-graduation-cap mr-1"></i>TENTANG KAMI
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Mengenal Pendidik Cendekia
          </h1>
          <p className="text-white/95 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Unit pengembangan kompetensi pendidik di bawah naungan PT Cipta Arah
            Cendekia, dengan semangat{" "}
            <span className="font-semibold">
              Belajar - Bertumbuh - Berdampak
            </span>
            .
          </p>
        </div>
      </section>

      {/* ===== APA ITU PENDIDIK CENDEKIA ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-biru mb-6">
              Apa itu Pendidik Cendekia?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pendidik Cendekia adalah unit yang berada di bawah naungan{" "}
              <strong>PT Cipta Arah Cendekia</strong>. Unit ini bergerak dalam
              pengembangan kompetensi pendidik melalui webinar inspiratif dan
              interaktif untuk meningkatkan pengetahuan dan keterampilan yang
              relevan dengan era digital.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-krem rounded-2xl p-4 text-center hover:shadow-md transition">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-building-columns text-buah text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-biru">
                  Naungan PT Cipta Arah Cendekia
                </p>
              </div>
              <div className="bg-krem rounded-2xl p-4 text-center hover:shadow-md transition">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-chalkboard-user text-buah text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-biru">
                  Webinar Inspiratif &amp; Interaktif
                </p>
              </div>
              <div className="bg-krem rounded-2xl p-4 text-center hover:shadow-md transition">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-file-certificate text-buah text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-biru">
                  Sertifikat Dapat Divalidasi
                </p>
              </div>
              <div className="bg-krem rounded-2xl p-4 text-center hover:shadow-md transition">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-people-group text-buah text-xl"></i>
                </div>
                <p className="text-xs font-semibold text-biru">
                  Praktisi &amp; Pakar Pendidikan
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#f75624] to-[#ffd954] text-white rounded-2xl p-8">
            <p className="text-sm font-bold uppercase tracking-wide mb-6">
              Makna Nama Pendidik Cendekia
            </p>
            <p className="text-3xl font-extrabold mb-4">
              Pendidik <span className="text-white/70">+</span> Cendekia
            </p>
            <p className="text-white/90 mb-4 leading-relaxed">
              <strong>Pendidik</strong> — orang yang mendidik; tenaga
              kependidikan; guru/dosen.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              <strong>Cendekia</strong> — terpelajar, cerdas, bijaksana, tajam
              pikiran, atau cepat memahami hal baru.
            </p>
            <blockquote className="bg-white/20 rounded-xl p-4 italic font-semibold">
              &quot;Sosok Pendidik yang Cerdas, Bijaksana, dan Terus
              Bertumbuh.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== VISI & MISI ===== */}
      <section className="py-6 md:py-12 bg-krem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f75624] to-[#ffd954] text-white rounded-2xl p-8 md:p-12 mb-12 text-center">
            <p className="text-3xl font-bold uppercase tracking-wide mb-3">
              Visi
            </p>
            <p className="text-2xl md:text-3xl font-extrabold max-w-3xl mx-auto leading-snug">
              &quot;Menjadi ekosistem pengembangan diri dan keterampilan yang
              melahirkan insan cerdas, adaptif, serta berdampak.&quot;
            </p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Misi Kami
            </h2>
            <p className="text-gray-500 mt-3">
              Tiga pilar untuk mewujudkan Visi
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-extrabold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Memfasilitasi Pembelajaran Sepanjang Hayat
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menyediakan wadah belajar yang terbuka dan terjangkau bagi siapa
                saja yang ingin mengembangkan potensi diri, tanpa terbatas latar
                belakang profesi maupun usia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-extrabold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Mengakselerasi Keterampilan Praktis &amp; Pemanfaatan Teknologi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menyajikan program upskilling berbasis kebutuhan nyata yang
                relevan dengan perkembangan zaman, sehingga setiap pembelajar
                mampu bekerja lebih cepat, kreatif, dan efisien.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-extrabold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-biru text-lg mb-2">
                Membangun Ekosistem Pendidik yang Berdaya
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Memperlengkapi setiap individu yang berperan sebagai pendidik
                (guru, orang tua, maupun praktisi) dengan metodologi dan alat
                bantu modern agar mampu menginspirasi serta membagikan ilmu
                secara efektif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== UNTUK SIAPA ===== */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-biru">
              Untuk Siapa Pendidik Cendekia?
            </h2>
            <p className="text-gray-500 mt-3">
              Siapa pun yang memiliki semangat belajar dan ingin bertumbuh
            </p>
            <div className="w-20 h-1 bg-buah mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-krem rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-school text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru">Guru di Sekolah</h3>
              <p className="text-gray-500 text-xs mt-1">
                Tenaga pendidik formal
              </p>
            </div>
            <div className="bg-krem rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-people-roof text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru">Orang Tua</h3>
              <p className="text-gray-500 text-xs mt-1">
                Pendidik pertama keluarga
              </p>
            </div>
            <div className="bg-krem rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chalkboard-user text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru">Trainer</h3>
              <p className="text-gray-500 text-xs mt-1">
                Pelatih &amp; fasilitator
              </p>
            </div>
            <div className="bg-krem rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru">Dosen</h3>
              <p className="text-gray-500 text-xs mt-1">
                Pendidik di perguruan tinggi
              </p>
            </div>
            <div className="bg-krem rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-book-open-reader text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru">Tutor</h3>
              <p className="text-gray-500 text-xs mt-1">
                Pendamping belajar
              </p>
            </div>
            <div className="bg-krem rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-buah text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-seedling text-2xl"></i>
              </div>
              <h3 className="font-bold text-biru">
                Siapa pun yang Ingin Bertumbuh
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Praktisi &amp; siapa saja
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#f75624] to-[#ffd954] text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-extrabold">
              Belajar Tanpa Batas &bull; Kompetensi Tanpa Henti &bull; Dampak
              untuk Negeri
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
