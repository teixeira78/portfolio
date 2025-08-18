import classes from "./ProductGallery.module.scss";
import Img1 from "../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import Img2 from "../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import Img3 from "../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";

function ProductGallery() {
  return (
    <div className={classes["gallery-container"]}>
      <div className={classes["img-container"]}>
        <img src={Img1} />
      </div>
      <div className={classes["img-container"]}>
        <img src={Img2} />
      </div>
      <div className={classes["img-container"]}>
        <img src={Img3} />
      </div>
    </div>
  );
}

export default ProductGallery;
