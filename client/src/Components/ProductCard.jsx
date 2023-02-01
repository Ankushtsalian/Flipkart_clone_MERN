import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = () => {
  return (
    <div style={{ width: "25%", minHeight: "500px", padding: "20px" }}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/f/p/-original-imaghxenhnpyhn5u.jpeg?q=70"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
