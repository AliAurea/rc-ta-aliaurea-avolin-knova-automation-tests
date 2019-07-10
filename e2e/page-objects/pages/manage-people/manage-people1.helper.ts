import { protractor } from 'protractor/built/ptor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { AdminHomePageHelper } from '../admin-home-page/admin-home.helper';
import { AdminLoginPageHelper } from '../admin-login-page/admin-login.helper';
import { CommonPageHelper } from '../common/common-page.helper';
import { CommonPage } from '../common/common.po';
import { ContentAlertManagerPage } from '../manage-communities/content-alert-manager/content-alert-manager.po';

import { ManagePeopleConstant } from './manage-people.constant';
import { ManagePeopleHelper } from './manage-people.helper';
import { ManagePeoplePage } from './manage-people.po';

export class ManagePeople1Helper {

    static async switchToTreeFrame(timeout = PageHelper.DEFAULT_TIMEOUT) {
        await PageHelper.switchToDefaultContent();
        await PageHelper.switchToiFrame(ContentAlertManagerPage.contentIFrame, timeout);
        await PageHelper.switchToiFrame(CommonPage.dialogFrame, timeout);
        await PageHelper.switchToiFrame(CommonPage.contentIFrame, timeout);
        StepLogger.subStep('Switch to Tree Frame');
        await PageHelper.switchToiFrame(CommonPage.treeFrame, timeout);
    }

    static async switchToInnerContentFrame(timeout = PageHelper.DEFAULT_TIMEOUT) {
        await PageHelper.switchToDefaultContent();
        await PageHelper.switchToiFrame(ContentAlertManagerPage.contentIFrame, timeout);
        await PageHelper.switchToiFrame(CommonPage.dialogFrame, timeout);
        StepLogger.subStep('Switch to Content Frame');
        await PageHelper.switchToiFrame(CommonPage.contentIFrame, timeout);
    }

    static async validateSelectedMetadata(productSelected: string) {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        const selectedMetadata = await attr.dialogBox.selectedMetadata.getText();
        await ExpectationHelper.verifyStringEqualTo(selectedMetadata, productSelected);
    }

    static async verifyAddedMetadata(productSelected: string) {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToExpertiseTableFrame(PageHelper.timeout.xs);
        await attr.tableDialogBox.metaDataProduct(productSelected).verifyDisplayedStatus();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
    }

