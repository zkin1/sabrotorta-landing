// API Configuration
// Backend API base URL - adjust based on environment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// API Endpoints
export const API_ENDPOINTS = {
    // Contact form endpoint
    contact: `${API_BASE_URL}/api/contacto`,

    // Add other endpoints as needed
    // gallery: `${API_BASE_URL}/api/galeria`,
    // products: `${API_BASE_URL}/api/productos`,
}

// Export base URL for direct use if needed
export { API_BASE_URL }
