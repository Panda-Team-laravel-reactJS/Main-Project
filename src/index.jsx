import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
// import "./assets/scss/index.scss";
import { AboutUs, ExamplePage, HomePage, ServicesPage} from "./pages";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainLayout />}>
				{/* <Route path="/" element={<HomePage />}/> */}
				<Route path="AboutUs" element={<AboutUs/>} />
				<Route path="Example" element={<ExamplePage />} />
				<Route path="Services" element={<ServicesPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
