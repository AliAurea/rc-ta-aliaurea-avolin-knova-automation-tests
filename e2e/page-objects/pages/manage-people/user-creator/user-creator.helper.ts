import { StepLogger } from '../../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../../components/html/checkbox-helper';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../admin-home-page/admin-home.helper';
import { CommonPageHelper } from '../../common/common-page.helper';
import { CommonPage } from '../../common/common.po';

import { UserCreatorHelperExtension } from './user-creator-extension.helper';
import { UserCreatorConstant } from './user-creator.constant';
import { UserCreatorPage } from './user-creator.po';

export class UserCreatorHelper extends UserCreatorHelperExtension {

    static async verifyProfileEditorPageDisplayed() {
        await CommonPageHelper.switchToContentFrame();
        await UserCreatorPage.titles.profileEditor.verifyDisplayedStatus();
    }

    static async typeAndVerifyUserName(userName: string) {
        StepLogger.subStep(`Type ${userName} in User name field`);
        await UserCreatorPage.editorProfileForm.username.clearText();
        await UserCreatorPage.editorProfileForm.username.sendKeys(userName);
        await UserCreatorPage.editorProfileForm.username.verifyTextBoxContains(userName);
    }

    static async typeAndVerifyPassword(password: string) {
        StepLogger.subStep(`Type ${password} in Password field`);
        await UserCreatorPage.editorProfileForm.password.clearText();
        await UserCreatorPage.editorProfileForm.password.sendKeys(password);
        await UserCreatorPage.editorProfileForm.password.verifyTextBoxContains(password);
    }

    static async typeAndVerifyPasswordConfirmation(password: string) {
        StepLogger.subStep(`Type ${password} in Password Confirmation field`);
        await UserCreatorPage.editorProfileForm.passwordConfirmation.clearText();
        await UserCreatorPage.editorProfileForm.passwordConfirmation.sendKeys(password);
        await UserCreatorPage.editorProfileForm.passwordConfirmation.verifyTextBoxContains(password);
    }

    static async typeAndVerifyFirstName(firstName: string) {
        StepLogger.subStep(`Type ${firstName} in First Name field`);
        await UserCreatorPage.editorProfileForm.firstName.clearText();
        await UserCreatorPage.editorProfileForm.firstName.sendKeys(firstName);
        await UserCreatorPage.editorProfileForm.firstName.verifyTextBoxContains(firstName);
    }

    static async typeAndVerifyLastName(lastName: string) {
        StepLogger.subStep(`Type ${lastName} in Last Name field`);
        await UserCreatorPage.editorProfileForm.lastName.clearText();
        await UserCreatorPage.editorProfileForm.lastName.sendKeys(lastName);
        await UserCreatorPage.editorProfileForm.lastName.verifyTextBoxContains(lastName);
    }

    static async typeAndVerifyBioInfo(bioInfo: string) {
        StepLogger.subStep(`Type ${bioInfo} in Bio Info field`);
        await UserCreatorPage.editorProfileForm.bioInfo.clearText();
        await UserCreatorPage.editorProfileForm.bioInfo.sendKeys(bioInfo);
        await UserCreatorPage.editorProfileForm.bioInfo.verifyTextBoxContains(bioInfo);
    }

    static async selectRole(role: string) {
        StepLogger.subStep(`Select ${role}`);
        await UserCreatorPage.editorProfileForm.roleCheckbox(role).scrollToElement();
        await CheckboxHelper.markCheckbox(UserCreatorPage.editorProfileForm.roleCheckbox(role), true);
        const selected = await CheckboxHelper.isCheckboxChecked(UserCreatorPage.editorProfileForm.roleCheckbox(role));
        await ExpectationHelper.verifyStringEqualTo(selected.toString(), Constants.boolean.true.toString());
    }

