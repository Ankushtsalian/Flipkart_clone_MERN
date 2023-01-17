import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      Navbar
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
