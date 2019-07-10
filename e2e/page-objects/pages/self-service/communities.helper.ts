import { browser, ElementFinder } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { CommonPageHelper } from '../common/common-page.helper';
import { CommonPage } from '../common/common.po';

import { CommunitiesPageHelperExtension } from './communities-extension.helper';
import { CommunitiesConstant } from './communities.constant';
import { CommunitiesPage } from './communities.po';

export class CommunitiesPageHelper extends CommunitiesPageHelperExtension {

    static async clickOnCommunitiesTab() {
        StepLogger.subStep('Click on Communities tab');
        await CommunitiesPage.formControls.comunitiesTab.hoverOverAndClick();
    }

    static async verifyCommunitiesHomeDisplayed() {
        await CommunitiesPage.formControls.communitiesHomeLink.verifyDisplayedStatus();
    }

    static async verifyNewPostButtonDisplayed() {
        await CommunitiesPage.formControls.newPost.verifyDisplayedStatus();
    }

    static async clickOnNewPostButton() {
        StepLogger.subStep('Click on New Post button');
        await CommunitiesPage.formControls.newPost.hoverOverAndClick();
    }

    static async verifyPostAQuestionPageDisplayed() {
        await CommunitiesPage.titles.postAQuestion.verifyDisplayedStatus();
    }

    static async clickOnCancelButton() {
        await CommonPageHelper.switchToDefaultContent();
        StepLogger.subStep('Click on Cancel button');
        await CommunitiesPage.formControls.cancelButton.hoverOverAndClick();
    }

    static async verifyAddButtonDisplayed() {
        await CommunitiesPage.formControls.addButton.verifyDisplayedStatus();
    }

    static async clickOnAddButton() {
        StepLogger.subStep('Click on Add button');
        await CommunitiesPage.formControls.addButton.hoverOverAndClick();
    }

    static async verifyEditorWindowDisplayedAdnCloseIt() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(title, CommunitiesConstant.titles.attachmentEditor);
            await browser.executeScript('window.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyPopupIsClosed() {
        await CommonPageHelper.verifyNumberOfWindowsOpen(Constants.number.one);
    }

    static async clickOnRandomComunityLink() {
        StepLogger.subStep(`Click on ${CommunitiesPage.formControls.communityLink.getText()}`);
        const community = CommunitiesPage.formControls.communityLink.getText();
        await CommunitiesPage.formControls.communityLink.verifyDisplayedStatus();
        await CommunitiesPage.formControls.communityLink.hoverOverAndClick();
        return community;
    }

    static async verifyCommnityLinkDetailsDisplayed(name: string) {
        await CommunitiesPage.formControls.communityPageDetailsHeaderByText(name).verifyDisplayedStatus();
    }

    static async verifyNewPostButtonDisplayedInCommnityPage() {
        await CommunitiesPage.formControls.newPostButtonFromACommunityPage.verifyDisplayedStatus();
    }

    static async clickNewPostButtonDisplayedInCommnityPage() {
        StepLogger.subStep('Click on New Post button');
        await CommunitiesPage.formControls.newPostButtonFromACommunityPage.hoverOverAndClick();
    }

    static async verifyCommnityLinksDisplayed() {
        await CommunitiesPage.formControls.communityLinks.verifyDisplayedStatus();
    }

    static async typeSubject(subject: string) {
        StepLogger.subStep(`Type ${subject} in Subject field`);
        await CommunitiesPage.formControls.subjectTextbox.clearText();
        await CommunitiesPage.formControls.subjectTextbox.sendKeys(subject);
    }

    static async verifySubjectFieldValue(subject: string) {
        await CommunitiesPage.formControls.subjectTextbox.verifyTextBoxContains(subject);
    }

    static async selectCommunityDropdownOptionByIndex(index: number) {
        await CommunitiesPage.formControls.communityDropdown.hoverOverAndClick();
        const option = await CommunitiesPage.formControls.communityDropdownOptionByIndex(index).getText();
        await DropDownHelper.selectOptionByText(CommunitiesPage.formControls.communityDropdown, option);
        return option;
    }

