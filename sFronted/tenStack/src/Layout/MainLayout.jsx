import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

const MainLayout = () => {
  

  
  return (
    <div className='bg-black h-screen text-white'>
      main 
     
     <Outlet/>
    </div>
  )
}

export default MainLayout
