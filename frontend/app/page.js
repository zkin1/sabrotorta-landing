import Hero from '@/components/Hero'
import About from '@/components/About'
import Servicios from '@/components/Servicios'
import Clientes from '@/components/Clientes'
import Contacto from '@/components/Contacto'
import Galeria from '@/components/Galeria'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Servicios />
        <Contacto />
        <Galeria />
        <Clientes />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
