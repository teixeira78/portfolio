import classes from "./OrderSummary.module.scss";

function OrderSummary() {
  return (
    <div className={classes["summary-container"]}>
      <div className={classes["order-list"]}></div>
      <div className={classes["grand-total"]}></div>
    </div>
  );
}

export default OrderSummary;
