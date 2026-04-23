import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Team from './components/sections/Team'
import Testimonial from './components/sections/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Contact />
        <Team />
      </main>
      <Footer />
    </>
  )
}

export default App
