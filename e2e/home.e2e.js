import { homeScreenElements } from "./elements/homeScreenElements";
import { waitForHomeScreenToLoad } from "./helpers/waits";

describe('Sample CliqApp e2e tests', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      // await device.reloadReactNative();
    });

    it('validates if product lists on home screen are scrollable', async () => {
      // application takes some time to load home screen
      // added additional wait to avoid failures
      await waitForHomeScreenToLoad()
  
      await homeScreenElements.trendingShoesList().scrollTo('right');
      await homeScreenElements.latestClothesList().scrollTo('right');
      await homeScreenElements.recentlyVievewList().scrollTo('bottom');
  })
})