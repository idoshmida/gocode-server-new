import "./Header.css";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useState } from "react";
import { CartContext } from "../App";

function Header({ categories, filteredCategory, minMaxCategories }) {
  const { sliderState, setSliderState } = useContext(CartContext);

  const handleChange = (event, newValue) => {
    setSliderState(newValue);
  };

  function valuetext(sliderState) {
    return `${sliderState}°C`;
  }

  return (
    <nav className="product-filter">
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={sliderState}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={300}
        min={6}
      />

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              filteredCategory(e.target.value);
            }}
          >
            <option>all categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
