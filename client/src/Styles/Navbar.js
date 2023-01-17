import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledNavbarWrapper = styled.nav`
  height: 56px;
  background-color: var(--color-brand-blue);
  font-size: 16px;
  position: fixed;
  width: 100%;
  z-index: 900;
  top: 0;
`;
const LogoContainer = styled.img`
  width: 100px;
  max-height: 30px;
  @media (max-width: 720px) {
    width: 50px;
    max-height: 15px;
  }
`;
const Cart = styled(ShoppingCartIcon)`
  margin-right: 5px;
  @media (max-width: 720px) {
    font-size: 10px;
    margin-bottom: 5px;
    margin-right: 0px;
  }
`;
const ShoppingCartIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
    font-size: 10px;
  }
`;
const NavbarContainer = styled.div`
  min-height: 100%;
  margin: 0 auto;
  max-width: 1248px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    max-width: 648px;
  }
`;

const NavbarInputMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  z-index: 12;
  & button,
  & button:hover {
    color: var(--color-brand-blue);
    font-weight: 600;
    background-color: var(--color-white-bg);
    border-radius: 2px;
    border: 1px solid #fff;
    height: 36px;
    padding: 4px 0 4px 8px;
    margin: -3px;
    @media (max-width: 720px) {
      height: 26px;
      padding: 2px 0 2px 4px;
    }
  }
  & input {
    height: 36px;
    min-width: 235px;
    background-color: white;
    z-index: 12;
    padding: 0 16px;
    max-width: 564px;
    @media (max-width: 720px) {
      min-width: 120px;
      height: 26px;
    }
  }

  & .css-q0jhri-MuiInputBase-root-MuiInput-root {
    width: 100%;
    margin: 0 auto 0 12px;
    border-radius: 2px 0 0 2px;
    font-size: 14px;
    @media (max-width: 720px) {
      font-size: 10px;
    }
  }
`;
const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 40%;
  margin-left: 30px;
  align-items: center;
  color: var(--color-white-bg);
  font-weight: 600;
  @media (max-width: 720px) {
    font-size: 10px;
    margin-left: 10px;

    justify-content: flex-start;
  }
  & button,
  & button:hover {
    color: var(--color-brand-blue);
    font-weight: 600;
    font-size: 14px;
    background-color: var(--color-white-bg);
    border-radius: 0;
    height: 32px;
    width: 25%;
    margin-right: 10px;
    @media (max-width: 720px) {
      font-size: 12px;
      width: 10%;
      margin-right: 5px;
      height: 22px;
    }
  }
  & span {
    @media (max-width: 720px) {
      font-size: 10px;
      margin: 0;
    }
  }
`;

export {
  StyledNavbarWrapper,
  LogoContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarInputMenu,
  Cart,
  ShoppingCartIconContainer,
};
