import React from "react";
import "../css/BoxModal.css";
import login_img from "../assets/login_img.png";

function BoxModal({
  title = "Login",
  desc = "Get access to your Orders, Wishlist and Recommendations",
  src = { login_img },
  component,
}) {
  return (
    <div className="row box-modal mt-2">
      <div className="col-md-5 box-modal-left">
        <div>
          <h1 className="text-white fs-3">{title}</h1>
          <p className="text-white opacity-75 mt-3">{desc}</p>
        </div>
        <div className="bottom-img">
          <img src={login_img} />
        </div>
      </div>
      <div className="col-md-7 box-modal-right">
    {component}
      </div>
    </div>
  );
}

export default BoxModal;
