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

  const handleChange = useCallback(() => setOpen(!open), [open]);

  const subFilters = useMemo(() => filter[1]?.flat(), [filter]);

  console.log(filter[1]?.flat());
  if (filter[1]?.flat().length === 1) return;
  return (
    <StyledFilterDropdownWrapper>
      <Accordion expanded={open} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionSummaryHeader>
            {filter[0]}
            {/* {filter[1][0]?.length !== 0 && filter[0]} */}
          </AccordionSummaryHeader>
        </AccordionSummary>
        <AccordionDetails>
          {subFilters?.map((subFilter, i) => (
            <FilterInput key={i}>
              <Checkbox size="small" />
              <FilterInputValue>{subFilter}</FilterInputValue>
            </FilterInput>
          ))}
        </AccordionDetails>
      </Accordion>
    </StyledFilterDropdownWrapper>
  );
});

export default FilterDropdown;
