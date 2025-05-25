import React from 'react'
import { useDispatch } from 'react-redux'
import { flex } from '../SlicerRoom/MainSlicer'
import { Link } from 'react-router-dom';

function AddressForm() {
const dispatch =useDispatch();

    const handlesunmit=(item)=>{
        dispatch(flex(item))
    }


  return (
    <div className=' mt-16'>
    <form onSubmit={()=>handlesunmit(item)} 
    className=' flex  flex-col justify-around p-2 gap-3 h-[850px] bg-gray-500 items-center '>
      
      <div className='flex flex-col  gap-3 h-fit p-2  w-[90%] items-center justify-center  border-amber-50 border-1 '>
          <h1 className=' font-bold mt-5 shadow-2xs   '>Add Address </h1>
       <label className=' font-bold '>Name: 
          <input type='text' className=' border-1  outline-none ml-2 rounded-[5px] ' />
       </label>
        <label className=' font-bold '>Address: 
          <input type='text' className=' border-1  outline-none ml-2 rounded-[5px] ' />
       </label>
        <label className=' font-bold  max-w-full'>ZipCode: 
          <input type='number' className=' border-1  outline-none ml-2 rounded-[5px] ' />
       </label>
        <label className=' font-bold '>Mobile: 
          <input type='number' className=' border-1  outline-none ml-2 rounded-[5px] ' />

       </label>
    <Link to={'/address'}>
               <button className='bg-blue-500 w-full text-[18px] font-bold rounded-2xl '>Submit</button>

    </Link>
      </div>
    </form>
      
    </div>
  )
}

export default AddressForm
