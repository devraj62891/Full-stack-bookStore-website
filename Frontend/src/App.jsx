import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'

import { Routes,Route, Navigate } from 'react-router-dom'


import Contact from './components/Contact'
import AboutPage from './components/AboutPage'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
   <>
   <Routes>

   <Route path='/' element={<Home/>}/>
   <Route path='/course' element={authUser?<Courses/>:<Navigate to="/Signup"/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/about' element={<AboutPage/>}/>
   <Route path='/bookStore' element={<Introduction/>}/>

   
   </Routes>
   <Toaster />

   </>
  )
}

export default App