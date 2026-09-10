<template>
  <nav ref="navRef" class="fixed top-0 left-0 right-0 z-50">
    <!-- LAPISAN LATAR: backdrop-blur dipisah dari <nav> agar <nav> bukan containing block -->
    <div
      :class="[
        'absolute inset-0 pointer-events-none transition-all duration-500 ease-out',
        (isScrolled || isMenuOpen)
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-wood-brown-900/5 border-b border-wood-brown-100/50'
          : 'bg-transparent'
      ]"
    ></div>

    <div class="relative container-custom">
      <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">
        <!-- Logo -->
        <a
          href="#home"
          @click="handleNavClick($event, 'home')"
          class="flex items-center gap-2 sm:gap-3 group"
        >
          <div
            :class="[
              'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-md',
              (isScrolled || isMenuOpen)
                ? 'bg-gradient-to-br from-natural-green-500 to-natural-green-700'
                : 'bg-gradient-to-br from-natural-green-600/90 to-natural-green-800/90'
            ]"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div class="flex flex-col leading-tight">
            <span :class="['font-bold text-base sm:text-lg md:text-xl transition-colors duration-300', (isScrolled || isMenuOpen) ? 'text-wood-brown-800' : 'text-white drop-shadow-md']">
              UMKM Juron
            </span>
            <span :class="['text-[10px] sm:text-xs font-medium transition-colors duration-300 tracking-wide', (isScrolled || isMenuOpen) ? 'text-natural-green-600' : 'text-cream-100/90 drop-shadow']">
              Desa Juron Digital
            </span>
          </div>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-1 xl:gap-2">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            @click="handleNavClick($event, item.id)"
            :class="[
              'relative px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-300 group',
              activeSection === item.id
                ? (isScrolled ? 'text-natural-green-700' : 'text-white')
                : (isScrolled ? 'text-wood-brown-700 hover:text-natural-green-700' : 'text-cream-50/90 hover:text-white')
            ]"
          >
            {{ item.label }}
            <span :class="['absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ease-out', activeSection === item.id ? 'w-6 bg-gradient-to-r from-natural-green-500 to-natural-green-600' : 'w-0 group-hover:w-4 bg-natural-green-400']"></span>
            <span v-if="activeSection === item.id" :class="['absolute inset-0 rounded-lg -z-10 opacity-40', isScrolled ? 'bg-natural-green-50' : 'bg-white/10']"></span>
          </a>

          <a
            href="#kontak"
            @click="handleNavClick($event, 'kontak')"
            :class="[
              'ml-3 xl:ml-4 inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl font-semibold text-sm xl:text-base transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl',
              isScrolled
                ? 'bg-gradient-to-r from-natural-green-600 to-natural-green-700 text-white shadow-lg shadow-natural-green-600/20'
                : 'bg-white text-natural-green-700 shadow-lg shadow-black/10'
            ]"
          >
            <svg class="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Daftar</span>
          </a>
        </div>

        <!-- Hamburger (inline zIndex: 60, tanpa active:scale-95) -->
        <button
          type="button"
          @click="toggleMobileMenu"
          :style="{ zIndex: 60 }"
          :class="[
            'lg:hidden relative flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-colors duration-200 focus:outline-none touch-manipulation select-none',
            (isScrolled || isMenuOpen)
              ? 'bg-wood-brown-50 text-wood-brown-700'
              : 'bg-white/15 text-white border border-white/20'
          ]"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
        >
          <span :class="['block w-5 h-0.5 rounded-full transition-all duration-300 ease-out', isMenuOpen ? 'translate-y-1.5 rotate-45' : '-translate-y-1.5', (isScrolled || isMenuOpen) ? 'bg-wood-brown-700' : 'bg-white']"></span>
          <span :class="['block w-5 h-0.5 rounded-full transition-all duration-200 ease-out mt-0.5', isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100', (isScrolled || isMenuOpen) ? 'bg-wood-brown-700' : 'bg-white']"></span>
          <span :class="['block w-5 h-0.5 rounded-full transition-all duration-300 ease-out mt-0.5', isMenuOpen ? '-translate-y-1.5 -rotate-45' : 'translate-y-1.5', (isScrolled || isMenuOpen) ? 'bg-wood-brown-700' : 'bg-white']"></span>
        </button>
      </div>
    </div>

    <!-- Overlay -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      @click="closeMobileMenu"
    ></div>

    <!-- Panel Mobile -->
    <div
      :class="[
        'lg:hidden fixed top-0 right-0 bottom-0 z-40 w-[85%] max-w-sm bg-gradient-to-br from-white via-cream-50 to-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-l border-wood-brown-100',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      ]"
    >
      <!-- Header Panel + tombol Close cadangan -->
      <div class="h-16 flex items-center justify-between px-5 border-b border-wood-brown-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-natural-green-500 to-natural-green-700 flex items-center justify-center shadow-md">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="font-bold text-lg text-wood-brown-800">UMKM Juron</span>
            <span class="text-xs font-medium text-natural-green-600 tracking-wide">Desa Juron Digital</span>
          </div>
        </div>
        <button
          type="button"
          @click="closeMobileMenu"
          class="w-9 h-9 rounded-lg flex items-center justify-center text-wood-brown-500 hover:bg-wood-brown-50 hover:text-wood-brown-700 transition-colors"
          aria-label="Tutup menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="overflow-y-auto h-[calc(100%-4rem)] pb-6">
        <div class="px-5 pt-6 space-y-1">
          <a
            v-for="(item, index) in navItems"
            :key="item.id"
            :href="item.href"
            @click="handleNavClick($event, item.id)"
            :style="{ transitionDelay: isMenuOpen ? `${index * 60 + 100}ms` : '0ms' }"
            :class="[
              'group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 transform',
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0',
              activeSection === item.id
                ? 'bg-gradient-to-r from-natural-green-50 to-natural-green-100/50 text-natural-green-700 shadow-sm border border-natural-green-100'
                : 'text-wood-brown-700 hover:bg-cream-50 hover:text-natural-green-700'
            ]"
          >
            <div :class="[
              'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
              activeSection === item.id
                ? 'bg-gradient-to-br from-natural-green-500 to-natural-green-600 text-white shadow-md'
                : 'bg-wood-brown-50 text-wood-brown-600 group-hover:bg-natural-green-100 group-hover:text-natural-green-600'
            ]">
              <component :is="item.icon" class="w-5 h-5" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-base">{{ item.label }}</div>
              <div :class="['text-xs truncate transition-colors duration-300', activeSection === item.id ? 'text-natural-green-600/80' : 'text-wood-brown-500 group-hover:text-natural-green-600/70']">
                {{ item.description }}
              </div>
            </div>
            <svg class="w-4 h-4 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1" :class="activeSection === item.id ? 'text-natural-green-600' : 'text-wood-brown-300 group-hover:text-natural-green-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div class="px-5 mt-8 pt-6 border-t border-wood-brown-100">
          <a
            href="#kontak"
            @click="handleNavClick($event, 'kontak')"
            class="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-natural-green-600 via-natural-green-700 to-natural-green-800 text-white shadow-xl shadow-natural-green-700/25 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Daftarkan Produkmu</span>
          </a>
        </div>

        <div class="px-5 mt-6">
          <div class="bg-gradient-to-br from-wood-brown-50 to-cream-100 rounded-2xl p-4 border border-wood-brown-100">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-wood-brown-200 flex items-center justify-center">
                <svg class="w-4 h-4 text-wood-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div class="text-xs font-medium text-wood-brown-600">Kontak Admin</div>
                <div class="text-sm font-bold text-wood-brown-800">+62 881-4183-245</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, watch, onMounted, onUnmounted, h } from 'vue'

