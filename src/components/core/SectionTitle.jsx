const SectionTitle = ({ title, className = "" }) => {
	return (
		<div className={`section-title ${className}`}>
			<h1>May Spa</h1>
			<h3>{title}</h3>
		</div>
	);
};
export default SectionTitle;
