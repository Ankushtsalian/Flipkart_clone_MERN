import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Product-Store/Product-Slice";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { productType, product: products } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productType));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
