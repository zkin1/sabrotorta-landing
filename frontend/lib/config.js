// API Configuration
// Contact form endpoint (Next.js API Route)
export const API_ENDPOINTS = {
    contact: '/api/sendEmail',
}

// Centralized contact information — single source of truth
export const CONTACT_INFO = {
    phone: '+56977794373',
    phoneFormatted: '+569 7779 4373',
    email: 'ventas@sabrotortas.cl',
    whatsapp: '56977794373',
    whatsappMessage: 'Hola! Me gustaría solicitar información sobre sus servicios.',
    get whatsappUrl() {
        return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappMessage)}`
    },
    location: {
        city: 'Santiago',
        commune: 'Huechuraba',
        region: 'Chile',
        full: 'Huechuraba, Santiago',
        coverage: 'Cobertura en toda la RM',
    },
    instagram: 'https://instagram.com/_u/sabrotortas.cl/',
    schedule: {
        weekdays: '9:00 - 19:00',
        saturday: '10:00 - 14:00',
        whatsapp: '24/7',
    },
}
