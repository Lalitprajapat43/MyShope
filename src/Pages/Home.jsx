import React from 'react'
import { SearchIcon,CameraIcon,LocationEditIcon,IndianRupeeIcon, StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
    {/* Searchbar starrt */}
    <div className=' flex justify-between p-2  bg-amber-100'>
        <input className=' w-[80%] outline-none' 
        id='Search' 
        type='Search' placeholder='Search ...'/>
       <label htmlFor='Search'> <SearchIcon/></label>
        <CameraIcon/>
    </div>
    {/* Adress Div */}
    <div className=' flex gap-2  p-2 pb-0 '>
    <LocationEditIcon/>
    <p className=' text-gray-600'>Nagda dist ujjain,456335</p>
    
    </div>
    <main>
        <div className=' flex flex-wrap justify-between p-2 mt-5'>
            
            <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >All</p>
            </div>
            <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >All</p>
            </div>
            <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >All</p>
            </div>
            <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >All</p>
            </div><div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >All</p>
            </div>
            <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >All</p>
            </div>


        </div>
        {/* middell categories div  Gender */}
       <div className='flex flex-col'>
       <h1 className='p-2 font-bold font-stretch-100% text-2xl' 
       >Product For You</h1>
        <div className=' bg-gray-500 h-10  flex '>
             <ul className=' w-[100%] flex   justify-between items-center p-4' >
                <li><Link>Sort</Link></li>
                <li><Link>Categories</Link></li>
                <li><Link>Gender</Link></li>
                <li><Link>Filter</Link></li>
            </ul>
            
        </div>
        </div>
    {/* All Products div  */}
<div className=' mt-2 flex  flex-wrap '>
        <div className='flex flex-col  w-[50%] border-2 h-60 '>
        <img className='h-[60%] border-2'
         src='' alt='image '/> 
     <div className='p-1'>
           <p>Name</p> {/*Product Name  */}
        <h1>400/-</h1>{/* Discount Price*/ }
       <p className='flex items-center'><IndianRupeeIcon className='  size-3'/>500</p> {/* Actual Price*\ */}
        <p>Free Dilevery</p>{/* Free Dilevery allo or not  */ }
     </div>
        <div className=' flex items-center justify-between p-1 pb-0' >
            <div className=' flex items-center bg-blue-500 pl-1 pr-1 text-white rounded-full'>
            <p>3.5</p>
                <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            </div>
            <div>
                <p>Trusted</p>
            </div>
            
        </div>
        
    </div>
        <div className='flex flex-col  w-[50%] border-2 h-60   '>
        <img className='h-[60%] border-2'
         src='' alt='image '/> 
     <div className='p-1'>
           <p>Name</p> {/*Product Name  */}
        <h1>400/-</h1>{/* Discount Price*/ }
       <p className='flex items-center'><IndianRupeeIcon className='  size-3'/>500</p> {/* Actual Price*\ */}
        <p>Free Dilevery</p>{/* Free Dilevery allo or not  */ }
     </div>
        <div className=' flex items-center justify-between p-1 pb-0' >
            <div className=' flex items-center bg-blue-500 pl-1 pr-1 text-white rounded-full'>
            <p>3.5</p>
                <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            </div>
            <div>
                <p>Trusted</p>
            </div>
            
        </div>
        
    </div>
        <div className='flex flex-col  w-[50%] border-2 h-60  '>
        <img className='h-[60%] border-2'
         src='' alt='image '/> 
     <div className='p-1'>
           <p>Name</p> {/*Product Name  */}
        <h1>400/-</h1>{/* Discount Price*/ }
       <p className='flex items-center'><IndianRupeeIcon className='  size-3'/>500</p> {/* Actual Price*\ */}
        <p>Free Dilevery</p>{/* Free Dilevery allo or not  */ }
     </div>
        <div className=' flex items-center justify-between p-1 pb-0' >
            <div className=' flex items-center bg-blue-500 pl-1 pr-1 text-white rounded-full'>
            <p>3.5</p>
                <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            </div>
            <div>
                <p>Trusted</p>
            </div>
            
        </div>
        
    </div>
        <div className='flex flex-col  w-[50%] border-2 h-60  '>
        <img className='h-[60%] border-2'
         src='' alt='image '/> 
     <div className='p-1'>
           <p>Name</p> {/*Product Name  */}
        <h1>400/-</h1>{/* Discount Price*/ }
       <p className='flex items-center'><IndianRupeeIcon className='  size-3'/>500</p> {/* Actual Price*\ */}
        <p>Free Dilevery</p>{/* Free Dilevery allo or not  */ }
     </div>
        <div className=' flex items-center justify-between p-1 pb-0' >
            <div className=' flex items-center bg-blue-500 pl-1 pr-1 text-white rounded-full'>
            <p>3.5</p>
                <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            </div>
            <div>
                <p>Trusted</p>
            </div>
            
        </div>
        
    </div>
        <div className='flex flex-col  w-[50%] border-2 h-60  '>
        <img className='h-[60%] border-2'
         src='' alt='image '/> 
     <div className='p-1'>
           <p>Name</p> {/*Product Name  */}
        <h1>400/-</h1>{/* Discount Price*/ }
       <p className='flex items-center'><IndianRupeeIcon className='  size-3'/>500</p> {/* Actual Price*\ */}
        <p>Free Dilevery</p>{/* Free Dilevery allo or not  */ }
     </div>
        <div className=' flex items-center justify-between p-1 pb-0' >
            <div className=' flex items-center bg-blue-500 pl-1 pr-1 text-white rounded-full'>
            <p>3.5</p>
                <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            </div>
            <div>
                <p>Trusted</p>
            </div>
            
        </div>
        
    </div>
        <div className='flex flex-col  w-[50%] border-2 h-60  '>
        <img className='h-[60%] border-2'
         src='' alt='image '/> 
     <div className='p-1'>
           <p>Name</p> {/*Product Name  */}
        <h1>400/-</h1>{/* Discount Price*/ }
       <p className='flex items-center'><IndianRupeeIcon className='  size-3'/>500</p> {/* Actual Price*\ */}
        <p>Free Dilevery</p>{/* Free Dilevery allo or not  */ }
     </div>
        <div className=' flex items-center justify-between p-1 pb-0' >
            <div className=' flex items-center bg-blue-500 pl-1 pr-1 text-white rounded-full'>
            <p>3.5</p>
                <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            <StarIcon className=' size-3'/>
            </div>
            <div>
                <p>Trusted</p>
            </div>
            
        </div>
        
    </div>
</div>
    </main>
    </div>
  )
}

export default Home
