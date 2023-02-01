import React from "react";
import {
  AsideProductContainer,
  AsideProductWrapper,
  ProductMainContainer,
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
    <ProductMainContainer>
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
            <ProductInfo />
          </SectionProductContainer>
        </SectionProductWrapper>
      </StyledProductMainWrapper>
    </ProductMainContainer>
  );
};

export default ProductLayout;
