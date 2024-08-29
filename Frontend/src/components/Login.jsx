import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    const {
        register,
        handleSubmit,
       formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
  return (
    <div>
        <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login</h3>
<div className='mt-4 space-y-2'>
    <spam>Email</spam>
    <br/> 
    <input className='py-1 w-80 px-3 border rounded-md outline-none' type="email" placeholder="Email"
     {...register("email", { required: true })}
    />
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
                Login
              </button>
               <p>
                Not registered?{" "}
                <Link
                  to="/register"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
              </div>

    <div className="modal-action">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  )
}

export default Login