import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import VolunteerNeedDetails from "../components/VolunteerNeedDetails/VolunteerNeedDetails";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/volunteerDetails/:id",
        element: <VolunteerNeedDetails />
      },
      {
        path: "/addVolunteerPost",
        element: <AddVolunteerPost />
      },
    ]
  },
]);
