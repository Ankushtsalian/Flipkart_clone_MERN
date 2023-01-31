import React from "react";
import {
  AsideProductContainer,
  AsideProductWrapper,
  SectionProductContainer,
  SectionProductWrapper,
  StyledProductMainWrapper,
} from "../Styles/Product";
import FilterDropdown from "./FilterDropdown";
import PriceRange from "./PriceRange";
import ProductInfo from "./ProductInfo";

const ProductLayout = () => {
  const filterValue = [
    "BRAND",
    "COLOR",
    "MATERIAL",
    "AVAILABILITY",
    "THEME",
    "POPULAR COLLECTIONS",
    "GST INVOICE AVAILABLE",
  ];
  return (
    <>
      <StyledProductMainWrapper>
        <AsideProductWrapper>
          <AsideProductContainer>
            <PriceRange />
            {filterValue.map((filter, i) => (
              <FilterDropdown filter={filter} key={filter} />
            ))}
          </AsideProductContainer>
        </AsideProductWrapper>
        <SectionProductWrapper>
          <SectionProductContainer>
            ---------------Section Product--------------
            <ProductInfo />
          </SectionProductContainer>
        </SectionProductWrapper>
      </StyledProductMainWrapper>
    </>
  );
};

export default ProductLayout;
