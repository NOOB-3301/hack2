import { createBrowserRouter } from "react-router-dom";
import Home from "./Comps/Home";
import About from "./Comps/About";
import LandingPage from "./Comps/Auth/AuthComp";
import Dashboard from "./Comps/dashboard/Dashboard";

import { LoginCallBack } from '@opencampus/ocid-connect-js';


// const loginSuccess = () => {window.location.href = "/dashboard";}
// const loginError = () => {console.log("not logged in");}
const loginSuccess = () => {window.location.href = "/dashboard";}
const loginError = () => {console.log("not logged in");}

const router = createBrowserRouter([
  // {path:"/dashboard", element: <Dashboard/>},
  { path: "/", element: <LandingPage/> },
  { path: "/about", element: <About /> },
  {path:"/dashboard", element: <LoginCallBack errorCallback={loginError} successCallback={<Dashboard/>}  />},
]);

export default router;
