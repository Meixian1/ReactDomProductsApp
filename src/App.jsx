import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import AboutUs from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <MyNavbar />
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
      
    </>
  )
}

export default App
