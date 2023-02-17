import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Product-Store/Product-Slice";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { productType, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productType));
  }, [dispatch, productType]);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {product.map((productItem) => (
          <ProductCard product={productItem} key={productItem.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
