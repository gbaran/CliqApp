import { homeScreenElements } from "./elements/homeScreenElements";
import { loginScreenElements } from "./elements/loginScreenElements";
import { sideMenuElements } from "./elements/sideMenuElements";
import { waitForHomeScreenToLoad } from "./helpers/waits";

describe('Sample CliqApp e2e tests', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      // await device.reloadReactNative();
    });

    it.skip('validates login screen', async () => {
      // application takes some time to load home screen
      // added additional wait to avoid failures
      await waitForHomeScreenToLoad()
      
      await homeScreenElements.menuButton().tap();
      await sideMenuElements.loginButton().tap()
  
      await expect(loginScreenElements.loginContainer()).toBeVisible();
  })
})