import React from "react";
// import {chevron}
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  ProductMenu,
  ProductMenuContainer,
  ProductMenuWrapper,
  StyledProductHeaderWrapper,
} from "../Styles/ProductHeader";
const Product = () => {
  return (
    <>
      <StyledProductHeaderWrapper>
        <ProductMenuWrapper>
          <ProductMenuContainer>
            <button>
              Services
              <img src="/images/chevron.svg" alt="" />
            </button>
            <ProductMenu>
              <button>UX/UI Design</button>
              <button>Web Applications</button>
              <button>SEO Advice</button>
            </ProductMenu>
          </ProductMenuContainer>
        </ProductMenuWrapper>
      </StyledProductHeaderWrapper>
    </>
  );
};

export default Product;
