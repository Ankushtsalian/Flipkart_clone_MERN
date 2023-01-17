import { Button, Input } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  LogoContainer,
  StyledNavbarWrapper,
  NavbarContainer,
  NavbarMenu,
} from "../Styles/Navbar";

const Navbar = () => {
  return (
    <>
      <StyledNavbarWrapper>
        <NavbarContainer>
          <NavbarMenu>
            <LogoContainer src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" />
            <Input placeholder="Search for products, brands and more" />
          </NavbarMenu>
          <NavbarMenu>
            <Button variant="outlined">Profile</Button>
            <span>Become a Seller</span>
            <span>more</span>
            <span>cart</span>
          </NavbarMenu>
        </NavbarContainer>
      </StyledNavbarWrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
