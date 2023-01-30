import { Button, Input } from "@mui/material";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
import {
  handleLoginClose,
  handleReset,
  handleResetPassword,
} from "../Redux/Auth-Store/Auth-Slice";
import Login from "../Pages/Login";
import Footer from "./Footer";
import { useQuery } from "../Hooks/useQuery";
import { useEffect } from "react";
import Loader from "./Loader";

import Chevron from "./Chevron";
import {
  LogoutWrapper,
  ProfileContainer,
  UserProfile,
} from "../Styles/Profile";
import Logout from "./Logout";

const Navbar = () => {
  const { loginModalOpen, isLoading, errorStatusCode, user } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.get("resetPassword")) dispatch(handleResetPassword());
  }, []);

  useEffect(() => {
    if (errorStatusCode && errorStatusCode !== 400) {
      // dispatch(handleReset());
      navigate("/");
    }
  }, [errorStatusCode]);
  if (true) return <Loader />;
  // return (
  //   <div style={{ minWidth: "var(--width-min)" }}>
  //     {!user.name && !isLoading && loginModalOpen && <Login />}

  //     <StyledNavbarWrapper>
  //       <NavbarContainer>
  //         <NavbarInputMenu>
  //           <Link to="/">
  //             <LogoContainer src="/images/flipkart-plus.png" />
  //           </Link>
  //           <InputContainer>
  //             <form>
  //               <div>
  //                 <div>
  //                   <Input
  //                     // disableUnderline={true}
  //                     placeholder="Search for products, brands and more"
  //                   />
  //                 </div>
  //                 <Button variant="outlined">
  //                   <SearchIcon />
  //                 </Button>
  //               </div>
  //             </form>
  //           </InputContainer>
  //         </NavbarInputMenu>
  //         <NavbarMenu>
  //           <div>
  //             {user?.name ? (
  //               <ProfileContainer>
  //                 {user?.name}
  //                 <Chevron />
  //                 <UserProfile>
  //                   <LogoutWrapper>
  //                     <Logout />
  //                   </LogoutWrapper>
  //                 </UserProfile>
  //               </ProfileContainer>
  //             ) : (
  //               <Button
  //                 variant="outlined"
  //                 onClick={() => dispatch(handleLoginClose())}
  //               >
  //                 Login
  //               </Button>
  //             )}
  //           </div>

  //           <div>
  //             <span>Become a Seller</span>
  //           </div>
  //           <div>
  //             <span>More</span>
  //           </div>
  //           <ShoppingCartIconContainer>
  //             <Cart />
  //             <span>Cart</span>
  //           </ShoppingCartIconContainer>
  //         </NavbarMenu>
  //       </NavbarContainer>
  //     </StyledNavbarWrapper>

  //     {isLoading ? (
  //       <Loader />
  //     ) : (
  //       <>
  //         <Outlet /> <Footer />
  //       </>
  //     )}
  //   </div>
  // );
};

export default Navbar;
