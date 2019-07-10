import { browser, ElementFinder } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../components/html/checkbox-helper';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../admin-home-page/admin-home.helper';
import { AdminLoginPageHelper } from '../admin-login-page/admin-login.helper';
import { CommonPageHelper } from '../common/common-page.helper';
import { CommonPage } from '../common/common.po';
import { UserAndGroupFinderPage } from '../manage-people/user-and-group-finder/user-and-group-finder.po';

import { ProfileEditorConstant } from './profile-editor.constant';
import { ProfileEditorPage } from './profile-editor.po';

export class ProfileEditorHelper {

    static async switchToTreeFrame() {
        await PageHelper.switchToDefaultContent();
        await PageHelper.switchToiFrames(CommonPage.contentDialogueLevelTwoInnerContentTreeIFrames);
    }

    static async switchToContentFrame() {
        await PageHelper.switchToDefaultContent();
        await PageHelper.switchToiFrames(CommonPage.contentDialogueLevelTwoInnerContentIFrames);
    }

    static async verifyProfileEditorPageDisplayed() {
        await CommonPageHelper.switchToContentFrame();
        await ProfileEditorPage.titles.profileEditor.verifyDisplayedStatus();
    }

    static async enterAndVerifyProfileEditorPageDisplayedForUser(userName: string) {
        const attr = UserAndGroupFinderPage.controlForm;
        await attr.userList(userName).clickLink();
        await CommonPageHelper.switchToContentFrame();
        await ProfileEditorPage.titles.profileEditor.verifyDisplayedStatus();
        await ProfileEditorPage.ProfileDataForm.textBoxes.userName.verifyTextEntered(userName);
    }

    static async selectRole(roleName: string) {
        const attr = ProfileEditorPage.ProfileDataForm;
        await attr.checkBoxes.role(roleName).hoverOverAndClick();
    }

    static async selectAdminAccessLevel() {
        const attr = ProfileEditorPage.ProfileDataForm;
        const attrPopUp = ProfileEditorPage.popUps;
        await attr.buttons.groupsSelect.clickButton();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attrPopUp.accessLevel.clickButton();
        await attrPopUp.buttons.add.clickButton();
        await attrPopUp.buttons.ok.clickButton();
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
    }

    static async enterAndVerifyProfileMandatoryFields(userName: string) {
        const textBoxes = ProfileEditorPage.ProfileDataForm.textBoxes;
        const labels = ProfileEditorConstant.testData;
        await textBoxes.userName.sendKeys(userName);
        await textBoxes.firstName.sendKeys(labels.defFirstName);
        await textBoxes.lastName.sendKeys(labels.defLastName);
        await textBoxes.userName.verifyTextBoxContains(userName);
        await textBoxes.firstName.verifyTextBoxContains(labels.defFirstName);
        await textBoxes.lastName.verifyTextEntered(labels.defLastName);
    }

    static async enterAndVerifyPassword(password: string) {
        const attr = ProfileEditorPage.ProfileDataForm;
        await attr.textBoxes.password.sendKeys(password);
        await attr.textBoxes.confirmPassword.sendKeys(password);
        await attr.textBoxes.password.verifyTextEntered(password);
        await attr.textBoxes.confirmPassword.verifyTextEntered(password);
    }

    static async enterAndVerifyEmail(email: string) {
        const attr = ProfileEditorPage.ProfileDataForm;
        await attr.textBoxes.email.sendKeys(email);
        await attr.textBoxes.email.verifyTextEntered(email);
    }

    static async enterAndVerifyBio (bio: string) {
        const attr = ProfileEditorPage.ProfileDataForm;
        await attr.textBoxes.bio.sendKeys(bio);
        await attr.textBoxes.bio.verifyTextEntered(bio);
    }

    static async verifyContentSubscriptionsFields() {
        const attr = ProfileEditorPage.tabs.contentSubscription;
        await attr.buttons.createEmailSubscription.verifyDisplayedStatus();
        await attr.buttons.selectRSSFeeds.verifyDisplayedStatus();
        await attr.tableHeaders.type.verifyDisplayedStatus();
        await attr.tableHeaders.item.verifyDisplayedStatus();
        await attr.tableHeaders.howOften.verifyDisplayedStatus();
        await attr.tableHeaders.edit.verifyDisplayedStatus();
        await attr.tableHeaders.del.verifyDisplayedStatus();
    }

