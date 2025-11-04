<template>
    <section class="section contacto">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-hero">
                <h2 class="section-title gradient-text mt-3 hero-title">Hablemos de tu proyecto</h2>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-8" data-aos="zoom-in" data-aos-delay="100">
                    <div class="contact-card">
                        <form @submit.prevent="sendWhatsApp" novalidate>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model.trim="form.nombre" required type="text" class="form-control"
                                            id="nombre" placeholder="Tu nombre" />
                                        <label for="nombre"><i class="bi bi-person"></i> Nombre</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model.trim="form.email" type="email" class="form-control" id="email"
                                            placeholder="tu@correo.com" />
                                        <label for="email"><i class="bi bi-envelope"></i> Email</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select v-model="form.servicio" class="form-select" id="servicio">
                                            <option value="Desarrollo Web">Desarrollo Web</option>
                                            <option value="Aplicaciones">Aplicaciones</option>
                                            <option value="Ciberseguridad">Seguridad</option>
                                            <option value="Mantenimiento">Mantenimiento</option>
                                        </select>
                                        <label for="servicio"><i class="bi bi-briefcase"></i> Servicio</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea v-model.trim="form.mensaje" rows="4" class="form-control" id="mensaje"
                                            placeholder="Contanos brevemente tu idea" style="height: 140px"></textarea>
                                        <label for="mensaje"><i class="bi bi-chat-text"></i> Mensaje</label>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-gradient px-5 py-2">
                                    <i class="bi bi-whatsapp"></i> Enviar por WhatsApp
                                </button>
                                <p class="small text-secondary mt-3">
                                    Al presionar “Enviar por WhatsApp”, se abrirá una conversación con un mensaje
                                    prellenado.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Info secundaria -->
            <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
                <p class="text-secondary mb-1">¿Preferís otro canal?</p>
                <a :href="mailtoHref" class="text-light text-decoration-none fw-semibold">
                    contacto@3byte.dev <i class="bi bi-arrow-up-right"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, computed } from 'vue'

const PHONE = import.meta.env.VITE_WAPP_PHONE || '5493510000000'

const form = reactive({
    nombre: '',
    email: '',
    servicio: 'Desarrollo Web',
    presupuesto: 'A definir',
    mensaje: ''
})

const mailtoHref = computed(() => {
    const asunto = `Consulta ${form.servicio} - ${form.nombre || '3Byte'}`
    const cuerpo = [
        `Hola 3Byte, soy ${form.nombre || '(sin nombre)'} 👋`,
        '',
        `Servicio: ${form.servicio}`,
        `Presupuesto: ${form.presupuesto}`,
        form.email ? `Email: ${form.email}` : null,
        '',
        'Mensaje:',
        `${form.mensaje || '(sin mensaje)'}`
    ].filter(Boolean).join('%0D%0A')
    return `mailto:contacto@3byte.dev?subject=${encodeURIComponent(asunto)}&body=${cuerpo}`
})

function sendWhatsApp() {
    if (!form.nombre) return alert('Por favor, escribí tu nombre 🙌')
    if (!form.mensaje) return alert('Contanos brevemente tu idea ✍️')

    const text = [
        `Hola 3Byte, soy *${form.nombre}* 👋`,
        '',
        `*Servicio:* ${form.servicio}`,
        `*Presupuesto:* ${form.presupuesto}`,
        form.email ? `*Email:* ${form.email}` : null,
        '',
        `*Mensaje:*`,
        form.mensaje
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
}
</script>

<style scoped>
.contacto {
    position: relative;
    z-index: 1;
}

.contact-card {
    border-radius: 16px;
    background: rgba(24, 22, 33, 0.8);
    border: 1px solid rgba(139, 92, 246, 0.18);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.contact-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(124, 58, 237, 0.22);
}

/* Floating labels */
.form-floating label {
    color: #bbb;
    transition: all 0.25s ease;
}

.form-control,
.form-select {
    background-color: rgba(20, 18, 26, 0.7);
    color: #fff;
    border: 1px solid rgba(139, 92, 246, 0.25);
    border-radius: 12px;
}

.form-control:focus,
.form-select:focus {
    border-color: rgba(139, 92, 246, 0.55);
    box-shadow: 0 0 0 0.25rem rgba(124, 58, 237, 0.15);
    background-color: rgba(30, 28, 36, 0.8);
    color: #fff;
}

.form-floating>label>i {
    margin-right: 6px;
    color: #a78bfa;
}

/* WhatsApp button */
.btn-gradient i {
    font-size: 1.1rem;
    margin-right: 6px;
}

/* Texto secundario */
.section-sub {
    color: #a3a3b3;
    max-width: 700px;
    margin: 0 auto;
}

/* Chip estilo “etiqueta” */
.chip {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 999px;
    color: #c4b5fd;
    border: 1px solid rgba(196, 181, 253, 0.25);
    background: rgba(124, 58, 237, 0.08);
}
</style>
