import { Button, Input } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  LogoContainer,
  StyledNavbarWrapper,
  NavbarContainer,
  NavbarInputMenu,
  NavbarMenu,
} from "../Styles/Navbar";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <StyledNavbarWrapper>
        <NavbarContainer>
          <NavbarInputMenu>
            <LogoContainer src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" />
            <Input placeholder="Search for products, brands and more" />
            <Button variant="outlined">
              <SearchIcon />
            </Button>
          </NavbarInputMenu>
          <NavbarMenu>
            <Button variant="outlined">Login</Button>
            <span>Become a Seller</span>
            <span>More</span>
            <span>cart</span>
          </NavbarMenu>
        </NavbarContainer>
      </StyledNavbarWrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
