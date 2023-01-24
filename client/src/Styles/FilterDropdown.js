import styled from "styled-components";
const StyledFilterDropdownWrapper = styled.section`
  padding: 10px 0;
  /* font-weight: bold; */
  border-bottom: 1px solid var(--color-white);
  width: 100%;
  & .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0 10px 3px 0 !important;
  }
  & .css-15v22id-MuiAccordionDetails-root {
    padding: 0 0 1rem 1rem !important;
  }
  & .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    box-shadow: none;
  }
`;

const AccordionSummaryHeader = styled.div`
  flex-shrink: 0;
  font-weight: bold;
  font-size: 13px;
`;
const FilterInputValue = styled.span`
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
`;
const FilterInput = styled.div`
  padding-bottom: 10px;
`;
export {
  StyledFilterDropdownWrapper,
  AccordionSummaryHeader,
  FilterInputValue,
  FilterInput,
};
