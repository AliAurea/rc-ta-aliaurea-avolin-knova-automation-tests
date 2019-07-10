import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { AdminHomePageHelper } from '../../../page-objects/pages/admin-home-page/admin-home.helper';
import { AdminHomePage } from '../../../page-objects/pages/admin-home-page/admin-home.po';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { LanguageManagementPageHelper } from '../../../page-objects/pages/administer-system/Language-management-page/Language-management-page.helper';
import { LanguageManagementPage } from '../../../page-objects/pages/administer-system/Language-management-page/Language-management-page.po';
import { LanguageManagementPageConstant } from '../../../page-objects/pages/administer-system/language-management-page/Language-management-page.constant';
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

    // Jira References - KNOV-101
    it('View the Language Manager page - [22383590]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 20:02:30 GMT
        StepLogger.caseId = 22383590;

        StepLogger.preCondition('Login Knova Administration successfully refer C22308069');
        await AdminLoginPageHelper.loginAsAdmin();

        StepLogger.stepId(1);
        StepLogger.step('Verify the Landing page is displayed with the name of the Administrator at the top right corner');
        StepLogger.verification('The Name of the Administrator is displayed at the top right corner');
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(2);
        StepLogger.step('Click on Burger button in top LHS');
        await AdminHomePage.hamburgerIcon.clickButton();
        StepLogger.verification('The Menu Navigation is opened on the LHS of the page');
        await AdminHomePage.sidebar.home.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step('Click on the "Administer Systems" menu item on the LHS of the page');
        await AdminHomePageHelper.clickAdministerSystem();
        StepLogger.verification(`The sub menu of the menu item is displayed for the "Administer Systems" menu with the following sub menu list
        "Analytics"
        "Configuration Settings"
        "Notifications and Subscriptions"
        "System Maintenance and Troubleshooting"
        "Transfer Data Manager"
        "Language Manager"
        "Change Log Viewer"`);
        await AdminHomePageHelper.verifyAdministerSystemSubMenu();

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Language Manager"  sub menu item on the list');
        await AdminHomePage.administerSystem.LanguageManager.clickButton();
        StepLogger.verification('The Language Manager is displayed');
        await LanguageManagementPage.contentIFrame.verifyDisplayedStatus();

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-101
    it('View the new Language Properties Page - [22383596]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Feb 2019 20:26:38 GMT
        StepLogger.caseId = 22383596;

        StepLogger.preCondition('View the Language Manager page C22383590');
        await LanguageManagementPageHelper.navigateToLanguageManagement();

        StepLogger.stepId(1);
        StepLogger.step('Verify the Language Manager page is displayed with the list of available languages');
        StepLogger.verification('The Language Manager page is displayed with the list of the available languages');
        await LanguageManagementPage.LanguagesTable.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Add Language" at the top of the page');
        await LanguageManagementPageHelper.clickAdd();
        StepLogger.verification('The Language Properties page is opened');
        await LanguageManagementPage.LanguagesProperties.locale.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step(`Verify the following fields are available on the Language Properties page
        "Locale"
        "Display Names"
        "English"
        "Arabic"
        "French"`);
        StepLogger.verification(`The following fields are displayed on the Language Properties page
        "Locale"
        "Display Names"
        "English"
        "Arabic"
        "French"`);
        await LanguageManagementPageHelper.validateLanguagePropertiesFields();

        StepLogger.stepId(4);
        StepLogger.step(`Verify the following button are present on the Language Properties page
        "Submit"
        "Cancel"`);
        StepLogger.verification('The button should be present on the Language Properties');
        await LanguageManagementPageHelper.validateLanguagePropertiesButtons();

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-101
    it('Cancel the addition of a new Language - [22383600]', async () => {
        // Auto generated by aurea-automation - util on Fri, 22 Feb 2019 17:16:20 GMT
        const language = LanguageManagementPageConstant.languages;
        StepLogger.caseId = 22383600;

        StepLogger.preCondition('Open the Add Language Properties page C22383596');
        await LanguageManagementPageHelper.setLanguageEnvironmentForTesting();
        StepLogger.preCondition('Open Add Language Properties page');
        await LanguageManagementPageHelper.clickAdd();

        StepLogger.stepId(1);
        StepLogger.step(`Verify the fields and button on the Language properties page
        "Submit"
        "Cancel"`);
        StepLogger.verification('The button is displayed on the Language Properties page');
        await LanguageManagementPageHelper.validateLanguagePropertiesButtons();

        StepLogger.stepId(2);
        StepLogger.step('Click the Locale dropdown box');
        await LanguageManagementPage.localeDropDown.localeDd.clickButton();
        StepLogger.verification('The list of the available language is displayed');
        await LanguageManagementPageHelper.verifyListLanguagesDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on a Language option from the options available e.g. Italian');
        await LanguageManagementPage
            .getLanguageOptions(language.finnish)
            .clickButton();
        StepLogger.verification(`The selected language is displayed in the Locale dropdown box and
        the "English" textbox in the "Display Names" section is changed to the selected language "Italian"`);
        await LanguageManagementPageHelper.verifySelectedLanguage(language.finnish);

        StepLogger.stepId(4);
        StepLogger.step(`Input the value in the following textbox optionally
        "Arabic"
        "French"
        "Greek"
        "Turkish"`);
        await LanguageManagementPageHelper.editDisplayNamesForlanguages(language.spanish);
        StepLogger.verification('The input value is displayed in the textbox is displayed');
        await LanguageManagementPageHelper.verifyDisplayNamesForlanguages(language.spanish);

        StepLogger.stepId(5);
        StepLogger.step('Click the "Cancel" button');
        await LanguageManagementPageHelper.clickCancel();
        StepLogger.verification(`The Language Properties page is closed and the Language is not added
        to the Language Manager page`);
        await LanguageManagementPageHelper.verifyLanguageNotPresent(language.finnish);

        StepLogger.stepId(6);
        StepLogger.step('Verify the language is not added to the Language Manager page');
        StepLogger.verification('The new language is not added to the Language Manager page');
        await LanguageManagementPageHelper.verifyLanguageNotPresent(language.finnish);

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-101
    it('Update a Language - [22383601]', async () => {
        // Auto generated by aurea-automation - util on Fri, 22 Feb 2019 16:38:05 GMT
        const language = LanguageManagementPageConstant.languages;
        StepLogger.caseId = 22383601;

        StepLogger.preCondition('Open the Add Language Properties page C22383596');
        await LanguageManagementPageHelper.navigateToLanguageManagement();

        // Step 1 is covered in precondition block
        StepLogger.stepId(1);
        StepLogger.step('Verify the Language Manager page is displayed');
        StepLogger.verification('The Language Manager page is displayed with the list of added language');

        StepLogger.stepId(2);
        StepLogger.step('Click on the desired language name to edit under the Language column e.g. German');
        StepLogger.verification('The Language properties pages is displayed with the details of the language');
        const originalDisplayedName = await LanguageManagementPageHelper.selectLanguageToModify(language.german);

        StepLogger.stepId(3);
        StepLogger.step(`Edit the Display name for the following fields
        "English"
        "Arabic"
        "French"`);
        await LanguageManagementPageHelper.editDisplayNamesForlanguages(language.speranto);
        StepLogger.verification('The updated value is displayed');
        await LanguageManagementPageHelper.verifyDisplayNamesForlanguages(language.speranto);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Submit" button on the Language Properties page');
        await LanguageManagementPageHelper.clickSubmit();
        StepLogger.verification('The Language Properties page is closed and the update is saved successfully');
        StepLogger.step(`original: ${originalDisplayedName}`);
        await LanguageManagementPageHelper.verifyLanguageNotPresent(originalDisplayedName);

        StepLogger.stepId(5);
        StepLogger.step('Verify the English Display Name value is changed/updated');
        StepLogger.verification('The value of the English Display Name is updated');
        await LanguageManagementPage.getDisplayedName(language.speranto).verifyDisplayedStatus();

        StepLogger.postCondition('Clean Up environment');
        await LanguageManagementPageHelper.setLanguageEnvironmentForTesting(true);
        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-101
    it('Cancel updating a Language - [22383604]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Feb 2019 20:32:21 GMT
        const testLanguage = LanguageManagementPageConstant.languages.dutch;
        const newLanguage = LanguageManagementPageConstant.languages.speranto;
        StepLogger.caseId = 22383604;

        StepLogger.preCondition('Open the Add Language Properties page C22383596');
        await LanguageManagementPageHelper.navigateToLanguageManagement();

        // Step 1 is covered in precondition block
        StepLogger.stepId(1);
        StepLogger.step('Verify the Language Manager page is displayed');
        StepLogger.verification('The Language Manager page is displayed with the list of added language');

        StepLogger.stepId(2);
        StepLogger.step('Click on the desired language name to edit under the Language column e.g. French');
        StepLogger.verification('The Language properties pages is displayed with the details of the language');
        await LanguageManagementPageHelper.selectLanguageToModify(testLanguage);

        StepLogger.stepId(3);
        StepLogger.step(`Edit the Display name for the following fields
        "English"
        "Arabic"
        "French"`);
        await LanguageManagementPageHelper.editDisplayNamesForlanguages(newLanguage);
        StepLogger.verification('The updated value is displayed');
        await LanguageManagementPageHelper.verifyDisplayNamesForlanguages(newLanguage);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Cancel" button on the Language Properties page');
        await LanguageManagementPageHelper.clickCancel();
        StepLogger.verification('The Language Properties page is closed and the update is not saved');
        await LanguageManagementPage.getDisplayedName(newLanguage).verifyHiddenStatus();

        StepLogger.stepId(5);
        StepLogger.step('Verify the English Display Name value is not changed/updated');
        StepLogger.verification('The value of the English Display Name is not updated');
        await LanguageManagementPage
            .getDisplayedName(LanguageManagementPageConstant.elementNames.languagePropFields.english)
            .verifyPresentStatus();

        StepLogger.postCondition('Logout');
        await AdminLoginPageHelper.logout(true);
    });
});