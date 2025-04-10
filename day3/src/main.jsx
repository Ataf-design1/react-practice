import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Nameprovider from "./context/Nameprovider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Nameprovider>
      <App />
    </Nameprovider>
  </BrowserRouter>
);
