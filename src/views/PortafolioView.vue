<template>
    <section class="section portfolio">
        <div class="container">
            <!-- Encabezado -->
            <div class="text-center mb-5" data-aos="fade-hero">
                <span class="chip chip-primary">Portafolio</span>
                <h2 class="section-title gradient-text mt-3">Trabajos destacados</h2>
                <p class="section-sub">
                    Selección de proyectos reales: apps, software a medida y seguridad operativa.
                </p>
            </div>

            <!-- Filtros -->
            <div class="filters d-flex flex-wrap gap-2 justify-content-center mb-4" data-aos="fade-up"
                data-aos-delay="50">
                <button v-for="t in ['Todos', ...allTags]" :key="t" class="chip filter"
                    :class="{ active: activeTag === t }" @click="activeTag = t">
                    {{ t }}
                </button>
            </div>

            <!-- Grilla -->
            <div class="row g-4 align-items-stretch">
                <div v-for="p in filtered" :key="p.slug" class="col-12 col-md-6 col-lg-4" data-aos="zoom-in"
                    data-aos-delay="80">
                    <article class="project-card h-100">
                        <div class="thumb-wrap" @click="openModal(p)">
                            <img :src="p.cover" class="thumb" :alt="p.title" loading="lazy" />
                            <div class="thumb-overlay">
                                <span class="btn btn-sm btn-gradient">Ver galería</span>
                            </div>
                            <div class="badges">
                                <span v-for="tag in p.tags" :key="p.slug + tag" class="chip chip-mini">{{ tag }}</span>
                            </div>
                        </div>

                        <div class="body">
                            <h3 class="title">{{ p.title }}</h3>
                            <p class="desc">{{ p.short }}</p>

                            <div class="stack">
                                <span v-for="s in p.stack" :key="p.slug + s" class="chip chip-mini">{{ s }}</span>
                            </div>

                            <div class="mt-3 d-flex gap-2">
                                <button class="btn btn-ghost w-100" @click="openModal(p)">
                                    <i class="bi bi-images"></i> Galería
                                </button>
                                <router-link :to="p.detailRoute || '/contacto'" class="btn btn-gradient w-100">
                                    <i class="bi bi-arrow-right-circle"></i> Detalles
                                </router-link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <!-- Modal Galería -->
            <div class="modal fade" id="portfolioLightbox" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content bg-transparent border-0">
                        <button type="button" class="btn-close btn-close-white ms-auto me-1 mt-1"
                            data-bs-dismiss="modal" aria-label="Close"></button>

                        <div v-if="current" class="lightbox-content">
                            <div id="portfolioCarousel" class="carousel slide" data-bs-ride="false">
                                <div class="carousel-inner rounded-3 shadow">
                                    <div v-for="(img, i) in current.images" :key="img.src" class="carousel-item"
                                        :class="{ active: i === currentIndex }">
                                        <img :src="img.src" class="d-block w-100" :alt="img.alt" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5 class="mb-0">{{ img.caption }}</h5>
                                        </div>
                                    </div>
                                </div>

                                <button class="carousel-control-prev" type="button" data-bs-target="#portfolioCarousel"
                                    data-bs-slide="prev" @click="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Anterior</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#portfolioCarousel"
                                    data-bs-slide="next" @click="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Siguiente</span>
                                </button>
                            </div>

                            <div class="text-center text-light mt-2">
                                {{ current.title }} — {{ current.images[currentIndex]?.caption }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// ====== IMÁGENES DEL PROYECTO "PEÑA BOQUENSE" ======
// Colocá tus capturas reales en: src/assets/projects/pena/
//import p1 from '@/assets/projects/pena/pena-1.webp'
//import p2 from '@/assets/projects/pena/pena-2.webp'
//import p3 from '@/assets/projects/pena/pena-3.webp'
//import p4 from '@/assets/projects/pena/pena-4.webp'
//import p5 from '@/assets/projects/pena/pena-5.webp'

// Portafolio (podés sumar más objetos a este array)
const projects = ref([
    {
        slug: 'pena-boquense',
        title: 'Peña Boquense — Gestión Integral',
        short: 'App web para socios y cuotas, reservas de salones, viajes y movimientos con permisos por rol.',
        cover: 'https://via.placeholder.com/800x450?text=Pe%C3%B1a+Boquense',
        tags: ['WebApp', 'Gestión', 'Deportes'],
        stack: ['Vue 3', 'Bootstrap', 'Ktor', 'MySQL', 'Railway'],
        detailRoute: '/proyectos/pena',
        images: [
            { src: 'https://via.placeholder.com/1200x675?text=Pantalla+1', alt: 'Socios', caption: 'Módulo Socios' },
            { src: 'https://via.placeholder.com/1200x675?text=Pantalla+2', alt: 'Cuotas', caption: 'Gestión de cuotas' }
        ]
    }
])


// Filtros
const activeTag = ref('Todos')
const allTags = computed(() => {
    const set = new Set()
    projects.value.forEach(p => p.tags.forEach(t => set.add(t)))
    return Array.from(set)
})
const filtered = computed(() => {
    if (activeTag.value === 'Todos') return projects.value
    return projects.value.filter(p => p.tags.includes(activeTag.value))
})

// Modal/Galería
const current = ref(null)
const currentIndex = ref(0)

function openModal(project) {
    current.value = project
    currentIndex.value = 0
    const modal = new window.bootstrap.Modal(document.getElementById('portfolioLightbox'))
    modal.show()
}
function next() {
    if (!current.value) return
    currentIndex.value = (currentIndex.value + 1) % current.value.images.length
}
function prev() {
    if (!current.value) return
    currentIndex.value = (currentIndex.value - 1 + current.value.images.length) % current.value.images.length
}
</script>
