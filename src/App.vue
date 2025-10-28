<template>
  <div class="min-h-screen bg-gray-100">
    <Components />
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Components from './components/Components.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Components,
    Home
  }
}
</script>