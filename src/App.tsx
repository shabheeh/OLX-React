import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Card from './components/Card'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {

  return (
    <>
      <Navbar />
      <Navbar1 />
      <Login />
      <Footer />
    </>
  )
}

export default App
