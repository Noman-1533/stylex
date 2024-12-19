import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchResult, ViewProducts } from "./feature/index.tsx";
import Demo from "./demo/demo.tsx";
import { ProductDetails } from "./feature/product-details/index.tsx";
import { CartContainer } from "./feature/cart/index.tsx";
import { Login, Signup } from "./feature/auth/index.tsx";
import Home from "./feature/home/components/home.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Demo />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "products/:endpoint",
        element: <ViewProducts />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartContainer />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
