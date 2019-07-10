import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../../page-objects/pages/admin-home-page/admin-home.helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { CommonPageHelper } from '../../../page-objects/pages/common/common-page.helper';
import { KnowledgeModelHelper } from '../../../page-objects/pages/manage-knowledge/knowledge-model/knowledge-model.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.smokeSuite, () => {
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

    // Jira References - KNOV-1051
    it('Verify that Feedback Metadata Manager is displayed after selecting knowledge model. - [22393723]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Feb 2019 19:02:00 GMT

        StepLogger.caseId = 22393723;
        StepLogger.stepId(1);
        StepLogger.step('Hit the URl of the application and  login to the application.');
        await AdminLoginPageHelper.loginAsAdmin();
        StepLogger.verification('User is able to log in to the application.');
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(2);
        StepLogger.step('Click on the manage knowledge present in the menu bar.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        await AdminHomePageHelper.clickManageKnowledge();
        StepLogger.verification('Knowledge Model is displayed.');
        await AdminHomePageHelper.verifyModelKnowledgeOptionDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Select Knowledge Model .');
        await AdminHomePageHelper.clickOnKnowledgeModelSubmenu();
        StepLogger.verification('Feedback Metadata Manager. is displayed.');
        await AdminHomePageHelper.verifyFeedbackMetadataManagerOptionDisplayed();

        StepLogger.postCondition('Log out');
        await PageHelper.refreshPage();
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-1056
    it('Verify of different languages are configured then they are present in drop down list. - [22393731]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Feb 2019 19:02:01 GMT

        StepLogger.caseId = 22393731;
        StepLogger.stepId(1);
        StepLogger.step('Hit the URl of the application and login to the application.');
        await AdminLoginPageHelper.loginAsAdmin();
        StepLogger.verification('User is able to log in to the application.');
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(2);
        StepLogger.step('Click on the manage knowledge present in the menu bar.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        await AdminHomePageHelper.clickManageKnowledge();
        StepLogger.verification('Knowledge Model is displayed.');
        await AdminHomePageHelper.verifyModelKnowledgeOptionDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Select Knowledge Model .');
        await AdminHomePageHelper.clickOnKnowledgeModelSubmenu();
        StepLogger.verification('Feedback Metadata Manager. is displayed.');
        await AdminHomePageHelper.verifyFeedbackMetadataManagerOptionDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select Feedback Metadata Manager.');
        await AdminHomePageHelper.clickOnfeedbackMetadataManager();
        StepLogger.verification('Feedback Metadata Manager page is displayed.');
        await KnowledgeModelHelper.verifyFeedbackMetadataManagerDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Click on the drop down (by default english is present) present at the right hand side of the page.');
        await KnowledgeModelHelper.clickOnLanguageDropdown();
        StepLogger.verification('all configured languages are displayed in the drop down list .');
        await KnowledgeModelHelper.verifyLanguagesListDisplayed();

        StepLogger.postCondition('Log out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-1052
    it('Verify the Feedback Metadata Manager screen. - [22393724]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Feb 2019 19:02:01 GMT

        StepLogger.caseId = 22393724;
        StepLogger.stepId(1);
        StepLogger.step('Hit the URl of the application and login to the application.');
        await AdminLoginPageHelper.loginAsAdmin();
        StepLogger.verification('User is able to log in to the application.');
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(2);
        StepLogger.step('Click on the manage knowledge present in the menu bar.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        await AdminHomePageHelper.clickManageKnowledge();
        StepLogger.verification('Knowledge Model is displayed.');
        await AdminHomePageHelper.verifyModelKnowledgeOptionDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Select Knowledge Model .');
        await AdminHomePageHelper.clickOnKnowledgeModelSubmenu();
        StepLogger.verification('Feedback Metadata Manager. is displayed.');
        await AdminHomePageHelper.verifyFeedbackMetadataManagerOptionDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select Feedback Metadata Manager.');
        await AdminHomePageHelper.clickOnfeedbackMetadataManager();
        StepLogger.verification('Feedback Metadata Manager page is displayed.');
        await KnowledgeModelHelper.verifyFeedbackMetadataManagerDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify the Feedback Metadata Manager screen.');
        StepLogger.verification(`Categories and Statuses are 2 entities present on screen.
        Create and Delete are 2 buttons present.`);
        await KnowledgeModelHelper.verifyFeedbackMetadataManagerScreen();

        StepLogger.postCondition('Log out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-1055
    it('Verify the status is deleted after clicking on delete button. - [22393729]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Feb 2019 19:02:01 GMT

        StepLogger.caseId = 22393729;
        StepLogger.preCondition('Login and create a statuses');
        await AdminLoginPageHelper.loginAsAdmin();
        const statuses = await KnowledgeModelHelper.createStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on statuses.');
        await KnowledgeModelHelper.clickOnStatusOption();
        StepLogger.verification('All the statuses are displayed.');
        await KnowledgeModelHelper.verifyStatusesListDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Delete button.');
        await KnowledgeModelHelper.clickOnAStatus(statuses);
        await KnowledgeModelHelper.clickOnDeleteButton();
        StepLogger.verification('A pop up is displayed for confirmation of deletion.');
        await CommonPageHelper.verifyConfirmatioMessageDisplayedAndClickYes();

        // Step 3 is covered in step 2
        StepLogger.stepId(3);
        StepLogger.step('Click yes button.');
        StepLogger.verification('The status gets deleted.');
        await KnowledgeModelHelper.verifyStatusNotDisplayed(statuses);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-1053
    it('Verify a new status is created by clicking on Create button. - [22393725]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Feb 2019 19:02:01 GMT

        StepLogger.caseId = 22393725;
        StepLogger.preCondition('Navigate to Feedback Metadata Manager page');
        await AdminLoginPageHelper.loginAsAdmin();
        await AdminHomePageHelper.navigateToFeedbackMetadataManager();

        StepLogger.stepId(1);
        StepLogger.step('Verify the create button is disabled.');
        StepLogger.verification('create button is disabled.');
        await KnowledgeModelHelper.verifyCreateButtonDisabled();

        StepLogger.stepId(2);
        StepLogger.step('Click on statuses.');
        await KnowledgeModelHelper.clickOnStatusOption();
        StepLogger.verification('It will get highlighted in bold.');
        await KnowledgeModelHelper.verifyStatusesOptionIsHighlightedInBold();

        StepLogger.stepId(3);
        StepLogger.step(`Verify as soon as statuses is selected new fields are displayed on right hand side of
        the page with different languages field.`);
        StepLogger.verification('English field is displayed with a start sign as it is mandatory field.');
        await KnowledgeModelHelper.verifyStatusFormDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Enter some text in this English language field.');
        const text = RandomHelper.getRandomString();
        await KnowledgeModelHelper.typeTextInEnglishField(text);
        StepLogger.verification('User is able to enter text in box.');
        await KnowledgeModelHelper.verifyEnglishFieldValue(text);

        StepLogger.stepId(5);
        StepLogger.step('Click on save button.');
        await KnowledgeModelHelper.clickOnSaveButton();
        StepLogger.verification('Data saved successfully message is displayed to user.');
        await KnowledgeModelHelper.verifyStatusDisplayed(text);

        StepLogger.postCondition('Cleanup and logout');
        await KnowledgeModelHelper.deleteStatus(text);
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-1054
    it('Verify already existing status can be edited after selecting the Edit . - [22393728]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 12:19:57 GMT

        StepLogger.caseId = 22393728;
        StepLogger.preCondition('Login and create a status');
        await AdminLoginPageHelper.loginAsAdmin();
        const status = await KnowledgeModelHelper.createStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on statuses.');
        await KnowledgeModelHelper.clickOnStatusOption();
        StepLogger.verification('All the Sub contents of status are displayed.');
        await KnowledgeModelHelper.verifyStatusesListDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select a status.');
        await KnowledgeModelHelper.clickOnAStatus(status);
        StepLogger.verification('It gets highlighted in bold.');
        await KnowledgeModelHelper.verifyAStatusHighlightedInBold(status);

        StepLogger.stepId(3);
        StepLogger.step('Edit the name of the status.');
        const newText = RandomHelper.getRandomString();
        await KnowledgeModelHelper.typeTextInEnglishField(newText);
        StepLogger.verification('User is able to edit the name of the Status.');
        await KnowledgeModelHelper.verifyEnglishFieldValue(newText);

        StepLogger.stepId(4);
        StepLogger.step('Click on save.');
        await KnowledgeModelHelper.clickOnSaveButton();
        StepLogger.verification('The data is saved and success message is displayed.');
        await KnowledgeModelHelper.verifydataSavedSuccessfullyMessageDisplayed();
    });
});
