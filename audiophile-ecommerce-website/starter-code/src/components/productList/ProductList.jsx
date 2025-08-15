import Container from "../container/Container";
import ProductCard from "../productCard/ProductCard";
import classes from "./ProductList.module.scss";

function ProductList() {
  return (
    <div className={classes["product-list-container"]}>
      <ProductCard className={classes["product-card"]} />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;
