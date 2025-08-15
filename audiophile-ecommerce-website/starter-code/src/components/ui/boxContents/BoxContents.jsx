import classes from "./BoxContents.module.scss";

function BoxContents() {
  return (
    <div className={classes["box-content-container"]}>
      <h3 className={classes.title}>In The Box</h3>
      <div className={classes.content}>
        <span className={classes.quantity}>1x</span>
        <p className={classes.item}>Headphone Unit</p>
      </div>
    </div>
  );
}

export default BoxContents;
