import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
