import React from "react";

const ProductInfoHeader = () => {
  return (
    <div style={{ borderBottom: "1px solid black", padding: "10px" }}>
      <div style={{ padding: "0 10px 0 0" }}>
        <div>PATH of product menu</div>
      </div>
      <div style={{ padding: "10px 10px 0 0" }}>
        <div>Menu Header</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <div style={{ padding: "10px 10px 5px 0", cursor: "pointer" }}>
          Sort By
        </div>
        <div style={{ padding: "10px 10px 5px 0", cursor: "pointer" }}>
          Popularity
        </div>
        <div style={{ padding: "10px 10px 5px 0", cursor: "pointer" }}>
          Price -- Low to High
        </div>
        <div style={{ padding: "10px 10px 5px 0", cursor: "pointer" }}>
          Price -- High to Low
        </div>
        <div style={{ padding: "10px 10px 5px 0", cursor: "pointer" }}>
          Newest First
        </div>
      </div>
    </div>
  );
};

export default ProductInfoHeader;
