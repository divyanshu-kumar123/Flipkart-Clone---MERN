import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

export function AddToCartBtn({link="/"}) {
  return (
    <Link to={link}><Button sx={{width:'100%', backgroundColor:'#FF9F00', height:'3rem'}} variant="contained">Add To Cart &nbsp; <i className="fa-solid fa-cart-shopping"></i></Button></Link>
  )
}

export function BuyNowButton({link="/"}) {
    return (
      <Link to={link}><Button sx={{width:'100%', backgroundColor:'#FB641B', height:'3rem'}} variant="contained">Buy Now  &nbsp;<i className="fa-solid fa-bolt"></i></Button></Link>
    )
  }
