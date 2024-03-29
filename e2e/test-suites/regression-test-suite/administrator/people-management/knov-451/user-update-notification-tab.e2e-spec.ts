import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { AdminHomePageHelper } from '../../../../../page-objects/pages/admin-home-page/admin-home.helper';
import { AdminLoginPageHelper } from '../../../../../page-objects/pages/admin-login-page/admin-login.helper';
import { UserAndGroupFinderHelper } from '../../../../../page-objects/pages/manage-people/user-and-group-finder/user-and-group-finder.helper';
import { UserCreatorConstant } from '../../../../../page-objects/pages/manage-people/user-creator/user-creator.constant';
import { UserCreatorHelper } from '../../../../../page-objects/pages/manage-people/user-creator/user-creator.helper';
import { UserCreatorPage } from '../../../../../page-objects/pages/manage-people/user-creator/user-creator.po';
import { ProfileEditorHelper } from '../../../../../page-objects/pages/profile-editor/profile-editor.helper';
import { SuiteNames } from '../../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = AdminLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await AdminLoginPageHelper.logout(true);
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-451
    it('Verify Open Profile Editor Screen using User Creator menu option - [22406800]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:01 GMT

        StepLogger.caseId = 22406800;
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
        StepLogger.step('Verify that the option User Creator should be available.');
        StepLogger.verification('The option User Creator should be available.');
        await AdminHomePageHelper.verifyUserCreatorDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on User Creator.');
        await AdminHomePageHelper.clickOnUserCreatorOption();
        StepLogger.verification('Profile Editor page should be displayed.');
        await ProfileEditorHelper.verifyProfileEditorPageDisplayed();
    });

    // Jira References - KNOV-451
    it('Verify User & Group Finder  menu option - [22406801]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:01 GMT

        StepLogger.caseId = 22406801;
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
        StepLogger.step('Verify that the option User & Group Finder should be available.');
        StepLogger.verification('The option User & Group Finder should be available.');
        await AdminHomePageHelper.verifyUserAndGroupFinderOptionIsAvailable();

        StepLogger.stepId(4);
        StepLogger.step('Click on User & Group Finder.');
        await AdminHomePageHelper.clickOnUserGroupFinderOption();
        StepLogger.verification('User & Group Finder page should be displayed.');
        await UserAndGroupFinderHelper.verifyUserAndGroupFinderPageDisplayed();
    });

    // Jira References - KNOV-451
    it('Verify Open Profile Editor - Notifications tab for an existing user - [22406802]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:01 GMT

        StepLogger.caseId = 22406802;
        const criteria = UserCreatorConstant.testData.criteria;
        StepLogger.preCondition('User and Group Finder page should be opened C22406801.');
        await AdminHomePageHelper.navigateToUserGroupFinder(false);

        StepLogger.stepId(1);
        StepLogger.step('Enter Search Criteria. e.g First Name.');
        await UserAndGroupFinderHelper.typeFirstName(criteria);
        StepLogger.verification('User should be to enter the search criteria.');
        await UserAndGroupFinderHelper.verifyFirstNameValue(criteria);

        StepLogger.stepId(2);
        StepLogger.step('Click Search.');
        await UserAndGroupFinderHelper.clickOnSearchIcon();
        StepLogger.verification('All Users matching the search criteria should be displayed.');
        await UserAndGroupFinderHelper.verifyUserDisplayedInSearchList(criteria);

        StepLogger.stepId(3);
        StepLogger.step('Click on the user name.');
        await UserAndGroupFinderHelper.ClickOnAUserDisplayedInSearchList(criteria);
        StepLogger.verification('Profile Editor page for that user should be displayed.');
        await UserCreatorHelper.verifyProfileEditorPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click Notifications tab.');
        await UserCreatorHelper.clickOnNotificationTab();
        StepLogger.verification('The fields of Notifications tab should be displayed.');
        await UserCreatorHelper.verifyNotificationForm();
    });

    // Jira References - KNOV-451
    it('Verify Notification tab is enabled when user is saved. - [22406803]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:02 GMT

        StepLogger.caseId = 22406803;
        StepLogger.preCondition('Profile Editor page should be opened for new User C22406800.');
        await AdminHomePageHelper.navigateToEditProfilePage();

        StepLogger.stepId(1);
        StepLogger.step(`Enter Mandatory info like Username, Password, FirstName, LastName, Bio Information and Roles.
			Also Set Email Address.`);
        StepLogger.verification('User should be able to set the mandatory fields.');
        await UserCreatorHelper.typeAndVerifyMandatoryFieldsWithEmail();

        StepLogger.stepId(2);
        StepLogger.step('Click Save.');
        await UserCreatorHelper.clickOnSaveButton();
        StepLogger.verification('User Saved Successfully message should be displayed.');
        await UserCreatorHelper.verifyUserCreatedMessage();

        StepLogger.stepId(3);
        StepLogger.step('Verify that the Notifications tab is enabled.');
        StepLogger.verification('Notifications tab should be enabled.');
        await UserCreatorHelper.verifyNotificationTab();

        StepLogger.stepId(4);
        StepLogger.step('Click on Notifications  Tab.');
        await UserCreatorHelper.clickOnNotificationTab();
        StepLogger.verification('The fields of Notifications tab should be displayed.');
        await UserCreatorHelper.verifyNotificationForm();
    });

    // Jira References - KNOV-451
    it('Verify Expand All - [22406840]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:02 GMT

        StepLogger.caseId = 22406840;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Verify that Expand All button should be available.');
        StepLogger.verification('Expand All button should be available.');
        await UserCreatorHelper.verifyExpandAll();

        StepLogger.stepId(2);
        StepLogger.step('Click Expand All.');
        await UserCreatorHelper.clickExpandAll();
        StepLogger.verification('All the sections should be expanded.');
        // verification is covered in step 3

        StepLogger.stepId(3);
        StepLogger.step('Scroll below and verify that all the four sections are expanded.');
        StepLogger.verification('All the four sections should be expanded.');
        await UserCreatorHelper.verifyExpandedSection();
    });

    // Jira References - KNOV-451
    it('Verify Collapse All - [22406875]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:01 GMT

        StepLogger.caseId = 22406875;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();
        await UserCreatorHelper.clickExpandAll();

        StepLogger.stepId(1);
        StepLogger.step('Verify that Collapse All button should be available.');
        StepLogger.verification('Collapse All button should be available.');
        await UserCreatorHelper.verifyCollapseAll();

        StepLogger.stepId(2);
        StepLogger.step('Click Collapse All.');
        await UserCreatorHelper.clickCollapseAll();
        StepLogger.verification('All the sections should be collapsed.');
        // verification is covered in step 3

        StepLogger.stepId(3);
        StepLogger.step('Scroll below, if required and verify that all the four sections are collapsed.');
        StepLogger.verification('All the four sections should be collapsed.');
        await UserCreatorHelper.verifyCollapsedSection();
    });

    // Jira References - KNOV-451
    it('Verify User is able to view and Check/Uncheck items from Authoring Events - [22406903]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:01 GMT

        StepLogger.caseId = 22406903;
        const notifyExist = UserCreatorPage.editorProfileForm.notificationTab.notifyExist;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Verify that Authoring Events section is available');
        StepLogger.verification('Authoring Events section should be available.');
        await UserCreatorPage.editorProfileForm.notificationTab.authoringEvent.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Expand button (Arrow button)');
        await UserCreatorPage.editorProfileForm.notificationTab.authoringEventArrow.hoverOverAndClick();
        StepLogger.verification('Authoring Events section should be expanded.');
        await UserCreatorPage.editorProfileForm.notificationTab.authoringEventExpand.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step('Check/Uncheck any of the items.');
        StepLogger.verification('User should be able to Check/Uncheck items.');
        await UserCreatorHelper.checkAndUncheckAndVerifyCheckbox(notifyExist);
    });

    // Jira References - KNOV-451
    it('Verify User is able to view and Check/Uncheck items from Collaboration Events - [22406909]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:02 GMT

        StepLogger.caseId = 22406909;
        const notifyCollaborate = UserCreatorPage.editorProfileForm.notificationTab.notifyCollaborate;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Verify that Collaboration Events section is available');
        StepLogger.verification('Collaboration Events section should be available.');
        await UserCreatorPage.editorProfileForm.notificationTab.collaborationEvent.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Expand button (Arrow button)');
        await UserCreatorPage.editorProfileForm.notificationTab.collaborationEventArrow.hoverOverAndClick();
        StepLogger.verification('Collaboration Events section should be expanded.');
        await UserCreatorPage.editorProfileForm.notificationTab.collaborationEventExpand.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step('Check/Uncheck any of the items.');
        StepLogger.verification('User should be able to Check/Uncheck items.');
        await UserCreatorHelper.checkAndUncheckAndVerifyCheckbox(notifyCollaborate);
    });

    // Jira References - KNOV-451
    it('Verify User is able to view and Check/Uncheck items from Feedback Events - [22406915]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:02 GMT

        StepLogger.caseId = 22406915;
        const notifyFeedbackAssigned = UserCreatorPage.editorProfileForm.notificationTab.notifyFeedbackAssigned;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Verify that Feedback Events section is available');
        StepLogger.verification('Feedback Events section should be available.');
        await UserCreatorPage.editorProfileForm.notificationTab.feedBackEvent.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Expand button (Arrow button)');
        await UserCreatorPage.editorProfileForm.notificationTab.feedBackEventArrow.hoverOverAndClick();
        StepLogger.verification('Feedback Events section should be expanded.');
        await UserCreatorPage.editorProfileForm.notificationTab.feedBackEventExpand.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step('Check/Uncheck any of the items.');
        StepLogger.verification('User should be able to Check/Uncheck items.');
        await UserCreatorHelper.checkAndUncheckAndVerifyCheckbox(notifyFeedbackAssigned);
    });

    // Jira References - KNOV-451
    it('Verify User is able to view and Check/Uncheck items from  Web Cases Events - [22406916]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:02 GMT

        StepLogger.caseId = 22406916;
        const notifyCaseAvailable = UserCreatorPage.editorProfileForm.notificationTab.notifyCaseAvailable;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Verify that Web Cases Events section is available');
        StepLogger.verification('Web Cases Events section should be available.');
        await UserCreatorPage.editorProfileForm.notificationTab.webCasesEvent.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Expand button (Arrow button)');
        await UserCreatorPage.editorProfileForm.notificationTab.webCasesEventArrow.hoverOverAndClick();
        StepLogger.verification('Web Cases Events section should be expanded.');
        await UserCreatorPage.editorProfileForm.notificationTab.webCasesEventExpand.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step('Check/Uncheck any of the items.');
        StepLogger.verification('User should be able to Check/Uncheck items.');
        await UserCreatorHelper.checkAndUncheckAndVerifyCheckbox(notifyCaseAvailable);
    });

    // Jira References - KNOV-451
    it('Verify Save Changes - [22408966]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:02 GMT

        StepLogger.caseId = 22408966;
        const notifyExist = UserCreatorPage.editorProfileForm.notificationTab.notifyExist;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Expand Any/All of the sections.');
        await UserCreatorHelper.clickExpandAll();
        StepLogger.verification('The selected section should be expanded.');
        await UserCreatorHelper.verifyExpandedSection();

        StepLogger.stepId(2);
        StepLogger.step('Check/Uncheck any of the items.');
        StepLogger.verification('User should be able to check/uncheck any of the items.');
        await UserCreatorHelper.checkAndUncheckAndVerifyCheckbox(notifyExist);

        StepLogger.stepId(3);
        StepLogger.step('Click Save.');
        await UserCreatorHelper.clickOnSaveButton();
        StepLogger.verification('User saved successfully message should be displayed.');
        await UserCreatorHelper.verifyUserCreatedMessage();
    });

    // Jira References - KNOV-451
    it('Verify Submit Changes - [22408974]', async () => {
        // Auto generated by aurea-automation - util on Thu, 25 Apr 2019 08:24:01 GMT

        StepLogger.caseId = 22408974;
        const notifyExist = UserCreatorPage.editorProfileForm.notificationTab.notifyExist;
        StepLogger.preCondition('Profile Editor page should be opened C22406802.');
        await UserCreatorHelper.createUserAndOpenNotificationTab();

        StepLogger.stepId(1);
        StepLogger.step('Expand Any/All of the sections.');
        await UserCreatorHelper.clickExpandAll();
        StepLogger.verification('The selected section should be expanded.');
        await UserCreatorHelper.verifyExpandedSection();

        StepLogger.stepId(2);
        StepLogger.step('Check/Uncheck any of the items.');
        StepLogger.verification('User should be able to check/uncheck any of the items.');
        await UserCreatorHelper.checkAndUncheckAndVerifyCheckbox(notifyExist);

        StepLogger.stepId(3);
        StepLogger.step('Click Submit.');
        await UserCreatorHelper.clickOnSubmitButton();
        StepLogger.verification(`User changes should be saved(No confirmation for this).
            User should be redirected to User & Group Finder page.`);
        await AdminHomePageHelper.verifyWelcomePage();
    });
});
