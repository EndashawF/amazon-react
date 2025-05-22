import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState([]); //  Start with an empty array
const [isLoading, setIsLoading] =useState(false)
  useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // Fixed: pass `err` into the catch
        console.error("Error fetching products:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {
        isLoading?(<Loader/>): 
        (<section className={classes.products_container}>
          {products.length > 0 ? ( //  Only map if data exists
            products.map((singleProduct) => (
              <ProductCard product={singleProduct} key={singleProduct.id} />
            ))
          ) : (
            <p>Loading products...</p> //  Loading or fallback message
          )}
        </section>)
      }
    </>
  );
}

export default Product;

// import React, { useEffect,useState } from 'react'
// import axios from "axios"
// import ProductCard from './ProductCard'
// function Product() {
//     const[products, setProducts]= useState()
//     useEffect(()=>{
// axios.get("https://fakestoreapi.com/products")
// .then((res)=>{
//     setProducts(res.data)
// }).catch(()=>{
//     console.log(err)
// })
//     },[])
//   return (
//    <section>
//     {
//         products.map((singleProduct)=>{
//             return <ProductCard product = {singleProduct} key ={singleProduct.id}/>
//         })
//     }
//    </section>
//   )
// }

// export default Product
