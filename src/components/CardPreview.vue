<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
    <!-- Image Section -->
    <div class="relative overflow-hidden">
      <img
        :src="data.foto"
        :alt="data.nama"
        class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        @error="handleImageError"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Type Badge -->
      <div class="absolute top-4 right-4">
        <span 
          v-if="type === 'produk'" 
          class="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm"
        >
          🛍️ Produk
        </span>
        <span 
          v-else 
          class="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm"
        >
          🏪 UMKM
        </span>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="p-6">
      <!-- Name -->
      <h3 class="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {{ data.nama }}
      </h3>
      
      <!-- Business/Product Name -->
      <p class="text-sm text-gray-600 mb-3 font-medium">
        {{ type === 'produk' ? data.nama_usaha : data.usaha }}
      </p>
      
      <!-- Category/Type -->
      <div class="mb-3">
        <span 
          v-if="type === 'produk' && data.harga" 
          class="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-3 py-1 rounded-full font-bold shadow-md"
        >
          💰 Rp {{ formatPrice(data.harga) }}
        </span>
        <span 
          v-else-if="data.jenis_usaha" 
          class="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-medium"
        >
          {{ data.jenis_usaha }}
        </span>
      </div>
      
      <!-- Description -->
      <p class="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
        {{ data.deskripsi }}
      </p>
      
      <!-- Address (only for UMKM) -->
      <div v-if="type !== 'produk' && data.alamat" class="flex items-center text-sm text-gray-600 mb-3">
        <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <span class="font-medium">{{ data.alamat }}</span>
      </div>
      
      <!-- Contact -->
      <div class="flex items-center justify-between">
        <a
          :href="`https://wa.me/${data.kontak || data.kontak_pemesanan}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.670.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.479 0 1.465 1.067 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.695"/>
          </svg>
          Pesan WhatsApp
        </a>
        
        <!-- WhatsApp Business Badge -->
        <span
          v-if="data.whatsapp_business === 'Ya'"
          class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200"
        >
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.670.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.479 0 1.465 1.067 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.695"/>
          </svg>
          Business
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'umkm',
    validator: (value) => ['umkm', 'produk'].includes(value)
  }
});

const handleImageError = (event) => {
  console.warn('Image failed to load in CardPreview:', event.target.src);
  
  // Try different fallback images
  if (event.target.src.includes('no-image.png')) {
    // If already using no-image.png, don't try again
    return;
  }
  
  // Set fallback image - try no-image.png first
  event.target.src = '/assets/img/no-image.png';
  
  // If fallback also fails, try a data URL as last resort
  event.target.onerror = function() {
    console.error('Fallback image also failed to load in CardPreview');
    // Use a simple placeholder data URL as last resort
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIyNCIgdmlld0JveD0iMCAwIDIyNCAyMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMjQiIGhlaWdodD0iMjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMTIgNjRDMTAwLjQgNjQgOTIgNzIuNCA5MiA4NEM5MiA5NS42IDEwMC40IDEwNCAxMTIgMTA0QzEyMy42IDEwNCAxMzIgOTUuNiAxMzIgODRDMTMyIDcyLjQgMTIzLjYgNjQgMTEyIDY0WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTI4IDEyMEg5NlYxNDRIMTI4VjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg==';
  };
};

const formatWhatsApp = (kontak) => {
  // Remove non-numeric characters
  const cleanNumber = kontak.replace(/\D/g, '');
  
  // If it starts with 0, replace with 62
  if (cleanNumber.startsWith('0')) {
    return '62' + cleanNumber.substring(1);
  }
  
  // If it starts with 62, return as is
  if (cleanNumber.startsWith('62')) {
    return cleanNumber;
  }
  
  // If it starts with 8 (common Indonesian mobile format), add 62
  if (cleanNumber.startsWith('8')) {
    return '62' + cleanNumber;
  }
  
  return cleanNumber;
};

const formatPrice = (price) => {
  if (!price) return '0';
  return new Intl.NumberFormat('id-ID').format(price);
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>