import { browser } from 'protractor';

import { StepLogger } from '../../../../../core/logger/step-logger';
import { AlertHelper } from '../../../../components/html/alert-helper';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../components/html/element-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../admin-home-page/admin-home.helper';
import { CommonPageHelper } from '../../common/common-page.helper';
import { CommonPage } from '../../common/common.po';

import { AgentMicrositeHelperExtension } from './agent-microsite-extension.helper';
import { AgentMicrositeConstant } from './agent-microsite.constant';
import { AgentMicrositePage } from './agent-microsite.po';

export class AgentMicrositeHelper extends AgentMicrositeHelperExtension {

    static async verifyResolutionFlowDesignerPageDisplayed() {
        await CommonPageHelper.switchToContentFrame();
        await AgentMicrositePage.titles.resolutionFlowDesigner.verifyDisplayedStatus();
    }

    static async clickOnARandomResolutionName() {
        await AgentMicrositePage.resolutionFlowDesignerForm.resolutionNameList.verifyDisplayedStatus();
        StepLogger.subStep('Click on a random resolution name');
        await AgentMicrositePage.resolutionFlowDesignerForm.resolutionNameList.hoverOverAndClick();
    }

    static async verifyBuilderTabDisplayed() {
        await AgentMicrositePage.resolutionFlowDesignerForm.builderTab.verifyDisplayedStatus();
    }

    static async navigateToResolutionFlowDesignerPageAndOpenARandomResolutionName() {
        await AdminHomePageHelper.navigateToResolutionFlowDesignerPage();
        await AgentMicrositeHelper.clickOnARandomResolutionName();
    }

    static async clickOnNewStep() {
        StepLogger.subStep('Click on New Step button');
        await AgentMicrositePage.resolutionFlowDesignerForm.newStepButton.hoverOverAndClick();
    }

    static async clickOnStepsLink() {
        StepLogger.subStep('Click on Steps link');
        await AgentMicrositePage.resolutionFlowDesignerForm.stepsLink.hoverOverAndClick();
    }

    static async verifyProcessDesignerTabDisplayed() {
        await AgentMicrositePage.resolutionFlowDesignerForm.srocessDesignerTab.verifyDisplayedStatus();
    }

    static async CreateAStepTheresNotAlreadyCreated() {
        await AgentMicrositeHelper.navigateToResolutionFlowDesignerPageAndOpenARandomResolutionName();
        if (await AgentMicrositePage.resolutionFlowDesignerForm.newStepsButton.item.isPresent()) {
            await AgentMicrositePage.resolutionFlowDesignerForm.newStepsButton.hoverOverAndClick();
            await AgentMicrositePage.resolutionFlowDesignerForm.newStepButton.hoverOverAndClick();
            await AgentMicrositePage.resolutionFlowDesignerForm.saveButton.hoverOverAndClick();
            await AgentMicrositePage.resolutionFlowDesignerForm.builderTab.hoverOverAndClick();
        } else {
            await AgentMicrositePage.resolutionFlowDesignerForm.cancelButton.hoverOverAndClick();
        }
        await AgentMicrositeHelper.verifyResolutionFlowDesignerPageDisplayed();
    }

    static async getNumberOfSteps() {
        return await AgentMicrositePage.resolutionFlowDesignerForm.stepsList.count();
    }

    static async verifyNumberOfSteps(expectedNumberOfSteps: number) {
        const numberOfSteps = await AgentMicrositeHelper.getNumberOfSteps();
        await ExpectationHelper.verifyValueEqualTo(numberOfSteps, expectedNumberOfSteps);
    }

    static async verifyStepIconsAreNotExpanded() {
        const status = await AgentMicrositePage.resolutionFlowDesignerForm.expandIconList.getAtttribute('alt');
        await ExpectationHelper.verifyStringEqualTo(status, 'Expand');
    }

    static async clickOnTheFirstDeleteIcon() {
        StepLogger.subStep('Click on Delete icon');
        await CommonPageHelper.switchToContentFrame();
        await AgentMicrositePage.resolutionFlowDesignerForm.deleteIconList.hoverOverAndClick();
    }

