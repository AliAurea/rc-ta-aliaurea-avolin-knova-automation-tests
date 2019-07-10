import { AlertHelper } from '../../../components/html/alert-helper';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';
import { User } from '../models/user.model';

import { SelfServiceHomePageHelper } from './self-service-home-page.helper';
import { SelfServiceLoginPageConstant } from './self-service-login.constant';
import { SelftServiceLoginPage } from './self-service-login.po';

export class SelfServiceLoginPageHelper extends BasePageHelper {
    private static _instance: SelfServiceLoginPageHelper;

    private constructor() {
        super();
    }

    public static getInstance(): SelfServiceLoginPageHelper {
        return this._instance || (this._instance = new this());
    }

    private static async login({ username, password }: User) {
        if (await SelftServiceLoginPage.loginForm.loginLink.item.isPresent()) {
            await SelftServiceLoginPage.loginForm.loginLink.hoverOverAndClick();
        }
        await SelftServiceLoginPage.loginForm.username.sendKeys(username);
        await SelftServiceLoginPage.loginForm.password.sendKeys(password);
        await SelftServiceLoginPage.loginForm.login.hoverOver();
        await SelftServiceLoginPage.loginForm.login.clickButtonJs();
        await AlertHelper.acceptAlertIfExists();
    }

    static async loginAsAdmin() {
        await this.login(CredentialsHelper.admin);
    }

    static async logout() {
        if (await SelftServiceLoginPage.loginForm.logoutLink.item.isPresent()) {
            await SelftServiceLoginPage.loginForm.logoutLink.hoverOverAndClick();
        }
    }

    static async navigateToLoginPage() {
        await SelftServiceLoginPage.loginForm.loginLink.hoverOverAndClick();
        await SelftServiceLoginPage.loginForm.selfServiceLogin.verifyDisplayedStatus();
    }

    static async enterAndVerifyAdminUserName(username: string) {
        await SelftServiceLoginPage.loginForm.username.sendKeys(username);
        await SelftServiceLoginPage.loginForm.username.verifyTextEntered(username);
    }

    static async enterAndVerifyAdminPassword(password: string) {
        await SelftServiceLoginPage.loginForm.password.sendKeys(password);
        await SelftServiceLoginPage.loginForm.password.verifyTextEntered(password);
    }

    static async checkAndVerifySaveLogin() {
        await SelftServiceLoginPage.loginForm.saveLoginChk.clickButton();
        await ExpectationHelper.verifyCheckboxIsChecked(SelftServiceLoginPage.loginForm.saveLoginChk);
    }

    static async clickLoginButton() {
        await SelftServiceLoginPage.loginForm.login.hoverOver();
        await SelftServiceLoginPage.loginForm.login.clickButtonJs();
    }
    static async clickAndVerifyResetButton() {
        await SelftServiceLoginPage.loginForm.resetButton.clickButton();
        await SelftServiceLoginPage.loginForm.username.verifyTextEntered('');
        await SelftServiceLoginPage.loginForm.username.verifyTextEntered('');
    }

    static async clickAndVerifyRegisterNowLink() {
        await SelftServiceLoginPage.loginForm.registerNowLink.clickLink();
        await SelftServiceLoginPage.loginForm.cutomerMicrosite.verifyDisplayedStatus();
    }

    static async enterAndVerifyUserName(username: string) {
        await SelftServiceLoginPage.customerMicrositeForm.userNameTxt.sendKeys(username);
        await SelftServiceLoginPage.customerMicrositeForm.userNameTxt.verifyTextEntered(username);
    }

    static async enterAndVerifyPassword(password: string) {
        await SelftServiceLoginPage.customerMicrositeForm.passwordTxt.sendKeys(password);
        await SelftServiceLoginPage.customerMicrositeForm.passwordTxt.verifyTextEntered(password);
    }

    static async enterAndVerifyConfirmPassword(password: string) {
        await SelftServiceLoginPage.customerMicrositeForm.confirmPasswordTxt.sendKeys(password);
        await SelftServiceLoginPage.customerMicrositeForm.confirmPasswordTxt.verifyTextEntered(password);
    }

    static async enterAndVerifyFirstName(firstName: string) {
        await SelftServiceLoginPage.customerMicrositeForm.firstNameTxt.sendKeys(firstName);
        await SelftServiceLoginPage.customerMicrositeForm.firstNameTxt.verifyTextEntered(firstName);
    }

    static async enterAndVerifyLastName(lastName: string) {
        await SelftServiceLoginPage.customerMicrositeForm.lastNameTxt.sendKeys(lastName);
        await SelftServiceLoginPage.customerMicrositeForm.lastNameTxt.verifyTextEntered(lastName);
    }

    static async enterAndVerifyEmail(email: string) {
        await SelftServiceLoginPage.customerMicrositeForm.emailTxt.sendKeys(email);
        await SelftServiceLoginPage.customerMicrositeForm.emailTxt.verifyTextEntered(email);
    }

    static async fillRegistrationForm(username: string,
                                      password: string,
                                      firstName: string,
                                      lastName: string,
                                      email: string
    ) {
        await SelfServiceLoginPageHelper.navigateToLoginPage();
        await SelfServiceLoginPageHelper.clickAndVerifyRegisterNowLink();
        await this.enterAndVerifyUserName(username);
        await this.enterAndVerifyPassword(password);
        await this.enterAndVerifyConfirmPassword(password);
        await this.enterAndVerifyFirstName(firstName);
        await this.enterAndVerifyLastName(lastName);
        await this.enterAndVerifyEmail(email);
    }

    static async clickAndVerifySubmitSuccess() {
        await SelftServiceLoginPage.customerMicrositeForm.submitBtn.clickButton();
        await SelftServiceLoginPage.customerMicrositeForm.registeringMsg.verifyDisplayedStatus();
    }

    static async clickAndVerifyForgotPassword() {
        await SelftServiceLoginPage.loginForm.forgotPassLink.clickLink();
        await SelftServiceLoginPage.loginForm.forgotPassHeader.verifyDisplayedStatus();
    }

    static async registerNewUser(username: string, email: string) {
        const data = SelfServiceLoginPageConstant.testData;

        await SelfServiceLoginPageHelper.fillRegistrationForm(username,
            data.passwordTxt, data.firstNameTxt,
            data.lastNameTxt, email
        );
        await SelfServiceLoginPageHelper.clickAndVerifySubmitSuccess();
        await SelftServiceLoginPage.loginForm.cutomerMicrosite.clickButton();
        await SelfServiceHomePageHelper.verifyWelcomeLabelDisplayed();
        await SelftServiceLoginPage.loginForm.logoutLink.verifyDisplayedStatus();
        await SelfServiceLoginPageHelper.logout();
        await SelftServiceLoginPage.loginForm.selfServiceLogin.verifyDisplayedStatus();
    }

    static async registerNewUserNoLogout(username: string, email: string) {
        const data = SelfServiceLoginPageConstant.testData;

        await SelfServiceLoginPageHelper.fillRegistrationForm(username,
            data.passwordTxt, data.firstNameTxt,
            data.lastNameTxt, email
        );
        await SelfServiceLoginPageHelper.clickAndVerifySubmitSuccess();
        await SelftServiceLoginPage.loginForm.cutomerMicrosite.clickButton();
        await SelfServiceHomePageHelper.verifyWelcomeLabelDisplayed();
    }

    static async verifyLoginPageDisplayed() {
        await SelftServiceLoginPage.loginForm.selfServiceLogin.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.selfservice;
    }
}
