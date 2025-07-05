import React, { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router";
import "../css/SpecificProductPage.css";
import { AddToCartBtn, BuyNowButton } from "../Components/AddToCartBtn";
import fassured from "../assets/fassured.png";
import AvailableOffer from "../Components/AvailableOffer";
import { Typography } from "@mui/material";
import ProductHighlight from "../Components/ProductHighlight";

function SpecificProductPage() {
  let id = useParams().id;
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState("");
  
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    api
      .get(`products/${id}`)
      .then((res) => {
        setProductDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        const message = error.response?.data?.message || "Error: Fetch failed";
        setError(message);
      });
  }, [id]);

  return (
    <>
      {productDetails ? (
        <div className="row specific-product">
          <div className="col-md-5 overflow-auto">
            <div className="image-section d-flex flex-column justify-content-between pb-2">
              {productDetails && (
                <img src={productDetails.image} width="100%" className="mt-3" />
              )}
              <div className="row ps-2 pe-2">
                <div className="col-md-6">
                  <AddToCartBtn />
                </div>
                <div className="col-md-6">
                  <BuyNowButton />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-7 overflow-auto p-3"
            style={{ height: "100%" }}
          >
            <div className="details-section">
              <Typography
                variant="body1"
                className="product-title"
                sx={{ fontSize: "1.2rem", lineHeight: "2.5" }}
                gutterBottom
              >
                {productDetails.title}
              </Typography>
              <Typography
                variant="body1"
                className="review text-muted fw-bold opacity-75"
                sx={{ fontSize: "0.8rem" }}
                gutterBottom
              >
                300 reviews and 500 review &nbsp;
                <img src={fassured} width="60px" />
              </Typography>
              <div className="d-flex align-items-center gap-2">
                <Typography
                  variant="h5"
                  color="black"
                  sx={{ fontSize: "1.6rem", fontWeight: "600" }}
                >
                  ₹
                  {productDetails.price -
                    productDetails.price * (productDetails.discount / 100)}
                </Typography>
                {productDetails.price && (
                  <>
                    <Typography
                      variant="body2"
                      className="text-muted text-decoration-line-through"
                    >
                      ₹{productDetails.price}
                    </Typography>
                    <Typography variant="body2" className="text-success">
                      {productDetails.discount}% off
                    </Typography>
                  </>
                )}
              </div>
              <AvailableOffer />

              {productDetails.properties.ram && (
                <>
                  <Typography
                    variant="body1"
                    className="text-muted mt-5 fw-semibold"
                  >
                    Ram &nbsp;{" "}
                    <span className="border p-2 text-black">
                      {productDetails.properties.ram}{" "}
                    </span>
                  </Typography>
                </>
              )}
              {productDetails.properties.size && (
                <>
                  <Typography
                    variant="body1"
                    className="text-muted mt-5 fw-semibold"
                  >
                    Size &nbsp;
                    {productDetails.properties.size.map((size, index) => (
                      <span
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`border p-2 me-2 text-black rounded cursor-pointer ${
                        selectedSize === size ? 'border-primary text-primary fw-bold' : ''
                      }`}
                      style={{
                        minWidth: '5rem',
                        display: 'inline-block',
                        textAlign: 'center',
                        borderWidth: '2px',
                      }}
                    >
                      {size}
                    </span>
                    ))}
                  </Typography>

                </>
              )}
              <div className="mt-5">
              <ProductHighlight properties={productDetails.properties} />

              </div>
            </div>
          </div>
        </div>
      ) : (
        "Error occured"
      )}
    </>
  );
}

export default SpecificProductPage;
