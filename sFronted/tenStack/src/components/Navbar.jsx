import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around ">
        <NavLink
         end
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "";
          }}
       to={"/"}>
          home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-amber-400" : "";
          }}
        to={"/shop"}>
          shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-amber-500" : "";
          }}
          to={"/contect"}  >
          contect
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
