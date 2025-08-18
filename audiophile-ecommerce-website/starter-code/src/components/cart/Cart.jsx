import AppModal from "../modal/AppModal";
import AppLink from "../ui/appLink/AppLink";
import classes from "./Cart.module.scss";
import CartItem from "./cartItem/CartItem";

const modalStyle = {
  top: "133px",
  transform: "translate(-50%, 0%)",
};

function Cart() {
  return (
    <AppModal style={modalStyle}>
      <div className={classes.cart}>
        <div className={classes["cart-header"]}>
          <h3 className={classes["cart-quantity"]}>
            Cart
            <span>(3)</span>
          </h3>
          <button className={classes["clear-cart--btn"]}>Remove all</button>
        </div>
        <div className={classes["cart-item-list"]}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={classes["cart-summary"]}>
          <span className={classes["total-label"]}>Total</span>
          <span className={classes.price}>$ 5,396</span>
        </div>
        <AppLink>Checkout</AppLink>
      </div>
    </AppModal>
  );
}

export default Cart;
