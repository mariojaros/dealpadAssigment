import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootRouter from "./components/RootRouter";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<Starter />);

function Starter() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
              <Route path="*" element={<RootRouter />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
  );
}
