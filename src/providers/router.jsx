import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Error from "../routes/Error";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import AboutUs from "../routes/About";
import Flights from "../routes/Flights";
import Terms from "../routes/Terms";
import Privacy from "./../routes/Privacy";
import Blogs from "../routes/Blogs";
import BlogDetails from "../routes/BlogDetails";
import FAQ from "../routes/Faq";
import Checkout from "../routes/Checkout";
import Profile from "../routes/Profile";
// import PaymentMethods from "../components/profile/PaymentMethods";
import Trips from "../components/profile/Trips";
// import MyProfile from "../components/profile/MyProfile";

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
        element: <AboutUs />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: ":id",
            element: <BlogDetails />,
          },
        
          
        ],
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "my-trips",
            element: <Trips />,
          },
        ],
      }
      
    ],
  },
]);
