import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../Redux/Product-Store/Product-Slice";

const AdminSidebar = () => {
  const { productType } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{ marginBottom: "0.1rem", cursor: "pointer" }}
        onClick={() => dispatch(ProductType("Mobile"))}
      >
        Mobile
      </div>
      <div style={{ marginBottom: "0.1rem" }}>Mobile Accessories</div>
    </div>
  );
};

export default AdminSidebar;
