import { getById } from "../helpers/getters";
import { productListScreen } from "../locators/productListScreen";

export const productListScreenElements = {
    productList: getById(productListScreen.productList),
    productListItem: getById(productListScreen.productListItem)
}