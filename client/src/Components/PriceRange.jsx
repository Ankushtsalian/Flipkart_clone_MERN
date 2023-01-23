import { Slider } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePriceChange,
  handleResetPriceRange,
} from "../Redux/Auth-Store/Auth-Slice";
import {
  PriceClearContainer,
  PriceRangeDropdown,
  PriceRangeDropdownContainer,
  PriceRangeDropdownWrapper,
  PriceRangeHeader,
  PriceRangeSeperator,
  StyledPriceRangeWrapper,
} from "../Styles/PriceRange";

const PriceRange = () => {
  const { priceRange, isPriceChanged } = useSelector((state) => state.user);
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
  console.log(priceRange);
  console.log(priceRange[0] !== 0 || priceRange[1] !== 100);
  return (
    <StyledPriceRangeWrapper>
      <div>
        <PriceRangeHeader>
          <div>
            <span>PRICE</span>
          </div>
          {(priceRange[0] !== 0 || priceRange[1] !== 100) && (
            <PriceClearContainer
              onClick={() => dispatch(handleResetPriceRange())}
            >
              <span>CLEAR</span>
            </PriceClearContainer>
          )}
        </PriceRangeHeader>
        <div>
          <div>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={priceRange}
              onChange={handleChange}
              valueLabelDisplay="auto"
              defaultValue={[20, 37]}
              //   getAriaValueText={valuetext}
              disableSwap
            />
          </div>
        </div>
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
      </div>
    </StyledPriceRangeWrapper>
  );
};

export default PriceRange;
