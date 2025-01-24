import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  Loader,
  // CategoriesPage,
  ProtectedRoute,
  RouteWrapper,
  // SearchResult,
  // ViewProducts,
} from "./feature/index.tsx";
// import Demo from "./demo/demo.tsx";
// import { ProductDetails } from "./feature/product-details/index.tsx";
import {
  //  CartContainer,
  CartContextProvider,
} from "./feature/cart/index.tsx";
// import { Login, Signup } from "./feature/auth/index.tsx";
// import Home from "./feature/home/components/home.page.tsx";
// import { ProductCategory } from "./feature/product-category/index.tsx";
import AuthProvider from "./provider/auth-provider/auth.provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  LazyApp,
  LazyCartContainer,
  LazyCategory,
  LazyHome,
  LazyLogin,
  LazyProductCategoryDetails,
  LazyProductDetails,
  LazySearchResults,
  LazySignup,
  LazyViewProducts,
} from "./route.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        {" "}
        <LazyApp />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: <Navigate to={"/"} replace />,
      },
      {
        path: "products/:endpoint",
        element: (
          <Suspense>
            {" "}
            <LazyViewProducts />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense>
            {" "}
            <LazySearchResults />
          </Suspense>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Suspense>
            {" "}
            <LazyProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <ProtectedRoute>
              <LazyCartContainer />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense>
            {" "}
            <LazyLogin />
          </Suspense>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <Suspense>
            {" "}
            <LazySignup />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense>
            {" "}
            <LazyCategory />
          </Suspense>
        ),
      },
      {
        path: "product/category/:categoryName",
        element: (
          <Suspense>
            {" "}
            <LazyProductCategoryDetails />
          </Suspense>
        ),
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
