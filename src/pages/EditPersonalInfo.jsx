import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Error, FormInput, SectionTitle } from "../components/core";
import { EDIT_INFO_API_URL, INFO_API_URL } from "../utils/constants";
import SessionHelper from "../utils/SessionHelper";

const EditPersonalInfo = () => {
	const [data, setData] = useState({
		phoneNumber: "",
		address: "",
	});
	const [errors, setErrors] = useState({
		phoneNumber: "",
		address: ""
	})
	const navigate = useNavigate();
	useEffect(() => {
		const getData = async () => {
			const {userName, accessToken} = SessionHelper.getUserData() || {userName: null, accessToken: null}
			const {data} = await axios.post(INFO_API_URL, {userName, accessToken})
			console.log(data);
			if (!data.status) {
				return navigate('/Login')
			}
			setData(data.info)
		}
		getData()
	}, [])
	const changeInputHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		const {userName, accessToken} = SessionHelper.getUserData()
		const {data: res} = await axios.post(EDIT_INFO_API_URL, {...data, userName, accessToken})
		if (!res.status) return setErrors(res.errors)
		await swal("Chỉnh sửa thông tin thành công!", "", "success")
		navigate(-1)
	};
	return (
		<div className="edit-info_section">
			<form onSubmit={submitHandler}>
				<SectionTitle title="Thay đổi thông tin cá nhân" className="edit-info-title" />
				<FormInput
					title="Số điện thoại: "
					name="phoneNumber"
					placeholder="Nhập số điện thoại mới"
					onChange={changeInputHandler}
					value={data.phoneNumber}
				/>
				{errors.phoneNumber && <Error description={errors.phoneNumber} />}
				<FormInput
					title="Địa chỉ: "
					name="address"
					placeholder="Nhập địa chỉ mới"
					onChange={changeInputHandler}
					value={data.address}
				/>
				{errors.address && <Error description={errors.address} />}
				<div className="form-button">
					<button type="submit">Thay đổi</button>
				</div>
			</form>
		</div>
	);
};
export default EditPersonalInfo;
