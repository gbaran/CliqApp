import { getByText } from "../helpers/getters";
import { sideMenu } from "../locators/sideMenu";

export const sideMenuElements = {
    categoriesButton: getByText(sideMenu.categoriesButton),
    productsButton: getByText(sideMenu.productsButton),
    loginButton: getByText(sideMenu.loginButton)
}