
import { useState } from "react";
import { Outlet, Navigate } from "react-router";
import shop from '../pages/Shop'

const ProtectedRoute = () => {
    const [data,setData]=useState(false)
    if(data){
        return <Navigate to={"/login"}/>
    }
 return(
    <Outlet/>
 )
};

export default ProtectedRoute;


