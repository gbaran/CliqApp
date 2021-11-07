import { getById, getByText } from "../helpers/getters";
import { categoriesScreen } from "../locators/categoriesScreen";

export const categoriesScreenElements = {
    beautyCategory: getByText(categoriesScreen.beautyCategoryButton),
    categoriesList: getById(categoriesScreen.categoriesList)
}