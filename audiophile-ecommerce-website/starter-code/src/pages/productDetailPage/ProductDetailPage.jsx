import React from "react";
import AppLink from "../../components/ui/appLink/AppLink";
import classes from "./ProductDetailPage.module.scss";
import HeadphonesImg from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import ProductImgContainer from "../../components/ui/productImgContainer/ProductImgContainer";
import ProductDescription from "../../components/ui/productDescription/ProductDescription";
import ProductCounter from "../../components/ui/productCounter/ProductCounter";
import AppButton from "../../components/ui/appButton/AppButton";

function ProductDetail() {
  return (
    <div>
      <AppLink variant="text">Go Back</AppLink>
      <div className={classes["product-detail"]}>
        <ProductImgContainer imgSrc={HeadphonesImg} />
        <ProductDescription />
        <span className={classes.price}>$2,999</span>
        <div className={classes["action-buttons"]}>
          <ProductCounter />
          <AppButton>Add to Cart</AppButton>
        </div>
      </div>
      <div className={classes["product-features"]}>
        <h3 className={classes.title}>Features</h3>
        <div className={classes["description-container"]}>
          <p className={classes.description}>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>

          <p className={classes.description}>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
