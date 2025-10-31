<template>
    <section class="section">
        <div class="container">
            <h1 class="section-title text-center hero-title" data-aos="fade-up">Nosotros</h1>

            <!-- Intro -->
            <div class="row justify-content-center mb-5">
                <div class="col-lg-9">
                    <p class="lead text-secondary text-center" data-aos="fade-up" data-aos-delay="80">
                        Somos 3Byte: construimos soluciones web con foco en seguridad y performance.
                        Trabajamos mano a mano con pymes y startups para llevar ideas a producción, rápido y bien.
                    </p>
                </div>
            </div>

            <!-- Valores -->
            <div class="row g-4 mb-5">
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-shield-check"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Calidad & Seguridad</h3>
                        <p class="text-secondary mb-0">Buenas prácticas, pruebas y protección desde el día 0.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="80">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-lightning"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Velocidad</h3>
                        <p class="text-secondary mb-0">Iteramos rápido sin perder prolijidad ni control.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="160">
                    <div class="card h-100 p-4 text-center">
                        <div class="icon-box"><i class="bi bi-people"></i></div>
                        <h3 class="h6 text-light fw-semibold mb-2">Acompañamiento</h3>
                        <p class="text-secondary mb-0">Comunicación directa y soporte real durante todo el proyecto.</p>
                    </div>
                </div>
            </div>

            <!-- Equipo -->
            <h2 class="h4 text-light fw-bold text-center mb-4" data-aos="fade-up">Nuestro equipo</h2>
            <div class="row g-4 mb-5 justify-content-center">
                <div class="col-sm-6 col-lg-4" data-aos="fade-up">
                    <div class="card h-100 text-center p-4">
                        <img class="rounded-circle mx-auto mb-3" src="/src/assets/img/perfil.jpg" alt="Foto" width="96"
                            height="96">
                        <h3 class="h6 text-light fw-semibold mb-1">Emir</h3>
                        <p class="text-secondary mb-2">Frontend & Producto</p>
                        <div class="small text-muted-3byte">Vue · UX · Bootstrap</div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="80">
                    <div class="card h-100 text-center p-4">
                        <img class="rounded-circle mx-auto mb-3" src="/src/assets/img/perfil.jpg" alt="Foto" width="96"
                            height="96">
                        <h3 class="h6 text-light fw-semibold mb-1">Lauti</h3>
                        <p class="text-secondary mb-2">Backend & DevOps</p>
                        <div class="small text-muted-3byte">Ktor · Docker · Railway</div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="160">
                    <div class="card h-100 text-center p-4">
                        <img class="rounded-circle mx-auto mb-3" src="/src/assets/img/perfil.jpg" alt="Foto" width="96"
                            height="96">
                        <h3 class="h6 text-light fw-semibold mb-1">Gero</h3>
                        <p class="text-secondary mb-2">Seguridad & Automatización</p>
                        <div class="small text-muted-3byte">Pentest · Hardening · Bots</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// vacío
</script>

<style scoped>
.timeline .list-group-item {
    border-color: rgba(139, 92, 246, .18);
}
</style>
