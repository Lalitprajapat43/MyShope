import React from 'react'

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'



import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'


import Home from './Pages/Home'
import Categories from './Pages/Categories'

export default function App() {
  return (
    <div>
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='./categories' element={<Categories/>} />
     </Routes>
     <Fotter/>
   </BrowserRouter>
    </div>
  )
}
