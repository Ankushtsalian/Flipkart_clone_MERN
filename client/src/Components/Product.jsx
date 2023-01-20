import { color } from "@mui/system";
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
  const productMenu = [
    "Electronics",
    "TVs & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports, Books & More",
    "Flights",
    "Offer zone",
  ];
  return (
    <>
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
    </>
  );
};

export default Product;
