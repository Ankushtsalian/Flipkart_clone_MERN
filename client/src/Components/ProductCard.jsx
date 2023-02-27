import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  ProductBankOfferContainer,
  ProductCardAbsolutePriceContainer,
  ProductCardBodyContainer,
  ProductCardContainer,
  ProductCardContentContainer,
  ProductCardContentTitle,
  ProductCardImageContainer,
  ProductCardMainContainer,
  ProductCardMaxPriceContainer,
  ProductDiscountContainer,
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

                <ProductDiscountContainer>
                  {productDiscount}%
                </ProductDiscountContainer>
              </ProductCardBodyContainer>

              <p>{isFreeDeliveryEligible && "Free delivery"}</p>

              <ProductBankOfferContainer>
                <p>{isBankOfferEligible && "Bank Offer"}</p>
              </ProductBankOfferContainer>
            </ProductCardContentContainer>
          </CardContent>
        </CardActionArea>
      </ProductCardContainer>
    </ProductCardMainContainer>
  );
};

export default React.memo(ProductCard);
