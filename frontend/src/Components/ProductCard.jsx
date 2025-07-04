import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import fassured from '../assets/fassured.png'

const ProductCard = ({ product }) => {
  const {
    id = 1,
    image,
    title,
    price,
    originalPrice,
    discount,
    rating,
  } = product;

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className="product-card shadow-sm">
          <CardMedia
            component="img"
            image={image}
            alt={title}
            className="product-image"
          />
          <CardContent className="p-2">
            <Typography variant="body1" className="product-title" sx={{minHeight:'50px'}}gutterBottom>
              {title.length > 50 ? title.substring(0, 50) + '...' : title}
            </Typography>
            <img src={fassured} width='50px'/>
            <div className="d-flex align-items-center gap-2">
              <Typography variant="h6" color="primary">
                ₹{price}
              </Typography>
              {originalPrice && (
                <>
                  <Typography variant="body2" className="text-muted text-decoration-line-through">
                    ₹{originalPrice}
                  </Typography>
                  <Typography variant="body2" className="text-success">
                    {discount}% off
                  </Typography>
                </>
              )}
            </div>
            <Rating value={rating} precision={0.5} readOnly size="small" className="mt-1" />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
