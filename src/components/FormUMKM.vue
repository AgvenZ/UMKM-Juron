<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 md:p-4 z-50">
    <div class="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 md:p-6 lg:p-8 rounded-t-xl md:rounded-t-2xl">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">{{ isEdit ? 'Edit Data UMKM' : 'Tambah Data UMKM' }}</h2>
            <p class="text-blue-100 mt-1 text-sm md:text-base">Lengkapi informasi detail usaha Anda</p>
          </div>
          <button
            @click="$emit('cancel')"
            class="text-white hover:text-gray-200 text-xl md:text-2xl lg:text-3xl font-bold w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
          >
            ×
          </button>
        </div>
      </div>
      <div class="p-3 sm:p-4 md:p-6 lg:p-8">
        <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
      <div class="group">
        <label for="nama" class="block text-sm font-bold text-gray-700 mb-2 md:mb-3 group-focus-within:text-emerald-600 transition-colors">
          Nama Lengkap <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <input
            id="nama"
            v-model="form.nama"
            type="text"
            required
            class="w-full pl-10 pr-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
            placeholder="Masukkan nama lengkap pelaku UMKM"
          >
        </div>
      </div>
      
      <div class="group">
        <label for="usaha" class="block text-sm font-bold text-gray-700 mb-2 md:mb-3 group-focus-within:text-emerald-600 transition-colors">
          Nama Usaha <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <input
            id="usaha"
            v-model="form.usaha"
            type="text"
            required
            class="w-full pl-10 pr-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
            placeholder="Masukkan nama usaha/brand"
          >
        </div>
      </div>
      
      <div class="group">
        <label for="jenis_usaha" class="block text-sm font-bold text-gray-700 mb-2 md:mb-3 group-focus-within:text-emerald-600 transition-colors">
          Jenis Usaha <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <select
            id="jenis_usaha"
            v-model="form.jenis_usaha"
            required
            class="w-full pl-10 pr-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer text-sm md:text-base"
          >
            <option value="" disabled>Pilih Jenis Usaha</option>
            <option value="Kuliner">🍽️ Kuliner</option>
            <option value="Fashion">👗 Fashion</option>
            <option value="Kerajinan">🎨 Kerajinan</option>
            <option value="Pertanian">🌾 Pertanian</option>
            <option value="Peternakan">🐄 Peternakan</option>
            <option value="Perikanan">🐟 Perikanan</option>
            <option value="Jasa">🔧 Jasa</option>
            <option value="Lainnya">📦 Lainnya</option>
          </select>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="group">
        <label for="alamat" class="block text-sm font-semibold text-gray-700 mb-2 md:mb-3 group-focus-within:text-emerald-600 transition-colors">
          Alamat <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <textarea
            id="alamat"
            v-model="form.alamat"
            rows="3"
            required
            class="w-full pl-10 pr-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-gray-400 resize-none text-sm md:text-base"
            placeholder="Masukkan alamat lengkap usaha"
          ></textarea>
        </div>
      </div>
      
      <div class="group">
        <label for="kontak" class="block text-sm font-semibold text-gray-700 mb-2 md:mb-3 group-focus-within:text-emerald-600 transition-colors">
          Kontak (WhatsApp) <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12 19.09c-1.48 0-2.92-.4-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.83-1.31-1.26-2.83-1.26-4.39 0-4.97 4.04-9.01 9.01-9.01 2.4 0 4.65.94 6.34 2.64 1.7 1.7 2.64 3.95 2.64 6.34.01 4.97-4.04 9.01-9.01 9.01zM16.25 13.53c-.27-.14-1.57-.77-1.82-.86-.25-.09-.43-.13-.61.14-.18.27-.7.86-.86 1.04-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.3.27-.5.09-.2.05-.37-.02-.52-.07-.15-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.02-.54-.02-.19 0-.49.07-.75.36-.26.29-1 .97-1 2.37s1.02 2.75 1.16 2.94c.14.19 2.01 3.08 4.88 4.3.68.29 1.21.46 1.63.6.69.22 1.32.19 1.81.11.55-.09 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.27-.18-.54-.32z"/>
            </svg>
          </div>
          <input
            id="kontak"
            v-model="form.kontak"
            type="tel"
            required
            class="w-full pl-10 pr-4 py-2 md:py-3 bg-white/50 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
            placeholder="6281234567890 (tanpa spasi dan tanda +)"
          >
        </div>
        <p class="text-xs text-gray-500 mt-2 flex items-center">
          <svg class="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12 19.09c-1.48 0-2.92-.4-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.83-1.31-1.26-2.83-1.26-4.39 0-4.97 4.04-9.01 9.01-9.01 2.4 0 4.65.94 6.34 2.64 1.7 1.7 2.64 3.95 2.64 6.34.01 4.97-4.04 9.01-9.01 9.01zM16.25 13.53c-.27-.14-1.57-.77-1.82-.86-.25-.09-.43-.13-.61.14-.18.27-.7.86-.86 1.04-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.3.27-.5.09-.2.05-.37-.02-.52-.07-.15-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.02-.54-.02-.19 0-.49.07-.75.36-.26.29-1 .97-1 2.37s1.02 2.75 1.16 2.94c.14.19 2.01 3.08 4.88 4.3.68.29 1.21.46 1.63.6.69.22 1.32.19 1.81.11.55-.09 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.07-.11-.27-.18-.54-.32z"/>
          </svg>
          Format: 628xxxxxxxxx (untuk WhatsApp)
        </p>
      </div>
      
      <!-- WhatsApp Business -->
      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2 md:mb-3">WhatsApp Business</label>
        <div class="grid grid-cols-2 gap-3 md:gap-4">
          <label class="flex items-center p-3 md:p-4 border-2 border-gray-200 rounded-lg md:rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-300">
            <input
              v-model="form.whatsapp_business"
              type="radio"
              value="Ya"
              class="text-blue-600 focus:ring-blue-500"
            >
            <span class="ml-2 md:ml-3 text-gray-700 text-sm md:text-base">Ya</span>
          </label>
          <label class="flex items-center p-3 md:p-4 border-2 border-gray-200 rounded-lg md:rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-300">
            <input
              v-model="form.whatsapp_business"
              type="radio"
              value="Tidak"
              class="text-blue-600 focus:ring-blue-500"
            >
            <span class="ml-2 md:ml-3 text-gray-700 text-sm md:text-base">Tidak</span>
          </label>
        </div>
      </div>

      <div class="group">
        <label for="deskripsi" class="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-emerald-600 transition-colors">
          Deskripsi Usaha <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <textarea
            id="deskripsi"
            v-model="form.deskripsi"
            rows="4"
            required
            class="w-full pl-10 pr-4 py-3 bg-white/50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder-gray-400 resize-none"
            placeholder="Jelaskan secara detail tentang usaha penjual - produk yang dijual, keunggulan, target pasar, dll"
          ></textarea>
        </div>
        <p class="text-xs text-gray-500 mt-2 flex items-center">
          <svg class="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Deskripsi yang lengkap membantu calon pembeli mengenal usaha Anda
        </p>
      </div>
      
      <!-- Upload Foto -->
      <div class="border-2 border-dashed border-gray-300 rounded-lg md:rounded-xl p-4 md:p-6 text-center hover:border-blue-400 transition-all duration-300 bg-gray-50">
        <div v-if="form.foto" class="mb-4 relative inline-block">
          <img :src="form.foto" alt="Preview" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg md:rounded-xl border-2 border-gray-200">
          <button
            @click="removeImage"
            type="button"
            class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:bg-red-600 transition-colors text-sm md:text-base"
          >
            ×
          </button>
        </div>
        <div v-if="!form.foto" class="mb-4">
          <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p class="text-gray-500 mb-1 md:mb-2 text-sm md:text-base">Klik untuk upload foto</p>
          <p class="text-xs text-gray-400">Format: JPG, PNG, JPEG</p>
        </div>
        <input
          ref="fileInput"
          @change="handleFileUpload"
          type="file"
          accept="image/*"
          class="hidden"
        >
        <button
          @click="$refs.fileInput.click()"
          type="button"
          class="px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-lg md:rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm md:text-base"
        >
          {{ form.foto ? 'Ganti Foto' : 'Pilih Foto' }}
        </button>
      </div>
      
      <div class="flex gap-4 pt-6">
        <button
          type="submit"
          :disabled="loading"
          class="group relative flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <div class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          <div class="relative flex items-center justify-center">
            <svg v-if="!loading" class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
            </svg>
            <svg v-else class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ loading ? 'Memproses...' : (isEdit ? 'Update Data' : 'Simpan Data') }}</span>
          </div>
        </button>
        
        <button
          type="button"
          @click="$emit('cancel')"
          class="group px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:border-gray-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Batal
          </div>
        </button>
      </div>
        </form>
      </div>
    </div>
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
  jenis_usaha: '',
  alamat: '',
  kontak: '',
  whatsapp_business: 'Tidak',
  deskripsi: '',
  foto: ''
});

