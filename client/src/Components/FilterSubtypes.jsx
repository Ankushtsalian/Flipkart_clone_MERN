import { Checkbox } from "@mui/material";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { FilterInput, FilterInputValue } from "../Styles/FilterDropdown";
import {
  getProduct,
  handleSubfilterChange,
  setFilterQueryParam,
} from "../Redux/Product-Store/Product-Slice";
import { useDispatch } from "react-redux";
const FilterSubtypes = ({ subFilter, i, filter }) => {
  const { subFilterStates, productType, filterQueryValue } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

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
