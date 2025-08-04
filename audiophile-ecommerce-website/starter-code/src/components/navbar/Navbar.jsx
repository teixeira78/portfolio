import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import AppNavLink from "../ui/appNavLink/AppNavLink";
import NavUList from "../ui/navLinks/NavLinks";
import NavLinks from "../ui/navLinks/NavLinks";
import Logo from "../../assets/shared/desktop/logo.svg";
import Container from "../container/Container";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <Container className={classes["nav-container"]}>
        <div className={classes["logo-container"]}>
          <img src={Logo} alt="Audiophile Logo" />
        </div>
        <NavLinks className={classes.links} />
        <IconButton className={classes["cart-button"]}>
          <ShoppingCartOutlinedIcon style={{ color: "var(--pure-white)" }} />
        </IconButton>
      </Container>
    </nav>
  );
}

export default Navbar;
