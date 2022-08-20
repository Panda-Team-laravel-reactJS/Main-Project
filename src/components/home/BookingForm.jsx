import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BOOKING_API_URL, CATEGORIES_API_URL, DEFAULT_BOOKING_ERRORS } from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";
import { Error } from "../core";

const BookingForm = () => {
	const [categoryList, setCategoryList] = useState([]);
	const [serviceList, setServiceList] = useState([]);
	const [data, setData] = useState({
		category: null,
		service: null,
		expectedDate: "",
		expectedTime: ""
	});
	const [errors, setErrors] = useState(DEFAULT_BOOKING_ERRORS);
	const navigate = useNavigate()
	useEffect(() => {
		const getCate = async () => {
			setCategoryList((await axios.get(CATEGORIES_API_URL)).data.data);
		};
		getCate();
	}, []);
	const changeCateHandler = (e) => {
		setData({ ...data, category: e.target.value });
		setServiceList(
			categoryList.find((cate) => cate.id === Number(e.target.value))
				.serviceList.data
		);
	};
	const changeInputHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(data);
		if (!SessionHelper.isLogedIn()) {
			await swal("Bạn chưa đăng nhập!", "Vui lòng đăng nhập để có thể đăng kí dịch vụ!", "warning")
			return navigate("/Login")
		}
		const {userName, accessToken} = SessionHelper.getUserData() || {userName: null, accessToken: null}
		const {data: res} = await axios.post(BOOKING_API_URL, {...data, userName, accessToken})
		if (!res.status) {
			console.log(res.errors);	
			if (res.errors.accessToken) {
				navigate("/Login")
				await swal("Phiên đăng nhập hết hạn!", "Vui lòng đăng nhập lại!", "warning")
			}
			return setErrors(res.errors) 
		}
		await swal("Quý khách đặt dịch vụ thành công!", "Hãy xem thêm nhiều dịch vụ khác nhé!", "success")
		setErrors(DEFAULT_BOOKING_ERRORS)
	};
	return (
		<section className="booking-form_section" id="booking-form">
			<div className="booking-form">
				<h2>Liên hệ đặt dịch vụ</h2>
				<form onSubmit={submitHandler}>
					<div className="booking-input-group">
						<label htmlFor="category">Loại dịch vụ:</label>
						<select
							className="choose-option"
							name="category"
							onChange={changeCateHandler}
						>
							<option>--Chọn loại dịch vụ--</option>
							{categoryList.map((cate) => (
								<option key={cate.id} value={cate.id}>
									{cate.name}
								</option>
							))}
						</select>
					</div>
					<div className="booking-input-group">
						<label htmlFor="service">Dịch vụ:</label>
						<select
							className="choose-option"
							name="service"
							onChange={changeInputHandler}
						>
							<option>--Chọn dịch vụ--</option>
							{serviceList.map((service) => (
								<option key={service.id} value={service.id}>
									{service.name}
								</option>
							))}
						</select>
					</div>
					{errors.service && <Error description={errors.service} />}
					<div className="booking-input-group">
						<label htmlFor="expectedDate">Ngày dự kiến:</label>
						<input
							type="date"
							name="expectedDate"
							onChange={changeInputHandler}
						/>
					</div>
					{errors.expectedDate && <Error description={errors.expectedDate} />}
					<div className="booking-input-group">
						<label htmlFor="expectedTime">Giờ dự kiến:</label>
						<input
							type="time"
							name="expectedTime"
							onChange={changeInputHandler}
						/>
					</div>
					{errors.expectedTime && <Error description={errors.expectedTime} />}
					<div className="btn-submit-booking">
						<button type="submit">Đặt lịch</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default BookingForm;
