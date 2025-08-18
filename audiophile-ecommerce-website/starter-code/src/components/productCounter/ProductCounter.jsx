import classes from "./ProductCounter.module.scss";

function ProductCounter({ className }) {
  return (
    <div className={`${classes["counter-container"]} ${className}`}>
      <button className={classes["counter-button"]}>-</button>
      <span className={classes["counter-value"]}>1</span>
      <button className={classes["counter-button"]}>+</button>
    </div>
  );
}
export default ProductCounter;
