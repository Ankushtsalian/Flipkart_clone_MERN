import React from "react";
import {
  LoginDescription,
  LoginTitle,
  LoginTitleContainer,
  StyledLoginContainer,
  StyledLoginContainerWrapper,
} from "../Styles/Login";
import LoginImg from "../Assets/Login.png";
const Login = () => {
  return (
    <>
      <StyledLoginContainerWrapper>
        <StyledLoginContainer>
          <LoginTitleContainer LoginImg={LoginImg}>
            <LoginTitle>Login</LoginTitle>
            <LoginDescription>
              Get access to your Orders, Wishlist and Recommendations
            </LoginDescription>
          </LoginTitleContainer>
          <div>Login</div>
        </StyledLoginContainer>
      </StyledLoginContainerWrapper>
    </>
  );
  //    <StyledLoginContainer>
};

export default Login;
