import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { ContentAlertManagerConstant } from '../../../page-objects/pages/manage-communities/content-alert-manager/content-alert-manager.constants';
import { ContentAlertManagerHelper } from '../../../page-objects/pages/manage-communities/content-alert-manager/content-alert-manager.helper';
import { ContentAlertManagerPage } from '../../../page-objects/pages/manage-communities/content-alert-manager/content-alert-manager.po';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;
    const word1 = `${ContentAlertManagerConstant.textArea.test}${PageHelper.getUniqueId()}`.toUpperCase();
    const word2 = `${ContentAlertManagerConstant.textArea.test}${PageHelper.getUniqueId()}`.toUpperCase();
    const textArea = ContentAlertManagerConstant.textArea;
    const buttons = ContentAlertManagerPage.buttons;

    beforeAll(async () => {
        loginPageHelper = AdminLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-737
    it('To delete a term for rejection- Exact match - [22325038]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 21:21:28 GMT
        StepLogger.caseId = 22325038;

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level1Exact, buttons.addLevel1Exact, word1, word2);

        // Step 1 has been covered in Step 2
        StepLogger.stepId(1);
        StepLogger.step(`Go to automatic rejection-exact match section.
            Click on the word to be deleted from the list.`);
        StepLogger.verification('The value should be selected successfully.');

        StepLogger.stepId(2);
        StepLogger.step('Keep pressing control button and click on multiple words.');
        await ContentAlertManagerHelper.selectMultipleWords(textArea.level1ExactSelect, word1, word2);
        StepLogger.verification('Multiple words should be selected successfully.');
        await ContentAlertManagerHelper.verifySelectedWords(textArea.level1ExactSelect, word1, word2);

        StepLogger.stepId(3);
        StepLogger.step('Click on Delete button below the list.');
        await buttons.deleteLevel1Exact.clickButton();
        StepLogger.verification('The word should be removed from the list.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level1ExactSelect, word1, word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on Submit at the bottom of the page.');
        await buttons.submit.clickButton();
        StepLogger.verification('The deleted words should not be visible to the user.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level1ExactSelect, word1, word2);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-738
    it('To delete a term for rejection- Partial match - [22325067]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 11:08:21 GMT
        StepLogger.caseId = 22325067;

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level1Partial, buttons.addLevel1Partial, word1, word2);

        // Step 1 has been covered in Step 2
        StepLogger.stepId(1);
        StepLogger.step(`Go to automatic rejection-partial match section.
            Click on the word to be deleted from the list.`);
        StepLogger.verification('The value should be selected successfully.');

        StepLogger.stepId(2);
        StepLogger.step('Keep pressing control button and click on multiple words.');
        await ContentAlertManagerHelper.selectMultipleWords(textArea.level1PartialSelect, word1, word2);
        StepLogger.verification('Multiple words should be selected successfully.');
        await ContentAlertManagerHelper.verifySelectedWords(textArea.level1PartialSelect, word1, word2);

        StepLogger.stepId(3);
        StepLogger.step('Click on Delete button below the list.');
        await buttons.deleteLevel1Partial.clickButton();
        StepLogger.verification('The word(s) should be removed from the list.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level1PartialSelect, word1, word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on Submit at the bottom of the page.');
        await buttons.submit.clickButton();
        StepLogger.verification('The deleted words should not be visible to the user.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level1PartialSelect, word1, word2);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-739
    it('To delete a term for high alert- Exact match - [22325081]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 11:18:46 GMT
        StepLogger.caseId = 22325081;

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level2Exact, buttons.addLevel2Exact, word1, word2);

        // Step 1 has been covered in Step 2
        StepLogger.stepId(1);
        StepLogger.step(`Go to high alert-exact match section.
            Click on the word to be deleted from the list.`);
        StepLogger.verification('The value should be selected successfully.');

        StepLogger.stepId(2);
        StepLogger.step('Keep pressing control button and click on multiple words.');
        await ContentAlertManagerPage.getTextArea(textArea.level2Exact).scrollToElement();
        await ContentAlertManagerHelper.selectMultipleWords(textArea.level2ExactSelect, word1, word2);
        StepLogger.verification('Multiple words should be selected successfully.');
        await ContentAlertManagerHelper.verifySelectedWords(textArea.level2ExactSelect, word1, word2);

        StepLogger.stepId(3);
        StepLogger.step('Click on Delete button below the list.');
        await buttons.deleteLevel2Exact.clickButton();
        StepLogger.verification('The word(s) should be removed from the list.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level2ExactSelect, word1, word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on Submit at the bottom of the page.');
        await buttons.submit.clickButton();
        StepLogger.verification('The deleted words should not be visible to the user.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level2ExactSelect, word1, word2);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-740
    it('To delete a term for high alert- Partial match - [22325082]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 11:19:19 GMT
        StepLogger.caseId = 22325082;

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level2Partial, buttons.addLevel2Partial, word1, word2);

        // Step 1 has been covered in Step 2
        StepLogger.stepId(1);
        StepLogger.step(`Go to high alert-partial match section.
            Click on the word to be deleted from the list.`);
        StepLogger.verification('The value should be selected successfully.');

        StepLogger.stepId(2);
        StepLogger.step('Keep pressing control button and click on multiple words.');
        await ContentAlertManagerPage.getTextArea(textArea.level2Partial).scrollToElement();
        await ContentAlertManagerHelper.selectMultipleWords(textArea.level2PartialSelect, word1, word2);
        StepLogger.verification('Multiple words should be selected successfully.');
        await ContentAlertManagerHelper.verifySelectedWords(textArea.level2PartialSelect, word1, word2);

        StepLogger.stepId(3);
        StepLogger.step('Click on Delete button below the list.');
        await buttons.deleteLevel2Partial.clickButton();
        StepLogger.verification('The word(s) should be removed from the list.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level2PartialSelect, word1, word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on Submit at the bottom of the page.');
        await buttons.submit.clickButton();
        StepLogger.verification('The deleted words should not be visible to the user.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level2PartialSelect, word1, word2);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-741
    it('To delete a term for medium alert- Exact match - [22325086]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 11:19:42 GMT
        StepLogger.caseId = 22325086;

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level3Exact, buttons.addLevel3Exact, word1, word2);

        // Step 1 has been covered in Step 2
        StepLogger.stepId(1);
        StepLogger.step(`Go to medium alert-exact match section.
            Click on the word to be deleted from the list.`);
        StepLogger.verification('The value should be selected successfully.');

        StepLogger.stepId(2);
        StepLogger.step('Keep pressing control button and click on multiple words.');
        await ContentAlertManagerPage.getTextArea(textArea.level3Exact).scrollToElement();
        await ContentAlertManagerHelper.selectMultipleWords(textArea.level3ExactSelect, word1, word2);
        StepLogger.verification('Multiple words should be selected successfully.');
        await ContentAlertManagerHelper.verifySelectedWords(textArea.level3ExactSelect, word1, word2);

        StepLogger.stepId(3);
        StepLogger.step('Click on Delete button below the list.');
        await buttons.deleteLevel3Exact.clickButton();
        StepLogger.verification('The word(s) should be removed from the list.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level2ExactSelect, word1, word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on Submit at the bottom of the page.');
        await buttons.submit.clickButton();
        StepLogger.verification('The deleted words should not be visible to the user.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level2ExactSelect, word1, word2);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-742
    it('To delete a term for medium alert- Partial match - [22325088]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 11:20:07 GMT
        StepLogger.caseId = 22325088;

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level3Partial, buttons.addLevel3Partial, word1, word2);

        // Step 1 has been covered in Step 2
        StepLogger.stepId(1);
        StepLogger.step(`Go to medium alert-partial match section.
            Click on the word to be deleted from the list.`);
        StepLogger.verification('The value should be selected successfully.');

        StepLogger.stepId(2);
        StepLogger.step('Keep pressing control button and click on multiple words.');
        await ContentAlertManagerPage.getTextArea(textArea.level3Partial).scrollToElement();
        await ContentAlertManagerHelper.selectMultipleWords(textArea.level3PartialSelect, word1, word2);
        StepLogger.verification('Multiple words should be selected successfully.');
        await ContentAlertManagerHelper.verifySelectedWords(textArea.level3PartialSelect, word1, word2);

        StepLogger.stepId(3);
        StepLogger.step('Click on Delete button below the list.');
        await buttons.deleteLevel3Partial.clickButton();
        StepLogger.verification('The word(s) should be removed from the list.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level3PartialSelect, word1, word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on Submit at the bottom of the page.');
        await buttons.submit.clickButton();
        StepLogger.verification('The deleted words should not be visible to the user.');
        await ContentAlertManagerHelper.verifyWordsDeleted(textArea.level3PartialSelect, word1, word2);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-743
    it(`To verify the error message when the user is trying to add an already existing word for automatic rejection-
        Exact match/Partial match. - [22325148]`, async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 12:05:27 GMT
        StepLogger.caseId = 22325148;
        const level1Exact = ContentAlertManagerPage.getTextArea(textArea.level1Exact);
        const level1Partial = ContentAlertManagerPage.getTextArea(textArea.level1Partial);

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level1Exact, buttons.addLevel1Exact, word1, word2, textArea.level1Partial, buttons.addLevel1Partial);

        StepLogger.stepId(1);
        StepLogger.step(`Go to automatic rejection-exact match section.
            Provide a word in the field which already exists in the list.`);
        await ContentAlertManagerHelper.enterWordInTextArea(level1Exact, word1);
        StepLogger.verification('The value should be displayed.');
        await level1Exact.verifyTextBoxContains(word1);

        StepLogger.stepId(2);
        StepLogger.step('Click on add.');
        await buttons.addLevel1Exact.clickButton();
        StepLogger.verification('An error message should be displayed.');
        await ContentAlertManagerHelper.verifyDuplicationErrorWindow(word1);

        StepLogger.stepId(3);
        StepLogger.step(`Go to automatic rejection-partial match section.
            Provide a word in the field which already exists in the list.`);
        await ContentAlertManagerHelper.enterWordInTextArea(level1Partial, word2);
        StepLogger.verification('The value should be displayed.');
        await level1Partial.verifyTextBoxContains(word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on add.');
        await buttons.addLevel1Partial.clickButton();
        StepLogger.verification('An error message should be displayed.');
        await ContentAlertManagerHelper.verifyDuplicationErrorWindow(word2);

        StepLogger.postCondition('Delete words and logout');
        await ContentAlertManagerHelper.deleteWordsAndLogout(
            textArea.level1ExactSelect, textArea.level1PartialSelect, word1, word2, buttons.deleteLevel1Exact, buttons.deleteLevel1Partial);
    });

    // Jira References - KNOV-744
    it(`To verify the error message when the user is trying to add an already existing word for high alert-
        Exact match/Partial match. - [22325182]`, async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 12:05:27 GMT
        StepLogger.caseId = 22325182;
        const level2Exact = ContentAlertManagerPage.getTextArea(textArea.level2Exact);
        const level2Partial = ContentAlertManagerPage.getTextArea(textArea.level2Partial);

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level2Exact, buttons.addLevel2Exact, word1, word2, textArea.level2Partial, buttons.addLevel2Partial);

        StepLogger.stepId(1);
        StepLogger.step(`Go to high alert-exact match section.
            Provide a word in the field which already exists in the list.`);
        await ContentAlertManagerHelper.enterWordInTextArea(level2Exact, word1);
        StepLogger.verification('The value should be displayed.');
        await level2Exact.verifyTextBoxContains(word1);

        StepLogger.stepId(2);
        StepLogger.step('Click on add.');
        await buttons.addLevel2Exact.clickButton();
        StepLogger.verification('An error message should be displayed.');
        await ContentAlertManagerHelper.verifyDuplicationErrorWindow(word1);

        StepLogger.stepId(3);
        StepLogger.step(`Go to high alert-partial match section.
            Provide a word in the field which already exists in the list.`);
        await ContentAlertManagerHelper.enterWordInTextArea(level2Partial, word2);
        StepLogger.verification('The value should be displayed.');
        await level2Partial.verifyTextBoxContains(word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on add.');
        await buttons.addLevel2Partial.clickButton();
        StepLogger.verification('An error message should be displayed.');
        await ContentAlertManagerHelper.verifyDuplicationErrorWindow(word2);

        StepLogger.postCondition('Delete words and logout');
        await ContentAlertManagerHelper.deleteWordsAndLogout(
            textArea.level2ExactSelect, textArea.level2PartialSelect, word1, word2, buttons.deleteLevel2Exact, buttons.deleteLevel2Partial);
    });

    // Jira References - KNOV-745
    it(`To verify the error message when the user is trying to add an already existing word for medium alert-
        Exact match/Partial match. - [22325183]`, async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 12:05:26 GMT
        StepLogger.caseId = 22325183;
        const level3Exact = ContentAlertManagerPage.getTextArea(textArea.level3Exact);
        const level3Partial = ContentAlertManagerPage.getTextArea(textArea.level3Partial);

        StepLogger.preCondition('Access the content alert manager section and add words');
        await ContentAlertManagerHelper.navigateToContentAlertManager();
        await ContentAlertManagerHelper.addTwoWords(
            textArea.level3Exact, buttons.addLevel3Exact, word1, word2, textArea.level3Partial, buttons.addLevel3Partial);

        StepLogger.stepId(1);
        StepLogger.step(`Go to medium alert-exact match section.
            Provide a word in the field which already exists in the list.`);
        await ContentAlertManagerHelper.enterWordInTextArea(level3Exact, word1);
        StepLogger.verification('The value should be displayed.');
        await level3Exact.verifyTextBoxContains(word1);

        StepLogger.stepId(2);
        StepLogger.step('Click on add.');
        await buttons.addLevel3Exact.clickButton();
        StepLogger.verification('An error message should be displayed.');
        await ContentAlertManagerHelper.verifyDuplicationErrorWindow(word1);

        StepLogger.stepId(3);
        StepLogger.step(`Go to medium alert-partial match section.
            Provide a word in the field which already exists in the list.`);
        await ContentAlertManagerHelper.enterWordInTextArea(level3Partial, word2);
        StepLogger.verification('The value should be displayed.');
        await level3Partial.verifyTextBoxContains(word2);

        StepLogger.stepId(4);
        StepLogger.step('Click on add.');
        await buttons.addLevel3Partial.clickButton();
        StepLogger.verification('An error message should be displayed.');
        await ContentAlertManagerHelper.verifyDuplicationErrorWindow(word2);

        StepLogger.postCondition('Delete words and logout');
        await ContentAlertManagerHelper.deleteWordsAndLogout(
            textArea.level3ExactSelect, textArea.level3PartialSelect, word1, word2, buttons.deleteLevel3Exact, buttons.deleteLevel3Partial);
    });
});