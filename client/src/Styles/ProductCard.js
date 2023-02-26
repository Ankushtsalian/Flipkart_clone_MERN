import { Card } from "@mui/material";
import styled from "styled-components";

const ProductCardMainContainer = styled.div`
  width: 25%;
  height: 600px;
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

const ProductCardImageContainer = styled.img`
  width: 100px;
  margin: 10px 0;
  height: 30px;
`;

const ProductCardBodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  max-width: 90%;
  flex-wrap: wrap;
  font-size: 16px;
`;

const ProductCardAbsolutePriceContainer = styled.p`
  margin-right: 5px;

  font-weight: bold;
`;
const ProductCardMaxPriceContainer = styled.p`
  margin: 0 5px;
  text-decoration: line-through;
`;

export {
  ProductCardMainContainer,
  ProductCardContainer,
  ProductCardContentContainer,
  ProductCardContentTitle,
  ProductCardImageContainer,
  ProductCardBodyContainer,
  ProductCardAbsolutePriceContainer,
  ProductCardMaxPriceContainer,
};
