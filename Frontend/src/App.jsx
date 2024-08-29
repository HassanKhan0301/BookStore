import React from 'react'
import Home from './home/Home'

import {Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Register from './components/Register'
import Phones from './components/Phones'
import About from './components/About'









function App() {
  return (
    <div >
{/* <Home/>
<Course/> */}
<div className="dark:bg-slate-900 dark:text-white">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<Courses />}/>

  <Route path='/register' element={<Register/>}/>
  <Route path='/phone' element={<Phones/>}/>
  <Route path='/about' element={<About/>}/>





  
</Routes>
</div>
  </div>
  )
}

export default App