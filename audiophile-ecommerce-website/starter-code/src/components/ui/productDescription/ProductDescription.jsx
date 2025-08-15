import classes from "./ProductDescription.module.scss";

function ProductDescription({ className }) {
  return (
    <div className={`${classes["product-description-container"]} ${className}`}>
      <p className={classes.subtitle}>NEW PRODUCT</p>
      <h3 className={classes.title}>XX99 Mark II Headphones</h3>
      <p className={classes.description}>
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </p>
    </div>
  );
}

export default ProductDescription;
