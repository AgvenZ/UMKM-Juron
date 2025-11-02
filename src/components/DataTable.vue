<template>
  <div class="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-white/20 backdrop-blur-sm">
    <!-- Mobile View -->
    <div class="md:hidden">
      <div class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-4">
        <h3 class="text-white font-bold text-lg text-center">Data {{ type === 'umkm' ? 'Pelaku UMKM' : 'Produk Unggulan' }}</h3>
      </div>
      <div class="divide-y divide-gray-200">
        <div v-for="item in (Array.isArray(data) ? data : [])" :key="item.id" class="p-4 bg-white hover:bg-gray-50 transition-colors">
          <div class="flex items-start gap-3">
            <img
              :src="item.foto"
              :alt="item.nama"
              class="w-12 h-12 rounded-xl object-cover border-2 border-gray-200 flex-shrink-0"
              @error="handleImageError"
            >
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 text-sm truncate">{{ item.nama }}</h4>
              <p class="text-xs text-gray-600 mt-1">ID: {{ item.id }}</p>
              <div class="mt-2 space-y-1">
                <p v-if="type === 'umkm'" class="text-xs text-gray-700">
                  <span class="font-medium">Usaha:</span> {{ item.usaha }}
                </p>
                <p v-if="type === 'umkm' && item.jenis_usaha" class="text-xs">
                  <span class="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {{ item.jenis_usaha }}
                  </span>
                </p>
                <p v-if="type === 'produk'" class="text-xs text-gray-700">
                  <span class="font-medium">Usaha:</span> {{ item.usaha || '-' }}
                </p>
                <p v-if="type === 'produk' && item.harga" class="text-xs">
                  <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">
                    {{ formatHarga(item.harga) }}
                  </span>
                </p>
                <p class="text-xs text-gray-700">
                  <span class="font-medium">Kontak:</span> {{ item.kontak }}
                </p>
              </div>
              <div class="mt-3 flex gap-2">
                <button
                  @click="$emit('edit', item)"
                  class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-sm"
                >
                  <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
                <button
                  @click="$emit('delete', item)"
                  class="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-sm"
                >
                  <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!Array.isArray(data) || data.length === 0" class="p-8 text-center text-gray-500">
          <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15a2 2 0 01-2 2z"/>
          </svg>
          <p class="text-sm font-medium">Tidak ada data yang tersedia</p>
          <p class="text-xs text-gray-400 mt-1">Silakan tambahkan data baru</p>
        </div>
      </div>
    </div>

    <!-- Desktop View -->
    <div class="hidden md:block">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            <tr>
              <th class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Foto
                </div>
              </th>
              <th class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Nama
                </div>
              </th>
              <th v-if="type === 'umkm'" class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  Usaha
                </div>
              </th>
              <th v-if="type === 'umkm'" class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Jenis Usaha
                </div>
              </th>
              <th v-if="type === 'produk'" class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  Usaha
                </div>
              </th>
              <th v-if="type === 'produk'" class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Harga
                </div>
              </th>
              <th class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7.716V6a2 2 0 012-2z"/>
                  </svg>
                  Kontak
                </div>
              </th>
              <th class="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Aksi
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(item, index) in (Array.isArray(data) ? data : [])" :key="item.id" 
                class="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-sm"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="relative group">
                  <img
                    :src="item.foto"
                    :alt="item.nama"
                    class="h-14 w-14 rounded-2xl object-cover border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    @error="handleImageError"
                  >
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex flex-col">
                  <div class="text-base font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{{ item.nama }}</div>
                  <div class="text-xs text-gray-500 font-medium">ID: {{ item.id }}</div>
                </div>
              </td>
              <td v-if="type === 'umkm'" class="px-6 py-4 whitespace-nowrap">
                <div class="text-base font-semibold text-gray-800">{{ item.usaha }}</div>
              </td>
              <td v-if="type === 'umkm'" class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  {{ item.jenis_usaha || '-' }}
                </span>
              </td>
              <td v-if="type === 'produk'" class="px-6 py-4 whitespace-nowrap">
                <div class="text-base font-semibold text-gray-800">{{ item.usaha || '-' }}</div>
              </td>
              <td v-if="type === 'produk'" class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                  <svg class="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ formatHarga(item.harga) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12 19.09c-1.48 0-2.92-.4-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.83-1.31-1.26-2.83-1.26-4.39 0-4.97 4.04-9.01 9.01-9.01 2.4 0 4.65.94 6.34 2.64 1.7 1.7 2.64 3.95 2.64 6.34.01 4.97-4.04 9.01-9.01 9.01zM16.25 13.53c-.27-.14-1.57-.77-1.82-.86-.25-.09-.43-.13-.61.14-.18.27-.7.86-.86 1.04-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.3.27-.5.09-.2.05-.37-.02-.52-.07-.15-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.02-.54-.02-.19 0-.49.07-.75.36-.26.29-1 .97-1 2.37s1.02 2.75 1.16 2.94c.14.19 2.01 3.08 4.88 4.3.68.29 1.21.46 1.63.6.69.22 1.32.19 1.81.11.55-.09 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.27-.18-.54-.32z"/>
                  </svg>
                  <span class="text-sm font-medium text-gray-700">{{ item.kontak }}</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center justify-center space-x-2">
                  <button
                    @click="$emit('edit', item)"
                    class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Edit
                  </button>
                  <button
                    @click="$emit('delete', item)"
                    class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="!Array.isArray(data) || data.length === 0">
              <td :colspan="getColspan()" class="px-6 py-12 text-center">
                <div class="flex flex-col items-center justify-center text-gray-500">
                  <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15a2 2 0 01-2 2z"/>
                  </svg>
                  <p class="text-lg font-medium">Tidak ada data yang tersedia</p>
                  <p class="text-sm text-gray-400 mt-1">Silakan tambahkan data baru untuk melihat tabel</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: 'umkm', // 'umkm' atau 'produk'
    validator: (value) => ['umkm', 'produk'].includes(value)
  }
});

defineEmits(['edit', 'delete']);

const handleImageError = (event) => {
  console.warn('Image failed to load in DataTable:', event.target.src);
  
  // Try different fallback images
  if (event.target.src.includes('no-image.png')) {
    // If already using no-image.png, don't try again
    return;
  }
  
  // Set fallback image - try no-image.png first
  event.target.src = '/assets/img/no-image.png';
  
  // If fallback also fails, try a data URL as last resort
  event.target.onerror = function() {
    console.error('Fallback image also failed to load in DataTable');
    // Use a simple placeholder data URL as last resort
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNSAxMkMxNy40IDEyIDEyIDE3LjQgMTIgMjVDMTIgMzIuNiAxNy40IDM4IDI1IDM4QzMyLjYgMzggMzggMzIuNiAzOCAyNUMzOCAxNy40IDMyLjYgMTIgMjUgMTJaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik0yNSAzMlYyNS4yNUwyOC41IDIxLjc1QzI4LjggMjEuNDUgMjguOCAyMSAyOC41IDIwLjdDMjguMiAyMC40IDI3Ljc1IDIwLjQgMjcuNDUgMjAuN0wyNSAyMy4xNUwyMi41NSAyMC43QzIyLjI1IDIwLjQgMjEuOCAyMC40IDIxLjUgMjAuN0MyMS4yIDIxIDIxLjIgMjEuNDUgMjEuNSAyMS43NUwyNSAzMlYyNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';
  };
};

const formatHarga = (harga) => {
  if (!harga) return '-';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(harga);
};

const getColspan = () => {
  return props.type === 'produk' ? 6 : 6;
};
</script>