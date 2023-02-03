import React from "react";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterContainer,
  FooterValue,
  FooterValueSvg,
  FooterNav,
} from "../Styles/Footer";
import { MainContainer } from "../Styles/Navbar";
import { footerData } from "../Utils/footerData";

const Footer = () => {
  return (
    <MainContainer>
      <FooterWrapper>
        <FooterContainer>
          {footerData.map((data, index) => {
            return (
              <FooterNav key={index}>
                {data?.svg && (
                  <FooterValueSvg src={data?.svg} alt="./Assets/Footer1.svg" />
                )}
                {data.value && <FooterValue>{data.value}</FooterValue>}
              </FooterNav>
            );
          })}
        </FooterContainer>
      </FooterWrapper>
    </MainContainer>
  );
};

export default Footer;
