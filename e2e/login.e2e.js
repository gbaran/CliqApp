import { homeScreenElements } from "./elements/homeScreenElements"
import { alertWindowElements, loginScreenElements } from "./elements/loginScreenElements"
import { sideMenuElements } from "./elements/sideMenuElements"
import { getByText } from "./helpers/getters"
import { waitForHomeScreenToLoad } from "./helpers/waits"

describe('Sample CliqApp e2e tests', () => {
    beforeAll(async () => {
      await device.launchApp()
    })
  
    beforeEach(async () => {
      await device.reloadReactNative()
    })

    it('validates login screen', async () => {
      // application takes some time to load home screen
      // added additional wait to avoid failures
      await waitForHomeScreenToLoad()
      
      // navigate to login screen
      await homeScreenElements.menuButton().tap()
      await sideMenuElements.loginButton().tap()
  
      // validate if login form elements are displayed
      await expect(loginScreenElements.loginContainer()).toBeVisible()
      await expect(loginScreenElements.mobileNumberInputField()).toBeVisible()
      await expect(loginScreenElements.continueButton()).toBeVisible()
      await expect(loginScreenElements.firstOtpField()).toBeVisible()
      await expect(loginScreenElements.secondOtpField()).toBeVisible()
      await expect(loginScreenElements.thirdOtpField()).toBeVisible()
      await expect(loginScreenElements.fourthOtpField()).toBeVisible()
      await expect(loginScreenElements.fifthOtpField()).toBeVisible()
      await expect(loginScreenElements.sixthOtpField()).toBeVisible()

  })

    it('submits login form with data', async () => {
      const phoneNumber = '12345678'
      const otpNumber = {
        first: '1',
        second: '2',
        third: '3',
        fourth: '4',
        fifth: '5',
        sixth: '6'
      }
      const alertMessage = '{"phone_number":"'+phoneNumber+'"}'
      // application takes some time to load home screen
      // added additional wait to avoid failures
      await waitForHomeScreenToLoad()
      
      // navigate to login screen
      await homeScreenElements.menuButton().tap()
      await sideMenuElements.loginButton().tap()
      await expect(loginScreenElements.loginContainer()).toBeVisible()

      // fill form with some data
      loginScreenElements.mobileNumberInputField().typeText(phoneNumber)
      loginScreenElements.firstOtpField().typeText(otpNumber.first)
      loginScreenElements.secondOtpField().typeText(otpNumber.second)
      loginScreenElements.thirdOtpField().typeText(otpNumber.third)
      loginScreenElements.fourthOtpField().typeText(otpNumber.fourth)
      loginScreenElements.fifthOtpField().typeText(otpNumber.fifth)
      loginScreenElements.sixthOtpField().typeText(otpNumber.sixth)

      // submit form
      loginScreenElements.continueButton().tap()
      expect(alertWindowElements.alertTitle()).toBeVisible()
      expect(element(by.text(alertMessage))).toBeVisible()

      // close form (somehow alert window was not getting closed when resetting react native)
      alertWindowElements.alertWindowOkButton().tap()
  })

    it('submits empty form', async () => {
      const alertMessage = '[]'
      // application takes some time to load home screen
      // added additional wait to avoid failures
      await waitForHomeScreenToLoad()
        
      // navigate to login screen
      await homeScreenElements.menuButton().tap()
      await sideMenuElements.loginButton().tap()
      await expect(loginScreenElements.loginContainer()).toBeVisible()

      // submit empty form
      loginScreenElements.continueButton().tap()
      expect(alertWindowElements.alertTitle()).toBeVisible()
      expect(element(by.text(alertMessage))).toBeVisible()
      
      // close form (somehow alert window was not getting closed when resetting react native)
      alertWindowElements.alertWindowOkButton().tap()
    })
})