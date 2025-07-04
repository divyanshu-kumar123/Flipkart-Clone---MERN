import React, { useEffect, useState } from 'react';
import api from "../api.js";
import mobileBanner from '../assets/mobileBanner.webp'
import FilterBox from './FilterBox.jsx';
import ProductContainer from './ProductContainer.jsx';


function Mobile() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
          api
            .get("/products/search?category=Mobiles")
            .then((res) => {
              setProduct(res.data);
            })
            .catch((err) => {
              const message = err.response?.data?.message || "Error: Login failed";
              setError(message);
            });
      }, []);
  return (
    <div className='row'>
        <img src={mobileBanner} alt="mobile banner" className='w-100 m-3'/>
        <br />
        <FilterBox />
        <ProductContainer product={product} />
    </div>
  )
}

export default Mobile