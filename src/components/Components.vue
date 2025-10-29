<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-14 sm:h-16">
        <!-- Logo -->
          <div class="flex items-center">
            <a href="#" class="text-lg sm:text-xl lg:text-2xl font-bold text-natural-green-600">UMKM Desa Juron</a>
          </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="p-1.5 sm:p-2 rounded-lg text-gray-600 hover:text-natural-green-600 hover:bg-natural-green-50 transition-all duration-300 focus:outline-none">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop menu -->
          <div class="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-6">
            <a v-for="(item, index) in navItems" :key="index" 
               :href="item.href" 
               class="text-wood-brown-700 hover:text-natural-green-600 transition-colors duration-300 font-medium text-xs lg:text-sm xl:text-base 2xl:text-base"
               :class="[{ 'text-natural-green-600': activeSection === item.id }, activeSection === item.id ? '!font-bold' : 'font-medium']"
               @click="setActiveSection(item.id)">
              {{ item.name }}
            </a>
          </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-4 space-y-3">
          <a v-for="(item, index) in navItems" :key="index" 
             :href="item.href" 
             class="block text-wood-brown-700 hover:text-natural-green-600 transition-colors duration-300 font-medium py-2"
             :class="{ 'text-natural-green-600 !font-bold': activeSection === item.id }"
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
      { name: 'Beranda', href: '#home', id: 'home' },
      { name: 'Tentang', href: '#tentang', id: 'tentang' },
      { name: 'Pelaku', href: '#pelaku-umkm', id: 'pelaku-umkm' },
      { name: 'Produk', href: '#produk', id: 'produk' },
      { name: 'Daftar', href: '#kontak', id: 'kontak' },
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