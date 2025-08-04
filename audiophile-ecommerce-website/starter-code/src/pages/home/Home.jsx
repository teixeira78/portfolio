import classes from "./Home.module.scss";
import ProductList from "../../components/productList/ProductList";
import ProductsShowcase from "../../components/productsShowcase/ProductsShowcase";
import HeroSection from "../../components/heroSection/HeroSection";
import AboutUs from "../../components/aboutUs/AboutUs";

function Home() {
  return (
    <>
      <section id="#hero-section" className={classes["hero-section"]}>
        <HeroSection />
      </section>
      <section id="#product-list">
        <ProductList />
      </section>
      <section id="#product-showcase">
        <ProductsShowcase />
      </section>
      <section id="#about-us">
        <AboutUs />
      </section>
    </>
  );
}

export default Home;
