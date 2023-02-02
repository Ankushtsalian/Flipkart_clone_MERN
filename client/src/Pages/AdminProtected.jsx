import React from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "../Styles/Navbar";

const AdminProtected = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default AdminProtected;
