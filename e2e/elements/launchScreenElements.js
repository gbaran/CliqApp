import { getById } from "../helpers/getters";
import { launchScreen } from "../locators/launchScreen";

export const launchScreenElements = {
    bottomIcon: getById(launchScreen.launcherBottomIcon),
    image: getById(launchScreen.launcherImage)
}