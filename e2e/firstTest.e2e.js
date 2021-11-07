import { categoriesScreenElements } from "./elements/categoriesScreenElements";
import { homeScreenElements } from "./elements/homeScreenElements";
import { launchScreenElements } from "./elements/launchScreenElements";
import { sideMenuElements } from "./elements/sideMenuElements";
import { waitForHomeScreenToLoad } from "./helpers/waits";

describe('Sample CliqApp e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it.skip('displays launch screen', async () => {
    await expect(launchScreenElements.bottomIcon()).toBeVisible();
    await expect(launchScreenElements.image()).toBeVisible();
  });

  it('changes category', async () => {
    // application takes some time to load home screen
    // added additional wait to avoid failures
    await waitForHomeScreenToLoad()
    
    await homeScreenElements.menuButton().tap();
    await sideMenuElements.categoriesButton().tap()

    await expect(categoriesScreenElements.categoriesList()).toBeVisible();
    await categoriesScreenElements.beautyCategory().tap();
  
  });
});
