import { Button, Input } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LogoContainer,
  StyledNavbarWrapper,
  NavbarContainer,
  NavbarInputMenu,
  NavbarMenu,
  Cart,
  ShoppingCartIconContainer,
  InputContainer,
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
            <Link to="/">
              <LogoContainer src="/images/flipkart-plus.png" />
            </Link>
            <InputContainer>
              <form>
                <div>
                  <div>
                    <Input
                      // disableUnderline={true}
                      placeholder="Search for products, brands and more"
                    />
                  </div>
                  <Button variant="outlined">
                    <SearchIcon />
                  </Button>
                </div>
              </form>
            </InputContainer>
          </NavbarInputMenu>
          <NavbarMenu>
            <div>
              <Button
                variant="outlined"
                onClick={() => dispatch(handleLoginClose())}
              >
                Login
              </Button>
            </div>
            {/* <div> */}
            <div>
              <span>Become a Seller</span>
            </div>{" "}
            <span>More</span>
            <div>
              <ShoppingCartIconContainer>
                <Cart />
                Cart
              </ShoppingCartIconContainer>
            </div>
            {/* </div> */}
          </NavbarMenu>
        </NavbarContainer>
      </StyledNavbarWrapper>
      {/* <div
        style={{
          minHeight: "83.5vh",
          position: "relative",
          minWidth: "100%",
          top: "57px",
          bottom: "57px",
          backgroundColor: "red",
        }}
      > */}
      {/* <Outlet /> */}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Navbar;
