import React, { useEffect, useState } from 'react';
import api from "../api.js";
import FilterBox from '../Components/FilterBox.jsx';
import ProductContainer from '../Components/ProductContainer.jsx';

function CategoryPage({ category, banner }) {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        api
          .get(`/products/search?category=${category}`)
          .then((res) => {
            setProduct(res.data);
          })
          .catch((err) => {
            const message = err.response?.data?.message || "Error: Fetch failed";
            setError(message);
          });
      }, [category]);
  return (
    <div className='row'>
      {banner && <img src={banner} alt={`${category} banner`} className='w-100 m-3' />}
      <FilterBox />
      <ProductContainer product={product} />
    </div>
  )
}

export default CategoryPage