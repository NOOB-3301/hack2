import { RouterProvider } from "react-router-dom";
import { OCConnect } from "@opencampus/ocid-connect-js";
import router from "./routes";

const opts = {
  redirectUri: "http://localhost:5173/",
  referralCode: "PARTNER6",
};

function App() {
  return (
    <OCConnect opts={opts} sandboxMode={true}>
      <RouterProvider router={router} />
    </OCConnect>
  );
}

export default App;