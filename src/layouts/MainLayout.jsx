import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="wrapper">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};
export default MainLayout;
