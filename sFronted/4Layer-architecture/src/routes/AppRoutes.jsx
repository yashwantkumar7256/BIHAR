import React from 'react'
import { createBrowserRouter,  RouterProvider } from 'react-router'
import MainProtected from './protected/MainProtected'
import AuthLayout from '../app/Layouts/AuthLayout'
import PublicProtected from './protected/PublicProtected'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import MainLayout from '../app/Layouts/MainLayout'
import Shop from '../features/shop/ui/pages/Shop'
import CartPages from '../features/cart/ui/pages/CartPages'

const AppRoutes = () => {
    let router=createBrowserRouter([

        {
            path:'/',
            element:<PublicProtected/>,
            children:[

                {
                    path:"",
                    element:<AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Login/>
                        },
                        {
                            path:'/register',
                            element:<Register/>
                        }
                    ]
                }
            ]

        },
        {
            path:"/main",
            element:<MainProtected/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Shop/>

                        },
                        {
                           path:"cart",
                           element:<CartPages/>
                        }
                    ]
                    
                }
            ]
        }
    ])


  return  <RouterProvider router={router}/>
}

export default AppRoutes
