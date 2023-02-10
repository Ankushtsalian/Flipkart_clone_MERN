import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MainContainer } from "../Styles/Navbar";
import {
  ProductMenuContainer,
  ProductMenuWrapper,
  StyledProductHeaderWrapper,
} from "../Styles/ProductHeader";
import Chevron from "../Components/Chevron";
import ProductLayout from "../Components/ProductLayout";
import ProductList from "../Components/ProductList";
import { productMenu } from "../Utils/productData";

const Product = () => {
  return (
    <>
      <MainContainer>
        <StyledProductHeaderWrapper>
          <ProductMenuWrapper>
            {productMenu.map((product, i) => (
              <ProductMenuContainer key={i}>
                <button>
                  {product}
                  <Chevron />
                </button>
                <ProductList />
              </ProductMenuContainer>
            ))}
          </ProductMenuWrapper>
        </StyledProductHeaderWrapper>
      </MainContainer>
      <ProductLayout />
    </>
  );
};

export default Product;
