import React, { memo, useCallback, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionSummaryHeader,
  StyledFilterDropdownWrapper,
} from "../Styles/FilterDropdown";
import {
  getProduct,
  handleClearFilters,
  handleSubfilterChange,
  setFilterQueryParam,
} from "../Redux/Product-Store/Product-Slice";
import { useDispatch, useSelector } from "react-redux";
import FilterSubtypes from "./FilterSubtypes";

const FilterDropdown = memo(({ filter }) => {
  const [open, setOpen] = useState(false);

  const { productType } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleClear = useCallback(() => {
    dispatch(handleClearFilters());
    dispatch(getProduct(productType));
  }, [dispatch, productType]);

  // const handleFilter = useCallback(
  //   (event, filter, subFilter) => {
  //     const { name, value } = event.target;

  //     dispatch(handleSubfilterChange({ name, value, filter }));

  //     const query = `filterQueryValue[]=${filter}=${subFilter}`;
  //     const newFilterQueryValue = filterQueryValue + "&" + query;

  //     dispatch(setFilterQueryParam(newFilterQueryValue));
  //     dispatch(getProduct(productType + "?" + newFilterQueryValue));
  //   },
  //   [dispatch, filterQueryValue, productType]
  // );
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
          {filter[1]?.map((subFilter, index) => {
            if (subFilter.length === 0) {
              return null;
            }

            return (
              <FilterSubtypes
                subFilter={subFilter}
                i={index}
                filter={filter[0]}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </StyledFilterDropdownWrapper>
  );
});

export default FilterDropdown;
