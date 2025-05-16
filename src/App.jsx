import React from 'react'


import { BrowserRouter,Routes,Route, } from 'react-router-dom'



import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'


import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Cart from './Pages/Cart'
import MyOrder from './Pages/MyOrder'
import Notify from './Pages/Notify'

export default function App() {
  return (
    <div>
   <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/cart' element={<Cart/>}/>
     <Route path='/myorder' element={<MyOrder/>}/>
     <Route path='/notify' element={<Notify/>}/>
     </Routes>
     <Fotter/>
   </BrowserRouter>
    </div>
  )
}
