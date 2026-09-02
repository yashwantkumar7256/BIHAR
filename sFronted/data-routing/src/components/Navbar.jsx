import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-blue-300 flex justify-between px-20">
      <NavLink to={""}> Home</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}> Register</NavLink>
    </div>
  );
};

export default Navbar;
