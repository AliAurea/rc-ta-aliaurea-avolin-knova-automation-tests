import { browser } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../components/html/checkbox-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPageHelper } from '../common/common-page.helper';
import { SelfServiceHomePageHelper } from '../self-service/self-service-home-page.helper';

import { SelfServiceEditProfilePageHelperExtension } from './self-service-edit-profile-extension.helper';
import { SelfServiceEditProfileConstant } from './self-service-edit-profile.contant';
import { SelfServiceEditProfilePage } from './self-service-edit-profile.po';

export class SelfServiceEditProfilePageHelper extends SelfServiceEditProfilePageHelperExtension {

    static async verifyEditProfilePageDisplayed() {
        await SelfServiceEditProfilePage.sections.generalPreferences.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.sections.micrositePreferences.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.sections.searchPreferences.verifyDisplayedStatus();
    }

    static async verifyTabHighlighted(tab: string) {
        const className = await SelfServiceEditProfilePage.elements.getTabByText(tab).getAtttribute('class');
        await ExpectationHelper.verifyStringEqualTo(
            className,
            SelfServiceEditProfileConstant.names.subnavOn);
    }

    static async navigateEditProfileNotificationsTab() {
        await SelfServiceHomePageHelper.clickOnEditProfile();
        await this.clickOnTab(SelfServiceEditProfileConstant.names.notifications);
    }

    static async navigateEditProfileNotificationsTabAndExpandAll() {
        await SelfServiceHomePageHelper.clickOnEditProfile();
        await this.clickOnTab(SelfServiceEditProfileConstant.names.notifications);
        await this.clickOnExpandAllButton();
    }

    static async verifySaveButtonDisplayed() {
        await SelfServiceEditProfilePage.elements.saveButton.verifyDisplayedStatus();
    }

    static async verifyCancelButtonDisplayed() {
        await SelfServiceEditProfilePage.elements.cancelButton.verifyDisplayedStatus();
    }

    static async verifySaveAndCancelButtonsDisplayed() {
        await this.verifySaveButtonDisplayed();
        await this.verifyCancelButtonDisplayed();
    }

    static async clickOnTab(tabName: string) {
        StepLogger.subStep(`Click on ${tabName} tab`);
        await SelfServiceEditProfilePage.elements.getTabByText(tabName).hoverOverAndClick();
    }

    static async clickOnCancelButton() {
        StepLogger.subStep('Click on Cancel button');
        await SelfServiceEditProfilePage.elements.cancelButton.hoverOverAndClick();
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on Save button');
        await SelfServiceEditProfilePage.elements.saveButton.hoverOverAndClick();
    }

    static async verifyExpandAllButtonDisplayed() {
        await SelfServiceEditProfilePage.elements.expandAll.verifyDisplayedStatus();
    }

    static async verifyCollapseAllButtonDisplayed() {
        await SelfServiceEditProfilePage.elements.collapseAll.verifyDisplayedStatus();
    }

    static async clickOnExpandAllButton() {
        StepLogger.subStep('Click on Expand All button');
        await SelfServiceEditProfilePage.elements.expandAll.hoverOverAndClick();
    }

    static async clickOnCollapseAllButton() {
        StepLogger.subStep('Click on Collapse All button');
        await SelfServiceEditProfilePage.elements.collapseAll.hoverOverAndClick();
    }

    static async verifyAllSectionsDisplayed() {
        await SelfServiceEditProfilePage.elements.authoringEventsIcon.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.elements.collabEventsIcon.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.elements.feedbackEventsIcon.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.elements.webCaseEventsIcon.verifyDisplayedStatus();
    }

