import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
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

const ProductLayout = memo(() => {
  const { filterMenuValue } = useSelector((state) => state.product);
  const result = {};
  filterMenuValue.forEach(
    (obj) => (result[Object.keys(obj)] = Object.values(obj))
  );

  return (
    <ProductMainContainer>
      <StyledProductMainWrapper>
        <AsideProductWrapper>
          <AsideProductContainer>
            <PriceRange />
            {filterMenuValue?.map((filter, i) => (
              <FilterDropdown filter={filter} key={i} />
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
});

export default ProductLayout;
