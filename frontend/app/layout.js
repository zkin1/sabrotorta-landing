import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import './animations.css'

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
  title: 'Sabrotortas - Tortas Decoradas y Catering',
  description: 'Servicios de catering, tortas decoradas y eventos desde 2006.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }} className={`${lato.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
