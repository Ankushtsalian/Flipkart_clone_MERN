import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MainContainer } from "../Styles/Navbar";

const HeaderCarousel = () => {
  return (
    <div
      style={{
        marginTop: "8px",
        maxHeight: "500px",
        overflow: "hidden",
        minWidth: "var(--width-min)",
      }}
    >
      <Carousel autoPlay>
        <img alt="/images/BannerHeader1.jpg" src="/images/BannerHeader1.jpg" />
        <img alt="/images/BannerHeader1.jpg" src="/images/BannerHeader1.jpg" />
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
