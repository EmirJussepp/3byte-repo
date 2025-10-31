import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// ✅ Tus estilos globales (variables + bootstrap scss)
import './assets/styles.scss'

// Opcional: JS de Bootstrap (colapsables, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')

// Inicialización AOS (respetando reduced motion)
AOS.init({
  duration: 700,
  easing: 'ease-out-quart',
  offset: 120,
  once: true,
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

// Refrescar AOS en SPA después de cada navegación
router.afterEach(() => {
  nextTick(() => AOS.refreshHard())
})
