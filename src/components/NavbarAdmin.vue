<template>
  <nav class="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 shadow-2xl backdrop-blur-sm border-b border-white/20 animate-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-white drop-shadow-lg">
              <span class="flex items-center gap-2">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                Admin UMKM Desa Juron
              </span>
            </h1>
          </div>
          <div class="hidden md:ml-10 md:flex md:items-center md:space-x-2">
            <router-link
              to="/dashboard"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              :class="{ 'bg-white/30 text-white shadow-lg': $route.path === '/dashboard' }"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Dashboard
              </span>
            </router-link>
            <router-link
              to="/dashboard/umkm"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              :class="{ 'bg-white/30 text-white shadow-lg': $route.path === '/dashboard/umkm' }"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Pelaku UMKM
              </span>
            </router-link>
            <router-link
              to="/dashboard/produk"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              :class="{ 'bg-white/30 text-white shadow-lg': $route.path === '/dashboard/produk' }"
            >
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                Produk Unggulan
              </span>
            </router-link>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <!-- User Info -->
          <div class="hidden md:flex items-center space-x-2">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <span class="text-white/90 text-sm font-medium">Admin</span>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMenu"
              class="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-300 transform hover:scale-110"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Logout Button -->
          <button
            @click="logout"
            class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div class="md:hidden" v-show="isMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-sm animate-slide-down">
        <router-link
          to="/dashboard"
          class="block px-3 py-2 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          :class="{ 'bg-white/30 text-white': $route.path === '/dashboard' }"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Dashboard
          </span>
        </router-link>
        <router-link
          to="/dashboard/umkm"
          class="block px-3 py-2 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          :class="{ 'bg-white/30 text-white': $route.path === '/dashboard/umkm' }"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Pelaku UMKM
          </span>
        </router-link>
        <router-link
          to="/dashboard/produk"
          class="block px-3 py-2 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          :class="{ 'bg-white/30 text-white': $route.path === '/dashboard/produk' }"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            Produk Unggulan
          </span>
        </router-link>
        <div class="border-t border-white/20 my-2"></div>
        <button
          @click="logout"
          class="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-red-500/30 backdrop-blur-sm transition-all duration-300"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Logout
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-animation 6s ease infinite;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}
</style>

<script setup>
import { ref } from 'vue';
import { auth } from '../firebase/config.js';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const logout = async () => {
  try {
    await signOut(auth);
    router.push('/admin');
  } catch (error) {
    console.error('Logout error:', error);
    let errorMessage = 'Gagal logout: ';
    
    if (error.code === 'auth/network-request-failed') {
      errorMessage += 'Koneksi internet bermasalah. Silakan cek koneksi Anda.';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage += 'Terlalu banyak percobaan. Silakan coba lagi nanti.';
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += 'Terjadi kesalahan yang tidak diketahui.';
    }
    
    alert(errorMessage);
  }
};
</script>