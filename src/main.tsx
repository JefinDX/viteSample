import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import NavBar from "./components/NavBar";
import "./index.css";
import NewLayout from "./NewLayout";
// import App from "./App.tsx";
import Home from "./app_page.tsx";
import ImageCarousel from "./components/new-image-carousel";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NavBar /> */}
    {/* <Home /> */}
    <NewLayout>
      <div className="container mx-auto">
        <ImageCarousel />
        <div className="mt-8">
          <Home />
        </div>
      </div>
    </NewLayout>
  </StrictMode>
);
