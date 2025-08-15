import classes from "./Navbar.module.scss";
import Container from "../container/Container";
import DefaultNavbar from "../defaultNavbar/DefaultNavbar";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getNavbarType = (pathName) => {
    if (pathName === "/") return "home-navbar";
    else return "default-navbar";
  };

  return (
    <nav className={classes[getNavbarType(location.pathname)]}>
      <Container className={classes["nav-container"]}>
        <DefaultNavbar />
        <MobileNavbar />
      </Container>
    </nav>
  );
}

export default Navbar;
