import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { KnowledgeReContributionHelper } from '../../../page-objects/pages/manage-knowledge/knowledge-contribution/knowledge-re-contribution.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.healthCheckSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = AdminLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.logout();
    });

    // Jira References - KNOV-453
    it('To find the users using User Name. - [22412263]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:21 GMT

        StepLogger.caseId = 22412263;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Provide the id range in the From and To columns.("From" number should always be lower than the "To" number)');
        await KnowledgeReContributionHelper.enterFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);
        StepLogger.verification('Values should be displayed in the fields.');
        await KnowledgeReContributionHelper.verifyFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);

        StepLogger.stepId(3);
        StepLogger.step(`-Select the Publication status from the drop down.
            -Select the templates from the list available.
            -Select the style sheets from the list available.`);
        await KnowledgeReContributionHelper.selectPublicationStatusTemplateAndStyle();
        StepLogger.verification('The options should be selected successfully.');
        await KnowledgeReContributionHelper.verifyPublicationStatusTemplateAndStyle();

        StepLogger.stepId(4);
        StepLogger.step('To select the users click on the Select button in front of the user tile.');
        await KnowledgeReContributionHelper.clickSelectUser();
        StepLogger.verification('Select users dialog box should be opened.');
        await KnowledgeReContributionHelper.verifySelectUserDialog();

        StepLogger.stepId(5);
        StepLogger.step('Provide a valid User name.Click on the search icon below show all button.');
        await KnowledgeReContributionHelper.enterUserNameAndSearch(CredentialsHelper.admin.username);
        StepLogger.verification('The User matching the criteria should be displayed.');
        await KnowledgeReContributionHelper.verifyUserList();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.pageRefreshAndLogOut();
    });

    // Jira References - KNOV-453
    it('To verify the error message when all the fields are left empty in the Select Users section. - [22412333]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:21 GMT

        StepLogger.caseId = 22412333;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Provide the id range in the From and To columns.("From" number should always be lower than the "To" number)');
        await KnowledgeReContributionHelper.enterFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);
        StepLogger.verification('Values should be displayed in the fields.');
        await KnowledgeReContributionHelper.verifyFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);

        StepLogger.stepId(3);
        StepLogger.step(`-Select the Publication status from the drop down.
            -Select the templates from the list available.
            -Select the style sheets from the list available.`);
        await KnowledgeReContributionHelper.selectPublicationStatusTemplateAndStyle();
        StepLogger.verification('The options should be selected successfully.');
        await KnowledgeReContributionHelper.verifyPublicationStatusTemplateAndStyle();

        StepLogger.stepId(4);
        StepLogger.step('To select the users click on the Select button in front of the user tile.');
        await KnowledgeReContributionHelper.clickSelectUser();
        StepLogger.verification('Select users dialog box should be opened.');
        await KnowledgeReContributionHelper.verifySelectUserDialog();

        StepLogger.stepId(5);
        StepLogger.step('Leave all the fields empty and click on the search icon.');
        await KnowledgeReContributionHelper.searchUser();
        StepLogger.verification('An error message should be displayed.');
        await KnowledgeReContributionHelper.verifyAlertPopUpDisplayed();

        StepLogger.stepId(6);
        StepLogger.step('Click on OK.');
        await KnowledgeReContributionHelper.clickAlertOk();
        StepLogger.verification('The error message should be closed.');
        await KnowledgeReContributionHelper.verifyAlertPopUpNotDisplayed();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.pageRefreshAndLogOut();
    });

    // Jira References - KNOV-453
    it('To verify Show All button - [22412280]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:21 GMT

        StepLogger.caseId = 22412280;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Provide the id range in the From and To columns.("From" number should always be lower than the "To" number)');
        await KnowledgeReContributionHelper.enterFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);
        StepLogger.verification('Values should be displayed in the fields.');
        await KnowledgeReContributionHelper.verifyFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);

        StepLogger.stepId(3);
        StepLogger.step(`-Select the Publication status from the drop down.
            -Select the templates from the list available.
            -Select the style sheets from the list available.`);
        await KnowledgeReContributionHelper.selectPublicationStatusTemplateAndStyle();
        StepLogger.verification('The options should be selected successfully.');
        await KnowledgeReContributionHelper.verifyPublicationStatusTemplateAndStyle();

        StepLogger.stepId(4);
        StepLogger.step('To select the users click on the Select button in front of the user tile.');
        await KnowledgeReContributionHelper.clickSelectUser();
        StepLogger.verification('Select users dialog box should be opened.');
        await KnowledgeReContributionHelper.verifySelectUserDialog();

        StepLogger.stepId(5);
        StepLogger.step('Click on Show All button.');
        await KnowledgeReContributionHelper.clickShowAllUser();
        StepLogger.verification('All the Users should be displayed in the Users section.');
        await KnowledgeReContributionHelper.verifyUserList();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.pageRefreshAndLogOut();
    });

    // Jira References - KNOV-453
    it('To view the details of a user. - [22412282]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:20 GMT

        StepLogger.caseId = 22412282;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Provide the id range in the From and To columns.("From" number should always be lower than the "To" number)');
        await KnowledgeReContributionHelper.enterFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);
        StepLogger.verification('Values should be displayed in the fields.');
        await KnowledgeReContributionHelper.verifyFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);

        StepLogger.stepId(3);
        StepLogger.step(`-Select the Publication status from the drop down.
            -Select the templates from the list available.
            -Select the style sheets from the list available.`);
        await KnowledgeReContributionHelper.selectPublicationStatusTemplateAndStyle();
        StepLogger.verification('The options should be selected successfully.');
        await KnowledgeReContributionHelper.verifyPublicationStatusTemplateAndStyle();

        StepLogger.stepId(4);
        StepLogger.step('To select the users click on the Select button in front of the user tile.');
        await KnowledgeReContributionHelper.clickSelectUser();
        StepLogger.verification('Select users dialog box should be opened.');
        await KnowledgeReContributionHelper.verifySelectUserDialog();

        StepLogger.stepId(5);
        StepLogger.step('Click on Show All button.');
        await KnowledgeReContributionHelper.clickShowAllUser();
        StepLogger.verification('All the Users should be displayed in the Users section.');
        await KnowledgeReContributionHelper.verifyUserList();

        StepLogger.stepId(6);
        StepLogger.step('Clink on the link of one of the users.');
        await KnowledgeReContributionHelper.clickUser();
        StepLogger.verification('Profile editor page for that user should be displayed.');
        await KnowledgeReContributionHelper.verifyProfileEditorDisplayedAndCancel();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.switchToFirstTabAndLogOut();
    });

    // Jira References - KNOV-453
    it('To verify the Cancel button on the Save bat file pop up window. - [22411119]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:01 GMT

        StepLogger.caseId = 22411119;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Click on Generate bat file button.');
        await KnowledgeReContributionHelper.clickGenerateBat();
        StepLogger.verification('Save bat file pop up should be displayed to enter the file name.');
        await KnowledgeReContributionHelper.verifySaveBatPopUpDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on Cancel.');
        await KnowledgeReContributionHelper.switchToDialogFrameAndclickCancel();
        StepLogger.verification('Save bat file pop up should be closed and bat file should not be generated.');
        await KnowledgeReContributionHelper.verifyPopClosed();

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-453
    it('To generate a bat file. - [22411118]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:41 GMT

        StepLogger.caseId = 22411118;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Click on Generate bat file button.');
        await KnowledgeReContributionHelper.clickGenerateBat();
        StepLogger.verification('save bat file pop up should be displayed to enter the file name.');
        await KnowledgeReContributionHelper.verifySaveBatPopUpDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Provide a name and click on Submit.');
        await KnowledgeReContributionHelper.enterFileNameAndclickSubmit();
        StepLogger.verification('Knowledge re-contributor page should be displayed.');
        await KnowledgeReContributionHelper.verifyPageContent();

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-453
    it('To verify the cancel button in the Select Users window. - [22412310]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:21 GMT

        StepLogger.caseId = 22412310;
        StepLogger.preCondition('Execute test case C22411107 to access Knowledge Re-Contributor screen.');
        await KnowledgeReContributionHelper.navigateToKnowledgeReContribution();

        StepLogger.stepId(1);
        StepLogger.step('Check the "Contribute authored documents" check box.');
        await KnowledgeReContributionHelper.clickContributeAuthoredDocuments();
        StepLogger.verification('The check box should be checked. Generate Bat File and start buttons should get enabled at the bottom of the page.');
        await KnowledgeReContributionHelper.verifyContributeAuthoredDocuments();

        StepLogger.stepId(2);
        StepLogger.step('Provide the id range in the From and To columns.("From" number should always be lower than the "To" number)');
        await KnowledgeReContributionHelper.enterFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);
        StepLogger.verification('Values should be displayed in the fields.');
        await KnowledgeReContributionHelper.verifyFromAndTwoRange(Constants.stringNumber.one, Constants.stringNumber.two);

        StepLogger.stepId(3);
        StepLogger.step(`-Select the Publication status from the drop down.
            -Select the templates from the list available.
            -Select the style sheets from the list available.`);
        await KnowledgeReContributionHelper.selectPublicationStatusTemplateAndStyle();
        StepLogger.verification('The options should be selected successfully.');
        await KnowledgeReContributionHelper.verifyPublicationStatusTemplateAndStyle();

        StepLogger.stepId(4);
        StepLogger.step('To select the users click on the Select button in front of the user tile.');
        await KnowledgeReContributionHelper.clickSelectUser();
        StepLogger.verification('Select users dialog box should be opened.');
        await KnowledgeReContributionHelper.verifySelectUserDialog();

        StepLogger.stepId(5);
        StepLogger.step('Click on Show All button.');
        await KnowledgeReContributionHelper.clickShowAllUser();
        StepLogger.verification('All the Users should be displayed in the Users section.');
        await KnowledgeReContributionHelper.verifyUserList();

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox of one or multiple users.');
        await KnowledgeReContributionHelper.selectUser();
        StepLogger.verification('The selected users should be displayed in the Selected users section.');
        await KnowledgeReContributionHelper.verifySelectedUserList();

        StepLogger.stepId(7);
        StepLogger.step('Click on Cancel button.');
        await KnowledgeReContributionHelper.switchToDialogFrameAndclickCancel();
        StepLogger.verification('None of the users should be selected and Knowledge re-contributor page should be displayed.');
        await KnowledgeReContributionHelper.verifyNoUserSelected();

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });
});
