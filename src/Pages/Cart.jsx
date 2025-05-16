import React from 'react'
import { DeleteIcon,IndianRupeeIcon,IndentIncreaseIcon,IndentDecreaseIcon, CircleChevronLeftIcon, CircleAlertIcon } from 'lucide-react'
export default function Cart() {
  return (
    <div>
    {/* Order Shiping Update div */}
        <div className=' h-10  flex justify-between items-center p-2 bg-rose-100 border-1 '>
            <CircleAlertIcon/>
            <CircleAlertIcon/>
            <CircleAlertIcon/>
        </div>

    {/* Product Cart div */}
     <section className=' mt-2 flex flex-col gap-1'>
         <div className='flex justify-between p-1  border-2 items-center '>
        
            <img className=' w-[80px]  border-2  h-[90px]'
             src=' ' alt='' />
        
        <div className=' text-black gap-0 font-extralight' >
            <h1 className=' font-bold'>Product Name </h1>
            <p>Short disc</p>
            <p>400</p> {/*discount Price*/}
            <p>500</p> {/*Actual Price*/}
        </div>
        <div className='flex items-center gap-2 border-2 h-5 p-1 rounded-2xl bg-blue-600 text-amber-50  '>
            <button>-</button>
            <p>2</p>
            <button>+</button>
        </div>
        <div className=' mb-[-5rem]'><DeleteIcon/></div>
      </div>
       <div className='flex justify-between p-1  border-2 items-center '>
        
            <img className=' w-[80px]  border-2  h-[90px]'
             src=' ' alt='' />
        
        <div className=' text-black gap-0 font-extralight' >
            <h1 className=' font-bold'>Product Name </h1>
            <p>Short disc</p>
            <p>400</p> {/*discount Price*/}
            <p>500</p> {/*Actual Price*/}
        </div>
        <div className='flex items-center gap-2 border-2 h-5 p-1 rounded-2xl bg-blue-600 text-amber-50  '>
            <button>-</button>
            <p>2</p>
            <button>+</button>
        </div>
        <div className=' mb-[-5rem]'><DeleteIcon/></div>
      </div>
       <div className='flex justify-between p-1  border-2 items-center '>
        
            <img className=' w-[80px]  border-2  h-[90px]'
             src=' ' alt='' />
        
        <div className=' text-black gap-0 font-extralight' >
            <h1 className=' font-bold'>Product Name </h1>
            <p>Short disc</p>
            <p>400</p> {/*discount Price*/}
            <p>500</p> {/*Actual Price*/}
        </div>
        <div className='flex items-center gap-2 border-2 h-5 p-1 rounded-2xl bg-blue-600 text-amber-50  '>
            <button>-</button>
            <p>2</p>
            <button>+</button>
        </div>
        <div className=' mb-[-5rem]'><DeleteIcon/></div>
      </div>

     </section>
      {/* Product Price div  */}
      <section  className='mt-2'>
      <div className=' bg-yellow-100 gap-2 flex flex-col p-2'>
        <h1>Price Details(1Item)</h1>
        <div className='flex justify-between'>
          
            <p>Total Product Price</p>
             <p className='flex items-center'>+<IndianRupeeIcon className=' size-3'/>259</p>
        

        </div>
        <div className='flex justify-between'>
            <p>Total Discounts</p>
            <p className='flex items-center'>-<IndianRupeeIcon className=' size-3'/>32</p>
        </div>
        <hr></hr>
        <div className='flex justify-between'>
            <h1>Order Total</h1>
            <h1 className='flex items-center'><IndianRupeeIcon className=' size-3'/>227</h1>
        </div>
        <div className='flex items-center justify-center  shadow-[2px 2px 7px ]  bg-blue-200' >
            <p className='flex items-center '>Yay! Your total discount is<IndianRupeeIcon className=' size-3'/>32</p>
        </div>
      </div>

      </section>
{/* Order done div */}
      <section>
        <div className='flex  justify-between items-center p-4 pt-0 pb-1 ' >
            <div className='flex flex-col gap-2'>
                <h1 className='flex items-center'><IndianRupeeIcon className=' size-3'/>277</h1>
                <p className=' font-bold '>VIEW PRICE DETAILS</p>
            </div>
            <button className='  p-1 pt-0  rounded-2xl bg-blue-500  text-amber-50 w-fit h-fit '>
                Continue
            </button>
        </div>
      </section>
    </div>
  )
}
