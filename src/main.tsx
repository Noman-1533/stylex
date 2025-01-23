import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  CategoriesPage,
  ProtectedRoute,
  RouteWrapper,
  SearchResult,
  ViewProducts,
} from "./feature/index.tsx";
// import Demo from "./demo/demo.tsx";
import { ProductDetails } from "./feature/product-details/index.tsx";
import { CartContainer, CartContextProvider } from "./feature/cart/index.tsx";
import { Login, Signup } from "./feature/auth/index.tsx";
import Home from "./feature/home/components/home.page.tsx";
import { ProductCategory } from "./feature/product-category/index.tsx";
import AuthProvider from "./provider/auth-provider/auth.provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Navigate to={"/"} replace />,
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
        element: (
          <ProtectedRoute>
            <CartContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "product/category/:categoryName",
        element: <ProductCategory />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartContextProvider>
          <RouteWrapper>
            <RouterProvider router={router} />
          </RouteWrapper>
        </CartContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
