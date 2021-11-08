import { getByText } from "../helpers/getters";
import { sideMenu } from "../locators/sideMenu";

export const sideMenuElements = {
    categoriesButton: getByText(sideMenu.categoriesButtonId),
    productsButton: getByText(sideMenu.productsButtonId),
    loginButton: getByText(sideMenu.loginButtonId)
}