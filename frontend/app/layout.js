import './animations.css'

export const metadata = {
  title: 'Sabrotortas - Tortas Decoradas y Catering',
  description: 'Servicios de catering, tortas decoradas y eventos desde 2006.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
