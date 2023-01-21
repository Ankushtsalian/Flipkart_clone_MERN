import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledNavbarWrapper = styled.nav`
  max-height: var(--nav-max-height);
  min-width: var(--width-min);
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
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
  }
`;
const LogoContainer = styled.img`
  max-width: 100px;
  max-height: 30px;
`;

const NavbarMenu = styled.div`
  & button,
  & button:hover {
  }
  & div {
    & span {
    }
    & > div {
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
};
