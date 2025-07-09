import React from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="SEARCH FOR PRODUCTS" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-result">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="product" />
            </div>
            <div className="pro-details">
              <span className="name">Product name</span>
              <span className="desc">Product description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
