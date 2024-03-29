import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
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
    it('To verify the queued tab. - [22411109]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:41 GMT

        StepLogger.caseId = 22411109;
        StepLogger.preCondition('Execute test case C22411108 to start the re-contribution Knowledge for Contribute Authored Documents.');
        await KnowledgeReContributionHelper.navigateToContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.stepId(1);
        StepLogger.step('Click on the queued tab.');
        await KnowledgeReContributionHelper.clickQueuedTab();
        StepLogger.verification(`Following details should be displayed.
                -Updated
                -Status
                -Total to be queued
                -Queued`);
        await KnowledgeReContributionHelper.verifyQueuedTab();

        StepLogger.stepId(2);
        StepLogger.step('Click on OK.');
        await KnowledgeReContributionHelper.clickOk();
        StepLogger.verification('Knowledge re-contributor page should be displayed.');
        await KnowledgeReContributionHelper.verifyPageContent();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.switchToFirstTabAndLogOut();
    });

    // Jira References - KNOV-453
    it('To verify Stop button in the queued tab. - [22411110]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:41 GMT

        StepLogger.caseId = 22411110;
        StepLogger.preCondition('Execute test case C22411108 to start the re-contribution Knowledge for Contribute Authored Documents.');
        await KnowledgeReContributionHelper.navigateToContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.stepId(1);
        StepLogger.step('Click on the queued tab.');
        await KnowledgeReContributionHelper.clickQueuedTab();
        StepLogger.verification(`Following details should be displayed.
                -Updated
                -Status
                -Total to be queued
                -Queued`);
        await KnowledgeReContributionHelper.verifyQueuedTab();

        StepLogger.stepId(2);
        StepLogger.step('Click on Stop.');
        await KnowledgeReContributionHelper.clickStop();
        StepLogger.verification('Confirmation pop should be displayed.');
        await KnowledgeReContributionHelper.verifyStopDocumentPopUpDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on Yes.');
        await KnowledgeReContributionHelper.clickYesButtonOnPopUp();
        StepLogger.verification('queued tab should be displayed and the queuing process should be stopped.');
        await KnowledgeReContributionHelper.verifyContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.switchToFirstTabAndLogOut();
    });

    // Jira References - KNOV-453
    it('To verify the No button in the confirmation window while stopping the Contribution Progress Monitor. - [22411115]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:41 GMT

        StepLogger.caseId = 22411115;
        StepLogger.preCondition('Execute test case C22411108 to start the re-contribution Knowledge for Contribute Authored Documents.');
        await KnowledgeReContributionHelper.navigateToContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.stepId(1);
        StepLogger.step('Click on Stop button in the Contribution Progress Monitor screen.');
        await KnowledgeReContributionHelper.clickStop();
        StepLogger.verification('A confirmation pop should be displayed.');
        await KnowledgeReContributionHelper.verifyStopDocumentPopUpDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on No.');
        await KnowledgeReContributionHelper.clickNoButtonOnPopUp();
        StepLogger.verification('Contribution should not be stopped and contribution monitor screen should be displayed.');
        await KnowledgeReContributionHelper.verifyContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.switchToFirstTabAndLogOut();
    });

    // Jira References - KNOV-453
    it('To verify No in the confirmation pop up when stopping the queuing process. - [22411111]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:41 GMT

        StepLogger.caseId = 22411111;
        StepLogger.preCondition('Execute test case C22411108 to start the re-contribution Knowledge for Contribute Authored Documents.');
        await KnowledgeReContributionHelper.navigateToContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.stepId(1);
        StepLogger.step('Click on the queued tab.');
        await KnowledgeReContributionHelper.clickQueuedTab();
        StepLogger.verification(`Following details should be displayed.
            -Updated
            -Status
            -Total to be queued
            -Queued`);
        await KnowledgeReContributionHelper.verifyQueuedTab();

        StepLogger.stepId(2);
        StepLogger.step('Click on Stop.');
        await KnowledgeReContributionHelper.clickStop();
        StepLogger.verification('Confirmation pop should be displayed.');
        await KnowledgeReContributionHelper.verifyStopDocumentPopUpDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on No.');
        await KnowledgeReContributionHelper.clickNoButtonOnPopUp();
        StepLogger.verification('queued tab should be displayed and the queuing process should not be stopped.');
        await KnowledgeReContributionHelper.verifyContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.switchToFirstTabAndLogOut();
    });

    // Jira References - KNOV-453
    it('To stop the Contribution Progress Monitor. - [22411114]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:03:41 GMT

        StepLogger.caseId = 22411114;
        StepLogger.preCondition('Execute test case C22411108 to start the re-contribution Knowledge for Contribute Authored Documents.');
        await KnowledgeReContributionHelper.navigateToContributionProgressMonitorDisplayedAndClickOk();

        StepLogger.stepId(1);
        StepLogger.step('Click on Stop button in the Contribution Progress Monitor screen.');
        await KnowledgeReContributionHelper.clickStop();
        StepLogger.verification('A confirmation pop should be displayed.');
        await KnowledgeReContributionHelper.verifyStopDocumentPopUpDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Yes.');
        await KnowledgeReContributionHelper.clickYesButtonOnPopUp();
        StepLogger.verification('Contribution Progress Monitor screen should be displayed.');
        await KnowledgeReContributionHelper.verifyContributionProgressMonitorDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on OK.');
        await KnowledgeReContributionHelper.clickOk();
        StepLogger.verification('Knowledge Re-contributor screen should be displayed.');
        await KnowledgeReContributionHelper.verifyPageContent();

        StepLogger.postCondition('Logout');
        await KnowledgeReContributionHelper.switchToFirstTabAndLogOut();
    });
});
