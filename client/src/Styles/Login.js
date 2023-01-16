import styled from "styled-components";

const StyledLoginContainerWrapper = styled.div`
  min-height: 100vh;
  z-index: 12;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
`;

const StyledLoginContainer = styled.div`
  margin: 0 auto;
  height: 528px;
  max-width: 750px;
  min-width: 650px;
  color: #fff;
  z-index: 12;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  color: #000;
`;

const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand-blue);
  color: var(--color-white-bg);
  padding: 40px 33px;
  width: 40%;
  background-image: url(${(props) => props.LoginImg});
  background-position: center 85%;
  background-repeat: no-repeat;
`;

const LoginTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
`;
const LoginDescription = styled.div`
  font-size: 18px;
  margin-top: 16px;
  line-height: 150%;
  color: var(--color-grey-grade12);
`;

export {
  StyledLoginContainer,
  StyledLoginContainerWrapper,
  LoginTitleContainer,
  LoginTitle,
  LoginDescription,
};
