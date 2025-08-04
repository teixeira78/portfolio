import AppLink from "../ui/appLink/AppLink";
import classes from "./ProductCard.module.scss";
import HeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { NavLink } from "react-router-dom";

function ProductCard() {
  return (
    <NavLink className={classes["card-container"]}>
      <div className={classes["product-image"]}>
        <img src={SpeakersImg} alt="Headphones Thumbnail" />
      </div>
      <p className={classes["product-name"]}>HEADPHONES</p>
      <span className={classes.text}>SHOP</span>
    </NavLink>
  );
}

export default ProductCard;
