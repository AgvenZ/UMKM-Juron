<template>
  <div class="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl border border-white/20 p-3 sm:p-4 md:p-6 lg:p-8 transform transition-all duration-300 max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
    <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
      <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center">
        <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      </div>
      <div>
        <h3 class="text-lg md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {{ isEdit ? 'Edit' : 'Tambah' }} Produk Unggulan
        </h3>
        <p class="text-gray-500 text-xs md:text-sm">Kelola produk unggulan UMKM Anda</p>
      </div>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-5">
      <div class="group">
        <label for="nama" class="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 md:mb-3">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
          Nama Produk <span class="text-red-500">*</span>
        </label>
        <input
          id="nama"
          v-model="form.nama"
          type="text"
          required
          class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
          placeholder="🌟 Masukkan nama produk unggulan"
        >
      </div>
      
      <div class="group">
        <label for="usaha" class="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 md:mb-3">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          Nama Usaha <span class="text-red-500">*</span>
        </label>
        <input
          id="usaha"
          v-model="form.usaha"
          type="text"
          required
          class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
          placeholder="🏢 Masukkan nama usaha/brand"
        >
      </div>
      
      <div class="group">
        <label for="kontak" class="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 md:mb-3">
          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM16.8 13.6c-.23.66-1.17 1.18-1.64.93-.45-.24-2.85-1.4-3.33-1.56-.47-.16-.82-.24-1.17.66-.34.9-.57 1.08-1.17.9-.6-.18-2.53-.93-4.82-2.96-1.78-1.58-2.98-3.52-3.32-4.12-.34-.6-.04-.9.26-1.17.23-.2.66-.66.96-.9.3-.23.4-.4.6-.66.2-.26.1-.5-.05-.66-.15-.15-.6-.66-.82-.9-.23-.23-.47-.2-.7-.1-.23.1-1.02 1.02-1.02 2.47 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.15 5.02 4.42 2.95 1.27 2.95.84 3.5.84.55 0 1.77-.66 2.02-1.3.25-.66.25-1.22.15-1.35-.1-.13-.35-.2-.8-.4z"/>
          </svg>
          Kontak WhatsApp <span class="text-red-500">*</span>
        </label>
        <input
          id="kontak"
          v-model="form.kontak"
          type="tel"
          required
          class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
          placeholder="📱 Contoh: 6281234567890"
        >
      </div>
      
      <div class="group">
        <label for="harga" class="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 md:mb-3">
          <svg class="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Harga Produk <span class="text-red-500">*</span>
        </label>
        <input
          id="harga"
          v-model="form.harga"
          type="text"
          required
          class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
          placeholder="💰 Contoh: Rp 15.000"
        >
      </div>
      
      <div class="group">
        <label for="deskripsi" class="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 md:mb-3">
          <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Deskripsi Produk <span class="text-red-500">*</span>
        </label>
        <textarea
          id="deskripsi"
          v-model="form.deskripsi"
          rows="4"
          required
          class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 resize-none text-sm md:text-base"
          placeholder="📝 Deskripsikan produk penjual secara detail - keunggulan, manfaat, dll"
        ></textarea>
      </div>
      
      <div class="group">
        <label for="foto" class="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 md:mb-3">
          <svg class="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Foto Produk <span class="text-red-500">*</span>
        </label>
        <input
          id="foto"
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="handleFileUpload"
          class="hidden"
        >
        <button
          type="button"
          @click="$refs.fileInput.click()"
          class="w-full flex items-center justify-center px-3 md:px-4 py-2 md:py-3 bg-white/50 border-2 border-dashed border-gray-300 rounded-lg md:rounded-xl hover:border-pink-400 hover:bg-white transition-all duration-300 text-gray-600 hover:text-pink-600 text-sm md:text-base"
        >
          <svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span v-if="!selectedFile">Pilih Foto Produk</span>
          <span v-else>{{ selectedFile.name }}</span>
        </button>
        <p class="text-xs text-gray-500 mt-1 md:mt-2 flex items-center gap-1">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          Format: JPG, PNG, GIF (max 2MB)
        </p>
      </div>
      
      <!-- Preview Foto -->
      <div v-if="form.foto" class="mt-3 md:mt-4 animate-fade-in">
        <div class="flex items-center gap-2 mb-2 md:mb-3">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p class="text-sm font-semibold text-gray-700">Preview Foto Produk</p>
        </div>
        <div class="relative group">
          <img
            :src="form.foto"
            alt="Preview Produk"
            class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl md:rounded-2xl border-2 md:border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
            @error="handleImageError"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="mt-2 md:mt-3 flex gap-2">
          <button
            type="button"
            @click="$refs.fileInput.click()"
            class="flex-1 px-3 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors text-sm font-medium"
          >
            Ganti Foto
          </button>
          <button
            type="button"
            @click="removeImage"
            class="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
          >
            Hapus
          </button>
        </div>
      </div>
      
      <div class="flex gap-3 md:gap-4 pt-4 md:pt-6">
        <button
          type="submit"
          :disabled="loading"
          class="flex-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl hover:from-green-700 hover:via-emerald-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
        >
          <div class="flex items-center justify-center gap-1 md:gap-2">
            <svg v-if="!loading" class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <svg v-else class="animate-spin w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span v-if="!loading">{{ isEdit ? 'Update Produk' : 'Simpan Produk' }}</span>
            <span v-else>Memproses...</span>
          </div>
        </button>
        
        <button
          type="button"
          @click="$emit('cancel')"
          class="px-4 md:px-6 py-2 md:py-3 border-2 border-gray-300 rounded-lg md:rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500/20 focus:ring-offset-2 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
        >
          <div class="flex items-center gap-1 md:gap-2">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            Batal
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({})
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['submit', 'cancel']);

const form = ref({
  nama: '',
  usaha: '',
  kontak: '',
  harga: '',
  deskripsi: '',
  foto: ''
});

const selectedFile = ref(null);
const fileInput = ref(null);

// Watch for initial data changes
watch(() => props.initialData, (newData) => {
  if (newData && Object.keys(newData).length > 0) {
    form.value = { ...newData };
  }
}, { immediate: true });

const handleSubmit = () => {
  const formData = { ...form.value };
  if (selectedFile.value) {
    formData.foto = formData.foto;
  }
  emit('submit', formData);
};

const handleImageError = (event) => {
  console.warn('Image failed to load:', event.target.src);
  
  // Try different fallback images
  if (event.target.src.includes('no-image.png')) {
    // If already using no-image.png, don't try again
    return;
  }
  
  // Set fallback image
  event.target.src = '/assets/img/no-image.png';
  
  // If fallback also fails, try a data URL as last resort
  event.target.onerror = function() {
    console.error('Fallback image also failed to load');
    // Use a simple data URL as last resort
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NSA4NUgxMTVWMTE1SDg1Vjg1WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
  };
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      form.value.foto = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = () => {
  form.value.foto = '';
  selectedFile.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>