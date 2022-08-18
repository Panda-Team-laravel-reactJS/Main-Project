import { SectionTitle } from "../core";

const ReasonCard = ({ img, title, description }) => {
	return (
		<div className="reason-card">
			<img src={img} alt="" />
			<h3>{title}</h3>
			<hr />
			<p>{description}</p>
		</div>
	);
};

const Reason = () => {
	return (
		<section className="reason_section">
			<SectionTitle title="HÃY ĐẾN VỚI CHÚNG TÔI" />
			<div className="reason-container">
				<ReasonCard
					img="/images/reason/rs1.png"
					title="Break from Routine"
					description="Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình."
				/>
				<ReasonCard
					img="/images/reason/rs2.png"
					title="Improves Blood Circulation"
					description="Cung cấp thêm oxy & chất dinh dưỡng cho các tế bào."
				/>
				<ReasonCard
					img="/images/reason/rs3.png"
					title="Manage Chronic Conditions"
					description="Liệu pháp xoa bóp mang lại lợi ích vượt trội cho việc kiểm soát cơn đau."
				/>
				<ReasonCard
					img="/images/reason/rs4.png"
					title="Body Mind & Soul"
					description="Spa cải thiện cảm giác tốt và mang lại sự hài hòa cho cơ thể, tâm
						trí và tâm hồn."
				/>
				<ReasonCard
					img="/images/reason/rs5.png"
					title="Deep Tissue Massage"
					description="Chuyên gia trị liệu làm giảm căng thẳng cơ bắp và chuột rút."
				/>
				<ReasonCard
					img="/images/reason/rs6.png"
					title="Keeping Fit & Healthy"
					description="Spa giảm cân thêm để giữ cho cơ thể của bạn trong hình dạng."
				/>
        </div>
		</section>
	);
};
export { Reason as default, ReasonCard };
