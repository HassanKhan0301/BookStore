import React from 'react'
import { Link } from "react-router-dom";
import Login from "./Login";
function Singup() {
  return (
   <>
       <div className='flex h-screen items-center justify-center '>
      <div id="my_modal_1" className="border-[2px] ">
  <div className="moadal-box">
    <h3 className="font-bold text-lg">Register</h3>
    {/* NAme */}
    <div className='mt-4 space-y-2'>
    <spam>Name</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="text" placeholder="Name"/>
</div>

<div className='mt-4 space-y-2'>
    <spam>Email</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Email"/>
</div>
{/* password */}
<div className='mt-4 space-y-2'>
    <spam>Password</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Password"/>
</div>

   {/* Button */}
   <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Register
              </button>
              <p>
                Have account?{" "}
                <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>{" "}
              </p>
              </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</div>
      </div>
   </>
  )
}

export default Singup