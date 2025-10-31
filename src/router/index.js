import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/servicios', name: 'servicios', component: () => import('../views/ServicesView.vue') },
    { path: '/nosotros', name: 'nosotros', component: () => import('../views/AboutView.vue') },
    { path: '/contacto', name: 'contacto', component: () => import('../views/ContactView.vue') },
    { path: '/portafolio', name: 'portafolio', component: () => import('../views/PortafolioView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
