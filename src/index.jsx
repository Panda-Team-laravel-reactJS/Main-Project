import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { HomePage, ServicesPage, ContactPage, AboutUsPage, LoginPage, RegisterPage, ResetPasswordPage, EditPersonalInfo } from "./pages";
import Test from "./pages/Test";
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
				<Route path="/Login" element={<LoginPage />} />
				<Route path="/Register" element={<RegisterPage />} />
				<Route path="/ResetPassword" element={<ResetPasswordPage />} />
				<Route path="/EditPersonalInfo" element={<EditPersonalInfo />} />
				<Route path="/Test" element={<Test />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
