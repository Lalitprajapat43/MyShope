import React from 'react'
import { BellIcon,ShoppingCartIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className=' flex justify-between p-5 '>
      <div>
        <Link to={'/'}><h1>Logo&Name</h1></Link>
      </div>
      <div className=' flex gap-3'>
      
       <Link to={'/notify'}> <BellIcon className='  text-blue-950'/></Link>
       <Link to={'/cart'}> <ShoppingCartIcon className=' text-yellow-950'/></Link>
        <div>
          <p>Proflie</p>
        </div>
        
  
        
      </div>
    </nav>
  )
}

export default Navbar
