// ============================================
// DATA ADMIN — Edit file ini saja untuk tambah/hapus admin
// File ini dipakai oleh halaman /kontak (src/app/kontak/page.tsx)
// ============================================

export interface Admin {
  nama: string;
  wa: string;
  telp: string;
}

export const ADMIN_LIST: Admin[] = [
  { nama: "Bima", wa: "628991945123", telp: "+62 895-1945-123" },
  { nama: "Ayu", wa: "6281276543210", telp: "+62 812-7654-3210" },
  { nama: "Citra", wa: "6281398765432", telp: "+62 813-9876-5432" },
];
