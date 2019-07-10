import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { KnowledgeCentralContentManagerPageHelper } from '../../../page-objects/pages/knowledge-central-content-manager/knowledge-central-content-manager.helper';
import { KnowledgeCentralHomePageHelper } from '../../../page-objects/pages/knowledge-central-home-page/knowledge-central-home.helper';
import { KnowledgeCentralLoginPageHelper } from '../../../page-objects/pages/knowledge-central-login-page/knowledge-central-login.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: KnowledgeCentralLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = KnowledgeCentralLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await KnowledgeCentralLoginPageHelper.logout();
        await loginPageHelper.goTo();
        await KnowledgeCentralLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-1889
    it('Verify Content Manager Page is displayed. - [22907547]', async () => {
        // Auto generated by aurea-automation - util on Wed, 03 Apr 2019 14:45:15 GMT

        StepLogger.caseId = 22907547;

        // Step 1 is covered in beforeEach
        StepLogger.stepId(1);
        StepLogger.step('Log in to the application.');
        StepLogger.verification('');

        StepLogger.stepId(2);
        StepLogger.step('Click on menu bar.');
        await KnowledgeCentralHomePageHelper.clickOnMenuIcon();
        StepLogger.verification('Content manager is displayed as an option.');
        await KnowledgeCentralHomePageHelper.verifyContentManagerMenuDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click Content Manager');
        await KnowledgeCentralHomePageHelper.clickOnContentManagerMenu();
        StepLogger.verification('Content manager page is displayed.');
        await KnowledgeCentralContentManagerPageHelper.verifyContentManagerPageDisplayed();
    });
});
