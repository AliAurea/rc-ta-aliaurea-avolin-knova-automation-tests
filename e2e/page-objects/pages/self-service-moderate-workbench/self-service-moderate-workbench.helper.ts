import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { SelfServiceHomePageHelper } from '../self-service/self-service-home-page.helper';

import { SelfServiceModerateWorkbenchConstant } from './self-service-moderate-workbench.constant';
import { SelfServiceModerateWorkbenchPage } from './self-service-moderate-workbench.po';

export class SelfServiceModerateWorkbenchPageHelper {
    static async verifyWorkbenchPageDisplayed() {
        const url = await PageHelper.getCurrentUrl();
        await ExpectationHelper.verifyStringValueContain(url,
            SelfServiceModerateWorkbenchConstant.attributes.name.moderate);
    }

    static async clickOnWebCasesTab() {
        StepLogger.subStep('Click on Web Cases tab');
        await SelfServiceModerateWorkbenchPage.elements.webCasesTab.hoverOverAndClick();
    }

    static async verifyTabHighlighted(tab: string) {
        const className = await SelfServiceModerateWorkbenchPage.elements.getTabByText(tab).getAtttribute('class');
        await ExpectationHelper.verifyStringEqualTo(
            className,
            SelfServiceModerateWorkbenchConstant.names.subnavOn);
    }

    static async verifyAcitiveWebCasesDisplayed() {
        await SelfServiceModerateWorkbenchPage.titles.activeWebCases.verifyDisplayedStatus();
    }

    static async verifyActiveWebCasesContainerDisplayed() {
        await SelfServiceModerateWorkbenchPage.elements.webCasesContainer.verifyDisplayedStatus();
    }

    static async verifyWorkbenchTabs() {
        const tabs = SelfServiceModerateWorkbenchConstant.names;
        await SelfServiceModerateWorkbenchPage.elements.getTabByText(tabs.webCases).verifyDisplayedStatus();
        await SelfServiceModerateWorkbenchPage.elements.getTabByText(tabs.moderatorWorkbench).verifyDisplayedStatus();
        await SelfServiceModerateWorkbenchPage.elements.getTabByText(tabs.webCases).verifyDisplayedStatus();
        await SelfServiceModerateWorkbenchPage.elements.getTabByText(tabs.webCases).verifyDisplayedStatus();
    }

    static async verifyWebCasesTabDisplayed() {
        const tabs = SelfServiceModerateWorkbenchConstant.names;
        await SelfServiceModerateWorkbenchPage.elements.getTabByText(tabs.webCases).verifyDisplayedStatus();
    }

    static async verifySelectRfCommunityDropdownDisplayed() {
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunity.verifyDisplayedStatus();
    }

    static async verifyToolsSection() {
        await SelfServiceModerateWorkbenchPage.elements.toolsSection.verifyDisplayedStatus();
        await SelfServiceModerateWorkbenchPage.elements.viewEditResolutionFlowMembersLink.verifyDisplayedStatus();
    }

    static async selectARandomRfComunity() {
        StepLogger.subStep('Select the Second option from "Select RF/Community" dropdown');
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunity.hoverOverAndClick();
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunitySecondOption.hoverOverAndClick();
        return await DropDownHelper.getTheSelectedOptionText(SelfServiceModerateWorkbenchPage.elements.selectRfCommunity);
    }

    static async selectRfComunityOption(option: string) {
        StepLogger.subStep(`Select ${option} from "Select RF/Community" dropdown`);
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunity.hoverOverAndClick();
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunityOptionByText(option).hoverOverAndClick();
    }

    static async verifyViewEditResolutionFlowMembersLinkDisplayed() {
        await SelfServiceModerateWorkbenchPage.elements.viewEditResolutionFlowMembersLink.verifyDisplayedStatus();
    }

    static async clickOnViewEditResolutionFlowMembersLink() {
        StepLogger.subStep('Click on "View/Edit Resolution Flow Members" link');
        await SelfServiceModerateWorkbenchPage.elements.viewEditResolutionFlowMembersLink.hoverOverAndClick();
    }

    static async navigateToViewEditMembersResolutionFlow() {
        await SelfServiceHomePageHelper.clickOnModerateLink();
        await this.selectRfComunityOption(
            SelfServiceModerateWorkbenchConstant.testData.rfCommunity);
        await this.clickOnViewEditResolutionFlowMembersLink();
        await this.verifyViewEditMembersResolutionFlowPageDisplayed();
    }

