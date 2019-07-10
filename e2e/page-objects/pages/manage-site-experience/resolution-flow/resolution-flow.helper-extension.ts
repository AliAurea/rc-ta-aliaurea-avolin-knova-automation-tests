import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { AdminHomePageHelper } from '../../admin-home-page/admin-home.helper';
import { AdminHomePage } from '../../admin-home-page/admin-home.po';
import { CommonPageHelper } from '../../common/common-page.helper';

import { ResolutionFlowConstant } from './resolution-flow.constants';
import { ResolutionFlowHelper } from './resolution-flow.helper';
import { ResolutionFlowPage } from './resolution-flow.po';

const { executeInNewTab } = PageHelper;

export class ResolutionFlowHelperExtension {

    static async verifyStepsSuccessMessage() {
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        await ResolutionFlowPage.processFlowTab.successMsg.verifyDisplayedStatus();
    }

    static async selectResolutionFlowFromInbox(name: string, moderator: string) {
        await ResolutionFlowHelper.verifyCreatedResolutionFlow(name, moderator);
        await ResolutionFlowHelper.selectResolutionFlow(name);
    }

    static async verifyBuilderTabWithSteps(name: string, moderator: string, step: string) {
        await ResolutionFlowHelper.verifyBuilderTabWithValues(name, moderator);
        await ResolutionFlowPage.builderTab.createdStep(step).verifyDisplayedStatus();
    }

    static async enterStepName(name: string) {
        await ResolutionFlowPage.processFlowTab.nameStep.sendKeys(name);
    }

    static async verifyStepName(name: string) {
        await ResolutionFlowPage.processFlowTab.nameStep.verifyTextBoxContains(name);
    }

    static async clickCopyResolutionFlow(resolutionFlow: string) {
        await ResolutionFlowPage.inboxTab.copy(resolutionFlow).clickButton();
    }

    static async verifyCopyDialog() {
        const copyDialog = ResolutionFlowPage.copyDialog;
        StepLogger.subStep('Switch to content frame');
        await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        StepLogger.subStep('Switch to dialog frame');
        await PageHelper.switchToiFrame(copyDialog.dialogIFrame);
        await copyDialog.name.verifyDisplayedStatus();
    }

    static async enterCopyNameAndClickOk(name: string) {
        const copyDialog = ResolutionFlowPage.copyDialog;
        await copyDialog.name.sendKeys(name);
        await copyDialog.okBtn.clickButton();
    }

    static async selectModeratorAndCommunity() {
        let moderator = Constants.EMPTY_STRING;
        const community = await ResolutionFlowHelper.selectCommunityToEdit();
        const message = await ResolutionFlowHelper.verifyCommunityAndMessage(community);
        if (message.length > Constants.number.zero) {
            await ResolutionFlowHelper.clickOkCommunityModeratorWindow();
        }
        StepLogger.subVerification('Close message');
        if (message.length > Constants.number.zero) {
            moderator = await ResolutionFlowHelper.verifyModeratorUpdated(message);
        }
        return { community, moderator };
    }

    static async verifyPassedValidationWindow() {
        await executeInNewTab(async () => {
            await ResolutionFlowPage.passedValidationWindow.dialog.verifyDisplayedStatus();
        }, Constants.number.one, false);
    }

    static async navigateToResolutionFlow() {
        await AdminHomePageHelper.clickOnBurgerIcon();
        await AdminHomePageHelper.clickOnManageSiteExperienceMenu();
        await AdminHomePageHelper.verifyManageSiteExpSubMenu();
        await AdminHomePageHelper.clickOnAgentMicrositeOption();
        await AdminHomePageHelper.verifyAgentMicrositeMenuOptions();
        await AdminHomePageHelper.clickOnResolutionFlowDesignerOption();
        await ResolutionFlowHelper.verifyResolutionFlowDesignerPageDisplayed();
    }

    static async clickOkButtonPassedValidationWindow() {
        await ResolutionFlowPage.passedValidationWindow.okBtn.clickButton();
        StepLogger.subStep('Switch to first window');
        await PageHelper.switchToFirstTab();
    }

