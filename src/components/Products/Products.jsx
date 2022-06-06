import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/products')
    .then((r)=> r.json())
    .then((d)=> setTodos(d))
  },[])

  console.log(todos)
 
  return <div>
    {todos.map((product)=>{ 
   return     <Product product={product}/> 
    })}

  </div>;
};

export default Products;
