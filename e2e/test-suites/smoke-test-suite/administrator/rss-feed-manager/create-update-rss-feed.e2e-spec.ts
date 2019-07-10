import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { CredentialsHelper } from '../../../../components/misc-utils/credentials-helper';
import { AdminHomePageHelper } from '../../../../page-objects/pages/admin-home-page/admin-home.helper';
import { AdminHomePage } from '../../../../page-objects/pages/admin-home-page/admin-home.po';
import { AdminLoginPageHelper } from '../../../../page-objects/pages/admin-login-page/admin-login.helper';
import { RssFeedManagerHelper } from '../../../../page-objects/pages/administer-system/rss-feed-manager/rss-feed-manager.helper';
import { RssFeedManagerPage } from '../../../../page-objects/pages/administer-system/rss-feed-manager/rss-feed-manager.po';
import { SuiteNames } from '../../../helpers/suite-names';

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

    // Jira References - KNOV-97
    it('Validation of the admin user accessing the "RSS Feed Manager" page in Knova Administrator application - [22336313]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:17 GMT

        StepLogger.caseId = 22336313;
        StepLogger.preCondition('Execute C22308069 - Login to Knova Administrator portal with a valid admin username and valid password');
        await AdminLoginPageHelper.loginAsAdmin();
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(1);
        StepLogger.step('Click the burger icon from the top left corner of the page.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        StepLogger.verification('The vertical menu bar with the available modules and options should be displayed on the left end of the page.');
        await AdminHomePageHelper.verifySidebarFieldsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Scroll down the menu bar and click the "Administer System" module.');
        await AdminHomePageHelper.clickAdministerSystem();
        StepLogger.verification('The list of options available options in the "Administer System" should be displayed on the right side of the menu bar.');
        await AdminHomePageHelper.verifyAdministerSystemSubMenu();

        StepLogger.stepId(3);
        StepLogger.step('Click the "Notifications and Subscriptions" option displayed.');
        await AdminHomePage.administerSystem.nofiticationsAndSubscriptions.hoverOverAndClick();
        StepLogger.verification('The list of options available in the "Notifications and Subscriptions" option ' +
            'should be displayed just under the "Notifications and Subscriptions" option.');
        await AdminHomePageHelper.verifyNotificationAndSubscriptionSubMenu();

        StepLogger.stepId(4);
        StepLogger.step('Click the "RSS Feed Manager" option from the list displayed.');
        await AdminHomePage.administerSystem.rssFeedManager.hoverOverAndClick();
        StepLogger.verification('User should be navigated to the "RSS Feed Manager" page with the list of available RSS feeds displayed.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(5);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it(`Validation of admin user viewing the available fields and buttons in the
		"RSS Feed Manager" page of Knova Administrator application - [22336372]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:17 GMT

        StepLogger.caseId = 22336372;
        StepLogger.preCondition('Execute C22308069 - Login to Knova Administrator portal with a valid admin username and valid password');
        await AdminLoginPageHelper.loginAsAdmin();
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(1);
        StepLogger.step('Click the burger icon from the top left corner of the page.');
        await AdminHomePageHelper.clickOnBurgerIcon();
        StepLogger.verification('The vertical menu bar with the available modules and options should be displayed on the left end of the page.');
        await AdminHomePageHelper.verifySidebarFieldsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Scroll down the menu bar and click the "Administer System" module.');
        await AdminHomePageHelper.clickAdministerSystem();
        StepLogger.verification('The list of options available options in the "Administer System" should be displayed on the right side of the menu bar.');
        await AdminHomePageHelper.verifyAdministerSystemSubMenu();

        StepLogger.stepId(3);
        StepLogger.step('Click the "Notifications and Subscriptions" option displayed.');
        await AdminHomePage.administerSystem.nofiticationsAndSubscriptions.hoverOverAndClick();
        StepLogger.verification('The list of options available in the "Notifications and Subscriptions" option ' +
            'should be displayed just under the "Notifications and Subscriptions" option.');
        await AdminHomePageHelper.verifyNotificationAndSubscriptionSubMenu();

        StepLogger.stepId(4);
        StepLogger.step('Click the "RSS Feed Manager" option from the list displayed.');
        await AdminHomePage.administerSystem.rssFeedManager.hoverOverAndClick();
        StepLogger.verification('User should be navigated to the "RSS Feed Manager" page with the list of available RSS feeds displayed in the table format.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(5);
        StepLogger.step(`Verify that the below mentioned fields and buttons are available in the "RSS Feed Manager" page.
			- Create (button)
			- Delete (button)
			- Name
			- Description
			- Access Levels
			- Segments
			- Knowledge Sources
			- Language
			- Text`);
        StepLogger.verification(`The below mentioned fields and buttons should be available in the "RSS Feed Manager" page.
			- Create (button)
			- Delete (button)
			- Name
			- Description
			- Access Levels
			- Segments
			- Knowledge Sources
			- Language
			- Text`);
        await RssFeedManagerHelper.verifyPageOption();

        StepLogger.stepId(6);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validation of admin user accessing the "RSS Feed Details" popup window and viewing the available fields and button. - [22336385]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:17 GMT

        StepLogger.caseId = 22336385;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();

        StepLogger.stepId(1);
        StepLogger.step('Click the "Create" button available on the top left side of the "RSS Feed Manager" page.');
        await RssFeedManagerPage.buttons.create.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed.');
        await RssFeedManagerHelper.verifyRssFeedDetailPopUp();

        StepLogger.stepId(2);
        StepLogger.step(`Verify that the below fields and buttons are available in the "RSS Feed Details" page.
			- Name:
			- Description:
			- URL root: (drop down option)
			- Language: (drop down option)
			- Knowledge Source
			- Select (button)
			- Access Levels:
			- Select (button)
			- Segments:
			- Select (button)
			- Title Contains:
			- Copy (button)
			- Delete (button)
			- Submit (button)
			- Cancel (button)`);
        StepLogger.verification(`The below fields and buttons should be available in the "RSS Feed Details" page.
			- Name:
			- Description:
			- URL root: (drop down option)
			- Language: (drop down option)
			- Knowledge Source
			- Select (button)
			- Access Levels:
			- Select (button)
			- Segments:
			- Select (button)
			- Title Contains:
			- Copy (button)
			- Delete (button)
			- Submit (button)
			- Cancel (button)`);
        await RssFeedManagerHelper.verifyRssFeedDetailOptionAndClickCancel();

        StepLogger.stepId(3);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validation of the admin user can create a RSS Feed without values in the "Name:" field - [22342031]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22342031;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();

        StepLogger.stepId(1);
        StepLogger.step('Click the "Create" button available on the top left side of the "RSS Feed Manager" page.');
        await RssFeedManagerPage.buttons.create.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(2);
        StepLogger.step('Verify if the "Submit" button is enabled for the user when the "Name:" field is left blank.');
        StepLogger.verification('The "Submit" button should not be enabled for the user when the "Name:" field is left blank.');
        await RssFeedManagerHelper.verifySubmitNotEnabled();

        StepLogger.stepId(3);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validation of creating a RSS Feed by entering details only in the mandatory fields of "RSS Feed Details" popup window - [22336478]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:17 GMT

        StepLogger.caseId = 22336478;
        const feedName = PageHelper.getUniqueId();
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();

        StepLogger.stepId(1);
        StepLogger.step('Click the "Create" button available on the top left side of the "RSS Feed Manager" page.');
        await RssFeedManagerPage.buttons.create.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(2);
        StepLogger.step('In the "RSS Feed Details" window enter a valid name in the "Name:" field.');
        await RssFeedManagerPage.rssFeedDetail.name.sendKeys(feedName);
        StepLogger.verification('User should be able to enter a valid name in the "Name:" field.');
        await RssFeedManagerPage.rssFeedDetail.name.verifyTextEntered(feedName);

        StepLogger.stepId(3);
        StepLogger.step('Click the drop down option in the "URL Root:" field and select an option from the list of options displayed. (e.g, Knowledgecentral)');
        const selectedUrlRoot = await RssFeedManagerHelper.selectUrlRootOption();
        StepLogger.verification('User should be able to select an option in the "URL Root:" field.');
        await RssFeedManagerHelper.verifySelectedUrlRootOption(selectedUrlRoot);

        StepLogger.stepId(4);
        StepLogger.step('Click the drop down option in the "Language" field and select an option from the list of options displayed. (e.g, Greek)');
        const selectedLanguage = await RssFeedManagerHelper.selectLanguageOption();
        StepLogger.verification('User should be able to select an option in the "Language:" field.');
        await RssFeedManagerHelper.verifySelectedLanguageOption(selectedLanguage);

        StepLogger.stepId(5);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(6);
        StepLogger.step('Verify if the newly added RSS feed displayed with the values in the "Name" and "Language" fields as entered in step 2 and 4.');
        StepLogger.verification('The newly added RSS feed should be displayed with values in the "Name:" and "Language:" fields as entered in step 2 and 4.');
        await RssFeedManagerHelper.verifyCreatedRssFeedAndDelete(feedName, selectedLanguage);

        StepLogger.stepId(7);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validation of the error message when admin user tries to create a RSS Feed using an existing RSS Feed Name - [22344067]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22344067;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.createNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Click the "Create" button available on the top left side of the "RSS Feed Manager" page.');
        await RssFeedManagerPage.buttons.create.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(2);
        StepLogger.step('Enter an existing RSS Feed Name in the "Name:" field and click the Submit button.');
        await RssFeedManagerHelper.enterFeedNameAndClickSubmit(feedName);
        StepLogger.verification('The "--Webpage Dialog" window with the error message as ' +
            '"A Feed with this name already exists. Please enter a different name" should be displayed.');
        await RssFeedManagerHelper.verifyDuplicatePopUpDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click the OK button');
        await RssFeedManagerHelper.clickOk();
        StepLogger.verification('The "--Webpage Dialog" window should be closed and the user should be navigated to the "RSS Feed Details" window.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Cancel" button.');
        await RssFeedManagerHelper.clickCancel();
        StepLogger.verification('The "RSS Feed Details" window should be closed and the user should be navigated to the ' +
            '"RSS Feed Manager" page without the feed been created.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(5);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validating if the admin user can discard the updation done using the "Cancel" button "RSS Feed Details" popup window - [22344100]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22344100;
        const editFeedName = PageHelper.getUniqueId();
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.createNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Click on the feed name under the "Name" field of an existing RSS Feed.');
        await RssFeedManagerHelper.clickRssFeed(feedName);
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed with the existing values displayed for the fields.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(2);
        StepLogger.step('In the "RSS Feed Details" window edit the value available in the "Name:" field.');
        await RssFeedManagerPage.rssFeedDetail.name.sendKeys(editFeedName);
        StepLogger.verification('User should be able to edit the value available in the "Name:" field.');
        await RssFeedManagerPage.rssFeedDetail.name.verifyTextEntered(editFeedName);

        StepLogger.stepId(3);
        StepLogger.step('Navigate to the "Description:" field and edit the existing value with a new value.');
        await RssFeedManagerPage.rssFeedDetail.description.sendKeys(editFeedName);
        StepLogger.verification('User should be able to edit the existing value available in the "Description:" field');
        await RssFeedManagerPage.rssFeedDetail.description.verifyTextEntered(editFeedName);

        StepLogger.stepId(4);
        StepLogger.step('Click the drop down option in the "URL Root:" field and select a different option ' +
            'from the previous selected option from the list of options displayed. (e.g, selfservice)');
        const selectedUrlRoot = await RssFeedManagerHelper.selectUrlRootOption();
        StepLogger.verification('User should be able to select different option in the "URL Root:" field.');
        await RssFeedManagerHelper.verifySelectedUrlRootOption(selectedUrlRoot);

        StepLogger.stepId(5);
        StepLogger.step('Click the drop down option in the "Language" field and select a different option ' +
            'from the previous selected option from the list of options displayed. (e.g, English)');
        const language = await RssFeedManagerHelper.selectLanguageOption();
        StepLogger.verification('User should be able to select a different option in the "Language:" field.');
        await RssFeedManagerHelper.verifySelectedLanguageOption(language);

        StepLogger.stepId(6);
        StepLogger.step('Navigate to the "Title Contains:" field and edit the existing value with a new value.');
        await RssFeedManagerPage.rssFeedDetail.title.sendKeys(editFeedName);
        StepLogger.verification('User should be able to edit the existing value available in the "Title Contains:" field');
        await RssFeedManagerPage.rssFeedDetail.title.verifyTextEntered(editFeedName);

        StepLogger.stepId(7);
        StepLogger.step('Scroll down to the bottom of the page and click the "Cancel" button.');
        await RssFeedManagerHelper.clickCancel();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(8);
        StepLogger.step('Verify if the selected RSS feed in step 1 is displayed with the updated values in ' +
            'the Name, Description, URL Root, Language and Title Contains field as updated in step 2 to 6.');
        StepLogger.verification('The selected RSS feed in step 1 should not be displayed with the updated values in ' +
            'the Name, Description, URL Root, Language and Title Contains field as updated in step 2 to 6 instead it should hold the values as in step 1.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(9);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });
});
