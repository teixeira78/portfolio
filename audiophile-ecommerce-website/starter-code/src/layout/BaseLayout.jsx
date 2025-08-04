import { Outlet } from "react-router-dom";
import "../assets/css/global.scss";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";

function BaseLayout() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="content">
        <Outlet />
        {/* content */}
      </div>
      {/* footer */}
    </div>
  );
}

export default BaseLayout;
