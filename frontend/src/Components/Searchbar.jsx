import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Optional: Trigger a search callback
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <>
      <TextField
        id="outlined-start-adornment"
        size="small"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for products, brands and more"
        sx={{
          m: 1,
          width: "650px",
          paddingLeft: "2rem",
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {<SearchOutlinedIcon />}
              </InputAdornment>
            ),
            sx: { height: "40px", borderRadius: "0px", backgroundColor: "#f0f5ff",},
          },
        }}
      />
    </>
  );
}

export default Searchbar;
