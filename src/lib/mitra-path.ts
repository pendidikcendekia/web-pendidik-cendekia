import { mitra } from "@/data/pelatihan";

const slugMitra = new Set(mitra.map((m) => m.slug));

export function isHalamanMitra(pathname: string): boolean {
  const segmen = pathname.split("/").filter(Boolean);
  return segmen.length === 1 && slugMitra.has(segmen[0]);
}