    static async typeAndVerifyMandatoryFields
        (
            userName: string = RandomHelper.getRandomString(),
            password: string = RandomHelper.getRandomString(),
            firstName: string = RandomHelper.getRandomString(),
            lastName: string = RandomHelper.getRandomString(),
            role: string = UserCreatorConstant.roles.administrator
        ) {
        await UserCreatorHelper.typeAndVerifyUserName(userName);
        await UserCreatorHelper.typeAndVerifyPassword(password);
        await UserCreatorHelper.typeAndVerifyPasswordConfirmation(password);
        await UserCreatorHelper.typeAndVerifyFirstName(firstName);
        await UserCreatorHelper.typeAndVerifyLastName(lastName);
        await UserCreatorHelper.selectRole(role);
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on Save button');
        await UserCreatorPage.editorProfileForm.saveButton.hoverOverAndClick();
    }

    static async clickOnSubmitButton() {
        StepLogger.subStep('Click on Submit button');
        await UserCreatorPage.editorProfileForm.submitButton.hoverOverAndClick();
    }

    static async verifyUserCreatedMessage() {
        await UserCreatorPage.editorProfileForm.userSuccessfullySavedMessage.verifyDisplayedStatus();
    }

    static async clickOnSelectGroups() {
        StepLogger.subStep('Click on Select groups button');
        await UserCreatorPage.editorProfileForm.selectGroupsButton.hoverOverAndClick();
    }

    static async verifySelectGroupsDialogDisplayed() {
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await UserCreatorPage.titles.selectGroups.verifyDisplayedStatus();
    }

    static async clickOnShowAll() {
        StepLogger.subStep('Click on Show All button');
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await UserCreatorPage.editorProfileForm.showAllButton.hoverOverAndClick();
    }

    static async verifyInactiveUserCheckbox() {
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await UserCreatorPage.editorProfileForm.inactiveUserCheckbox.scrollToElement();
        await UserCreatorPage.editorProfileForm.inactiveUserCheckbox.verifyDisplayedStatus();
    }

    static async markInactiveUserCheckbox() {
        StepLogger.subStep('Mark Inactive User checkbox');
        await UserCreatorPage.editorProfileForm.inactiveUserCheckbox.scrollToElement();
        await CheckboxHelper.markCheckbox(UserCreatorPage.editorProfileForm.inactiveUserCheckbox, true);
    }

    static async unmarkInactiveUserCheckbox() {
        StepLogger.subStep('Unmark Inactive User checkbox');
        await UserCreatorPage.editorProfileForm.inactiveUserCheckbox.scrollToElement();
        await CheckboxHelper.markCheckbox(UserCreatorPage.editorProfileForm.inactiveUserCheckbox, false);
    }

    static async verifyInactiveUserCheckboxIsMarked() {
        await UserCreatorPage.editorProfileForm.inactiveUserCheckbox.scrollToElement();
        const isSelected = await CheckboxHelper.isCheckboxChecked(UserCreatorPage.editorProfileForm.inactiveUserCheckbox);
        await ExpectationHelper.verifyStringEqualTo(isSelected.toString(), Constants.boolean.true.toString());
    }

    static async verifyInactiveUserCheckboxIsUnmarked() {
        await UserCreatorPage.editorProfileForm.inactiveUserCheckbox.scrollToElement();
        const isSelected = await CheckboxHelper.isCheckboxChecked(UserCreatorPage.editorProfileForm.inactiveUserCheckbox);
        await ExpectationHelper.verifyStringEqualTo(isSelected.toString(), Constants.boolean.false.toString());
    }

