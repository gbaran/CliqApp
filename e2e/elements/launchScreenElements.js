import { getById } from "../helpers/getters";
import { launchScreen } from "../locators/launchScreen";

export const launchScreenElements = {
    bottomIcon: getById(launchScreen.launcherBottomIconId),
    image: getById(launchScreen.launcherImageId)
}