import AppLink from "../ui/appLink/AppLink";
import classes from "./ProductDisplay.module.scss";
import HeadphonesImg from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

function ProductDisplay() {
  return (
    <div className={classes["product-display"]}>
      <div className={classes["image-container"]}>
        <img alt="Product" src={HeadphonesImg} />
      </div>
      <div className={classes.content}>
        <p className={classes.subtitle}>NEW PRODUCT</p>
        <h3 className={classes.title}>XX99 Mark II Headphones</h3>
        <p className={classes.description}>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <AppLink>See Product</AppLink>
      </div>
    </div>
  );
}

export default ProductDisplay;
