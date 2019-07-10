import { StepLogger } from '../../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../../components/html/checkbox-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { DfElement } from '../../../../components/misc-utils/df-elements-helper';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { AdminHomePageHelper } from '../../admin-home-page/admin-home.helper';
import { AdminHomePage } from '../../admin-home-page/admin-home.po';
import { CommonPageHelper } from '../../common/common-page.helper';
import { CommunitiesManagerConstant } from '../../manage-communities/communities-manager/communities-manager.constants';
import { CommunitiesManagerHelper } from '../../manage-communities/communities-manager/communities-manager.helper';
import { CommunitiesManagerPage } from '../../manage-communities/communities-manager/communities-manager.po';

import { ResolutionFlowConstant } from './resolution-flow.constants';
import { ResolutionFlowHelperExtension } from './resolution-flow.helper-extension';
import { ResolutionFlowPage } from './resolution-flow.po';

const { executeInNewTab, getTextOfElements } = PageHelper;

export class ResolutionFlowHelper extends ResolutionFlowHelperExtension {

    static async verifyResolutionFlowDesignerPageDisplayed() {
        await CommonPageHelper.switchToContentFrame();
        await ResolutionFlowPage.titles.pageTitle.verifyDisplayedStatus();
    }

    static async verifyPageContent() {
        const tableFields = ResolutionFlowPage.tableFields;
        const buttons = ResolutionFlowPage.buttons;
        await CommonPageHelper.switchToContentFrame();
        await ResolutionFlowPage.show.showDropdown.verifyDisplayedStatus();
        await tableFields.name.verifyDisplayedStatus();
        await tableFields.description.verifyDisplayedStatus();
        await tableFields.visible.verifyDisplayedStatus();
        await tableFields.communityUsed.verifyDisplayedStatus();
        await tableFields.moderator.verifyDisplayedStatus();
        await tableFields.delete.verifyDisplayedStatus();
        await tableFields.copy.verifyDisplayedStatus();
        await buttons.newResolutionFlow.verifyDisplayedStatus();
        await buttons.reorder.verifyDisplayedStatus();
        await buttons.validate.verifyDisplayedStatus();
    }

    static async verifyBuilderTab(toSwitch: boolean = false) {
        const builderTab = ResolutionFlowPage.builderTab;
        if (toSwitch) {
            StepLogger.subStep('Switch to content frame');
            await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        }

        await builderTab.builder.verifyDisplayedStatus();
        await builderTab.name.verifyDisplayedStatus();
    }

    static async verifyBuilderTabContent() {
        const builderTab = ResolutionFlowPage.builderTab;
        const buttons = ResolutionFlowPage.buttons;
        await builderTab.name.verifyDisplayedStatus();
        await builderTab.moderator.verifyDisplayedStatus();
        await builderTab.selectModerator.verifyDisplayedStatus();
        await builderTab.makeVisible.verifyDisplayedStatus();
        await builderTab.lastModified.verifyDisplayedStatus();
        await builderTab.displayDescription.verifyDisplayedStatus();
        await builderTab.internalDescription.verifyDisplayedStatus();
        await builderTab.timer.verifyDisplayedStatus();
        await builderTab.communityDropdown.verifyDisplayedStatus();
        await builderTab.editBtn.verifyDisplayedStatus();
        await builderTab.newRuleBtn.verifyDisplayedStatus();
        await buttons.save.verifyDisplayedStatus();
        await buttons.cancel.verifyDisplayedStatus();
    }

    static async navigateToBuilderTab() {
        await AdminHomePageHelper.clickOnBurgerIcon();
        await AdminHomePageHelper.clickOnManageSiteExperienceMenu();
        await AdminHomePageHelper.verifyManageSiteExpSubMenu();
        await AdminHomePageHelper.clickOnAgentMicrositeOption();
        await AdminHomePageHelper.verifyAgentMicrositeMenuOptions();
        await AdminHomePageHelper.clickOnResolutionFlowDesignerOption();
        await ResolutionFlowHelper.verifyResolutionFlowDesignerPageDisplayed();
        await ResolutionFlowPage.buttons.newResolutionFlow.clickButton();
        await ResolutionFlowHelper.verifyBuilderTab();
    }

