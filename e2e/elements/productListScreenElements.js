import { getById } from "../helpers/getters";
import { productListScreen } from "../locators/productListScreen";

export const productListScreenElements = {
    productList: getById(productListScreen.productListId),
    productListItem: getById(productListScreen.productListItemId)
}