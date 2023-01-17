import { Button, Input } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  LogoContainer,
  StyledNavbarWrapper,
  NavbarContainer,
  NavbarInputMenu,
  NavbarMenu,
  Cart,
  ShoppingCartIconContainer,
} from "../Styles/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginClose } from "../Redux/Auth-Store/Auth-Slice";
import Login from "../Pages/Login";
import Footer from "./Footer";

const Navbar = () => {
  const { close } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Login />
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
            <Button
              variant="outlined"
              onClick={() => dispatch(handleLoginClose())}
            >
              Login
            </Button>
            <span>Become a Seller</span>
            <span>More</span>
            <ShoppingCartIconContainer>
              <Cart />
              Cart
            </ShoppingCartIconContainer>
          </NavbarMenu>
        </NavbarContainer>
      </StyledNavbarWrapper>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
