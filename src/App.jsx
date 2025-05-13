import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import Home from './Pages/Home'

export default function App() {
  return (
    <div>
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
     </Routes>
   </BrowserRouter>
    </div>
  )
}
