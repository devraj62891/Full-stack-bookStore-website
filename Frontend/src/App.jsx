import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'

import { Routes,Route } from 'react-router-dom'


import Contact from './components/Contact'
import AboutPage from './components/AboutPage'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
   <>
   <Routes>

   <Route path='/' element={<Home/>}/>
   <Route path='/courses' element={<Courses/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/about' element={<AboutPage/>}/>
   
   </Routes>
   <Toaster />

   </>
  )
}

export default App