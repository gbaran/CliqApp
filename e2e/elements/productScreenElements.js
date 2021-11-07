import { getById } from "../helpers/getters";
import { productScreen } from "../locators/productScreen";

export const productScreenElements = {
    addToBagButton: getById(productScreen.addToBagButton),
    buyNowButton: getById(productScreen.buyNowButton),
    productContainer: getById(productScreen.productContainer),
    productDescription: getById(productScreen.productDescription),
    productDiscount: getById(productScreen.productDiscount),
    productImage: getById(productScreen.productImage),
    productName: getById(productScreen.productName),
    productPrice: getById(productScreen.productPrice)
}