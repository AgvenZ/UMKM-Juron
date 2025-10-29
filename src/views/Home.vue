<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center pt-20 sm:pt-24">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'); opacity: 0.85;"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-wood-brown-900/30 via-transparent to-white"></div>
        
        <!-- Pattern overlay -->
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-3.png')] opacity-10"></div>
        
        <!-- Animasi awan -->
        <div class="cloud cloud-1 opacity-80"></div>
        <div class="cloud cloud-2 opacity-80"></div>
        <div class="cloud cloud-3 opacity-80"></div>
      </div>
      
      <div class="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        <div class="max-w-4xl backdrop-blur-sm bg-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-white/20 mx-auto">
          <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-wood-brown-800 to-natural-green-700 leading-tight">
            Tingkatkan Ekonomi Desa Juron Melalui Digitalisasi Produk UMKM
          </h1>
          <p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-wood-brown-800 mb-6 sm:mb-8 font-medium leading-relaxed">
            Melalui penerapan digitalisasi produk UMKM, Desa Juron berupaya memperkenalkan potensi dan produk lokal secara modern agar lebih dikenal luas, sekaligus mendorong kemandirian ekonomi masyarakat di era teknologi.
          </p>
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <a href="#produk" class="btn-primary text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-natural-green-600 to-natural-green-700 text-white font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-natural-green-500/30 hover:shadow-xl flex items-center justify-center">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Lihat Produk UMKM
            </a>
            <a href="#tentang" class="btn-secondary text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg bg-white text-wood-brown-700 font-medium border border-wood-brown-200 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-cream-50 flex items-center justify-center">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tentang Desa
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-80">
        <span class="text-wood-brown-700 text-xs sm:text-sm font-medium mb-1">Scroll</span>
        <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-wood-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Tentang Section -->
    <section id="tentang" class="section py-20 relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-cream-50 z-0"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 z-0"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-natural-green-100 rounded-full opacity-20 blur-3xl z-0"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-wood-brown-100 rounded-full opacity-20 blur-3xl z-0"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-wood-brown-800 to-natural-green-700 leading-[1.8] inline-block pb-4">Tentang Desa Juron</h2>
          <div class="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-natural-green-500 to-natural-green-400 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
          <p class="text-base sm:text-lg text-wood-brown-700 max-w-3xl mx-auto px-4 sm:px-0">
            Desa yang kaya akan tradisi, keindahan alam, dan semangat kewirausahaan masyarakatnya
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div class="fade-in-section">
            <div class="relative rounded-2xl overflow-hidden shadow-xl group">
              <img src="https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                   alt="Aktivitas masyarakat desa" 
                   class="w-full h-64 sm:h-80 md:h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-wood-brown-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white font-medium">Desa Juron, Kecamatan Nguter, Kabupaten Sukoharjo, Jawa Tengah</p>
              </div>
            </div>
          </div>
          <div class="fade-in-section space-y-6 sm:space-y-8">
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-natural-green-500">
              <div class="flex items-start mb-3 sm:mb-4">
                <div class="bg-natural-green-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-natural-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-wood-brown-800 mb-1 sm:mb-2">Profil Desa</h3>
                  <p class="text-sm sm:text-base text-wood-brown-600">
                    Desa Juron terletak di Kecamatan Nguter, Kabupaten Sukoharjo, Jawa Tengah. Desa ini memiliki lingkungan yang asri dengan hamparan sawah subur dan udara yang sejuk, menjadikannya daerah yang ideal untuk pertanian dan usaha kecil menengah.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-wood-brown-500">
              <div class="flex items-start mb-3 sm:mb-4">
                <div class="bg-wood-brown-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-wood-brown-800 mb-1 sm:mb-2">Kekayaan Budaya</h3>
                  <p class="text-sm sm:text-base text-wood-brown-600">
                    Keunikan Desa Juron terletak pada kekayaan budaya dan tradisi yang masih dijaga dengan baik. Nilai-nilai gotong royong, kearifan lokal, dan semangat kebersamaan terus menjadi dasar kehidupan sosial warga desa.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-cream-500">
              <div class="flex items-start mb-3 sm:mb-4">
                <div class="bg-cream-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-cream-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-wood-brown-800 mb-1 sm:mb-2">Digitalisasi UMKM</h3>
                  <p class="text-sm sm:text-base text-wood-brown-600">
                    Seiring berkembangnya zaman, Desa Juron mulai beradaptasi dengan kemajuan teknologi melalui penerapan digitalisasi UMKM. Langkah ini membantu pelaku usaha lokal memasarkan produk mereka secara online, memperkuat ekonomi desa, dan memperkenalkan potensi lokal ke pasar yang lebih luas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pelaku UMKM Section -->
    <section id="pelaku-umkm" class="section py-20 relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-cream-50 z-0"></div>     
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png')] opacity-5 z-0"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-cream-100 rounded-full opacity-20 blur-3xl z-0 transform transition-transform duration-1000 hover:scale-110"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-natural-green-100 rounded-full opacity-20 blur-3xl z-0 transform transition-transform duration-1000 hover:scale-110"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 fade-in-section">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-wood-brown-800 to-natural-green-700 leading-[1.8] inline-block pb-4 hover:from-natural-green-700 hover:to-wood-brown-800 transition-all duration-500 bg-[length:200%_auto] animate-gradient hover:animate-pulse">Pelaku UMKM Desa Juron</h2>
          <div class="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-natural-green-500 to-natural-green-400 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
          <p class="text-base sm:text-lg text-wood-brown-700 max-w-3xl mx-auto px-4 sm:px-0">
            Kenali para pelaku UMKM yang menggerakkan ekonomi Desa Juron dengan produk-produk berkualitas dan berciri khas daerah.
          </p>
        </div>
        
        <div class="relative">
          <!-- Prev Button -->
          <button @click="scrollUMKM('prev')" class="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 sm:-ml-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <!-- Cards Container -->
          <div ref="umkmContainer" class="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth">
            <div v-for="(pelaku, index) in pelakuUMKM" :key="index" 
                 class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 snap-start fade-in-section">
              <div
  class="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.02] h-[380px] sm:h-[440px] flex flex-col border border-gray-100/40 
  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] 
  hover:before:animate-none hover:ring-1 hover:ring-natural-green-300/50 hover:shadow-natural-green-200/40">
                
                <!-- Pelaku Image with Overlay - Diperbaiki agar tidak terpotong -->
                <div class="relative overflow-hidden h-40 sm:h-48 md:h-52 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img :src="pelaku.foto" :alt="pelaku.nama" 
                       class="w-full h-full object-contain object-center transition-all duration-700 hover:scale-110 group-hover:rotate-1 bg-gray-50">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <!-- Jenis Usaha di kanan atas -->
                  <div class="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span class="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-natural-green-100 to-natural-green-200 text-natural-green-800 border border-natural-green-300/50 shadow-sm hover:shadow-lg hover:shadow-natural-green-300/50 transition-all duration-300 backdrop-blur-sm">
                      {{ pelaku.jenisUsaha.split('&')[0].trim() }}
                    </span>
                  </div>
                </div>
                
                <!-- Pelaku Info -->
                <div class="p-3 sm:p-4 flex-grow flex flex-col justify-between">
                  <div class="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                    <h3 class="text-base sm:text-lg font-bold text-wood-brown-800 group-hover:text-natural-green-700 transition-all duration-300 line-clamp-2 leading-tight transform group-hover:scale-105">{{ pelaku.nama.split('(')[0].trim() }}</h3>
                    <p class="text-wood-brown-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">{{ pelaku.usaha }}</p>
                  </div>
                  
                  <!-- Lihat Profil Button -->
                  <button @click="showModal(pelaku)" class="w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-wood-brown-600 via-wood-brown-700 to-wood-brown-800 text-white rounded-lg sm:rounded-xl hover:from-wood-brown-700 hover:via-wood-brown-800 hover:to-wood-brown-900 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:hover:-translate-y-1 font-semibold text-xs sm:text-sm relative overflow-hidden group">
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span class="relative z-10">Lihat Profil</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Next Button -->
          <button @click="scrollUMKM('next')" class="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 sm:-mr-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Modal Profil -->
      <div v-if="selectedPelaku" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <!-- Backdrop with blur effect -->
        <div class="absolute inset-0 bg-wood-brown-900/70 backdrop-blur-sm" @click="closeModal"></div>
        
        <!-- Modal Container -->
        <div class="relative bg-white rounded-xl sm:rounded-2xl max-w-2xl lg:max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
          <!-- Header with gradient - Diperkecil -->
          <div class="bg-gradient-to-r from-wood-brown-700 to-natural-green-700 rounded-t-lg sm:rounded-t-xl py-2 sm:py-3 px-3 sm:px-4 flex justify-between items-center">
            <h2 class="text-sm sm:text-base font-bold text-white">Profil UMKM</h2>
            <button @click="closeModal" class="text-white hover:text-cream-200 transition-colors duration-300 bg-white/10 rounded-full p-1.5 sm:p-2 hover:bg-white/20 flex items-center justify-center">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="p-3 sm:p-4 md:p-5">
            <div class="flex flex-col gap-3 sm:gap-4">
              <!-- Image container with hover effect - Diperbesar -->
              <div class="w-full rounded-lg overflow-hidden shadow-md group relative bg-gray-50 h-48 sm:h-64 md:h-72">
                <img :src="selectedPelaku.foto" :alt="selectedPelaku.nama" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-gray-50">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <!-- Business details - Dirapikan -->
              <div class="flex-1">
                <div class="mb-2 sm:mb-3">
                  <h3 class="text-base sm:text-lg font-bold text-wood-brown-800 mb-0.5">{{ selectedPelaku.nama.split('(')[0].trim() }}</h3>
                  <p class="text-xs sm:text-sm text-wood-brown-600 mb-1">{{ selectedPelaku.usaha }}</p>
                  <!-- Jenis usaha dikembalikan ke posisi awal -->
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-natural-green-100 text-natural-green-800">
                    {{ selectedPelaku.jenisUsaha.split('&')[0].trim() }}
                  </span>
                </div>
                
                <!-- Description - Dirapikan -->
                <div class="bg-cream-50 p-2 sm:p-3 rounded-lg mb-3 sm:mb-4 border border-cream-200">
                  <p class="text-wood-brown-700 text-justify leading-relaxed text-xs sm:text-sm">{{ selectedPelaku.deskripsi }}</p>
                </div>
                
                <!-- Address - Dirapikan -->
                <div class="flex items-start mb-3 sm:mb-4">
                  <div class="bg-wood-brown-100 p-1 rounded mr-2 mt-0.5">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 text-wood-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-wood-brown-800 mb-0.5 text-xs sm:text-sm">Alamat:</h4>
                    <p class="text-wood-brown-600 text-xs sm:text-sm leading-snug">{{ selectedPelaku.alamat }}</p>
                  </div>
                </div>
                
                <!-- Contact - Diperkecil -->
                <div class="text-center">
                  <a :href="'https://wa.me/' + selectedPelaku.kontak.replace(/\D/g, '')" target="_blank" class="inline-flex items-center px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium text-xs sm:text-sm">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Hubungi WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Produk Unggulan Section -->
    <section id="produk" class="section relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-cream-50 opacity-80 z-0"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-20 left-0 w-80 h-80 bg-natural-green-100 rounded-full opacity-20 blur-3xl z-0 transform transition-transform duration-1000 hover:scale-110"></div>
      <div class="absolute bottom-20 right-0 w-96 h-96 bg-wood-brown-100 rounded-full opacity-20 blur-3xl z-0 transform transition-transform duration-1000 hover:scale-110"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-8 sm:mb-12 fade-in-section">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-wood-brown-800 to-natural-green-700 leading-[1.8] inline-block pb-4 hover:from-natural-green-700 hover:to-wood-brown-800 transition-all duration-500 bg-[length:200%_auto] animate-gradient hover:animate-pulse">Produk Unggulan</h2>
          <div class="w-24 sm:w-32 h-1 bg-gradient-to-r from-natural-green-500 to-natural-green-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p class="text-base sm:text-lg text-wood-brown-700 max-w-3xl mx-auto px-4 sm:px-0">
            Temukan berbagai produk berkualitas dari UMKM Desa Juron yang dibuat dengan keterampilan dan sentuhan khas masyarakat desa.
          </p>
        </div>
        
        <div class="relative">
          <!-- Prev Button -->
          <button @click="scrollProducts('prev')" class="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 sm:-ml-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <!-- Cards Container -->
          <div ref="productsContainer" class="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth">
            <div v-for="(product, index) in featuredProducts" :key="index" 
                 class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 snap-start fade-in-section">
              <div
  class="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.02] h-[380px] sm:h-[440px] flex flex-col border border-gray-100/40 
  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] 
  hover:before:animate-none hover:ring-1 hover:ring-natural-green-300/50 hover:shadow-natural-green-200/40">

                <!-- Product Image with Overlay -->
                <div class="relative overflow-hidden h-40 sm:h-48 md:h-52 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img :src="product.imageSrc" :alt="product.imageAlt" 
                       class="w-full h-full object-cover object-center transition-all duration-700 hover:scale-110 group-hover:rotate-1">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <!-- Product Badge -->
                  <div class="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span class="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-natural-green-100 to-natural-green-200 text-natural-green-800 border border-natural-green-300/50 shadow-sm hover:shadow-lg hover:shadow-natural-green-300/50 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                      Unggulan
                    </span>
                  </div>
                </div>
                
                <!-- Product Info -->
                <div class="p-3 sm:p-4 flex-grow flex flex-col justify-between">
                  <div class="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                    <h3 class="text-base sm:text-lg font-bold text-wood-brown-800 group-hover:text-natural-green-700 transition-all duration-300 line-clamp-2 leading-tight transform group-hover:scale-105">{{ product.name }}</h3>
                    <p class="text-wood-brown-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">{{ product.description }}</p>
                  </div>
                  
                  <div class="space-y-2 sm:space-y-3">
                    <div class="flex justify-between items-start pt-1 gap-2">
                      <p class="text-base sm:text-lg font-bold text-natural-green-600 flex-shrink-0">{{ product.price }}</p>
                      <div class="flex items-center text-xs sm:text-sm text-wood-brown-500 truncate">
                        <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-wood-brown-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="truncate">{{ product.origin }}</span>
                      </div>
                    </div>
                    
                    <!-- Order Button -->
                    <a :href="'https://wa.me/' + getKontakByUsaha(product.origin) + '?text=Halo, saya tertarik dengan produk ' + product.name + ' dari ' + product.origin" 
                       target="_blank" 
                       class="w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-natural-green-600 via-natural-green-700 to-natural-green-800 text-white rounded-lg sm:rounded-xl hover:from-natural-green-700 hover:via-natural-green-800 hover:to-natural-green-900 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:hover:-translate-y-1 font-semibold text-xs sm:text-sm relative overflow-hidden group">
                      <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      <span class="relative z-10">Pesan Sekarang</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Next Button -->
          <button @click="scrollProducts('next')" class="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 sm:-mr-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
             <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Ajukan Produkmu Section -->
    <section id="kontak" class="section py-20 relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-cream-50 opacity-80 z-0"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-20 right-0 w-96 h-96 bg-natural-green-100 rounded-full opacity-20 blur-3xl z-0"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-wood-brown-100 rounded-full opacity-20 blur-3xl z-0"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cream-200 rounded-full opacity-10 blur-3xl z-0"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-wood-brown-800 to-natural-green-700 leading-[1.8] inline-block pb-4">Daftarkan Produkmu Sekarang</h2>
          <div class="w-32 h-1 bg-gradient-to-r from-natural-green-500 to-natural-green-400 mx-auto mb-6 rounded-full"></div>
          <p class="text-lg text-wood-brown-700 max-w-3xl mx-auto">
            Daftarkan produkmu sekarang dan bergabunglah dengan para pelaku UMKM Desa Juron lainnya untuk menampilkan karya terbaikmu.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto mb-16">
          <div class="flex justify-center">
            <!-- Card Form Pengajuan Produk -->
            <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full fade-in-section overflow-hidden w-full max-w-xl">
              <div class="bg-gradient-to-r from-natural-green-600 to-natural-green-700 h-2"></div>
              <div class="p-8">
                <div class="flex items-center justify-center w-24 h-24 bg-natural-green-50 rounded-full mb-6 mx-auto shadow-sm">
                  <svg class="w-12 h-12 text-natural-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-center text-wood-brown-800 mb-3 leading-relaxed">Formulir Pengajuan Produk</h3>
                <p class="text-wood-brown-600 text-center mb-8 text-base leading-relaxed">Isi formulir online untuk mendaftarkan produk UMKM Anda ke etalase digital Desa Juron</p>
                
                <a href="https://forms.gle/1CvT5GyMpVvGc6278" 
                   class="block w-full py-3 px-4 text-center font-semibold text-base text-white bg-gradient-to-r from-natural-green-600 to-natural-green-700 rounded-lg shadow-md hover:from-natural-green-700 hover:to-natural-green-800 focus:outline-none focus:ring-2 focus:ring-natural-green-500 focus:ring-offset-2 transform transition hover:-translate-y-0.5 hover:shadow-lg">
                  <span class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Isi Formulir Pendaftaran
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-b from-wood-brown-800 to-wood-brown-900 z-0"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
      
      <!-- Main Footer Content -->
      <div class="container-custom relative z-10 pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 text-white">
          <!-- Logo & Description -->
          <div class="space-y-3 sm:space-y-4">
            <h3 class="text-lg sm:text-xl font-bold text-cream-100">UMKM Desa Juron</h3>
            <p class="text-cream-200/80 text-xs sm:text-sm leading-relaxed">
              Menghubungkan produk lokal berkualitas dari Desa Juron dengan masyarakat luas melalui platform digital yang modern dan terpercaya.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div class="space-y-3 sm:space-y-4">
            <h3 class="text-base sm:text-lg font-semibold text-cream-100">Navigasi</h3>
            <ul class="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#beranda" class="text-cream-200/70 hover:text-cream-100 transition-colors duration-300">Beranda</a></li>
              <li><a href="#tentang" class="text-cream-200/70 hover:text-cream-100 transition-colors duration-300">Tentang Desa</a></li>
              <li><a href="#pelaku" class="text-cream-200/70 hover:text-cream-100 transition-colors duration-300">Pelaku UMKM</a></li>
              <li><a href="#produk" class="text-cream-200/70 hover:text-cream-100 transition-colors duration-300">Produk Unggulan</a></li>
              <li><a href="#kontak" class="text-cream-200/70 hover:text-cream-100 transition-colors duration-300">Pendaftaran</a></li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-3 sm:space-y-4">
            <h3 class="text-base sm:text-lg font-semibold text-cream-100">Kontak</h3>
            <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-natural-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-cream-200/70">Desa Juron, Kecamatan Nguter, Kabupaten Sukoharjo, Jawa Tengah</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-natural-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-cream-200/70">...</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-natural-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="text-cream-200/70">...</span>
              </li>
            </ul>
          </div>
          
          <!-- Social Media -->
          <div class="space-y-3 sm:space-y-4">
            <h3 class="text-base sm:text-lg font-semibold text-cream-100">Ikuti Kami</h3>
            <div class="flex space-x-2 sm:space-x-3">
              <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-wood-brown-700 hover:bg-natural-green-600 flex items-center justify-center transition-colors duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-wood-brown-700 hover:bg-natural-green-600 flex items-center justify-center transition-colors duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-wood-brown-700 hover:bg-natural-green-600 flex items-center justify-center transition-colors duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-wood-brown-700 hover:bg-natural-green-600 flex items-center justify-center transition-colors duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Copyright Section -->
        <div class="pt-6 sm:pt-8 border-t border-wood-brown-700/50">
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <p class="text-xs sm:text-sm text-cream-200/60 mb-3 sm:mb-0">© 2025 UMKM Desa Juron. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    const selectedPelaku = ref(null)
    const umkmContainer = ref(null)
    const productsContainer = ref(null)
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    const showModal = (pelaku) => {
      selectedPelaku.value = pelaku
    }

    const closeModal = () => {
      selectedPelaku.value = null
    }

    const submitForm = () => {
      alert(`Terima kasih ${form.value.name}! Pesan Anda telah dikirim.`)
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    }
    
    // Fungsi untuk menggeser card UMKM
    const scrollUMKM = (direction) => {
      if (!umkmContainer.value) return
      
      const container = umkmContainer.value
      const scrollAmount = container.clientWidth / 2
      
      if (direction === 'next') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      }
    }
    
    // Fungsi untuk menggeser card Produk
    const scrollProducts = (direction) => {
      if (!productsContainer.value) return
      
      const container = productsContainer.value
      const scrollAmount = container.clientWidth / 2
      
      if (direction === 'next') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      }
    }
    
    // Fungsi untuk animasi fade-in
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll('.fade-in-section')
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionBottom = section.getBoundingClientRect().bottom
        const isVisible = (sectionTop < window.innerHeight - 100) && (sectionBottom > 0)
        if (isVisible) {
          section.classList.add('is-visible')
        }
      })
    }

    // Fungsi untuk mengacak array
    const shuffleArray = (array) => {
      // Membuat salinan array untuk menghindari mutasi array asli
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        // Menghasilkan indeks acak dari 0 hingga i
        const randomIndex = Math.floor(Math.random() * (i + 1))
        // Menukar elemen di posisi i dengan elemen di posisi randomIndex
        const temp = shuffled[i]
        shuffled[i] = shuffled[randomIndex]
        shuffled[randomIndex] = temp
      }
      return shuffled
    }

    // Membersihkan event listener saat komponen dihapus
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScrollAnimation)
    })

    // Fungsi untuk mendapatkan kontak berdasarkan nama usaha
    const getKontakByUsaha = (usaha) => {
      // Hardcoded list untuk menghindari referensi ke pelakuUMKM yang belum diinisialisasi
      const pelakuList = [
        { usaha: 'Es Doger Kita', kontak: '+62 857 2261 3566' },
        { usaha: 'Dapur Bu Suprih', kontak: '+62 831 3966 0179' },
        { usaha: 'Pawon Jeng Enny', kontak: '+62 812 1735 7450' },
        { usaha: 'Kopi Juron', kontak: '+62 814 5678 9012' },
        { usaha: 'Batik Juron Indah', kontak: '+62 815 6789 0123' },
        { usaha: 'Tani Organik Juron', kontak: '+62 816 7890 1234' },
        { usaha: 'Kriya Pandan Juron', kontak: '+62 817 8901 2345' },
        { usaha: 'Tani Madu Juron', kontak: '+62 818 9012 3456' },
        { usaha: 'Tani Aren Juron', kontak: '+62 819 0123 4567' },
        { usaha: 'Ayam Goreng Kampung Mbak Endang', kontak: '+62 821 2221 6963' }
      ]
      
      const pelaku = pelakuList.find(p => p.usaha === usaha)
      // Default ke Ibu Tini jika tidak ditemukan
      return pelaku ? pelaku.kontak.replace(/\D/g, '') : '6285722613566'
    }

    // Data produk dan pelaku UMKM
    const originalProducts = [

        {
          name: 'Es Doger',
          description: 'Es Doger segar dengan cita rasa manis gurih khas santan dan tape.',
          price: 'Rp 5.000',
          origin: 'Es Doger Kita',
          imageSrc: '/src/assets/img/EsDoger.jpg',
          imageAlt: 'Es Doger'
        },
        {
          name: 'Nasi Ayam Katsu',
          description: 'Nasi Ayam Katsu renyah berpadu dengan nasi hangat dan saus sambal.',
          price: 'Rp 7.000',
          origin: 'Dapur Bu Suprih',
          imageSrc: '/src/assets/img/NasiAyamKatsu.png',
          imageAlt: 'Nasi Ayam Katsu'
        },
        {
          name: 'Gado-Gado Telur',
          description: 'Gado-Gado Telur disajikan dengan siraman bumbu kacang yang nikmat.',
          price: 'Rp 10.000',
          origin: 'Pawon Jeng Enny',
          imageSrc: '/src/assets/img/GadoGadoTelur.jpg',
          imageAlt: 'Gado-Gado Telur'
        },
        {
          name: 'Seblak Prasmanan',
          description: 'Seblak Prasmanan dengan beragam topping dan tingkat pedas pilihan pelanggan.',
          price: 'Rp -',
          origin: 'Dapur Yumna',
          imageSrc: '/src/assets/img/SeblakPrasmanan.jpg',
          imageAlt: 'Seblak Prasmanan'
        },
        {
          name: 'Ayam Goreng Kampung',
          description: 'Ayam Goreng Kampung disajikan dengan cita rasa gurih khas rumahan.',
          price: 'Rp 22.000',
          origin: 'Ayam Goreng Kampung Mbak Endang',
          imageSrc: '/src/assets/img/AyamGorengKampung.png',
          imageAlt: 'Ayam Goreng Kampung'
        },
        {
          name: 'Gula Aren Organik',
          description: 'Gula aren organik yang diolah secara tradisional.',
          price: 'Rp 65.000',
          origin: 'Tani Aren Juron',
          imageSrc: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          imageAlt: 'Gula Aren'
        },
        {
          name: 'Gula Aren Organik',
          description: 'Gula aren organik yang diolah secara tradisional.',
          price: 'Rp 65.000',
          origin: 'Tani Aren Juron',
          imageSrc: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          imageAlt: 'Gula Aren'
        },
        {
          name: 'Gula Aren Organik',
          description: 'Gula aren organik yang diolah secara tradisional.',
          price: 'Rp 65.000',
          origin: 'Tani Aren Juron',
          imageSrc: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          imageAlt: 'Gula Aren'
        },
      ]

    const originalPelakuUMKM = [
        {
          id: 'tini',
          nama: 'Bu Tini',
          jenisUsaha: 'Makanan & Minuman Ringan',
          foto: '/src/assets/img/IbuTini.jpg',
          deskripsi: 'Bu Tini menjual berbagai jajanan sederhana namun digemari banyak orang. Setiap hari, Bu Tini menawarkan donat lembut, aneka gorengan hangat seperti corndog, tempura, dll, serta es esan seperti pop ice dan minuman sachet lain yang menyegarkan.',
          kontak: '+62 857 2261 3566',
          alamat: 'Desa Juron Rt 03, Rw 05',
          usaha: 'Es Doger Kita'
        },
        {
          id: 'ninik',
          nama: 'Bu Ninik',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: '/src/assets/img/IbuNinik.jpg',
          deskripsi: 'Bu Ninik menjual aneka makanan dan minuman seperti nasi ayam katsu, ayam karage, nasi rames, dan menu lezat lainnya. Setiap hidangan disajikan hangat dengan cita rasa gurih khas rumahan, cocok untuk santapan siang maupun malam. Selain makanan, tersedia juga minuman segar yang melengkapi hidangan.',
          kontak: '+62 831 3966 0179',
          alamat: 'Desa Juron Rt 01, Rw 04',
          usaha: 'Dapur Bu Suprih'
        },
        {
          id: 'enny',
          nama: 'Bu Enny',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: '/src/assets/img/IbuEnny.jpg',
          deskripsi: 'Bu Enny menjual aneka makanan dan minuman seperti gado-gado, soto ayam, soto daging, dan nasi tumpeng. Setiap hidangan disajikan dengan cita rasa khas rumahan yang lezat dan menggugah selera. Selain itu, tersedia juga minuman segar yang menambah kenikmatan setiap santapan.',
          kontak: '+62 812 1735 7450',
          alamat: 'Desa Juron Rt 01, Rw 05',
          usaha: 'Pawon Jeng Enny'
        },
        {
          id: 'ayu',
          nama: 'Bu Ayu',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: '/src/assets/img/IbuAyu.jpg',
          deskripsi: 'Bu Ayu menjual beragam hidangan lezat seperti seblak prasmanan, mie level, mie ayam, dan mie jebew. Setiap menu dibuat dengan cita rasa khas yang menggugah selera dan disajikan hangat untuk para pelanggan. Selain itu, tersedia pula aneka minuman segar yang cocok dinikmati bersama hidangan utama.',
          kontak: '+62 821 1775 3290',
          alamat: 'Desa Juron Rt 02, Rw 03',
          usaha: 'Dapur Yumna'
        },
        {
          id: 'endang',
          nama: 'Bu Endang',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: '/src/assets/img/IbuEndang.jpg',
          deskripsi: 'Bu Endang menjual hidangan ayam goreng kampung dengan cita rasa gurih khas rumahan yang menggugah selera. Ayam kampung pilihan digoreng hingga keemasan dengan bumbu meresap sempurna, menghasilkan rasa lezat di setiap gigitan. Pelanggan juga bisa memesan satu potong ayam sebagai pilihan sajian.',
          kontak: '+62 821 2221 6963',
          alamat: 'Desa Juron Rt 01, Rw 04',
          usaha: 'Ayam Goreng Kampung Mbak Endang'
        },
        {
          id: 'rina',
          nama: 'Mbak Rina',
          jenisUsaha: 'Anyaman',
          foto: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
          deskripsi: 'Mbak Rina mengembangkan usaha anyaman pandan yang telah diwariskan turun-temurun dalam keluarganya. Ia mengkreasikan berbagai produk anyaman pandan seperti tas, tikar, dan hiasan rumah dengan desain yang modern dan menarik.',
          kontak: '+62 817 8901 2345',
          alamat: 'Dusun Pandan Wangi, Desa Juron',
          usaha: 'Kriya Pandan Juron'
        },
        {
          id: 'darto',
          nama: 'Pak Darto',
          jenisUsaha: 'Madu Hutan',
          foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          deskripsi: 'Pak Darto adalah peternak lebah yang menghasilkan madu hutan berkualitas tinggi. Ia memelihara lebah dengan cara tradisional dan ramah lingkungan, sehingga menghasilkan madu murni dengan khasiat yang maksimal.',
          kontak: '+62 818 9012 3456',
          alamat: 'Dusun Madu Lestari, Desa Juron',
          usaha: 'Tani Madu Juron'
        },
        {
          id: 'yanti',
          nama: 'Bu Yanti',
          jenisUsaha: 'Gula Aren',
          foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
          deskripsi: 'Bu Yanti mengolah nira aren menjadi gula aren organik dengan cara tradisional. Proses produksinya masih menggunakan peralatan sederhana dan tanpa bahan tambahan kimia, sehingga menghasilkan gula aren dengan cita rasa khas yang alami.',
          kontak: '+62 819 0123 4567',
          alamat: 'Dusun Aren Manis, Desa Juron',
          usaha: 'Tani Aren Juron'
        },
      ]

    // Membuat reactive references untuk data yang diacak
    const featuredProducts = ref([])
    const pelakuUMKM = ref([])

    // Mengacak data saat komponen dimuat
    onMounted(() => {
      // Mengacak produk dan pelaku UMKM
      featuredProducts.value = shuffleArray(originalProducts)
      pelakuUMKM.value = shuffleArray(originalPelakuUMKM)
      
      // Menambahkan event listener untuk scroll
      window.addEventListener('scroll', handleScrollAnimation)
      // Trigger animasi saat halaman dimuat
      handleScrollAnimation()
    })

    return {
      umkmContainer,
      productsContainer,
      scrollUMKM,
      scrollProducts,
      selectedPelaku,
      form,
      showModal,
      closeModal,
      submitForm,
      getKontakByUsaha,
      featuredProducts,
      pelakuUMKM
    }
  }
}
</script>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Cloud Animation */
.cloud {
  position: absolute;
  background-image: url('https://www.freepnglogos.com/uploads/cloud-png/cloud-png-15.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
}

.cloud-1 {
  width: 200px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation: float 30s linear infinite;
}

.cloud-2 {
  width: 150px;
  height: 75px;
  top: 20%;
  right: 15%;
  animation: float 25s linear infinite reverse;
}

.cloud-3 {
  width: 180px;
  height: 90px;
  top: 35%;
  left: 30%;
  animation: float 35s linear infinite;
}

@keyframes float {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
}

/* Hide scrollbar */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Custom responsive improvements */
@media (max-width: 640px) {
  /* Improve touch targets for mobile */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Better text wrapping for mobile */
  .text-wrap-balance {
    text-wrap: balance;
  }
  
  /* Improved spacing for mobile */
  .container-custom {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Better card shadows for mobile */
  .shadow-lg {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  /* Improved modal experience on mobile */
  .modal-container {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  
  /* Better image loading experience */
  img {
    loading: lazy;
  }
  
  /* Smooth scrolling for mobile */
  html {
    scroll-behavior: smooth;
  }
  
  /* Prevent horizontal overflow */
  body {
    overflow-x: hidden;
  }
}

/* Tablet improvements */
@media (min-width: 641px) and (max-width: 1024px) {
  .container-custom {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Ensure proper aspect ratios for images */
img {
  object-fit: cover;
  max-width: 100%;
}

/* Improve form elements on mobile */
input, textarea, select {
  font-size: 16px; /* Prevents zoom on iOS */
}

/* Better focus indicators for accessibility */
button:focus, a:focus {
  outline: 2px solid #22c55e;
  outline-offset: 2px;
}
</style>