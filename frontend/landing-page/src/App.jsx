import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Stats from './components/Stats'
import Missions from './components/Missions'
import HowItWorks from './components/HowItWorks'
import SDGs from './components/SDGs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <HowItWorks />
        <Missions />
        <SDGs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App