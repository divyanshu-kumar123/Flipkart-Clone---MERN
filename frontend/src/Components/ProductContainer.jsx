import React from 'react'
import '../css/ProductContainer.css'
import ProductCard from './ProductCard'
import samsumgMobile from '../assets/mobilesamsung.webp';

function ProductContainer({product}) {
  return (
    <div className='col-9 product-container '>
          {product.map((p, index)=>{
               return <ProductCard product={p} key={index}/>
            })}
    </div>
  )
}

export default ProductContainer