import React from "react";
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

const FilterDropdown = ({ filter }) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);
  return (
    <StyledFilterDropdownWrapper>
      <Accordion expanded={open} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionSummaryHeader>{filter}</AccordionSummaryHeader>
        </AccordionSummary>
        <AccordionDetails>
          <FilterInput>
            <Checkbox size="small" />
            <FilterInputValue>realme</FilterInputValue>
          </FilterInput>
          <FilterInput>
            <Checkbox size="small" />
            <FilterInputValue>realme</FilterInputValue>
          </FilterInput>
          <FilterInput>
            <Checkbox size="small" />
            <FilterInputValue>realme</FilterInputValue>
          </FilterInput>
        </AccordionDetails>
      </Accordion>
    </StyledFilterDropdownWrapper>
  );
};

export default FilterDropdown;
