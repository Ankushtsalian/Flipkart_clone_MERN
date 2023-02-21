import { Slider } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePriceChange,
  handleResetPriceRange,
} from "../Redux/Auth-Store/Auth-Slice";
import {
  getProduct,
  handleClearFilters,
} from "../Redux/Product-Store/Product-Slice";
import {
  FilterSection,
  PriceClearContainer,
  PriceRangeDropdown,
  PriceRangeDropdownContainer,
  PriceRangeDropdownWrapper,
  PriceRangeHeader,
  PriceRangeSeperator,
  SliderContainer,
  StyledPriceRangeContainer,
  StyledPriceRangeWrapper,
} from "../Styles/PriceRange";

const PriceRange = () => {
  const { priceRange, isPriceChanged } = useSelector((state) => state.user);
  const { filterQueryValue, productType } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const minDistance = 10;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      dispatch(
        handlePriceChange([
          Math.min(newValue[0], priceRange[1] - minDistance),
          priceRange[1],
        ])
      );
    } else {
      dispatch(
        handlePriceChange([
          priceRange[0],
          Math.max(newValue[1], priceRange[0] + minDistance),
        ])
      );
    }
  };

  const handleClear = useCallback(() => {
    dispatch(handleResetPriceRange());
    dispatch(handleClearFilters());
    dispatch(getProduct(productType));
  }, [dispatch, productType]);

  return (
    <StyledPriceRangeWrapper>
      <FilterSection>Filters</FilterSection>
      <StyledPriceRangeContainer>
        <PriceRangeHeader>
          <span>PRICE</span>
          {(priceRange[0] !== 0 ||
            priceRange[1] !== 100 ||
            filterQueryValue != "") && (
            <PriceClearContainer onClick={handleClear}>
              <span>CLEAR</span>
            </PriceClearContainer>
          )}
        </PriceRangeHeader>

        <SliderContainer>
          <Slider
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
          />
        </SliderContainer>
        <PriceRangeDropdownWrapper>
          <PriceRangeDropdownContainer>
            <PriceRangeDropdown
              onChange={(e) => handlePriceChange(e.target.value)}
              value={priceRange[0]}
              name="min"
            />
          </PriceRangeDropdownContainer>

          <PriceRangeSeperator>to</PriceRangeSeperator>
          <PriceRangeDropdownContainer>
            <PriceRangeDropdown
              onChange={(e) => handlePriceChange(e.target.value)}
              value={priceRange[1]}
              name="max"
            />
          </PriceRangeDropdownContainer>
        </PriceRangeDropdownWrapper>
      </StyledPriceRangeContainer>
    </StyledPriceRangeWrapper>
  );
};

export default PriceRange;
