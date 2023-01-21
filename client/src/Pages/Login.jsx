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
import { useDispatch, useSelector } from "react-redux";
import { handleLoginClose } from "../Redux/Auth-Store/Auth-Slice";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <StyledLoginContainerWrapper>
      <StyledLoginContainerWrapperdiv>
        <StyledCloseIcon onClick={() => dispatch(handleLoginClose())} />
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
  );
};

export default Login;
