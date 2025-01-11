import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import "./index.css";
// import App from "./App.tsx";
import Home from "./app_page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <NavBar />
    <Home />
  </StrictMode>
);
