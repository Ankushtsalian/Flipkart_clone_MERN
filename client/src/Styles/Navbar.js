import styled from "styled-components";

const StyledNavbarWrapper = styled.nav`
  height: 56px;
  /* border: 1px solid black; */
  background-color: var(--color-brand-blue);
  font-size: 16px;
  position: fixed;
  width: 100%;
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

  & input {
    height: 36px;
    border-radius: 2px 0 0 2px;
    width: 100%;
    /* min-width: 300px; */
    background-color: white;
    z-index: 12;
    padding: 0 16px;
  }

  & .css-q0jhri-MuiInputBase-root-MuiInput-root {
    width: 100%;
    margin: 0 auto 0 12px;
    border-radius: 2px 0 0 2px;
    max-width: 564px;
    font-size: 14px;
  }
`;

const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  & button,
  & button:hover {
    color: var(--color-brand-blue);
    font-weight: 600;
    font-size: 16px;
    background-color: var(--color-white-bg);
    border-radius: 0;
  }
`;

export { StyledNavbarWrapper, LogoContainer, NavbarContainer, NavbarMenu };
