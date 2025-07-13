import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactUS/ContactUs.jsx";
import User from "./User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Team from "./components/Team/Team.jsx";
import Login from "./components/LogIn/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUs",
        element: <Contact />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/github",
        element: <Github />,
      },
      {
        path:'/team',
        element:<Team/>
      }
     
    ],
  },{
    path:'/login',
    element:<Login/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
