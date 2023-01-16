import React from "react";
import { StyledLoginContainer, StyledLoginContainerdiv } from "../Styles/Login";
import LoginImg from "../Assets/Login.png";
const Login = () => {
  return (
    <>
      <StyledLoginContainer>
        <StyledLoginContainerdiv>
          <div className="span">
            <span className="LoginTitle">Login</span>
            <span className="LoginDescription">
              Get access to your Orders, Wishlist and Recommendations
            </span>
          </div>
          <div>Login</div>
        </StyledLoginContainerdiv>
      </StyledLoginContainer>
    </>
  );
  //    <StyledLoginContainer>
};

export default Login;
