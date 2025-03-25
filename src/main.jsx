import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {HeroUIProvider} from "@heroui/react";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <HeroUIProvider>
        <ScrollToTop />
        <App />
      </HeroUIProvider>
    </StrictMode>
  </BrowserRouter>
);
