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
  handleName,
  handlePassword,
  loginUser,
  registerUser,
  resetPassword,
  verifyForgotPassword,
} from "../Redux/Auth-Store/Auth-Slice";
import { useQuery } from "../Hooks/useQuery";

const Login = () => {
  const {
    isLoginPage,
    isForgotPassword,
    email,
    isResetPassword,
    password,
    name,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const query = useQuery();

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
              {!isForgotPassword && !isResetPassword && !isLoginPage && (
                <TextFieldContainer
                  autoComplete="off"
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  required
                  onChange={(event) => dispatch(handleName(event.target.value))}
                />
              )}
              {!isResetPassword && (
                <TextFieldContainer
                  autoComplete="off"
                  id="standard-basic"
                  label="Enter Email/Mobile number"
                  variant="standard"
                  required
                  value={email}
                  onChange={(event) =>
                    dispatch(handleEmail(event.target.value))
                  }
                />
              )}
              {!isForgotPassword && (
                <TextFieldContainer
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  required
                  value={password}
                  onChange={(event) =>
                    dispatch(handlePassword(event.target.value))
                  }
                />
              )}
              <p>
                By continuing, you agree to Flipkart's
                <a href="#">Terms of Use</a> and
                <a href="#">Privacy Policy.</a>
              </p>
              {!isForgotPassword && !isResetPassword && isLoginPage && (
                <button
                  onClick={() => dispatch(loginUser({ email, password }))}
                >
                  Login
                </button>
              )}
              {!isForgotPassword && !isResetPassword && !isLoginPage && (
                <button
                  onClick={() =>
                    dispatch(registerUser({ name, email, password }))
                  }
                >
                  Create an account
                </button>
              )}
              {isResetPassword && (
                <button
                  onClick={() =>
                    dispatch(
                      resetPassword({
                        token: query.get("token"),
                        email: query.get("email"),
                        password,
                      })
                    )
                  }
                >
                  Reset Password
                </button>
              )}

              {isForgotPassword && (
                <button
                  onClick={() => dispatch(verifyForgotPassword({ email }))}
                >
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
