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
import PriceRange from "./PriceRange";

const ProductLayout = () => {
  return (
    <>
      <StyledProductMainWrapper>
        <AsideProductWrapper>
          <AsideProductContainer>
            --------ASIDE PRODUCT-------- <PriceRange />
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