    static async verifySelectedCommunityDropdownOption(expectedOption: string) {
        const option = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.formControls.communityDropdown);
        await ExpectationHelper.verifyStringEqualTo(expectedOption, option);
    }

    static async clickOnContinueButton() {
        StepLogger.subStep('Click on Continue button');
        await CommonPageHelper.switchToDefaultContent();
        await CommunitiesPage.formControls.continueButton.hoverOverAndClick();
    }

    static async verifyPleaseEnterSomeDetailsForThisPostMessageDisplayedAndCloseIt() {
        await PageHelper.executeInNewTab(async () => {
            await CommunitiesPage.messages.pleaseEnterSomeDetailsForThisPost.verifyDisplayedStatus();
            await browser.executeScript('window.top.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async enterPostDetails(details: string) {
        await PageHelper.switchToiFrame(CommonPage.editorFrame);
        StepLogger.subStep(`Type ${details} in Details field`);
        await CommunitiesPage.formControls.detailsTextbox.clearText();
        await CommunitiesPage.formControls.detailsTextbox.sendKeys(details);
    }

    static async verifyDetailsFieldValue(details: string) {
        await CommunitiesPage.formControls.detailsParagraph.verifyContainsText(details);
    }

    static async verifyPostPreviewPageDisplayed() {
        await CommunitiesPage.titles.PreviewAndSubmitPost.verifyDisplayedStatus();
    }

    static async verifyPleaseEnterASubjectForThisPostMessageDisplayedAndCloseIt() {
        await PageHelper.executeInNewTab(async () => {
            await CommunitiesPage.messages.pleaseEnterASubjectForThisPost.verifyDisplayedStatus();
            await browser.executeScript('window.top.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async enterComunityAndDetails() {
        await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        await CommunitiesPageHelper.enterPostDetails(RandomHelper.getRandomString());
    }

    static async clickOnSubmitButton() {
        StepLogger.subStep('Click on Submit button');
        await CommunitiesPage.formControls.submitButton.hoverOverAndClick();
    }

    static async createPost(
        subject: string = RandomHelper.getRandomString(),
        details: string = RandomHelper.getRandomString()
    ) {
        await CommunitiesPageHelper.clickOnCommunitiesTab();
        await CommunitiesPageHelper.clickOnNewPostButton();
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();
        await CommunitiesPageHelper.typeSubject(subject);
        await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        await CommunitiesPageHelper.enterPostDetails(details);
        await CommunitiesPageHelper.clickOnContinueButton();
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
        await CommunitiesPageHelper.clickOnSubmitButton();
        return subject;
    }

    static async createPostWithoutSubmittingIt(
        subject: string = RandomHelper.getRandomString(),
        details: string = RandomHelper.getRandomString()
    ) {
        await CommunitiesPageHelper.clickOnCommunitiesTab();
        await CommunitiesPageHelper.clickOnNewPostButton();
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();
        await CommunitiesPageHelper.typeSubject(subject);
        await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        await CommunitiesPageHelper.enterPostDetails(details);
        await CommunitiesPageHelper.clickOnContinueButton();
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
        return subject;
    }

    static async verifyMyMostRecentPostsSectionDisplayed() {
        await CommunitiesPage.formControls.myMostRecentPostsSection.verifyDisplayedStatus();
    }

    static async verifyRecentPostDisplayed(subject: string) {
        await CommunitiesPage.formControls.recentBySubject(subject).verifyDisplayedStatus();
    }

    static async generateEnoughRecentPosts() {
        await CommunitiesPageHelper.clickOnCommunitiesTab();
        if (!CommunitiesPage.formControls.showAllLink.item.isPresent()) {
            while (!CommunitiesPage.formControls.showAllLink.item.isPresent()) {
                await CommunitiesPageHelper.clickOnNewPostButton();
                await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();
                const subject = await RandomHelper.getRandomString();
                await CommunitiesPageHelper.typeSubject(subject);
                await CommunitiesPageHelper.enterComunityAndDetails();
                await CommunitiesPageHelper.clickOnContinueButton();
                await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
                await CommunitiesPageHelper.clickOnSubmitButton();
            }
        }
    }

    static async verifyShowAllLinkIsDisplayed() {
        await CommunitiesPage.formControls.showAllLink.verifyDisplayedStatus();
    }

    static async clickOnShowAllLink() {
        StepLogger.subStep('Click on Show All link');
        await CommunitiesPage.formControls.showAllLink.hoverOverAndClick();
    }

    static async verifyShowFewerLinkIsDisplayed() {
        await CommunitiesPage.formControls.showFewer.verifyDisplayedStatus();
    }

    static async clickOnShowFewerLink() {
        StepLogger.subStep('Click on Show Fewer link');
        await CommunitiesPage.formControls.showFewer.hoverOverAndClick();
    }

    static async verifyMostResentPostAreaExpanded() {
        await CommunitiesPage.formControls.recentByIndex(Constants.number.six).verifyDisplayedStatus();
    }

    static async verifyPreviewPageSubject(subject: string) {
        await CommunitiesPage.formControls.previewSubjectByText(subject).verifyDisplayedStatus();
    }

    static async verifyPreviewPageDetails(details: string) {
        await CommunitiesPage.formControls.previewSubjectByText(details).verifyDisplayedStatus();
    }

    static async verifyPostDate(subject: string) {
        const today = new Date().toDateString();
        const postDate = new Date(await CommunitiesPage.formControls.dateFieldBysubject(subject).getText()).toDateString();
        await ExpectationHelper.verifyStringEqualTo(today, postDate);
    }

    static async verifyPreviewPageButtons() {
        await CommunitiesPage.formControls.submitButton.verifyDisplayedStatus();
        await CommunitiesPage.formControls.editButton.verifyDisplayedStatus();
        await CommunitiesPage.formControls.cancelButton.verifyDisplayedStatus();
    }

    static async createPostAndOpenIt(
        subject: string = RandomHelper.getRandomString(),
        details: string = RandomHelper.getRandomString()
    ) {
        await CommunitiesPageHelper.clickOnCommunitiesTab();
        await CommunitiesPageHelper.clickOnNewPostButton();
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();
        await CommunitiesPageHelper.typeSubject(subject);
        await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        await CommunitiesPageHelper.enterPostDetails(details);
        await CommunitiesPageHelper.clickOnContinueButton();
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
        await CommunitiesPageHelper.clickOnSubmitButton();
        await CommunitiesPageHelper.clickOnCommunitiesTab();
        await CommunitiesPage.formControls.recentBySubject(subject).hoverOverAndClick();
        return subject;
    }

    static async verifyPostLinkFromBrowsePage(subject: string) {
        await CommunitiesPage.formControls.postLinkFromBrowsePageBySubject(subject).verifyDisplayedStatus();
    }

    static async verifyCommunityDropdownHasDefaultOption() {
        const option = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.formControls.communityDropdown);
        await ExpectationHelper.verifyStringNotEqualTo(option, Constants.EMPTY_STRING);
    }

    static async clickOnEditButton() {
        StepLogger.subStep('Click on Edit button');
        await CommunitiesPage.formControls.editButton.hoverOverAndClick();
    }

    static async clickShowAllAndVerifyEntries() {
        const countInitial = await CommunitiesPage.formControls.myMostRecentPosts.tableElements.item.count();
        await CommunitiesPage.formControls.showAllLink.clickButton();
        const countFinal = await CommunitiesPage.formControls.myMostRecentPosts.tableElements.item.count();
        await ExpectationHelper.verifyValueGraterThan(countFinal, countInitial);
    }

    static async clickShowFewerAndVerifyEntries() {
        const countInitial = await CommunitiesPage.formControls.myMostRecentPosts.tableElements.item.count();
        await CommunitiesPage.formControls.showFewerLink.clickButton();
        const countFinal = await CommunitiesPage.formControls.myMostRecentPosts.tableElements.item.count();
        await ExpectationHelper.verifyValueGraterThan(countInitial, countFinal);
    }

    static async clickEditAndVerifyMySubscriptions() {
        await CommunitiesPage.formControls.mySubscriptions.editButton.clickButton();
        await CommunitiesPage.formControls.mySubscriptions.title.verifyDisplayedStatus();
    }

    static async clickEditOneSubscriptionAndVerifyEditDialog() {
        const btn = CommunitiesPage.formControls.buttons;
        await WaitHelper.waitUntilElementsCountIsGreaterOrEqual(CommunitiesPage.editButtons.item, 1);
        await CommunitiesPage.editButtons.item.first().click();
        await PageHelper.executeInNewTab(async () => {
            await ExpectationHelper.verifyDisplayedStatus(CommunitiesPage.formControls.mySubscriptions.header);
            await btn.cancel.clickButton();
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyCommunitiesIsACategoryPleaseSelectACommunityDisplayedAndCloseIt() {
        await PageHelper.executeInNewTab(async () => {
            await CommunitiesPage.messages.communitiesIsACategoryPleaseSelectACommunity.verifyDisplayedStatus();
            await browser.executeScript('window.top.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async clickOnCancel() {
        await CommunitiesPage.formControls.buttons.cancel.clickButton();
    }

    static async verifyMySubscriptionsWindowIsClosed() {
        await CommunitiesPage.formControls.mySubscriptions.title.verifyHiddenStatus();
    }

    static async selectAndValidateSearchSelected(search: string) {
        const attr = CommunitiesPage.formControls.dropDowns.searches;
        await DropDownHelper.selectOptionByText(attr.searchesDropDown, search);
        const selected = await attr.searchesDropDown.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, search);
    }

    static async clickSearchAndVerifyRefresh(isAdvancedSearch = false) {
        if (isAdvancedSearch) {
            await CommunitiesPage.formControls.buttons.advancedSearch.clickButton();
        } else {
            await CommunitiesPage.formControls.buttons.search.clickButton();
        }

        await CommunitiesPage.formControls.results.verifyDisplayedStatus();
    }

    static async clickAdvancedSearchAndVerifyFiltersDisplayed() {
        const filter = CommunitiesPage.filters;
        await CommunitiesPage.formControls.advancedSearch.clickLink();
        StepLogger.subVerification('Verify all filters');
        await filter.searchInDropDown.verifyDisplayedStatus();
        await filter.communityDropDown.verifyDisplayedStatus();
        await filter.publisheDropDown.verifyDisplayedStatus();
        await filter.showFocusChoicesRadioBtnOn.verifyDisplayedStatus();
        await filter.showFocusChoicesRadioBtnOff.verifyDisplayedStatus();
        await filter.authorTextBox.verifyDisplayedStatus();
        await filter.documentTypeDropDown.verifyDisplayedStatus();
        await filter.languageDropDown.verifyDisplayedStatus();
    }

    static async clickOnGuidedSearchAndVerifyPreserved() {
        await CommunitiesPage.filters.guidedSearch.clickLink();
        await CommunitiesPage.formControls.results.verifyDisplayedStatus();
    }

    static async clickNewestDiscussionsAndVerifyDropDownValues() {
        const { newestDiscussionsDropDownOptions } = CommunitiesPage.filters.newestDiscussionsOptions;
        await CommunitiesPage.filters.newestDiscussionsOptions.newestDiscussionsDropDown.clickButton();
        await newestDiscussionsDropDownOptions.item.each(async (option: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(option, newestDiscussionsDropDownOptions.name);
        }
        );
    }

    static async selectAndValidateNewestDiscussion(search: string) {
        const attr = CommunitiesPage.filters.newestDiscussionsOptions;
        const initialResult = await CommunitiesPage.filters.firstNewestDiscussion.getText();
        StepLogger.subStep(`Initial (default) result ${initialResult}`);
        await DropDownHelper.selectOptionByText(attr.newestDiscussionsDropDown, search);
        const finalResult = await CommunitiesPage.filters.firstNewestDiscussion.getText();
        StepLogger.subStep(`After changing filter result ${finalResult}`);
        StepLogger.subVerification('Verify previous result is different from current result');
        await ExpectationHelper.verifyValueNotEqualTo(initialResult, finalResult);
    }

    static async clickMostPopularDiscussionsAndVerifyDropDownValues() {
        const { mostPopDiscussionsDropDownOptions } = CommunitiesPage.filters.mostPopularDiscussionsOptions;
        await CommunitiesPage.filters.mostPopularDiscussionsOptions.mostPopDiscussionsDropDown.clickButton();
        await mostPopDiscussionsDropDownOptions.item.each(async (option: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(option, mostPopDiscussionsDropDownOptions.name);
        }
        );
    }

    static async selectAndValidateMostPopularDiscussion(search: string) {
        const attr = CommunitiesPage.filters.mostPopularDiscussionsOptions;
        const initialResult = await CommunitiesPage.filters.firstPopularDiscussion.getText();
        StepLogger.subStep(`Initial (default) result ${initialResult}`);
        await CommunitiesPage.filters.mostPopularDiscussionsOptions.mostPopDiscussionsDropDown.clickButton();
        await DropDownHelper.selectOptionByVal(attr.mostPopDiscussionsDropDown, search);
        const finalResult = await CommunitiesPage.filters.firstNewestDiscussion.getText();
        StepLogger.subStep(`After changing filter result ${finalResult}`);
        StepLogger.subVerification('Verify previous result is different from current result');
        await ExpectationHelper.verifyValueNotEqualTo(initialResult, finalResult);
    }

    static async enterAndValidateAdvancedSearchFields() {
        const values = CommunitiesConstant.testData;
        await this.selectAndVerifySearchInField();
        await this.selectAndVerifyCommunitiesField();
        await DropDownHelper.selectOptionByText(CommunitiesPage.filters.publisheDropDown, values.publishedSearch);
        const optionPublished = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.filters.publisheDropDown);
        await ExpectationHelper.verifyStringEqualTo(values.publishedSearch, optionPublished);
        await CommunitiesPage.filters.authorTextBox.sendKeys(values.defAuthor);
        await CommunitiesPage.filters.authorTextBox.verifyTextEntered(values.defAuthor);
        await DropDownHelper.selectOptionByText(CommunitiesPage.filters.documentTypeDropDown, values.documentTypeSearch);
        const optionDocType = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.filters.documentTypeDropDown);
        await ExpectationHelper.verifyStringEqualTo(values.documentTypeSearch, optionDocType);
        await DropDownHelper.selectOptionByText(CommunitiesPage.filters.languageDropDown, values.defLanguage);
        const optionLanguage = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.filters.languageDropDown);
        await ExpectationHelper.verifyStringEqualTo(values.defLanguage, optionLanguage);
    }

    static async selectAndVerifySearchInField() {
        const values = CommunitiesConstant.testData;
        await DropDownHelper.selectOptionByText(CommunitiesPage.filters.searchInDropDown, values.defSearchInVal);
        const optionSearchIn = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.filters.searchInDropDown);
        await ExpectationHelper.verifyStringEqualTo(values.defSearchInVal, optionSearchIn);
    }

    static async selectAndVerifyCommunitiesField() {
        const index = '2';
        const values = CommunitiesConstant.testData;
        await CommunitiesPage.filters.communityDropdownOptionAdvancedSearchByIndex(index).clickButton();
        const optionCommunities = await DropDownHelper.getTheSelectedOptionText(CommunitiesPage.filters.communityDropDown);
        await ExpectationHelper.verifyStringEqualTo(values.generalSearch, optionCommunities);
    }

    static async clickOnSaveSearchAndVerifySearchWindow() {
        await CommunitiesPage.filters.saveSearch.clickLink();
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(title, CommunitiesConstant.titles.addSearchToFavorites);
        }, 1, false);
    }

    static async enterAndSaveSearchName(searchName: string) {
        const attr = CommunitiesPage.formControls;
        await PageHelper.executeInNewTab(async () => {
            await attr.textBoxes.searchName.sendKeys(searchName);
            await attr.textBoxes.searchName.verifyTextEntered(searchName);
            await attr.buttons.submit.clickButton();
        }, 1, false);
    }

    static async closeWindowAndVerify() {
        await PageHelper.executeInNewTab(async () => {
            StepLogger.subStep('Closing window');
            await browser.driver.close();
        }, 1, false);
        await PageHelper.switchToFirstTab();
        await CommunitiesPage.formControls.results.verifyDisplayedStatus();
    }

    static async verifyAbcButtonDisplayed() {
        await CommonPageHelper.switchToDefaultContent();
        await CommunitiesPage.formControls.abcButton.verifyDisplayedStatus();
    }

    static async clickAbcButton() {
        await CommonPageHelper.switchToDefaultContent();
        StepLogger.subStep('Click on ABC button');
        await CommunitiesPage.formControls.abcButton.hoverOverAndClick();
    }

    static async verifyCheckSpellingPopupDisplayed() {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(title, CommunitiesConstant.titles.checkSpelling);
        }, 1, false);
    }

    static async clickOnRandomSpellingSuggestion() {
        const suggestion = await CommunitiesPage.formControls.firstSpellingSuggestion.getText();
        StepLogger.subStep(`Click on ${suggestion}`);
        await CommunitiesPage.formControls.firstSpellingSuggestion.clickLink();
        await CommunitiesPage.formControls.firstSpellingSuggestion.clickLink();
        return suggestion;
    }
}
