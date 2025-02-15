import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import VolunteerNeedDetails from "../components/VolunteerNeedDetails/VolunteerNeedDetails";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerNeedPostDetail from "../pages/VolunteerNeedPostDetail/VolunteerNeedPostDetail";
import UpdateVolunteerPost from "../components/UpdateVolunteer/UpdateVolunteerPost ";
import ManageMypost from "../components/ManageMypost/ManageMypost";
import NeedPostDetails from "../pages/NeedPostDetails/NeedPostDetails";
import NeedVolunteerSee from "../pages/NeedVolunteerSee/NeedVolunteerSee";
import VolunteerNeedPostDetails from "../components/VolunteerNeedPostDetails/VolunteerNeedPostDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteerSee />,
      },

      {
        path: "/volunteerDetails/:id",
        element: <VolunteerNeedDetails />,
      },
      {
        path: "/addVolunteerPost",
        element: <AddVolunteerPost />,
      },
      {
        path: "/volunteerNdPstDtail",
        element: <PrivateRoute>
          <VolunteerNeedPostDetail />
        </PrivateRoute>,
      },
      {
        path: "/updateVolunteer/:id",
        element: <UpdateVolunteerPost />,
      },

      {
        path: "/volunteerNdPstDtail",
        element: (
          <PrivateRoute>
            <ManageMypost />
          </PrivateRoute>
        ),
      },
      {
        path: "/needPostDetails",
        element: (
          <PrivateRoute>
            <NeedPostDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-need-details/:id",
        element: <PrivateRoute>
          <VolunteerNeedPostDetails />
        </PrivateRoute>,
      },
    ],
  },
]);
