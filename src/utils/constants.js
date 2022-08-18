export const BASE_URL = "http://localhost:8000/";
//api const
export const BASE_API_URL = "http://localhost:8000/api/";
export const IMAGE_URL = BASE_URL + "assets/images/";
export const CATEGORIES_API_URL = BASE_API_URL + "categories/";
export const SERVICES_API_URL = BASE_API_URL + "service/";
export const LOGIN_API_URL = BASE_API_URL + "account/login";
export const REGISTER_API_URL = BASE_API_URL + "account/register";
export const RESET_PASSWORD_API_URL = BASE_API_URL + "account/reset-password";
export const BOOKING_API_URL = BASE_API_URL + "booking";
//session const
export const USER_DATA_SESSION_KEY = "UserData";

// others
export const DEFAULT_REGISTER_ERRORS = {
	name: "",
	email: "",
	phoneNumber: "",
	address: "",
	otp: "",
	username: "",
	password: "",
};
export const DEFAULT_REGISTER_INFO = {
	name: "",
	email: "",
	phoneNumber: "",
	address: "",
	gender: "Male",
	otp: "",
	username: "",
	password: "",
};
export const DEFAULT_BOOKING_ERRORS = {
	service: null,
	expectedDate: null,
	expectedTime: null,
};
export const DEFAULT_RESET_PWD_ERRORS = {
	email: null,
	otp: null,
	password: null,
};