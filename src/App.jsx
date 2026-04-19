import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Services2 from './components/sections/Services2'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Services2 />
      </main>
      <Footer />
    </>
  )
}

export default App
