import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';

import { CommunitiesPageHelper } from './communities.helper';
import { SelfServiceHomePageConstant } from './self-service-home-page.contant';
import { SelfServiceHomePage } from './self-service-home-page.po';
import { SelftServiceLoginPage } from './self-service-login.po';

export class SelfServiceHomePageHelper {

    static async navigateToPostAQuestionPage() {
        await CommunitiesPageHelper.clickOnCommunitiesTab();
        await CommunitiesPageHelper.verifyCommunitiesHomeDisplayed();
        await CommunitiesPageHelper.verifyNewPostButtonDisplayed();
    }

    static async verifyWelcomeLabelDisplayed() {
        await SelfServiceHomePage.elements.welcomenLabel.verifyDisplayedStatus();
    }

    static async verifyLogoutLinkNotDisplayed() {
        await SelftServiceLoginPage.loginForm.logoutLink.verifyHiddenStatus();
    }

    static async clickOnEditProfile() {
        StepLogger.subStep('Click on Edit Profile');
        await SelfServiceHomePage.elements.editProfileLink.hoverOverAndClick();
    }

    static async clickOnLogOut() {
        StepLogger.subStep('Click on Log Out');
        await SelftServiceLoginPage.loginForm.logoutLink.hoverOverAndClick();
    }

    static async clickOnLogOutIfPresent() {
        if (await SelftServiceLoginPage.loginForm.logoutLink.item.isPresent()) {
            StepLogger.subStep('Click on Log Out');
            await SelftServiceLoginPage.loginForm.logoutLink.hoverOverAndClick();
        }
    }

    static async verifySeachButtonDisplayed() {
        await SelfServiceHomePage.elements.searchButton.verifyDisplayedStatus();
    }

    static async verifyAdvancedSearchLinkDisplayed() {
        await SelfServiceHomePage.elements.advancedSearchLink.verifyDisplayedStatus();
    }

    static async verifySearchControlsDisplayed() {
        await SelfServiceHomePage.elements.advancedSearchLink.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.searchTextbox.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.productDropdown.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.searchButton.verifyDisplayedStatus();
    }

    static async clickOnAdvancedSearchLink() {
        StepLogger.subStep('Click on Advance Search link');
        await SelfServiceHomePage.elements.advancedSearchLink.hoverOverAndClick();
    }

    static async verifyAdvancedSearchAreaDisplayed() {
        await SelfServiceHomePage.elements.advancedSearchArea.verifyDisplayedStatus();
    }

    static async verifyAdvancedSearchOptions() {
        await SelfServiceHomePage.elements.savedSearch.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.searchIn.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.products.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.documentType.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.language.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.showFocusChoicesOn.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.showFocusChoicesOff.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.author.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.publishedFrom.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.publishedTo.verifyDisplayedStatus();
        await SelfServiceHomePage.elements.publicationStatus.verifyDisplayedStatus();
    }

    static async verifyAdvancedSearchOptionsAreHidden() {
        await SelfServiceHomePage.elements.savedSearch.verifyHiddenStatus();
        await SelfServiceHomePage.elements.searchIn.verifyHiddenStatus();
        await SelfServiceHomePage.elements.products.verifyHiddenStatus();
        await SelfServiceHomePage.elements.documentType.verifyHiddenStatus();
        await SelfServiceHomePage.elements.language.verifyHiddenStatus();
        await SelfServiceHomePage.elements.showFocusChoicesOn.verifyHiddenStatus();
        await SelfServiceHomePage.elements.showFocusChoicesOff.verifyHiddenStatus();
        await SelfServiceHomePage.elements.author.verifyHiddenStatus();
        await SelfServiceHomePage.elements.publishedFrom.verifyHiddenStatus();
        await SelfServiceHomePage.elements.publishedTo.verifyHiddenStatus();
        await SelfServiceHomePage.elements.publicationStatus.verifyHiddenStatus();
    }

    static async clickOnGuidedSearchLink() {
        StepLogger.subStep('Click on Guided Search link');
        await SelfServiceHomePage.elements.guidedSearchLink.hoverOverAndClick();
    }

    static async typeInSearchTextbox(text: string) {
        await SelfServiceHomePage.elements.searchTextbox.clearText();
        await SelfServiceHomePage.elements.searchTextbox.sendKeys(text);
    }

