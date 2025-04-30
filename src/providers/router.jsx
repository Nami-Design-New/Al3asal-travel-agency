import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Error from "../routes/Error";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import AboutUs from "../routes/About";
import MyTrips from "../routes/MyTrips";
import UserProfile from "../routes/UserProfile";

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
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element:<AboutUs />,
      },
      {
        path: "/my-trips",
        element: <MyTrips />,
      },
      {
        path: "edit-profile",
        element:<UserProfile/>,
      },
    ],
  },
]);
