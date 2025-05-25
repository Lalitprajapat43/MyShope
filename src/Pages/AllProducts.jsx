import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { MoveLeftIcon } from 'lucide-react'
import { addToCart } from '../SlicerRoom/MainSlicer'



export default function AllProducts() {
const AllProduct = useSelector(state => state.Main.AllProduct)


const dispatch= useDispatch();
    
    const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };



  return (
   
    <div className='mt-16  '>
    <div className='h-16 font-bold border-2 fixed text-2xl p-1 flex items-center bg-white top-0 right-0 left-0'>
     <MoveLeftIcon/><h1 >Products</h1></div>
  <div className='flex mt-2 p-2'>
     <div className=' fixed left-0 top-36  gap-4 flex flex-col bottom-0 bg-amber-300'>
      {
        AllProduct.map((item,index)=>(
          <div key={index} >
            <img className='w-30 h-20' 
            src={item.img} alt={item.ProductName}/>
          </div>
        ))
      }
    </div>






     <div className='flex flex-wrap justify-around gap-2 ml-[30%]  '>
      {
        AllProduct.map((item,index)=>(
        <div className='w-[40%] shadow-2xl  border-1'
          key={index}>
          <img className=' w-full h-25' 
          src={item.img} alt={item.ProductName} />
         <div className='p-1'>
          <h2>{item.ProductName}</h2>
        <div className='flex justify-between'>  <p>Price</p> <p>Quantity</p></div>
          
        </div>
        <button className='w-full bg-blue-500'
        onClick={() => handleAddToCart(item)}
        >AddToCart</button></div>
        ))
      }
      </div> 
  </div>
    </div>
  )
}
