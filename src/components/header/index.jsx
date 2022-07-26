import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header-fixed">

	<div class="header-limiter">

		<h1><a href="/">Company<span>logo</span></a></h1>

		<nav>
			<a href="/">TRANG CHỦ</a>
			<a href="/AboutUs">GIỚI THIỆU</a>
			<a href="#">DỊCH VỤ</a>
			<a href="#">TIN TỨC</a>
			<a href="#">LIÊN HỆ</a>
		</nav>

	</div>

</header>
  );
};
export default Header;
