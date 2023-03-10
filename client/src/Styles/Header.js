import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderCarousel from "../Components/HeaderCarousel";

const HeaderWrapper = styled.header`
  position: relative;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
  z-index: 3;
  background-color: var(--color-white-bg);
  height: 112px;
  min-width: 100%;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1248px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div {
    min-width: 70px;
  }
`;

const HeaderValue = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: var(--color-black);
  font-weight: bold;

  :hover {
    color: var(--color-dark-blue1);
  }
`;
const HeaderNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
`;
const HeaderValueSvg = styled.img`
  object-fit: fill;
  max-height: 70px;
`;
const HeaderCarouselContainer = styled(HeaderCarousel)`
  min-width: var(--width-min);
  max-height: 70px;
  width: 100%;
  z-index: 0;
  margin: 0 !important;
  & .carousel .thumbs {
    display: none;
  }
  & .carousel .control-prev.control-arrow {
    z-index: 1;
    height: 10px !important;
  }
`;

export {
  HeaderWrapper,
  HeaderNav,
  HeaderContainer,
  HeaderValue,
  HeaderValueSvg,
  HeaderCarouselContainer,
};
