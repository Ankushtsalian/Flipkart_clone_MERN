import React, { memo, useCallback, useEffect, useMemo } from "react";
import {
  AccordionSummaryHeader,
  FilterInput,
  FilterInputValue,
  StyledFilterDropdownWrapper,
} from "../Styles/FilterDropdown";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  handleClearFilters,
  handleSubfilterChange,
  setFilterQueryParam,
} from "../Redux/Product-Store/Product-Slice";

const FilterDropdown = memo(({ filter }) => {
  let { productType, subFilterStates, filterQueryValue } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleChange = useCallback(() => setOpen(!open), [open]);

  // const subFilters = useMemo(() => filter[1]?.flat(), [filter]);

  // const handleFilterValue = (event, filter, subFilter) => {
  //   // const { name, value } = event.target;
  //   const query = `filterQueryValue[]=${filter}=${subFilter}`;
  //   filterQueryValue = filterQueryValue + "&" + query;

  //   dispatch(setFilterQueryParam(filterQueryValue));
  //   dispatch(getProduct(productType + "?" + filterQueryValue));
  // };
  const handleFilterClear = () => {
    dispatch(handleClearFilters());
    dispatch(getProduct(productType));
  };
  const handleFilterValue = (event, filter, subFilter) => {
    const { name, value } = event.target;
    dispatch(handleSubfilterChange({ name, value, filter }));
    const query = `filterQueryValue[]=${filter}=${subFilter}`;
    filterQueryValue = filterQueryValue + "&" + query;

    dispatch(setFilterQueryParam(filterQueryValue));
    dispatch(getProduct(productType + "?" + filterQueryValue));
  };
  if (filter[1].length === 0 || typeof filter[1] === "number") return;
  // if (filter[1].length === 1 || typeof filter[1] === "number") return;
  return (
    <StyledFilterDropdownWrapper>
      <Accordion expanded={open} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionSummaryHeader>{filter[0]}</AccordionSummaryHeader>
        </AccordionSummary>
        <AccordionDetails>
          <button onClick={handleFilterClear}>clear</button>
          {filter[1]?.map((subFilter, i) => {
            if (subFilter.length === 0) return;
            return (
              <FilterInput key={i}>
                <Checkbox
                  name={subFilter}
                  value={subFilterStates[subFilter]}
                  checked={
                    !subFilterStates[subFilter]
                      ? false
                      : subFilterStates[subFilter]
                  }
                  // value={false}
                  size="small"
                  onChange={(e) => handleFilterValue(e, filter[0], subFilter)}
                />
                <FilterInputValue>{subFilter}</FilterInputValue>
              </FilterInput>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </StyledFilterDropdownWrapper>
  );
});

export default FilterDropdown;
