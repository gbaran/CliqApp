import { getById } from "../helpers/getters";
import { cartScreen } from "../locators/cartScreen";

export const cartScreenElements = {
    cartContainer: getById(cartScreen.cartContainerId),
    cartProductDescription: getById(cartScreen.productDescriptionId),
    cartProductPrice: getById(cartScreen.productPriceId)
}