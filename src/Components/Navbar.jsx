import React from 'react'
import { BellIcon,ShoppingCartIcon } from 'lucide-react'



function Navbar() {
  return (
    <nav className=' flex justify-between p-5 '>
      <div>
        Logo&Name
      </div>
      <div className=' flex gap-3'>
      
        <BellIcon className='  text-blue-950'/>
        <ShoppingCartIcon className=' text-yellow-950'/>
        <div>
          <p>Proflie</p>
        </div>
        
  
        
      </div>
    </nav>
  )
}

export default Navbar
