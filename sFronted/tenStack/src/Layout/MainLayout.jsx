import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  

  
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar/>
     
     <Outlet/>
    </div>
  )
}

export default MainLayout
