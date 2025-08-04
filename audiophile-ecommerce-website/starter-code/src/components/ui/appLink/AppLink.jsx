import Button from "@mui/material/Button";
import ArrowIconUrl from "../../../assets/shared/desktop/icon-arrow-right.svg?url";
import { NavLink } from "react-router-dom";
import classes from "./AppLink.module.scss";

function AppLink({ variant = "contained", children, className, ...props }) {
  return (
    <NavLink
      // endIcon={icon}
      {...props}
      className={`${classes.defaultStyle} ${classes[variant]} ${className}`}
    >
      {children}
    </NavLink>
  );
}

export default AppLink;
