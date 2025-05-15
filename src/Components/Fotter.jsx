import { Link } from 'react-router-dom'
import React from 'react'

function Fotter() {
  return (
    <div>
    <footer className=' flex bg-black text-white h-15 justify-between lg:hidden md:hidden bg-fixed p-5' >
       <Link to={'/'}>
         <button className=' cursor-pointer font-bold shadow-2xl text-amber-300  
          '>Home</button>
       </Link>
        <Link to={'./categories'}><button className=' cursor-pointer font-bold shadow-2xl text-amber-300  
          '>Catogeries</button></Link>
        <button className=' cursor-pointer font-bold shadow-2xl text-amber-300  
          '>Cart</button>
    </footer>
      
    </div>
  )
}

export default Fotter
