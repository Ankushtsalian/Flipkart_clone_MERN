import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderNav,
  HeaderContainer,
  HeaderValue,
  HeaderValueSvg,
  HeaderCarouselContainer,
} from "../Styles/Header";
import { MainContainer } from "../Styles/Navbar";

import { headerData } from "../Utils/headerData";
const Header = () => {
  return (
    <MainContainer>
      <HeaderWrapper>
        <HeaderContainer>
          {headerData.map((data, index) => {
            return (
              <div key={index}>
                <HeaderNav key={index}>
                  {data?.svg && (
                    <HeaderValueSvg
                      src={data?.svg}
                      alt="./Assets/Footer1.svg"
                    />
                  )}
                  {data.value && (
                    <HeaderValue>
                      <Link to="/product">{data.value}</Link>
                    </HeaderValue>
                  )}
                </HeaderNav>
              </div>
            );
          })}
        </HeaderContainer>
      </HeaderWrapper>

      <HeaderCarouselContainer />
    </MainContainer>
  );
};

export default Header;
