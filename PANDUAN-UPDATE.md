# 📘 PANDUAN UPDATE WEBSITE — Pendidik Cendekia

> Panduan singkat untuk Anda (Moh. Slamet).
> Website sekarang memakai **Next.js** (bukan HTML). Panduan ini berisi **3 tempat yang boleh Anda sentuh** dan cara mengubah konten di halaman yang paling sering di-update: **Beranda, Pelatihan Terbaru, dan Belajar Mandiri**.

---

## 🧭 3 TEMPAT YANG BOLEH ANDA SENTUH

| Folder / File | Fungsi | Dipakai buat |
|---------------|--------|--------------|
| `public/assets/` | Semua **gambar** (logo, flyer, karya) | Ganti/tambah gambar |
| `src/app/**/page.tsx` | **Konten halaman** (teks, judul, tanggal) | Ubah teks |
| `src/data/admin.ts` | **Data admin** (nama + nomor WA) | Tambah/hapus admin |

> ⚠️ **JANGAN sentuh** folder `src/components/`, `src/app/api/`, dan file config (`next.config.ts`, `package.json`, dll). Itu "otomotif" website — salah sentuh semua halaman bisa rusak.

---

## ✍️ CARA MENGUBAH TEKS (contoh sederhana)

Semua teks website berada di dalam file bernama **`page.tsx`**. Kata yang tampil di website adalah teks di **antara tanda `>` dan `<`**.

Contoh nyata di file `src/app/program/pelatihan-terbaru/page.tsx`:

```tsx
<h2 className="text-2xl md:text-3xl font-bold text-biru mb-3">
  Optimalisasi Ruang Murid dalam Pembelajaran Digital   ← TEKS INI
</h2>
```

➡️ Silakan ubah **hanya bagian "Optimalisasi Ruang Murid..."** menjadi judul baru. JANGAN ubah bagian yang diawali `<`, `>` , `className`, atau `{...}`.

---

## 🖼️ CARA MENGGANTI GAMBAR

- Gambar website ada di folder `public/assets/`.
- Cara paling mudah: **salin gambar baru ke folder tersebut dengan NAMA FILE SAMA** (menimpa file lama). Contoh ganti flyer beranda: timpa `public/assets/flyer/contoh-pamflet-2.webp` dengan file baru (nama tetap).

> Catatan: kalau gambar baru ukurannya besar (> 300KB), sebaiknya beri tahu admin/developer untuk dikompres dulu biar website tetap cepat.

---

# 📌 PETA UPDATE CEPAT — 3 HALAMAN INTENSITAS TINGGI

Semua baris di bawah adalah **lokasi teks yang paling sering Anda ubah**. Buka file-nya di VS Code, tekan `Cmd+F`, ketik kata kuncinya, lalu ubah teksnya.

---

## 1) 🏠 HALAMAN BERANDA
**File:** `src/app/page.tsx`

| Yang sering diubah | Kata kunci pencarian (Cmd+F) |
|-------------------|-------------------------------|
| Judul/tanggal Pelatihan 1 | `30 Agustus 2026` |
| Judul/tanggal Pelatihan 2 | `6 September 2026` |
| Judul/tanggal Pelatihan 3 | `5 September 2026` |
| Nama & instansi peserta karya | `Ibu Rina`, `Ibu Sari`, `Bapak Dedi` |
| Isi testimoni | `Materinya sangat praktis` |
| Nomor WA (bila admin ganti) | `628991945123` |

**Ganti flyer pelatihan:** gambar Pelatihan 1 = `public/assets/flyer/contoh-pamflet-2.webp`, Pelatihan 2 = `contoh-pamflet-3.webp`, Pelatihan 3 = `contoh-pamflet-1.webp`.

---

## 2) 🎓 HALAMAN PELATIHAN TERBARU
**File:** `src/app/program/pelatihan-terbaru/page.tsx`

| Yang sering diubah | Kata kunci pencarian (Cmd+F) |
|-------------------|-------------------------------|
| Judul pelatihan utama (paling atas) | `Optimalisasi Ruang Murid dalam Pembelajaran Digital` |
| Tanggal & jamnya | `Sabtu, 5` (baris `September 2026`) |
| Judul Workshop | `Kelas Menulis Karya Ilmiah Guru` |
| Tanggal Workshop | `12 September 2026` |
| Judul Seminar | `Seminar Media Pembelajaran Interaktif berbasis AI` |
| Tanggal Seminar | `19 September 2026` |

**PENTING — catatan nomor WA:** kalau mengganti judul/tanggal, ada juga **teks di dalam `wa.me/...`** yang menyebut nama pelatihan (hanya untuk isi otomatis chat WhatsApp). Kalau Anda tidak paham, lebih aman **biarkan** — yang penting judul & tanggal di tampilan berubah. Kalau mau diganti juga, minta tolong admin/developer.

**Ganti gambar:** flyer = `public/assets/flyer/contoh-pamflet-1.webp`, `contoh-pamflet-2.webp`, `contoh-pamflet-3.webp`.

---

## 3) 📚 HALAMAN BELAJAR MANDIRI
**File:** `src/app/program/belajar-mandiri/page.tsx`

| Yang sering diubah | Kata kunci pencarian (Cmd+F) |
|-------------------|-------------------------------|
| Nomor registrasi badan hukum (di bawah contoh sertifikat) | `AHU-037669.AH.01.30.Tahun 2025` |
| Judul 3 topik materi | `Optimalisasi Ruang Murid`, `Kelas Menulis Karya Ilmiah`, `Seminar Media Pembelajaran Interaktif` |

> Halaman ini tidak punya tanggal yang sering berubah, tapi judul topiknya bisa Anda sesuaikan.

**Ganti gambar:** flyer topik = `contoh-pamflet-1.webp` (Ruang Murid), `contoh-pamflet-2.webp` (Karya Ilmiah), `contoh-pamflet-3.webp` (Media AI). Contoh sertifikat = `public/assets/flyer/Contoh-Sertifikat.webp`.

---

## ⚠️ ATURAN EMAS (agar tidak rusak)

1. Hanya ubah **teks di antara `>` dan `<`** di file `page.tsx`.
2. Hanya pindahkan/ganti **gambar** di `public/assets/`.
3. **Jangan hapus atau edit** bagian yang diawali `<`, `className`, `{`, `import`, `export`, `"use client"`.
4. Kalau **ragu-ragu**, jangan dipaksakan — tulis saja di obrolan: *"ubah [ini] jadi [itu]"*, nanti developer yang kerjakan dan push-kan.
5. Setelah save, website TIDAK otomatis update — harus **push ke GitHub** dulu (lihat bawah).

---

## 🔄 WORKFLOW SETELAH MENGUBAH (WAJIB PUSH)

Setelah save perubahan di VS Code, jalankan 3 baris ini di Terminal:

```bash
cd ~/web-pendidik-cendekia
git add -A
git commit -m "update konten"
git push origin main
```

Agar cepat, bisa digabung jadi satu baris:
```bash
cd ~/web-pendidik-cendekia && git add -A && git commit -m "update konten" && git push origin main
```

Setelah itu Vercel otomatis membangun & menayangkan perubahan (tunggu 1–3 menit, cek di pendidikcendekia.vercel.app).

---

*Dibuat 3 September 2026. Panduan ini bisa disesuaikan bila struktur website berubah.*
