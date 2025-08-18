import classes from "./Home.module.scss";
import ProductList from "../../components/productList/ProductList";
import ProductsShowcase from "../../components/productsShowcase/ProductsShowcase";
import HeroSection from "../../components/heroSection/HeroSection";
import AboutUs from "../../components/aboutUs/AboutUs";
import Container from "@mui/material/Container";
import AppModal from "../../components/modal/AppModal";
import Cart from "../../components/cart/Cart";

function Home() {
  return (
    <>
      <section id="#hero-section" className={classes["hero-section"]}>
        <Cart />
        <HeroSection />
      </section>
      <section id="#product-list">
        <Container>
          <ProductList />
        </Container>
      </section>
      <section id="#product-showcase">
        <ProductsShowcase />
      </section>
      <section id="#about-us" className={classes["about-us"]}>
        <Container>
          <AboutUs />
        </Container>
      </section>
    </>
  );
}

export default Home;
