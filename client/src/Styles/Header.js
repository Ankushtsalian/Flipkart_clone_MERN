import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderCarousel from "../Components/HeaderCarousel";

const HeaderWrapper = styled.header`
  position: relative;
  top: 57px;
  bottom: 57px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
  /* bottom: 0; */
  z-index: 0;
  background-color: var(--color-white-bg);
  /* color: var(--color-white-bg); */
  height: 112px;
  /* width: 100%; */
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1248px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderValue = styled.a`
  cursor: pointer;
  font-size: 14px;
  color: var(--color-black);
  :hover {
    color: var(--color-dark-blue1);
  }
`;
const HeaderNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
`;
const HeaderValueSvg = styled.img`
  object-fit: fill;
  max-width: 70px;
  max-height: 70px;
`;
const HeaderCarouselContainer = styled(HeaderCarousel)`
  object-fit: fill;
  max-width: 70px;
  max-height: 70px;
  & .carousel .thumbs {
    display: none;
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
