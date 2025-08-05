import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AppNavLink.module.scss";

function AppNavLink({ children, className, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${classes["nav-link"]} ${
          isActive ? classes["active-link"] : ""
        } ${className}`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default AppNavLink;