    static async enterResolutionFlowName(name: string) {
        await ResolutionFlowPage.builderTab.name.sendKeys(name);
    }

    static async verifyResolutionFlowName(name: string) {
        await ResolutionFlowPage.builderTab.name.verifyTextBoxContains(name);
    }

    static async verifyModeratorDialog() {
        StepLogger.subStep('Switch to dialog frame');
        await PageHelper.switchToiFrame(ResolutionFlowPage.builderTab.dialogIFrame);
        StepLogger.subStep('Switch to moderator frame');
        await PageHelper.switchToiFrame(ResolutionFlowPage.builderTab.moderatorIFrame);
        await ResolutionFlowPage.builderTab.moderatorTable.verifyDisplayedStatus();
    }

    static async selectModerator() {
        const builderTab = ResolutionFlowPage.builderTab;
        const moderator = await builderTab.moderatorName.getText();
        await builderTab.moderatorCheckbox.clickButtonJs();
        return moderator;
    }

    static async verifyModerator() {
        await ResolutionFlowPage.builderTab.moderatorName.verifyDisplayedStatus();
    }

    static async clickOkModeratorDialog() {
        const builderTab = ResolutionFlowPage.builderTab;
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        StepLogger.subStep('Switch to first dialog');
        await PageHelper.switchToiFrame(builderTab.dialogIFrame);
        await builderTab.ok.clickButton();
    }

    static async verifySelectedModerator(moderator: string) {
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        await ResolutionFlowPage.builderTab.selectedModerator.verifyContainsText(moderator.substr(Constants.number.zero, Constants.number.eight));
    }

    static async verifyMessageAndLastModified() {
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        const builderTab = ResolutionFlowPage.builderTab;
        const today = new Date().toLocaleDateString();
        const lastModified = await builderTab.lastModified.getText();
        await ExpectationHelper.verifyContainsText(builderTab.lastModified, today);
        await ExpectationHelper.verifyContainsText(builderTab.successMsg, lastModified);
    }

    static async verifyCreatedResolutionFlow(name: string, moderator: string, checkVisible: boolean = false,
                                             checkDescription: boolean = false, checkCommunity: boolean = false,
                                             expected: string = ResolutionFlowConstant.builderTab.generalDiscussions) {
        const inboxTab = ResolutionFlowPage.inboxTab;
        await inboxTab.inbox.clickButton();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        await ResolutionFlowPage.builderTab.builder.verifyHiddenStatus();
        await inboxTab.resolutionFlow(name).scrollToElement();
        await inboxTab.resolutionFlow(name).verifyDisplayedStatus();
        const current = await inboxTab.moderator(name).getText();
        await ExpectationHelper.verifyStringValueContain(current, moderator.substr(Constants.number.zero, Constants.number.eight));
        if (checkVisible) {
            await inboxTab.visible(name).verifyDisplayedStatus();
        }

        if (checkDescription) {
            const desc = await inboxTab.description(name).getText();
            await ExpectationHelper.verifyStringValueContain(desc, name);
        }

        if (checkCommunity) {
            const community = await inboxTab.community(name).getText();
            await ExpectationHelper.verifyStringValueContain(community, expected);
        }
    }

    static async clickCancelModeratorDialog() {
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        StepLogger.subStep('Switch to first dialog');
        await PageHelper.switchToiFrame(ResolutionFlowPage.builderTab.dialogIFrame);
        await ResolutionFlowPage.builderTab.cancel.clickButton();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
    }

    static async clickSelectAndSelectModerator() {
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        await ResolutionFlowHelper.verifyModeratorDialog();
        return await ResolutionFlowHelper.selectModerator();
    }

