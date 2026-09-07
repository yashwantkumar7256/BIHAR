import axios from "axios"
import { axiosInstance } from "../config/axiosInstance"

export let getProductDataApi=async ()=>{
    try{
        let res=await axiosInstance.get('/products');
        console.log(res.data)
        return res.data
    }catch(err){
    console.log("api error in products",err)
    }
};