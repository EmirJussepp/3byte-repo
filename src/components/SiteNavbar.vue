<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-lighter border-bottom border-secondary-subtle">
        <div class="container">
            <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
                <img src="../assets/img/logo3byte.png" alt="3Byte" class="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navMain">
                <ul class="navbar-nav ms-auto align-items-center gap-3">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/servicios">Servicios</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/portafolio">Portafolio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/nosotros">Nosotros</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
                    </li>
                    <li class="nav-item ms-lg-2">
                        <RouterLink class="btn btn-gradient px-3" to="/contacto">Pedir presupuesto</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
/* Barra compacta */
.navbar {
    padding-top: .35rem;
    padding-bottom: .35rem;
    min-height: 64px;
    /* altura fija y cómoda */
    overflow: visible;
    /* permite que el logo sobresalga sin agrandar la barra */
}

/* Mantener centrado vertical el contenido */
.navbar-brand {
    display: flex;
    align-items: center;
    height: 64px;
    /* igual a la navbar */
}

/* LOGO grande sin hacer crecer la barra: sobresale por arriba/abajo */
.logo {
    height: 96px;
    /* grande */
    width: auto;
    object-fit: contain;
    position: absolute;
    top: -16px;
    /* lo subimos para que “coma” espacio por fuera */
    margin-right: 12px;
    filter: drop-shadow(0 0 6px rgba(139, 92, 246, .35));
}

/* Desktop: un toque más grande */
@media (min-width: 992px) {
    .logo {
        height: 112px;
        top: -20px;
    }
}

/* Links */
.nav-link {
    font-weight: 600;
    font-size: 1.05rem;
}

.btn.btn-primary {
    border-radius: 999px;
    padding-inline: 1rem;
}
</style>
