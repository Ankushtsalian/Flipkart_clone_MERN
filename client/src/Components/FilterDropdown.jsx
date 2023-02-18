import React, { memo, useCallback, useState } from "react";
import { Checkbox } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionSummaryHeader,
  FilterInput,
  FilterInputValue,
  StyledFilterDropdownWrapper,
} from "../Styles/FilterDropdown";
import {
  getProduct,
  handleClearFilters,
  handleSubfilterChange,
  setFilterQueryParam,
} from "../Redux/Product-Store/Product-Slice";
import { useDispatch, useSelector } from "react-redux";

const FilterDropdown = memo(({ filter }) => {
  const [open, setOpen] = useState(false);

  const { productType, subFilterStates, filterQueryValue } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleClear = useCallback(() => {
    dispatch(handleClearFilters());
    dispatch(getProduct(productType));
  }, [dispatch, productType]);

  const handleFilter = useCallback(
    (event, filter, subFilter) => {
      const { name, value } = event.target;

      dispatch(handleSubfilterChange({ name, value, filter }));

      const query = `filterQueryValue[]=${filter}=${subFilter}`;
      const newFilterQueryValue = filterQueryValue + "&" + query;

      dispatch(setFilterQueryParam(newFilterQueryValue));
      dispatch(getProduct(productType + "?" + newFilterQueryValue));
    },
    [dispatch, filterQueryValue, productType]
  );
  // console.log(subFilterStates);
  if (filter[1].length === 0 || typeof filter[1] === "number") {
    return null;
  }

  return (
    <StyledFilterDropdownWrapper>
      <Accordion expanded={open} onChange={handleToggle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionSummaryHeader>{filter[0]}</AccordionSummaryHeader>
        </AccordionSummary>
        <AccordionDetails>
          <button onClick={handleClear}>clear</button>
          {filter[1]?.map((subFilter, i) => {
            if (subFilter.length === 0) {
              return null;
            }

            console.log(
              subFilterStates[filter[0]] &&
                subFilterStates[filter[0]][subFilter]
                ? subFilterStates[filter[0]][subFilter]
                : false
            );
            return (
              <FilterInput key={i}>
                <Checkbox
                  name={subFilter}
                  value={
                    subFilterStates[filter[0]] &&
                    subFilterStates[filter[0]][subFilter]
                      ? subFilterStates[filter[0]][subFilter]
                      : false
                  }
                  checked={
                    subFilterStates[filter[0]] &&
                    subFilterStates[filter[0]][subFilter]
                      ? subFilterStates[filter[0]][subFilter]
                      : false
                  }
                  size="small"
                  onChange={(e) => handleFilter(e, filter[0], subFilter)}
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