const selectedFile = ref(null);
const fileInput = ref(null);
const isSubmitting = ref(false);

// Watch for initial data changes
watch(() => props.initialData, (newData) => {
  if (newData && Object.keys(newData).length > 0) {
    form.value = { ...newData };
  }
}, { immediate: true });

const validateForm = () => {
  if (!form.value.nama || !form.value.usaha || !form.value.jenis_usaha || 
      !form.value.alamat || !form.value.kontak || !form.value.deskripsi || !form.value.foto) {
    alert('Mohon lengkapi semua field yang wajib diisi!');
    return false;
  }
  
  // Validasi nomor WhatsApp
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(form.value.kontak)) {
    alert('Nomor WhatsApp harus terdiri dari 10-15 angka!');
    return false;
  }
  
  return true;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  try {
    const formData = { ...form.value };
    if (selectedFile.value) {
      formData.foto = formData.foto;
    }
    emit('submit', formData);
  } catch (error) {
    console.error('Error submitting form:', error);
    let errorMessage = 'Gagal menyimpan data: ';
    
    if (error.code === 'network-request-failed') {
      errorMessage += 'Koneksi internet bermasalah. Silakan cek koneksi Anda.';
    } else if (error.code === 'storage/unauthorized') {
      errorMessage += 'Tidak memiliki izin untuk upload file.';
    } else if (error.code === 'storage/object-not-found') {
      errorMessage += 'File tidak ditemukan.';
    } else if (error.code === 'storage/quota-exceeded') {
      errorMessage += 'Kuota penyimpanan telah melebihi batas.';
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += 'Terjadi kesalahan yang tidak diketahui saat menyimpan data.';
    }
    
    alert(errorMessage);
  } finally {
    isSubmitting.value = false;
  }
};

const handleImageError = (event) => {
  event.target.src = '/assets/img/no-image.png';
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