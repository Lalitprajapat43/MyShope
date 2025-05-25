import React, { useState } from 'react'
import { CircleAlertIcon,ArrowLeft, Check, CheckCircle} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import AddressForm from '../Components/AddressForm';
import { Link } from 'react-router-dom';


function Address() {
const Displayflex = useSelector(state=> state.Main.flex)
const flexbox = useSelector(state=> state.Main.flexbox)

const [show ,Setshow] = useState(false);
const [set , setid] = useState('')
 
const handleClick=(id) =>{
    setid(id)
}

 

    return (
    <div className='mt-16'>
       <div>
    
       <div className=' flex gap-2 h-10  bg-yellow-300 items-center  justify-items-start'>
       <ArrowLeft className='size-4'/>
        <h1 className=' font-bold'>Address..</h1>
       </div>
        <div className=' h-10  flex justify-between items-center p-2 bg-rose-100 border-1 '>
                  <CircleAlertIcon/>
                  <CircleAlertIcon/>
                  <CircleAlertIcon/>
        </div>

       </div>
       {/* add address */}
       <div>
        <Link to={'/addaddress'}><button>Add New</button></Link>
       </div>
       {/* Address Box  */}
       
<section>
       <div className=' border-1 h-fit w-full p-2'>
            {
                Displayflex.map((item,id)=>(
                    <div key={id} className=' border-2'>
                      
                        <div className='flex justify-between'>
                            <h1>{item.Name}</h1>
                          <div onClick={() => handleClick( Setshow(!show)&& setid(item.id))} >
                          <input type={item.type} 
                          />{show ?' ':''}
                          </div>
                        </div>
                        <p>{item.Address}</p>
                        <p>{item.Mobile}</p>
                                  <div>
        
            {!show  && <div 
                    className='flex flex-col items-start'>
                    <button
                    className=' text-red-500 font-bold  '>
                        
                    </button>
                    <button 
                    className=' text-white bg-blue-500 p-1  text-xl font-bold  w-full'>
                    Continue</button>
                    </div>
            }
        
        </div>
                    </div>
                ))  }
        
        
      
       </div>


       </section>
    </div>
  )
}

export default Address
