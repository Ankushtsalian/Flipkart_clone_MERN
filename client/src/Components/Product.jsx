import { Hidden } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MainContainer } from "../Styles/Navbar";
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
      {/* <div
        style={{
          minWidth: "978px",
          border: "3px solid red",
          position: "relative",
          top: "6rem",
        }}
      > */}
      <div
        style={{
          minWidth: "978px",
          width: "100%",
          border: "2px solid green",
          padding: "20px",
          minHeight: "50vh",
          maxWidth: "1680px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          margin: "0 auto",
          gap: "20px",
          position: "relative",
          minHeight: "100%",
          top: "6rem",
          flex: "0 0 auto",
          flexWrap: "wrap",
          // overflow: "scroll",
          // bottom: "300px",
          // marginBottom: "100px",
          // zIndex: "999",
        }}
      >
        <div
          style={{
            minWidth: "100%",
            border: "2px solid black",
            margin: "0 auto",
            // overflow: "scroll",
            minHeight: "100%",
          }}
        >
          11StyledNavbarWrapper11, LogoContainer, NavbarContainer, NavbarMenu,
          NavbarInputMenu, Cart, ShoppingCartIconContainer, InputContainer,
          MainContainer,StyledNavbarWrapper, LogoContainer, NavbarContainer,
          NavbarMenu, NavbarInputMenu, Cart, ShoppingCartIconContainer,
          InputContainer, MainContainer,StyledNavbarWrapper, LogoContainer,
          NavbarContainer, NavbarMenu, NavbarInputMenu, Cart,
          ShoppingCartIconContainer, InputContainer,
          MainContainer,StyledNavbarWrapper, LogoContainer, NavbarContainer,
          NavbarMenu, NavbarInputMenu, Cart, ShoppingCartIconContainer,
          InputContainer, MainContainer,StyledNavbarWrapper, LogoContainer,
          NavbarContainer, NavbarMenu, NavbarInputMenu, Cart,
          ShoppingCartIconContainer, InputContainer, MainContainer,
          StyledNavbarWrapper, LogoContainer, NavbarContainer, NavbarMenu,
          NavbarInputMenu, Cart, ShoppingCartIconContainer, InputContainer,
          MainContainer,StyledNavbarWrapper, LogoContainer, NavbarContainer,
          NavbarMenu, NavbarInputMenu, Cart, ShoppingCartIconContainer,
          InputContainer, MainContainer,StyledNavbarWrapper, LogoContainer,
          NavbarContainer, NavbarMenu, NavbarInputMenu, Cart,
          ShoppingCartIconContainer, InputContainer,
          MainContainer,StyledNavbarWrapper, LogoContainer, NavbarContainer,
          NavbarMenu, NavbarInputMenu, Cart, ShoppingCartIconContainer,
          InputContainer, MainContainer,StyledNavbarWrapper, LogoContainer,
          NavbarContainer, NavbarMenu, NavbarInputMenu, Cart,
          ShoppingCartIconContainer, InputContainer, 11MainContainer,
        </div>
        <div
          style={{
            minWidth: "100%",

            border: "2px solid blue",
            margin: "0 auto",
            minHeight: "100%",
          }}
        >
          StyledNavbarWrapper, LogoContainer, NavbarContainer, NavbarMenu,
          NavbarInputMenu, Cart, ShoppingCartIconContainer, InputContainer,
          MainContainer,StyledNavbarWrapper, LogoContainer, NavbarContainer,
          NavbarMenu, NavbarInputMenu, Cart, ShoppingCartIconContainer,
          InputContainer, MainContainer,StyledNavbarWrapper, LogoContainer,
          NavbarContainer, NavbarMenu, NavbarInputMenu, Cart,
          ShoppingCartIconContainer, InputContainer,
          MainContainer,StyledNavbarWrapper, LogoContainer, NavbarContainer,
          NavbarMenu, NavbarInputMenu, Cart, ShoppingCartIconContainer,
          InputContainer, MainContainer,StyledNavbarWrapper, LogoContainer,
          NavbarContainer, NavbarMenu, NavbarInputMenu, Cart,
          ShoppingCartIconContainer, InputContainer, MainContainer,
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Product;
