import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='mt-16 flex items-center justify-center h-205    bg-gray-300'>
            <div className='  flex flex-col items-center gap-3  w-[80%] bg-transparent  shadow-2xl p-7'>
                <h1 className=' font-bold  text-2xl'>LogIn</h1>
                <label htmlFor='UserName ' className='flex flex-col w-full'>
                    UserName:  <input type='Username' id='UserName' placeholder='Username/Gmail/Mobile' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>
                <label htmlFor='Password' className='flex flex-col w-full'>
                    Password:  <input type='Password' id='Password' placeholder='Password' className=' outline-none shadow-2xl p-3 bg-gray-200' />

                </label>
                <button className='bg-blue-500  py-0  p-4 text-xl rounded-2xl font-bold mt-3'>LogIn</button>
                <h2 className=' text-xl font-bold text-blue-600'><Link to={'/'}>Forgate Password</Link></h2>
                <p>Creat New Account.? <Link to={'/signup'} className='text-blue-500 text-xl font-bold'>SingUp</Link></p>
            </div>
        </div>
    )
}

export default Login
