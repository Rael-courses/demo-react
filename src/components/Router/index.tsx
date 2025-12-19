import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Item } from "../../pages/Item";
import { Items } from "../../pages/Items";
import { NotFound } from "../../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "items",
    element: <Items />,
    children: [
      {
        path: ":itemId",
        element: <Item />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
