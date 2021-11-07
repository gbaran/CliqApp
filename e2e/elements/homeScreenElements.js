import { getById } from "../helpers/getters";
import { homeScreen } from "../locators/homeScreen";

export const homeScreenElements = {
    menuButton: getById(homeScreen.menuButton)
} 
