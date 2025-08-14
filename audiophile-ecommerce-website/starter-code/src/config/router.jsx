import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/home/Home";
import HeaphonesPage from "../pages/headphonesPage/HeaphonesPage";

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
    ],
  },
]);

export default router;
