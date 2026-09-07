import React from 'react'

import {useQuery} from "@tanstack/react-query"
 import { getProductDataApi } from "../api/ProductApi";


const Shop = () => {
  
  const {data,isLoading,isError,error}=useQuery({
    querykey:["products"],
    queryFn:getProductDataApi,
    staleTime:Infinity,
})
  console.log(data)

  return (
    <div>
         {data?.map((products)=>(
   <div>{products.title}</div>
         ))}
    </div>
  )
}

export default Shop

