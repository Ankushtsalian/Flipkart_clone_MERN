import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Product-Store/Product-Slice";
import { productData } from "../Utils/productData";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { productType, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productType));
  }, []);

  console.log(product);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {product.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
