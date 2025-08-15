import React from "react";
import AppLink from "../../components/ui/appLink/AppLink";
import classes from "./ProductDetailPage.module.scss";
import HeadphonesImg from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import ProductImgContainer from "../../components/ui/productImgContainer/ProductImgContainer";
import ProductDescription from "../../components/ui/productDescription/ProductDescription";
import ProductCounter from "../../components/productCounter/ProductCounter";
import AppButton from "../../components/ui/appButton/AppButton";
import Container from "@mui/material/Container";
import BoxContents from "../../components/boxContents/BoxContents";
import AboutUs from "../../components/aboutUs/AboutUs";
import ProductList from "../../components/productList/ProductList";
import ProductGallery from "../../components/productGallery/ProductGallery";
import RelatedProductsList from "../../components/relatedProductsList/RelatedProductsList";

function ProductDetailPage() {
  return (
    <Container className={classes["product-detail-container"]}>
      <AppLink variant="text" className={classes["return-link"]}>
        Go Back
      </AppLink>
      <div className={classes["product-detail"]}>
        <ProductImgContainer
          imgSrc={HeadphonesImg}
          className={classes["img-container"]}
        />
        <ProductDescription className={classes["detail-description"]} />
        <span className={classes.price}>$2,999</span>
        <div className={classes["action-buttons"]}>
          <ProductCounter />
          <AppButton className={classes["add-to-cart-btn"]}>
            Add to Cart
          </AppButton>
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
        <BoxContents />
        <ProductGallery />
        <RelatedProductsList />
        <ProductList />
        <AboutUs />
      </div>
    </Container>
  );
}

export default ProductDetailPage;
