const FormInput = ({
	title,
	name,
	type = "text",
	placeholder,
	className,
	onChange,
	value,
}) => {
	return (
		<div className={`form-input ${className}`}>
			<label htmlFor={name}>{title}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
export default FormInput;
