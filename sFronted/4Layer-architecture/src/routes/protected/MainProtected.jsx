import React from 'react'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {
    let data=  localStorage.getItem("token");
      if(!data){
          return <Navigate to="/"/>
      }
  return (
    <div>
        main protected

      <Outlet/>
    </div>
  )
}

export default MainProtected
