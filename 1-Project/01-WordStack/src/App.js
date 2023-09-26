import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Lists, { loader as listLoader } from "./pages/Lists";
import ListDetail, {
  loader as listDetailLoader,
  action as deleteListAction,
} from "./pages/ListDetail";
import Error from "./pages/Error";
import ListsRoot from "./pages/ListsRoot";
import NewList, { action as newListAction } from "./pages/NewList";
import Edit, { action as listEditAction } from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "lists",
        element: <ListsRoot />,
        children: [
          { path: "", element: <Lists />, loader: listLoader },

          {
            path: ":listId",
            id: "list-detail",
            loader: listDetailLoader,
            children: [
              {
                index: true,
                element: <ListDetail />,
                action: deleteListAction,
              },
              {
                path: "edit",
                element: <Edit />,
                action: listEditAction,
              },
            ],
          },

          { path: "new", element: <NewList />, action: newListAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
