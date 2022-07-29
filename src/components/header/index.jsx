import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-fixed">

	<div className="header-limiter">

		<h1><a href="/">May<span>Spa</span></a></h1>

		<nav>
			<Link to="/">TRANG CHỦ</Link>
			<Link to="/AboutUs">GIỚI THIỆU</Link>
			<Link to="/Services">DỊCH VỤ</Link>
			<Link to="#">TIN TỨC</Link>
			<Link to="/Contact">LIÊN HỆ</Link>
		</nav>

	</div>

</header>
  );
};
export default Header;
