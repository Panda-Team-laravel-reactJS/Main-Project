import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
	Error,
	FormInput,
	SectionTitle,
	ShowPassword,
} from "../components/core";
import LoadingSpinner from "../components/core/LoadingSpinner";
import { DEFAULT_REGISTER_ERRORS, DEFAULT_REGISTER_INFO, REGISTER_API_URL } from "../utils/constants";

const RegisterPage = () => {
	const [info, setInfo] = useState(DEFAULT_REGISTER_INFO);
	const [errors, setErrors] = useState(DEFAULT_REGISTER_ERRORS);
	const [isSentRegisterRequest, setIsSentRegisterRequest] = useState(false);
	const [pwdType, setPwdType] = useState("password");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate()
	const changeInputHandler = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	const showPwdHandler = (e) => {
		setPwdType(pwdType === "text" ? "password" : "text");
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		const {data: res} = await axios.post(REGISTER_API_URL, {...info, isSentOnce: isSentRegisterRequest});
		setIsLoading(false)
		if (res.status)
			if (!isSentRegisterRequest) {
				setErrors(DEFAULT_REGISTER_ERRORS)
				setIsSentRegisterRequest(true);
			} 
			else {
				swal("Successfull!", "Bạn đã đăng ký thành công!\nHãy đăng nhập cùng MaySpa!", "success")
				.then(() => {
					navigate("/login")
				})
			}
		else setErrors(res.errors);
		// console.log(res);	
	};
	return (
		<section className="register_section">
			<form onSubmit={submitHandler}>
				<SectionTitle
					title="Đăng ký để đặt lịch và nhận ưu đãi nào"
					className="register-title"
				/>
				<FormInput
					name="name"
					title="Họ và tên:"
					placeholder="Nhập tên của bạn..."
					onChange={changeInputHandler}
					value={info.name}
				/>
				{errors.name && <Error description={errors.name} />}
				<FormInput
					name="address"
					title="Địa chỉ:"
					placeholder="Nhập địa chỉ của bạn..."
					onChange={changeInputHandler}
					value={info.address}
				/>
				{errors.address && <Error description={errors.address} />}
				<FormInput
					name="phoneNumber"
					title="Số điện thoại:"
					placeholder="Nhập số điện thoại của bạn..."
					onChange={changeInputHandler}
					value={info.phoneNumber}
				/>
				{errors.phoneNumber && <Error description={errors.phoneNumber} />}
				<FormInput
					name="email"
					title="Email:"
					placeholder="Nhập email của bạn..."
					onChange={changeInputHandler}
					value={info.email}
				/>
				{errors.email && <Error description={errors.email} />}
				<div className="form-input">
					<label htmlFor="gender">Giới tính: </label>
					<select name="gender">
						<option value="Male">Nam</option>
						<option value="Female">Nữ</option>
						<option value="Others">Khác</option>
					</select>
				</div>
				{isSentRegisterRequest && (
					<>
						<FormInput
							name="otp"
							title="Mã OPT:"
							type="text"
							placeholder="Nhập mã OTP đã nhận..."
							onChange={changeInputHandler}
							value={info.otp}
						/>
						{errors.otp && <Error description={errors.otp} />}
						<FormInput
							name="username"
							title="Tên đăng nhập:"
							type="text"
							placeholder="Nhập tên đăng nhập bạn muốn..."
							onChange={changeInputHandler}
							value={info.username}
						/>
						{errors.username && <Error description={errors.username} />}
						<FormInput
							name="password"
							title="Mật khẩu:"
							type={pwdType}
							placeholder="Nhập mật khẩu bạn muốn..."
							onChange={changeInputHandler}
							value={info.password}
						/>
						{errors.password && <Error description={errors.password} />}
						<ShowPassword onChange={showPwdHandler} />
					</>
				)}
				<div className="form-button">
					<button type="submit">Đăng ký</button>
				</div>
				{isLoading && (
					<div className="loading">
						<LoadingSpinner />
						<div>Loading...</div>
					</div>
				)}
			</form>
		</section>
	);
};
export default RegisterPage;