    static async createResolutionFlow(resolutionFlow: string) {
        await ResolutionFlowHelper.navigateToBuilderTab();
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        await ResolutionFlowHelper.verifyModeratorDialog();
        const moderator = await ResolutionFlowHelper.selectModerator();
        await ResolutionFlowHelper.clickOkModeratorDialog();
        await ResolutionFlowHelper.verifySelectedModerator(moderator);
        await ResolutionFlowHelper.clickSaveButton();
        await ResolutionFlowHelper.verifyMessageAndLastModified();
        await ResolutionFlowHelper.verifyCreatedResolutionFlow(resolutionFlow, moderator);
        return moderator;
    }

    static async verifyDuplicateNameWindow() {
        await executeInNewTab(async () => {
            await ResolutionFlowPage.duplicateNameWindow.dialog.verifyDisplayedStatus();
        }, Constants.number.one, false);
    }

    static async clickOkButtonWindow() {
        await ResolutionFlowPage.duplicateNameWindow.okBtn.clickButton();
        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
    }

    static async verifyBuilderTabWithValues(name: string, moderator: string) {
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        await ResolutionFlowHelper.verifyResolutionFlowName(name);
        await ResolutionFlowHelper.verifySelectedModerator(moderator);
    }

    static async verifyNoDuplicates(name: string) {
        const count = await ResolutionFlowPage.inboxTab.allResolutionFlows(name).item.count();
        await ExpectationHelper.verifyValueEqualTo(count, Constants.number.one);
    }

    static async verifyMakeVisibleChecked() {
        await ExpectationHelper.verifyCheckboxIsChecked(await ResolutionFlowPage.builderTab.makeVisible);
    }

    static async enterDescriptionFieldsAndTimer(text: string) {
        const builderTab = ResolutionFlowPage.builderTab;
        await builderTab.displayDescription.sendKeys(text);
        await builderTab.internalDescription.sendKeys(text);
        await builderTab.timer.sendKeys(Constants.stringNumber.one);
    }

    static async verifyDescriptionFieldsAndTimer(text: string) {
        const builderTab = ResolutionFlowPage.builderTab;
        await builderTab.displayDescription.verifyTextBoxContains(text);
        await builderTab.internalDescription.verifyTextBoxContains(text);
        await builderTab.timer.verifyTextBoxContains(Constants.stringNumber.one);
    }

    static async verifyCommunityAndMessage(community: string) {
        let message = Constants.EMPTY_STRING;
        const selected = await ResolutionFlowPage.builderTab.communityDropdown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, community);
        StepLogger.subStep('Get window handles');
        const count = await PageHelper.getAllWindowHandles();
        if (count.length > 1) {
            StepLogger.subStep('Switch to window');
            await executeInNewTab(async () => {
                await ResolutionFlowPage.communityModeratorWindow.dialog.verifyDisplayedStatus();
                message = await ResolutionFlowPage.communityModeratorWindow.text.getText();
            }, Constants.number.one, false);
        }

