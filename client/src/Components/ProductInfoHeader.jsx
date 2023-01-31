import React from "react";

const ProductInfoHeader = () => {
  return (
    <div style={{ borderBottom: "1px solid black", padding: "10px" }}>
      <div>
        <div>PATH of product menu</div>
      </div>
      <div>
        <div>Menu Header</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <div style={{ padding: "10px 10px 10px 0" }}>Sort By</div>
        <div style={{ padding: "10px 10px 10px 0" }}>Popularity</div>
        <div style={{ padding: "10px 10px 10px 0" }}>Price -- Low to High</div>
        <div style={{ padding: "10px 10px 10px 0" }}>Price -- High to Low</div>
        <div style={{ padding: "10px 10px 10px 0" }}>Newest First</div>
      </div>
    </div>
  );
};

export default ProductInfoHeader;
