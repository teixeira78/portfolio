import classes from "./Footer.module.scss";
import Container from "../container/Container";
import AppNavLink from "../ui/appNavLink/AppNavLink";
import Logo from "../../assets/shared/desktop/logo.svg";
import NavLinks from "../ui/navLinks/NavLinks";
import UList from "../ui/uList/UList";
import { SOCIAL_LINKS } from "../../utils/constants";
import SocialsLinks from "../ui/socialsLinks/SocialsLinks";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes["footer-container"]}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img src={Logo} alt="Audiphile Logo" />
          </div>
          <NavLinks className={classes["navigation-links"]} />
        </div>
        <div className={classes.content}>
          <p className={classes.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <SocialsLinks
            className={`${classes["d--flex"]} ${classes["social-media-links-default"]}`}
          />
        </div>
        <div className={classes.bottom}>
          <p className={classes["copyright"]}>
            Copyright 2021. All Rights Reserved
          </p>
          <SocialsLinks
            className={`${classes["d--flex"]} ${classes["social-media-links-mobile"]}`}
          />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
