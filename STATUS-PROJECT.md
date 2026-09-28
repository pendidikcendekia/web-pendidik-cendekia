# STATUS PROJECT — Pendidik Cendekia
**Diperbarui: 28 September 2026, setelah migrasi Cloudflare selesai**

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

### File yang Sudah Dihapus
```
layanan-member.html      (sisa static lama)
nextjs-panduan.html      (sisa static lama)
```

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

## 📋 5 COMMIT TERAKHIR

```
073750c  Optimalkan logo: WebP, favicon, dan hapus file sisa
9ca6215  Tambah Permissions-Policy header untuk_playwright hardening browser
a84141b  Tambah konfigurasi Cloudflare Workers via OpenNext
0c7a5a1  Tambah PANDUAN-UPDATE.md dan RIWAYAT-SESI.md
a252464  Highlight Program hanya teks oranye; blok oranye tetap pada sub-item aktif dropdown
```

⚠️ **Catatan:** commit `9ca6215` dan `073750c` punya pesan yang agak aneh ("_playwright"). Pesan commit tidakFunds_of_the_week_fundamental, tapi isinya sudah benar dan terverifikasi live.

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

### 5. 🟡 Revisi Konten Teks
Sesuaikan tulisan halaman agar tepat menyajikan layanan bisnis.
Halaman: beranda, tentang, karya, program, layanan-member, kontak.

### 6. 🟡 Halaman Admin (Internal)
- Satu kesatuan (bukan multi-page terpisah)
- **Tidak tampil di nav publik**
- Fungsi: kelola postingan
- Rancangan ada di: `AGENTS-FASE5-POSTINGAN-ADMIN.md`

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
│   ├── layout.tsx              ← metadata global (PERLU diupdate domain)
│   ├── page.tsx                ← beranda
│   ├── tentang/ karya/ artikel/ kontak/
│   ├── layanan-member/
│   ├── program/
│   │   ├── pelatihan-terbaru/
│   │   └── belajar-mandiri/
│   ├── kebijakan-privasi/
│   ├── api/validasi/route.ts   ← satu-satunya dynamic route
│   ├── sitemap.ts              ← PERLU diupdate domain
│   └── robots.ts
└── src/components/
    ├── Navbar.tsx              ← sudah pakai WebP
    ├── Footer.tsx              ← sudah pakai WebP
    └── WhatsAppFloat.tsx
```

---

## 💾 DOKUMEN REFERENSI

| File | Isi |
|---|---|
| `PANDUAN-UPDATE.md` | Panduan update project |
| `RIWAYAT-SESI.md` | Riwayat sesi sebelumnya |
| `AGENTS-FASE5-POSTINGAN-ADMIN.md` | Rancangan halaman admin |
| `~/RIWAYAT-CHAT-HOSTING-DOMAIN.md` | Riwayat chat panjang (127 KB) |
| `~/ARSITEKTUR-INFRASTRUKTUR-WEBSITE.md` | Draft arsitektur (⚠️ belum disetujui) |

---

## ✅ VERIFIKASI TERAKHIR (28 Sep 2026, 17:34 UTC)

Semua 13 halaman HTTP 200:
```
/  /tentang  /karya  /artikel  /kontak  /layanan-member
/program/pelatihan-terbaru  /program/belajar-mandiri
/artikel/panduan-membuat-mpi-guru-sd  /kebijakan-privasi
/robots.txt  /sitemap.xml  /favicon.ico
```

API validasi: `{"ok":true,"data":[]}` (Google Sheets terbaca normal)

Security headers aktif:
```
x-content-type-options: nosniff
x-frame-options: DENY
referrer-policy: strict-origin-when-cross-origin
permissions-policy: geolocation=(), microphone=(), camera=()
```

---

*Waktu baca: 3-5 menit untuk memahami seluruh status project.*
