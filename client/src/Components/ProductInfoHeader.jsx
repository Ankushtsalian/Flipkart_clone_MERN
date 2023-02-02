import React from "react";
import { useState } from "react";
import { productInfoHeaderFilterData } from "../Utils/productInfoHeaderFilterData";

const ProductInfoHeader = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const handleProductInfoHeaderFilter = (activeFilterId) =>
    setActiveFilter(activeFilterId);

  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: "10px 20px 0 10px",
      }}
    >
      <div style={{ padding: "0 10px 0 0" }}>
        <div>PATH of product menu</div>
      </div>
      <div
        style={{
          padding: "10px 10px 0 0",
        }}
      >
        <div>Menu Header</div>
      </div>

      {/* ------------------------- */}

      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          // width: "1000px",
        }}
      >
        {productInfoHeaderFilterData.map((filterData, index) => {
          return (
            <div className="product-info-header-filter-wrapper" key={index}>
              <button
                className={`product-info-header-filter-container ${
                  activeFilter === filterData && "active"
                }`}
                onClick={() => handleProductInfoHeaderFilter(filterData)}
              >
                {filterData}
              </button>
            </div>
          );
        })}
      </div>

      {/* ------------------------- */}
    </div>
  );
};

export default ProductInfoHeader;
