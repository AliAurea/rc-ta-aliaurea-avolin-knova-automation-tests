import { browser } from 'protractor';

import { StepLogger } from '../../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { CommonPageHelper } from '../../common/common-page.helper';

import { AgentMicrositeSelfServiceConstant } from './agent-microsite.constant';
import { AgentMicrositeSelfServicePage } from './agent-microsite.po';

export class AgentMicrositeSelfServiceHelper {

    static async clickFullScreenIcon() {
        const windowsCountBeforeFullScreen = await PageHelper.getTabsCount();
        await CommonPageHelper.switchToextiFrame();
        StepLogger.subStep('Get document details ');
        const amountTabBars = await AgentMicrositeSelfServicePage.formControls.whatsPopular.tabBars.item.count();
        StepLogger.subStep(`amount of tabs = ${amountTabBars}`);
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.fullScreen.hoverOverAndClick();
        const windowsCountAfterFullScreen = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyValueGreaterOrEqualTo(windowsCountAfterFullScreen, windowsCountBeforeFullScreen);
        return amountTabBars;
    }

    static async scrollAndClickWhatsPopularSection() {
        await CommonPageHelper.switchToWhatsPopularIFrame();
        await AgentMicrositeSelfServicePage.sections.whatsPopular.scrollToElement();
        await AgentMicrositeSelfServicePage.sections.whatsPopular.verifyDisplayedStatus();
    }

    static async clickAndVerifyDetailsFirstDocument() {
        await CommonPageHelper.switchToWhatsPopularIFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.firstDocument.hoverOverAndClick();
        await CommonPageHelper.switchToextiFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.documentDetailsTitle.verifyDisplayedStatus();
    }

    static async navigateToFirstWhatsPopularDocument() {
        await this.scrollAndClickWhatsPopularSection();
        await this.clickAndVerifyDetailsFirstDocument();
    }

    static async compareAndVerifyDocumentDetails(amountTabBars: number) {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(title,
                    AgentMicrositeSelfServiceConstant.titles.viewDocument
                );
            StepLogger.subStep('Compare fields ');
            await CommonPageHelper.switchToextiFrame();
            const amountTabBarsNewWindow = await AgentMicrositeSelfServicePage
                .formControls.whatsPopular.tabBars.item.count();
            await ExpectationHelper.verifyValueEqualTo(amountTabBarsNewWindow, amountTabBars);
            await CommonPageHelper.switchToHeaderFrame();
            await AgentMicrositeSelfServicePage.formControls.whatsPopular.fullScreen.verifyHiddenStatus();
            await browser.executeScript('window.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async clickOnAddToFavorites() {
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.addToFavorites.hoverOverAndClick();
    }

    static async clickOnBookMark() {
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.bookMark.hoverOverAndClick();
    }

    static async clickOnEmailDocument() {
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.emailDoc.hoverOverAndClick();
    }

    static async clickOnSubscribeByRSS() {
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.rssSubscribe.hoverOverAndClick();
    }

    static async clickOnSubscribeByEmail() {
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.emailSubscribe.hoverOverAndClick();
    }

    static async clickOnPrint() {
        await CommonPageHelper.switchToextiFrame();
        StepLogger.subStep('Get document details ');
        const docTitle = await AgentMicrositeSelfServicePage.formControls.whatsPopular.documentDetailsTitle.getText();
        StepLogger.subStep(`document Title = ${docTitle}`);
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.printDoc.hoverOverAndClick();
        return docTitle;
    }

    static async clickOnUpwardArrow() {
        await CommonPageHelper.switchToHeaderFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.upToResearchResults.hoverOverAndClick();
    }

    static async clickOnBackToPreviousPage() {
        await browser.navigate().back();
    }

    static async verifyDialogPageTitle(expectedTitle: string) {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(title, expectedTitle);
        }, 1, false);
    }

    static async verifyAddToFavoritesPage() {
        await this.verifyDialogPageTitle(AgentMicrositeSelfServiceConstant.titles.addToFavorites);
        await PageHelper.switchToFirstTab();
    }

    static async verifyEmailTheDocumentWindowPage() {
        await CommonPageHelper.switchToDefaultContent();
        await this.verifyDialogPageTitle(AgentMicrositeSelfServiceConstant.titles.emailDocument);
    }

    static async enterAndVerifyToEmailField(email: string) {
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositeSelfServicePage.formControls.whatsPopular.toEmailTextbox.sendKeys(email);
            await AgentMicrositeSelfServicePage.formControls.whatsPopular.toEmailTextbox.verifyTextEntered(email);
        }, 1, false);
    }

    static async clickOnSubmit() {
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositeSelfServicePage.formControls.submitBtnDialogWindow.clickButton();
        }, 1, false);
    }

    static async verifyEmailAknowledgement() {
        await this.verifyDialogPageTitle(AgentMicrositeSelfServiceConstant.titles.sentAcknoledgement);
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositeSelfServicePage.formControls.okBtnDialogWindow.clickButton();
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyRSSSubscriptionWindow() {
        await this.verifyDialogPageTitle(AgentMicrositeSelfServiceConstant.titles.rssSubscriptionDetails);
    }

    static async clickOnClose() {
        await PageHelper.executeInNewTab(async () => {
            await AgentMicrositeSelfServicePage.formControls.closeBtnDialogWindow.clickButton();
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyDocumentDetaisInNewPage(docTitle: string) {
        await PageHelper.executeInNewTab(async () => {
            const title = await PageHelper.getTitle();
            await ExpectationHelper.verifyStringValueContain(title, docTitle);
        }, 1, false);
    }

    static async verifyEmailSubscriptionWindow() {
        await this.verifyDialogPageTitle(AgentMicrositeSelfServiceConstant.titles.emailSubscriptionDetails);
    }

    static async selectAndVerifyAnyValueForSendEmails(dropOption = AgentMicrositeSelfServiceConstant.testData.defSendEmail) {
        await PageHelper.executeInNewTab(async () => {
            await DropDownHelper.selectOptionByText(
                AgentMicrositeSelfServicePage.formControls.whatsPopular.sendEmailDropDown,
                dropOption
            );
            const selected = await AgentMicrositeSelfServicePage
                .formControls.whatsPopular.sendEmailDropDown.getSelectedOptionText();
            await ExpectationHelper.verifyStringEqualTo(selected,
                dropOption
            );
        }, 1, false);
    }

    static async closeNewPage() {
        await PageHelper.executeInNewTab(async () => {
            await browser.executeScript('window.close();');
        }, 1, false);
        await PageHelper.switchToFirstTab();
    }

    static async verifyDialogWindowClosedDocumentDisplayed() {
        await PageHelper.switchToFirstTab();
        await CommonPageHelper.switchToextiFrame();
        await AgentMicrositeSelfServicePage.formControls.whatsPopular.documentDetailsTitle.verifyDisplayedStatus();
    }

    static async verifyDocDetailsContent(docTitle: string) {
        await CommonPageHelper.switchToextiFrame();
        const docActualTitle = await AgentMicrositeSelfServicePage
            .formControls.whatsPopular.documentDetailsTitle.getText();
        StepLogger.subStep(`document Title = ${docActualTitle}`);
        await ExpectationHelper.verifyStringValueContain(docActualTitle, docTitle);
    }
}
