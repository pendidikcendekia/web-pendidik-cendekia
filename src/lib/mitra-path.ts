import { halamanIklan } from "@/data/iklan";

const slugMitra = new Set(halamanIklan.map((h) => h.slug));

export function isHalamanMitra(pathname: string): boolean {
  const segmen = pathname.split("/").filter(Boolean);
  return segmen.length === 1 && slugMitra.has(segmen[0]);
}
