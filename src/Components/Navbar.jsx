import React from 'react'
import { SearchIcon,LocationEdit,MenuIcon} from 'lucide-react'

function Navbar() {
  return (

    <nav className='bg-teal-400 h-15  shadow-2xl flex justify-between items-center  p-3  bg-cover'>
    <div className=' font-bold text-blue-600'>
        <h1>Logo</h1>
    </div>
    <div className=' hidden lg:flex lg:flex-col'>
   <div className='lg:flex hidden'>
    <LocationEdit className=' font-normal size-4 mt-1'/>
    <p>Jaora</p>
   </div>
   <p className=' font-normal  ml-5'>457226</p>

    </div>
    <div className=' shadow-2xs  lg:flex border-2 rounded-2xl p-1 hidden  '>
        <input  className=' shadow-2xs outline-none w-[200px] '
        type='Search' placeholder='Search'/>
       <SearchIcon/>
    </div>
    <div className='flex gap-4'>
   <div className='flex'>
     <button className=' outline-none cursor-pointer  hover:text-blue-600 font-bold ' >LogIn</button>
     <p>/</p>
    <button className=' outline-none cursor-pointer  hover:text-blue-600 font-bold '>SignIn</button>
   </div>
     <MenuIcon className=' lg:hidden'/>
    </div>
    <div className='lg:flex items-center gap-2 hidden'>
        <p>Lalit Prajapat</p>
        <img className=' rounded-full size-10' 
        src='data:image/jpeg;base64,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' alt=''/>
    </div>
   

    </nav>
  )
}

export default Navbar