    static async verifySearchTextboxValue(text: string) {
        await SelfServiceHomePage.elements.searchTextbox.verifyTextBoxContains(text);
    }

    static async selectRandomOptionFromProductDropdown() {
        await ElementHelper.selectDropDownByIndex(SelfServiceHomePage.elements.productDropdown,
            Constants.number.zero);
        return await DropDownHelper.getTheSelectedOptionText(SelfServiceHomePage.elements.productDropdown);
    }

    static async verifyProductDropdownSelectedOption(option: string) {
        const selectedOption = await DropDownHelper.getTheSelectedOptionText(
            SelfServiceHomePage.elements.productDropdown);
        await ExpectationHelper.verifyStringEqualTo(option, selectedOption);
    }

    static async clickOnSearchButton() {
        StepLogger.subStep('Click on Search button');
        await SelfServiceHomePage.elements.searchButton.hoverOverAndClick();
    }

    static async verifySearchResultsDisplayed() {
        await SelfServiceHomePage.elements.searchResults.verifyDisplayedStatus();
    }

    static async clickOnSavedSearch() {
        StepLogger.subStep('Click on Saved Search');
        await SelfServiceHomePage.elements.savedSearch.hoverOverAndClick();
    }

    static async clickOnSaveSearch() {
        StepLogger.subStep('Click on Save Search');
        await SelfServiceHomePage.elements.saveSearch.hoverOverAndClick();
    }

    static async verifySavedOptionsDisplayed() {
        await SelfServiceHomePage.elements.savedSearchOptions.verifyDisplayedStatus();
    }

    static async clickOnCustomerMicrositeTab() {
        StepLogger.subStep('Click on Customer Microsite');
        await SelfServiceHomePage.elements.customerMicrosite.hoverOverAndClick();
    }

    static async clickOnAgentMicrositeTab() {
        StepLogger.subStep('Click on Agent Microsite');
        await SelfServiceHomePage.elements.agentMicrosite.hoverOverAndClick();
    }

    static async clickOnAvailableMicrositeTab() {
        StepLogger.subStep('Click on the available Microsite tab');
        await SelfServiceHomePage.elements.micrositeTab.hoverOverAndClick();
    }

    static async verifyUserNavigatedToAdminHomePage() {
        const url = await PageHelper.getCurrentUrl();
        await ExpectationHelper.verifyStringValueContain(url, SelfServiceHomePageConstant.labels.micrositeDo);
    }

    static async verifyEditProfileLink() {
        await SelfServiceHomePage.elements.editProfileLink.verifyDisplayedStatus();
    }

    static async verifyModerateLinkDisplayed() {
        await SelfServiceHomePage.elements.moderateLink.verifyDisplayedStatus();
    }

    static async clickOnModerateLink() {
        StepLogger.subStep('Click on Moderate link');
        await SelfServiceHomePage.elements.moderateLink.hoverOverAndClick();
    }

