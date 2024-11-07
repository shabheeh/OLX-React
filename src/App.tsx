import { useState } from 'react'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import AdForm from './pages/AdForm/AdForm';


function App() {

  return (
    <div>
      <ToastContainer theme='dark' />
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/sell' element={ <AdForm />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
