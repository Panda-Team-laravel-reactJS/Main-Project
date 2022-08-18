import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				<h3>May<span>Spa</span></h3>

				<p className="footer-links">
					<Link to="/">Trang Chủ</Link>
					·
					<Link to="/AboutUs">Giới Thiệu</Link>
					·
					<Link to="/Services">Dịch vụ</Link>
					·
					<Link to="/Contact">Liên Hệ</Link>
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
					<a href="#"><i className="fa-brands fa-instagram"></i></a>
					<a href="#"><i className="fa-brands fa-twitter"></i></a>
					<a href="#"><i className="fa-solid fa-earth-asia"></i></a>

				</div>

			</div>

			<div className="footer-right">

				<h1>THÔNG TIN LIÊN HỆ</h1>
        <h2>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM</h2>
        <h2>076 922 0162</h2>
        <h2>demonhunterg@gmail.com</h2>
        <h2>mon@mona.media</h2>

			</div>

		</footer>
  )
}
export default Footer