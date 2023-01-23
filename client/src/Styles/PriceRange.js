import styled from "styled-components";
const StyledPriceRangeWrapper = styled.section`
  padding: 5px;
  font-weight: bold;
`;
const PriceRangeHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
  min-width: 20px;
`;
const PriceRangeDropdown = styled.input`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PriceClearContainer = styled.div`
  color: blue;
  cursor: pointer;
`;

export {
  StyledPriceRangeWrapper,
  PriceRangeHeader,
  PriceRangeDropdownWrapper,
  PriceRangeDropdownContainer,
  PriceRangeDropdown,
  PriceRangeSeperator,
  PriceClearContainer,
};
