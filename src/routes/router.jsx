import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default routes;
