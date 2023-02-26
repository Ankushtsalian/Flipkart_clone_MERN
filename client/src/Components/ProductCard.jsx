import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  ProductCardAbsolutePriceContainer,
  ProductCardBodyContainer,
  ProductCardContainer,
  ProductCardContentContainer,
  ProductCardContentTitle,
  ProductCardImageContainer,
  ProductCardMainContainer,
  ProductCardMaxPriceContainer,
} from "../Styles/ProductCard";

const ProductCard = ({ product }) => {
  const {
    productImage,
    BRAND,
    productSubType,
    productAbsolutePrice,
    productMaxPrice,
    productDiscount,
    isFlipkartAssuredProduct,
    isFreeDeliveryEligible,
    isBankOfferEligible,
  } = product;

  return (
    <ProductCardMainContainer>
      <ProductCardContainer>
        <CardActionArea>
          <CardMedia component="img" image={productImage} alt="green iguana" />
          <CardContent>
            <ProductCardContentContainer>
              <ProductCardContentTitle>
                <p>{BRAND}</p>
              </ProductCardContentTitle>

              {isFlipkartAssuredProduct && (
                <ProductCardImageContainer src="images/Flipkart_assured.png" />
              )}

              <ProductCardBodyContainer>
                <ProductCardAbsolutePriceContainer>
                  ₹{productAbsolutePrice}
                </ProductCardAbsolutePriceContainer>
                <ProductCardMaxPriceContainer>
                  ₹{productMaxPrice}
                </ProductCardMaxPriceContainer>
                <p
                  style={{
                    marginLeft: "5px",
                    color: "var( --color-offer-green)",
                  }}
                >
                  {productDiscount}%
                </p>
              </ProductCardBodyContainer>

              <div>
                <p>{isFreeDeliveryEligible && "Free delivery"}</p>
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  color: "var( --color-offer-green)",
                }}
              >
                <p>{isBankOfferEligible && "Bank Offer"}</p>
              </div>
            </ProductCardContentContainer>
          </CardContent>
        </CardActionArea>
      </ProductCardContainer>
    </ProductCardMainContainer>
  );
};

export default React.memo(ProductCard);
