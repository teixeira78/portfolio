import AppLink from "../ui/appLink/AppLink";
import classes from "./RelatedProductsList.module.scss";
import RelatedImg from "../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
function RelatedProductsList() {
  return (
    <div className={classes["related-products"]}>
      <h3 className={classes.title}>You may also like</h3>
      <div className={classes["products-list"]}>
        <div className={classes.product}>
          <div className={classes["img-container"]}>
            <img src={RelatedImg} alt="related product" />
          </div>
          <p className={classes["product-name"]}>XX99 MARK II</p>
          <AppLink>See Product</AppLink>
        </div>
      </div>
    </div>
  );
}

export default RelatedProductsList;
