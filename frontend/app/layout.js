import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'
import './animations.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
})

export const metadata = {
  title: 'Sabrotortas - Tortas Decoradas y Catering',
  description: 'Servicios de catering, tortas decoradas y eventos desde 2006.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }} className={`${inter.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
