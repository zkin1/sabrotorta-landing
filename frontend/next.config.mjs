/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimización de compilación
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Optimización de imágenes
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
    },

    // Compresión
    compress: true,

    // Headers de caché
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/:path*.webp',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },

    // Experimental features
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;
