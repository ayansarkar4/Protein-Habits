import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Testimonial from "./pages/Testimonial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ourstory from "./pages/Ourstory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      {
        index: true, // default route "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
      },
      {
        path: "ourstory",
        element: <Ourstory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
