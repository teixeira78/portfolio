import AppLink from "../ui/appLink/AppLink";
import classes from "./ProductDisplay.module.scss";
import HeadphonesImg from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import ProductImgContainer from "../ui/productImgContainer/ProductImgContainer";
import ProductDescription from "../ui/productDescription/ProductDescription";

function ProductDisplay() {
  return (
    <div className={classes["product-display"]}>
      <ProductImgContainer
        imgSrc={HeadphonesImg}
        className={classes["image-container"]}
      />
      <div className={classes.content}>
        <ProductDescription className={classes["product-description"]} />
        <AppLink>See Product</AppLink>
      </div>
    </div>
  );
}

export default ProductDisplay;
