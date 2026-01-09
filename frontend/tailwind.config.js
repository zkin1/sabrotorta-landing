/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    pink: '#E91E63', // Primary brand color
                    lightPink: '#F8BBD0', // Soft accent
                    blue: '#29B6F6', // Secondary color (flowers/decor)
                    cream: '#FFF9F0', // Warm background
                    dark: '#2D2D2D', // Text color
                }
            },
            fontFamily: {
                sans: ['var(--font-lato)', 'sans-serif'],
                script: ['var(--font-dancing)', 'cursive'],
            },
            backgroundImage: {
                'pink-gradient': 'linear-gradient(to right, #E91E63, #F48FB1)',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            }
        },
    },
    plugins: [],
}
