import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Box } from '@mui/material';
import emptyCart from '../assets/emptyCart.webp'
import { useNavigate } from 'react-router-dom';

function EmptyCart() {
    const navigate = useNavigate();
  return (
    <div>
        <center>
            <Card className="d-flex flex-row p-3 shadow-sm mb-3 col-md-8 mt-5">
                <CardContent>
                    <img src={emptyCart} alt='empty cart' width='30%'/>
                    <Typography variant='body1'>Your cart is empty!</Typography>
                    <Typography variant='body1' sx={{fontSize:'0.7rem'}}>Add items to it now.</Typography>
                    <Button className='mt-3' variant='contained' sx={{padding : '0.7rem 3rem', borderRadius:'0px'}} onClick={()=>{navigate("/")}}>Shop Now</Button>
                </CardContent>
            </Card>
            </center>
    </div>
  )
}

export default EmptyCart