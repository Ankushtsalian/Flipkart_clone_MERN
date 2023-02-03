import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { MainContainer } from "../Styles/Navbar";

const AdminProtected = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user?.role === "Admin" ? (
        <MainContainer>{children}</MainContainer>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminProtected;
