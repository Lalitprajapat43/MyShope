import React from 'react'
import { Link } from 'react-router-dom'


function SingUp() {
    const handlesubmit = () => {

    }
    return (
        <div className='mt-16 flex items-center justify-center h-205   bg-gray-500'>
            <div className='  flex flex-col items-center gap-3 shadow-2xl h-[100%] p-2  w-[100%] bg-gray-300 py-3'
                onSubmit={handlesubmit}
            >
                <h1 className=' font-bold  text-2xl'>SingUp</h1>
                <label htmlFor='UserName ' className='flex flex-col w-[90%]'>
                    Name:  <input type='Username' id='UserName' placeholder='Name..' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>
                <label htmlFor='Number ' className='flex flex-col w-[90%]'>
                    Mobile:  <input type='Number' id='Number' placeholder='Mobile Number' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>
                <label htmlFor='Gmail ' className='flex flex-col w-[90%]'>
                    Gmail:  <input type='Gmail' id='Gmail' placeholder='Gmail' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>

                <label htmlFor='Password' className='flex flex-col w-[90%]'>
                    Password:  <input type='Password' id='Password' placeholder='Password' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>
                <label htmlFor='Password' className='flex flex-col w-[90%]'>
                    Confirm Password:  <input type='Password' id='Password' placeholder='Password' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>
<Link to={'/profile'}>
                    <button className='bg-blue-500    p-4 text-xl rounded-2xl py-1 font-bold mt-3'>SignUp</button>

</Link>                <p >I have Already Acount.? <Link to={'/login'} className='text-blue-500 font-bold'>LogIn</Link></p>
            </div>
        </div>
    )
}

export default SingUp
