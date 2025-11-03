<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-floating">
        <div class="container navbar-shell">
            <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
                <img src="../assets/img/logochico.png" alt="3Byte" class="logo">
                <span class="brand-text d-none d-sm-inline">
                    3byte.tech
                </span>
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
                        <RouterLink class="btn btn-gradient px-3" to="/contacto">
                            Pedir presupuesto
                        </RouterLink>
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
/* NAVBAR FLOTANTE */
.navbar-floating {
    position: sticky;
    top: 1rem;
    z-index: 1030;
    padding-top: 0;
    padding-bottom: 0;
    background: transparent;
    /* el fondo lo da la cápsula interna */
    border: 0;
}

/* Cápsula glass */
.navbar-shell {
    position: relative;
    max-width: 1120px;
    margin-inline: auto;
    padding-inline: 1.25rem;
    padding-block: 0.35rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.92);
    /* slate oscuro con opacidad */
    border: 1px solid rgba(148, 163, 184, 0.45);
    box-shadow:
        0 18px 45px rgba(15, 23, 42, 0.85),
        0 0 24px rgba(129, 140, 248, 0.45);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    overflow: visible;
}

.navbar {
    min-height: 64px;
}

/* Marca */
.navbar-brand {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0;
}

/* Logo original, limpio, con un glow leve */
.logo {
    height: 44px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.55));
    transition:
        transform 200ms ease-out,
        filter 200ms ease-out;
}

/* Texto de marca al lado del logo */
.brand-text {
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    background: linear-gradient(90deg, #a78bfa, #60a5fa);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(129, 140, 248, 0.55);
    transition:
        opacity 200ms ease-out,
        text-shadow 200ms ease-out,
        transform 200ms ease-out;
}

/* Microinteracción en hover: todo respira un poco */
.navbar-brand:hover .logo {
    transform: translateY(-1px) scale(1.03);
    filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.9));
}

.navbar-brand:hover .brand-text {
    opacity: 0.95;
    text-shadow: 0 0 14px rgba(129, 140, 248, 0.9);
    transform: translateY(-1px);
}

/* Links */
.nav-link {
    font-weight: 600;
    font-size: 0.98rem;
    letter-spacing: 0.01em;
}

/* Botón CTA */
.btn.btn-gradient {
    border-radius: 999px;
    padding-inline: 1.1rem;
    padding-block: 0.45rem;
    font-weight: 600;
    font-size: 0.95rem;
}

/* Toggler dentro de la cápsula */
.navbar-toggler {
    border-radius: 999px;
    border-color: rgba(148, 163, 184, 0.5);
    padding: 0.25rem 0.6rem;
}

/* Mobile */
@media (max-width: 991.98px) {
    .navbar-shell {
        max-width: 100%;
        margin-inline: 0.5rem;
        padding-inline: 0.9rem;
    }

    .navbar-brand {
        height: 48px;
    }

    .logo {
        height: 38px;
    }

    .navbar-nav {
        margin-top: 0.75rem;
    }
}
</style>
