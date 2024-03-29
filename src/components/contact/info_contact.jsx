import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SectionTitle } from "../core";

const InforContact = () => {
  return (
		<div className="container-infor-contact">
			<SectionTitle title="Thông tin liên hệ" className="title" />
			<div className="infor-contact">
				<div className="info-box">
					<h2>ĐỊA CHỈ</h2>
					<FaLocationArrow className="icons-contact" />
					<h3>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</h3>
				</div>

				<div className="info-box">
					<h2> ĐIỆN THOẠI </h2>
					<FaPhoneAlt className="icons-contact" />
					<h3> 1900 636 648</h3>
					<h4>(Bấm 109 – Phòng kinh doanh</h4>
					<h4>Bấm 103 – Phòng kỹ thuật)</h4>
				</div>

				<div className="info-box">
					<h2>EMAIL</h2>
					<FaEnvelope className="icons-contact" />
					<h3> demonhunterg@gmail.com</h3>
					<h4>mon@mona.media</h4>
				</div>
			</div>
		</div>
	);
};
export default InforContact;
