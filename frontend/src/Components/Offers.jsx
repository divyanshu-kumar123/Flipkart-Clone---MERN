import React from "react";
import offer1 from "../assets/offerdryfruits.webp";
import offer2 from "../assets/offer2.webp";
import offer3 from "../assets/offer3.webp";
import offer4 from "../assets/offer4.webp";
import offer5 from "../assets/offer5.webp";
import offer6 from "../assets/offer6.webp";

function Offers() {
  return (
    <div className="row">
      <div className="col-4 p-2">
        <img src={offer1} width="100%" />
      </div>
      <div className="col-4 p-2">
        <img src={offer2} width="100%" />
      </div>
      <div className="col-4 p-2">
        <img src={offer3} width="100%" />
      </div>
      <div className="col-4 p-2">
        <img src={offer4} width="100%" />
      </div>
      <div className="col-4 p-2">
        <img src={offer5} width="100%" />
      </div>
      <div className="col-4 p-2">
        <img src={offer6} width="100%" />
      </div>
    </div>
  );
}

export default Offers;
