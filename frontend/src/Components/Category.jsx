import React from 'react';
import {Link} from 'react-router-dom'

function Category({image, category, link="/"}) {
  return (
    <div className='category ps-5 pe-4 text-center'>
      <Link to={link}>
      <img src={image} alt="img"/>
      <p className='fw-bold pt-2 '>{category}</p>
      </Link>
    </div>
  )
}

export default Category