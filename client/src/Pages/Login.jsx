import React from "react";
import {
  EmailInputFieldContainer,
  LoginDescription,
  LoginTitle,
  LoginTitleContainer,
  StyledLoginContainer,
  StyledLoginContainerWrapper,
  TextFieldContainer,
  TextFieldWrapper,
  RegisterLink,
  StyledCloseIcon,
  StyledLoginContainerWrapperdiv,
} from "../Styles/Login";
import LoginImg from "../Assets/Login.png";

const Login = () => {
  return (
    <>
      <StyledLoginContainerWrapper>
        <StyledLoginContainerWrapperdiv>
          <StyledCloseIcon />
          <StyledLoginContainer>
            <LoginTitleContainer LoginImg={LoginImg}>
              <LoginTitle>Login</LoginTitle>
              <LoginDescription>
                Get access to your Orders, Wishlist and Recommendations
              </LoginDescription>
            </LoginTitleContainer>
            <TextFieldWrapper>
              <EmailInputFieldContainer>
                <TextFieldContainer
                  id="standard-basic"
                  label="Enter Email/Mobile number"
                  variant="standard"
                />
                <p>
                  By continuing, you agree to Flipkart's
                  <a href="#">Terms of Use</a> and
                  <a href="#">Privacy Policy.</a>
                </p>
                <button>Password</button>
              </EmailInputFieldContainer>
              <RegisterLink>
                New to Flikart? <a href="#">Create an account</a>
              </RegisterLink>
            </TextFieldWrapper>
          </StyledLoginContainer>
        </StyledLoginContainerWrapperdiv>
      </StyledLoginContainerWrapper>
    </>
  );
  //    <StyledLoginContainer>
};

export default Login;
