import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import "./assets/scss/index.scss";
import { ServicesPrice } from "./components/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="Services" element={<ServicesPrice />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
