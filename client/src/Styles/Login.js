import styled from "styled-components";
import TextField from "@mui/material/TextField";

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
  max-width: 650px;
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

const TextFieldContainer = styled(TextField)`
  && {
    font-size: 22px;
    margin-bottom: 20px;
    width: 100%;
  }
`;
const TextFieldWrapper = styled.div`
  padding: 50px 30px 12px;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & a {
    color: var(--color-brand-blue);
  }
`;

const EmailInputFieldContainer = styled.div`
  && {
    font-size: 12px;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const RegisterLink = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  & a {
    color: var(--color-brand-blue);
  }
`;

export {
  StyledLoginContainer,
  StyledLoginContainerWrapper,
  LoginTitleContainer,
  LoginTitle,
  LoginDescription,
  TextFieldContainer,
  TextFieldWrapper,
  EmailInputFieldContainer,
  RegisterLink,
};
