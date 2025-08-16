import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '@fontsource/inter'; // Defaults to weight 400
import QRRegister from './components/QRRegister'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <VisionMission/>
    <Gallery/>
    <QRRegister/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