    static async verifyUserSaved() {
        await WaitHelper.waitForElementToBePresent(ProfileEditorPage.ProfileDataForm.successfullySaved.item);
        await ProfileEditorPage.ProfileDataForm.successfullySaved.verifyDisplayedStatus();
    }

    static async verifyResultDisplayed(userName: string) {
        const attr = UserAndGroupFinderPage.controlForm;
        await CommonPageHelper.switchToUserFrame(PageHelper.timeout.xs);
        await attr.userList(userName).verifyDisplayedStatus();
    }

    static async createUser(userName: string) {
        const password = await PageHelper.getUniqueId();
        const email = await RandomHelper.getRandomEmail();
        const roleName = ProfileEditorConstant.testData.defRole;
        const accessLevel = ProfileEditorConstant.testData.defAccessLevel;
        const attr = ProfileEditorPage.ProfileDataForm;
        await AdminLoginPageHelper.loginAsAdmin();
        await AdminHomePageHelper.navigateToEditProfilePage();
        await ProfileEditorHelper.enterAndVerifyProfileMandatoryFields(userName);
        await ProfileEditorHelper.enterAndVerifyPassword(password);
        await ProfileEditorHelper.enterAndVerifyEmail(email);
        await ProfileEditorHelper.enterAndVerifyBio(ProfileEditorConstant.testData.defBio);
        await ProfileEditorHelper.selectRole(roleName);
        await CheckboxHelper.isCheckboxChecked(attr.checkBoxes.role(roleName));
        await attr.labels.accessLevel(accessLevel).verifyDisplayedStatus();
        await ProfileEditorPage.ProfileDataForm.buttons.save.clickButton();
        await ProfileEditorHelper.verifyUserSaved();
        await CommonPageHelper.switchToDefaultContent();
        await AdminLoginPageHelper.logout(true);
    }

    static async verifyEmailSubscriptionStep1Fields() {
        const attr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attr.emailSubscriptionStep1.categoryDropDown.verifyDisplayedStatus();
        await attr.emailSubscriptionStep1.sendEmailsDropDown.verifyDisplayedStatus();
        await attr.buttons.next.verifyDisplayedStatus();
        await attr.buttons.cancel.verifyDisplayedStatus();
    }

