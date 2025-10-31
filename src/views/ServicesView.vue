<template>
    <section id="servicios" class="section services">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-hero">
                <h2 class="section-title gradient-text mt-3 hero-title">Servicios</h2>
                <p class="section-sub">
                    Páginas web completas, soluciones de software y seguridad continua para tu negocio.
                </p>
            </div>

            <div class="row g-4 align-items-stretch">
                <!-- Web & Apps -->
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                    <div class="services-card h-100">
                        <div class="services-icon">
                            <i class="bi bi-window"></i>
                        </div>
                        <h3 class="services-title">Web & Apps</h3>
                        <p class="services-desc">
                            Sitios y aplicaciones modernas con rendimiento real y SEO técnico.
                        </p>
                        <ul class="features">
                            <li><i class="bi bi-check2-circle"></i> Diseño responsive y accesible</li>
                            <li><i class="bi bi-check2-circle"></i> Landing - e-commerce</li>
                            <li><i class="bi bi-check2-circle"></i> Hosting y deploy</li>
                        </ul>
                        <div class="stack">
                            <span class="chip">vue</span>
                            <span class="chip">kotlin</span>
                            <span class="chip">mysql</span>
                        </div>
                        <div class="mt-3 d-flex gap-2">
                            <router-link to="/contacto" class="btn btn-gradient w-100">Pedir presupuesto</router-link>
                        </div>
                    </div>
                </div>

                <!-- Software / Integraciones -->
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="80">
                    <div class="services-card h-100">
                        <div class="services-icon">
                            <i class="bi bi-cpu"></i>
                        </div>
                        <h3 class="services-title">Software / Integraciones</h3>
                        <p class="services-desc">
                            APIs, paneles y automatizaciones que conectan tus sistemas y ahorran tiempo.
                        </p>
                        <ul class="features">
                            <li><i class="bi bi-check2-circle"></i> APIs y paneles administrativos</li>
                            <li><i class="bi bi-check2-circle"></i> Integraciones con pagos, mailing, CRM</li>
                            <li><i class="bi bi-check2-circle"></i> Automatizaciones</li>
                        </ul>
                        <div class="stack">
                            <span class="chip">Ktor</span>
                            <span class="chip">MySQL</span>
                            <span class="chip">Vue</span>
                        </div>
                        <div class="mt-3 d-flex gap-2">
                            <router-link to="/contacto" class="btn btn-gradient w-100">Contame tu caso</router-link>
                        </div>
                    </div>
                </div>

                <!-- Seguridad & Mantenimiento -->
                <div class="col-md-12 col-lg-4" data-aos="fade-up" data-aos-delay="140">
                    <div class="services-card h-100">
                        <div class="ribbon">Continuo</div>
                        <div class="services-icon">
                            <i class="bi bi-shield-lock"></i>
                        </div>
                        <h3 class="services-title">Seguridad/Mantenimiento</h3>
                        <p class="services-desc">
                            tests de seguridad y soporte evolutivo para mantener todo estable.
                        </p>
                        <ul class="features">
                            <li><i class="bi bi-check2-circle"></i> Auditorías y pruebas</li>
                            <li><i class="bi bi-check2-circle"></i> Monitoreo básico + backups</li>
                            <li><i class="bi bi-check2-circle"></i> Respuesta ante incidentes</li>
                        </ul>
                        <div class="stack">
                            <span class="chip">OWASP</span>
                            <span class="chip">Monitor</span>
                            <span class="chip">Backups</span>
                        </div>
                        <div class="mt-3 d-flex gap-2">
                            <router-link to="/contacto" class="btn btn-gradient w-100">Quiero mantenerme
                                seguro</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mini proceso (confianza) -->
            <div class="process mt-5" data-aos="fade-hero">
                <div class="process-item"><span>1</span> Descubrimiento</div>
                <div class="process-sep"></div>
                <div class="process-item"><span>2</span> Diseño & Dev</div>
                <div class="process-sep"></div>
                <div class="process-item"><span>3</span> Deploy</div>
                <div class="process-sep"></div>
                <div class="process-item"><span>4</span> Soporte</div>
            </div>
        </div>
    </section>
</template>

<script setup>
// sin lógica necesaria por ahora
</script>