    static async verifySelectedReputationLevel(expected: string) {
        const selected = await ManagePeoplePage.dropDowns.reputationLevelDd.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected.trim(), expected);
    }

    static async clickCancelGroupAndLeavePage() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await attr.buttons.cancel.clickButton();
        StepLogger.subStep('Switch to window number 1');
        await CommonPageHelper.switchToWindow(1);
        await ManagePeopleHelper.clickNoButtonOnDoYouWantToSavePopup();
    }

    static async clickOkUsersListButton() {
        await ManagePeoplePage.groupCreatorForm.buttons.okUsersButton.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
    }

    static async validateExpertiseOptionTitle(title: string, levelTwo = false) {
        await ManagePeoplePage.titles.titleValidation(title).verifyDisplayedStatus();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, levelTwo);
    }

    static async selectMetadataAndClickOk() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToTreeFrame(PageHelper.timeout.xs);
        const productSelected = await attr.dialogBox.metaDataProduct(1).getText();
        await attr.dialogBox.metaDataProduct(1).clickButton();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        await PageHelper.switchToiFrame(CommonPage.dialogFrame, PageHelper.timeout.xs);
        await attr.buttons.submitDialog.clickButton();
        return productSelected;
    }

    static async createGroupForEmployeeApplication(groupName: string) {
        await ManagePeopleHelper.navigateToGroupCreator();
        await ManagePeopleHelper.clickOnEmployeedApplicationOption();
        await this.groupNameEnterText(groupName);
        await this.descriptionEnterText(`Description for group ${groupName}`);
        await this.buttonOwnerClick();
        await CommonPageHelper.switchToSupervisorFrame(PageHelper.timeout.xs);
        await this.selectThefirstRadiobutton();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await this.clickOk();
        await this.clickSubmitGroup();
        await AdminLoginPageHelper.logout(true);
    }

    static async findGroup(groupName: string, searchForIt = false) {
        if (searchForIt) {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await ManagePeoplePage.userGroupFinderForm.groupName.sendKeys(groupName);
            await ManagePeoplePage.userGroupFinderForm.groupName.verifyTextEntered(groupName);
            await ManagePeoplePage.userGroupFinderForm.searchIconGroup.clickButton();
        }

        await CommonPageHelper.switchToGroupFrame(PageHelper.timeout.xs);
        await ManagePeoplePage.getGroup(groupName).verifyDisplayedStatus();
    }

    static async verifyUserNotInSelectedUsersList(userName: string) {
        await CommonPageHelper.switchToSelectedFrame(PageHelper.timeout.xs);
        await ManagePeoplePage.selectUsersForm.userSelected(userName).verifyHiddenStatus();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
    }

    static async removeUserInSelectedUsersList(userName: string) {
        await CommonPageHelper.switchToSelectedFrame(PageHelper.timeout.xs);
        await ManagePeoplePage.selectUsersForm.userSelected(userName).clickButton();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
    }

    static async clickOk() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await attr.buttons.okButton.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
    }

    static async clickSubmitGroup() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToContentFrame();
        await attr.buttons.submit.clickButton();
        await CommonPageHelper.switchToDefaultContent();
    }

    static async clickSubmitDialogId() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await attr.buttons.submitDialog.clickButton();
        await CommonPageHelper.switchToDefaultContent();
    }

    static async verifyUserAndGroupFinderPageDisplayed() {
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.s);
        const title = await ManagePeoplePage.titles.userGroupFinder.getText();
        await ExpectationHelper.verifyStringEqualTo(title,
            ManagePeopleConstant.managePeopleSubmenuOptions.userAndGroupFinder
        );
    }

    static async verifyUserAndGroupFinderTitles() {
        await ManagePeoplePage.userGroupFinderForm.findGroups.verifyDisplayedStatus();
        await ManagePeoplePage.userGroupFinderForm.findUsers.verifyDisplayedStatus();
    }

    static async searchGroupForEmployeeApplication(groupName: string) {
        const attr = ManagePeoplePage.userGroupFinderForm;
        await AdminHomePageHelper.navigateToUserGroupFinder(true);
        await attr.groupName.sendKeys(groupName);
        await attr.groupName.verifyTextEntered(groupName);
        await ManagePeoplePage.userGroupFinderForm.searchIconGroup.clickButton();
        await this.findGroup(groupName);
    }

    static async groupNameEnterText(text: string) {
        await ManagePeoplePage.groupCreatorForm.textElement.groupName.sendKeys(text);
    }

    static async groupNameVerifyText(text: string) {
        await ManagePeoplePage.groupCreatorForm.textElement.groupName.verifyTextEntered(text);
    }

    static async descriptionEnterText(text: string) {
        await ManagePeoplePage.groupCreatorForm.textElement.description.sendKeys(text);
    }

    static async descriptionVerifyText(text: string) {
        await ManagePeoplePage.groupCreatorForm.textElement.description.verifyTextEntered(text);
    }

    static async buttonOwnerClick() {
        await ManagePeoplePage.groupCreatorForm.buttons.owner.clickButton();
    }

    static async dialogBoxAdminCheckbox() {
        await ManagePeoplePage.groupCreatorForm.dialogBox.adminCheckbox.clickButtonJs();
    }

    static async verifyRoleNotDisplayedInTheList(role: string) {
        await CommonPageHelper.switchToContentFrame();
        await ManagePeoplePage.getDeleteIconByRoleName(role).verifyHiddenStatus();
    }

    static async verfyPageIsClosedAndMemberCountUpdated(memberNumber: number) {
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();
        await ManagePeoplePage.manageRolesForm.memberCount.verifyContainsText(memberNumber.toString());
    }

    static async clickOkFromSelectUsersForm() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        StepLogger.subStep('Click on Ok button');
        await ManagePeoplePage.selectUsersForm.okButton.clickButton();
    }

    static async verifyUserDisplayedInSelectedUsersList(user: string) {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        await PageHelper.switchToiFrame(CommonPage.selectedFrame);
        await ManagePeoplePage.getSelectedUserByText(user).verifyDisplayedStatus();
    }

    static async selectUserFromFindUsersPopup(userName: string) {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        StepLogger.subStep(`Select ${userName} checkbox`);
        await ManagePeoplePage.selectUsersForm.username.sendKeys(userName + protractor.Key.ENTER);
        await CommonPageHelper.swithToFindUsersFrame();
        await ManagePeoplePage.selectUsersForm.user(userName).hoverOverAndClick();
    }

    static async verifySelectUsersPopupDisplayed() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await ManagePeoplePage.titles.selectUsers.verifyDisplayedStatus();
    }

    static async validateAccessLevelOptionTitle(title: string, levelTwo = false) {
        await ManagePeoplePage.titles.titleValidation(title).verifyDisplayedStatus();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, levelTwo);
    }

    static async clickSelectAccessLevel() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await attr.buttons.accessLevel.clickButton();
    }

    static async selectAndVerifyPublicAccessLevel() {
        const attrPopUp = ManagePeoplePage.popUps;
        await this.switchToTreeFrame(PageHelper.timeout.xs);
        await attrPopUp.publicAccessLevel.clickButton();
        const fontValue = await attrPopUp.publicAccessLevel.getCssValue('font-weight');
        await ExpectationHelper.verifyStringEqualTo(fontValue, Constants.number.sevenHundred.toString());
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
    }

    static async clickAndVerifyAddPublicAccessLevel() {
        const attrPopUp = ManagePeoplePage.popUps;
        await this.switchToInnerContentFrame(PageHelper.timeout.xs);
        await attrPopUp.buttons.add.clickButton();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attrPopUp.accessLevelSelected(ManagePeopleConstant.labels.publicAccessLevel).verifyDisplayedStatus();
    }

    static async clickAndVerifyOkPublicAccessLevel() {
        const attrPopUp = ManagePeoplePage.popUps;
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attrPopUp.buttons.ok.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await attr.dialogBox.adminSelectedAccessLevel(ManagePeopleConstant.labels.publicAccessLevel)
            .verifyDisplayedStatus();
    }

    static async clickAndVerifyOkLanguage(language: string) {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attr.buttons.submit.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await attr.dialogBox.adminSelectedLanguage(language)
            .verifyDisplayedStatus();
    }

    static async clickAvailableLanguage(language: string) {
        const attrPopUp = ManagePeoplePage.popUps.languagePopUp;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        StepLogger.subStep(`Select ${language} from Available list`);
        await DropDownHelper.selectOptionByText(attrPopUp.availableLanguage(language), language);
    }

    static async verifyAvailableLanguageHighlighted(language: string) {
        const attrPopUp = ManagePeoplePage.popUps.languagePopUp;
        const color = await attrPopUp.availableLanguage(language).getCssValue('backgroundColor');
        await ExpectationHelper.verifyStringEqualTo(color, Constants.colorCode.blue);
    }

    static async clickIncludedLanguage(language: string) {
        const attrPopUp = ManagePeoplePage.popUps.languagePopUp;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        StepLogger.subStep(`Select ${language} from Included list`);
        await DropDownHelper.selectOptionByText(attrPopUp.includedLanguage(language), language);
    }

    static async clickAvailableTemplate(template: string) {
        const attrPopUp = ManagePeoplePage.popUps.unifiedTemplatesPopUp;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        StepLogger.subStep(`Select ${template} from Available list`);
        await DropDownHelper.selectOptionByText(attrPopUp.availableTemplates(template), template);
    }

    static async verifyAvailableTemplateHighlighted(template: string) {
        const attrPopUp = ManagePeoplePage.popUps.unifiedTemplatesPopUp;
        const color = await attrPopUp.availableTemplates(template).getCssValue('backgroundColor');
        await ExpectationHelper.verifyStringEqualTo(color, Constants.colorCode.blue);
    }

    static async clickIncludedTemplate(template: string) {
        const attrPopUp = ManagePeoplePage.popUps.unifiedTemplatesPopUp;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        StepLogger.subStep(`Select ${template} from Included list`);
        await DropDownHelper.selectOptionByText(attrPopUp.includedTemplates(template), template);
    }

    static async verifyIncludedTemplateHighlighted(template: string) {
        const attrPopUp = ManagePeoplePage.popUps.unifiedTemplatesPopUp;
        const valueAttribute = HtmlHelper.attributes.value;
        const expected = await attrPopUp.includedTemplates(template).getAtttribute(valueAttribute);
        await ExpectationHelper.verifyAttributeValue(attrPopUp.includedTemplatesDropdown,
            valueAttribute,
            expected);
    }

    static async clickAndVerifyOkTemplate() {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attr.buttons.submit.clickButton();
        await ManagePeopleHelper.verifyGroupCreatorPageDisplayed();
    }

    static async clickAddMetadata(metadataName: string) {
        const attrPopUps = ManagePeoplePage.popUps;
        await this.switchToTreeFrame(PageHelper.timeout.xs);
        await attrPopUps.metadataPopUp.toSelectMetadata(metadataName).clickLink();
        await this.switchToInnerContentFrame(PageHelper.timeout.xs);
        await attrPopUps.metadataPopUp.addButton.clickButton();
    }

    static async verifySelectedMetadata(metadataName: string) {
        const attrPopUps = ManagePeoplePage.popUps;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attrPopUps.metadataPopUp.selectedMetadata(metadataName).verifyDisplayedStatus();
    }

    static async clickAndVerifyOkMetadata(metadataName: string) {
        const attr = ManagePeoplePage.groupCreatorForm;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attr.buttons.submitDialog.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await attr.dialogBox.adminSelectedMetadata(metadataName)
            .verifyDisplayedStatus();
    }

    static async verifyNoGroupNameErrorWindow() {
        await PageHelper.executeInNewTab(async () => {
            await ManagePeoplePage.errorMessages().noGroupName.verifyDisplayedStatus();
        }, Constants.number.one, false);
    }

    static async selectAndVerifyBrowserForServerWindow() {
        const attrPopUp = ManagePeoplePage.popUps;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attrPopUp.buttons.browse.clickButton();
        StepLogger.subVerification('Verify browser windows title');
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringEqualTo(title, ManagePeopleConstant.titles.browseForServer);
            await ManagePeoplePage.externalBrowser.sharedFolder.clickLink();
            await StepLogger.subStep('Folder selected, click Ok');
            await ManagePeoplePage.externalBrowser.okButton.clickButton();
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyFolderInList(name: string) {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await ManagePeoplePage.popUps.directoryPopUp.selectedPath(name).verifyDisplayedStatus();
    }

    static async clickOkId() {
        const attr = ManagePeoplePage.popUps;
        await attr.buttons.okId.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
    }

    static async selectThefirstRadiobutton() {
        await ManagePeoplePage.groupCreatorForm.dialogBox.firstRadioButton.clickButtonJs();
        return await ManagePeoplePage.groupCreatorForm.dialogBox.firstRadioButtonLabel.getText();
    }

    static async dialogBoxFirstCheckbox() {
        await ManagePeoplePage.groupCreatorForm.dialogBox.firstRadioButton.clickButtonJs();
    }
}
