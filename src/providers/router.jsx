import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Error from "../routes/Error";
import Home from "../routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
