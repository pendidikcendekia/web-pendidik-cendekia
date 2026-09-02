"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const menuItems = [
  { label: "Beranda", url: "/" },
  { label: "Tentang", url: "/tentang" },
  { label: "Karya", url: "/karya" },
  { label: "Artikel", url: "/artikel" },
  { label: "Kontak", url: "/kontak" },
  { label: "Layanan Member", url: "/layanan-member" },
];

const programItems = [
  { label: "Pelatihan Terbaru", url: "/program/pelatihan-terbaru" },
  { label: "Belajar Mandiri", url: "/program/belajar-mandiri" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  const isProgramActive =
    pathname.startsWith("/program/pelatihan-terbaru") ||
    pathname.startsWith("/program/belajar-mandiri");

  return (
    <header className="sticky top-0 z-50 bg-white shadow" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/assets/logo/logo-pc.png"
              alt="Logo Pendidik Cendekia"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-biru">
              Pendidik Cendekia
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-7 font-medium">
            {menuItems.map((item) => {
              if (item.label === "Program") return null;
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  className={
                    isActive(item.url)
                      ? "text-buah font-semibold"
                      : "text-biru hover:bg-krem hover:text-buah px-3 py-2 rounded-lg transition"
                  }
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Program Dropdown */}
            <div className="relative group">
              <button
                className={
                  isProgramActive
                    ? "text-buah font-semibold flex items-center gap-1"
                    : "text-biru hover:bg-krem hover:text-buah px-3 py-2 rounded-lg transition flex items-center gap-1"
                }
              >
                Program
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {programItems.map((item, i) => (
                  <Link
                    key={item.url}
                    href={item.url}
                    className={`block px-4 py-3 text-biru hover:bg-buah hover:text-white transition ${
                      i === 0 ? "rounded-t-xl" : ""
                    } ${i === programItems.length - 1 ? "rounded-b-xl" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Aksi Kanan */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/628991945123"
              target="_blank"
              className="bg-buah text-white px-5 py-2 rounded-full font-semibold hover:bg-biru transition"
            >
              Hubungi WA
            </a>
          </div>

          {/* Tombol Menu HP */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
            className="lg:hidden flex items-center gap-1.5"
          >
            <span className="text-xs font-bold text-biru">Menu</span>
            <svg
              className="w-4 h-4 text-biru"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="w-9 h-9 bg-buah rounded-full flex items-center justify-center shadow-md">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Menu HP */}
      <div
        className={`lg:hidden ${
          mobileOpen ? "" : "hidden"
        } bg-white border-t`}
      >
        <div className="px-4 py-3 space-y-2 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`block py-2 ${
                isActive(item.url) ? "text-buah" : "text-biru"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <p className="text-biru font-semibold pt-1">Program</p>
          {programItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`block pl-4 py-1 ${
                isActive(item.url) ? "text-buah" : "text-biru"
              }`}
            >
              · {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/628991945123"
            target="_blank"
            className="block py-2 bg-buah text-center text-white rounded-full font-semibold"
          >
            Hubungi WA
          </a>
        </div>
      </div>
    </header>
  );
}
