import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ResetPassWord from "./Pages/ResetPassword/ResetPassword";
import Myshifts from "./Pages/Myshifts/Myshifts";
import Shift from "./Pages/Shift/Shift";
import Report from "./Pages/Report/Report";
import Staff from "./Pages/Staff/Staff";
import Account from "./Pages/Account/Account";
import UpdatePassword from "./Pages/UpdatePassword/UpdatePassword";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ResetPassWord />,
    },
    {
      path: "/myshifts",
      element: <Myshifts />,
    },
    {
      path: "/shift/:id",
      element: <Shift />,
    },
    {
      path: "/report",
      element: <Report />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/myaccount",
      element: <Account />,
    },
    {
      path: "/reset/KsJhRzLbWgVn4fE2aZpXqYcDxuIo0mKsJhRzLbWgVn4fE2a",
      element: <UpdatePassword />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
