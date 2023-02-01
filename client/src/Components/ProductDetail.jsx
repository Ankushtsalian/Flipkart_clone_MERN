import React from "react";
import { productData } from "../Utils/productData";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {[...productData, ...productData, ...productData].map(
          (product, index) => (
            <ProductCard product={product} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
