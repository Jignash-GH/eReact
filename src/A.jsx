import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import App from './App.jsx'

import './App.css'

const A = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/items" element={<App/>}></Route>
      
        </Routes>
    </>
  )
}

export default A