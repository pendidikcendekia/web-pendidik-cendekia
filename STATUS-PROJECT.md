# STATUS PROJECT — Pendidik Cendekia
**Diperbarui: 30 September 2026, setelah revisi 4 halaman sesuai catatan revisi**

---

## ✅ YANG SUDAH SELESAI

### Infrastruktur
| Item | Status |
|---|---|
| Migrasi Next.js dari Vercel ke Cloudflare Workers | ✅ Selesai |
| Build OpenNext (13 route) | ✅ Sukses |
| Deploy Worker `pendidik-cendekia` | ✅ Live |
| GitHub → Cloudflare Workers Builds | ✅ **Auto-deploy aktif** |
| Login Wrangler | ✅ `pendidikcendekia@gmail.com` |
| Account ID | `4fdbfb35ace9e09e6b56a154cb8222d7` |

### URL Saat Ini
```
Cloudflare : https://pendidik-cendekia.next-temp.workers.dev
Vercel     : https://pendidikcendekia.vercel.app
```

### File Konfigurasi Cloudflare
```
wrangler.jsonc          → worker name, nodejs_compat, assets binding
open-next.config.ts     → defineCloudflareConfig({})
public/_headers         → cache aset + security header
.dev.vars               → NEXTJS_ENV=development (gitignored)
```

### Optimasi yang Sudah Dikerjakan
| Item | Sebelum | Sesudah |
|---|---|---|
| Logo utama | 276 KB | **38 KB** (WebP) |
| Logo footer | 118 KB | **25 KB** (WebP) |
| Total logo | 390 KB | **68 KB** (−83%) |
| favicon.ico | 25,9 KB (segitiga Next.js) | **3,4 KB** (logo asli) |
| apple-touch-icon | — | 28 KB (baru) |
| icon-512.webp | — | 41 KB (PWA) |

### Perbaikan Lanjutan (30 September 2026)
Koreksi setelah pengecekan user:

| Item | Perbaikan |
|---|---|
| Tombol hero Beranda | "Lihat Jadwal Pelatihan" (bukan "Daftar Sekarang") & **"Validasi Sertifikat"** (bukan "Lihat Detail") |
| Contoh Sertifikat | Desain disamakan persis dengan **"PELATIHAN TERDEKAT"**: kartu bg putih, **teks di kiri** (putih), **gambar di kanan** (bg krem). Judul tidak diulang lagi — hanya badge "CONTOH SERTIFIKAT" + judul "Sertifikat dapat di Validasi" |
| Validasi | Cek berdasarkan **nama yang terdaftar**, bukan nomor sertifikat |
| Penawaran Belajar Mandiri | Tetap dibalik (gambar di kanan), proporsi disamakan dengan versi yang disetujui: grid 3:2, lebar gambar `max-w-[16rem]` |
| Mandiri Belajar | Hapus teks "Fleksibel, Efektif, Tetap Terbimbing." |
| **Foto Koordinator** | Placeholder inisial "MM" → foto asli Muhammad Miftahussurur. Dikompresi 524 KB PNG → **9,2 KB** WebP (400×400, hemat 98%). `object-cover` + `rounded-full` otomatis memotong jadi lingkaran |

🐞 **Bug ikon ditemukan & diperbaiki:** `fa-file-certificate` hanya tersedia di **Font Awesome 6 Pro** (berbayar), sedangkan website memakai **FA 6.5.1 Free** → ikon tidak ter-render (hanya lingkaran). Diganti ke **`fa-certificate`** (tersedia di Free, `content:"\f0a3"`).

