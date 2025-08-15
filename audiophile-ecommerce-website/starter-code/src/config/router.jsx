import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/home/Home";
import HeaphonesPage from "../pages/headphonesPage/HeaphonesPage";
import EarphonesPage from "../pages/earphonesPage/EarphonesPage";
import SpeakersPage from "../pages/speakersPage/SpeakersPage";
import ProductDetailPage from "../pages/productDetailPage/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <HeaphonesPage />,
      },
      {
        path: "/earphones",
        element: <ProductDetailPage />,
      },
      {
        path: "/speakers",
        element: <SpeakersPage />,
      },
    ],
  },
]);

export default router;