    static async verifyAllSectionsAreExpanded() {
        const authoringEventsStatus = await SelfServiceEditProfilePage.elements.authoringEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            authoringEventsStatus,
            SelfServiceEditProfileConstant.names.expand);
        const collabEventsStatus = await SelfServiceEditProfilePage.elements.collabEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            collabEventsStatus,
            SelfServiceEditProfileConstant.names.expand);
        const feedbackEventsStatus = await SelfServiceEditProfilePage.elements.feedbackEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            feedbackEventsStatus,
            SelfServiceEditProfileConstant.names.expand);
        const webCaseEvents = await SelfServiceEditProfilePage.elements.webCaseEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            webCaseEvents,
            SelfServiceEditProfileConstant.names.expand);
    }

    static async verifyAllSectionsAreCollapsed() {
        const authoringEventsStatus = await SelfServiceEditProfilePage.elements.authoringEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            authoringEventsStatus,
            SelfServiceEditProfileConstant.names.collapse);
        const collabEventsStatus = await SelfServiceEditProfilePage.elements.collabEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            collabEventsStatus,
            SelfServiceEditProfileConstant.names.collapse);
        const feedbackEventsStatus = await SelfServiceEditProfilePage.elements.feedbackEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            feedbackEventsStatus,
            SelfServiceEditProfileConstant.names.collapse);
        const webCaseEvents = await SelfServiceEditProfilePage.elements.webCaseEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            webCaseEvents,
            SelfServiceEditProfileConstant.names.collapse);
    }

    static async clickOnAuthoringEventsLink() {
        StepLogger.subStep('Click on Authoring Events');
        await SelfServiceEditProfilePage.elements.authoringEventsIcon.hoverOverAndClick();
    }

    static async clickOnCollaboationEventsLink() {
        StepLogger.subStep('Click on Collaboration Events');
        await SelfServiceEditProfilePage.elements.collabEventsIcon.hoverOverAndClick();
    }

    static async clickOnFeedbackEventsLink() {
        StepLogger.subStep('Click on Feedback Events');
        await SelfServiceEditProfilePage.elements.feedbackEventsIcon.hoverOverAndClick();
    }

    static async clickWebCasesEventsLink() {
        StepLogger.subStep('Click on Web Cases Events');
        await SelfServiceEditProfilePage.elements.webCaseEventsIcon.hoverOverAndClick();
    }

    static async verifyAuthoringEventsIsExpanded() {
        const status = await SelfServiceEditProfilePage.elements.authoringEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            status,
            SelfServiceEditProfileConstant.names.expand);
    }

    static async verifyCollaborationEventsIsExpanded() {
        const status = await SelfServiceEditProfilePage.elements.collabEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            status,
            SelfServiceEditProfileConstant.names.expand);
    }

    static async verifyFeedbackEventsIsExpanded() {
        const status = await SelfServiceEditProfilePage.elements.feedbackEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            status,
            SelfServiceEditProfileConstant.names.expand);
    }

    static async verifyWebCasesEventsIsExpanded() {
        const status = await SelfServiceEditProfilePage.elements.webCaseEventsIcon.getSrcAtttribute();
        await ExpectationHelper.verifyStringValueContain(
            status,
            SelfServiceEditProfileConstant.names.expand);
    }

    static async markACollabEventsCheckbox() {
        StepLogger.subStep('Mark an Collaboration Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.collabEventsCheckboxes, true);
        return SelfServiceEditProfilePage.elements.collabEventsCheckboxes.getNameAtttribute();
    }

    static async markAFeedbackEventsCheckbox() {
        StepLogger.subStep('Mark a Feedback Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.feedbackEventsCheckboxes, true);
        return SelfServiceEditProfilePage.elements.feedbackEventsCheckboxes.getNameAtttribute();
    }

    static async markAnAuthoringEventsOption() {
        StepLogger.subStep('Mmark an Authoring Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.authoringEventsCheckboxes, true);
        return SelfServiceEditProfilePage.elements.authoringEventsCheckboxes.getNameAtttribute();
    }

    static async unmarkAnCollabEventsOption() {
        StepLogger.subStep('Unmark an Collaboration Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.collabEventsCheckboxes, false);
        return SelfServiceEditProfilePage.elements.collabEventsCheckboxes.getNameAtttribute();
    }

    static async unmarkAWebCasesEventsCheckbox() {
        StepLogger.subStep('Unmark an Web Cases Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.webCasesEventsCheckboxes, false);
        return SelfServiceEditProfilePage.elements.webCasesEventsCheckboxes.getNameAtttribute();
    }

    static async unmarkAFeedbackCasesEventsCheckbox() {
        StepLogger.subStep('Unmark an Web Cases Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.feedbackEventsCheckboxes, false);
        return SelfServiceEditProfilePage.elements.feedbackEventsCheckboxes.getNameAtttribute();
    }

    static async unmarkAnAuthoringEventsCheckbox() {
        StepLogger.subStep('Unmark an Authoring Events options');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.authoringEventsCheckboxes, false);
        return SelfServiceEditProfilePage.elements.authoringEventsCheckboxes.getNameAtttribute();
    }

    static async verifyCollabEventsCheckboxIsMarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getCollabEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            true.toString());
    }

    static async verifyAuthoringEventsCheckboxIsMarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getAuthoringEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            true.toString());
    }

    static async verifyFeedbackEventsCheckboxIsMarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getFeedbackEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            true.toString());
    }

    static async verifyWebCasesEventsCheckboxIsMarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getWebCasesEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            true.toString());
    }

    static async verifyCollabEventsEventsCheckboxIsUnmarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getCollabEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            false.toString());
    }

    static async verifyAuthoringEventsCheckboxIsUnmarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getAuthoringEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            false.toString());
    }

    static async verifyFeedbackEventsCheckboxIsUnmarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getFeedbackEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            false.toString());
    }

    static async verifyWebCasesEventsCheckboxIsUnmarked(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getWebCasesEventsCheckboxByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            false.toString());
    }

    static async verifyFeedbackEventsRadiobuttonIsSelected(optionName: string) {
        const option = await SelfServiceEditProfilePage.elements.getFeedbackEventsRadioButtonByName(optionName);
        const status = await CheckboxHelper.isCheckboxChecked(option);
        await ExpectationHelper.verifyStringEqualTo(
            status.toString(),
            true.toString());
    }

    static async clickOnAFeedbackEventsRadioButton() {
        StepLogger.subStep('Click on a Feedback Events radio button');
        await SelfServiceEditProfilePage.elements.feedbackEventsRadioButtons.hoverOverAndClick();
        return await SelfServiceEditProfilePage.elements.feedbackEventsRadioButtons.getNameAtttribute();
    }

    static async markACollabEventsCheckboxAndSave() {
        StepLogger.subStep('Mark an Collaboration Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.collabEventsCheckboxes, true);
        await this.clickOnSaveButton();
        await this.navigateEditProfileNotificationsTab();
        return SelfServiceEditProfilePage.elements.collabEventsCheckboxes.getNameAtttribute();
    }

    static async markAFeedbackEventsCheckboxAndClickSaveButton() {
        StepLogger.subStep('Mark an Collaboration Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.feedbackEventsCheckboxes, true);
        await this.clickOnSaveButton();
        await this.navigateEditProfileNotificationsTab();
        return SelfServiceEditProfilePage.elements.collabEventsCheckboxes.getNameAtttribute();
    }

    static async markAnAuthoringEventsCheckboxAndClickSaveButton() {
        StepLogger.subStep('Mark an Collaboration Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.authoringEventsCheckboxes, true);
        await this.clickOnSaveButton();
        await this.navigateEditProfileNotificationsTab();
        return SelfServiceEditProfilePage.elements.collabEventsCheckboxes.getNameAtttribute();
    }

    static async markAWebCasesEventsCheckboxAndClickSaveButton() {
        StepLogger.subStep('Mark an Collaboration Events option');
        await CheckboxHelper.markCheckbox(SelfServiceEditProfilePage.elements.webCasesEventsCheckboxes, true);
        await this.clickOnSaveButton();
        await this.navigateEditProfileNotificationsTab();
        return SelfServiceEditProfilePage.elements.collabEventsCheckboxes.getNameAtttribute();
    }

    static async verifyFeedbackEventsCheckboxAndRadioButtonAreSelected(checkboxName: string, radioButtonName: string) {
        await SelfServiceEditProfilePageHelper.verifyFeedbackEventsCheckboxIsMarked(checkboxName);
        await SelfServiceEditProfilePageHelper.verifyFeedbackEventsRadiobuttonIsSelected(radioButtonName);
    }

    static async verifyProfileDataDetailsDisplayed() {
        await SelfServiceEditProfilePage.sections.userControls.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.sections.authoringControls.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.sections.roles.verifyDisplayedStatus();
    }

    static async getInitialFieldValue() {
        return await SelfServiceEditProfilePage.elements.initial.getAtttribute('value');
    }

    static async typeInitial(initial: string) {
        await SelfServiceEditProfilePage.elements.initial.clearText();
        await SelfServiceEditProfilePage.elements.initial.sendKeys(initial);
    }

    static async verifyInitial(initial: string) {
        await SelfServiceEditProfilePage.elements.initial.verifyTextBoxContains(initial);
    }

    static async typeEmailAddress(email: string) {
        await SelfServiceEditProfilePage.elements.email.clearText();
        await SelfServiceEditProfilePage.elements.email.sendKeys(email);
    }

    static async verifyMessagePopupDisplayed(text: string) {
        await PageHelper.executeInNewTab(async () => {
            await SelfServiceEditProfilePage.elements.getMessageByText(text).verifyDisplayedStatus();
        }, 1, true);
        await PageHelper.switchToFirstTab();
    }

    static async verifyConfirmationMessageDisplayedAndClickYes() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(
                title,
                SelfServiceEditProfileConstant.names.confirmation);
            await browser.executeScript('onAction1();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyConfirmationMessageDisplayedAndClickNo() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(
                title,
                SelfServiceEditProfileConstant.names.confirmation);
            await browser.executeScript('onAction2();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyConfirmationMessageDisplayedAndClickCancel() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(
                title,
                SelfServiceEditProfileConstant.names.confirmation);
            await browser.executeScript('onAction3();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async navigateToProfileData() {
        await SelfServiceHomePageHelper.clickOnEditProfile();
        await SelfServiceEditProfilePageHelper.clickOnTab(
            SelfServiceEditProfileConstant.names.profileData);
    }

    static async typePassword(password: string) {
        await SelfServiceEditProfilePage.elements.password.clearText();
        await SelfServiceEditProfilePage.elements.password.sendKeys(password);
    }

    static async typeConfirmationPassword(password: string) {
        await SelfServiceEditProfilePage.elements.conformationPassword.clearText();
        await SelfServiceEditProfilePage.elements.conformationPassword.sendKeys(password);
    }

    static async typePasswordAndConfirmationPassword(password: string, confirmationPassword: string) {
        await this.typePassword(password);
        await this.typeConfirmationPassword(confirmationPassword);
    }

    static async verifyErrorMessageIsClosed(expectedNumberOfWindows: number) {
        await CommonPageHelper.verifyNumberOfWindowsOpen(expectedNumberOfWindows);
    }

    static async verifyRolesSectionDisplayed() {
        await SelfServiceEditProfilePage.sections.roles.verifyDisplayedStatus();
    }

    static async verfiyAuthoringControlsSectionDisplayed() {
        await SelfServiceEditProfilePage.sections.authoringControls.verifyDisplayedStatus();
    }

    static async verifyUserControlsSectionDisplayed() {
        await SelfServiceEditProfilePage.sections.userControls.verifyDisplayedStatus();
    }

    static async verifyAuthoringControlsElements() {
        await SelfServiceEditProfilePage.elements.accessLevels.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.elements.languages.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.elements.unifiedTemplate.verifyDisplayedStatus();
        await SelfServiceEditProfilePage.elements.universalMetadata.verifyDisplayedStatus();
    }

    static async verifyLanguagesButtonDisplayed() {
        await SelfServiceEditProfilePage.elements.languages.verifyDisplayedStatus();
    }

    static async clickOnLanguagesButton() {
        StepLogger.subStep('Click on Select Language button');
        await SelfServiceEditProfilePage.elements.languages.hoverOverAndClick();
    }

    static async verifySelectLanguagesDialogDisplayed() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringEqualTo(
                title,
                SelfServiceEditProfileConstant.names.selectLanguages);
        }, 1, false);
    }

    static async clickOnARandomAvailableOption() {
        StepLogger.subStep('Click on an available option');
        await SelfServiceEditProfilePage.elements.availableLanguage.hoverOverAndClick();
        return await SelfServiceEditProfilePage.elements.availableLanguage.getText();
    }

    static async verifyAvailableOptionSelected(language: string) {
        const color = await SelfServiceEditProfilePage.elements.getAvailableLanguageByText(language).getCssBackgroundColorValue();
        await ExpectationHelper.verifyStringEqualTo(color, Constants.colorCode.blue);
    }

    static async clickOnAddButton() {
        StepLogger.subStep('Click on Add button');
        await SelfServiceEditProfilePage.elements.addButton.hoverOverAndClick();
    }

    static async verifyIncludedOption(option: string) {
        await SelfServiceEditProfilePage.elements.getIncludedLanguageByText(option).verifyDisplayedStatus();
    }

    static async clickOnOkButtonAndSwitchToProfileData() {
        StepLogger.subStep('Click on Okbutton');
        await SelfServiceEditProfilePage.elements.okButton.hoverOverAndClick();
        await PageHelper.switchToFirstTab();
    }

    static async verifyLanguageFromProfileDataPage(language: string) {
        await SelfServiceEditProfilePage.elements.languageLabelFromProfileData.verifyContainsText(language);
    }

    static async verifyUnifiedTemplateFromProfileDataPage(profile: string) {
        await SelfServiceEditProfilePage.elements.unifiedTemplateLabelFromProfileData.verifyContainsText(profile);
    }
}
