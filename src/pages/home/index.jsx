import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
		<>
			<div>This is home page</div>
			<Outlet />
		</>
	);
}
export default HomePage