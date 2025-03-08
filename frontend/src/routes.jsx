import { createBrowserRouter } from "react-router-dom";
import Home from "./Comps/Home";
import About from "./Comps/About";
import LandingPage from "./Comps/Landing/LandingPage";
import AuthComp from "./Comps/Auth/AuthComp";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage/> },
  { path: "/about", element: <About /> },
]);

export default router;