// ============================================================
//  PENGATURAN POSISI SECTION SAAT DIKLIK DARI NAVBAR
//  Nilai negatif = section dinaikkan (view lebih tinggi)
//  Nilai positif = section diturunkan
//  Sesuaikan angka di bawah kalau masih kurang pas.
// ============================================================
const getSectionGap = () => {
  const vw = window.innerWidth
  if (vw >= 1024) return -24   // desktop : naik 24px
  if (vw >= 640)  return -20   // tablet  : naik 20px
  return -16                   // mobile  : naik 16px
}

export default {
  name: 'Navbar',
  setup() {
    const navRef = ref(null)
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)
    const activeSection = ref('home')

    const navItems = [
      { id: 'home', label: 'Beranda', href: '#home', description: 'Halaman utama', icon: { render() { return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })]) } } },
      { id: 'tentang', label: 'Tentang', href: '#tentang', description: 'Profil Desa Juron', icon: { render() { return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })]) } } },
      { id: 'pelaku-umkm', label: 'Pelaku UMKM', href: '#pelaku-umkm', description: 'Para pengusaha desa', icon: { render() { return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })]) } } },
      { id: 'produk', label: 'Produk', href: '#produk', description: 'Produk unggulan desa', icon: { render() { return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' })]) } } },
      { id: 'kontak', label: 'Daftar', href: '#kontak', description: 'Gabung jadi UMKM', icon: { render() { return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.28a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })]) } } }
    ]

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 30
      const scrollPosition = window.scrollY + 160
      const sections = ['home', 'tentang', 'pelaku-umkm', 'produk', 'kontak']
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = sections[i]
          break
        }
      }
    }

    const toggleMobileMenu = () => { isMenuOpen.value = !isMenuOpen.value }
    const closeMobileMenu = () => { isMenuOpen.value = false }

    watch(isMenuOpen, (open) => {
      document.body.style.overflow = open ? 'hidden' : ''
    })

    // Offset = tinggi <nav> asli + gap dinamis per breakpoint
    const getNavOffset = () => {
      const height = navRef.value ? navRef.value.getBoundingClientRect().height : 0
      return height + getSectionGap()
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return
      const offset = getNavOffset()
      const rect = element.getBoundingClientRect()
      const targetY = Math.max(0, rect.top + window.pageYOffset - offset)
      try { window.scrollTo({ top: targetY, behavior: 'smooth' }) }
      catch (e) { window.scrollTo(0, targetY) }
    }

    const handleNavClick = (event, sectionId) => {
      event.preventDefault()
      const wasMenuOpen = isMenuOpen.value
      closeMobileMenu()
      if (wasMenuOpen) {
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(sectionId)))
      } else {
        scrollToSection(sectionId)
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) closeMobileMenu()
      }, { passive: true })
      window.addEventListener('orientationchange', closeMobileMenu)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = ''
    })

    return {
      navRef, isScrolled, isMenuOpen, activeSection, navItems,
      toggleMobileMenu, closeMobileMenu, handleNavClick
    }
  }
}
</script>