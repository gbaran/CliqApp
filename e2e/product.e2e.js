import { cartScreenElements } from "./elements/cartScreenElements"
import { categoriesScreenElements } from "./elements/categoriesScreenElements"
import { homeScreenElements } from "./elements/homeScreenElements"
import { launchScreenElements } from "./elements/launchScreenElements"
import { productListScreenElements } from "./elements/productListScreenElements"
import { productScreenElements } from "./elements/productScreenElements"
import { sideMenuElements } from "./elements/sideMenuElements"
import { waitForHomeScreenToLoad } from "./helpers/waits"

describe('Sample CliqApp e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('changes category', async () => {
    // application takes some time to load home screen
    // added additional wait to avoid failures
    await waitForHomeScreenToLoad()
    
    // navigate to categories list
    await homeScreenElements.menuButton().tap()
    await sideMenuElements.categoriesButton().tap()

    // choose beauty category
    await expect(categoriesScreenElements.categoriesList()).toBeVisible()
    await categoriesScreenElements.beautyCategory().tap()
  
    // validate if product list is displayed
    await expect(productListScreenElements.productList()).toBeVisible()
  })

  it('validates product card', async () => {
    await waitForHomeScreenToLoad()

    // choose product from vertical list
    await homeScreenElements.scroll().scroll(100, 'down')
    await homeScreenElements.verticalProductList().atIndex(0).tap()
    await expect(productScreenElements.productContainer()).toBeVisible()

    // validate if product card elements are displayed
    await expect(productScreenElements.productContainer()).toBeVisible()
    await expect(productScreenElements.productDescription()).toBeVisible()
    await expect(productScreenElements.productDiscount()).toBeVisible()
    await expect(productScreenElements.productImage()).toBeVisible()
    await expect(productScreenElements.productName()).toBeVisible()
    await expect(productScreenElements.addToBagButton()).toBeVisible()
    await expect(productScreenElements.buyNowButton()).toBeVisible()
  })

  it('adds product to bag', async () => {
    await waitForHomeScreenToLoad()

    // choose product from vertical list
    await homeScreenElements.scroll().scroll(100, 'down')
    await homeScreenElements.verticalProductList().atIndex(0).tap()
    await expect(productScreenElements.productContainer()).toBeVisible()

    // add product to bag
    await productScreenElements.addToBagButton().tap()
    await expect(cartScreenElements.cartContainer()).toBeVisible()
  })
  
  it('uses buy now product', async () => {
    await waitForHomeScreenToLoad()

    //choose product from vertical list
    await homeScreenElements.scroll().scroll(100, 'down')
    await homeScreenElements.verticalProductList().atIndex(0).tap()
    await expect(productScreenElements.productContainer()).toBeVisible()

    // use buy now
    await productScreenElements.buyNowButton().tap()
    await expect(cartScreenElements.cartContainer()).toBeVisible()
  })
})
