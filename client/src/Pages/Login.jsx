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
} from "../Styles/Login";
import LoginImg from "../Assets/Login.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
          <TextFieldWrapper>
            <EmailInputFieldContainer>
              <TextFieldContainer
                id="standard-basic"
                label="Enter Email/Mobile number"
                variant="standard"
              />
              <p>
                By continuing, you agree to Flipkart's{" "}
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
      </StyledLoginContainerWrapper>
    </>
  );
  //    <StyledLoginContainer>
};

export default Login;
