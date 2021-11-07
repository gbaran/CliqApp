import { getById } from "../helpers/getters";
import { loginScreen } from "../locators/loginScreen";

export const loginScreenElements = {
    loginContainer: getById(loginScreen.loginContainer)
}
