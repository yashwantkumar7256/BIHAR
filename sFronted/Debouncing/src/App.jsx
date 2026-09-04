import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
   const [filtered,setFiltered] = useState([])

 

  let filterData = () => {
    console.log("filter running");

     if (searchItem ==="") {
      return setFiltered(products);
     }
    let result = products.filter((val) => {
      return val.title.toLowerCase().includes(searchItem.toLowerCase());
    });
    setFiltered(result);
    
    console.log(result);
  };

  useEffect(()=>{
    if(searchItem ==="") return;
    let timer=setTimeout(()=>{
 filterData()
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  },[searchItem])

  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setProducts(res.data);
    setFiltered(res.data)
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="bg-black h-screen text-white">
        appp
        <div>
          <input
            className=""
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
            placeholder="search bar"
          ></input>
        </div>
        {filtered.map((item) => {
          return (
          
              <div key={item.id}>
                <h1>{item.title} </h1>
              </div>
         
          );
        })}
      </div>
    </>
  );
};

export default App;
