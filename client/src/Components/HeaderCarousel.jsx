import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselWrapper } from "../Styles/HeaderCarousel";

const HeaderCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel autoPlay>
        <img alt="/images/BannerHeader1.jpg" src="/images/BannerHeader1.jpg" />
        <img alt="/images/BannerHeader1.jpg" src="/images/BannerHeader1.jpg" />
      </Carousel>
    </CarouselWrapper>
  );
};

export default HeaderCarousel;