    static async verifyDeleteStepPopupDisplayed() {
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositePage.titles.deletePoppup.verifyDisplayedStatus();
        }, 1, false);
    }

    static async clickOnDeleteFromFormPageRadionButton() {
        StepLogger.subStep('Click on "Delete From Form Page" radio button');
        await CommonPageHelper.switchToDefaultContent();
        await AgentMicrositePage.deletePopup.deleteFromPageRandionButton.hoverOverAndClick();
    }

    static async verifyDeleteFromFormPageRadionButtonIsSelected() {
        const selected = await AgentMicrositePage.deletePopup.deleteFromPageRandionButton.item.isSelected();
        await ExpectationHelper.verifyStringEqualTo(selected.toString(), Constants.boolean.true.toString());
    }

    static async clickOkButtonFromDeleteStepPopup() {
        StepLogger.subStep('Click on Delete button from the Delete Step popup');
        await AgentMicrositePage.deletePopup.okButton.hoverOverAndClick();
        await PageHelper.switchToFirstTab();
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on Save button');
        await AgentMicrositePage.resolutionFlowDesignerForm.saveButton.hoverOverAndClick();
    }

    static async verifyStepDeleted(previousNumberOfSteps: number) {
        await CommonPageHelper.switchToContentFrame();
        await AgentMicrositeHelper.clickOnSaveButton();
        const currentNumberOfSteps = await AgentMicrositeHelper.getNumberOfSteps();
        await ExpectationHelper.verifyValueEqualTo(currentNumberOfSteps, previousNumberOfSteps - Constants.number.one);
    }

    static async CreateOneStepInRandomResolutionNameAndOpenStepsPage() {
        await AgentMicrositeHelper.navigateToResolutionFlowDesignerPageAndOpenARandomResolutionName();
        if (await AgentMicrositePage.resolutionFlowDesignerForm.newStepsButton.item.isPresent()) {
            await AgentMicrositePage.resolutionFlowDesignerForm.newStepsButton.hoverOverAndClick();
        } else {
            await AgentMicrositePage.resolutionFlowDesignerForm.stepsLink.hoverOverAndClick();
        }
        await AgentMicrositePage.resolutionFlowDesignerForm.newStepButton.hoverOverAndClick();
        await AgentMicrositePage.resolutionFlowDesignerForm.saveButton.hoverOverAndClick();
    }

    static async verifyRecomendationManagerPageDisplayed() {
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await AgentMicrositePage.titles.recommendationManager.verifyDisplayedStatus();
    }

    static async verifyRecommendationManagerPageFields() {
        await AgentMicrositePage.recommendationManagerForm.addPageletButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.pageletsTableColumns.id.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.pageletsTableColumns.name.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.pageletsTableColumns.location.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.pageletsTableColumns.delete.verifyDisplayedStatus();
    }

    static async clickOnAddPageletButton() {
        await AgentMicrositePage.recommendationManagerForm.addPageletButton.hoverOverAndClick();
    }

    static async verifyNewPageletTabDisplayed() {
        await AgentMicrositePage.recommendationManagerForm.newPageletTab.verifyDisplayedStatus();
    }

    static async verifyHomePageIsSelectedinShowOn() {
        const selectedValue = await DropDownHelper.getTheSelectedOptionText(
            AgentMicrositePage.recommendationManagerForm.showOnDropdown);
        await ExpectationHelper.verifyStringEqualTo(
            selectedValue,
            AgentMicrositeConstant.pages.homePage);
    }

    static async typePageletName(name: string) {
        await AgentMicrositePage.recommendationManagerForm.nameTextbox.clearText();
        await AgentMicrositePage.recommendationManagerForm.nameTextbox.sendKeys(name);
    }

    static async typePageletNameAndClickSave(name: string) {
        await AgentMicrositeHelper.typePageletName(name);
        await AgentMicrositePage.recommendationManagerForm.saveButton.hoverOverAndClick();
    }

    static async verifyPageletSavedMessageDisplayed() {
        await AgentMicrositePage.recommendationManagerForm.pageletSaveMessage.verifyDisplayedStatus();
    }

    static async verifyCreatedPageletDisplayed(name: string) {
        await AgentMicrositePage.recommendationManagerForm.pageletsTab.hoverOverAndClick();
        await AgentMicrositePage.recommendationManagerForm.pageletByName(name).verifyDisplayedStatus();
    }

    static async createPagelet(name: string = RandomHelper.getRandomString()) {
        await AdminHomePageHelper.navigateToRecommendationPage();
        await AgentMicrositeHelper.clickOnAddPageletButton();
        await AgentMicrositeHelper.verifyNewPageletTabDisplayed();
        await AgentMicrositeHelper.verifyHomePageIsSelectedinShowOn();
        await AgentMicrositeHelper.typePageletNameAndClickSave(name);
        await AgentMicrositeHelper.verifyPageletSavedMessageDisplayed();
        await AgentMicrositeHelper.verifyCreatedPageletDisplayed(name);
        return name;
    }

    static async ClickOnAPageLet(name: string) {
        await AgentMicrositePage.recommendationManagerForm.pageletsTab.hoverOverAndClick();
        await AgentMicrositePage.recommendationManagerForm.pageletByName(name).hoverOverAndClick();
    }

    static async verifyPageletNameDisplayedInTab(name: string) {
        await AgentMicrositePage.recommendationManagerForm.newPageletTab.verifyContainsText(name);
    }

    static async verifyPageletNameFieldValue(name: string) {
        await AgentMicrositePage.recommendationManagerForm.nameTextbox.verifyTextBoxContains(name);
    }

    static async navigateToNewPageletPage() {
        await AdminHomePageHelper.navigateToRecommendationPage();
        await AgentMicrositeHelper.clickOnAddPageletButton();
    }

    static async typePageletNameAndClickAddNewLink(name: string) {
        await AgentMicrositeHelper.typePageletName(name);
        await AgentMicrositePage.recommendationManagerForm.addNewLink.hoverOverAndClick();
    }

    static async verifyRecommendationLinkDisplayed() {
        await AgentMicrositePage.recommendationManagerForm.recommendationLink.verifyDisplayedStatus();
    }

    static async verifyDocumentRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.documentRadioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async verifyTextRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.textRadioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async verifyAlwaysUseDocumentTitleRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.alwaysUseDocumentTitleRadioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async verifyAlwaysUseDocumentSynopsisRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.alwaysUseDocumentSynopsisRadioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async verifyPageleLinkSelectedOptions() {
        await AgentMicrositeHelper.verifyDocumentRadioButtonChecked();
        await AgentMicrositeHelper.verifyTextRadioButtonChecked();
        await AgentMicrositeHelper.verifyAlwaysUseDocumentTitleRadioButtonChecked();
        await AgentMicrositeHelper.verifyAlwaysUseDocumentSynopsisRadioButtonChecked();
    }

    static async typeTextToSeachAndClickSearchIcon(textToSeach: string) {
        await PageHelper.switchToiFrame(CommonPage.linkDOCEntryFrame);
        await AgentMicrositePage.recommendationManagerForm.findDocument.clearText();
        await AgentMicrositePage.recommendationManagerForm.findDocument.sendKeys(textToSeach);
        await AgentMicrositePage.recommendationManagerForm.searchIcon.hoverOverAndClick();
    }

    static async verifySearchResultsDisplayed() {
        await AgentMicrositePage.recommendationManagerForm.searchResultsLink.verifyDisplayedStatus();
    }

    static async clickOnThePlusIconInTheDisplayedResult() {
        await AgentMicrositePage.recommendationManagerForm.plusIconInSearchReseults.hoverOverAndClick();
    }

    static async verifyDocumentAddedMessageDisplayed() {
        await CommonPageHelper.switchToContentFrame(PageHelper.timeout.xs);
        await AgentMicrositePage.recommendationManagerForm.documentAddedMessage.verifyDisplayedStatus();
    }

    static async clickOnPagelestTab() {
        await AgentMicrositePage.recommendationManagerForm.pageletsTab.hoverOverAndClick();
    }

    static async clickOnSaveButtonFromRecommendationPage() {
        await AgentMicrositePage.recommendationManagerForm.saveButton.hoverOverAndClick();
    }

    static async clickOnComunityRadioButton() {
        await AgentMicrositePage.recommendationManagerForm.comunityRadioButton.hoverOverAndClick();
    }

    static async verifyLinkComunityFields() {
        await AgentMicrositePage.recommendationManagerForm.documentRadioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.comunityRadioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.resolutionFlowRadtioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.urlRadtioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.nothingRadtioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.textRadioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.graphicRadtioButton.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.textField.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.synopsisField.verifyDisplayedStatus();
        await AgentMicrositePage.recommendationManagerForm.comunityDropdown.verifyDisplayedStatus();
    }

    static async selectAComunityDropdownRandomOption() {
        await AgentMicrositePage.recommendationManagerForm.comunityDropdown.hoverOverAndClick();
        const option = await AgentMicrositePage.recommendationManagerForm.comunityDropdownOptions.getText();
        await DropDownHelper.selectOptionByText(AgentMicrositePage.recommendationManagerForm.comunityDropdown, option);
        return option;
    }

    static async verifyCurrentlyLinkedAndTextFieldsValue(expectedValue: string) {
        await AgentMicrositePage.recommendationManagerForm.textField.verifyTextBoxContains(expectedValue);
        await AgentMicrositePage.recommendationManagerForm.currentlyLinkedField.verifyContainsText(expectedValue);
    }

    static async verifySavedPageletMessagePageletNameAtTheTopAndTextFieldValue(pageletName: string, comunityName: string) {
        await AgentMicrositeHelper.verifyPageletSavedMessageDisplayed();
        await AgentMicrositePage.recommendationManagerForm.recommendationLinkByName(comunityName).verifyDisplayedStatus();
        await AgentMicrositeHelper.verifyPageletNameDisplayedInTab(pageletName);
    }

    static async clickOnResolutionFlowRadioButton() {
        await AgentMicrositePage.recommendationManagerForm.resolutionFlowRadtioButton.hoverOverAndClick();
    }

    static async verifyResolutionFlowRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.resolutionFlowRadtioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async selectAResolutionFlowDropdownRandomOption() {
        await AgentMicrositePage.recommendationManagerForm.resolutionFlowDropdown.hoverOverAndClick();
        const option = await AgentMicrositePage.recommendationManagerForm.resolutionFlowDropdownOption.getText();
        await AgentMicrositePage.recommendationManagerForm.resolutionFlowDropdownOption.hoverOverAndClick();
        return option;
    }

    static async verifySelectedResolutionFlowOption(option: string) {
        const selectedValue = await AgentMicrositePage.recommendationManagerForm.resolutionFlowDropdownOption.getText();
        await ExpectationHelper.verifyStringEqualTo(selectedValue, option);
    }

    static async clickOnSpecifyLinkTextRadioButton() {
        await AgentMicrositePage.recommendationManagerForm.specifyLinkText.hoverOverAndClick();
    }

    static async verifyTextFieldValue(text: string) {
        await AgentMicrositePage.recommendationManagerForm.textField.verifyTextBoxContains(text);
    }

    static async verifyTextFieldEnabledAndTypeValue(text: string) {
        const disabled = await ElementHelper.getAttributeValueWithoutTrim(AgentMicrositePage.recommendationManagerForm.textField, 'disabled');
        await ExpectationHelper.verifyStringEqualTo(disabled, null);
        await AgentMicrositePage.recommendationManagerForm.textField.clearText();
        await AgentMicrositePage.recommendationManagerForm.textField.sendKeys(text);
    }

    static async clickOnSpecifySynopsisRadioButton() {
        await AgentMicrositePage.recommendationManagerForm.specifySynopsisRadioButton.hoverOverAndClick();
    }

    static async verifySynopsisTextboxIsEnabled() {
        const disabled = await ElementHelper.getAttributeValueWithoutTrim(AgentMicrositePage.recommendationManagerForm.synopsysTextbox, 'disabled');
        await ExpectationHelper.verifyStringEqualTo(disabled, null);
    }

    static async typeValueInSysnopsisTextbox(text: string) {
        await AgentMicrositePage.recommendationManagerForm.synopsysTextbox.clearText();
        await AgentMicrositePage.recommendationManagerForm.synopsysTextbox.sendKeys(text);
    }

    static async verifyValueInSysnopsisTextbox(text: string) {
        await AgentMicrositePage.recommendationManagerForm.synopsysTextbox.verifyTextBoxContains(text);
    }

    static async verifyComunityDropdownIsNotEmpty() {
        const text = await DropDownHelper.getTheSelectedOptionText(AgentMicrositePage.recommendationManagerForm.comunityDropdown);
        await ExpectationHelper.verifyStringNotEqualTo(text, Constants.EMPTY_STRING);
    }

    static async verifyLeftBrankPropertyMessageDisplayedAncCloseIt() {
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositePage.recommendationManagerForm.propertyLeftBlankMessage.verifyDisplayedStatus();
            await browser.executeScript('window.top.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyPoppupIsClosed() {
        await CommonPageHelper.verifyNumberOfWindowsOpen(Constants.number.one);
    }

    static async verifyPageletNotDisplayed(name: string) {
        await AgentMicrositePage.recommendationManagerForm.pageletsTab.hoverOverAndClick();
        await AgentMicrositePage.recommendationManagerForm.pageletByName(name).verifyHiddenStatus();
    }

    static async verifyComunityDropdownSelectedValue(value: string) {
        const text = await DropDownHelper.getTheSelectedOptionText(AgentMicrositePage.recommendationManagerForm.comunityDropdown);
        await ExpectationHelper.verifyStringEqualTo(text, value);
    }

    static async clickOnGraphicRadioButton() {
        await AgentMicrositePage.recommendationManagerForm.graphicRadtioButton.hoverOverAndClick();
    }

    static async verifyGraphicRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.graphicRadtioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async verifyAddImageButtonDisplayed() {
        await AgentMicrositePage.recommendationManagerForm.addImageButton.verifyDisplayedStatus();
    }

    static async verifyNoGraphicSpecifiedMessageDisplayedAncCloseIt() {
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositePage.recommendationManagerForm.noGraphicSpecifiedMessage.verifyDisplayedStatus();
            await browser.executeScript('window.top.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyAlwaysUseResolutionFlowNameRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.alwaysUseResolutionFlowNameRadioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async verifyAlwaysUseResolutionFlowDescriptionRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.alwaysUseResolutionFlowDescriptionRadioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async veriryResolutionFlowDefaultSelectedOptions() {
        await AgentMicrositeHelper.verifyTextRadioButtonChecked();
        await AgentMicrositeHelper.verifyAlwaysUseResolutionFlowNameRadioButtonChecked();
        await AgentMicrositeHelper.verifyAlwaysUseResolutionFlowDescriptionRadioButtonChecked();
    }

    static async clickOnUrlRadioButton() {
        await AgentMicrositePage.recommendationManagerForm.urlRadtioButton.hoverOverAndClick();
    }

    static async verifyUrlRadioButtonChecked() {
        const checked = await AgentMicrositePage.recommendationManagerForm.urlRadtioButton.getAtttribute('checked');
        await ExpectationHelper.verifyStringEqualTo(checked.toString(), Constants.boolean.true.toString());
    }

    static async openPageletAdnVerifyTextFieldValue(pageletName: string, textValue: string) {
        await AgentMicrositeHelper.ClickOnAPageLet(pageletName);
        await AgentMicrositeHelper.verifyTextFieldValue(textValue);
    }

    static async verifyDeleteIconDisplayedIPageletsPage() {
        await CommonPageHelper.switchToContentFrame();
        await AgentMicrositePage
            .recommendationManagerForm
            .pageletsTableColumns
            .delete
            .verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnFirstDeleteIconFromPageletsPage() {
        await CommonPageHelper.switchToContentFrame();
        const pagelet = AgentMicrositePage
            .recommendationManagerForm
            .firstPagelet
            .getText();
        StepLogger.subStep('Click on Delete icon');
        await AgentMicrositePage
            .recommendationManagerForm
            .firstDeleteIcon
            .hoverOverAndClick();
        return pagelet;
    }

    static async verifyDeletePageleteConfirmationMessageDisplayedAndClickOk() {
        const alertText = await AlertHelper.getAlertText();
        await ExpectationHelper.verifyStringValueContain(alertText,
            AgentMicrositeConstant.messages.areYouRureToDeletePagelet);
        await AlertHelper.acceptAlert();
    }

    static async verifyDeletePageleteConfirmationMessageDisplayedAndClickCancel() {
        const alertText = await AlertHelper.getAlertText();
        await ExpectationHelper.verifyStringValueContain(alertText,
            AgentMicrositeConstant.messages.areYouRureToDeletePagelet);
        await AlertHelper.dismissAlertIfExists();
    }

    static async editTheFirstPageleteToSelectShowOnHomePage() {
        const pagelet = await AgentMicrositePage.recommendationManagerForm.firstPagelet.getText();
        await AgentMicrositePage.recommendationManagerForm.firstPagelet.hoverOverAndClick();
        await DropDownHelper.selectOptionByText(
            AgentMicrositePage.recommendationManagerForm.showOnDropdown,
            AgentMicrositeConstant.recommendationManagerForm.homePage);
        await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
        await AgentMicrositeHelper.clickOnPagelestTab();
        return pagelet;
    }
}
