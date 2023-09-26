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
import NewList from "./pages/NewList";
import Edit from "./pages/Edit";
import { action as actionOnList } from "./components/List/ListForm";
import WordDetail, {
  loader as WordDetailLoader,
  action as wordDeleteAction,
} from "./pages/WordDetail";
import WordFormEdit, { action as wordEditAction } from "./pages/WordFormEdit";

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
                // path: "",
                element: <ListDetail />,
                action: deleteListAction,
                // children: [
                //   {
                //     path: ":wordId",
                //     element: <WordDetail />,
                //   },
                // ],
              },
              {
                path: "edit",
                element: <Edit />,
                action: actionOnList,
              },
              {
                path: ":wordId",
                loader: WordDetailLoader,
                id: "word-detail",
                children: [
                  {
                    index: true,
                    element: <WordDetail />,
                    action: wordDeleteAction,
                  },
                  {
                    path: "edit",
                    element: <WordFormEdit />,
                    action: wordEditAction,
                  },
                ],
              },
              // {
              //   path: ":id/edit",
              //   element: <WordFormEdit />,
              // },
            ],
          },

          { path: "new", element: <NewList />, action: actionOnList },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
