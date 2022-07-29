import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { HomePage, ServicesPage, ContactPage, AboutUsPage } from "./pages";
import "./assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
