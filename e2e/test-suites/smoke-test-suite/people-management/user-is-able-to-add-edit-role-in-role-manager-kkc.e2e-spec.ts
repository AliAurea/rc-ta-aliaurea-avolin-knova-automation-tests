import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../../page-objects/pages/admin-home-page/admin-home.helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { ManagePeopleConstant } from '../../../page-objects/pages/manage-people/manage-people.constant';
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

    // Jira References - KNOV-789
    it('View the Role Manager (KKC) page - [22383860]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22383860;
        StepLogger.preCondition('Login as an Admin user');
        await AdminLoginPageHelper.loginAsAdmin();

        StepLogger.stepId(1);
        StepLogger.step('Verify the Landing page is displayed with the name of the Administrator at the top right corner');
        StepLogger.verification('The Name of the Administrator is displayed at the top right corner');
        await AdminHomePageHelper.verifyUserNameAtTheTopRightCorner(CredentialsHelper.admin.username);

        StepLogger.stepId(2);
        StepLogger.step('Click on Burger button in top LHS');
        await AdminHomePageHelper.clickOnBurgerIcon();
        StepLogger.verification('The Menu Navigation is opened on the LHS of the page');
        await AdminHomePageHelper.verifySideMenuDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on the "Manage People" menu item on the LHS of the page');
        await AdminHomePageHelper.clickOnManagePeopleButton();
        StepLogger.verification(`The sub menu of the menu item is displayed for the "Manage People" menu with the following sub menu list
        "Agent Level Manager"
        "Enterprise Reputation Level Manager"
        "Group Creator"
        "User & Group Finder"
        "Role Manager (KCC)"
        "Role Manager (KSS)"
        "User Creator"`);
        await ManagePeopleHelper.verifyManagePeopleSubmenuOptions();

        StepLogger.stepId(4);
        StepLogger.step('Click the Role Manager (KCC) sub menu');
        await ManagePeopleHelper.clickOnRoleManagerKkc();
        StepLogger.verification('The Role Manager (KCC)  page is displayed with the list of Roles available');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify the Role Manager KCC page is displayed with the list of Roles');
        StepLogger.verification('The Role Manager Page is displayed with the list of Roles available');
        await ManagePeopleHelper.verifyRolesTableDisplayed();

        StepLogger.postCondition('Sign out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-790
    it('View the new Role Manager (KKC) Manage Roles page - [22383864]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22383864;
        StepLogger.preCondition('Login as an Admin user and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        await ManagePeopleHelper.navigateToRoleManageKkcPage();

        StepLogger.stepId(1);
        StepLogger.step('Verify the Role Manager (KCC) is displayed with the list of roles');
        StepLogger.verification('The Role Manager (KCC) page is displayed with the list of roles');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click the New Role button at the top of the page');
        await ManagePeopleHelper.clickOnNewRoleButton();
        StepLogger.verification('The Manage Roles page is displayed');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(3);
        StepLogger.step(`Verify the following button are present on the Manage Roles page
        "Select"
        "Submit"
        "Cancel"`);
        StepLogger.verification('The button are present on the Manage Roles page');
        await ManagePeopleHelper.verifyManageRolesPageButtons();

        StepLogger.postCondition('Sign out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-791
    it('Add a new Role - [22383869]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22383869;
        StepLogger.preCondition('Login as an Admin user and navigate to Manage Roles page');
        await AdminLoginPageHelper.loginAsAdmin();
        await ManagePeopleHelper.navigateToManageRolesPage();

        StepLogger.stepId(1);
        StepLogger.step(`Verify the Manage Roles page is displayed with the following buttons
        "Submit"
        "Cancel"
        "Select"`);
        StepLogger.verification('The Manage Roles page is displayed with the buttons present on the page');
        await ManagePeopleHelper.verifyManageRolesPageButtons();

        StepLogger.stepId(2);
        StepLogger.step(`Click on the radio button of the option of "Apply Role to"
        "Employee Applications"
        "Customer Applications"`);
        await ManagePeopleHelper.clickOnEmployeedApplicationOption();
        StepLogger.verification('The selected radio button is enabled');
        await ManagePeopleHelper.verifyEmployeeApplicationOption();

        StepLogger.stepId(3);
        StepLogger.step('Input role name in the "Role Name" textbox');
        const roleName = await RandomHelper.getRandomString(Constants.number.eight);
        StepLogger.verification('The Role Name is displayed in the textbox');
        await ManagePeopleHelper.typeRoleName(roleName);

        StepLogger.stepId(4);
        StepLogger.step('Input Description value in the "Description" textbox');
        const description = await RandomHelper.getRandomString(Constants.number.thirteen);
        StepLogger.verification('The inputted value is displayed in the "Description" textbox');
        await ManagePeopleHelper.typeRoleDescription(description);

        StepLogger.stepId(5);
        StepLogger.step('Select the Permission in the "Permission Available" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);
        StepLogger.verification('The Selected permission is highlighted');
        await ManagePeopleHelper.verifyHighlightedAvailablePermission(
            ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(6);
        StepLogger.step('Click on the ">>" button to move the selected permission to the Selected combobox');
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(7);
        StepLogger.step('Repeat step 4-5 to add another permission to the "Selected" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.frindGroups);
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.frindGroups);

        StepLogger.stepId(8);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('The Manage Roles page is closed and the role is created and saved to the list of roles on the Role Manager page');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(9);
        StepLogger.step('Verify the new role name is displayed on the Role Manager page');
        StepLogger.verification('The new role name is displayed on the Role manager page');
        await ManagePeopleHelper.verifyCreatedRoleDisplayed(roleName);

        StepLogger.postCondition('Clean up and sign out');
        await ManagePeopleHelper.deleteRoleAndSignOut(roleName);
    });

    // Jira References - KNOV-800
    it('Add a Permission to a Role - [22388702]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22388702;
        StepLogger.preCondition('Login as an Admin user, create a role and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        const roleName = await ManagePeopleHelper.createRole();

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Role');
        await ManagePeopleHelper.clickOnARole(roleName);
        StepLogger.verification('The Role Manager is displayed with the details of the Role');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on a option on the "Permission Available" combo box');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);
        StepLogger.verification('The selected permission option is highlighted');
        await ManagePeopleHelper.verifyHighlightedAvailablePermission(
            ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(3);
        StepLogger.step('Click the ">>" to add the permission to the Selected combo box section');
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the Selected combo box');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(4);
        StepLogger.step('Click on "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('The Manage Roles page is closed and the role is saved successfully');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Click on the name of the Role that was saved in step 4');
        await ManagePeopleHelper.clickOnARole(roleName);
        StepLogger.verification('The  Manage Roles page is opened');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(6);
        StepLogger.step('Verify the permission added are present in the "Selected" section of the Manage Roles page');
        StepLogger.verification('The Added permission is displayed in the "Selected" section of the Manage Roles page');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.postCondition('Clean up and sign out');
        await ManagePeopleHelper.clickOnCancelButton();
        await ManagePeopleHelper.deleteRoleAndSignOut(roleName);
    });

    // Jira References - KNOV-797
    it('Edit a Role - [22388273]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22388273;
        StepLogger.preCondition('Login as an Admin user, create a role and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        const roleName = await ManagePeopleHelper.createRole();

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Role');
        await ManagePeopleHelper.clickOnARole(roleName);
        StepLogger.verification('The Role Manager is displayed with the details of the Role');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step(`Change the value of the following fields
        "Role Name"
        "Description"`);
        const newName = RandomHelper.getRandomString(Constants.number.eight);
        const newDescription = RandomHelper.getRandomString(Constants.number.eight);
        StepLogger.verification('The value is changed and displayed in the  textbox');
        await ManagePeopleHelper.typeNameAndDescription(newName, newDescription);

        StepLogger.stepId(3);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('The Roles Manager page is closed and the update is saved');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify the Name of the Role is updated on the Role list');
        StepLogger.verification('The Role name is updated to the edited name');
        await ManagePeopleHelper.verifyRoleDisplayedInTheList(newName);

        StepLogger.postCondition('Clean up and sign out');
        await ManagePeopleHelper.deleteRoleAndSignOut(newName);
    });

    // Jira References - KNOV-793
    it('Add a new Role with blank fields - [22388267]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22388267;
        StepLogger.preCondition('Login as an Admin user and navigate to Manage Roles page');
        await AdminLoginPageHelper.loginAsAdmin();
        await ManagePeopleHelper.navigateToManageRolesPage();

        StepLogger.stepId(1);
        StepLogger.step(`Verify the Manage Roles page is displayed with the following buttons
        "Submit"
        "Cancel"
        "Select"`);
        StepLogger.verification('The Manage Roles page is displayed with the buttons present on the page');
        await ManagePeopleHelper.verifyManageRolesPageButtons();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('A pop up Webpage is displayed with a message "Role Name Required"');
        await ManagePeopleHelper.verifyManageNameRequiredPopup();

        StepLogger.stepId(3);
        StepLogger.step('Click "OK" button on the pop up Webpage');
        await ManagePeopleHelper.clickOkButtonOnInformationRequiredPopup();
        StepLogger.verification('The Webpage is closed and the Role Manager page is displayed');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.postCondition('Sign out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-798
    it('Cancel editing a Role - [22388275]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT
        StepLogger.caseId = 22388275;
        StepLogger.preCondition('Login as an Admin user, create a role and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        const roleName = await ManagePeopleHelper.createRole();

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Role');
        await ManagePeopleHelper.clickOnARole(roleName);
        StepLogger.verification('The Role Manager is displayed with the details of the Role');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Change the value of the following fields "Role Name" "Description"');
        const newName = RandomHelper.getRandomString(Constants.number.eight);
        const newDescription = RandomHelper.getRandomString(Constants.number.eight);
        await ManagePeopleHelper.typeNameAndDescription(newName, newDescription);
        StepLogger.verification('The value is changed and displayed in the  textbox');
        await ManagePeopleHelper.verifyNameAndDescription(newName, newDescription);

        StepLogger.stepId(3);
        StepLogger.step('Click the "Cancel" button');
        await ManagePeopleHelper.clickOnCancelButton();
        StepLogger.verification('A Webpage pop up page is displayed with a message "Do you want to save changes made to this Role?"');
        await ManagePeopleHelper.verifyDoYouWantToSavedPopupDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click "No" on the web page pop up');
        await ManagePeopleHelper.clickNoButtonOnDoYouWantToSavePopup();
        StepLogger.verification('The Webpage pop up page is closed and the Role manager pager is closed');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify the name of the Role is not updated on the Role list page');
        StepLogger.verification('The edit is not saved and the name is not updated');
        await ManagePeopleHelper.verifyRoleDisplayedInTheList(roleName);

        StepLogger.postCondition('Clean up and sign out');
        await ManagePeopleHelper.deleteRoleAndSignOut(roleName);
    });
});
