import { getById } from "../helpers/getters";
import { homeScreen } from "../locators/homeScreen";

export const homeScreenElements = {
    latestClothesList: getById(homeScreen.latestClothesListId),
    menuButton: getById(homeScreen.menuButtonId),
    recentlyVievewList: getById(homeScreen.recentlyVievewListId),
    scroll: getById(homeScreen.scrollId),
    trendingShoesList: getById(homeScreen.trendingShoesListId),
    verticalProductList: getById(homeScreen.verticalProductListId)
} 
