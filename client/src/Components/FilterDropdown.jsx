import React, { memo, useCallback, useMemo } from "react";
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

const FilterDropdown = memo(({ filter }) => {
  const [open, setOpen] = useState(false);
  // const [keys] = filter;
  console.log(filter);
  const handleChange = useCallback(() => setOpen(!open), [open]);

  // const subFilters = useMemo(() => filter[1]?.flat(), [filter]);

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
          {filter[1]?.map((subFilter, i) => {
            if (subFilter.length === 0) return;
            return (
              <FilterInput key={i}>
                <Checkbox size="small" />
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
