import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import AddressForm from './Components/AddressForm'
import Login from './Components/Login'
import SingUp from './Components/SingUp'
import Profile from './Components/Profile'

// Pages
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Cart from './Pages/Cart'
import MyOrder from './Pages/MyOrder'
import Notify from './Pages/Notify'
import AllProducts from './Pages/AllProducts'
import ProductFullsCart from './Pages/ProductFullsCart'
import Address from './Pages/Address'


export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path='/notify' element={<Notify />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/productfullscart' element={<ProductFullsCart/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/addaddress' element={<AddressForm/>}/>
          <Route path='/signup' element={<SingUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  )
}
