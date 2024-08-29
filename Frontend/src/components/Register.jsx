import React from 'react'
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";


function Register() {
    const {
        register,
        handleSubmit,
       formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className='flex h-screen items-center justify-center '>
      <div  className="border-[2px] shadow-md p-5 rounded-md w-[600-px]">
  <div className="moadal-box">
    <h3 className="font-bold text-lg">Register</h3>
    {/* NAme */}
    <div className='mt-4 space-y-2'>
    <spam>Name</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="text" placeholder="Name"
    
    {...register("name", { required: true })}
    />
    <br />
    {errors.fullname && (
      <span className="text-sm text-red-500">
        This field is required
      </span>
    )}
</div>

<div className='mt-4 space-y-2'>
    <spam>Email</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Email"
    {...register("email", { required: true })}
    />
    <br />
    {errors.email && (
      <span className="text-sm text-red-500">
        This field is required
      </span>
    )}
</div>
{/* password */}
<div className='mt-4 space-y-2'>
    <spam>Password</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Password"
     {...register("password", { required: true })}
     />
     <br />
     {errors.password && (
       <span className="text-sm text-red-500">
         This field is required
       </span>
     )}
</div>

   {/* Button */}
   <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Register
              </button>
              <p>
                Have account?{" "}
                <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login/>
              </p>
              <br/>
              <div className="modal-action">
      <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                Close
              </Link>
      </form>
    </div>
              </div>

   
  </div>
</div>
      </div>
    </>
  )
}

export default Register