import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchResult } from "./feature/index.tsx";
import Demo from "./demo/demo.tsx";
import { ProductDetails } from "./feature/product-details/index.tsx";
import { CartContainer } from "./feature/cart/index.tsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
