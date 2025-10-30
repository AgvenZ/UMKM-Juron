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
          <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-wood-brown-800 to-natural-green-700 leading-relaxed py-1 inline-block">
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
              <img :src="desaInfo.imageSrc" 
                   :alt="desaInfo.imageAlt" 
                   class="w-full h-64 sm:h-80 md:h-[500px] object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
                   @error="console.error('Failed to load desa image:', desaInfo.imageSrc)"
                   @load="console.log('Successfully loaded desa image:', desaInfo.imageSrc)">
              <div class="absolute inset-0 bg-gradient-to-t from-wood-brown-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white font-medium">{{ desaInfo.location }}</p>
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
          <button @click="scrollUMKM('prev')" class="absolute left-0 top-1/4 sm:top-1/2 transform -translate-y-1/2 -ml-2 sm:-ml-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <!-- Cards Container -->
          <div ref="umkmContainer" class="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth">
            <div v-for="(pelaku, index) in pelakuUMKM" :key="index" 
                 class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 snap-start fade-in-section">
              <div
  class="group relative bg-gradient-to-br from-white to-cream-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 sm:hover:-translate-y-4 hover:scale-[1.03] h-[520px] sm:h-[600px] flex flex-col border border-white/20 hover:border-natural-green-200 backdrop-blur-sm animate-in fade-in-0 zoom-in-95">
                
                <!-- Pelaku Image with Modern Overlay -->
                <div class="relative overflow-hidden h-96 sm:h-96 lg:h-[28rem] bg-gradient-to-br from-gray-50 to-gray-100">
                  <img :src="pelaku.foto" :alt="pelaku.nama" 
                       class="w-full h-full object-cover object-top transition-all duration-500 hover:scale-110 group-hover:rotate-1">
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <!-- Shimmer Effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-pulse"></div>
                </div>
                
                <!-- Pelaku Info -->
                <div class="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div class="space-y-2 mb-2 sm:mb-4">
                    <h3 class="text-xl sm:text-xl font-bold text-gray-900 group-hover:text-natural-green-600 transition-all duration-300 line-clamp-2 leading-tight transform group-hover:translate-x-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text group-hover:from-natural-green-600 group-hover:to-natural-green-700">{{ pelaku.nama.split('(')[0].trim() }}</h3>
                    
                    <!-- Badges Container - Dipindahkan ke dalam card -->
                    <div class="flex flex-wrap gap-2 sm:gap-3">
                      <!-- WhatsApp Business Badge - Tidak ditampilkan untuk Bu Endang -->
                      <span v-if="pelaku.nama !== 'Bu Endang' && pelaku.nama !== 'Bu Dwi Cahyani' && pelaku.nama !== ''" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                        WhatsApp Business
                      </span>
                      
                      <!-- Jenis Usaha Badge -->
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-natural-green-400 to-natural-green-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
                        {{ pelaku.jenisUsaha.split('&')[0].trim() }}
                      </span>
                    </div>
                    
                    <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed bg-gradient-to-b from-gray-600 to-gray-500 bg-clip-text">{{ pelaku.usaha }}</p>
                  </div>
                  
                  <!-- Lihat Profil Button -->
                  <button @click="showModal(pelaku)" class="w-full inline-flex items-center justify-center px-4 sm:px-5 py-3 bg-gradient-to-r from-natural-green-500 via-natural-green-600 to-natural-green-700 text-white rounded-xl sm:rounded-2xl hover:from-natural-green-600 hover:via-natural-green-700 hover:to-natural-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold text-sm relative overflow-hidden group">
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <button @click="scrollUMKM('next')" class="absolute right-0 top-1/4 sm:top-1/2 transform -translate-y-1/2 -mr-2 sm:-mr-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Modal Profil -->
      <div v-if="selectedPelaku" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <!-- Backdrop with advanced blur effect -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="closeModal"></div>
        
        <!-- Modal Container -->
        <div class="relative bg-gradient-to-br from-white to-cream-50 rounded-2xl sm:rounded-3xl max-w-2xl lg:max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-white/30 backdrop-blur-sm transform transition-all duration-500 scale-95 animate-in fade-in-0 zoom-in-95">
          <!-- Header with premium gradient -->
          <div class="bg-gradient-to-r from-natural-green-600 via-natural-green-700 to-natural-green-800 rounded-t-2xl sm:rounded-t-3xl py-4 sm:py-5 px-4 sm:px-6 flex justify-between items-center">
            <h2 class="text-lg sm:text-xl font-bold text-white flex items-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profil UMKM
            </h2>
            <button @click="closeModal" class="text-white hover:text-cream-200 transition-all duration-300 bg-white/20 rounded-full p-2 sm:p-2.5 hover:bg-white/30 flex items-center justify-center transform hover:scale-110 hover:rotate-90">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="p-4 sm:p-5 md:p-6">
            <div class="flex flex-col gap-4 sm:gap-6">
              <!-- Image container with premium hover effect -->
              <div class="w-full rounded-2xl overflow-hidden shadow-xl group relative bg-gradient-to-br from-gray-50 to-gray-100 h-[28rem] sm:h-[40rem] md:h-[44rem]">
                <div class="relative w-full h-full overflow-hidden">
                  <img :src="selectedPelaku.foto" :alt="selectedPelaku.nama" class="absolute top-0 left-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-125" style="transform-origin: top center; object-position: top;">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <!-- WhatsApp Business Badge - Top Right Position - Tidak ditampilkan untuk Bu Endang -->
                <div v-if="selectedPelaku?.nama !== 'Bu Endang' && selectedPelaku?.nama !== 'Bu Dwi Cahyani'" class="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/30 flex-shrink-0">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    WhatsApp Business
                  </span>
                </div>
                
                <!-- Business Name Container - Bottom Left -->
                <div class="absolute bottom-2 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div class="flex flex-col items-start gap-4">
                    <!-- Mobile: Badge nama -->
                    <div class="sm:hidden bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm rounded-xl p-3 border border-white/20 w-auto max-w-[90%]">
                      <h3 class="text-lg font-bold text-white leading-tight mb-1">{{ selectedPelaku.nama.split('(')[0].trim() }}</h3>
                      <p class="text-white/90 text-sm">{{ selectedPelaku.usaha }}</p>
                    </div>
                    <!-- Desktop: Badge nama -->
                    <div class="hidden sm:block bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 w-auto max-w-[80%]">
                      <h3 class="text-lg sm:text-xl font-bold text-white leading-tight mb-1">{{ selectedPelaku.nama.split('(')[0].trim() }}</h3>
                      <p class="text-white/90 text-sm sm:text-base">{{ selectedPelaku.usaha }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Business details with premium styling -->
              <div class="flex-1 space-y-4 sm:space-y-5">
                <div class="space-y-3">
                  <!-- Jenis usaha removed -->
                </div>
                
                <!-- Description with premium card -->
                <div class="bg-gradient-to-br from-cream-50 to-white p-4 sm:p-5 rounded-xl shadow-lg border border-white/50">
                  <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                    <svg class="w-4 h-4 mr-2 text-natural-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tentang Usaha
                  </h4>
                  <p class="text-gray-700 leading-relaxed text-sm sm:text-base">{{ selectedPelaku.deskripsi }}</p>
                </div>
                
                <!-- Address with premium styling -->
                <div class="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 rounded-xl shadow-lg border border-white/50">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 bg-gradient-to-br from-natural-green-100 to-natural-green-50 p-2 rounded-lg">
                      <svg class="w-6 h-6 text-natural-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="font-bold text-gray-800 mb-0.5 leading-tight">Alamat</h4>
                      <p class="text-gray-600 leading-tight break-words">{{ selectedPelaku.alamat }}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Contact with premium button -->
                <div class="text-center pt-2">
                  <a :href="'https://wa.me/' + selectedPelaku.kontak.replace(/\D/g, '')" target="_blank" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-2xl hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold text-base relative overflow-hidden group">
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <svg class="w-5 h-5 mr-3 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    <span class="relative z-10">Hubungi WhatsApp</span>
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
          <button @click="scrollProducts('prev')" class="absolute left-0 top-1/4 sm:top-1/2 transform -translate-y-1/2 -ml-2 sm:-ml-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-wood-brown-700 group-hover:text-natural-green-600 transition-all duration-300 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <!-- Cards Container -->
          <div ref="productsContainer" class="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth">
            <div v-for="(product, index) in featuredProducts" :key="index" 
                 class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 snap-start fade-in-section">
              <div
  class="group relative bg-gradient-to-br from-white to-cream-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 sm:hover:-translate-y-4 hover:scale-[1.03] h-[480px] sm:h-[500px] flex flex-col border border-white/20 hover:border-natural-green-200 backdrop-blur-sm animate-in fade-in-0 zoom-in-95">

                <!-- Product Image with Modern Overlay -->
                <div class="relative overflow-hidden h-80 sm:h-72 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100">
                  <img :src="product.imageSrc" :alt="product.imageAlt" 
                       class="w-full h-full object-cover object-top transition-all duration-500 hover:scale-110 group-hover:rotate-1">
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <!-- Shimmer Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-pulse"></div>
                </div>
                
                <!-- Product Info -->
                <div class="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div class="space-y-2 mb-3 sm:mb-4">
                    <h3 class="text-xl sm:text-xl font-bold text-gray-900 group-hover:text-natural-green-600 transition-all duration-300 line-clamp-2 leading-tight transform group-hover:translate-x-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text group-hover:from-natural-green-600 group-hover:to-natural-green-700">{{ product.name }}</h3>
                    <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed bg-gradient-to-b from-gray-600 to-gray-500 bg-clip-text">{{ product.description }}</p>
                  </div>
                  
                  <div class="space-y-3 sm:space-y-4">
                    <div class="flex justify-between items-center gap-4">
                      <p class="text-lg sm:text-xl font-bold text-natural-green-600 bg-gradient-to-r from-natural-green-600 to-natural-green-500 bg-clip-text flex-shrink-0">{{ product.price }}</p>
                      <div class="flex items-center justify-end text-sm text-gray-500 min-w-0">
                      <div class="flex items-center min-w-0">
                        <svg class="w-4 h-4 text-natural-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="truncate ml-1">{{ product.origin }}</span>
                      </div>
                    </div>
                    </div>
                    
                    <!-- Order Button -->
                    <a :href="'https://wa.me/' + getKontakByUsaha(product.origin) + '?text=Halo, saya tertarik dengan produk ' + product.name + ' dari ' + product.origin" 
                       target="_blank" 
                       class="w-full inline-flex items-center justify-center px-4 sm:px-5 py-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-xl sm:rounded-2xl hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold text-sm relative overflow-hidden group animate-bounce hover:animate-none">
                      <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
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
          <button @click="scrollProducts('next')" class="absolute right-0 top-1/4 sm:top-1/2 transform -translate-y-1/2 -mr-2 sm:-mr-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none border border-white/20 group">
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
                   class="btn-primary text-base sm:text-lg px-4 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-natural-green-600 to-natural-green-700 text-white font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-natural-green-500/30 hover:shadow-xl flex items-center justify-center whitespace-nowrap">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span class="truncate">Isi Formulir Pendaftaran</span>
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
      <div class="container-custom relative pb-8 sm:px-6">
        
        <!-- Copyright Section -->
        <div class="pt-6 sm:pt-8 border-t border-wood-brown-700/50">
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <p class="text-xs sm:text-sm text-cream-200/60 mb-3 sm:mb-0">© 2025 UMKM Desa Juron. All rights reserved.</p>
          </div>
        </div>

        <!-- Contact Admin Section -->
        <div class="pt-4 pb-6 px-4 sm:px-0">
          <p class="text-[11px] sm:text-sm text-cream-200/60 mb-3 sm:mb-0 leading-tight text-center sm:text-left whitespace-nowrap">
            Butuh bantuan? Hubungi Admin di <span class="font-medium text-cream-100">+62-881-4183-245</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Import all images
import BalaiDesaJuronImage from '@/assets/img/BalaiDesaJuron.jpg'
console.log('BalaiDesaJuronImage:', BalaiDesaJuronImage)

// Alternative explicit import untuk force Vite
const BalaiDesaJuronUrl = new URL('@/assets/img/BalaiDesaJuron.jpg', import.meta.url).href
console.log('BalaiDesaJuronUrl:', BalaiDesaJuronUrl)
import IbuTiniImage from '@/assets/img/IbuTini.png'
import IbuNinikImage from '@/assets/img/IbuNinik.png'
import IbuEnnyImage from '@/assets/img/IbuEnny.png'
import IbuAyuImage from '@/assets/img/IbuAyu.png'
import IbuEndangImage from '@/assets/img/IbuEndang.png'
import IbuWahyuniImage from '@/assets/img/IbuWahyuni.png'
import IbuDwiImage from '@/assets/img/IbuDwi.png'
import EsDogerImage from '@/assets/img/EsDoger.jpg'
import NasiAyamKatsuImage from '@/assets/img/NasiAyamKatsu.png'
import GadoGadoTelurImage from '@/assets/img/GadoGadoTelur.jpg'
import SeblakPrasmananImage from '@/assets/img/SeblakPrasmanan.jpg'
import AyamGorengKampungImage from '@/assets/img/AyamGorengKampung.png'
import NuggetLeleImage from '@/assets/img/NuggetLele.jpg'
import NasiGorengImage from '@/assets/img/NasiGoreng.jpg'
export default {
  name: 'Home',
  // Ensure images are included in build
  images: {
    BalaiDesaJuronImage,
    IbuTiniImage,
    IbuNinikImage,
    IbuEnnyImage,
    IbuAyuImage,
    IbuEndangImage,
    IbuWahyuniImage,
    IbuDwiImage,
    EsDogerImage,
    NasiAyamKatsuImage,
    GadoGadoTelurImage,
    SeblakPrasmananImage,
    AyamGorengKampungImage,
    NuggetLeleImage,
    NasiGorengImage
  },
  setup() {
    const selectedPelaku = ref(null)
    const umkmContainer = ref(null)
    const productsContainer = ref(null)
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    // Data untuk gambar desa - format sama seperti product
    const desaInfo = ref({
      imageSrc: BalaiDesaJuronUrl, // Use URL format instead
      imageAlt: 'Aktivitas masyarakat desa',
      location: 'Desa Juron, Kecamatan Nguter, Kabupaten Sukoharjo, Jawa Tengah'
    })

    // Computed property untuk force reference ke gambar
    const balaiDesaImage = computed(() => {
      // Ini akan memaksa Vite untuk include gambar ini di build
      console.log('Force including BalaiDesaJuronImage:', BalaiDesaJuronImage)
      return BalaiDesaJuronImage
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
        { usaha: 'Dapur Yumna', kontak: '+62 821 1775 3290' },
        { usaha: 'Ayam Goreng Kampung Mbak Endang', kontak: '+62 821 2221 6963' },
        { usaha: 'Mina Roso Lumintu', kontak: '+62 819 0474 0031' },
        { usaha: 'Nasi Goreng Putri Pak Jumino', kontak: '+62 823 2476 5191' },
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
          imageSrc: EsDogerImage,
          imageAlt: 'Es Doger'
        },
        {
          name: 'Nasi Ayam Katsu',
          description: 'Nasi Ayam Katsu renyah berpadu dengan nasi hangat dan saus sambal.',
          price: 'Rp 7.000',
          origin: 'Dapur Bu Suprih',
          imageSrc: NasiAyamKatsuImage,
          imageAlt: 'Nasi Ayam Katsu'
        },
        {
          name: 'Gado-Gado Telur',
          description: 'Gado-Gado Telur disajikan dengan siraman bumbu kacang yang nikmat.',
          price: 'Rp 10.000',
          origin: 'Pawon Jeng Enny',
          imageSrc: GadoGadoTelurImage,
          imageAlt: 'Gado-Gado Telur'
        },
        {
          name: 'Seblak Prasmanan',
          description: 'Seblak Prasmanan dengan beragam topping dan tingkat pedas pilihan pelanggan.',
          price: 'Rp -',
          origin: 'Dapur Yumna',
          imageSrc: SeblakPrasmananImage,
          imageAlt: 'Seblak Prasmanan'
        },
        {
          name: 'Ayam Goreng Kampung',
          description: 'Ayam Goreng Kampung disajikan dengan cita rasa gurih khas rumahan.',
          price: 'Rp 22.000',
          origin: 'Ayam Goreng Kampung Mbak Endang',
          imageSrc: AyamGorengKampungImage,
          imageAlt: 'Ayam Goreng Kampung'
        },
        {
          name: 'Nugget Lele',
          description: 'Nugget Lele dengan bumbu khas rumahan yang gurih dan renyah di setiap gigitan.',
          price: 'Rp 15.000',
          origin: 'Mina Roso Lumintu',
          imageSrc: NuggetLeleImage,
          imageAlt: 'Nugget Lele'
        },
        {
          name: 'Nasi Goreng',
          description: 'Nasi Goreng dengan cita rasa gurih dan aroma menggugah selera.',
          price: 'Rp 12.000',
          origin: 'Nasi Goreng Putri Pak Jumino',
          imageSrc: NasiGorengImage,
          imageAlt: 'Nasi Goreng'
        },
      ]

    const originalPelakuUMKM = [
        {
          id: 'tini',
          nama: 'Bu Tini',
          jenisUsaha: 'Minuman',
          foto: IbuTiniImage,
          deskripsi: 'Bu Tini menjual berbagai jajanan sederhana namun digemari banyak orang. Setiap hari, Bu Tini menawarkan donat lembut, aneka gorengan hangat seperti corndog, tempura, dll, serta aneka es seperti es doger, pop ice dan minuman sachet lain yang menyegarkan.',
          kontak: '+62 857 2261 3566',
          alamat: 'Desa Juron Rt 03, Rw 05',
          usaha: 'Es Doger Kita'
        },
        {
          id: 'ninik',
          nama: 'Bu Ninik',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: IbuNinikImage,
          deskripsi: 'Bu Ninik menjual aneka makanan dan minuman seperti nasi ayam katsu, ayam karage, nasi rames, dan menu lezat lainnya. Setiap hidangan disajikan hangat dengan cita rasa gurih khas rumahan, cocok untuk santapan siang maupun malam. Selain makanan, tersedia juga minuman segar yang melengkapi hidangan.',
          kontak: '+62 831 3966 0179',
          alamat: 'Desa Juron Rt 01, Rw 04',
          usaha: 'Dapur Bu Suprih'
        },
        {
          id: 'enny',
          nama: 'Bu Enny',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: IbuEnnyImage,
          deskripsi: 'Bu Enny menjual aneka makanan dan minuman seperti gado-gado, soto ayam, soto daging, dan nasi tumpeng. Setiap hidangan disajikan dengan cita rasa khas rumahan yang lezat dan menggugah selera. Selain itu, tersedia juga minuman segar yang menambah kenikmatan setiap santapan.',
          kontak: '+62 812 1735 7450',
          alamat: 'Desa Juron Rt 01, Rw 05',
          usaha: 'Pawon Jeng Enny'
        },
        {
          id: 'ayu',
          nama: 'Bu Ayu',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: IbuAyuImage,
          deskripsi: 'Bu Ayu menjual beragam hidangan lezat seperti seblak prasmanan, mie level, mie ayam, dan mie jebew. Setiap menu dibuat dengan cita rasa khas yang menggugah selera dan disajikan hangat untuk para pelanggan. Selain itu, tersedia pula aneka minuman segar yang cocok dinikmati bersama hidangan utama.',
          kontak: '+62 821 1775 3290',
          alamat: 'Desa Juron Rt 02, Rw 03',
          usaha: 'Dapur Yumna'
        },
        {
          id: 'endang',
          nama: 'Bu Endang',
          jenisUsaha: 'Makanan & Minuman Siap Saji',
          foto: IbuEndangImage,
          deskripsi: 'Bu Endang menjual hidangan ayam goreng kampung dengan cita rasa gurih khas rumahan yang menggugah selera. Ayam kampung pilihan digoreng hingga keemasan dengan bumbu meresap sempurna, menghasilkan rasa lezat di setiap gigitan. Pelanggan juga bisa memesan satu potong ayam sebagai pilihan sajian.',
          kontak: '+62 821 2221 6963',
          alamat: 'Desa Juron Rt 01, Rw 04',
          usaha: 'Ayam Goreng Kampung Mbak Endang'
        },
        {
          id: 'wahyuni',
          nama: 'Bu Wahyuni',
          jenisUsaha: 'Makanan',
          foto: IbuWahyuniImage,
          deskripsi: 'Ibu Wahyuni menawarkan nugget lele dan keripik pare buatan rumahan yang unik dan lezat. Nugget lele dibuat dari daging lele segar pilihan yang diolah dengan bumbu khas, menghasilkan tekstur lembut di dalam dan renyah di luar cocok untuk camilan maupun lauk makan. Sementara keripik pare hadir dengan sensasi gurih yang khas, digoreng garing tanpa bahan pengawet, menjadikannya pilihan camilan sehat nan nikmat.',
          kontak: '+62 819 0474 0031',
          alamat: 'Desa Juron Rt 02, Rw 03',
          usaha: 'Mina Roso Lumintu'
        },
        {
          id: 'dwi cahyani',
          nama: 'Bu Dwi Cahyani',
          jenisUsaha: 'Makanan',
          foto: IbuDwiImage,
          deskripsi: 'Bu Dwi Cahyani menawarkan berbagai hidangan lezat seperti nasi goreng, mie kuah, dan capcay yang diolah dengan bumbu pilihan, menghasilkan cita rasa gurih dan menggugah selera. Setiap menu disajikan hangat dan penuh rasa, cocok dinikmati kapan saja bersama keluarga.',
          kontak: '+62 823 2476 5191',
          alamat: 'Desa Juron Rt 01, Rw 03',
          usaha: 'Nasi Goreng Putri Pak Jumino'
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
      pelakuUMKM,
      desaInfo,
      balaiDesaImage // Force reference
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