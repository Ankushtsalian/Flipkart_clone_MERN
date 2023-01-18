import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterValue,
  FooterValueSvg,
  FooterNav,
} from "../Styles/Footer";
// import Footer1 from "../Assets/Footer1.svg";
// import Footer2 from "../Assets/Footer2.svg";
// import Footer3 from "../Assets/Footer3.svg";
// import Footer4 from "../Assets/Footer4.svg";
// import Footer5 from "../Assets/Footer5.svg";
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
