import { homeScreen } from "../locators/homeScreen";

export async function waitForHomeScreenToLoad() {
    await waitFor(element(by.id(homeScreen.container))).toBeVisible().withTimeout(15000);
}