import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import TeaInfo from "@/components/tea-info"
import Gallery from "@/components/gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TeaInfo />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