    static async clickOkOnPopup() {
        await PageHelper.executeInNewTab(async () => {
            StepLogger.subStep('Click on the "Yes" button to delete user');
            await browser.executeScript('onAction1();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async deleteUser(userName: string, loginAsAdmin = false) {
        const attr = UserAndGroupFinderPage.controlForm;
        if (loginAsAdmin) {
            await AdminHomePageHelper.navigateToUserAndGroupFinder(loginAsAdmin);
        }

        await attr.textBoxes.userName.sendKeys(userName);
        await attr.buttons.search.clickButton();
        await CommonPageHelper.switchToUserFrame(PageHelper.timeout.xs);
        await attr.userList(userName).clickLink();
        await CommonPageHelper.switchToContentFrame();
        await ProfileEditorPage.ProfileDataForm.buttons.delete.clickButton();
        await this.clickOkOnPopup();
        StepLogger.subStep(`User ${userName} deleted`);
        await CommonPageHelper.switchToContentFrame();
    }

    static async searchAndDisplayUserGoToContentSubscriptions(userName: string, loginAsAdmin = false) {
        await AdminHomePageHelper.searchAndDisplayUser(userName, loginAsAdmin);
        await CommonPageHelper.switchToContentFrame();
        await ProfileEditorPage.tabs.titles.subscription.clickLink();
    }

    static async searchAndDisplayUserGoToEmailSubscription(userName: string, loginAsAdmin = false) {
        await this.searchAndDisplayUserGoToContentSubscriptions(userName, loginAsAdmin);
        await ProfileEditorPage.tabs.contentSubscription.buttons.createEmailSubscription.clickButton();
        await ProfileEditorHelper.verifyEmailSubscriptionStep1Fields();
    }

    static async clickAndValidateCategoryDd() {
        const attr = ProfileEditorPage.popUps.emailSubscriptionStep1;
        const labels = ProfileEditorConstant.popUps.dropdowns.options;
        await attr.categoryDropDown.clickButton();
        await ProfileEditorPage.getEmailSubscriptionDdOptions(labels.category.communities).category.verifyDisplayedStatus();
        await ProfileEditorPage.getEmailSubscriptionDdOptions(labels.category.knowledgeBase).category.verifyDisplayedStatus();
    }

    static async clickAndValidateEmailDd() {
        const attr = ProfileEditorPage.popUps.emailSubscriptionStep1;
        const labels = ProfileEditorConstant.popUps.dropdowns.options;
        await attr.sendEmailsDropDown.clickButton();
        await ProfileEditorPage.getEmailSubscriptionDdOptions(labels.emails.daily).email.verifyDisplayedStatus();
        await ProfileEditorPage.getEmailSubscriptionDdOptions(labels.emails.immediately).email.verifyDisplayedStatus();
        await ProfileEditorPage.getEmailSubscriptionDdOptions(labels.emails.weekly).email.verifyDisplayedStatus();
    }

    static async clickNextAndVerifyEmailSubscriptionStep2() {
        const popUpAttr = ProfileEditorPage.popUps;
        await popUpAttr.buttons.next.clickButton();
        await CommonPageHelper.switchToContentFrame();
        await popUpAttr.titles.emailSubscriptionStep2.verifyDisplayedStatus();
    }

    static async clickCancel() {
        const popUpAttr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await popUpAttr.buttons.cancel.clickButton();
    }

    static async clickCancelUserEdit() {
        const popUpAttr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await popUpAttr.buttons.cancel.clickButton();
    }

    static async enterAndVerifyUserNameSearchCriteria(userName: string) {
        const attr = UserAndGroupFinderPage.controlForm;
        await attr.textBoxes.userName.sendKeys(userName);
        await attr.textBoxes.userName.verifyTextEntered(userName);
    }

    static async clickSearch() {
        await UserAndGroupFinderPage.controlForm.buttons.search.clickButton();
    }

    static async verifyAccessLevelIsSelected(accessLevel: string) {
        await ProfileEditorPage.ProfileDataForm.labels.accessLevel(accessLevel).verifyDisplayedStatus();
    }

    static async clickSave() {
        await ProfileEditorPage.ProfileDataForm.buttons.save.clickButton();
    }

    static async clickContentSubscriptionsTab() {
        await ProfileEditorPage.tabs.titles.subscription.clickLink();
    }

    static async verifyCreateEmailSubscriptionButton() {
        await ProfileEditorPage.tabs.contentSubscription.buttons.createEmailSubscription.verifyDisplayedStatus();
    }

    static async clickEmailSubscriptionAndVerifyStep1() {
        const attr = ProfileEditorPage.tabs.contentSubscription;
        const popUpAttr = ProfileEditorPage.popUps;
        await attr.buttons.createEmailSubscription.clickButton();
        await popUpAttr.titles.emailSubscriptionStep1.verifyDisplayedStatus();
    }

    static async verifyRoleIsSelected(roleName: string) {
        const attr = ProfileEditorPage.ProfileDataForm;
        await ExpectationHelper.verifyCheckboxIsChecked(attr.checkBoxes.role(roleName));
    }

    static async searchAndDisplayUserGoToEmailSubscriptionStep2(userName: string, loginAsAdmin = false, category: string) {
        const popUpAttr = ProfileEditorPage.popUps;
        const labels = ProfileEditorConstant.popUps.dropdowns.options;
        await this.searchAndDisplayUserGoToEmailSubscription(userName, loginAsAdmin);
        await DropDownHelper.selectOptionByText(popUpAttr.emailSubscriptionStep1.categoryDropDown,
            category);
        await DropDownHelper.selectOptionByText(popUpAttr.emailSubscriptionStep1.sendEmailsDropDown,
            labels.emails.immediately);
        await ProfileEditorHelper.clickNextAndVerifyEmailSubscriptionStep2();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
    }

    static async searchUserAndCreateAnEmailSubscriptionCommunities(
        userName: string,
        loginAsAdmin = false,
        titleContent: string
        ) {
        const defCommunity = ProfileEditorConstant.testData.defCommunity;
        const category = ProfileEditorConstant.popUps.dropdowns.options.category.communities;
        await this.searchAndDisplayUserGoToEmailSubscriptionStep2(userName, loginAsAdmin, category);
        await ProfileEditorHelper.clickAndValidateCommunityDd();
        await ProfileEditorHelper.selectAndValidateCommunitySelected(defCommunity);
        await ProfileEditorHelper.enterAndValidateTitleContent(titleContent);
        await ProfileEditorHelper.clickSubmit();
        await ProfileEditorHelper.verifyEmailSubscriptionCommunities(titleContent);
    }

    static async validateKnowledgeBaseSelected() {
        const popUpAttr = ProfileEditorPage.popUps;
        const labels = ProfileEditorConstant.popUps.dropdowns.options;
        const selected = await popUpAttr.emailSubscriptionStep1.categoryDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, labels.category.knowledgeBase);
    }

    static async verifyLanguagesDisplayed() {
        const { languagesDropDownOptions } = ProfileEditorPage.popUps.emailSubscriptionStep2.languages;
        await languagesDropDownOptions.item.each(async (option: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(option, languagesDropDownOptions.name);
        });
    }

    static async clickAndValidateLanguageDd() {
        const attr = ProfileEditorPage.popUps.emailSubscriptionStep2;
        await attr.languages.languagesDropDown.clickButton();
        await this.verifyLanguagesDisplayed();
    }

    static async selectAndValidateLanguageSelected(language: string) {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep2.languages;
        await DropDownHelper.selectOptionByText(popUpAttr.languagesDropDown, language);
        const selected = await popUpAttr.languagesDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, language);
    }

    static async enterAndValidateTitleContent(titleContent: string) {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep2;
        await popUpAttr.titleContentsTextBox.sendKeys(titleContent);
        await popUpAttr.titleContentsTextBox.verifyTextEntered(titleContent);
    }

    static async clickAndVerifySelectSegments() {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep2;
        await popUpAttr.segmentsSelectButton.clickButton();
        await ProfileEditorPage.popUps.titles.universalMetadataSelect.verifyDisplayedStatus();
    }

    static async addMetadataProduct(index: string) {
        const popUpAttr = ProfileEditorPage.popUps;
        await popUpAttr.emailSubscriptionStep2.metadataSelectProduct(index).clickLink();
        await this.switchToContentFrame();
        await popUpAttr.buttons.add.clickButton();
        await this.switchToTreeFrame();
    }

    static async selectAndVerifySelectedSegment() {
        const popUpAttr = ProfileEditorPage.popUps;
        await this.switchToTreeFrame();
        await popUpAttr.emailSubscriptionStep2.metadataToggler.clickButton();
        await this.addMetadataProduct('2');
        await this.addMetadataProduct('1');
        await this.switchToContentFrame();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs, true);
        await popUpAttr.emailSubscriptionStep2.metadataSelectedProduct('2').verifyDisplayedStatus();
        await popUpAttr.emailSubscriptionStep2.metadataSelectedProduct('1').verifyDisplayedStatus();
    }

