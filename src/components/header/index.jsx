import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { events } from "../../utils/EventEmitter";
import SessionHelper from "../../utils/SessionHelper";

const Header = () => {
	const [isLogedIn, setIsLogedIn] = useState(SessionHelper.isLogedIn())
	const navigate = useNavigate()
	const logout = async (e) => {
		SessionHelper.setUserData(null)
		setIsLogedIn(false)
		navigate("/")
		await swal("Đăng xuất thành công!", "", "success")

	}
	useEffect(() => {
		events.on("logedIn", () => {
			setIsLogedIn(true);
		});
	}, []);
	return (
		<header className="header-fixed">
			<div className="header-limiter">
				<h1>
					<a href="/">
						May<span>Spa</span>
					</a>
				</h1>
				<div className="nav-right">
					<nav>
						<Link to="/">TRANG CHỦ</Link>
						<Link to="/AboutUs">GIỚI THIỆU</Link>
						<Link to="/Services">DỊCH VỤ</Link>
						<Link to="/Contact">LIÊN HỆ</Link>
					</nav>
					{isLogedIn ? (
						<div className="loged-in-info">
							<div className="user-info">
								{SessionHelper.getUserData().name}
							</div>
							<div className="user-option">
								<ul>
									<li onClick={logout}>Đăng xuất</li>
									<li>Chỉnh sửa thông tin cá nhân</li>
									<li>Đổi mật khẩu</li>
								</ul>
							</div>
						</div>
					) : (
						<div className="login-register-link">
							<Link to="/Login">Đăng nhập</Link>
							<span> | </span>
							<Link to="/Register">Đăng ký</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
export default Header;
