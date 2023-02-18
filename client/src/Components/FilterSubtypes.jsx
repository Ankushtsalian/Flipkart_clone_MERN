import { Checkbox } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { FilterInput, FilterInputValue } from "../Styles/FilterDropdown";

const FilterSubtypes = ({ subFilter, i, filter }) => {
  const { subFilterStates } = useSelector((state) => state.product);
  return (
    <FilterInput key={i}>
      <Checkbox
        name={subFilter}
        value={
          subFilterStates[filter] && subFilterStates[filter][subFilter]
            ? subFilterStates[filter][subFilter]
            : false
        }
        checked={
          subFilterStates[filter] && subFilterStates[filter][subFilter]
            ? subFilterStates[filter][subFilter]
            : false
        }
        size="small"
        onChange={(e) => handleFilter(e, filter, subFilter)}
      />
      <FilterInputValue>{subFilter}</FilterInputValue>
    </FilterInput>
  );
};

export default FilterSubtypes;
