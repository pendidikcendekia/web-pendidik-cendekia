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
  { nama: "Laras", wa: "6281327617731", telp: "+62 813-2761-7731" },
  { nama: "Galih", wa: "6289691410497", telp: "+62 896-9141-0497" },
  { nama: "Yahra", wa: "6285849517571", telp: "+62 858-4951-7571" },
];