    static async removeAndVerifySelectedSegment() {
        const popUpAttr = ProfileEditorPage.popUps;
        await DropDownHelper.selectOptionByVal(
            popUpAttr.emailSubscriptionStep2.metadataSelectedDropDown,
            ProfileEditorConstant.testData.defMetadataValue2);
        await popUpAttr.buttons.remove.clickButton();
        await popUpAttr.emailSubscriptionStep2.metadataSelectedProduct('2').verifyHiddenStatus();
    }

    static async clickSubmit() {
        const popUpAttr = ProfileEditorPage.popUps;
        await popUpAttr.buttons.submit.clickButton();
    }

    static async verifyEmailSubscriptionKnowledgeBase(defMetadataProduct: string) {
        const popUpAttr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await popUpAttr.emailSubscriptionKB(defMetadataProduct).verifyDisplayedStatus();
    }

    static async verifyEmailSubscriptionCommunities(name: string) {
        const popUpAttr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await popUpAttr.emailSubscriptionCommunities(name).verifyDisplayedStatus();
    }

    static async clickOk() {
        const popUpAttr = ProfileEditorPage.popUps;
        await popUpAttr.buttons.ok.clickButton();
    }

    static async verifyAddedProduct() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await ProfileEditorPage.popUps.emailSubscriptionStep2.selectedMetadata.verifyDisplayedStatus();
    }

    static async selectAndValidateCategorySelected(category: string) {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep1;
        await DropDownHelper.selectOptionByText(popUpAttr.categoryDropDown, category);
        const selected = await popUpAttr.categoryDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, category);
    }

    static async verifyCommunityOptionsDisplayed() {
        const { communityDropDownOptions } = ProfileEditorPage.popUps.emailSubscriptionStep2.community;
        await communityDropDownOptions.item.each(async (option: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(option, communityDropDownOptions.name);
        });
    }

    static async clickAndValidateCommunityDd() {
        const attr = ProfileEditorPage.popUps.emailSubscriptionStep2;
        await attr.community.communityDropDown.clickButton();
        await this.verifyCommunityOptionsDisplayed();
    }

    static async selectAndValidateCommunitySelected(community: string) {
        const popUpAttr = ProfileEditorPage.popUps.emailSubscriptionStep2.community;
        await DropDownHelper.selectOptionByText(popUpAttr.communityDropDown, community);
        const selected = await popUpAttr.communityDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, community);
    }

    static async checkAndUncheckThreadTypes() {
        const attr = ProfileEditorPage.popUps.emailSubscriptionStep2.checkBoxes;
        await CheckboxHelper.markCheckbox(attr.question, false);
        await ExpectationHelper.verifyCheckBoxNotSelected(attr.question);
        await CheckboxHelper.markCheckbox(attr.insight, true);
        await ExpectationHelper.verifyCheckboxIsChecked(attr.insight);
    }

    static async clickAndValidateSelectRSSFeeds() {
        await ProfileEditorPage.tabs.contentSubscription.buttons.selectRSSFeeds.clickButton();
        await ProfileEditorPage.popUps.titles.selectRSSFeeds.verifyDisplayedStatus();
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
    }

    static async clickAndVerifyWindowOpened() {
        await ProfileEditorPage.popUps.firstURL.clickLink();
        await WaitHelper.waitUntilTabsCountEqual(2);
        const count = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyStringEqualTo(count.toString(),
            '2');
        await PageHelper.executeInNewTab(async () => {
            await StepLogger.subStep('Close opened page');
        }, 1, true);
    }

    static async verifySelectRSSClosed() {
        await ProfileEditorPage.popUps.titles.selectRSSFeeds.verifyHiddenStatus();
        await PageHelper.switchToFirstTab();
    }

    static async clickClose() {
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await ProfileEditorPage.popUps.buttons.close.clickButton();
    }

    static async verifyFirstDeleteButton() {
        await ProfileEditorPage.popUps.firstDeleteButton.verifyDisplayedStatus();
    }

    static async clickFirstDelete() {
        await ProfileEditorPage.popUps.firstDeleteButton.clickButton();
    }

    static async verifyErrorMessageDisplayedAndClosePopup() {
        await PageHelper.executeInNewTab(async () => {
            await CommonPage.errorMessageIcon.verifyDisplayedStatus();
            await browser.executeScript('window.top.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyEmailSubscriptionCummunitiesDeleted(name: string) {
        const popUpAttr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await popUpAttr.emailSubscriptionCommunities(name).verifyHiddenStatus();
    }

    static async validateSelectRSSFeedsButton() {
        await ProfileEditorPage.tabs.contentSubscription.buttons.selectRSSFeeds.verifyDisplayedStatus();
    }

    static async verifySelectRSSFeedsFields() {
        const attr = ProfileEditorPage.popUps;
        await CommonPageHelper.switchToDialogFrame(PageHelper.timeout.xs);
        await attr.selectRSSFeedsHeaders.name.verifyDisplayedStatus();
        await attr.selectRSSFeedsHeaders.description.verifyDisplayedStatus();
        await attr.selectRSSFeedsHeaders.url.verifyDisplayedStatus();
    }

    static async clickFirstEditButtonInTable() {
        await ProfileEditorPage.popUps.firstEditButton.clickButton();
    }

    static async verifyFirstEditButtonInTable() {
        await ProfileEditorPage.popUps.firstEditButton.verifyDisplayedStatus();
    }
}
