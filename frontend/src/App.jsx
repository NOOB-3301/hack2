import { RouterProvider } from "react-router-dom";
import { OCConnect } from "@opencampus/ocid-connect-js";
import router from "./routes";

const opts = {
  redirectUri: "http://localhost:5173/dashboard",
};

function App() {
  return (

      <RouterProvider router={router} />
    // </OCConnect>
  );
}

export default App;