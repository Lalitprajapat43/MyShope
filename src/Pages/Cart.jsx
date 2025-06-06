import React from 'react'
import { DeleteIcon,IndianRupeeIcon,IndentIncreaseIcon,IndentDecreaseIcon, CircleChevronLeftIcon, CircleAlertIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../SlicerRoom/MainSlicer'
import { Link } from 'react-router-dom'


export default function Cart() {
const CartData = useSelector(state => state.Main.Cart)
const dispatch = useDispatch();

 const handleDelete = (item) => {
    dispatch(deleteCart(item));
  };
  


    return (
    <div className=' mt-16'>
    {/* Order Shiping Update div */}
        <div className=' h-10  flex justify-between items-center p-2 bg-rose-100 border-1 '>
            <CircleAlertIcon/>
            <CircleAlertIcon/>
            <CircleAlertIcon/>
        </div>

    {/* Product Cart div */}
     <section className=' mt-2 flex flex-col gap-1'>
        {
            CartData.map((item)=>(
                 <div className='flex justify-between p-1  border-2 items-center '>
        
            <img className=' w-[80px]  border-2  h-[90px]'
             src={item.img} alt={item.ProductName} />
        
        <div className=' text-black gap-0 font-extralight' >
            <h1 className=' font-bold'>{item.ProductName} </h1>
            <p>Short disc</p>
            <p>{item.Price}</p> {/*discount Price*/}
            <p>{item.Price}</p> {/*Actual Price*/}
        </div>
        <div className='flex items-center gap-2 border-2 h-5 p-1 rounded-2xl bg-blue-600 text-amber-50  '>
            <button>-</button>
            <p>2</p>
            <button>+</button>
        </div>
        <div className=' mb-[-5rem]'
        onClick={() => handleDelete(item)}
        ><DeleteIcon/></div>
      </div>
            ))

        }
   
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
            <Link to={'/address'} >
                <button className='  p-1 pt-0  rounded-2xl bg-blue-500  text-amber-50 w-fit h-fit '>
                Continue
            </button>
            </Link>
        </div>
      </section>
    </div>
  )
}
