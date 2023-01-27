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
import {
  handleEmail,
  handleForgotPassword,
  handleLoginClose,
  handleLoginSignupToggle,
  handleVerifyForgotPassword,
} from "../Redux/Auth-Store/Auth-Slice";

const Login = () => {
  const { isLoginPage, isForgotPassword } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <StyledLoginContainerWrapper>
      <StyledLoginContainerWrapperdiv>
        <StyledCloseIcon onClick={() => dispatch(handleLoginClose())} />
        <StyledLoginContainer>
          <LoginTitleContainer LoginImg={LoginImg}>
            {!isForgotPassword ? (
              <>
                <LoginTitle>
                  {isLoginPage ? "Login" : "Looks like you're new here!"}
                </LoginTitle>
                <LoginDescription>
                  Get access to your Orders, Wishlist and Recommendations
                </LoginDescription>
              </>
            ) : (
              <LoginDescription>Please verify you account</LoginDescription>
            )}
          </LoginTitleContainer>
          <TextFieldWrapper>
            <EmailInputFieldContainer>
              {!isForgotPassword && !isLoginPage && (
                <TextFieldContainer
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
              )}
              <TextFieldContainer
                id="standard-basic"
                label="Enter Email/Mobile number"
                variant="standard"
                onChange={(event) => dispatch(handleEmail(event.target.value))}
              />
              {!isForgotPassword && (
                <TextFieldContainer
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
              )}
              <p>
                By continuing, you agree to Flipkart's
                <a href="#">Terms of Use</a> and
                <a href="#">Privacy Policy.</a>
              </p>
              {!isForgotPassword &&
                (isLoginPage ? (
                  <button onClick={() => dispatch(handleLoginSignupToggle())}>
                    Login
                  </button>
                ) : (
                  <button onClick={() => dispatch(handleLoginSignupToggle())}>
                    Create an account
                  </button>
                ))}

              {isForgotPassword && (
                <button onClick={() => dispatch(handleVerifyForgotPassword())}>
                  Continue
                </button>
              )}

              {!isForgotPassword && (
                <span onClick={() => dispatch(handleForgotPassword())}>
                  Forgot Password
                </span>
              )}
            </EmailInputFieldContainer>
            <RegisterLink>
              {isLoginPage ? "New to Flikart?" : "Existing User!"}
              <button onClick={() => dispatch(handleLoginSignupToggle())}>
                {isLoginPage ? "Create an account" : "Login"}
              </button>
            </RegisterLink>
          </TextFieldWrapper>
        </StyledLoginContainer>
      </StyledLoginContainerWrapperdiv>
    </StyledLoginContainerWrapper>
  );
};

export default Login;