    static async verifyAvailableGroupsDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.findGroupsFrame);
        await UserCreatorPage.editorProfileForm.availableGroups.verifyDisplayedStatus();
    }

    static async typeAGroupNameFromFindGroupsDialogAndClickSearch(group: string) {
        await CommonPageHelper.switchToDefaultContent();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await PageHelper.switchToiFrame(CommonPage.dialogFrame);
        StepLogger.subStep(`Type ${group} in Group Name field`);
        await UserCreatorPage.editorProfileForm.groupNameTextbox.clearText();
        await UserCreatorPage.editorProfileForm.groupNameTextbox.sendKeys(group);
        StepLogger.subStep('Click on Search icon');
        await UserCreatorPage.editorProfileForm.searchIcon.hoverOverAndClick();
    }

    static async getARandomAvailableGroupFromTheList() {
        return await UserCreatorPage.editorProfileForm.availableGroups.getText();
    }

    static async verifyAvailableGroupDisplayed(groupName: string) {
        await PageHelper.switchToiFrame(CommonPage.findGroupsFrame);
        await UserCreatorPage.editorProfileForm.availableGroupByName(groupName).verifyDisplayedStatus();
    }

    static async markDisplayedAvailableGroup() {
        StepLogger.subStep('Mark the displayed available group');
        await CheckboxHelper.markCheckbox(UserCreatorPage.editorProfileForm.availableGroupCheckbox, true);
    }

    static async clickOkButton() {
        await CommonPageHelper.switchToDefaultContent();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await PageHelper.switchToiFrame(CommonPage.dialogFrame);
        StepLogger.subStep('Click on OK button');
        await UserCreatorPage.editorProfileForm.okButton.hoverOverAndClick();
    }

    static async verifyTheSelectedNumberOfGroups(expectedNumber: number) {
        await UserCreatorPage.editorProfileForm.selectNumberGroupsOfGroups.verifyContainsText(expectedNumber.toString());
    }

    static async clickOnSelectLanguages() {
        StepLogger.subStep('Click on Select languages button');
        await UserCreatorPage.editorProfileForm.selectLanguages.hoverOverAndClick();
    }

    static async verifySelectLanguagesDialogDisplayed() {
        await UserCreatorPage.titles.selectLanguages.verifyDisplayedStatus();
    }

    static async verifySelectRole(role: string) {
        const selected = await CheckboxHelper.isCheckboxChecked(UserCreatorPage.editorProfileForm.roleCheckbox(role));
        await ExpectationHelper.verifyStringEqualTo(selected.toString(), Constants.boolean.true.toString());
    }

    static async clickOnAddIcon() {
        StepLogger.subStep('Click on Add icon');
        await UserCreatorPage.editorProfileForm.addIcon.hoverOverAndClick();
    }

    static async getRandomLanguage() {
        await PageHelper.switchToiFrame(CommonPage.dialogFrame);
        return await UserCreatorPage.editorProfileForm.availableLanguagesList.getText();
    }

    static async clickOnAnAvailableLanguageAndClickAddIcon(language: string) {
        await UserCreatorHelper.clickOnAnAvailableLanguage(language);
        await UserCreatorHelper.clickOnAddIcon();
    }

    static async clickOnAnAvailableLanguage(language: string) {
        StepLogger.subStep(`Click on ${language} from available languages list`);
        await UserCreatorPage.editorProfileForm.availableLanguage(language).scrollToElement();
        await UserCreatorPage.editorProfileForm.availableLanguage(language).hoverOverAndClick();
    }

    static async verifyIncludedLanguage(language: string) {
        await UserCreatorPage.editorProfileForm.includedLanguage(language).verifyDisplayedStatus();
    }

    static async clickOnAnIncludedLanguage(language: string) {
        StepLogger.subStep(`Click on ${language} from included languages list`);
        await UserCreatorPage.editorProfileForm.includedLanguage(language).scrollToElement();
        await UserCreatorPage.editorProfileForm.includedLanguage(language).hoverOverAndClick();
    }

    static async clickOnRemoveIcon() {
        StepLogger.subStep('Click on Remove icon');
        await UserCreatorPage.editorProfileForm.removeIcon.hoverOverAndClick();
    }

    static async clickOnAnIncludedLanguageAndClickRemoveIcon(language: string) {
        await UserCreatorHelper.clickOnAnIncludedLanguage(language);
        await UserCreatorHelper.clickOnRemoveIcon();
    }

    static async verifyAvailableLanguage(language: string) {
        await UserCreatorPage.editorProfileForm.availableLanguage(language).verifyDisplayedStatus();
    }

    static async clickOkButtonFromSelectLanguagesPopup() {
        StepLogger.subStep('Click on Ok button');
        await UserCreatorPage.editorProfileForm.okButtonFromSelectLanguagePopup.hoverOverAndClick();
    }

    static async verifySelectedLanguageFromUserProfileDialog(language: string) {
        await CommonPageHelper.switchToContentFrame();
        await UserCreatorPage.editorProfileForm.selectedLanguageFromUserProfileDialog.verifyContainsText(language);
    }

    static async createUser(
        userName: string = RandomHelper.getRandomString(),
        password: string = RandomHelper.getRandomString(),
        firstName: string = RandomHelper.getRandomString(),
        lastName: string = RandomHelper.getRandomString(),
        role: string = UserCreatorConstant.roles.administrator
    ) {
        await AdminHomePageHelper.navigateToEditProfilePage();
        await UserCreatorHelper.typeAndVerifyMandatoryFields(userName, password, firstName, lastName, role);
        await UserCreatorHelper.clickOnSaveButton();
    }

    static async clickOnSelectExpertiseProfileButton() {
        StepLogger.subStep('Click on Select Expertise Profile button');
        await UserCreatorPage.editorProfileForm.manageExpertiseProfileButton.hoverOverAndClick();
    }

    static async verifyExpertiseProfileDialogDisplayed() {
        await UserCreatorPage.titles.expertiseProfile.verifyDisplayedStatus();
    }

    static async clickOnAddMetadataButtton() {
        await CommonPageHelper.switchToDefaultContent();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await PageHelper.switchToiFrame(CommonPage.dialogFrame);
        StepLogger.subStep('Click on Add Metadata button');
        await UserCreatorPage.editorProfileForm.addMetadataButton.scrollToElement();
        await UserCreatorPage.editorProfileForm.addMetadataButton.hoverOverAndClick();
    }

    static async verifyAddExpertiseDialogDisplayed() {
        await UserCreatorPage.titles.addExpertise.verifyDisplayedStatus();
    }

    static async clickOnSelectMetadataButton() {
        await PageHelper.switchToiFrame(CommonPage.dialogFrame);
        StepLogger.subStep('Click on Select Metadata button');
        await UserCreatorPage.editorProfileForm.selectMetadataButton.hoverOverAndClick();
    }

    static async verifyUniversalMetadataDialogDisplayed() {
        await UserCreatorPage.titles.selectUniversalMetadata.verifyDisplayedStatus();
    }

    static async clickOnSelectAccessLevelButton() {
        StepLogger.subStep('Click on Select Access Level button');
        await CommonPageHelper.switchToContentFrame();
        await UserCreatorPage.editorProfileForm.selectAccessLevelButton.scrollToElement();
        await UserCreatorPage.editorProfileForm.selectAccessLevelButton.hoverOverAndClick();
    }

    static async verifySelectAccessLevelsDialogDisplayed() {
        await UserCreatorPage.titles.selectAccessLevels.verifyDisplayedStatus();
    }

    static async selectAccessLevel() {
        await PageHelper.switchToiFrame(CommonPage.dialogFrame);
        await PageHelper.switchToiFrame(CommonPage.contentIFrame);
        await PageHelper.switchToiFrame(CommonPage.treeFrame);
        const level = UserCreatorPage.editorProfileForm.accessLevelItem.getText();
        await UserCreatorPage.editorProfileForm.accessLevelItem.hoverOverAndClick();
        return level;
    }

    static async clickAddButtonFromAccessLevelsDialog() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await PageHelper.switchToiFrame(CommonPage.contentIFrame);
        StepLogger.subStep('Click on Add button');
        await UserCreatorPage.editorProfileForm.addButtonFromAccessLevelsDialog.hoverOverAndClick();
    }

    static async selectAccessLevelAndClickAddButton() {
        const level = await UserCreatorHelper.selectAccessLevel();
        StepLogger.subStep(`Select ${level}`);
        await UserCreatorHelper.clickAddButtonFromAccessLevelsDialog();
        return level;
    }

    static async verifySelectedAccessLevel(accessLevel: string) {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await UserCreatorPage.editorProfileForm.selecteAccessLevel.verifyContainsText(accessLevel);
    }

    static async clickOnOkButtonFromAccessLevelsDialog() {
        StepLogger.subStep('Click on Ok Button');
        await UserCreatorPage.editorProfileForm.okButtonFromAccessLevelsDialod.hoverOverAndClick();
    }

    static async verifySelectedAccessLevelFromEditProfilePage(accessLevel: string) {
        await CommonPageHelper.switchToContentFrame();
        await UserCreatorPage.editorProfileForm.selectedAccessLevelFromEditProfilePage.verifyContainsText(accessLevel);
    }

    static async clickOnSelectUnfiedTemplateButton() {
        StepLogger.subStep('Select Unified Template button');
        await UserCreatorPage.editorProfileForm.selectUnifiedTemplatesButton.hoverOverAndClick();
    }

    static async verifySelectUnifiedTemplatesDialogDisplayed() {
        await UserCreatorPage.titles.selectUnifiedTemplates.verifyDisplayedStatus();
    }

    static async clickOnAvailableUnifiedTemplate() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        const template = await UserCreatorPage.editorProfileForm.availableUnifiedTemplates.getText();
        StepLogger.subStep(`Click on ${template}`);
        await UserCreatorPage.editorProfileForm.availableUnifiedTemplates.hoverOverAndClick();
        return template;
    }

    static async clickOnIncludedUnifiedTemplate() {
        const template = await UserCreatorPage.editorProfileForm.includedUnifiedTemplates.getText();
        StepLogger.subStep(`Click on ${template}`);
        await UserCreatorPage.editorProfileForm.includedUnifiedTemplates.hoverOverAndClick();
        return template;
    }

    static async selectAvailableUnifiedTemplatedAndClickAddIcon() {
        const template = await UserCreatorHelper.clickOnAvailableUnifiedTemplate();
        await UserCreatorHelper.clickOnAddIcon();
        return template;
    }

    static async selectIncludedUnifiedTemplatedAndClickRemoveIcon() {
        const template = await UserCreatorHelper.clickOnIncludedUnifiedTemplate();
        await UserCreatorHelper.clickOnRemoveIcon();
        return template;
    }

    static async verifyAvailableUnifiedTemplate(template: string) {
        await UserCreatorPage.editorProfileForm.availableUnifiedTemplateByText(template).verifyDisplayedStatus();
    }

    static async verifyIncludedUnifiedTemplate(template: string) {
        await UserCreatorPage.editorProfileForm.includedUnifiedTemplateByText(template).verifyDisplayedStatus();
    }

    static async verifySelectedUnifiedTemplatedFromEditProfile(template: string) {
        await CommonPageHelper.switchToContentFrame();
        await UserCreatorPage.editorProfileForm.selectedTemplateFromEditProfile.verifyContainsText(template);
    }

    static async clickOnSelectUniversalMetadataButton() {
        StepLogger.subStep('Click on Select Universal Metadata button');
        await UserCreatorPage.editorProfileForm.selectUniversalMetadataButton.hoverOverAndClick();
    }

    static async clickOnAddComunityButton() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        StepLogger.subStep('Click on Add Comunity button');
        await UserCreatorPage.editorProfileForm.addCommunityButton.scrollToElement();
        await UserCreatorPage.editorProfileForm.addCommunityButton.hoverOverAndClick();
    }

    static async selectRandomComunity() {
        await UserCreatorPage.editorProfileForm.selectComunityDropdown.hoverOverAndClick();
        const option = await UserCreatorPage.editorProfileForm.selectComunityDropdownOption.getText();
        StepLogger.subStep(`Click on ${option}`);
        await DropDownHelper.selectOptionByText(UserCreatorPage.editorProfileForm.selectComunityDropdown, option);
        return option;
    }

    static async selectRandomReputationLevel() {
        await UserCreatorPage.editorProfileForm.reputationLevelDropdown.hoverOverAndClick();
        const option = await UserCreatorPage.editorProfileForm.reputationLevelDropdownOption.getText();
        StepLogger.subStep(`Click on ${option}`);
        await DropDownHelper.selectOptionByText(UserCreatorPage.editorProfileForm.reputationLevelDropdown, option);
        await UserCreatorPage.editorProfileForm.reputationLevelDropdown.hoverOverAndClick();
        return option;
    }

    static async typeSkills(skills: string = RandomHelper.getRandomString()) {
        StepLogger.subStep(`Type ${skills} in Skills field`);
        await UserCreatorPage.editorProfileForm.skillsTextbox.clearText();
        await UserCreatorPage.editorProfileForm.skillsTextbox.sendKeys(skills);
    }

    static async clickOnSkillLevel() {
        StepLogger.subStep('Click on Skill level radio button');
        await UserCreatorPage.editorProfileForm.skillLevelRadioButton.hoverOverAndClick();
    }

    static async clickOnOkButtonFromAddExpertiseDialog() {
        StepLogger.subStep('Click Ok button');
        await UserCreatorPage.editorProfileForm.okButtonFromAddExpertiseDialog.scrollToElement();
        await UserCreatorPage.editorProfileForm.okButtonFromAddExpertiseDialog.hoverOverAndClick();
    }

    static async enterComunityReputationLevelAndSkillsInfo(skill: string = RandomHelper.getRandomString()) {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        await UserCreatorHelper.selectRandomComunity();
        await UserCreatorHelper.selectRandomReputationLevel();
        await UserCreatorHelper.typeSkills(skill);
        await UserCreatorHelper.clickOnSkillLevel();
        await UserCreatorHelper.clickOnOkButtonFromAddExpertiseDialog();
    }

    static async verifyAddedComunityDisplayed(skill: string) {
        await CommonPageHelper.switchToExpertiseTableFrame(PageHelper.timeout.xs);
        await UserCreatorPage.getSkillCreatedComunityByText(skill).verifyDisplayedStatus();
    }

    static async verifyPreferencesTabDisplayed() {
        await UserCreatorPage.editorProfileForm.tabs.preferences.verifyDisplayedStatus();
    }

    static async clickOnPreferencesTab() {
        StepLogger.subStep('Click on Pereferences tab');
        await UserCreatorPage.editorProfileForm.tabs.preferences.hoverOverAndClick();
    }

    static async verifyPreferencesTabFields() {
        await UserCreatorPage.editorProfileForm.preferencesTab.dateFormat.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.defaultMicrosite.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.emailLanguage.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.fullNameFormat.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.itemsPerPage.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.resultsPerPage.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.showThreadsInResults.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.timeFormat.verifyDisplayedStatus();
        await UserCreatorPage.editorProfileForm.preferencesTab.whatsNew.verifyDisplayedStatus();
    }

    static async createUserAndOpenReferencesTab() {
        await AdminHomePageHelper.navigateToEditProfilePage();
        await UserCreatorHelper.typeAndVerifyMandatoryFields();
        await UserCreatorHelper.clickOnSaveButton();
        await UserCreatorHelper.verifyUserCreatedMessage();
        await UserCreatorHelper.verifyPreferencesTabDisplayed();
        await UserCreatorHelper.clickOnPreferencesTab();
        await UserCreatorHelper.verifyPreferencesTabFields();
    }
}
