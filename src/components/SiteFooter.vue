<template>
    <footer class="border-top border-secondary-subtle py-4 mt-5">
        <div class="container d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center">
            <div class="text-secondary">© {{ new Date().getFullYear() }} 3Byte. Todos los derechos reservados.</div>
            <ul class="nav gap-3">
                <li class="nav-item"><router-link to="/privacidad"
                        class="nav-link px-0 text-secondary">Privacidad</router-link></li>
                <li class="nav-item"><router-link to="/terminos"
                        class="nav-link px-0 text-secondary">Términos</router-link></li>
            </ul>
        </div>
    </footer>
</template>
