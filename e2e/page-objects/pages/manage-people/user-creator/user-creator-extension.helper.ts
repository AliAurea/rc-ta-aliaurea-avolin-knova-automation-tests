import { StepLogger } from '../../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../../components/html/checkbox-helper';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { DfElement } from '../../../../components/misc-utils/df-elements-helper';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../admin-home-page/admin-home.helper';
import { UserAndGroupFinderHelper } from '../user-and-group-finder/user-and-group-finder.helper';

import { UserCreatorHelper } from './user-creator.helper';
import { UserCreatorPage } from './user-creator.po';

export class UserCreatorHelperExtension {

    static async selectResultsPerPage(value: string) {
        StepLogger.subStep(`Select ${value} as Result Per Page`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.resultsPerPage, value);
    }

    static async verifyResultsPerPageValue(option: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.resultsPerPage);
        await ExpectationHelper.verifyStringEqualTo(val, option);
    }

    static async selectWhatsNewOption(option: string) {
        StepLogger.subStep(`Select ${option} as What's new`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.whatsNew, option);
    }

    static async verifyWhatsNewValue(text: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.whatsNew);
        await ExpectationHelper.verifyStringEqualTo(val, text);
    }

    static async selectShowThreadsInResult(option: string) {
        StepLogger.subStep(`Select ${option} as Show Threads In Results`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.resultsPerPage, option);
    }

    static async verifyShowThreadsIResultValue(option: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.showThreadsInResults);
        await ExpectationHelper.verifyStringEqualTo(val, option);
    }

    static async selectEmailLanguage(language: string) {
        StepLogger.subStep(`Select ${language} as Language`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.emailLanguage, language);
    }

    static async verifyEmailLanguageValue(language: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.emailLanguage);
        await ExpectationHelper.verifyStringEqualTo(val, language);
    }

    static async selectFullNameFormat(format: string) {
        StepLogger.subStep(`Select ${format} as Full Name Format`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.fullNameFormat,
            format);
    }

    static async verifyFullNameFormatValue(format: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.fullNameFormat);
        await ExpectationHelper.verifyStringEqualTo(val, format);
    }

    static async selectDateFormat(format: string) {
        StepLogger.subStep(`Select ${format} as Date Format`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.dateFormat, format);
    }

    static async verifyDateFormatValue(format: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.dateFormat);
        await ExpectationHelper.verifyStringEqualTo(val, format);
    }

    static async selectTimeFormat(format: string) {
        StepLogger.subStep(`Select ${format} as Time Format`);
        await DropDownHelper.selectOptionByText(
            UserCreatorPage.editorProfileForm.preferencesTab.timeFormat, format);
    }

    static async verifyTimeFormatValue(format: string) {
        const val = await DropDownHelper.getTheSelectedOptionText(
            UserCreatorPage.editorProfileForm.preferencesTab.timeFormat);
        await ExpectationHelper.verifyStringEqualTo(val, format);
    }

    static async typeItemsPerPage(num: number) {
        StepLogger.subStep(`Type ${num} in Items per Page field`);
        await UserCreatorPage.editorProfileForm.preferencesTab.itemsPerPage.clearText();
        await UserCreatorPage.editorProfileForm.preferencesTab.itemsPerPage.sendKeys(num.toString());
    }

    static async verifyItemsPerPageValue(num: number) {
        await UserCreatorPage.editorProfileForm.preferencesTab.itemsPerPage.verifyTextBoxContains(num.toString());
    }

    static async clickOnDefaultMicrositeDropdown() {
        StepLogger.subStep('Click on Default Microsite dropdown');
        await UserCreatorPage.editorProfileForm.preferencesTab.defaultMicrosite.hoverOverAndClick();
    }

    static async verifyDefaultMicrositeOptionsDisplayed() {
        await UserCreatorPage.editorProfileForm.defaultMicrositeOptions.scrollToElement();
        await UserCreatorPage.editorProfileForm.defaultMicrositeOptions.verifyDisplayedStatus();
        await UserCreatorHelper.clickOnDefaultMicrositeDropdown();
    }

    static async clickOnNotificationTab() {
        StepLogger.subStep('Click on notification tab');
        await UserCreatorPage.editorProfileForm.tabs.notifications.hoverOverAndClick();
    }

    static async verifyNotificationForm() {
        StepLogger.subVerification('Verify notification Form');
        await UserCreatorPage.editorProfileForm.notificationTab.notoficationForm.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.expandAll.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.collapseAll.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.authoringEvent.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.collaborationEvent.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.feedBackEvent.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.webCasesEvent.verifyDisplayedStatus();
    }

    static async verifyNotificationTab() {
        StepLogger.subVerification('Verify notification Tab');
        await UserCreatorPage.editorProfileForm.tabs.notifications.verifyDisplayedStatus();
    }

    static async createUserAndOpenNotificationTab() {
        StepLogger.subStep('Create User and Open Notification Tab');
        await AdminHomePageHelper.navigateToEditProfilePage();
        await UserCreatorHelper.typeAndVerifyMandatoryFieldsWithEmail();
        await UserCreatorHelper.clickOnSaveButton();
        await UserCreatorHelper.verifyUserCreatedMessage();
        await this.verifyNotificationTab();
        await this.clickOnNotificationTab();
        await this.verifyNotificationForm();
    }

    static async verifyExpandAll() {
        StepLogger.subVerification('Verify Expand All');
        await UserCreatorPage.editorProfileForm.notificationTab.expandAll.verifyDisplayedStatus();
    }

    static async clickExpandAll() {
        StepLogger.subStep('Click Expand All');
        await UserCreatorPage.editorProfileForm.notificationTab.expandAll.hoverOverAndClick();
    }

    static async verifyExpandedSection() {
        StepLogger.subVerification('Verify Expanded Section');
        await UserCreatorPage.editorProfileForm.notificationTab.authoringEventExpand.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.collaborationEventExpand.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.feedBackEventExpand.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.webCasesEventExpand.verifyDisplayedStatus();
    }

    static async verifyCollapseAll() {
        StepLogger.subVerification('Verify Collapse All');
        await UserCreatorPage.editorProfileForm.notificationTab.collapseAll.verifyDisplayedStatus();
    }

    static async clickCollapseAll() {
        StepLogger.subStep('Click Collapse All');
        await UserCreatorPage.editorProfileForm.notificationTab.collapseAll.hoverOverAndClick();
    }

    static async verifyCollapsedSection() {
        StepLogger.subVerification('Verify Collapsed Section');
        await UserCreatorPage.editorProfileForm.notificationTab.authoringEventExpand.verifyHiddenStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.collaborationEventExpand.verifyHiddenStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.feedBackEventExpand.verifyHiddenStatus();
        await UserCreatorPage.editorProfileForm.notificationTab.webCasesEventExpand.verifyHiddenStatus();
    }

    static async checkAndUncheckAndVerifyCheckbox(checkBox: DfElement) {
        StepLogger.subStep('Check/Uncheck the Check Box and verify');
        await CheckboxHelper.markCheckbox(checkBox, true);
        await ExpectationHelper.verifyCheckboxIsChecked(checkBox);
        await CheckboxHelper.markCheckbox(checkBox, false);
        await ExpectationHelper.verifyCheckBoxNotSelected(checkBox);
    }

    static async typeAndVerifyMandatoryFieldsWithEmail() {
        StepLogger.subStep('Enter Detail in form');
        const email = RandomHelper.getRandomEmail();
        await UserCreatorHelper.typeAndVerifyMandatoryFields();
        await UserCreatorPage.editorProfileForm.email.sendKeys(email);
        await UserCreatorPage.editorProfileForm.email.verifyTextBoxContains(email);
    }

    static async openNotificationTabForExistingUser(firstname: string) {
        StepLogger.subStep('Open Notification tab for Existing User');
        await AdminHomePageHelper.navigateToUserGroupFinder(false);
        await UserAndGroupFinderHelper.typeFirstName(firstname);
        await UserAndGroupFinderHelper.verifyFirstNameValue(firstname);
        await UserAndGroupFinderHelper.clickOnSearchIcon();
        await UserAndGroupFinderHelper.verifyUserDisplayedInSearchList(firstname);
        await UserAndGroupFinderHelper.ClickOnAUserDisplayedInSearchList(firstname);
        await UserCreatorHelper.verifyProfileEditorPageDisplayed();
        await UserCreatorHelper.clickOnNotificationTab();
        await UserCreatorHelper.verifyNotificationForm();
    }
}