        return message;
    }

    static async clickOkCommunityModeratorWindow() {
        await ResolutionFlowPage.communityModeratorWindow.okBtn.clickButton();
        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
    }

    static async verifyModeratorUpdated(message: string) {
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        const moderator = await ResolutionFlowPage.builderTab.selectedModerator.getText();
        await ExpectationHelper.verifyStringValueContain(message, moderator);
        return moderator;
    }

    static async selectCommunityOption(option: string) {
        await ResolutionFlowPage.builderTab.communityDropdownOption(option).clickButton();
    }

    static async verifySaveChangesWindow() {
        StepLogger.subStep('Switch to window');
        await executeInNewTab(async () => {
            await ResolutionFlowPage.saveChangesWindow.dialog.verifyDisplayedStatus();
        }, Constants.number.one, false);
    }

    static async clickNoSaveChangesWindow() {
        await ResolutionFlowPage.saveChangesWindow.noBtn.clickButton();
        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
    }

    static async verifyResolutionFlowNotCreated(name: string) {
        const inboxTab = ResolutionFlowPage.inboxTab;
        await inboxTab.inbox.clickButton();
        StepLogger.subStep('Switch to window');
        await executeInNewTab(async () => {
            await ResolutionFlowPage.saveChangesWindow.noBtn.clickButton();
        }, Constants.number.one, false);

        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        await ResolutionFlowPage.builderTab.builder.verifyHiddenStatus();
        await inboxTab.resolutionFlow(name).verifyHiddenStatus();
    }

    static async clickYesSaveChangesWindow() {
        await ResolutionFlowPage.saveChangesWindow.yesBtn.clickButton();
        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
    }

    static async verifyCreatedResolutionFlowAfterSavingChanges(name: string) {
        const inboxTab = ResolutionFlowPage.inboxTab;
        await inboxTab.inbox.clickButton();
        StepLogger.subStep('Switch to window');
        await executeInNewTab(async () => {
            await ResolutionFlowPage.saveChangesWindow.yesBtn.clickButton();
        }, Constants.number.one, false);

        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        await ResolutionFlowPage.builderTab.builder.verifyHiddenStatus();
        await inboxTab.resolutionFlow(name).scrollToElement();
        await inboxTab.resolutionFlow(name).verifyDisplayedStatus();
    }

    static async clickCancelSaveChangesWindow() {
        await ResolutionFlowPage.saveChangesWindow.cancelBtn.clickButton();
        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
    }

    static async createResolutionFlowAddCommunity(resolutionFlow: string) {
        await ResolutionFlowHelper.navigateToBuilderTab();
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        await ResolutionFlowHelper.verifyModeratorDialog();
        const moderator = await ResolutionFlowHelper.selectModerator();
        await ResolutionFlowHelper.clickOkModeratorDialog();
        await ResolutionFlowHelper.verifySelectedModerator(moderator);
        await ResolutionFlowPage.builderTab.makeVisible.clickButton();
        await ResolutionFlowHelper.verifyMakeVisibleChecked();
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(resolutionFlow);
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(resolutionFlow);
        return moderator;
    }

    static async enterCommunityDescriptionAndSubmit() {
        await CommunitiesManagerHelper.enterCommunityDescription(ResolutionFlowConstant.labels.test);
        await CommunitiesManagerHelper.clickCommunitySubmitButton();
    }

    static async verifyCommunityDescription() {
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);
        await CommunitiesManagerHelper.verifyCommunityDescription(ResolutionFlowConstant.labels.test);
    }

    static async clickEditCommunity() {
        await ResolutionFlowPage.builderTab.editBtn.clickButton();
        await PageHelper.switchToNewTabIfAvailable();
    }

    static async verifyCommunityAndButtons(name: string) {
        const buttons = CommunitiesManagerPage.buttons;
        await CommunitiesManagerPage.titles.bottomTitle(name).verifyDisplayedStatus();
        await buttons.editProperties.verifyDisplayedStatus();
        await buttons.editVisibility.verifyDisplayedStatus();
        await buttons.editHomeOptions.verifyDisplayedStatus();
        await buttons.delete.verifyDisplayedStatus();
    }

    static async verifyEditedCommunity(name: string) {
        await PageHelper.switchToDefaultContent();
        await CommunitiesManagerPage.communitiesList.selectedCommunity(name).verifyDisplayedStatus();
    }

    static async changeCommunityVisibilityAndSubmit() {
        const dropdown = CommunitiesManagerConstant.visibilityDropdown;
        let visibility = dropdown.public;
        StepLogger.subStep('Get visibility');
        const selected = await CommunitiesManagerPage.communityVisibilityDialog.visibilityDropdown.getSelectedOptionText();
        if (selected.localeCompare(CommunitiesManagerConstant.visibilityDropdown.public) === Constants.number.zero) {
            visibility = dropdown.private;
        }

        await CommunitiesManagerPage.communityVisibilityDialog.visibilityOption(visibility).clickButton();
        await CommunitiesManagerPage.communityDialog.submitBtn.clickButton();
        return visibility;
    }

    static async verifyCommunitySelectedVisibility(visibility: string) {
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);
        await CommunitiesManagerHelper.verifySelectedVisibility(visibility);
    }

    static async changeCommunityVisibilityAndCancel() {
        const dropdown = CommunitiesManagerConstant.visibilityDropdown;
        let visibility = dropdown.public;
        StepLogger.subStep('Get visibility');
        const selected = await CommunitiesManagerPage.communityVisibilityDialog.visibilityDropdown.getSelectedOptionText();
        if (selected.localeCompare(CommunitiesManagerConstant.visibilityDropdown.public) === Constants.number.zero) {
            visibility = dropdown.private;
        }

        await CommunitiesManagerPage.communityVisibilityDialog.visibilityOption(visibility).clickButton();
        await CommunitiesManagerHelper.cancelEditPropertiesButton();
        return selected;
    }

    static async selectCommunityToEdit() {
        StepLogger.subStep('Get communities');
        const options = await getTextOfElements(await ResolutionFlowPage.builderTab.allCommunities);
        const count = options.length - Constants.number.one;
        const community = options[count];
        await ResolutionFlowPage.builderTab.communityDropdownOption(community).clickButton();
        return community;
    }

    static async clickSaveButton() {
        await ResolutionFlowPage.buttons.save.clickButton();
    }

    static async changeCommunityHomePageAndSubmit() {
        const homePageDialog = CommunitiesManagerPage.homePageDialog;
        StepLogger.subStep('Get selected option');
        let btn = homePageDialog.templateBtn;
        const checkBoxStatus = await CheckboxHelper.isCheckboxChecked(btn);
        if (checkBoxStatus) {
            btn = homePageDialog.defaultBtn;
        } else {
            await CommunitiesManagerHelper.selectHomeTemplate(ResolutionFlowConstant.labels.test);
        }

        await btn.clickButton();
        await CommunitiesManagerPage.communityDialog.submitBtn.clickButton();
        return btn;
    }

    static async verifyCommunityHomePage(template: DfElement) {
        await CommunitiesManagerHelper.verifyHomePageDialog(true);
        await ExpectationHelper.verifyCheckboxIsChecked(template);
    }

    static async changeCommunityHomePageAndCancel() {
        const homePageDialog = CommunitiesManagerPage.homePageDialog;
        StepLogger.subStep('Get selected option');
        let selected = homePageDialog.templateBtn;
        const checkBoxStatus = await CheckboxHelper.isCheckboxChecked(selected);
        if (checkBoxStatus) {
            await homePageDialog.defaultBtn.clickButton();
        } else {
            selected = homePageDialog.defaultBtn;
            await homePageDialog.templateBtn.clickButton();
            await CommunitiesManagerHelper.selectHomeTemplate(ResolutionFlowConstant.labels.test);
        }

        await CommunitiesManagerPage.communityDialog.cancelBtn.clickButton();
        return selected;
    }

    static async selectResolutionFlow(name: string) {
        await ResolutionFlowPage.inboxTab.resolutionFlow(name).clickButton();
    }

    static async verifyProcessDesignerTab(toSwitch: boolean = false) {
        const procTab = ResolutionFlowPage.processFlowTab;
        if (toSwitch) {
            StepLogger.subStep('Switch to content frame');
            await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        }

        await procTab.tab.verifyDisplayedStatus();
    }

    static async verifyProcessDesignerTabButtons() {
        const procTab = ResolutionFlowPage.processFlowTab;
        await procTab.newStep.verifyDisplayedStatus();
        await procTab.expandAll.verifyDisplayedStatus();
        await procTab.save.verifyDisplayedStatus();
        await procTab.closeBtn.verifyDisplayedStatus();
    }

    static async verifyStepsDetailsDisplayed() {
        const processFlowTab = ResolutionFlowPage.processFlowTab;
        await processFlowTab.stepDetails.verifyDisplayedStatus();
        await processFlowTab.nameStep.verifyDisplayedStatus();
        return await processFlowTab.nameStep.getAtttribute(HtmlHelper.tags.value);
    }
}
