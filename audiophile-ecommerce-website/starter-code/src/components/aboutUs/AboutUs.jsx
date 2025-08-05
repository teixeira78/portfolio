import Container from "../container/Container";
import classes from "./AboutUs.module.scss";

function AboutUs() {
  return (
    <Container className={classes["aboutUs-container"]}>
      <div className={classes["aboutUs-content"]}>
        <h1 className={classes.title}>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p className={classes.description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={classes["aboutUs-image"]}></div>
    </Container>
  );
}

export default AboutUs;