    static async verifyInboxTab(toSwitch: boolean = false) {
        const inboxTab = ResolutionFlowPage.inboxTab;
        if (toSwitch) {
            StepLogger.subStep('Switch to content frame');
            await PageHelper.switchToDefaultContentAndIFrame(AdminHomePage.contentIFrame);
        }

        await inboxTab.inbox.verifyDisplayedStatus();
    }

    static async verifyShowDropdown() {
        await CommonPageHelper.switchToContentFrame();
        await ResolutionFlowPage.show.showDropdown.verifyDisplayedStatus();
    }

    static async verifyShowDropdownOptions() {
        const dropdown = ResolutionFlowConstant.showDropdown;
        const options = await PageHelper.getTextOfElements( await ResolutionFlowPage.show.allOptions );
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.showActive);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.showAll);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.showInactive);
    }

    static async verifyResolutionFlowList() {
        const count  = await ResolutionFlowPage.inboxTab.resolutionFlowList.item.count();
        await ExpectationHelper.verifyValueGreaterOrEqualTo(count, Constants.number.zero);
        if (count === Constants.number.zero) {
            await ResolutionFlowPage.inboxTab.noDataMsg.verifyDisplayedStatus();
        }
    }

    static async selectShowOption(option: string) {
        await ResolutionFlowPage.show.showOption(option).clickButton();
    }

    static async getResolutionFlowByIndex(index: number) {
        const items = await PageHelper.getTextOfElements(ResolutionFlowPage.inboxTab.resolutionFlowList);
        return items[index];
    }

    static async verifyReorderModalDisplayed(switchToIFrame = false) {
        if (switchToIFrame) {
            StepLogger.subStep('Switch to iframe');
            await PageHelper.switchToiFrame(ResolutionFlowPage.reorder.dialogIFrame);
        }

        await ResolutionFlowPage.reorder.ok.verifyDisplayedStatus();
    }

    static async moveResolutionFlow(rflow: string, moveUp: boolean = true) {
        StepLogger.subVerification('Move Resolution Flow');
        const itemsInitialOrder = await PageHelper.getTextOfElements(ResolutionFlowPage.reorder.allItems);
        if (moveUp) {
            await ResolutionFlowHelper.moveItemUp(rflow);
        } else {
            await ResolutionFlowHelper.moveItemDown(rflow);
        }

        await ResolutionFlowPage.reorder.selectItem(rflow).clickButton();
        return itemsInitialOrder;
    }

    static async moveItemUp(name: string) {
        await ResolutionFlowPage.reorder.selectItem(name).clickButton();
        await ResolutionFlowPage.reorder.moveUp.clickButton();
    }

    static async moveItemDown(name: string) {
        await ResolutionFlowPage.reorder.selectItem(name).clickButton();
        await ResolutionFlowPage.reorder.moveDown.clickButton();
    }

    static async verifyResolutionFlowsReordered(initial: string[], switchToIFrame = false) {
        if (switchToIFrame) {
            StepLogger.subStep('Switch to iframe');
            await CommonPageHelper.switchToContentFrame();
        }

        const reordered = await PageHelper.getTextOfElements(ResolutionFlowPage.inboxTab.resolutionFlowList);
        await ExpectationHelper.verifyStringEqualTo(initial[0], reordered[1]);
        await ExpectationHelper.verifyStringEqualTo(initial[1], reordered[0]);
    }

    static async verifyItemsReorderedOnReorderModal(initial: string[], switchToIFrame = false) {
        if (switchToIFrame) {
            await PageHelper.switchToiFrame(ResolutionFlowPage.reorder.dialogIFrame);
        }

        const reordered = await PageHelper.getTextOfElements(ResolutionFlowPage.reorder.allItems);
        await ExpectationHelper.verifyStringEqualTo(initial[0], reordered[1]);
        await ExpectationHelper.verifyStringEqualTo(initial[1], reordered[0]);
    }
}
