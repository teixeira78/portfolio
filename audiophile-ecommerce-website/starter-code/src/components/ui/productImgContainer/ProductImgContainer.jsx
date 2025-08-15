import classes from "./ProductImgContainer.module.scss";

function ProductImgContainer({ className, imgSrc }) {
  return (
    <div className={`${classes["img-container"]} ${className}`}>
      <img alt="Product" src={imgSrc} />
    </div>
  );
}

export default ProductImgContainer;
