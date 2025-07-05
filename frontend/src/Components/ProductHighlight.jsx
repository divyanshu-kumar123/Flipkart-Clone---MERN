import React from "react";
import { Typography } from "@mui/material";

function ProductHighlight({ properties }) {
  if (!properties || typeof properties !== "object") return null;

  return (
    <div className="highlight-box ">
      <Typography variant="body1" className="text-muted mt-5 fw-semibold">
        Highlight<br/>
        <br/>
      <ul className="highlight-list">
        {Object.entries(properties).map(([key, value], index) => (
          <li key={index} className="highlight-item">
            <span className="highlight-text">{key} : {value}</span>
          </li>
        ))}
      </ul>
      </Typography>
      
    </div>
  );
}

export default ProductHighlight;
