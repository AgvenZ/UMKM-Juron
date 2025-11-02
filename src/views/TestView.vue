<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Testing Routing</h1>
      <p class="text-gray-600 mb-6">Current route: {{ $route.path }}</p>
      <div class="space-x-4">
        <router-link to="/login" class="bg-blue-500 text-white px-4 py-2 rounded">Login</router-link>
        <router-link to="/dashboard" class="bg-green-500 text-white px-4 py-2 rounded">Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestView'
}
</script>