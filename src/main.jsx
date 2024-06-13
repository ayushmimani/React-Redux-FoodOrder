import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import { RouterProvider } from "react-router-dom";
import PageNotFound from "./components/PageNotfound.jsx";
import Container from "./components/Body/Container";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/Body/RestaurantMenu.jsx";

const Grocery = lazy(() => import("./components/Body/Grocery.jsx"));

const approute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={"Loading..."}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={approute}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
