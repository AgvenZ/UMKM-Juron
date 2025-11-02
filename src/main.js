import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/css/tailwind.css'
import './assets/js/animations.js'

createApp(App).use(router).mount('#app')