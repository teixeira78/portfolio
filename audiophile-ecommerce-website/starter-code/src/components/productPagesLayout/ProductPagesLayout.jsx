import classes from "./ProductPagesLayout.module.scss";
import Container from "../container/Container";
import ProductList from "../productList/ProductList";
import AboutUs from "../aboutUs/AboutUs";

function ProductPagesLayout({ title = "HEADPHONES", children }) {
  return (
    <div>
      <div className={classes["hero"]}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <Container>{children}</Container>
      <ProductList />
      <AboutUs />
    </div>
  );
}

export default ProductPagesLayout;
