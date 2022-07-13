import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import HomePage from "./pages/home";
import "./assets/scss/index.scss";
import AboutUs from "./pages/about_us";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<HomePage />}/>
				<Route path="AboutUs" element={<AboutUs/>} />
			</Route>
		</Routes>
	</BrowserRouter>
)
