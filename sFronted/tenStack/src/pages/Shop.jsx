


import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  console.log("api called");

  const res = await axios.get(
    "https://fakestoreapi.com/products"
  );

  console.log(res.data);

  return res.data;
};

const Product = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    
    queryKey: ["products"],
    queryFn: getData,
     staleTime: Infinity,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;