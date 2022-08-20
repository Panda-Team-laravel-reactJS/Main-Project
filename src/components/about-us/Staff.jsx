import axios from "axios";
import { useEffect, useState } from "react";
import { IMAGE_URL, STAFF_API_URL } from "../../utils/constants";
import { SectionTitle } from "../core";

const StaffCard = ({ staff }) => {
	return (
		<div className="staff-card">
			<div className="img-cont">
				<img src={IMAGE_URL + staff.image} alt="" />
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
	const [staffList, setStaffList] = useState([]);
	useEffect(() => {
		const getStaffList = async () => {
			const { data: staffList } = (await axios.get(STAFF_API_URL)).data;
			setStaffList(staffList);
		};
		getStaffList();
	}, []);
	console.log(staffList)
	return (
		<section className="staff_section">
			<SectionTitle title="Đội ngũ nhân viên" />
			<div className="owner">
				{staffList.length !== 0 && <StaffCard
					staff={staffList.filter(staff => staff.position === "Chủ Spa")[0]}
				/>}
			</div>
			<div className="staff">
				{staffList
					.filter((staff) => staff.position === "Nhân viên")
					.map((staff) => (
						<StaffCard key={staff.id} staff={staff} />
					))}
			</div>
		</section>
	);
};
export { Staff as default, StaffCard };
