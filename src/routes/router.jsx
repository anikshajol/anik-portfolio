import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/About";
import Projects1 from "../pages/Projects1";
import Projects2 from "../pages/Projects2";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "project-1",
    element: <Projects1></Projects1>,
  },
  {
    path: "project-2",
    element: <Projects2></Projects2>,
  },
]);

export default routes;
