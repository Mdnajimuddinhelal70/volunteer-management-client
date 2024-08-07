import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import VolunteerNeedDetails from "../components/VolunteerNeedDetails/VolunteerNeedDetails";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerNeedPostDetail from "../pages/VolunteerNeedPostDetail/VolunteerNeedPostDetail";
import UpdateVolunteer from "../components/UpdateVolunteer/UpdateVolunteer";

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
      {
        path: "/volunteerNdPstDtail",
        element: <VolunteerNeedPostDetail />
      },
      {
        path: "/updateVolunteer/:id",
        element: <UpdateVolunteer />
      },
    ]
  },
]);
