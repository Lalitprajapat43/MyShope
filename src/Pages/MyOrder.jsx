import React from 'react'
import { DeleteIcon } from 'lucide-react'

export default function MyOrder() {
  return (

       <section>
       <h1 className=' flex font-bold justify-center'>My Orders</h1>
        <div className=' mt-2'>
            <div className='flex justify-between p-1  border-2 items-center '>
        
            <img className=' w-[80px]  border-2  h-[90px]'
             src=' ' alt='' />
        
        <div className=' text-black gap-0 font-extralight' >
            <h1 className=' font-bold'>Product Name </h1>
            <p>Short disc</p>
            <p>400</p> {/*discount Price*/}
         
        </div>
      <div>
        <p className=' text-green-700'>Order <br></br>Succesfully</p>
      </div>
      </div>
        </div>
    </section>

  )
}
