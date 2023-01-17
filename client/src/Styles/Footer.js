import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: relative;
  margin-top: 56px;
  border: 1px solid black;
  bottom: 0;
  z-index: 901;
  background-color: var(--color-grey-grade5);
  color: var(--color-white-bg);
  height: 80px;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1248px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterValue = styled.div`
  margin-left: 5px;
`;
const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
`;
const FooterValueSvg = styled.img`
  margin-right: 5px;
`;

export {
  FooterWrapper,
  FooterNav,
  FooterContainer,
  FooterValue,
  FooterValueSvg,
};