    static async clickOnTdMicrosite() {
        await PageHelper.switchToiFrame(CommonPage.myMicrositesFrame);
        StepLogger.subStep('Click on "TD_Microsite" link');
        await SelfServiceHomePage.elements.tdMicrosite.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAvailableMicrositeTopTab(tabName: string) {
        await SelfServiceHomePage.elements.micrositeTab.verifyContainsText(tabName);
    }

    static async verifyMyFavoritesWidgetDisplayed() {
        await SelfServiceHomePage.elements.myFavorites.verifyDisplayedStatus();
    }

    static async verifyMyFavoritesWidgetEditIcon() {
        await SelfServiceHomePage.elements.myFavoritesEditIcon.verifyDisplayedStatus();
    }

    static async clickOnMyFavoritesWidgetEditIcon() {
        StepLogger.subStep('Click on Edit icon');
        await SelfServiceHomePage.elements.myFavoritesEditIcon.hoverOverAndClick();
    }

    static async verifyEditFavoriteItemsWindowDisplayed() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringEqualTo(
                title,
                SelfServiceHomePageConstant.titles.editFavoriteItems);
        }, 1, false);
    }

    static async verifyEditFavoriteItemsList() {
        await SelfServiceHomePage.elements.editFavoriteItems.verifyDisplayedStatus();
    }

    static async clickOnCloseButtonFromPopup() {
        StepLogger.subStep('Click on Close button');
        await SelfServiceHomePage.elements.closeButton.hoverOverAndClick();
        await PageHelper.switchToFirstTab();
    }

    static async verifyWindowClosed(expectedNumberOfWindows: number) {
        const windowsNumebr = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyValueEqualTo(expectedNumberOfWindows, windowsNumebr);
    }

    static async verifyMyFavoritesRefreshIconDisplayed() {
        await SelfServiceHomePage.elements.myFavoritesRefreshIcon.verifyDisplayedStatus();
    }

    static async clickOnMyFavoritesRefreshIcon() {
        StepLogger.subStep('Click on Refresh icon beside My Favorites');
        await SelfServiceHomePage.elements.myFavoritesRefreshIcon.hoverOverAndClick();
    }

    static async verifyMySubscriptionsEditButtonDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.mySubscriptionsFrame);
        await SelfServiceHomePage.elements.mySubscriptionsEditButton.scrollToElement();
        await SelfServiceHomePage.elements.mySubscriptionsEditButton.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnMySubscriptionsEditButton() {
        await PageHelper.switchToiFrame(CommonPage.mySubscriptionsFrame);
        StepLogger.subStep('Click on Edit button beside My Subcriptions');
        await SelfServiceHomePage.elements.mySubscriptionsEditButton.scrollToElement();
        await SelfServiceHomePage.elements.mySubscriptionsEditButton.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRefreshButtonBesideAnswerWizardsWidget() {
        await PageHelper.switchToiFrame(CommonPage.myAnswerWizardsFrame);
        await SelfServiceHomePage.elements.answerWizardsRefreshButton.scrollToElement();
        await SelfServiceHomePage.elements.answerWizardsRefreshButton.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnRefreshButtonBesideAnswerWizardsWidget() {
        await PageHelper.switchToiFrame(CommonPage.myAnswerWizardsFrame);
        StepLogger.subStep('Click on Refresh icon beside Answer Wizards');
        await SelfServiceHomePage.elements.answerWizardsRefreshButton.scrollToElement();
        await SelfServiceHomePage.elements.answerWizardsRefreshButton.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyWatsNewRefreshButtonDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.WatsPopularFrame);
        await SelfServiceHomePage.elements.whatsPopulaRefreshButton.scrollToElement();
        await SelfServiceHomePage.elements.whatsPopulaRefreshButton.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnWatsNewRefreshButton() {
        await PageHelper.switchToiFrame(CommonPage.WatsPopularFrame);
        StepLogger.subStep('Click on Refresh icon beside Whats New');
        await SelfServiceHomePage.elements.whatsPopulaRefreshButton.scrollToElement();
        await SelfServiceHomePage.elements.whatsPopulaRefreshButton.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyMyMicrositesItemsDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.myMicrositesFrame);
        await SelfServiceHomePage.elements.myMicrositesWidgetItems.scrollToElement();
        await SelfServiceHomePage.elements.myMicrositesWidgetItems.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnAMyMicrositesItem() {
        await PageHelper.switchToiFrame(CommonPage.myMicrositesFrame);
        StepLogger.subStep('Click on a microsites item');
        await SelfServiceHomePage.elements.myMicrositesWidgetItems.scrollToElement();
        await SelfServiceHomePage.elements.myMicrositesWidgetItems.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAnswerWizardsWidgetDisplayed() {
        await SelfServiceHomePage.elements.answerWizardsWidget.scrollToElement();
        await SelfServiceHomePage.elements.answerWizardsWidget.verifyDisplayedStatus();
    }

    static async verifyWhatsPopularWidgetDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.WatsPopularFrame);
        await SelfServiceHomePage.elements.whatsPopulaWidget.scrollToElement();
        await SelfServiceHomePage.elements.whatsPopulaWidget.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyMySubscriptionsWidgetDisplayed() {
        await SelfServiceHomePage.elements.mySubscriptionsWidget.scrollToElement();
        await SelfServiceHomePage.elements.mySubscriptionsWidget.verifyDisplayedStatus();
    }
}
