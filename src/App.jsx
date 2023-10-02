import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Footer />
      <AboutUs />
      <Home />
      <Products />

    </div>
      
    </>
  )
}

export default App
