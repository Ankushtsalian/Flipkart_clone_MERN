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

const ProductCardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
`;

const ProductCardContentTitle = styled.div`
  & p {
    margin: 0;
  }
`;

export {
  ProductCardMainContainer,
  ProductCardContainer,
  ProductCardContentContainer,
  ProductCardContentTitle,
};
