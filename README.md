# Etalase Online Juron

Proyek landing page untuk Etalase Online Juron menggunakan Vue.js dan Tailwind CSS.

## Teknologi yang Digunakan

- Vue.js 3
- Vite
- Tailwind CSS

## Cara Menjalankan Proyek

### Prasyarat

- Node.js (versi 14 atau lebih tinggi)
- NPM (versi 6 atau lebih tinggi)

### Langkah-langkah

1. Clone repositori ini
2. Buka terminal dan arahkan ke direktori proyek
3. Jalankan perintah berikut untuk menginstal dependensi:

```bash
npm install
```

4. Jalankan server pengembangan:

```bash
npm run dev
```

5. Buka browser dan akses `http://localhost:3000`

## Membangun untuk Produksi

Untuk membangun proyek untuk produksi, jalankan perintah berikut:

```bash
npm run build
```

File hasil build akan tersedia di direktori `dist`.

## Struktur Proyek

```
├── public/             # Aset statis
├── src/                # Kode sumber
│   ├── assets/         # Aset (gambar, font, dll)
│   │   └── css/        # File CSS
│   ├── components/     # Komponen Vue
│   └── views/          # Halaman Vue
├── index.html          # File HTML utama
├── package.json        # Konfigurasi NPM
├── postcss.config.js   # Konfigurasi PostCSS
├── tailwind.config.js  # Konfigurasi Tailwind CSS
└── vite.config.js      # Konfigurasi Vite
```