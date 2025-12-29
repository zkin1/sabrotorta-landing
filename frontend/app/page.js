import Hero from '@/components/Hero'
import About from '@/components/About'
import Servicios from '@/components/Servicios'
import Clientes from '@/components/Clientes'
import Contacto from '@/components/Contacto'
import Galeria from '@/components/Galeria'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Servicios />
        <Contacto />
        <Clientes />
        <Galeria />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
