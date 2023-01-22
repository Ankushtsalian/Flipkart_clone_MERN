import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledNavbarWrapper = styled.nav`
  position: fixed;
  max-height: var(--nav-max-height);
  min-width: var(--width-min);
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--color-brand-blue);
  z-index: var(--z-index-navbar);
`;

const NavbarContainer = styled.div`
  max-width: var(--nav-width);
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  & > div {
    display: flex;
  }
`;

const NavbarInputMenu = styled.div`
  width: 70%;
  height: var(--nav-max-height);
  margin-right: 20px;

  & > a {
    display: flex;
    min-width: var(--nav-logo-min-width);
    max-height: var(--nav-max-height);
    align-items: center;
    justify-content: flex-start;
  }

  & .css-q0jhri-MuiInputBase-root-MuiInput-root {
    width: 100%;
    /* margin: 0 auto 0 12px; */
    border-radius: 2px 0 0 2px;
    font-size: var(--font-size-10);
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
    height: 2.25rem;
    max-width: var(--nav-input-max-width);
    position: relative;
    display: inline-block;
    background-color: var(--color-white-bg);

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
          font-size: var(--font-size-14);
          height: 100%;
          position: relative;
          top: 1px;
        }
      }

      & > button,
      button:hover {
        height: 2.25rem;
        width: 2.75rem;
        border-radius: 2px;
        padding: 4px 0 0 8px;
        background-color: var(--color-white-bg);
        border: 2px solid var(--color-white-bg);
      }
    }
  }
`;

const NavbarMenu = styled.div`
  width: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--color-white-bg);
  & > div {
    height: var(--nav-height);
    margin: 0 1.5rem;
    max-width: var(--nav-profile-max-width);
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    height: 3.5rem;

    & > button,
    & > button:hover {
      background-color: var(--color-white-bg);
      height: 2rem;
      border-radius: 0;
      font-size: var(--font-size-16);
      padding: 0.85rem 2.25rem;
      font-weight: 600;
      text-transform: none;
    }
  }
`;

const ShoppingCartIconContainer = styled.div``;
const Cart = styled(ShoppingCartIcon)`
  padding-right: 0.25rem;
`;

const MainContainer = styled.div`
  position: relative;
  top: 56px;
  min-width: var(--width-min);
  width: 100%;
`;
export {
  StyledNavbarWrapper,
  LogoContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarInputMenu,
  Cart,
  ShoppingCartIconContainer,
  InputContainer,
  MainContainer,
};
