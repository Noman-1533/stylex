import { lazy } from "react";

// import App from "./App.tsx";
// import {
//   CategoriesPage,
//   ProtectedRoute,
//   RouteWrapper,
//   SearchResult,
//   ViewProducts,
// } from "./feature/index.tsx";
// // import Demo from "./demo/demo.tsx";
// import { ProductDetails } from "./feature/product-details/index.tsx";
// import { CartContainer, CartContextProvider } from "./feature/cart/index.tsx";
// import { Login, Signup } from "./feature/auth/index.tsx";
// import Home from "./feature/home/components/home.page.tsx";
// import { ProductCategory } from "./feature/product-category/index.tsx";
// import AuthProvider from "./provider/auth-provider/auth.provider.tsx";

export const LazyApp = lazy(() => import("./App.tsx"));
export const LazyHome = lazy(
  () => import("./feature/home/components/home.page.tsx")
);
export const LazyViewProducts = lazy(
  () =>
    import(
      "./feature/shared/components/view-products/view-products.component.tsx"
    )
);
export const LazySearchResults = lazy(
  () =>
    import(
      "./feature/shared/components/search-component/search-result.component.tsx"
    )
);
export const LazyProductDetails = lazy(
  () => import("./feature/product-details/components/product-details.tsx")
);
export const LazyCartContainer = lazy(
  () =>
    import(
      "./feature/cart/components/cart-container-component/cart-container.component.tsx"
    )
);
export const LazyLogin = lazy(
  () => import("./feature/auth/components/login-component/login.component.tsx")
);
export const LazySignup = lazy(
  () =>
    import("./feature/auth/components/signup-component/signup.component.tsx")
);
export const LazyCategory = lazy(
  () =>
    import("./feature/shared/components/categories-page/categories.page.tsx")
);
export const LazyProductCategoryDetails = lazy(
  () =>
    import("./feature/product-category/components/product-category.page.tsx")
);

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/home",
//           element: <Navigate to={"/"} replace />,
//         },
//         {
//           path: "products/:endpoint",
//           element: <ViewProducts />,
//         },
//         {
//           path: "/search",
//           element: <SearchResult />,
//         },
//         {
//           path: "/details/:id",
//           element: <ProductDetails />,
//         },
//         {
//           path: "/cart",
//           element: (
//             <ProtectedRoute>
//               <CartContainer />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
//         {
//           path: "/sign-up",
//           element: <Signup />,
//         },
//         {
//           path: "/categories",
//           element: <CategoriesPage />,
//         },
//         {
//           path: "product/category/:categoryName",
//           element: <ProductCategory />,
//         },
//       ],
//     },
//   ]);
