import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { SelfServiceHomePageConstant } from '../../../page-objects/pages/self-service/self-service-home-page.contant';
import { SelfServiceHomePageHelper } from '../../../page-objects/pages/self-service/self-service-home-page.helper';
import { SelfServiceLoginPageHelper } from '../../../page-objects/pages/self-service/self-service-login.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.healthCheckSuite, () => {
    let loginPageHelper: SelfServiceLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = SelfServiceLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.logout();
        await SelfServiceLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-1895
    it('Validation of admin user viewing the available search options in the Knova Self - Service admin homepage - [22994292]', async () => {
        // Auto generated by aurea-automation - util on Mon, 29 Apr 2019 15:47:20 GMT

        StepLogger.caseId = 22994292;
        StepLogger.stepId(1);
        StepLogger.step('Verify if the search option is available at the top of the homepage.');
        StepLogger.verification('The search option should be available at the top of the homepage.');
        await SelfServiceHomePageHelper.verifySeachButtonDisplayed();

        StepLogger.stepId(2);
        StepLogger.step(`Verify if the below options are available in the search section of the user homepage.
        - Search text box
        - Products (drop down list option)
        - Search (button)
        - Advanced Search (link)`);
        StepLogger.verification(`The below options should be available in the search section of the user homepage.
        - Search text box
        - Products (drop down list option)
        - Search (button)
        - Advanced Search (link)`);
        await SelfServiceHomePageHelper.verifySearchControlsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click the "Logout" link available at the top right corner of the page.');
        await SelfServiceHomePageHelper.clickOnLogOut();
        StepLogger.verification('User should be logged out and the application login page should be displayed.');
        await SelfServiceLoginPageHelper.verifyLoginPageDisplayed();
    });

    // Jira References - KNOV-1897
    it('Validation of admin user viewing the advanced search options available in the search section of the homepage - [22994295]', async () => {
        // Auto generated by aurea-automation - util on Mon, 29 Apr 2019 15:47:20 GMT

        StepLogger.caseId = 22994295;
        StepLogger.stepId(1);
        StepLogger.step('Verify if the "Advanced Search" link is available in the search section of the homepage just below the "Select" button.');
        StepLogger.verification('The "Advanced Search" link should be available in the search section of the homepage just below the "Select" button.');
        await SelfServiceHomePageHelper.verifyAdvancedSearchLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Advanced Search" link.');
        await SelfServiceHomePageHelper.clickOnAdvancedSearchLink();
        StepLogger.verification(`The advanced search options should be displayed in the extended search
        section with the "Advanced Search" link now changed to "Guided Search" link.`);
        await SelfServiceHomePageHelper.verifyAdvancedSearchAreaDisplayed();

        StepLogger.stepId(3);
        StepLogger.step(`Verify if the below mentioned options are displayed as the advanced search options.
        - Saved Searches (drop down list option)
        - Search In: (drop down list option)
        - Products (select option type)
        - Document Types (select option type)
        - Language: (drop down list option)
        - Show Focus Choices ?
           - Yes (radio button option)
           - No (radio button option)
        - Author: (text field)
        - Published:
           - From: (calendar option)
           - To: (calendar option)
        - Publication Status: (drop down list option)`);
        StepLogger.verification(`The below mentioned options should be displayed as the advanced search options.
        - Saved Searches (drop down list option)
        - Search In: (drop down list option)
        - Products (select option type)
        - Document Types (select option type)
        - Language: (drop down list option)
        - Show Focus Choices ?
           - Yes (radio button option)
           - No (radio button option)
        - Author: (text field)
        - Published:
           - From: (calendar option)
           - To: (calendar option)
        - Publication Status: (drop down list option)`);
        await SelfServiceHomePageHelper.verifyAdvancedSearchOptions();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Guided Search:" link.');
        await SelfServiceHomePageHelper.clickOnGuidedSearchLink();
        StepLogger.verification(`The search section should be minimized and only the below options should be displayed.
        - Text box
        - Products (drop down list option)
        - Search (button)
        - Advanced Search (link)`);
        await SelfServiceHomePageHelper.verifyAdvancedSearchOptionsAreHidden();
        await SelfServiceHomePageHelper.verifySearchControlsDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Click the "Logout" link available at the top right corner of the page.');
        await SelfServiceHomePageHelper.clickOnLogOut();
        StepLogger.verification('User should be logged out and the application login page should be displayed.');
        await SelfServiceLoginPageHelper.verifyLoginPageDisplayed();
    });

    // Jira References - KNOV-1900
    it('Validation of admin user searching for particular documents of a specified product from the search section of the homepage - [22994298]', async () => {
        // Auto generated by aurea-automation - util on Mon, 29 Apr 2019 15:47:20 GMT

        StepLogger.caseId = 22994298;
        StepLogger.stepId(1);
        StepLogger.step('Enter a search value in the text box available at search section of the homepage. (e.g, test)');
        const text = SelfServiceHomePageConstant.testData.test;
        await SelfServiceHomePageHelper.typeInSearchTextbox(text);
        StepLogger.verification('The entered value should be displayed in the text box available at search section of the homepage.');
        await SelfServiceHomePageHelper.verifySearchTextboxValue(text);

        StepLogger.stepId(2);
        StepLogger.step('Click the drop down list option of the "Products -->" field and select an option from the list displayed.');
        const option = await SelfServiceHomePageHelper.selectRandomOptionFromProductDropdown();
        StepLogger.verification('The selected product should be displayed in the "Products -->" field.');
        await SelfServiceHomePageHelper.verifyProductDropdownSelectedOption(option);

        StepLogger.stepId(3);
        StepLogger.step('Click the "Search" button.');
        await SelfServiceHomePageHelper.clickOnSearchButton();
        StepLogger.verification(`The documents based on the set search criteria should be displayed in
        the "Created new WebCase # <number> for admin: <search text>" page.`);
        await SelfServiceHomePageHelper.verifySearchResultsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Logout" link available at the top right corner of the page.');
        await SelfServiceHomePageHelper.clickOnLogOut();
        StepLogger.verification('User should be logged out and the application login page should be displayed.');
        await SelfServiceLoginPageHelper.verifyLoginPageDisplayed();
    });

    // Jira References - KNOV-1911
    it('Validation of admin user viewing the available saved searches from the search section of the user homepage - [22994312]', async () => {
        // Auto generated by aurea-automation - util on Mon, 29 Apr 2019 15:47:10 GMT

        StepLogger.caseId = 22994312;
        StepLogger.stepId(1);
        StepLogger.step('Verify if the "Advanced Search" link is available in the search section of the homepage just below the "Select" button.');
        StepLogger.verification('The "Advanced Search" link should be available in the search section of the homepage just below the "Select" button.');
        await SelfServiceHomePageHelper.verifyAdvancedSearchLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Advanced Search" link.');
        await SelfServiceHomePageHelper.clickOnAdvancedSearchLink();
        StepLogger.verification(`The advanced search options should be displayed in the extended search
        section with the "Advanced Search" link now changed to "Guided Search" link.`);
        await SelfServiceHomePageHelper.verifyAdvancedSearchAreaDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click the drop down list option of the "Saved Searches" drop down list option.');
        await SelfServiceHomePageHelper.clickOnSavedSearch();
        StepLogger.verification('The list of available saved searches should be displayed in the drop down list format.');
        await SelfServiceHomePageHelper.verifySavedOptionsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Logout" link available at the top right corner of the page.');
        await SelfServiceHomePageHelper.clickOnLogOut();
        StepLogger.verification('User should be logged out and the application login page should be displayed.');
        await SelfServiceLoginPageHelper.verifyLoginPageDisplayed();
    });

    // Jira References - KNOV-1898
    it('Validation of admin user searching for all available documents from the search section of the homepage - [22994296]', async () => {
        // Auto generated by aurea-automation - util on Mon, 29 Apr 2019 15:47:20 GMT

        StepLogger.caseId = 22994296;
        // No action required in this step
        StepLogger.stepId(1);
        StepLogger.step('Do not enter any value in the text box available at search section of the homepage.');
        StepLogger.verification('The text box available at search section of the homepage should be left blank.');

        StepLogger.stepId(2);
        StepLogger.step('Click the "Search" button.');
        await SelfServiceHomePageHelper.clickOnSearchButton();
        StepLogger.verification('All available documents should be displayed in the "Created new WebCase # <number> for admin:" page');
        await SelfServiceHomePageHelper.verifySearchResultsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step(`Click the <microsite> tab available at the top of the page just before the
        "Communities" tab (e.g, TD_Microsite).`);
        await SelfServiceHomePageHelper.clickOnAvailableMicrositeTab();
        StepLogger.verification('User should be navigated to the admin homepage.');
        await SelfServiceHomePageHelper.verifyUserNavigatedToAdminHomePage();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Logout" link available at the top right corner of the page.');
        await SelfServiceHomePageHelper.clickOnLogOut();
        StepLogger.verification('User should be logged out and the application login page should be displayed.');
        await SelfServiceLoginPageHelper.verifyLoginPageDisplayed();
    });
});
