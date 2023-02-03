import React from "react";
import { MainContainer } from "../Styles/Navbar";

const AdminProtected = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default AdminProtected;
