import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { SelfServiceHomePageHelper } from '../self-service/self-service-home-page.helper';

import { SelfServiceEditProfileConstant } from './self-service-edit-profile.contant';
import { SelfServiceEditProfilePageHelper } from './self-service-edit-profile.helper';
import { SelfServiceEditProfilePage } from './self-service-edit-profile.po';

export class SelfServiceEditProfilePageHelperExtension {
    static async includeARandomLanguage() {
        await SelfServiceHomePageHelper.clickOnEditProfile();
        await SelfServiceEditProfilePageHelper.verifyEditProfilePageDisplayed();
        await SelfServiceEditProfilePageHelper.clickOnTab(
            SelfServiceEditProfileConstant.names.profileData);
        await SelfServiceEditProfilePageHelper.clickOnLanguagesButton();
        await SelfServiceEditProfilePageHelper.verifySelectLanguagesDialogDisplayed();
        const language = await SelfServiceEditProfilePageHelper.clickOnARandomAvailableOption();
        await SelfServiceEditProfilePageHelper.verifyAvailableOptionSelected(language);
        await SelfServiceEditProfilePageHelper.clickOnAddButton();
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        return language;
    }

    static async clickOnAnIncludedElement(element: string) {
        StepLogger.subStep(`Click on ${element} from the "Included" list`);
        await SelfServiceEditProfilePage.elements.getIncludedLanguageByText(element).hoverOverAndClick();
    }

    static async verifyIncludedOptionSelected(language: string) {
        const color = await SelfServiceEditProfilePage.elements.getIncludedLanguageByText(language).getCssBackgroundColorValue();
        await ExpectationHelper.verifyStringEqualTo(color, Constants.colorCode.blue);
    }

    static async clickOnRemoveButton() {
        StepLogger.subStep('Click on Remove button');
        await SelfServiceEditProfilePage.elements.removeButton.hoverOverAndClick();
    }

    static async verifyIncludedOption(option: string) {
        await SelfServiceEditProfilePage.elements.getIncludedLanguageByText(option).verifyDisplayedStatus();
    }

    static async verifyAvailableOption(option: string) {
        await SelfServiceEditProfilePage.elements.getAvailableLanguageByText(option).verifyDisplayedStatus();
    }

    static async verifyLanguageIsNotIncludedFromProfileDataPage(language: string) {
        const languages = await SelfServiceEditProfilePage.elements.languageLabelFromProfileData.item.getText();
        await ExpectationHelper.verifyStringValueNotContain(languages, language);
    }

    static async removeLanguage(language: string) {
        await SelfServiceEditProfilePageHelper.clickOnLanguagesButton();
        await SelfServiceEditProfilePageHelper.verifySelectLanguagesDialogDisplayed();
        await SelfServiceEditProfilePageHelper.clickOnAnIncludedElement(language);
        await SelfServiceEditProfilePageHelper.clickOnRemoveButton();
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        return language;
    }

    static async clickOnUniversalMetadataButton() {
        StepLogger.subStep('Click on Universal Metadata button');
        await SelfServiceEditProfilePage.elements.universalMetadata.hoverOverAndClick();
    }

    static async verifyUnifiedTemplateButton() {
        await SelfServiceEditProfilePage.elements.unifiedTemplate.verifyDisplayedStatus();
    }

    static async clickOnUnifiedTemplateButton() {
        StepLogger.subStep('Click on Unified Template button');
        await SelfServiceEditProfilePage.elements.unifiedTemplate.hoverOverAndClick();
    }

    static async verifySelectUnifiedTemplatesDialogDisplayed() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringEqualTo(
                title,
                SelfServiceEditProfileConstant.names.selectUnifiedTemplates);
        }, 1, false);
    }

    static async removeTemplate(Template: string) {
        await SelfServiceEditProfilePageHelper.clickOnUnifiedTemplateButton();
        await SelfServiceEditProfilePageHelper.verifySelectUnifiedTemplatesDialogDisplayed();
        await SelfServiceEditProfilePageHelper.clickOnAnIncludedElement(Template);
        await SelfServiceEditProfilePageHelper.clickOnRemoveButton();
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        return Template;
    }

    static async includeARandomTemplate() {
        await SelfServiceHomePageHelper.clickOnEditProfile();
        await SelfServiceEditProfilePageHelper.verifyEditProfilePageDisplayed();
        await SelfServiceEditProfilePageHelper.clickOnTab(
            SelfServiceEditProfileConstant.names.profileData);
        await SelfServiceEditProfilePageHelper.clickOnUnifiedTemplateButton();
        await SelfServiceEditProfilePageHelper.verifySelectUnifiedTemplatesDialogDisplayed();
        const template = await SelfServiceEditProfilePageHelper.clickOnARandomAvailableOption();
        await SelfServiceEditProfilePageHelper.verifyAvailableOptionSelected(template);
        await SelfServiceEditProfilePageHelper.clickOnAddButton();
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        return template;
    }

    static async verifyUnifiedTemplateIsNotIncludedFromProfileDataPage(template: string) {
        const languages = await SelfServiceEditProfilePage.elements.unifiedTemplateLabelFromProfileData.item.getText();
        await ExpectationHelper.verifyStringValueNotContain(languages, template);
    }

    static async configureDefaultMicrositeAndNavigateToMicrositeTab(microsite: string) {
        await SelfServiceHomePageHelper.clickOnEditProfile();
        await SelfServiceEditProfilePageHelper.clickOnTab(SelfServiceEditProfileConstant.names.preferences);
        await SelfServiceEditProfilePageHelper.selectDefaultMicrosite(microsite);
        await SelfServiceEditProfilePageHelper.clickOnSaveButton();
        await SelfServiceHomePageHelper.clickOnAvailableMicrositeTab();
    }

    static async selectDefaultMicrosite(microsite: string) {
        StepLogger.subStep(`Select ${microsite} as default microsite`);
        await DropDownHelper.selectOptionByText(SelfServiceEditProfilePage.elements.defaultMicrosite, microsite);
    }
}
