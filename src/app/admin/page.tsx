"use client";

import { useMemo, useState } from "react";
import { PROVINSI } from "@/data/wilayah";
import { ADMIN_LIST } from "@/data/admin";

// ============================================================
// KERANGKA LAMAN ADMIN CRM — Pendidik Cendekia
// ------------------------------------------------------------
// CATATAN: Ini baru kerangka UI. Data masih disimpan di state
// lokal (hilang saat refresh). Integrasi ke Google Sheets
// (Apps Script + Cloudflare Function) akan ditambahkan nanti.
// Autentikasi sementara; nanti diganti Cloudflare Access.
// ============================================================

type CustomerStatus = "prospek" | "follow-up" | "closing" | "batal";

interface Customer {
  id: string;
  createdAt: string;
  admin: string;
  nama: string;
  instansi: string;
  nomor: string;
  email: string;
  kabupaten: string;
  provinsi: string;
  urutanClosing: number;
  status: CustomerStatus;
  catatan: string;
}

const PAGE_SIZE = 8;

const STATUS_OPTIONS: { value: CustomerStatus; label: string }[] = [
  { value: "prospek", label: "Prospek" },
  { value: "follow-up", label: "Follow-up" },
  { value: "closing", label: "Closing" },
  { value: "batal", label: "Batal" },
];

const STATUS_STYLE: Record<CustomerStatus, string> = {
  prospek: "bg-gray-100 text-gray-600",
  "follow-up": "bg-amber-100 text-amber-700",
  closing: "bg-green-100 text-green-700",
  batal: "bg-red-100 text-red-600",
};

// Data contoh — hapus saat API sudah tersambung.
const SEED: Customer[] = [
  {
    id: "CUS-000003",
    createdAt: "2026-10-28T10:12:00+07:00",
    admin: "bima",
    nama: "Rina Wulandari",
    instansi: "SD Negeri 2 Bantul",
    nomor: "+62 812-3456-7890",
    email: "rina@example.com",
    kabupaten: "Bantul",
    provinsi: "DI Yogyakarta",
    urutanClosing: 3,
    status: "closing",
    catatan: "",
  },
  {
    id: "CUS-000002",
    createdAt: "2026-10-20T14:05:00+07:00",
    admin: "laras",
    nama: "Ahmad Fauzi",
    instansi: "SMP Islam Cikarang",
    nomor: "+62 813-2761-7731",
    email: "ahmad@example.com",
    kabupaten: "Bekasi",
    provinsi: "Jawa Barat",
    urutanClosing: 2,
    status: "follow-up",
    catatan: "Minta jadwal setelah gajian.",
  },
  {
    id: "CUS-000001",
    createdAt: "2026-10-11T08:40:00+07:00",
    admin: "galih",
    nama: "Siti Aminah",
    instansi: "SD Negeri 1 Sleman",
    nomor: "+62 896-9141-0497",
    email: "siti@example.com",
    kabupaten: "Sleman",
    provinsi: "DI Yogyakarta",
    urutanClosing: 1,
    status: "closing",
    catatan: "",
  },
];

const INPUT_CLASS =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-biru placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-buah/60 transition";

