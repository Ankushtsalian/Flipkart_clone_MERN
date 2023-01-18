import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterValue,
  FooterValueSvg,
  FooterNav,
} from "../Styles/Footer";

import { footerData } from "../Utils/footerData";
const Footer = () => {
  return (
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
  );
};

export default Footer;
