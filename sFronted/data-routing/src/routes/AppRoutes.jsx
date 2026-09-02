import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from '../pages/Login'
import Home from '../pages/home'
import Register from '../pages/Register'
import MainLayout from '../layout/MainLayout'


const AppRoutes = () => {
  let router=  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[{
           path:'',
           element:<Home/>
        },
            {
                path:'login',
                element:<Login/>
            },
            {
            path:'register',
            element:<Register/>
            }
        ]
    },
   
])
  return (
  <RouterProvider router={router}/>
  )
}

export default AppRoutes