    static async typeUsername(userName: string) {
        StepLogger.subStep(`Type ${userName} in User Name field`);
        await WaitHelper.waitForElementToBeDisplayed(SelfServiceModerateWorkbenchPage.elements.username.item);
        await SelfServiceModerateWorkbenchPage.elements.username.clearText();
        await SelfServiceModerateWorkbenchPage.elements.username.sendKeys(userName);
    }

    static async verifyViewEditMembersResolutionFlowPageDisplayed() {
        await PageHelper.switchToTab(Constants.number.one);
        const url = await PageHelper.getCurrentUrl();
        await ExpectationHelper.verifyStringValueContain(url,
            SelfServiceModerateWorkbenchConstant.attributes.name.vieworeditmembers);
    }

    static async verifyUsernameFieldValue(userName: string) {
        await SelfServiceModerateWorkbenchPage.elements.username.verifyTextBoxContains(userName);
    }

    static async clickOnSearchIcon() {
        StepLogger.subStep('Click on Search icon');
        await SelfServiceModerateWorkbenchPage.elements.searchIcon.hoverOverAndClick();
    }

    static async verifySearchResultsDisplayed(text: string) {
        await SelfServiceModerateWorkbenchPage
            .elements
            .getSearchResultsRecordByText(text)
            .verifyDisplayedStatus();
    }

    static async clickOnASearchResultsDisplayed(text: string) {
        StepLogger.subStep(`Click on ${text}`);
        await SelfServiceModerateWorkbenchPage
            .elements
            .getSearchResultsRecordByText(text)
            .hoverOverAndClick();
    }

    static async verifyEditUserDetailsPageDisplayed(pageNumber = Constants.number.two) {
        await PageHelper.switchToTab(pageNumber);
        const url = await PageHelper.getCurrentUrl();
        await ExpectationHelper.verifyStringValueContain(url,
            SelfServiceModerateWorkbenchConstant.attributes.name.editprofile);
    }

    static async clickRfComunityDropdown() {
        StepLogger.subStep('Click on "Select RF/Community" dropdown');
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunity.hoverOverAndClick();
    }

    static async verifyRfComunityDropdownOptionsDisplated() {
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunitySecondOption.hoverOverAndClick();
        await SelfServiceModerateWorkbenchPage.elements.selectRfCommunity.hoverOverAndClick();
    }

    static async verifyModeratorWorkbenchTablesDisplayed() {
        await SelfServiceModerateWorkbenchPage.elements.webCasesAlertsTable.verifyDisplayedStatus();
        await SelfServiceModerateWorkbenchPage.elements.contentAlertsTable.verifyDisplayedStatus();
    }

    static async clickOnATitleLink() {
        StepLogger.subStep('Click on a title link');
        const title = await SelfServiceModerateWorkbenchPage.elements.titleLink.getText();
        await SelfServiceModerateWorkbenchPage.elements.titleLink.hoverOverAndClick();
        return title;
    }

    static async verifySensityWordsTextTidisplayed() {
        await SelfServiceModerateWorkbenchPage.elements.sensitiveWords.verifyDisplayedStatus();
    }

    static async verifyEditAndDeleteButtonsDisplayed() {
        await SelfServiceModerateWorkbenchPage.elements.edit.verifyDisplayedStatus();
        await SelfServiceModerateWorkbenchPage.elements.delete.verifyDisplayedStatus();
    }

    static async clickOnEditDescriptionLink() {
        StepLogger.subStep('Click on "Edit Description" link');
        await SelfServiceModerateWorkbenchPage.elements.editDescriptionLink.hoverOverAndClick();
    }

    static async verifyEditCommunityDialogDisplayed(pageNumber = Constants.number.one) {
        await PageHelper.switchToTab(pageNumber);
        const url = await PageHelper.getCurrentUrl();
        await ExpectationHelper.verifyStringValueContain(url,
            SelfServiceModerateWorkbenchConstant.attributes.name.editdescription);
    }

    static async typeDescription(description: string) {
        StepLogger.subStep(`Type ${description} in Description text area`);
        await SelfServiceModerateWorkbenchPage.elements.description.clearText();
        await SelfServiceModerateWorkbenchPage.elements.description.sendKeys(description);
    }

    static async verifyDescription(description: string) {
        await SelfServiceModerateWorkbenchPage.elements.description.verifyTextBoxContains(description);
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on "Save" button');
        await SelfServiceModerateWorkbenchPage.elements.save.hoverOverAndClick();
    }

    static async verifyWindowIsClosed(expectedNumberOfWindows: number) {
        const count = await PageHelper.getWindowCount();
        await ExpectationHelper.verifyValueEqualTo(expectedNumberOfWindows, count);
    }
}
