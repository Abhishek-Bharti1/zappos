import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import { setProducts } from '../Redux/actions/productAction';
import ProductComponent from "../Components/ProductComponent"
const ProductListing = () => {

    const products = useSelector((state)=>state)
   const dispatch = useDispatch();
    //fetch function to get data from api==>

const fetchProducts = async()=>{
  const response = await axios
  .get("https://fakestoreapi.com/products")
  .catch((err)=>{
    console.log("err", err);
  });
  dispatch(setProducts(response.data));
  // console.log(response.data)
}; 
useEffect(()=>{
  fetchProducts();
},[]);
 console.log("Products:",products);
    return (
    <div>
    <ProductComponent/>
    
    </div>
    
  )
}

export default ProductListing