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
        <div
          style={{
            minWidth: "100px",
            padding: "10px 20px 0 0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              padding: "10px 10px 0 10px",
            }}
          >
            Sort By
          </div>
        </div>
        <div
          style={{
            minWidth: "100px",
            padding: "10px 20px 0 0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              padding: "10px 10px 0 0",
            }}
          >
            {" "}
            Popularity
          </div>
        </div>
        <div
          style={{
            minWidth: "100px",
            padding: "10px 20px 0 0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              padding: "10px 10px 0 0",
            }}
          >
            {" "}
            Price -- Low to High
          </div>
        </div>
        <div
          style={{
            minWidth: "100px",
            padding: "10px 20px 0 0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              padding: "10px 10px 0 0",
            }}
          >
            {" "}
            Price -- High to Low
          </div>
        </div>
        <div
          style={{
            minWidth: "100px",
            padding: "10px 20px 0 0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              padding: "10px 10px 0 0",
            }}
          >
            {" "}
            Newest First
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoHeader;
