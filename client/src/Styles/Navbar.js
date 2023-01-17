import styled from "styled-components";

const StyledNavbarWrapper = styled.nav`
  height: 56px;
  background-color: var(--color-brand-blue);
  font-size: 16px;
  position: fixed;
  width: 100%;
  z-index: 900;
`;
const LogoContainer = styled.img`
  width: 100px;
  max-height: 30px;
`;
const NavbarContainer = styled.div`
  min-height: 100%;
  margin: 0 auto;
  max-width: 1248px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
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
  }
  & input {
    height: 36px;
    min-width: 235px;
    background-color: white;
    z-index: 12;
    padding: 0 16px;
    max-width: 564px;
  }

  & .css-q0jhri-MuiInputBase-root-MuiInput-root {
    width: 100%;
    margin: 0 auto 0 12px;
    border-radius: 2px 0 0 2px;
    font-size: 14px;
  }
`;
const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 40%;
  margin-left: 20px;
  align-items: center;
  color: var(--color-white-bg);
  font-weight: 600;

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
  }
`;

export {
  StyledNavbarWrapper,
  LogoContainer,
  NavbarContainer,
  NavbarMenu,
  NavbarInputMenu,
};
