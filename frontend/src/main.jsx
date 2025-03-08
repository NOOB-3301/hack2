import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { OCConnect } from "@opencampus/ocid-connect-js";

const opts = {
  redirectUri: "http://localhost:5173/dashboard",
};
createRoot(document.getElementById('root')).render(
  <OCConnect opts={opts} sandboxMode={true}>
    <StrictMode>
      <App />
    </StrictMode>
  </OCConnect>
)
