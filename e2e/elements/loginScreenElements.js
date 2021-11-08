import { getById, getByText } from "../helpers/getters"
import { alertWindow, loginScreen } from "../locators/loginScreen"

export const loginScreenElements = {
    continueButton: getById(loginScreen.continueButtonId),
    loginContainer: getById(loginScreen.loginContainerId),
    mobileNumberInputField: getById(loginScreen.mobileNumberInputFieldId),
    resentOtpButton: getById(loginScreen.resentOtpButtonId),
    otpNumberField: getById(loginScreen.otpNumberFieldId),
    firstOtpField: getById(loginScreen.firstOtpNumberFieldId),
    secondOtpField: getById(loginScreen.secondOtpNumberFieldId),
    thirdOtpField: getById(loginScreen.thirdOtpNumberFieldId),
    fourthOtpField: getById(loginScreen.fourthOtpNumberFieldId),
    fifthOtpField: getById(loginScreen.fifthOtpNumberFieldId),
    sixthOtpField: getById(loginScreen.sixthOtpNumberFieldId),
}

export const alertWindowElements = {
    alertTitle: getByText(alertWindow.alertTitleText),
    alertWindowOkButton: getByText(alertWindow.alertOkButtonText)
}
