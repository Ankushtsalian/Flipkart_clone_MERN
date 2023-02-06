import React from "react";
import { useSelector } from "react-redux";
import {
  AsideProductContainer,
  AsideProductWrapper,
  ProductMainContainer,
  SectionProductContainer,
  SectionProductWrapper,
  StyledProductMainWrapper,
} from "../Styles/Product";
import { filterValue } from "../Utils/productData";
import FilterDropdown from "./FilterDropdown";
import PriceRange from "./PriceRange";
import ProductInfo from "./ProductInfo";

const ProductLayout = () => {
  const { filterMenuValue } = useSelector((state) => state.product);

  const result = {};
  filterMenuValue.forEach((obj) => {
    result[Object.keys(obj)] = Object.values(obj);
  });

  const {
    productSubType,
    PRICE,
    BRAND,
    COLOR,
    RAM,
    INTERNAL_STORAGE,
    THEME,
    POPULAR_COLLECTIONS,
    GST_INVOICE_AVAILABLE,
    BATTERY_CAPACITY,
    SCREEN_SIZE,
    PRIMARY_CAMERA,
    SECONDARY_CAMERA,
  } = result;
  const filters = {
    productSubType,
    PRICE,
    BRAND,
    COLOR,
    RAM,
    INTERNAL_STORAGE,
    THEME,
    POPULAR_COLLECTIONS,
    GST_INVOICE_AVAILABLE,
    BATTERY_CAPACITY,
    SCREEN_SIZE,
    PRIMARY_CAMERA,
    SECONDARY_CAMERA,
  };
  // console.log(filters);
  return (
    <ProductMainContainer>
      <StyledProductMainWrapper>
        <AsideProductWrapper>
          <AsideProductContainer>
            <PriceRange />
            {/* {filters.map(
              (filter, i) => {
                // console.log(filter);
              }
              // <FilterDropdown filter={filter} key={i} />
            )} */}
            {Object.entries(filters)?.map((filter, i) => (
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
};

export default ProductLayout;
