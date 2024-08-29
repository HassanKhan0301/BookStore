import React from 'react'
import { useFormData } from 'herotofu-react';


function Phones() {
    const { formState, getFormSubmitHandler } = useFormData('');
    return (
        <>
       
          <form onSubmit={getFormSubmitHandler()}>
          <div className='flex h-screen items-center justify-center '>
      <div  className="border-[2px] shadow-md p-5 rounded-md w-[600-px]">
  <div className="moadal-box">
    <h3 className="font-bold text-lg">Contact Us</h3>
    {/* NAme */}
    <div className='mt-4 space-y-2'>
    <label>Name</label>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="text" placeholder="Name"
    
   
    />

   
</div>

<div className='mt-4 space-y-2'>
<label>Email</label>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Email"
 
    />
    
</div>
{/* password */}
<div className='mt-4 space-y-2'>
   <label>Message</label>
    <br/> 
    <textarea className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Message"
  
     />
  
</div>

   {/* Button */}
   <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Register
              </button>
              </div>
              </div>
              </div>
              </div>
     
          </form>
          
        </>
    )
}
     
  


export default Phones