import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Product = () => {
  return (
    <div style={{ position: "relative", top: "57px", bottom: "57px" }}>
      <Carousel autoPlay>
        <div>
          <img alt="" src="/images/BannerHeader1.jpg" />
        </div>
        <div>
          <img alt="" src="/images/BannerHeader1.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Product;
