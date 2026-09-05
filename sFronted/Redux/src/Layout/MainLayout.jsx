import React from 'react'
import { Outlet } from 'react-router'
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from '../features/counterSlice';


const MainLayout = () => {
   let dispatch= useDispatch()
       let{count}=useSelector((store)=>store.counter)
  return (
    <div>
        <div>my count {count}</div>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>

     Main layout
    
    </div>
  )
}

export default MainLayout
