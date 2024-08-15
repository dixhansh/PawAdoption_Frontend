import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart'
import { ApplicationForm } from './pages/SubmitApplication/ApplicationForm'
import { Home } from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/applicationform" element={<ApplicationForm />} />
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App
