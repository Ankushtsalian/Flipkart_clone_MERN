import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  ProductMenu,
  ProductMenuContainer,
  ProductMenuWrapper,
  StyledProductHeaderWrapper,
} from "../Styles/ProductHeader";
import Chevron from "./Chevron";
import ProductList from "./ProductList";
const Product = () => {
  return (
    <>
      <StyledProductHeaderWrapper>
        <ProductMenuWrapper>
          {new Array(5).fill(0).map((_, i) => (
            <ProductMenuContainer key={i}>
              <button>
                Electronics
                <Chevron />
              </button>
              <ProductList />
            </ProductMenuContainer>
          ))}
        </ProductMenuWrapper>
      </StyledProductHeaderWrapper>
    </>
  );
};

export default Product;
