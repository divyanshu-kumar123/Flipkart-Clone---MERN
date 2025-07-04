import React from 'react'
import '../css/ProductContainer.css'
import ProductCard from './ProductCard'
import samsumgMobile from '../assets/mobilesamsung.webp';

function ProductContainer() {
    const product = {
        id: 1,
        image:samsumgMobile ,
        title: 'Samsung Galaxy M14 5G (Smoky Teal, 128 GB)',
        price: 10999,
        originalPrice: 14999,
        discount: 26,
        rating: 4.3
      };
  return (
    <div className='col-md-9 product-container ms-1'>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
    </div>
  )
}

export default ProductContainer