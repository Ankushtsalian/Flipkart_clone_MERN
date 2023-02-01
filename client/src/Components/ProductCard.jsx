import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = () => {
  return (
    <div style={{ width: "25%", minHeight: "500px", padding: "10px 5px" }}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://rukminim1.flixcart.com/image/612/612/kbv4fww0/cases-covers/back-cover/k/g/d/fashionury-fs-sam-a9-20-tra-original-imaft4ypkbpgzg2r.jpeg?q=70"
            alt="green iguana"
          />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}

            <div>
              <p>Fashionury Back Cover for Oppo A5 2020, Oppo</p>
              <p>ASSURED</p>
              <div>
                <span>₹149</span>
                <span>₹449</span>
                <span>70% off</span>
              </div>
              <p>Free delivery</p>
              <p>Bank Offer</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
