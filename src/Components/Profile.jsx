import React from 'react'
import { AppWindowIcon, ArrowRightIcon, CreditCardIcon, HeartIcon, LanguagesIcon, LogOutIcon, PhoneCallIcon, PhoneIcon, PhoneIncoming, PhoneMissedIcon, SettingsIcon, ShareIcon, ShoppingBag, ShowerHeadIcon, StampIcon, StarIcon, Stethoscope } from 'lucide-react'

function Profile() {
  return (
    <div className='mt-16 p-2 flex flex-col gap-5'>
      <div  className=' flex p-2 justify-between items-center'>
       <div className='flex  gap-2 items-center '>
         <img src='' alt=''
            className=' border-2 w-10 h-10 rounded-full'
         />
        <h1 className='text-xl font-bold'>User Name</h1>
        
       </div>
       <ArrowRightIcon/>

      </div>
      <div className='flex justify-around'>
        <div className='border-1 w-[45%] rounded-xl h-20 flex flex-col items-center justify-center'>
        <PhoneCallIcon className='text-blue-500'/>
        <h1 className='font-bold'>Help Center</h1>
        </div>
          <div className='border-1 w-[45%] rounded-xl h-20 flex flex-col items-center justify-center'>
        <LanguagesIcon className='text-blue-500'/>
        <h1 className='font-bold'>Change Language</h1>
        </div>
    
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-xl'>My Payments</h1>
      <h1 className='flex gap-2 font-medium'>   <PhoneIncoming/>Bank & UPI Details</h1>
        <hr></hr>
       <h1 className='flex gap-2 font-medium'> <CreditCardIcon/>Payment & Refund</h1>

        
      </div>
          <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-xl'>My Activity</h1>
      <h1 className='flex gap-2 font-medium'>   <HeartIcon/>Wishlisted Products</h1>
        <hr></hr>
       <h1 className='flex gap-2 font-medium'> <ShareIcon/>Shared Products</h1>
        <hr></hr>
              <h1 className='flex gap-2 font-medium'> <ShoppingBag/>Followed Shops</h1> 
        
      </div>
        <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-xl'>Others</h1>
      <h1 className='flex gap-2 font-medium'>   <AppWindowIcon/>Our App Balance</h1>
        <hr></hr>
       <h1 className='flex gap-2 font-medium'> <SettingsIcon/>Settings</h1>
        <hr></hr>
              <h1 className='flex gap-2 font-medium'> <StarIcon/>Rate Our App</h1> 
        <hr></hr>
              <h1 className='flex gap-2 font-medium'> <StampIcon/>Legal & Policies</h1> 
        <hr></hr>
              <h1 className='flex gap-2 font-medium'> <LogOutIcon/> Logout</h1> 
        
      </div>
      <div  className='border-1 h-30 flex items-center justify-center'>
      <h1 className='text-2xl'>Made In India</h1>

      </div>
    </div>
  )
}

export default Profile
