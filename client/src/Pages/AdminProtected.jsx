import React from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "../Styles/Navbar";

const AdminProtected = ({ children }) => {
  return (
    <MainContainer>
      {/* <Outlet /> */}
      {children}
    </MainContainer>
  );
};

export default AdminProtected;
