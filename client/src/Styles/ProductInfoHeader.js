import styled from "styled-components";

const StyledProductInfoHeaderWrapper = styled.section`
  border-bottom: 1px solid black;
  padding: 10px 20px 0 10px;
  font-size: 14px;
`;
const ProductPath = styled.div`
  padding: 0 10px 0 0;
`;
const ProductMenuHeader = styled.div`
  padding: 10px 10px 0 0;
`;
const ProductHeaderFilterContainer = styled.div`
  display: flex;
`;

const ProductHeaderFilterTitleContainer = styled.div`
  cursor: pointer;
  padding: 2px 0;
  cursor: pointer;
`;
const ProductHeaderFilterTitle = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 5px 0 0;
  text-align: center;
`;

const ProductHeaderFilterValueContainer = styled.div`
  padding: 0 15px;
  cursor: pointer;
`;
const ProductHeaderFilterValue = styled.div`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 10px 2px;
  text-align: center;
`;

export {
  StyledProductInfoHeaderWrapper,
  ProductPath,
  ProductMenuHeader,
  ProductHeaderFilterContainer,
  ProductHeaderFilterTitleContainer,
  ProductHeaderFilterTitle,
  ProductHeaderFilterValueContainer,
  ProductHeaderFilterValue,
};
