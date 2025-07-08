import "./Products.scss";
import Product from "./Product/Product"
import React from 'react'

const Products = ({innerpage}) =>{
    return <div className="products-container">
        {innerpage && <div className="sec-heading"></div>}
        <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
};

export default Products;
