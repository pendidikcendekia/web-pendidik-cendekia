import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { halamanIklan } from "@/data/iklan";
import PendaftaranPelatihan from "@/components/PendaftaranPelatihan";

export function generateStaticParams() {
  return halamanIklan.map((h) => ({ slug: h.slug }));
}

function cariHalaman(slug: string) {
  return halamanIklan.find((h) => h.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const h = cariHalaman(slug);
  if (!h) return { title: "Pelatihan" };

  const base = "https://pendidikcendekia.id";

  return {
    title: h.judul,
    description: h.deskripsi,
    alternates: { canonical: `${base}/${h.slug}` },
    openGraph: {
      title: h.judul,
      description: h.deskripsi,
      type: "website",
      url: `${base}/${h.slug}`,
      images: [h.poster],
    },
  };
}

export default async function HalamanMitra({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const h = cariHalaman(slug);
  if (!h) notFound();

  return (
    <PendaftaranPelatihan
      slug={h.slug}
      wa={h.wa}
      waTampil={h.waTampil}
      poster={h.poster}
    />
  );
}
