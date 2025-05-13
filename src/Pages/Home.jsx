import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <header className=' bg-black h-10 text-white p-2  w-2xss'>
                <ul className='flex  justify-between overflow-scroll gap-2 '>
                    <li className=' hover:text-shadow-amber-200'><Link>Home</Link></li>
                    <li><Link>Mans</Link></li>
                    <li><Link>Womans</Link></li>
                    <li><Link>Kids</Link></li>
                    <li><Link>Beauty</Link></li>
                    <li><Link>Kitchen</Link></li>
                    <li><Link>Electronics</Link></li>


                </ul>
            </header>
            <main>
                <div className='h-30 lg:h-80  bg-amber-200 overflow-hidden flex items-center '>
                    
                </div>
                <div className='h-30 border-2  '>
                    <h1 className='  font-bold '>Tranding </h1>
                   <div className='flex h-[90%] overflow-scroll gap-2'>
                     <div className=' h-[90%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[90%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[90%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[80%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[80%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[80%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                   </div>
                </div>
                {/* item boxes */}
                <div className='flex  mt-4'>
                    <div className='w-[40%] h-60 border-2 flex flex-wrap justify-between items-center p-1  '>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>

                    </div>
                </div>
                <div className='w-[40%] h-60 border-2 flex flex-wrap justify-between items-center p-1  '>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>
                     <div className=' h-[40%] w-[70px] border-2'>
                        <img className='h-[70%] border-2' 
                        src='' alt='image' />
                        <p>Phone</p>
                    </div>

                    </div>
            
                
            </main>
        </div>
    )
}

export default Home
