import React from "react";
import { useState } from "react";
import {
  ProductHeaderFilterContainer,
  ProductHeaderFilterTitle,
  ProductHeaderFilterTitleContainer,
  ProductHeaderFilterValue,
  ProductHeaderFilterValueContainer,
  ProductMenuHeader,
  ProductPath,
  StyledProductInfoHeaderWrapper,
} from "../Styles/ProductInfoHeader";
import { productInfoHeaderFilterData } from "../Utils/productInfoHeaderFilterData";

const ProductInfoHeader = () => {
  const [activeFilter, setActiveFilter] = useState("Popularity");

  const handleProductInfoHeaderFilter = (activeFilterId) =>
    setActiveFilter(activeFilterId);

  return (
    <StyledProductInfoHeaderWrapper>
      <ProductPath>
        <div>PATH of product menu</div>
      </ProductPath>
      <ProductMenuHeader>
        <div>Menu Header</div>
      </ProductMenuHeader>

      <ProductHeaderFilterContainer>
        <ProductHeaderFilterTitleContainer>
          <ProductHeaderFilterTitle>Sort By</ProductHeaderFilterTitle>
        </ProductHeaderFilterTitleContainer>

        {productInfoHeaderFilterData.map((filterData, index) => {
          return (
            <ProductHeaderFilterValueContainer key={index}>
              <ProductHeaderFilterValue
                activeFilter={activeFilter}
                filterData={filterData}
                onClick={() => handleProductInfoHeaderFilter(filterData)}
              >
                {filterData}
              </ProductHeaderFilterValue>
            </ProductHeaderFilterValueContainer>
          );
        })}
      </ProductHeaderFilterContainer>
    </StyledProductInfoHeaderWrapper>
  );
};

export default ProductInfoHeader;
