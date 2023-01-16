import React from "react";
import { StyledLoginContainer, StyledLoginContainerdiv } from "../Styles/Login";
import LoginImg from "../Assets/Login.png";
const Login = () => {
  return (
    <>
      <StyledLoginContainer>
        <StyledLoginContainerdiv>
          <div className="span">
            <span>Login</span>
            <span>Get access to your Orders, Wishlist and Recommendations</span>
            <img src={LoginImg} alt="Login" />
          </div>
          <div>Login</div>
        </StyledLoginContainerdiv>
      </StyledLoginContainer>
    </>
  );
  //    <StyledLoginContainer>
};

export default Login;
