import { getById } from "../helpers/getters";
import { cartScreen } from "../locators/cartScreen";

export const cartScreenElements = {
    cartContainer: getById(cartScreen.cartContainer),
}