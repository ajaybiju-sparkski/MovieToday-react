import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Reviewpg from "./Reviewpg.jsx";
import Aboutpg from "./Aboutpg.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/review_btn",
    element: <Reviewpg />,
  },
  {
    path: "/about_btn",
    element: <Aboutpg />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
