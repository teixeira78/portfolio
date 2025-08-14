import IconButton from "@mui/material/IconButton";
import CartButton from "../ui/cartButton/CartButton";
import classes from "./MobileNavbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/shared/desktop/logo.svg";
import AppLogo from "../ui/appLogo/AppLogo";

function MobileNavbar() {
  return (
    <nav className={classes["mobile-navbar-container"]}>
      <IconButton>
        <MenuIcon style={{ color: "var(--pure-white)" }} />
      </IconButton>
      <AppLogo className={classes.logo} />
      <CartButton className={classes["cart-button"]} />
    </nav>
  );
}

export default MobileNavbar;
