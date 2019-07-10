import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { LanguageManagementPageConstant } from '../administer-system/language-management-page/language-management-page.constant';
import { CommonPageHelper } from '../common/common-page.helper';

import { ProfileEditorConstant } from './profile-editor.constant';
import { ProfileEditorHelper } from './profile-editor.helper';
import { ProfileEditorPage } from './profile-editor.po';

export class ProfileEditor1Helper {

    static async selectAndValidateSendEmailSelected(howOften: string) {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep1;
        await DropDownHelper.selectOptionByText(popUpAttr.sendEmailsDropDown, howOften);
        const selected = await popUpAttr.sendEmailsDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, howOften);
    }

    static async searchUserAndCreateAnEmailSubscriptionKB(
        userName: string,
        loginAsAdmin = false,
        titleContent: string
    ) {
        const language = LanguageManagementPageConstant.languages.english;
        const category = ProfileEditorConstant.popUps.dropdowns.options.category.knowledgeBase;
        await ProfileEditorHelper.searchAndDisplayUserGoToEmailSubscriptionStep2(userName, loginAsAdmin, category);
        await ProfileEditorHelper.clickAndValidateLanguageDd();
        await ProfileEditorHelper.selectAndValidateLanguageSelected(language);
        await ProfileEditorHelper.enterAndValidateTitleContent(titleContent);
        await ProfileEditorHelper.clickAndVerifySelectSegments();
        await ProfileEditorHelper.selectAndVerifySelectedSegment();
        await ProfileEditorHelper.removeAndVerifySelectedSegment();
        await ProfileEditorHelper.clickOk();
        await ProfileEditorHelper.verifyAddedProduct();
        await ProfileEditorHelper.clickSubmit();
        await ProfileEditorHelper.verifyEmailSubscriptionKnowledgeBase(ProfileEditorConstant.testData.defMetadataProduct);
    }

    static async searchUserAndGoToEditEmailSubscriptionKB(
        userName: string,
        loginAsAdmin = false,
        titleContent: string
    ) {
        const labels = ProfileEditorConstant.popUps.dropdowns.options;
        await this.searchUserAndCreateAnEmailSubscriptionKB(userName, loginAsAdmin, titleContent);
        await ProfileEditorHelper.clickFirstEditButtonInTable();
        await ProfileEditorHelper.verifyEmailSubscriptionStep1Fields();
        await ProfileEditorHelper.clickAndValidateCategoryDd();
        await ProfileEditorHelper.selectAndValidateCategorySelected(labels.category.knowledgeBase);
        await ProfileEditorHelper.clickAndValidateEmailDd();
        await ProfileEditor1Helper.selectAndValidateSendEmailSelected(labels.emails.immediately);
        await ProfileEditorHelper.clickNextAndVerifyEmailSubscriptionStep2();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
    }

    static async validateSelectedLanguage(defLanguage: string)  {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep2.languages;
        const selected = await popUpAttr.languagesDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, defLanguage);
    }

    static async validateCurrentTitleContent(titleContent: string) {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep2;
        await popUpAttr.titleContentsTextBox.verifyTextEntered(titleContent);
    }

    static async verifyCurrentSegment(defSegment: string) {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await ProfileEditorPage.popUps.emailSubscriptionStep2.selectedMetadataName(defSegment)
        .verifyDisplayedStatus();
    }

    static async selectAndVerifyNewSegment(newSegment: string) {
        const defIndex = '2';
        const popUpAttr = ProfileEditorPage.popUps;
        await ProfileEditorHelper.switchToTreeFrame();
        await ProfileEditorHelper.addMetadataProduct('2');
        await ProfileEditorHelper.switchToContentFrame();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        await popUpAttr.emailSubscriptionStep2.metadataSelectedProduct(defIndex).verifyDisplayedStatus();
        await DropDownHelper.selectOptionByVal(
            popUpAttr.emailSubscriptionStep2.metadataSelectedDropDown,
            ProfileEditorConstant.testData.defMetadataValue);
        await popUpAttr.buttons.remove.clickButton();
        await popUpAttr.emailSubscriptionStep2.metadataSelectedProduct(defIndex).verifyHiddenStatus();
        await ProfileEditorHelper.clickOk();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await this.verifyCurrentSegment(newSegment);
    }
}
