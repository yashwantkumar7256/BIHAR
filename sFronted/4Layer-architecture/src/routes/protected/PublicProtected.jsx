import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
    let data=  localStorage.getItem("token");
    if(data){
        return <Navigate to="/main"/>
    }



  return (
    <div>
      Public Protected
      <Outlet />
    </div>
  );
};

export default PublicProtected;