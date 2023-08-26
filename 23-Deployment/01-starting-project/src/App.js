import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
// import BlogPage, { loader as postsLoader } from './pages/Blog';
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";

const BlogPage = lazy(() => import("./pages/Blog"));
//due import return promise we have to wrap it in lazy
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          // { index: true, element: <BlogPage />, loader: postsLoader },
          {
            index: true,
            element: (
              <Suspense fallback="Loading...">
                <BlogPage />
              </Suspense>
            ),
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
