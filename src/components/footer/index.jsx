import { Link } from "react-router-dom"

const Footer = () => {
	const data = require("../../data/MaySpaInfo.json")
  return (
		<footer className="footer-distributed">
			<div className="footer-left">
				<h3>
					May<span>Spa</span>
				</h3>

				<p className="footer-links">
					<Link to="/">Trang Chủ</Link>·<Link to="/AboutUs">Giới Thiệu</Link>·
					<Link to="/Services">Dịch vụ</Link>·<Link to="/Contact">Liên Hệ</Link>
				</p>

				<div className="footer-icons">
					<a href="#">
						<i className="fa-brands fa-facebook-f"></i>
					</a>
					<a href="#">
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a href="#">
						<i className="fa-brands fa-twitter"></i>
					</a>
					<a href="#">
						<i className="fa-solid fa-earth-asia"></i>
					</a>
				</div>
			</div>

			<div className="footer-right">
				<h1>THÔNG TIN LIÊN HỆ</h1>
				<h2>{data.address}</h2>
				<h2>
					<a href={`tel:+${data.phoneNumber}`}>{data.phoneNumber}</a>
				</h2>
				<h2>
					<a href={`mailto:${data.email}`}>{data.email}</a>
				</h2>
				<h2>
					<a
						href="https://www.facebook.com/PNVietnam"
						target="_blank"
						rel="noopener noreferrer"
						id="PNV-facebook-link"
					>
						Designed by <b>PNV students</b>
					</a>
				</h2>
			</div>
		</footer>
	);
}
export default Footer