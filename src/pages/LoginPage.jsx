import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Error, SectionTitle, FormInput, ShowPassword } from "../components/core";
import { LOGIN_API_URL } from "../utils/constants";
import { events } from "../utils/EventEmitter";
import SessionHelper from "../utils/SessionHelper";

const LoginPage = () => {
	const [data, setData] = useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		username: null,
		password: null
	})
	const [pwdType, setPwdType] = useState("password");
	const navigate = useNavigate()
	const changeInputHandler = (e) => {
		setData({...data, [e.target.name]: e.target.value})
	}
  const showPasswordHandler = (e) => {
		setPwdType(pwdType === "text" ? "password" : "text")
  }
	const submitHandler = async (e) => {
		e.preventDefault()
		const res = (await axios.post(LOGIN_API_URL, data)).data
		if (!res.status) return setErrors(res.errors)
		SessionHelper.setUserData(res.userData)
		navigate("/")
		await swal("Đăng nhập thành công!", "", "success")
		events.emit("logedIn")
		// console.log(res);
	}
	return (
		<section className="login_section">
			<form onSubmit={submitHandler}>
				<SectionTitle
					title="Đăng nhập cùng chúng tôi"
					className="login-title"
				/>
				<FormInput
					name="username"
					title="Tên đăng nhập:"
					placeholder="Nhập tên đăng nhập của bạn..."
					value={data.username}
					onChange={changeInputHandler}
				/>
				{errors.username && (
					<Error description={errors.username} className="login-error" />
				)}
				<FormInput
					name="password"
					type={pwdType}
					title="Mật khẩu:"
					placeholder="Nhập tên đăng nhập của bạn..."
					value={data.password}
					onChange={changeInputHandler}
				/>

				{errors.password && (
					<Error description={errors.password} className="login-error" />
				)}
				<ShowPassword onChange={showPasswordHandler} />
				<div className="forgot-password">
					<Link to="/ResetPassword">Bạn đã quên mật khẩu ?</Link>
				</div>
				<div className="form-button">
					<button type="submit">Đăng nhập</button>
				</div>
			</form>
		</section>
	);
};
export default LoginPage;
