import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Hero from './components/sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
