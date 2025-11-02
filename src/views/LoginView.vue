<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-natural-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0">
      <div v-for="n in 20" :key="n" class="absolute w-2 h-2 bg-white/20 rounded-full animate-float" :style="{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s` }"></div>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20 transform hover:scale-105 transition-all duration-500">
      <!-- Header with Icon -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-natural-green-400 to-natural-green-600 rounded-2xl mb-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Admin Portal</h1>
        <p class="text-gray-300 text-sm">Masuk untuk mengelola UMKM Desa Juron</p>
      </div>
      
      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="group">
          <label for="email" class="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-natural-green-400 transition-colors">
            Email Address
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400 group-focus-within:text-natural-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
              </svg>
            </div>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-natural-green-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              placeholder=""
            >
          </div>
        </div>
        
        <div class="group">
          <label for="password" class="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-natural-green-400 transition-colors">
            Password
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400 group-focus-within:text-natural-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-natural-green-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              placeholder=""
            >
          </div>
        </div>
        
        <!-- Error Message with Animation -->
        <div v-if="error" class="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm transform transition-all duration-300 animate-shake">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            <p class="text-red-300 text-sm font-medium">{{ error }}</p>
          </div>
        </div>
        
        <!-- Submit Button with Gradient Animation -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-gradient-to-r from-natural-green-500 via-natural-green-600 to-natural-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-natural-green-600 hover:via-natural-green-700 hover:to-natural-green-800 focus:outline-none focus:ring-2 focus:ring-natural-green-400 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span v-if="!loading" class="relative z-10">Masuk ke Dashboard</span>
          <span v-else class="relative z-10 flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Memproses...
          </span>
        </button>
      </form>
      
      <!-- Footer -->
      <div class="mt-8 text-center">
        <p class="text-gray-400 text-xs">
          Portal Manajemen UMKM Desa Juron
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/dashboard');
  } catch (err) {
    console.error('Login error:', err);
    
    // Handle specific Firebase auth errors
    if (err.code === 'auth/invalid-email') {
      error.value = 'Format email tidak valid';
    } else if (err.code === 'auth/user-not-found') {
      error.value = 'Pengguna tidak ditemukan';
    } else if (err.code === 'auth/wrong-password') {
      error.value = 'Password salah';
    } else if (err.code === 'auth/too-many-requests') {
      error.value = 'Terlalu banyak percobaan login. Silakan coba lagi nanti';
    } else if (err.code === 'auth/network-request-failed') {
      error.value = 'Kesalahan jaringan. Periksa koneksi internet Anda';
    } else {
      error.value = err.message || 'Terjadi kesalahan saat login';
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}
</style>