import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import SecLayout from '../Layout/SecLayout'
import Details from '../pages/Details'

const AppRoutes = () => {

    let router= createBrowserRouter([
        {
       path:"/",
       element:<MainLayout/>,
       children:[
        {
          path:"",
          element:<Home/>
       },
       {
        path:"about",
        element:<About/>
       }
    ]
    },
    {
        path:'/sec',
        element:<SecLayout/>,
        children:[
            {
                path:"",
                element:<Details/>
            }
        ]
    }
])


  return <RouterProvider router={router}/>


}

export default AppRoutes
 