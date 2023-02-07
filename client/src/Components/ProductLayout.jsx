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
  // const {
  //   productSubType,
  //   PRICE,
  //   BRAND,
  //   COLOR,
  //   RAM,
  //   INTERNAL_STORAGE,
  //   THEME,
  //   POPULAR_COLLECTIONS,
  //   GST_INVOICE_AVAILABLE,
  //   BATTERY_CAPACITY,
  //   SCREEN_SIZE,
  //   PRIMARY_CAMERA,
  //   SECONDARY_CAMERA,
  // } = result;
  // const filters = {
  //   productSubType,
  //   PRICE,
  //   BRAND,
  //   COLOR,
  //   RAM,
  //   INTERNAL_STORAGE,
  //   THEME,
  //   POPULAR_COLLECTIONS,
  //   GST_INVOICE_AVAILABLE,
  //   BATTERY_CAPACITY,
  //   SCREEN_SIZE,
  //   PRIMARY_CAMERA,
  //   SECONDARY_CAMERA,
  // };
  // console.log(filters);
  const filters = useMemo(() => {
    return {
      productSubType: result.productSubType,
      PRICE: result.PRICE,
      BRAND: result.BRAND,
      COLOR: result.COLOR,
      RAM: result.RAM,
      INTERNAL_STORAGE: result.INTERNAL_STORAGE,
      THEME: result.THEME,
      POPULAR_COLLECTIONS: result.POPULAR_COLLECTIONS,
      GST_INVOICE_AVAILABLE: result.GST_INVOICE_AVAILABLE,
      BATTERY_CAPACITY: result.BATTERY_CAPACITY,
      SCREEN_SIZE: result.SCREEN_SIZE,
      PRIMARY_CAMERA: result.PRIMARY_CAMERA,
      SECONDARY_CAMERA: result.SECONDARY_CAMERA,
    };
  }, [filterMenuValue]);
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
});

export default ProductLayout;
