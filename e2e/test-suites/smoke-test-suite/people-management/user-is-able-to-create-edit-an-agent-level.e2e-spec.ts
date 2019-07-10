import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../../page-objects/pages/admin-home-page/admin-home.helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { AdministerSystemHelper } from '../../../page-objects/pages/administer-system/administer-system.helper';
import { ManagePeopleHelper } from '../../../page-objects/pages/manage-people/manage-people.helper';
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

    // Jira References - KNOV-897
    it('Verify Open Agent Level Manager page - [22325033]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT

        StepLogger.caseId = 22325033;
        StepLogger.preCondition('Sign in as an admin user');
        await AdminLoginPageHelper.loginAsAdmin();

        StepLogger.stepId(1);
        StepLogger.step('Click on the Menu icon.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        StepLogger.verification('The menu list should be opened.');
        await AdminHomePageHelper.verifySideMenuDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Manage People.');
        await AdminHomePageHelper.clickOnManagePeopleButton();
        StepLogger.verification('The sub menu list should be opened.');
        await AdminHomePageHelper.verifyManagePeopleSubMenu();

        StepLogger.stepId(3);
        StepLogger.step('Click on Agent Level Manager.');
        await AdminHomePageHelper.clickOnAgentLevelManager();
        StepLogger.verification('Agent Level Manager Screen should be displayed.');
        await ManagePeopleHelper.verifyAgentLevelManagerPageDisplayed();
    });

    // Jira References - KNOV-896
    it('Verify Agent Level Manager menu option is available - [22325020]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT

        StepLogger.caseId = 22325020;
        StepLogger.preCondition('Sign in as an admin user');
        await AdminLoginPageHelper.loginAsAdmin();

        StepLogger.stepId(1);
        StepLogger.step('Click on the Menu icon.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        StepLogger.verification('The menu list should be opened.');
        await AdminHomePageHelper.verifySideMenuDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Manage People.');
        await AdminHomePageHelper.clickOnManagePeopleButton();
        StepLogger.verification('The sub menu list should be opened.');
        await AdminHomePageHelper.verifyManagePeopleSubMenu();

        StepLogger.stepId(3);
        StepLogger.step('Verify that the option Agent Level Manger should be available.');
        StepLogger.verification('The option Agent Level Manager should be available.');
        await AdminHomePageHelper.verifyAgentLevelManagerSubmenuOption();

        StepLogger.postCondition('Refresh the page');
        await PageHelper.refreshPage();
    });

    // Jira References - KNOV-899
    it('Verify user is able to Create a New Agent Level - [22325079]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT
        const agentLevelName = `Tier ${await RandomHelper.getRandomString(Constants.number.five)}`;

        StepLogger.caseId = 22325079;
        StepLogger.preCondition('Sign in as an admin user and navigate to Agent Level Manager page');
        await AdminLoginPageHelper.loginAsAdmin();
        await AdminHomePageHelper.navigateToAgentLevelManagerPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on the New Agent Level Button');
        await ManagePeopleHelper.clickOnNewAgentLevelButton();
        StepLogger.verification('The New Agent Level dialog should be opened.');
        await ManagePeopleHelper.verifyNewAgentDialogDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Set a name for the Agent Level. Click Save.');
        await ManagePeopleHelper.typeAgentLevelName(agentLevelName);
        await ManagePeopleHelper.clickOnSaveButtonFromAgentLevelManager();
        StepLogger.verification(`The New Agent Level dialog should get disappeared.
        The screen should get refreshed.`);
        await ManagePeopleHelper.verifyAgentLevelManagerPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify that the newly created Agent Level is available in the list of Agent Levels.');
        StepLogger.verification('The Newly created Agent Level should be available.');
        await ManagePeopleHelper.verifyAgentLevelDisplayedInTheList(agentLevelName);
    });

    // Jira References - KNOV-907
    it('Verify user is able Cancel Editing an Agent Level - [22326747]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT
        const newName = RandomHelper.getRandomString(Constants.number.seven);

        StepLogger.caseId = 22326747;
        StepLogger.preCondition('Sign in as an admin user and create an Agent Level');
        await AdminLoginPageHelper.loginAsAdmin();
        const agentLevelName = await ManagePeopleHelper.createAgentLevel();

        StepLogger.stepId(1);
        StepLogger.step('Click on the Agent Level Name.');
        await ManagePeopleHelper.clickOnAnAgentLevelFromTheList(agentLevelName);
        StepLogger.verification('The Agent Level manager dialog box should be displayed.');
        await ManagePeopleHelper.verifyAgentLevelDetailsDialogDisplayed(agentLevelName);

        StepLogger.stepId(2);
        StepLogger.step('Set a name for the Agent Level. Click Cancel.');
        await ManagePeopleHelper.typeAgentLevelName(newName);
        await ManagePeopleHelper.clickOnCancelButtonFromAgentLevelManager();
        StepLogger.verification('The New Agent Level dialog should get disappeared.');
        await ManagePeopleHelper.verifyAgentLevelManagerPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify that the edited changes are not saved.');
        StepLogger.verification('The original Agent Level should be available.');
        await ManagePeopleHelper.verifyAgentLevelDisplayedInTheList(agentLevelName);

        StepLogger.postCondition('Clean up');
        await ManagePeopleHelper.deleteAgentLevel(agentLevelName);
    });

    // Jira References - KNOV-900
    it('Verify user is able to Edit an Agent Level - [22325094]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT
        const newName = RandomHelper.getRandomString(Constants.number.seven);

        StepLogger.caseId = 22325094;
        StepLogger.preCondition('Sign in as an admin user and create an Agent Level');
        await AdminLoginPageHelper.loginAsAdmin();
        const agentLevelName = await ManagePeopleHelper.createAgentLevel();

        StepLogger.stepId(1);
        StepLogger.step('Click on the Agent Level Name.');
        await ManagePeopleHelper.clickOnAnAgentLevelFromTheList(agentLevelName);
        StepLogger.verification('The Agent Level manager dialog box should be displayed.');
        await ManagePeopleHelper.verifyAgentLevelDetailsDialogDisplayed(agentLevelName);

        StepLogger.stepId(2);
        StepLogger.step('Set a name for the Agent Level. Click Save.');
        await ManagePeopleHelper.typeAgentLevelName(newName);
        await ManagePeopleHelper.clickOnSaveButtonFromAgentLevelManager();
        StepLogger.verification(`The New Agent Level dialog should get disappeared.
        The screen should get refreshed.`);
        await ManagePeopleHelper.verifyAgentLevelManagerPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify that the edited Agent Level is available in the list of Agent Levels.');
        StepLogger.verification('The edited Agent Level should be available.');
        await ManagePeopleHelper.verifyAgentLevelDisplayedInTheList(newName);

        StepLogger.postCondition('Clean up');
        await ManagePeopleHelper.deleteAgentLevel(newName);
    });

    // Jira References - KNOV-906
    it('Verify Cancel in Agent Level Manager - [22326743]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT
        const agentName = RandomHelper.getRandomString(Constants.number.eight);

        StepLogger.caseId = 22326743;
        StepLogger.preCondition('Sign in as an admin user and navigate to Agent Level Manager page');
        await AdminLoginPageHelper.loginAsAdmin();
        await AdminHomePageHelper.navigateToAgentLevelManagerPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on the New Agent Level Button');
        await ManagePeopleHelper.clickOnNewAgentLevelButton();
        StepLogger.verification('The New Agent Level dialog should be opened.');
        await ManagePeopleHelper.verifyNewAgentDialogDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Set a name for the Agent Level. Click Cancel.');
        await ManagePeopleHelper.typeAgentLevelName(agentName);
        await ManagePeopleHelper.clickOnCancelButtonFromAgentLevelManager();
        StepLogger.verification('The New Agent Level dialog should get disappeared.');
        await ManagePeopleHelper.verifyAgentLevelManagerPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify that no new Agent Level is created.');
        StepLogger.verification('No New Agent Level should be created.');
        await ManagePeopleHelper.verifyRecordNotDisplayedInTheList(agentName);
    });

    // Jira References - KNOV-903
    it('Configure Multiple languages - [22325514]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 19:18:18 GMT

        StepLogger.caseId = 22325514;
        StepLogger.preCondition('Sign in as an admin user');
        await AdminLoginPageHelper.loginAsAdmin();

        StepLogger.stepId(1);
        StepLogger.step('Click on Menu-->Administrator System-->Language Manager.');
        await AdminHomePageHelper.navigateToLanguageManagerPage();
        StepLogger.verification('Language Manager page should be displayed.');
        await AdministerSystemHelper.verifyLaguagePageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click in Add Language.');
        await AdministerSystemHelper.clickOnAddLanguage();
        StepLogger.verification('Language Properties screen should be displayed.');
        await AdministerSystemHelper.verifyLanguagePropertiesPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Select Locale. Click Submit.');
        const language = await AdministerSystemHelper.selectRandomLocale();
        await AdministerSystemHelper.clickSubmitButton();
        StepLogger.verification('The added language should be displayed in the list.');
        await AdministerSystemHelper.verifyLanguangeDisplayedInTheList(language);
    });
});