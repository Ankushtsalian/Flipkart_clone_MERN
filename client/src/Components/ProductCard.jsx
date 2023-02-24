import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
    <div
      style={{
        width: "25%",
        Height: "500px",
        padding: "1px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={productImage} alt="green iguana" />
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                fontSize: "14px",
                // height: "150px",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0",
                  }}
                >
                  {BRAND}
                </p>
              </div>

              {isFlipkartAssuredProduct && (
                <img
                  style={{
                    width: "100px",
                    margin: "10px 0",
                    height: "30px",
                  }}
                  src="images/Flipkart_assured.png"
                />
              )}
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    maxWidth: "90%",
                    flexWrap: "wrap",
                    fontSize: "16px",
                  }}
                >
                  <p
                    style={{
                      marginRight: "5px",

                      fontWeight: "bold",
                    }}
                  >
                    ₹{productAbsolutePrice}
                  </p>
                  <p
                    style={{
                      margin: "0 5px",
                      textDecorationLine: "line-through",
                    }}
                  >
                    ₹{productMaxPrice}
                  </p>
                  <p
                    style={{
                      marginLeft: "5px",
                      color: "var( --color-offer-green)",
                    }}
                  >
                    {productDiscount}%
                  </p>
                </div>
              </div>
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
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default React.memo(ProductCard);