export default function AdminPage() {
  // --- Auth sementara ---
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [token, setToken] = useState("");

  // --- Navigasi & data ---
  const [activeTab, setActiveTab] = useState<"input" | "daftar">("input");
  const [customers, setCustomers] = useState<Customer[]>(SEED);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  // --- Form ---
  const [nama, setNama] = useState("");
  const [instansi, setInstansi] = useState("");
  const [nomor, setNomor] = useState("");
  const [email, setEmail] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [urutanClosing, setUrutanClosing] = useState("");
  const [status, setStatus] = useState<CustomerStatus>("prospek");
  const [catatan, setCatatan] = useState("");

  function tampilkanToast(pesan: string) {
    setToast(pesan);
    window.setTimeout(() => setToast(null), 3500);
  }

  function masuk(e: React.FormEvent) {
    e.preventDefault();
    if (!adminKey.trim() || !token.trim()) {
      tampilkanToast("Keyname admin dan token wajib diisi.");
      return;
    }
    // TODO: ganti dengan validasi token ke API / Cloudflare Access
    setLoggedIn(true);
  }

  function keluar() {
    setLoggedIn(false);
    setToken("");
    setActiveTab("input");
  }

  function resetForm() {
    setNama("");
    setInstansi("");
    setNomor("");
    setEmail("");
    setKabupaten("");
    setProvinsi("");
    setUrutanClosing("");
    setStatus("prospek");
    setCatatan("");
  }

  function simpanCustomer(e: React.FormEvent) {
    e.preventDefault();
    if (!nama.trim() || !instansi.trim() || !nomor.trim()) {
      tampilkanToast("Nama customer, instansi, dan nomor wajib diisi.");
      return;
    }

    const nomorUrut =
      Number(urutanClosing) ||
      customers.reduce((maks, c) => Math.max(maks, c.urutanClosing), 0) + 1;

    const baru: Customer = {
      id: `CUS-${String(customers.length + 1).padStart(6, "0")}`,
      createdAt: new Date().toISOString(),
      admin: adminKey,
      nama: nama.trim(),
      instansi: instansi.trim(),
      nomor: nomor.trim(),
      email: email.trim(),
      kabupaten: kabupaten.trim(),
      provinsi,
      urutanClosing: nomorUrut,
      status,
      catatan: catatan.trim(),
    };

    setCustomers((prev) => [baru, ...prev]);
    resetForm();
    tampilkanToast(
      "Tersimpan sementara. Menunggu integrasi ke Google Spreadsheet.",
    );
  }

  function hapusCustomer(id: string) {
    if (!window.confirm("Hapus data ini? (hanya di tampilan sementara)")) return;
    setCustomers((prev) => prev.filter((c) => c.id !== id));
    tampilkanToast("Data dihapus dari tampilan sementara.");
  }

  function editCustomer() {
    tampilkanToast("Fitur edit akan dihubungkan ke API.");
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter(
      (c) =>
        c.nama.toLowerCase().includes(q) ||
        c.instansi.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.kabupaten.toLowerCase().includes(q) ||
        c.provinsi.toLowerCase().includes(q),
    );
  }, [customers, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const stats = {
    total: customers.length,
    closing: customers.filter((c) => c.status === "closing").length,
    prospek: customers.filter((c) => c.status === "prospek").length,
    admin: new Set(customers.map((c) => c.admin)).size,
  };

  // ================= LOGIN =================
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#f6f8fb] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-krem rounded-2xl ring-2 ring-buah mx-auto mb-4 flex items-center justify-center">
              <img
                src="/assets/logo/logo-pc.webp"
                alt="Logo Pendidik Cendekia"
                className="h-10 w-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-biru">Admin CRM</h1>
            <p className="text-gray-500 text-sm mt-1">
              Pendidik Cendekia · Input data customer
            </p>
          </div>

          <form
            onSubmit={masuk}
            className="bg-white border border-krem rounded-3xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1.5">
                Keyname Admin
              </label>
              <input
                type="text"
                list="daftar-admin"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="contoh: bima"
                autoComplete="username"
                className={INPUT_CLASS}
              />
              <datalist id="daftar-admin">
                {ADMIN_LIST.map((a) => (
                  <option key={a.nama} value={a.nama.toLowerCase()} />
                ))}
              </datalist>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1.5">
                Token Akses
              </label>
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className={INPUT_CLASS}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-buah text-white font-bold py-3 rounded-full hover:bg-[#e3491d] transition"
            >
              <i className="fas fa-right-to-bracket mr-2"></i>Masuk
            </button>

            <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
              Kerangka autentikasi sementara. Versi produksi akan memakai
              Cloudflare Access (login email).
            </p>
          </form>
        </div>

        {toast && <Toast pesan={toast} />}
      </div>
    );
  }

  // ================= DASHBOARD =================
  return (
    <div className="min-h-screen bg-[#f6f8fb] pb-20">
      {/* Header */}
      <header className="bg-white border-b border-krem sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/assets/logo/logo-pc.webp"
              alt="Logo Pendidik Cendekia"
              className="h-9 w-auto"
            />
            <div className="min-w-0">
              <p className="font-bold text-biru leading-tight truncate">
                Admin CRM
              </p>
              <p className="text-[11px] text-gray-400 leading-tight truncate">
                Pendidik Cendekia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-2 bg-krem text-biru text-xs font-semibold px-3 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {adminKey}
            </span>
            <button
              onClick={keluar}
              className="text-sm font-semibold text-gray-500 hover:text-buah transition"
            >
              <i className="fas fa-right-from-bracket mr-1.5"></i>Keluar
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Kartu statistik */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard ikon="fa-users" label="Total Customer" nilai={stats.total} />
          <StatCard
            ikon="fa-handshake"
            label="Closing"
            nilai={stats.closing}
            warna="text-green-600"
          />
          <StatCard
            ikon="fa-fire"
            label="Prospek"
            nilai={stats.prospek}
            warna="text-buah"
          />
          <StatCard
            ikon="fa-user-tie"
            label="Admin Terlibat"
            nilai={stats.admin}
          />
        </div>

        {/* Tab */}
        <div className="bg-white border border-krem rounded-2xl p-1.5 inline-flex gap-1 mb-6">
          <TabButton
            aktif={activeTab === "input"}
            onClick={() => setActiveTab("input")}
            ikon="fa-plus"
            label="Input Data"
          />
          <TabButton
            aktif={activeTab === "daftar"}
            onClick={() => setActiveTab("daftar")}
            ikon="fa-table-list"
            label="Daftar Customer"
          />
        </div>

        {/* ===== TAB INPUT ===== */}
        {activeTab === "input" && (
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <form
              onSubmit={simpanCustomer}
              className="lg:col-span-3 bg-white border border-krem rounded-3xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold text-biru mb-1">
                Form Data Customer
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Data akan masuk ke spreadsheet &ldquo;Customer&rdquo;.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nama Customer" wajib className="sm:col-span-2">
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama lengkap"
                    className={INPUT_CLASS}
                  />
                </Field>

                <Field label="Asal Instansi" wajib className="sm:col-span-2">
                  <input
                    type="text"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    placeholder="Sekolah / instansi"
                    className={INPUT_CLASS}
                  />
                </Field>

                <Field label="Nomor WhatsApp" wajib>
                  <input
                    type="tel"
                    value={nomor}
                    onChange={(e) => setNomor(e.target.value)}
                    placeholder="62812xxxxxxx"
                    className={INPUT_CLASS}
                  />
                </Field>

                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className={INPUT_CLASS}
                  />
                </Field>

                <Field label="Kabupaten / Kota">
                  <input
                    type="text"
                    value={kabupaten}
                    onChange={(e) => setKabupaten(e.target.value)}
                    placeholder="contoh: Sleman"
                    className={INPUT_CLASS}
                  />
                </Field>

                <Field label="Provinsi">
                  <select
                    value={provinsi}
                    onChange={(e) => setProvinsi(e.target.value)}
                    className={INPUT_CLASS}
                  >
                    <option value="">Pilih provinsi</option>
                    {PROVINSI.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Urutan Closing">
                  <input
                    type="number"
                    min={1}
                    value={urutanClosing}
                    onChange={(e) => setUrutanClosing(e.target.value)}
                    placeholder="Otomatis"
                    className={INPUT_CLASS}
                  />
                </Field>

                <Field label="Status">
                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.value as CustomerStatus)
                    }
                    className={INPUT_CLASS}
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Catatan" className="sm:col-span-2">
                  <textarea
                    rows={3}
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                    placeholder="Catatan tambahan (opsional)"
                    className={`${INPUT_CLASS} resize-none`}
                  ></textarea>
                </Field>

                <Field label="Admin (otomatis)" className="sm:col-span-2">
                  <input
                    type="text"
                    value={adminKey}
                    readOnly
                    className={`${INPUT_CLASS} bg-gray-50 text-gray-500`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-buah text-white font-bold py-3.5 rounded-full hover:bg-[#e3491d] transition"
              >
                <i className="fas fa-floppy-disk mr-2"></i>Simpan Customer
              </button>
            </form>

            {/* Panduan singkat */}
            <aside className="lg:col-span-2 bg-krem rounded-3xl p-6 border border-buah/15">
              <h3 className="font-bold text-biru mb-3">
                <i className="fas fa-circle-info text-buah mr-2"></i>
                Alur singkat
              </h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-buah text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  Isi data customer di form.
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-buah text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  Data tersimpan ke spreadsheet Customer.
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-buah text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  Saat generate sertifikat, salin data dari spreadsheet.
                </li>
              </ol>
              <p className="mt-5 text-xs text-gray-500 leading-relaxed">
                Nomor closing dihitung otomatis di server saat integrasi aktif,
                sehingga aman jika beberapa admin input bersamaan.
              </p>
            </aside>
          </div>
        )}

        {/* ===== TAB DAFTAR ===== */}
        {activeTab === "daftar" && (
          <div className="bg-white border border-krem rounded-3xl shadow-sm overflow-hidden">
            <div className="p-5 md:p-6 border-b border-krem flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-biru">
                  Daftar Customer
                </h2>
                <p className="text-gray-500 text-sm">
                  {filtered.length} data ditemukan
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <i className="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Cari nama, instansi, wilayah…"
                  className="w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm text-biru placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-buah/60"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="bg-[#fafbfc] text-gray-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="px-5 py-3 font-semibold">ID</th>
                    <th className="px-5 py-3 font-semibold">Nama</th>
                    <th className="px-5 py-3 font-semibold">Instansi</th>
                    <th className="px-5 py-3 font-semibold">Kontak</th>
                    <th className="px-5 py-3 font-semibold">Wilayah</th>
                    <th className="px-5 py-3 font-semibold text-center">
                      Closing
                    </th>
                    <th className="px-5 py-3 font-semibold text-center">
                      Status
                    </th>
                    <th className="px-5 py-3 font-semibold">Admin</th>
                    <th className="px-5 py-3 font-semibold text-right">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paged.length === 0 ? (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-5 py-12 text-center text-gray-400"
                      >
                        <i className="fas fa-inbox text-3xl mb-3 block"></i>
                        Belum ada data yang cocok.
                      </td>
                    </tr>
                  ) : (
                    paged.map((c) => (
                      <tr key={c.id} className="hover:bg-[#fafbfc]">
                        <td className="px-5 py-3 text-gray-400 font-mono text-xs">
                          {c.id}
                        </td>
                        <td className="px-5 py-3 font-semibold text-biru">
                          {c.nama}
                        </td>
                        <td className="px-5 py-3 text-gray-600">
                          {c.instansi}
                        </td>
                        <td className="px-5 py-3 text-gray-600">
                          <div>{c.nomor}</div>
                          <div className="text-xs text-gray-400">{c.email}</div>
                        </td>
                        <td className="px-5 py-3 text-gray-600">
                          <div>{c.kabupaten || "-"}</div>
                          <div className="text-xs text-gray-400">
                            {c.provinsi || "-"}
                          </div>
                        </td>
                        <td className="px-5 py-3 text-center font-semibold text-biru">
                          {c.urutanClosing}
                        </td>
                        <td className="px-5 py-3 text-center">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLE[c.status]}`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-gray-600">{c.admin}</td>
                        <td className="px-5 py-3 text-right">
                          <button
                            onClick={() => editCustomer()}
                            aria-label={`Edit ${c.nama}`}
                            className="w-8 h-8 rounded-lg text-biru hover:bg-krem transition"
                          >
                            <i className="fas fa-pen text-xs"></i>
                          </button>
                          <button
                            onClick={() => hapusCustomer(c.id)}
                            aria-label={`Hapus ${c.nama}`}
                            className="w-8 h-8 rounded-lg text-red-500 hover:bg-red-50 transition ml-1"
                          >
                            <i className="fas fa-trash text-xs"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 md:p-5 border-t border-krem flex items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                Halaman {safePage} dari {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage <= 1}
                  className="px-6 py-2 rounded-full text-sm font-semibold border border-gray-200 text-biru disabled:opacity-40 disabled:cursor-not-allowed hover:bg-krem transition"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage >= totalPages}
                  className="px-6 py-2 rounded-full text-sm font-semibold border border-gray-200 text-biru disabled:opacity-40 disabled:cursor-not-allowed hover:bg-krem transition"
                >
                  Berikutnya
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {toast && <Toast pesan={toast} />}
    </div>
  );
}

// ================= SUB-COMPONENTS =================

function Field({
  label,
  wajib,
  className = "",
  children,
}: {
  label: string;
  wajib?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-1.5">
        {label}
        {wajib && <span className="text-buah ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function StatCard({
  ikon,
  label,
  nilai,
  warna = "text-biru",
}: {
  ikon: string;
  label: string;
  nilai: number;
  warna?: string;
}) {
  return (
    <div className="bg-white border border-krem rounded-2xl p-4 md:p-5">
      <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
        <i className={`fas ${ikon}`}></i>
        <span className="truncate">{label}</span>
      </div>
      <p className={`text-2xl md:text-3xl font-bold ${warna}`}>{nilai}</p>
    </div>
  );
}

function TabButton({
  aktif,
  onClick,
  ikon,
  label,
}: {
  aktif: boolean;
  onClick: () => void;
  ikon: string;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
        aktif
          ? "bg-buah text-white shadow-sm"
          : "text-biru hover:bg-krem"
      }`}
    >
      <i className={`fas ${ikon}`}></i>
      {label}
    </button>
  );
}

function Toast({ pesan }: { pesan: string }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
      <div className="bg-biru text-white text-sm rounded-xl px-4 py-3 shadow-lg flex items-start gap-2">
        <i className="fas fa-circle-info mt-0.5 text-[#ffd954]"></i>
        <span>{pesan}</span>
      </div>
    </div>
  );
}
