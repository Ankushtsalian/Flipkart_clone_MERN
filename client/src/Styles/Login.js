import styled from "styled-components";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

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
  color: var(--color-white-bg);
  z-index: 12;
  display: flex;
  flex-direction: row;
  background-color: var(--color-white-bg);
  color: #000;
  border-radius: 4px;
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
  color: var(--color-grey-grade4);
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
  & button {
    cursor: pointer;
    background: var(--color-brand-orange);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: var(--color-white-bg);
    width: 100%;
    height: 48px;
    font-size: 15px;
  }
`;

const RegisterLink = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-brand-blue);
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: white;
  position: absolute;
  right: 0;
  font-size: 32px !important;
  cursor: pointer;
`;

const StyledLoginContainerWrapperdiv = styled.div`
  position: relative;
  min-width: 750px;
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
  StyledCloseIcon,
  StyledLoginContainerWrapperdiv,
};
