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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.375L6 9.375L7.075 8.3L12 13.25L16.925 8.325L18 9.4L12 15.375Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
            <ProductMenu>
              <button>UX/UI Design</button>
              <button>Web Applications</button>
              <button>SEO Advice</button>
            </ProductMenu>
          </ProductMenuContainer>
          <ProductMenuContainer>
            <button>
              Services
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.375L6 9.375L7.075 8.3L12 13.25L16.925 8.325L18 9.4L12 15.375Z"
                  fill="#F9F9F9"
                />
              </svg>
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
