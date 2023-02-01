import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = ({ product }) => {
  const {
    productImage,
    productDescription,
    productAbsolutePrice,
    productMaxPrice,
    productDiscount,
    isFlipkartAssuredProduct,
    isFreeDeliveryEligible,
    isBankOfferEligible,
  } = product;
  console.log(
    productImage,
    productDescription,
    productAbsolutePrice,
    productMaxPrice,
    productDiscount,
    isFlipkartAssuredProduct,
    isFreeDeliveryEligible,
    isBankOfferEligible
  );
  return (
    <div style={{ width: "25%", Height: "500px", padding: "10px 5px 0" }}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardActionArea>
          <CardMedia component="img" image={productImage} alt="green iguana" />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}

            <div>
              <div>{productDescription}</div>
              <p>{productAbsolutePrice}</p>
              <div>
                <span>{productMaxPrice}</span>
                <span>{productDiscount}</span>
                <span>{isFlipkartAssuredProduct}</span>
              </div>
              <p>{isFreeDeliveryEligible}</p>
              <p>{isBankOfferEligible}</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
