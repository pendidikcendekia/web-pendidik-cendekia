import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/tentang.html", destination: "/tentang", permanent: true },
      { source: "/karya.html", destination: "/karya", permanent: true },
      { source: "/artikel.html", destination: "/artikel", permanent: true },
      { source: "/kontak.html", destination: "/kontak", permanent: true },
      {
        source: "/layanan-member.html",
        destination: "/layanan-member",
        permanent: true,
      },
      {
        source: "/program/pelatihan-terbaru.html",
        destination: "/program/pelatihan-terbaru",
        permanent: true,
      },
      {
        source: "/program/belajar-mandiri.html",
        destination: "/program/belajar-mandiri",
        permanent: true,
      },
      {
        source: "/artikel/panduan-membuat-mpi-guru-sd.html",
        destination: "/artikel/panduan-membuat-mpi-guru-sd",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
