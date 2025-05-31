import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Body from "./components/Body.jsx";
import Login from "./components/Body-Child/login.jsx";
import About from "./components/Body-Child/about.jsx";
import ErrorP from "./error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <ErrorP />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
