import axios from "axios";
import { useEffect, useState } from "react";
import { SERVICES_API_URL } from "../../utils/constants";
import NumberHelper from "../../utils/NumberHelper";
import { SectionTitle } from "../core";

const ServiceCard = ({ img, name, price }) => {
	return (
		<div className="service">
			<img src={img} alt="" />
			<h4 className="service-name">{name}</h4>
			<h4 className="service-price">
				{NumberHelper.formatWithComma(price)} VNĐ
			</h4>
		</div>
	);
};

const ServicesPrice = () => {
	const [serviceList, setServiceList] = useState([]);
	useEffect(() => {
		const getServiceList = async () => {
			setServiceList(
				(await axios.get(SERVICES_API_URL, { displayAtHome: true })).data.data
			);
		};
		getServiceList();
	}, []);
	return (
		<section className="services-price_section">
			<div className="left-content">
				<SectionTitle title="Bảng giá dịch vụ" />
				<div className="service-container">
					{serviceList.map((service) => (
						<ServiceCard
							key={service.id}
							img="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/07/Procedure-11-150x150.jpg"
							name={service.name}
							price={service.price}
						/>
					))}
				</div>
			</div>
			<div className="right-content">
				<div className="cont">
					<SectionTitle title="HÃY ĐỂ CHÚNG TÔI PHỤC VỤ BẠN" />
					<a href="#booking-form" className="btn-go-to-booking">
						Đặt dịch vụ{" "}
					</a>
				</div>
			</div>
		</section>
	);
};
export default ServicesPrice;
