import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
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
import EditWordForm from "./pages/EditWordForm";
import NewWordForm from "./pages/NewWordForm";
import { action as wordFormAction } from "./components/Word/WordForm";
import Login, { action as loginAction } from "./pages/Login";
import Signup, { action as signupAction } from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <HomePage /> },

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
                action: actionOnList,
              },
              {
                path: "new",
                element: <NewWordForm />,
                action: wordFormAction,
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
                    element: <EditWordForm />,
                    action: wordFormAction,
                  },
                ],
              },
            ],
          },

          { path: "new", element: <NewList />, action: actionOnList },
        ],
      },
      { path: "login", element: <Login />, action: loginAction },
      { path: "signup", element: <Signup />, action: signupAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
