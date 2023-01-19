import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeaderCarousel = () => {
  return (
    <div style={{ marginTop: "8px", maxHeight: "500px", overflow: "hidden" }}>
      <Carousel autoPlay>
        <div style={{ marginTop: "58px" }}>
          <img alt="" src="/images/BannerHeader1.jpg" />
        </div>
        <div style={{ marginTop: "58px" }}>
          <img alt="" src="/images/BannerHeader1.jpg" />
        </div>
      </Carousel>{" "}
    </div>
  );
};

export default HeaderCarousel;
