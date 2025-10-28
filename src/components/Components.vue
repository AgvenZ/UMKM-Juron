<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="text-2xl font-bold text-natural-green-600">UMKM Desa Juron</a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-500 hover:text-natural-green-500 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <a v-for="(item, index) in navItems" :key="index" 
             :href="item.href" 
             class="text-gray-600 hover:text-natural-green-500 transition-colors duration-300"
             :class="{ 'text-natural-green-600 font-medium': activeSection === item.id }"
             @click="setActiveSection(item.id)">
            {{ item.name }}
          </a>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-4">
          <a v-for="(item, index) in navItems" :key="index" 
             :href="item.href" 
             class="text-gray-600 hover:text-natural-green-500 transition-colors duration-300 py-2"
             :class="{ 'text-natural-green-600 font-medium': activeSection === item.id }"
             @click="setActiveSection(item.id)">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const isMenuOpen = ref(false)
    const activeSection = ref('home')
    const navItems = [
      { name: 'Home', href: '#home', id: 'home' },
      { name: 'Tentang', href: '#tentang', id: 'tentang' },
      { name: 'Pelaku', href: '#pelaku-umkm', id: 'pelaku-umkm' },
      { name: 'Produk', href: '#produk', id: 'produk' },
      { name: 'Daftarkan', href: '#kontak', id: 'kontak' },
    ]

    const setActiveSection = (sectionId) => {
      activeSection.value = sectionId
      isMenuOpen.value = false
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id')
        }
      })

      if (current) {
        activeSection.value = current
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isMenuOpen,
      activeSection,
      navItems,
      setActiveSection
    }
  }
}
</script>