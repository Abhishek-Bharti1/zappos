import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state)=>state.allProducts.products);

const renderList = products.map((product)=>{
  const {id,title,image,price,category} = product;
  return(
    <div className='container' key={id}>
 <div><img src={image} alt=""/></div>

 <div>{title}</div>
 <div>${price}</div>
 <div>{category}</div>
 <button>Add To Cart</button>
</div>


  )
})

  return (
    <>{renderList}</>
  );
}

export default ProductComponent