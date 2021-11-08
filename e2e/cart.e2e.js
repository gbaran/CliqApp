import { cartScreenElements } from "./elements/cartScreenElements"
import { homeScreenElements } from "./elements/homeScreenElements"
import { productScreenElements } from "./elements/productScreenElements"
import { waitForHomeScreenToLoad } from "./helpers/waits"

describe('Sample CliqApp e2e tests', () => {
    beforeAll(async () => {
      await device.launchApp()
    })
  
    beforeEach(async () => {
      await device.reloadReactNative()
    })

    it('validates cart details', async () => {
    await waitForHomeScreenToLoad()

    // choose product from vertical list
    await homeScreenElements.scroll().scroll(100, 'down')
    await homeScreenElements.verticalProductList().atIndex(0).tap()
    await expect(productScreenElements.productContainer()).toBeVisible()

    // save data for further validation
    const productName = await productScreenElements.productName().getAttributes()
    const productPrice = await productScreenElements.productPrice().getAttributes()

    // add product to bag
    await productScreenElements.addToBagButton().tap()
    await expect(cartScreenElements.cartContainer()).toBeVisible()

    // validate displayed data, only few
    await expect(cartScreenElements.cartProductDescription()).toHaveText(productName.text)
    await expect(cartScreenElements.cartProductPrice()).toHaveText(productPrice.text)
    })
})