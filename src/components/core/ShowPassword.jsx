const ShowPassword = ({onChange}) => {
  return (
		<div className="show-password">
			<input
				type="checkbox"
				name="showPassword"
				onChange={onChange}
			/>
			<label htmlFor="showPassword"> Hiển thị mật khẩu</label>
		</div>
	);
}
export default ShowPassword