import { Outlet } from "react-router-dom";
import "../assets/css/global.scss";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";

function BaseLayout() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default BaseLayout;
