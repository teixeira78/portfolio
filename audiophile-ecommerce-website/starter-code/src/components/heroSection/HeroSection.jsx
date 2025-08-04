import classes from "./HeroSection.module.scss";
import Container from "../container/Container";
import AppLink from "../../components/ui/appLink/AppLink";

function HeroSection() {
  return (
    <Container className={classes.hero}>
      <div className={classes["hero-content"]}>
        <p className={classes["hero-subtitle"]}>NEW PRODUCT</p>
        <h1 className={classes["hero-title"]}>XX99 Mark II Headphones</h1>
        <p className={classes["hero-description"]}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <AppLink to="#">See Product</AppLink>
      </div>
    </Container>
  );
}

export default HeroSection;
