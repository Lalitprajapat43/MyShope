import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../SlicerRoom/MainSlicer';

function ProductFullsCart() {
const AllCartFullData = useSelector(state => state.Main.FullData);


const dispatch= useDispatch();
    
    const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };


    return (
        <div className=' bg-yellow-200 flex flex-col gap-5'>
      
       { 
          AllCartFullData.map((item,id)=>(
                 <div className='gap-2 flex flex-col ' key={id}
                 
                 >
           
                <div className=' bg-white'>
                    <img className=' h-50 border-2 w-full mt-16'
                        src={item.img} alt={item.ProductName} />

                </div>
                <div className=' flex justify-between p-2  bg-white'>
                    <div>
                        
                        <h1>{item.Price}</h1>
                        
                    </div>
                    <div className=' flex gap-4 '>
                        <p>Wishlist</p>
                        <p>Share</p>
                    </div>

                </div>
                <div className=' bg-white'>
                    <div className=' flex justify-between p-3'>
                        <h2>{item.slectopt}</h2>
                        <h2>Size Chart</h2>
                    </div>
                    <div className=' flex flex-wrap  gap-2 p-2'>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>
                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>

                        <h2 className=' border-2 p-2 pt-0  pb-0 rounded-xl'>XS</h2>

                    </div>
                </div>
                <div className=' border-1 p-1 rounded-[5px]  bg-white'>
                    <h1>Creating by</h1>
                </div>
                <div className=' border-1  bg-white '>
                    <div className=' flex justify-between p-2'>
                        <h1>Product HighLight</h1>
                        <h1>COPY</h1>
                    </div>
                    <div className=' flex justify-evenly '>
                        <p>Tyoe</p>
                        <p>Low</p>
                        <p>hxgbhsx</p>
                        <p>bshxvh</p>
                    </div>
                </div>
                <div className=' bg-gray-500 h-15     fixed bottom-0 left-0 right-0'>
                    <button className=' bg-teal-600 p-2 w-full h-full text-[25px] font-bold outline-none overflow-hidden '
                    onClick={() => handleAddToCart(item)}
                    >
            
                        AddToCart    
                    </button>
                    
            </div>

            </div>
       ))

        
        

        
       }
        </div>
    )
}

export default ProductFullsCart

