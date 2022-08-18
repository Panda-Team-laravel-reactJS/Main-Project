export default class NumberHelper {
	static formatWithComma = (number) => {
		return Intl.NumberFormat().format(number);
	};
}
