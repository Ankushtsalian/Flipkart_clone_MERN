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
            <LogoContainer src="/images/flipkart-plus.png" />
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
      <div
        style={{
          minHeight: "83.5vh",
          position: "relative",
          minWidth: "1300px",
          top: "57px",
          bottom: "57px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Navbar;
