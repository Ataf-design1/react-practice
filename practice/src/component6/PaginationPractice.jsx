import React, { useEffect, useState } from "react";

const PaginationPractice = () => {
  const [products, setproducts] = useState([]);
  const api_call = () => {
    fetch("https://fakestoreapi.com/products").then((response)=>response.json()).then((data)=>setproducts(data))
  };
  useEffect(()=>{
api_call
  },[])
  return (
    <>
    {products.map((product)=>(
        <div>
            <h6>{product.title}</h6>
        </div>
    ))}
    </>
  )
};

export default PaginationPractice;
