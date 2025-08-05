import classes from "./Footer.module.scss";
import Container from "../container/Container";
import AppNavLink from "../ui/appNavLink/AppNavLink";
import Logo from "../../assets/shared/desktop/logo.svg";
import NavLinks from "../ui/navLinks/NavLinks";
import UList from "../ui/uList/UList";
import { SOCIAL_LINKS } from "../../utils/constants";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes["footer-container"]}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img src={Logo} alt="Audiphile Logo" />
          </div>
          <NavLinks />
        </div>
        <div className={classes.content}>
          <p className={classes.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          {
            <UList
              className={classes["social-media-links"]}
              items={SOCIAL_LINKS}
              renderItem={(socialLink, index) => (
                <AppNavLink
                  className={classes["social-link"]}
                  key={index}
                  to={socialLink.url}
                >
                  {<socialLink.Icon />}
                </AppNavLink>
              )}
            />
          }
        </div>
        <p className={classes["copyright"]}>
          Copyright 2021. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
