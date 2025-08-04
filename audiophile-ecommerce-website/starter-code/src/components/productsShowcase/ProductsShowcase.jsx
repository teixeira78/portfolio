import Container from "../container/Container";
import classes from "./ProductsShowcase.module.scss";
import SpeakersImg from "../../assets/home/desktop/image-speaker-zx9.png";
import CirclePattern from "../../assets/home/desktop/pattern-circles.svg";
import SpeakersGreyImg from "../../assets/home/desktop/image-speaker-zx7.jpg";
import EarphonesImg from "../../assets/home/desktop/image-earphones-yx1.jpg";
import AppLink from "../ui/appLink/AppLink";

function ProductsShowcase() {
  return (
    <Container className={classes["product-showcase"]}>
      <div
        className={`${classes["showcase-card"]} ${classes["showcase-speaker"]}`}
      >
        <div
          className={`${classes["showcase-img"]} ${classes["showcase-img-speaker"]}`}
        >
          <img src={SpeakersImg} alt="Stein Speaker" />
        </div>
        <div className={classes["showcase-content-speaker--big"]}>
          <h3 className={classes["showcase-title"]}>ZX9 SPEAKER</h3>
          <p className={classes["showcase-description"]}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <AppLink className={classes["showcase-link"]}>See Product</AppLink>
        </div>
      </div>
      <div
        className={`${classes["showcase-card"]} ${classes["showcase-speaker-small"]}`}
      >
        <div className={classes["showcase-content"]}>
          <h3 className={classes["showcase-title-small"]}>ZX7 SPEAKER</h3>
          <AppLink variant="outlined">See Product</AppLink>
        </div>
      </div>
      <div
        className={`${classes["showcase-card"]} ${classes["showcase-earphones"]}`}
      >
        <div className={classes["showcase-img"]}>
          <img src={EarphonesImg} alt="Earphones YX1" />
        </div>
        <div className={classes["showcase-content-earphones"]}>
          <h3 className={classes["showcase-title-small"]}>YX1 EARPHONES</h3>
          <AppLink variant="outlined">See Product</AppLink>
        </div>
      </div>
    </Container>
  );
}

export default ProductsShowcase;
