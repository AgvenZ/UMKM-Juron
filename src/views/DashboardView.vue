<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <NavbarAdmin />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <!-- Header Section -->
      <div class="mb-6 md:mb-8 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-3xl"></div>
        <div class="relative text-center md:text-left">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Dashboard Admin
          </h1>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg">Kelola data Pelaku UMKM dan Produk Unggulan Desa Juron</p>
        </div>
      </div>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        <div class="group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div class="relative flex items-center">
            <div class="p-2 md:p-3 lg:p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div class="ml-4 md:ml-6">
              <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2">Total Pelaku UMKM</h3>
              <p class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{{ stats.umkmCount }}</p>
            </div>
          </div>
        </div>
        
        <div class="group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div class="relative flex items-center">
            <div class="p-2 md:p-3 lg:p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div class="ml-4 md:ml-6">
              <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2">Total Produk Unggulan</h3>
              <p class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">{{ stats.produkCount }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="text-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Navigasi Cepat
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <router-link 
            to="/dashboard/umkm" 
            class="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="text-center">
              <div class="mb-4">
                <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto text-blue-200 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold mb-2">Kelola Pelaku UMKM</h3>
              <p class="text-blue-100 text-sm">Tambah, edit, dan hapus data pelaku UMKM</p>
            </div>
          </router-link>

          <router-link 
            to="/dashboard/produk" 
            class="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="text-center">
              <div class="mb-4">
                <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-200 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold mb-2">Kelola Produk Unggulan</h3>
              <p class="text-green-100 text-sm">Tambah, edit, dan hapus data produk unggulan</p>
            </div>
          </router-link>

          <router-link 
            to="/" 
            class="group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="text-center">
              <div class="mb-4">
                <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto text-purple-200 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold mb-2">Lihat Website</h3>
              <p class="text-purple-100 text-sm">Lihat tampilan website UMKM Juron</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import NavbarAdmin from '@/components/NavbarAdmin.vue';

const stats = ref({
  umkmCount: 0,
  produkCount: 0
});

const fetchStats = async () => {
  try {
    // Fetch UMKM count
    const umkmSnapshot = await getDocs(collection(db, 'pelaku_umkm'));
    stats.value.umkmCount = umkmSnapshot.size;
    
    // Fetch Produk count
    const produkSnapshot = await getDocs(collection(db, 'produk_unggulan'));
    stats.value.produkCount = produkSnapshot.size;
    
  } catch (error) {
    console.error('Error fetching stats:', error);
    let errorMessage = 'Gagal memuat statistik: ';
    
    if (error.code === 'unavailable') {
      errorMessage += 'Database tidak tersedia. Silakan coba lagi nanti.';
    } else if (error.code === 'permission-denied') {
      errorMessage += 'Tidak memiliki izin untuk mengakses data.';
    } else if (error.code === 'not-found') {
      errorMessage += 'Koleksi data tidak ditemukan.';
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += 'Terjadi kesalahan yang tidak diketahui saat memuat statistik.';
    }
    
    alert(errorMessage);
  }
};

onMounted(() => {
  fetchStats();
});
</script>