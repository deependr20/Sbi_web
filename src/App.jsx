import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
         <Header/>
         <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
          <Footer />
    </div>
  )
}

export default App