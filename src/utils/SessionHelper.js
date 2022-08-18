import { USER_DATA_SESSION_KEY } from "./constants"

export default class SessionHelper {
  static getUserData = () => {
    return JSON.parse(sessionStorage.getItem(USER_DATA_SESSION_KEY))
  }
  static setUserData = (userData) => {
    sessionStorage.setItem(USER_DATA_SESSION_KEY, JSON.stringify(userData))
  }
  static isLogedIn = () => {
    return !!this.getUserData(USER_DATA_SESSION_KEY)
  }
}