⚠️ **Ingat untuk ke depan:** sebelum pakai ikon Font Awesome baru, pastikan nama ikon ada di [FA Free](https://fontawesome.com/search?o=r&m=free&f=classic) — jangan asumsikan semua nama tersedia.

### File yang Sudah Dihapus
```
layanan-member.html      (sisa static lama)
nextjs-panduan.html      (sisa static lama)
```

### Revisi Konten & UI (30 September 2026)
Sumber: `Catatan Revisi Web PC.pdf`

| Halaman | Perubahan |
|---|---|
| **Beranda** | Judul hero → "Pengembangan Kompetensi Pendidik". Urutan section: Hero → Pelatihan Terbaru → Mengapa Pendidik. Tombol "Lihat Detail" → `/layanan-member`. Tombol "Lihat Semua Karya" (baru). CTA → "Daftar Pelatihan" |
| **Tentang** | Hero 2 paragraf + tombol "Lihat Program Kami". **Kartu Koordinator Program** (Muhammad Miftahussurur) di samping blok Visi |
| **Pelatihan Terbaru** | Hero rata tengah. "Formulir dan Detail Kegiatan", "Pendaftaran Pelatihan Terbaru", "E-Sertifikat Pelatihan". Section baru: **Contoh Sertifikat Kegiatan** + **Penawaran Mandiri Belajar** |
| **Mandiri Belajar** | Route `belajar-mandiri` → **`mandiri-belajar`** (redirect permanen 308). Hero "Belajar Mandiri, Fasilitas Lengkap", tombol "Ajukan Fasilitas". Urutan: Hero → Program → Pendaftaran → Alur → Pilihan Tema |

**Anchor penting (untuk tautan dari luar halaman):**
```
/program/pelatihan-terbaru#daftar-pelatihan      ← tombol "Daftar"
/program/pelatihan-terbaru#pelatihan-lainnya     ← tombol "Lihat Semua Jadwal"
/program/pelatihan-terbaru#detail-kegiatan       ← tombol "Lihat Detail"
/program/mandiri-belajar#formulir                ← tombol "Ajukan Fasilitas"
/program/mandiri-belajar#pilihan-tema            ← tombol "Lihat Pilihan Tema"
```

⚠️ **Pekerjaan yang belum selesai:**
- Review visual 4 halaman di browser (bawaan perangkat) untuk cek jarak & tampilan mobile.

### 🚨 Auto-Deploy Cloudflare Terputus (30 Sep 2026)
Push `7447915` **tidak** terkirim ke Cloudflare. Gejalanya:
- `wrangler deployments list` → deployment terakhir masih 28–29 Sep 2026
- Tidak ada folder `.github/workflows/` (jadi **bukan** GitHub Actions)
- `Source: Upload` →means deploy datang dari CLI, bukan dari build Git

**Penyebab yang mungkin:** koneksi GitHub di Cloudflare Workers Builds terputus.
**Perbaikan:** Cloudflare Dashboard → Worker `pendidik-cendekia` → tab **Builds** → cek koneksi repo.

**Sementara ini** deploy manual tetap berfungsi normal:
```bash
npm run deploy     # opennextjs-cloudflare build && opennextjs-cloudflare deploy
```
⚠️ Selalu cek `https://pendidik-cendekia.next-temp.workers.dev` setelah push — kalau isinya masih versi lama, langsung `npm run deploy`.

### 🌐 Keputusan Domain (30 Sep 2026)
Rencana: `pendidik.cendekia.id` + `cendekia.id` + `ikal.cendekia.id`

❌ **Tidak bisa dipakai** — hasil pengecekan DNS:
| Domain | Kenapa |
|---|---|
| `cendekia.id` | **Sudah terdaftar** sejak 1993, registrar PT Digital Registra Indonesia, berakhir 28 Okt 2026. Dipakai aktif: Cloudflare Email Routing + Brevo. Status `clientTransferProhibited` + `serverTransferProhibited` → **tidak bisa diambil alih** |
| `pendidik.cendekia.id` | **Mustahil** — subdomain hanya bisa dibuat di bawah domain milik sendiri. Bukan soal harga, tapi DNS + sertifikat SSL |

✅ **Keputusan: pakai `pendidikcendekia.id`** (sudah dicek: belum ada nameserver → tersedia).
Semua varian `cendekia.*` sudah habis: `.id` `.co.id` `.web.id` `.my.id` `.or.id` `.net` `.org` `.biz` `.app`

Konvensi alamat yang disepakati:
| Alamat | Isi |
|---|---|
| `pendidikcendekia.id` | Unit pelatihan guru (situs ini) |
| `ciptaarahcendekia.id` | Induk Cendekia — **belum dibeli** (kosong, kalau diperlukan) |
| `ikal.cendekia.id` | Unit pengembangan — **belum ada** |

**Yang belum dikerjakan:** beli domainnya, arahkan NS ke Cloudflare, daftarkan sebagai *Custom Domain* di Worker.
Setelah itu tidak perlu ubah kode sedikit pun — Worker tetap sama.

💡 Catatan: subdomain gratis, jadi kalau nanti punya domain induk, `pendidik.` dan `ikal.` tidak menambah biaya.

---

## 🔄 ALUR KERJA (SUDAH SEMPURNA)

```
Edit di VS Code → Ctrl+S → git push
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
    Vercel (otomatis)          Cloudflare (otomatis)
```

**Tidak ada lagi `npm run deploy` manual.**

Perintah yang dipakai:
```bash
cd ~/web-pendidik-cendekia
git add -A && git commit -m "catatan" && git push
```

**Upside & downsides upgrade Paid:**
- Alur kerja **TIDAK BERUBAH** saat upgrade ke Paid
- Paid hanya menambah kuota: 100.000 → 10 juta request/bulan
- Tidak perlu setup ulang

---

## 📊 BATAS KUOTA FREE

```
100.000 request/hari  (reset 00:00 UTC = 07:00 WIB)
```

| Jenis | Dihitung? |
|---|---|
| Buka halaman (HTML) | ⚠️ YA |
| Gambar, JS, CSS | ❌ Gratis (CDN langsung) |
| `/api/validasi` | ⚠️ YA |

Terpakai saat testing: **132 / 100.000 (0,13%)**

**Batas realistis: ~30.000 kunjungan/hari** (asumsi 3 halaman/orang)

**Fail-open:** jika kuota habis, website tetap jalan normal (bukan error page).

---

## 📋 7 COMMIT TERAKHIR

```
e225a47  Hapus dynamicParams=false yang bikin 404 di Cloudflare Worker
87846a6  Pindahkan halaman admin dari /mitra/[slug] ke root /[slug]
ee83291  Hapus ajakan daftar oranye + sembunyikan tombol WA di halaman mitra
39d9d4f  Revisi halaman mitra: hero 1 baris, Mandiri Belajar, Kesan Peserta
82360dc  Redesign halaman mitra mengikuti desain halaman pusat
39d9d4f  (lihat catatan revisi halaman mitra di bawah)
```

### Riwayat Halaman Admin per Admin (1–2 Oktober 2026)

| Commit | Isi |
|---|---|
| `9995cc3` | Prototipe awal 3 halaman admin di `/mitra/[slug]` |
| `82360dc` | Redesign mengikuti `/program/pelatihan-terbaru`: hero, Pelatihan Terdekat, Formulir & Detail, Contoh Sertifikat, Mandiri Belajar, Kesan Peserta |
| `39d9d4f` | Hero judul 1 baris (48→36px + `md:whitespace-nowrap`), section "Akses Fasilitas Pelatihan" → "Mandiri Belajar", kartu organizer dihapus, 3 testimoni, tombol Daftar Sekarang + Diskusi dengan Admin |
| `ee83291` | Hapus section "Kuota 60 peserta / Jangan sampai kehabisan tempat"; sembunyikan navbar "Hubungi WA" + tombol WA mengambang di halaman admin |
| `87846a6` | Pindah `/mitra/[slug]` → `/[slug]` (URL bersih tanpa prefix), redirect 308 `/mitra/:slug` → `/:slug`, `src/lib/mitra-path.ts`, perbaikan lint `<a>` → `<Link>` |
| `e225a47` | Bug Cloudflare 404 (`NoFallbackError`) akibat `dynamicParams = false` — dihapus setelah diuji dengan `wrangler dev` |

⚠️ **Catatan penting Cloudflare:** `dynamicParams = false` pada route root `[slug]` membuat Worker mengembalikan 404 untuk semua halaman admin, sementara Vercel normal. Jangan dikembalikan tanpa diuji dulu di `npx wrangler dev`.

### Riwayat Revisi 30 September 2026

Semua perubahan di atas berasal dari `Catatan Revisi Web PC.pdf`, dikerjakan bertahap:

| Commit | Isi | Status review user |
|---|---|---|
| `2ea2809` | Revisi awal 4 halaman + rename Mandiri Belajar | perlu perbaikan |
| `c396fd8` | Tombol hero, bug ikon FA Pro, layout sertifikat | perlu perbaikan |
| `33d96d6` | Desain Contoh Sertifikat = PELATIHAN TERDEKAT, proporsi Penawaran | perlu perbaikan |
| `9b1e660` | Proporsi gambar Penawaran (53% → 91% terisi) | ✅ disetujui |
| `e207e7c` | Judul "Akses Fasilitas Pelatihan" | ✅ **disetujui** |

---

## ⏭️ RENCIANA (NEXT STEPS)

### 1. 🔴 Beli Domain + Email (BESOK)
Target: `pendidikcendekia.id`

| Item | Harga | Catatan |
|---|---|---|
| Domain `.id` (2 tahun) | Rp298.000 | Wajib min. 2 tahun |
| Addon Email 2 GB (1 tahun) | Rp120.000 | Rp10.000/bln |
| DNS Management | GRATIS | ✅ ikut centang |
| **Total** | **Rp418.000** + PPN | |

**Privacy Protection: SKIP** (Rp6.625/bln = Rp79.500/tahun, belum perlu)

⚠️ **PENTING — koreksi dari sesi sebelumnya:**
- `.id` **BOLEH** dipakai untuk Google Ads (saya salah sebelumnya)
- Syarat verifikasi: email + identitas saja, tidak perlu dokumen tambahan
- Voucher promo `.id` Rp99.000 pernah berlaku sampai 31 Maret 2026 — **cek masih aktif atau tidak**

### 2. 🔴 Nameserver → Cloudflare
Setelah domain aktif:
1. Cloudflare Dashboard → **Add a site** → masukkan domain Anda
2. Cloudflare beri **2 nameserver** (tsubstackUnik per akun — jangan salin dari internet)
3. MyDomaiNesia → menu Nameserver → **ganti dengan 2 NS dari Cloudflare**
4. Tunggu propagasi 1–24 jam
5. Nonaktifkan DNSSEC di DomaiNesia **sebelum** ganti NS (bisa konflik)

### 3. 🔴 Setup Email (MX/SPF/DKIM)
Setelah nameserver aktif, di Cloudflare DNS:
```
MX     → dari Mailspace/DomaiNesia    → DNS only
SPF    → dari Mailspace               → DNS only
DKIM   → dari Mailspace               → DNS only
```
**Wajib "DNS only"** (bukan proxy orange cloud) — kalau di-proxy, email mati.

### 4. 🟡 Update Domain di Kode
Setelah domain aktif, ubah **3 file**:
```
src/app/layout.tsx     → metadataBase: new URL("https://domain-anda.id")
src/app/sitemap.ts     → base URL
src/app/robots.ts      → sitemap URL (kalau ada)
```
Lalu `git push` — auto-deploy ke kedua platform.

### 5. 🟡 Revisi Konten Teks — 🟢 4 DARI 6 SELESAI
Sumber revisi: `Catatan Revisi Web PC.pdf`

| Halaman | Status |
|---|---|
| Beranda | ✅ Selesai (30 Sep 2026) |
| Tentang | ✅ Selesai (30 Sep 2026) |
| Program → Pelatihan Terbaru | ✅ Selesai (30 Sep 2026) |
| Program → Mandiri Belajar | ✅ Selesai (30 Sep 2026) |
| Karya | ⬜ Belum |
| Layanan Member | ⬜ Belum |
| Kontak | ⬜ Belum |

### 6. 🟢 Halaman Admin per Admin — SELESAI (1 Oktober 2026)

Berbeda dari rencana awal (satu halaman internal), sekarang tiap admin punya **landing page publik sendiri** seperti wordpress:

| Admin | URL | Nomor WA |
|---|---|---|
| Miftahussurur | `/pelatihan-canva` | 628991945123 |
| Budi Santoso | `/pelatihan-canva-budi` | 628991945124 |
| Siti Rahmah | `/pelatihan-canva-siti` | 628991945125 |

- ✅ Tidak tampil di nav publik, tapi masuk `sitemap.xml`
- ✅ URL bersih tanpa prefix, bisa diganti bebas
- ✅ Ganti nama path = ubah 1 baris `slug` di `src/data/pelatihan.ts`
- ✅ Title, description, og:image, GA4 event label otomatis per admin
- ✅ Navbar "Hubungi WA" + tombol WA mengambang disembunyikan di halaman admin (pakai `isHalamanMitra()`)
- ⬜ Data asli (foto, jadwal, harga, testimoni) masih placeholder
- ⬜ Tombol Daftar Sekarang / Diskusi dengan Admin belum kirim event GA4

### 7. 🟢 Cold Start (Opsional)
- Cold start pertama API: **27,8 detik** (bundle 23 MB, 16 MB library Next.js)
- Warm: 2,7–3,2 detik
- Mitigasi: kurangi dependensi, atau pakai `vinext` (adapter baru Cloudflare)

---

## 🔍 CATATAN PENTING

### DNS Server Domainesia
Kalau Anda akan pakai DNS bawaan Domainesia (bukan Cloudflare), website **tetap jalan** — tapi kehilangan:
- CDN edge cache
- Auto SSL
- Proteksi DDoS
- Optimasi Cloudflare

**Rekomendasi:** arahkan NS ke Cloudflare. Domain tetap di DomaiNesia (holding), hosting di Cloudflare.

### Tool yang Bermasalah
- `cwebp` **rusak** (pustaka `libtiff` hilang) → **pakai `sharp` via Node.js** untuk kompresi gambar
- `sips` tidak mendukung output WebP

### Kompresi Gambar (pakai sharp)
```js
const sharp = require('sharp');
await sharp('input.png')
  .resize(512, 512, { fit: 'inside' })
  .webp({ quality: 85 })
  .toFile('output.webp');
```

---

## 📁 STRUKTUR PROJECT

```
/Users/mohslamet/web-pendidik-cendekia/
├── wrangler.jsonc              ← config Cloudflare
├── open-next.config.ts         ← config OpenNext
├── public/
│   ├── _headers                ← cache + security
│   ├── apple-touch-icon.png
│   └── icon-512.webp
│   └── assets/logo/
│       ├── logo-pc.webp        ← 38 KB (compression)
│       └── logo-pc-footer.webp ← 25 KB
├── src/app/
│   ├── layout.tsx              ← metadata global + GA4 (PERLU diupdate domain)
│   ├── page.tsx                ← beranda
│   ├── [slug]/page.tsx         ← HALAMAN ADMIN per admin (root, 1 Oktober 2026)
│   ├── tentang/ karya/ artikel/ kontak/
│   ├── layanan-member/
│   ├── program/
│   │   ├── pelatihan-terbaru/
│   │   └── mandiri-belajar/       ← RENAME 30 Sep (dari belajar-mandiri)
│   ├── kebijakan-privasi/
│   ├── api/validasi/route.ts   ← API validasi sertifikat
│   ├── sitemap.ts              ← PERLU diupdate domain
│   └── robots.ts
├── src/components/
│   ├── Navbar.tsx              ← sembunyikan "Hubungi WA" di halaman admin
│   ├── Footer.tsx              ← sudah pakai WebP
│   ├── MitraFormulir.tsx       ← form → WhatsApp admin + event GA4
│   └── WhatsAppFloat.tsx      ← disembunyikan di halaman admin
├── src/data/pelatihan.ts      ← ⭐ DATA UTAMA: sesi pelatihan + 3 admin
├── src/lib/mitra-path.ts       ← isHalamanMitra(pathname)
└── STATUS-PROJECT.md           ← dokumen ini
```

### Cara Kerja Data Halaman Admin

Semua isi halaman admin diambil dari `src/data/pelatihan.ts`:

```ts
sesiPelatihan  →  dip dipakai BERSAMA semua admin (tema, tanggal, harga, materi)
mitra          →  data KHAS per admin (slug, nama, WA, foto,deskripsi, testimoni)
```

Ganti topik pelatihan untuk semua admin = ubah `sesiId` di blok admin.
Ganti nama URL admin = ubah `slug`.
Tambah admin baru = tambah 1 objek di array `mitra`.

Halaman otomatis dapat: URL, title SEO, meta description, og:image, sitemap, event GA4.

---

## 💾 DOKUMEN REFERENSI

| File | Isi |
|---|---|
| `PANDUAN-UPDATE.md` | Panduan update project |
| `RIWAYAT-SESI.md` | Riwayat sesi sebelumnya |
| `AGENTS-FASE5-POSTINGAN-ADMIN.md` | Rancangan halaman admin |
| `Catatan Revisi Web PC.pdf` | Catatan revisi 4 halaman (sumber perubahan 30 Sep 2026) |
| `~/RIWAYAT-CHAT-HOSTING-DOMAIN.md` | Riwayat chat panjang (127 KB) |
| `~/ARSITEKTUR-INFRASTRUKTUR-WEBSITE.md` | Draft arsitektur (⚠️ belum disetujui) |

---

## ✅ VERIFIKASI TERAKHIR (2 Oktober 2026)

### Build
- `npm run build` → 18/18 halaman statis, 0 error
- `npx eslint src` → 0 error, 31 warning (semanya `<img>` vs `next/image`)

### Halaman Admin (path baru)
| URL | Vercel | Cloudflare |
|---|---|---|
| `/pelatihan-canva` | 200 | 200 |
| `/pelatihan-canva-budi` | 200 | 200 |
| `/pelatihan-canva-siti` | 200 | 200 |
| `/mitra/*` (lama) | 308 → path baru | 308 → path baru |
| slug asing | 404 | 404 |

### Halaman Utama
10 halaman: `/`, `/tentang`, `/karya`, `/artikel`, `/kontak`, `/layanan-member`, `/program/pelatihan-terbaru`, `/program/mandiri-belajar`, `/artikel/panduan-membuat-mpi-guru-sd`, `/kebijakan-privasi` → semua 200 di kedua platform.

### Per Admin
- Nomor WA berbeda: 628991945123 / 628991945124 / 628991945125
- Navbar "Hubungi WA" disembunyikan ✅
- Tombol WA mengambang disembunyikan ✅
- 5 section lengkap, 3 testimoni, 2 tombol CTA

### SEO / Iklan
- GA4 `G-BQV1L2C594` termuat di semua halaman
- Title, description, canonical, og:* unik per admin
- Tidak ada `noindex`, `robots.txt` Allow: /
- Event GA4: `kirim_formulir` (dengan `event_label` = slug admin)

### ⬜ Yang belum untuk iklan
- Event klik tombol "Daftar Sekarang" & "Diskusi dengan Admin"
- Pemisahan GA4 per admin (sekarang semua ke 1 akun)
- Pixel Meta / Google Ads tag untuk remarketing

---

*Terakhir diperbarui: 2 Oktober 2026*
