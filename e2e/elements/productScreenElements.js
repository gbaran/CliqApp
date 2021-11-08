import { getById } from "../helpers/getters";
import { productScreen } from "../locators/productScreen";

export const productScreenElements = {
    addToBagButton: getById(productScreen.addToBagButtonId),
    buyNowButton: getById(productScreen.buyNowButtonId),
    productContainer: getById(productScreen.productContainerId),
    productDescription: getById(productScreen.productDescriptionId),
    productDiscount: getById(productScreen.productDiscountId),
    productImage: getById(productScreen.productImageId),
    productName: getById(productScreen.productNameId),
    productPrice: getById(productScreen.productPriceId)
}