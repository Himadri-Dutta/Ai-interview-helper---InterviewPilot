import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Interview from "./features/interview/pages/Interview";
import NewHome from "./features/interview/pages/NewHome";
import FrontPage from "./features/auth/pages/FrontPage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/front",
        element: <FrontPage />
    },
    {
        path: "/",
        element: <Protected><NewHome/></Protected>
    },
    {
        path:"/interview/:interviewId",
        element: <Protected><Interview /></Protected>
    }
])