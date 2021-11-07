import { getById } from "../helpers/getters";
import { homeScreen } from "../locators/homeScreen";

export const homeScreenElements = {
    latestClothesList: getById(homeScreen.latestClothesList),
    menuButton: getById(homeScreen.menuButton),
    recentlyVievewList: getById(homeScreen.recentlyVievewList),
    scroll: getById(homeScreen.scroll),
    trendingShoesList: getById(homeScreen.trendingShoesList),
    verticalProductList: getById(homeScreen.verticalProductList)
} 
