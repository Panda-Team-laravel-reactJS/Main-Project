import axios from "axios";
import { useEffect, useState } from "react";
import { SectionTitle } from "../core";

const StaffCard = ({ staff }) => {
	return (
		<div className="staff-card">
			<div className="img-cont">
				<img
					src="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/06/Therapist-4-1.jpg"
					alt=""
				/>
				<div className="overlay"></div>
				<div className="btn-staff-booking">
					<a href="#"> Đặt lịch hẹn ngay </a>
				</div>
			</div>
			<div className="card-bottom">
				<div className="info">
					<h2>{staff.name}</h2>
					<h3>{staff.position}</h3>
				</div>
				<p>
					Thứ Hai đến Thứ Sáu <br /> 08:00 – 17:00
				</p>
			</div>
		</div>
	);
};

const Staff = () => {
	const [staffList, setStaffList] = useState([])
	useEffect(() => {
		const getStaffList = async () => {
			const staffList = await axios.get()
		}
	})
	return (
		<section className="staff_section">
			<SectionTitle title="Đội ngũ nhân viên" />
			<div className="staff">
				{[1, 2, 3].map((ele) => (
					<StaffCard key={ele} staff={{ name: "Nguyen Dang Ky", position: "Owner" }} />
				))}
			</div>
		</section>
	);
};
export { Staff as default, StaffCard };
