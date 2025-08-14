import { NavLink } from "react-router-dom";
import CartButton from "../ui/cartButton/CartButton";
import AppNavLink from "../ui/appNavLink/AppNavLink";
import NavLinks from "../ui/navLinks/NavLinks";
import classes from "./DefaultNavbar.module.scss";
import AppLogo from "../ui/appLogo/AppLogo";

function DefaultNavbar() {
  return (
    <div className={classes["default-navbar-container"]}>
      <AppLogo />
      <NavLinks className={classes.links} />
      <CartButton className={classes["cart-button"]} />
    </div>
  );
}

export default DefaultNavbar;
