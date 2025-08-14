import Container from "../container/Container";
import ProductCard from "../productCard/ProductCard";
import classes from "./ProductList.module.scss";

function ProductList() {
  return (
    <Container className={classes["product-list-container"]}>
      <ProductCard className={classes["product-card"]} />
      <ProductCard />
      <ProductCard />
    </Container>
  );
}

export default ProductList;
