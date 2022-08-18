import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Error, FormInput, SectionTitle, ShowPassword } from "../components/core";
import LoadingSpinner from "../components/core/LoadingSpinner";
import { DEFAULT_RESET_PWD_ERRORS, RESET_PASSWORD_API_URL } from "../utils/constants";

const ResetPasswordPage = () => {

  const [data, setData] = useState({
    email: "",
    otp: "",
    password: ""
  })
  const [errors, setErrors] = useState(DEFAULT_RESET_PWD_ERRORS)
  const [isSentOnce, setIsSentOnce] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pwdType, setPwdType] = useState("password")
  const navigate = useNavigate()
  const showPwdHandler = (e) => {
		setPwdType(pwdType === "text" ? "password" : "text");
	};
  const changeInputHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)
		const {data: res} = await axios.post(RESET_PASSWORD_API_URL, {...data, isSentOnce});
		setIsLoading(false)
		if (res.status)
			if (!isSentOnce) {
				setErrors(DEFAULT_RESET_PWD_ERRORS)
				setIsSentOnce(true);
			} 
			else {
				swal("Successfull!", "Bạn đã đổi mật khẩu thành công!\nHãy đăng nhập cùng MaySpa!", "success")
				.then(() => {
					navigate("/login")
				})
			}
		else setErrors(res.errors);
  }
  return (
		<div className="reset-password_section">
			<form onSubmit={submitHandler}>
				<SectionTitle
					title="Lấy lại mật khẩu"
					className="reset-password-title"
				/>
				<FormInput
					name="email"
					title="Email:"
					placeholder="Nhập email của bạn..."
					onChange={changeInputHandler}
					value={data.email}
				/>
				{errors.email && <Error description={errors.email} />}
				{isSentOnce && (
					<>
						<FormInput
							name="otp"
							title="Mã OPT:"
							type="text"
							placeholder="Nhập mã OTP đã nhận..."
							onChange={changeInputHandler}
							value={data.otp}
						/>
						{errors.otp && <Error description={errors.otp} />}
						<FormInput
							name="password"
							title="Mật khẩu:"
							type={pwdType}
							placeholder="Nhập mật khẩu bạn muốn..."
							onChange={changeInputHandler}
							value={data.password}
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
		</div>
	);
}
export default ResetPasswordPage