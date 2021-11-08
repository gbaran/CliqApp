import { getById, getByText } from "../helpers/getters";
import { categoriesScreen } from "../locators/categoriesScreen";

export const categoriesScreenElements = {
    beautyCategory: getByText(categoriesScreen.beautyCategoryButtonId),
    categoriesList: getById(categoriesScreen.categoriesListId)
}