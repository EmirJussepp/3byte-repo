<template>
    <!-- HERO -->
    <section class="hero d-flex align-items-center text-center position-relative overflow-hidden" ref="heroRef">
        <div class="container position-relative z-2">
            <!-- Wrapper AOS (no poner data-aos en .hero-tilt para evitar choques de transform) -->
            <div data-aos="fade-up" data-aos-delay="0" data-aos-anchor-placement="top-bottom">
                <div class="hero-tilt" ref="tiltRef">
                    <div data-aos="fade-hero">
                        <h1 class="hero-title">Innovamos en <span>software</span> y <span>seguridad</span></h1>
                    </div>

                </div>
            </div>

            <p class="lead hero-sub text-secondary mb-4" data-aos="fade-up fade-hero" data-aos-delay="100">
                Webs, APIs y automatizaciones de alto rendimiento. <br />
                Protección y performance desde el diseño.
            </p>

            <div class="d-flex gap-3 justify-content-center hero-cta" data-aos="fade-up" data-aos-delay="200">
                <div class="d-flex gap-3 justify-content-center hero-cta" data-aos="fade-up" data-aos-delay="200">
                    <router-link to="/contacto" class="btn btn-gradient btn-lg px-4 magnet">🚀 Hablemos</router-link>
                    <router-link to="/servicios" class="btn btn-ghost btn-lg px-4 magnet">Ver servicios</router-link>
                    <router-link to="/portafolio" class="btn btn-ghost btn-lg px-4 magnet">Ver portafolio</router-link>
                </div>


            </div>
        </div>

        <!-- Luces dinámicas (parallax) -->
        <div class="hero-glow" aria-hidden="true"></div>
        <div class="hero-glow-2" aria-hidden="true"></div>

        <!-- Flecha hacia abajo -->
        <a href="#quehacemos" class="scroll-down" aria-label="Ir a Qué hacemos">
            <i class="bi bi-chevron-down"></i>
        </a>

        <!-- Separador -->
        <div class="section-divider"></div>
    </section>

    <!-- QUÉ HACEMOS -->
    <section id="quehacemos" class="section section-what">
        <div class="container">
            <h2 class="section-title gradient-text text-center" data-aos="fade-up">¿Qué hacemos?</h2>

            <div class="row g-5 justify-content-center align-items-stretch">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                    <div class="card card-hover h-100 text-center p-4">
                        <div class="icon-box"><i class="bi bi-window"></i></div>
                        <h3 class="h5 text-light fw-semibold mb-2">Desarrollo Web</h3>
                        <p class="text-secondary">SPAs con Vue, APIs rápidas y despliegue seguro en la nube.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="card card-hover h-100 text-center p-4">
                        <div class="icon-box"><i class="bi bi-shield-lock"></i></div>
                        <h3 class="h5 text-light fw-semibold mb-2">Ciberseguridad</h3>
                        <p class="text-secondary">Hardening, pruebas de intrusión y monitoreo para proteger tu negocio.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="card card-hover h-100 text-center p-4">
                        <div class="icon-box"><i class="bi bi-cpu"></i></div>
                        <h3 class="h5 text-light fw-semibold mb-2">Mantenimiento</h3>
                        <p class="text-secondary">Bots, integraciones y paneles para optimizar procesos.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- POR QUÉ ELEGIRNOS -->
    <section class="section">
        <div class="container">
            <h2 class="section-title gradient-text text-center" data-aos="fade-up">¿Por qué elegirnos?</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-shield-check"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Software + Seguridad</h3>
                        <p class="text-secondary mb-0">Buenas prácticas y protección de datos desde el día 0.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="80">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-speedometer2"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Performance real</h3>
                        <p class="text-secondary mb-0">Apps rápidas, estables y listas para escalar.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="140">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-people"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Acompañamiento</h3>
                        <p class="text-secondary mb-0">Comunicación directa y soporte cercano.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-cloud-check"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Deploy en la nube</h3>
                        <p class="text-secondary mb-0">Infra moderna (Vercel / Railway / Docker).</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- TECNOLOGÍAS -->
    <section class="section">
        <div class="container text-center">
            <h2 class="section-title gradient-text" data-aos="fade-up">Tecnologías</h2>
            <div class="d-flex flex-wrap gap-2 justify-content-center" data-aos="zoom-in">
                <span class="badge rounded-pill text-bg-dark border">Vue</span>
                <span class="badge rounded-pill text-bg-dark border">Bootstrap</span>
                <span class="badge rounded-pill text-bg-dark border">Vue / Ktor</span>
                <span class="badge rounded-pill text-bg-dark border">MySQL / Docker</span>
                <span class="badge rounded-pill text-bg-dark border">Railway</span>
            </div>
        </div>
    </section>

    <!-- CTA FINAL -->
    <section class="section text-center">
        <div class="container" data-aos="fade-up">
            <h3 class="h2 text-light fw-bold mb-3">¿Listo para impulsar tu proyecto?</h3>
            <p class="text-secondary mb-4">Contanos tu idea y armamos una propuesta en 24–48 hs.</p>
            <router-link to="/contacto" class="btn btn-gradient btn-lg px-4">Solicitar presupuesto</router-link>
        </div>
    </section>
    <!-- PORTAFOLIO PREVIEW -->
    <section class="section text-center bg-dark-lighter">
        <div class="container" data-aos="fade-up">
            <h2 class="section-title gradient-text mb-3">Últimos proyectos</h2>
            <p class="text-secondary mb-4">Descubrí cómo ayudamos a otras organizaciones a crecer digitalmente.</p>
            <router-link to="/portafolio" class="btn btn-gradient btn-lg px-4">Ver portafolio completo</router-link>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const heroRef = ref(null)
const tiltRef = ref(null)

onMounted(() => {
    const hero = heroRef.value
    const tilt = tiltRef.value
    const magnets = Array.from(document.querySelectorAll('.magnet'))

    // respetar accesibilidad
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hero || !tilt || reduceMotion) return

    const rect = () => hero.getBoundingClientRect()

    function onMove(e) {
        const r = rect()
        const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2) // -1..1
        const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2) // -1..1

        // Tilt (título)
        const maxTilt = 6 // grados
        tilt.style.transform = `perspective(1000px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg) translateZ(0)`

        // Parallax luces
        const px = x * 16, py = y * 16
        hero.style.setProperty('--parallax-x', `${-px}px`)
        hero.style.setProperty('--parallax-y', `${-py}px`)

        // Botones magnéticos
        magnets.forEach(btn => {
            const b = btn.getBoundingClientRect()
            const bx = e.clientX - (b.left + b.width / 2)
            const by = e.clientY - (b.top + b.height / 2)
            const dist = Math.hypot(bx, by)
            const damp = Math.max(0, 1 - dist / 240)
            btn.style.transform = `translate(${bx * 0.06 * damp}px, ${by * 0.06 * damp}px)`
        })
    }

    function onLeave() {
        tilt.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
        magnets.forEach(btn => (btn.style.transform = 'translate(0,0)'))
        hero.style.setProperty('--parallax-x', '0px')
        hero.style.setProperty('--parallax-y', '0px')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseleave', onLeave)
    })
})
</script>
