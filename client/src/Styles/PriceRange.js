import styled from "styled-components";
const StyledPriceRangeWrapper = styled.section`
  font-weight: bold;
  width: 100%;
`;

const FilterSection = styled.section`
  font-size: 18px;
  padding: 1rem;
  border-bottom: 1px solid var(--color-white);
`;

const StyledPriceRangeContainer = styled.section`
  padding: 1rem;
  font-weight: bold;
  /* width: 100%; */
  border-bottom: 1px solid var(--color-white);
`;
const PriceRangeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  /* padding: 10px 0; */
`;
const PriceRangeDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PriceRangeDropdownContainer = styled.div`
  flex-grow: 2;
  min-width: 30px;
  margin: 0 5px;
  display: flex;
  justify-content: flex-end;
`;
const PriceRangeSeperator = styled.div`
  flex: 1 1 0%;
  min-width: 30px;
  padding: 5px;
  text-align: center;
`;
const PriceRangeDropdown = styled.input`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const PriceClearContainer = styled.div`
  color: blue;
  cursor: pointer;
`;
const SliderContainer = styled.div`
  padding: 10px;
`;

export {
  StyledPriceRangeWrapper,
  FilterSection,
  StyledPriceRangeContainer,
  PriceRangeHeader,
  PriceRangeDropdownWrapper,
  PriceRangeDropdownContainer,
  PriceRangeDropdown,
  PriceRangeSeperator,
  PriceClearContainer,
  SliderContainer,
};
