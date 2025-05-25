import React from 'react'
import { BellIcon,ShoppingCartIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


function Navbar() {





  return (
    <nav className=' flex justify-between p-5    fixed left-0  top-0 right-0 bg-amber-200 '>
      <div >
      
        <Link to={'/'}><h1>Logo&Name</h1></Link>
      </div>
      <div className=' flex gap-3'>
      
       <Link to={'/notify'}> <BellIcon className='  text-blue-950'/></Link>
       <Link to={'/cart'}> <ShoppingCartIcon className=' text-yellow-950'/></Link>
        <div>
         <Link to={'/signup'}> <p>Proflie</p></Link>
        </div>
        
  
        
      </div>
      
    </nav>
  )
}

export default Navbar
