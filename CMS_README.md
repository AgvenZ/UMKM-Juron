# CMS Admin Panel - Desa Juron

Aplikasi Content Management System (CMS) berbasis web untuk mengelola data Pelaku UMKM dan Produk Unggulan Desa Juron.

## Fitur Utama

- 🔐 **Login Admin** - Autentikasi menggunakan Firebase Authentication
- 📊 **Dashboard** - Statistik dan preview data
- 👥 **Kelola Pelaku UMKM** - CRUD lengkap untuk data pelaku UMKM
- 🛍️ **Kelola Produk Unggulan** - CRUD lengkap untuk data produk
- 📱 **Preview Card** - Tampilan card seperti di website utama
- 🎨 **Desain Modern** - Menggunakan TailwindCSS dengan tema natural

## Teknologi yang Digunakan

- **Frontend**: Vue.js 3 (Composition API)
- **Styling**: TailwindCSS
- **Backend**: Firebase (Authentication + Firestore)
- **Router**: Vue Router 4
- **Build Tool**: Vite

## Instalasi & Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan server development:
```bash
npm run dev
```

3. Akses aplikasi di:
```
http://localhost:3000
```

## Default Login

- **Email**: admin@desajuron.com
- **Password**: admin123

## Struktur Database

### Koleksi: `pelaku_umkm`
- `nama` (string)
- `usaha` (string)
- `jenis_usaha` (string)
- `alamat` (string)
- `kontak` (string)
- `deskripsi` (string)
- `foto` (string URL)

### Koleksi: `produk_unggulan`
- Struktur field sama dengan `pelaku_umkm`

## Navigasi

- `/login` - Halaman login admin
- `/dashboard` - Dashboard utama
- `/dashboard/umkm` - Kelola Pelaku UMKM
- `/dashboard/produk` - Kelola Produk Unggulan

## Fitur CRUD

### Create
- Tambah data baru melalui form
- Validasi field wajib
- Preview foto saat input URL

### Read
- Tabel data lengkap
- Preview card di bawah tabel
- Update real-time dari Firestore

### Update
- Edit data melalui form
- Validasi field wajib
- Preview foto saat edit

### Delete
- Konfirmasi sebelum hapus
- Hapus data dari Firestore
- Update tabel otomatis

## Catatan Keamanan

- Route protection menggunakan navigation guards
- Hanya admin yang login yang bisa akses dashboard
- Logout otomatis redirect ke halaman login

## Pengembangan Lebih Lanjut

- Integrasi Firebase Storage untuk upload foto
- Export data ke Excel/PDF
- Fitur search dan filter
- Multi-admin support
- Audit log aktivitas