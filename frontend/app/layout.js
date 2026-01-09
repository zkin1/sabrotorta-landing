import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import './animations.css'
import JsonLd from '@/components/JsonLd'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
})

export const metadata = {
  metadataBase: new URL('https://sabrotortas.cl'),
  title: {
    default: 'Sabrotortas - Tortas Decoradas, Catering y Eventos',
    template: '%s | Sabrotortas'
  },
  description: 'Servicios de catering profesional, tortas decoradas personalizadas y organización de eventos en Santiago. Más de 18 años de experiencia. Resolución Sanitaria N° 12343/2006. Cotización en 24hrs.',
  keywords: ['tortas decoradas', 'catering', 'eventos', 'fiestas empresas', 'matrimonios', 'cumpleaños', 'pasteleria', 'huechuraba', 'santiago'],
  authors: [{ name: 'Sabrotortas' }],
  creator: 'Sabrotortas',
  publisher: 'Sabrotortas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Sabrotortas - Tortas Decoradas y Catering',
    description: 'Expertos en repostería fina y catering para todo tipo de eventos. Calidad, diseño y sabor desde 2006.',
    url: 'https://sabrotortas.cl',
    siteName: 'Sabrotortas',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Sabrotortas Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabrotortas - Tortas Decoradas y Catering',
    description: 'Expertos en repostería y catering para todo tipo de eventos.',
    images: ['logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.jpg', sizes: 'any' },
    ],
    shortcut: '/logo.jpg',
    apple: [
      { url: '/logo.jpg', type: 'image/jpeg' }
    ],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }} className={`${lato.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
