import React, { useEffect, useState } from 'react';
import classes from "./ProductDetail.module.css"
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../components/Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';


function ProductDetail() {
  const {productId} =useParams()
  const [product, setProduct] =useState({})
useEffect(()=>{
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
 setProduct(res.data)

}).catch(()=>{
console.log(err)
})
},[])
  return (
    <LayOut>
      <ProductCard
      product={product}/>
    </LayOut>
  );
}

export default ProductDetail
