import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Body-Child/login.jsx";
import About from "./components/Body-Child/about.jsx";
import ErrorP from "./error.jsx";
import { Provider } from "react-redux";
import Body from "./components/Body.jsx";
import store from "./Utilis/Store.jsx";
import Feed from "./components/Body-Child/Feed.jsx";
import Requests from "./components/Body-Child/requests.jsx";

const router = createBrowserRouter([
  { path:" ",
    element:<Body/>,
    errorElement: <ErrorP />},

   { path: "/",
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
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path:"/requests",
        element: <Requests/>,
      }
    ],
    errorElement: <ErrorP />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
