import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuthHooks";

const Login = () => {
   let {register,handleSubmit,reset,errors,login}=useAuth();

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(login)}>
          <input {...register("username")}
           type="text" placeholder="enter your email" />
          <input {...register("password")}
          type="text" placeholder="enter password" />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
