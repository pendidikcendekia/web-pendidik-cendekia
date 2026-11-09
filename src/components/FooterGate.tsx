"use client";

import { usePathname } from "next/navigation";
import { isHalamanMitra } from "@/lib/mitra-path";
import Footer from "./Footer";

export default function FooterGate() {
  const pathname = usePathname();

  if (isHalamanMitra(pathname)) return null;

  return <Footer />;
}
