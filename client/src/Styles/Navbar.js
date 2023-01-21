import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledNavbarWrapper = styled.nav`
  max-height: var(--nav-max-height);
  min-width: var(--width-min);
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  background-color: var(--color-brand-blue);
`;

const NavbarContainer = styled.div`
  max-width: var(--nav-width);
  width: 100%;
  display: flex;
  height: 100%;
  margin: 0 auto;
  & > div {
    display: flex;
  }
`;

const NavbarInputMenu = styled.div`
  width: 70%;
  height: var(--nav-max-height);
  & button,
  & button:hover {
  }
  & input {
  }
  & > a {
    display: flex;
    min-width: var(--nav-logo-min-width);
    max-height: var(--nav-max-height);
    align-items: center;
    justify-content: flex-end;
  }

  & .css-q0jhri-MuiInputBase-root-MuiInput-root {
    width: 100%;
    margin: 0 auto 0 12px;
    border-radius: 2px 0 0 2px;
    font-size: 14px;
    font-size: 10px;
  }
`;
const LogoContainer = styled.img`
  max-width: 100px;
  max-height: 30px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  min-width: 304px;
  /* width: calc(100% - 540px); */
  width: 100%;
  margin: 0 auto 0 12px;
  align-items: center;

  & > form {
    width: 100%;
    height: 36px;
    max-width: 564px;
    position: relative;
    display: inline-block;
    background-color: #fff;

    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & > div {
        width: 100%;
        & .css-q0jhri-MuiInputBase-root-MuiInput-root {
          width: 100%;
          margin: 0 auto 0 12px;
          border-radius: 2px 0 0 2px;
          font-size: 14px;
          height: 100%;
          position: relative;
          top: 1px;
        }
      }

      & > button {
        height: 36px;
        width: 44px;
        border-radius: 2px;
        padding: 4px 0 0 8px;
        background-color: #fff;
        border: 2px solid #fff;
      }
    }
  }
`;

const NavbarMenu = styled.div`
  width: 50%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  & > div {
    min-width: var(--nav-btn-min-width);

    align-items: center;

    height: var(--nav-height);

    & > button,
    & > button:hover {
      background-color: #fff;
      /* display: flex;
      flex-direction: row; */
      height: 2rem;
      border-radius: 0;
      font-size: 16px;
      padding: 15px 40px;
      font-weight: 600;
    }
  }
  & > div {
    flex: 0 0 auto;
    margin: 0 20px;
    max-width: var(--nav-profile-max-width);
    /* justify-content: space-between; */
    display: flex;
    height: 56px;
    & > div {
      min-width: var(--nav-btn-min-width);
    }
  }
`;

const ShoppingCartIconContainer = styled.div``;
const Cart = styled(ShoppingCartIcon)``;
export {
  StyledNavbarWrapper,
  LogoContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarInputMenu,
  Cart,
  ShoppingCartIconContainer,
  InputContainer,
};
