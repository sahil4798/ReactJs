import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home></Home> },
      { path: "/products", element: <Product></Product> },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

// const routes = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );
// const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
