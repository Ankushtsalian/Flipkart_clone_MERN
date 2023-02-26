import { Card } from "@mui/material";
import styled from "styled-components";

const ProductCardMainContainer = styled.div`
  width: 25%;
  height: 500px;
  padding: 1px;
`;

const ProductCardContainer = styled(Card)`
  width: 100%;
  height: 100%;
`;

export { ProductCardMainContainer, ProductCardContainer };
