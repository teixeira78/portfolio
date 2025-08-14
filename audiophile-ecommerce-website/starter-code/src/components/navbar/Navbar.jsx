import classes from "./Navbar.module.scss";
import Container from "../container/Container";
import DefaultNavbar from "../defaultNavbar/DefaultNavbar";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <Container className={classes["nav-container"]}>
        <DefaultNavbar />
        <MobileNavbar />
      </Container>
    </nav>
  );
}

export default Navbar;
