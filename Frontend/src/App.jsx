import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'


function App() {
  return (
   <>
   <Routes>

   <Route path='/' element={<Home/>}/>
   <Route path='/courses' element={<Courses/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/contact' element={<Contact/>}/>
   </Routes>

   </>
  )
}

export default App