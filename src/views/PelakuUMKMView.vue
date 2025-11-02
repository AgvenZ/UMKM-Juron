<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <NavbarAdmin />
    
    <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <!-- Header Section -->
      <div class="mb-6 md:mb-8 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl opacity-10 blur-2xl md:blur-3xl"></div>
        <div class="relative">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Kelola Pelaku UMKM
          </h1>
          <p class="text-gray-600 text-sm md:text-base lg:text-lg">Kelola data pelaku UMKM Desa Juron</p>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="mb-6 md:mb-8 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        <router-link
          to="/dashboard"
          class="group inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-700 font-medium text-sm md:text-base"
        >
          <svg class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Kembali ke Dashboard
        </router-link>
        
        <button
          @click="showForm = true"
          class="group relative overflow-hidden inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white font-medium text-sm md:text-base"
        >
          <div class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Tambah Pelaku UMKM
        </button>
      </div>
      
      <!-- Form Modal -->
      <div v-if="showForm" class="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-start sm:items-center justify-center p-2 sm:p-4">
        <div class="relative w-full max-w-2xl shadow-2xl rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm border border-white/20 transform transition-all duration-300 scale-95 sm:scale-100 animate-in fade-in-90 zoom-in-90 mt-4 sm:mt-0">
          <FormUMKM
            :initial-data="editingItem"
            :is-edit="!!editingItem"
            :loading="loading"
            @submit="handleSubmit"
            @cancel="closeForm"
          />
        </div>
      </div>
      
      <!-- Data Table -->
      <div class="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 md:p-6">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-white">Daftar Pelaku UMKM</h2>
        </div>
        
        <div class="p-4 md:p-6">
          <DataTable
            :data="umkmData"
            type="umkm"
            @edit="handleEdit"
            @delete="handleDelete"
          />
        </div>
      </div>
      

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import NavbarAdmin from '@/components/NavbarAdmin.vue';
import DataTable from '@/components/DataTable.vue';
import FormUMKM from '@/components/FormUMKM.vue';

const showForm = ref(false);
const loading = ref(false);
const editingItem = ref(null);
const umkmData = ref([]);

const fetchUMKMData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'pelaku_umkm'));
    umkmData.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching UMKM data:', error);
    const errorMessage = error.message || 'Gagal mengambil data UMKM';
    alert(`Gagal mengambil data UMKM: ${errorMessage}`);
  }
};

const handleSubmit = async (formData) => {
  loading.value = true;
  try {
    if (editingItem.value) {
      // Update existing item
      await updateDoc(doc(db, 'pelaku_umkm', editingItem.value.id), formData);
      alert('Data berhasil diupdate!');
    } else {
      // Add new item
      await addDoc(collection(db, 'pelaku_umkm'), formData);
      alert('Data berhasil ditambahkan!');
    }
    
    closeForm();
    await fetchUMKMData();
  } catch (error) {
    console.error('Error submitting form:', error);
    const errorMessage = error.message || 'Gagal menyimpan data';
    alert(`Gagal menyimpan data: ${errorMessage}`);
  } finally {
    loading.value = false;
  }
};

const handleEdit = (item) => {
  editingItem.value = { ...item };
  showForm.value = true;
};

const handleDelete = async (item) => {
  if (confirm(`Apakah Anda yakin ingin menghapus data ${item.nama}?`)) {
    try {
      await deleteDoc(doc(db, 'pelaku_umkm', item.id));
      alert('Data berhasil dihapus!');
      await fetchUMKMData();
    } catch (error) {
      console.error('Error deleting item:', error);
      const errorMessage = error.message || 'Gagal menghapus data';
      alert(`Gagal menghapus data: ${errorMessage}`);
    }
  }
};

const closeForm = () => {
  showForm.value = false;
  editingItem.value = null;
};

onMounted(() => {
  fetchUMKMData();
});
</script>