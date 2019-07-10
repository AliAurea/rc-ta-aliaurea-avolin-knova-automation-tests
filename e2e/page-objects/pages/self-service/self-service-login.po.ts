import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { BasePageHelper } from '../base-page.helper';

import { SelfServiceLoginPageConstant } from './self-service-login.constant';

const tag = HtmlHelper.tags;
const names = SelfServiceLoginPageConstant.elementNames;

export class SelftServiceLoginPage extends BasePageHelper {
    private static readonly names = SelfServiceLoginPageConstant.elementNames;
    private static readonly attr = SelfServiceLoginPageConstant.attributes;

    static get loginForm() {
        return {
            username: $(by.id(this.attr.id.username), this.names.username),
            password: $(by.id(this.attr.id.password), this.names.password),
            login: $(by.id(this.attr.id.login), this.names.login),
            loginLink: $(by.cssContainingText(tag.span, names.login), names.login),
            logoutLink: $(by.cssContainingText(tag.span, names.logout), names.logout),
            saveLoginChk: $(by.css(`${tag.input}[name="${this.names.saveLogin}"]`), this.names.saveLogin),
            selfServiceLogin: $(by.cssContainingText(tag.td, this.names.selfServiceLogin),
                this.names.selfServiceLogin
            ),
            resetButton: $(by.id(this.names.resetButton), this.names.resetButton),
            registerNowLink: $(by.cssContainingText(tag.a, this.names.registerNow), this.names.registerNow),
            cutomerMicrosite: $(by.cssContainingText('.HD_tab_text_on', this.names.customerMicrosite),
                this.names.customerMicrosite
            ),
            forgotPassLink: $(by.cssContainingText(tag.a, this.names.forgotPassword), this.names.forgotPassword),
            forgotPassHeader: $(by.cssContainingText(tag.td, this.names.forgotPassHeader),
                this.names.forgotPassHeader
            ),
            temporaryPassword: $(by.cssContainingText(tag.li, this.names.temporaryPassword),
                this.names.temporaryPassword
            ),
        };
    }

    static get customerMicrositeForm() {
        const label = SelfServiceLoginPageConstant.customerMicrosite;
        return {
            userNameTxt: this.getTextboxByName(label.userNameTxt),
            passwordTxt: this.getTextboxByName(label.passwordTxt),
            confirmPasswordTxt: this.getTextboxByName(label.confirmPasswordTxt),
            firstNameTxt: this.getTextboxByName(label.firstNameTxt),
            lastNameTxt: this.getTextboxByName(label.lastNameTxt),
            emailTxt: this.getTextboxByName(label.emailTxt),
            submitBtn: $(by.css(`input[value=${this.names.submit}]`), this.names.submit),
            registeringMsg: $(by.cssContainingText(tag.p, this.names.registeringMsg), this.names.registeringMsg),
        };
    }

    private static getTextboxByName(name: string) {
        return $(by.css(`input[name="${name}"]`), name);
    }

    url(): string {
        return EndpointHelper.selfservice;
    }
}
