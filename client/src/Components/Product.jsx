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
      {/* <StyledProductHeaderWrapper>
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
      <div
        style={{
          // display: "flex",
          minHeight: "500px",
          width: "100%",
          position: "relative",
          margin: "0 auto",
          top: "30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            minHeight: "500px",
            width: "100%",
            border: "30px solid black",
            margin: "0 50px",
            // position: "relative",
            top: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              minHeight: "200px",
              // width: "20%",
              flex: "0 0 30%",
              marginRight: "50px",
              minWidth: "70px",
              border: "1px solid red",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              minHeight: "200px",
              // width: "80%",
              flex: "0 0 60%",
              minWidth: "70px",

              border: "1px solid green",
            }}
          ></div>
        </div>
        <div></div>
        <div></div>
      </div> */}
    </>
  );
};

export default Product;
