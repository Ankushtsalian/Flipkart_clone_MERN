import React from "react";
import {
  AsideProductContainer,
  AsideProductWrapper,
  AsideWrapper,
  SectionProductContainer,
  SectionProductWrapper,
  SectionWrapper,
  StyledProductMainWrapper,
} from "../Styles/Product";
import FilterDropdown from "./FilterDropdown";
import PriceRange from "./PriceRange";

const ProductLayout = () => {
  return (
    <>
      <StyledProductMainWrapper>
        <AsideProductWrapper>
          <AsideProductContainer>
            <PriceRange />
            {new Array(5).fill(0).map((_, i) => (
              <FilterDropdown />
            ))}
          </AsideProductContainer>
        </AsideProductWrapper>
        <SectionProductWrapper>
          <SectionProductContainer>
            ---------------Section Product--------------
          </SectionProductContainer>
        </SectionProductWrapper>
      </StyledProductMainWrapper>
    </>
  );
};

export default ProductLayout;
