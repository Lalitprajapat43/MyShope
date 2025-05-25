import React, { useState } from 'react'
import { SearchIcon,CameraIcon,LocationEditIcon,IndianRupeeIcon, StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { AddToCart, DeleteCart } from '../SlicerRoom/MainSlicer'



function Home() {
const data = useSelector(state => state.Main.AllProduct)
const dispatch = useDispatch();

 const handleClick = (item) => {
    dispatch( AddToCart(item)); 
    
};



  return(
    <div className=' mt-16'>
    {/* Searchbar starrt */}
    <div className=' flex justify-between p-2  bg-amber-100'>
        <input className=' w-[80%] outline-none' 
        id='Search' 
        type='Search' placeholder='Search ...'/>
       <label htmlFor='Search'> <SearchIcon/></label>
        <CameraIcon/>
    </div>
    
    <main>
        <div className=' flex flex-wrap   justify-between p-2 mt-5'>
            
           <Link to={'/allproducts'}>
             <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >Man's</p>
            </div>
           </Link>
            <Link to={'/womans'}>
                <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >Woman's</p>
            </div>
            </Link>
            <Link to={'/kids'}>
                <div className='  h-20 p-1 flex flex-col items-center '>
                <img className=' h-[90%] rounded-4xl border-2'
                 src='' alt='image '/>
                <p  
                >Kids</p>
            </div>
            </Link>
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
       <div className='flex flex-col sticky top-16 right-0 left-0'>
       <h1 className='p-2 font-bold font-stretch-100% text-2xl bg-amber-50' 
       >Product For You</h1>
        <div className=' bg-gray-500 h-10  flex    '>
             <ul className=' w-[100%] flex    justify-between items-center p-4' >
                <li><Link>Sort</Link></li>
                <li><Link>Categories</Link></li>
                <li><Link>Gender</Link></li>
                <li><Link>Filter</Link></li>
            </ul>
            
        </div>
        </div>
    {/* All Products div  */}
<div className=' mt-2 flex  flex-wrap '>
{
    data.map((item,id)=>(
 
          <div  key={id} 
          className='flex flex-col  w-[50%]   h-60  shadow-xl'
            onClick={() => handleClick(item)}
             >
 <Link to={'/productfullscart'}>
        <img className='h-[100px] border-1'
         src={item.img} alt={item.ProductName}/> 
     <div className='p-1'>
           <p>{item.ProductName}</p> {/*Product Name  */}
        <h1>{item.Price}</h1>{/* Discount Price*/ }
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
          </Link>
    </div>

    ))
}
       
</div>
    </main>
    </div>
  )
}

export default Home
