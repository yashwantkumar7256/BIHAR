import React from "react";
import { useForm } from 'react-hook-form';
import axios from "axios"

 import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
   
  } = useForm();

  const onSubmit= async(data)=>{
    
    try{
   const res=await axios.post('https://bihar-l952.onrender.com/api/auth/login', data);
   console.log(res)

   if(res.data.message==="login successful" ){
     toast.success("login successful");
   }else{
     toast.error("aaram se beta jaldi mat karo");
   }
   reset()
    }catch(err){
toast.error("something went wrong", err);
 reset()
    }
   
   
   

  }
  return (
    <>
      <div className="flex items-center bg-orange-200 px-30 justify-center">
        <div className="flex items-center  flex-col gap-4 w-[50%]">
          <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email",{
              required:"email is required",
              message:"email is required"
            })}
            type="text"
            placeholder="enter email"
          />
          <input
            {...register("password",{
              required:"password is required",
              message:"password is required"
            })}
           
            
            type="password"
            placeholder="enter password"
          />
          <button type="submit" className="bg-blue-400 ">submit</button>
           </form>
        </div>
      </div>
    </>
  );
};

export default Login;
