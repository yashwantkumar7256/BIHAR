import axios from "axios";
import { useForm } from "react-hook-form"


export const useAuth=()=>{

    let {
        register,
        handleSubmit,
        reset,
        formState:{errors},

    }=useForm()
    
     const login = async (data) => {
  console.log(data);

  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    data
  );

  const result = response.data;

  console.log(result);
};
      
    return{
        register ,
        handleSubmit,
        reset,
        errors,
        login
    }
}