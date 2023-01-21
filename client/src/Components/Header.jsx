import React from "react";
import {
  HeaderWrapper,
  HeaderNav,
  HeaderContainer,
  HeaderValue,
  HeaderValueSvg,
  HeaderCarouselContainer,
} from "../Styles/Header";

import { headerData } from "../Utils/headerData";
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          {headerData.map((data, index) => {
            return (
              <HeaderNav key={index}>
                {data?.svg && (
                  <HeaderValueSvg src={data?.svg} alt="./Assets/Footer1.svg" />
                )}
                {data.value && (
                  <HeaderValue href="/product">{data.value}</HeaderValue>
                )}
              </HeaderNav>
            );
          })}
        </HeaderContainer>
      </HeaderWrapper>

      {/* <HeaderCarouselContainer /> */}
    </>
  );
};

export default Header;
