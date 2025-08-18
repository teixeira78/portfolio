import ProductCounter from "../../productCounter/ProductCounter";
import classes from "./CartItem.module.scss";
import CartImg1 from "../../../assets/cart/image-xx59-headphones.jpg";
import CartImg2 from "../../../assets/cart/image-yx1-earphones.jpg";
function CartItem() {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["product"]}>
        <div className={classes["img-container"]}>
          <img src={CartImg2} alt={`PRODUCT_NAME`} />
        </div>

        <div className={classes["product-detail"]}>
          <p className={classes["product-name"]}>XX99 MK II</p>
          <span className={classes["product-price"]}>$ 2,999</span>
        </div>
      </div>

      <ProductCounter className={classes.counter} />
    </div>
  );
}

export default CartItem;
