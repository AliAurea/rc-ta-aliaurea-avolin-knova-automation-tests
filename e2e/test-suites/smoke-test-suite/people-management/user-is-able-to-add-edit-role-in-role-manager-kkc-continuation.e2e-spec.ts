import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { ManagePeopleConstant } from '../../../page-objects/pages/manage-people/manage-people.constant';
import { ManagePeopleHelper } from '../../../page-objects/pages/manage-people/manage-people.helper';
import { ManagePeople1Helper } from '../../../page-objects/pages/manage-people/manage-people1.helper';
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
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-794
    it('Add a new Role without adding a value for Role Name - [22388268]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT

        StepLogger.caseId = 22388268;
        StepLogger.preCondition('Sign In as an admin user and navigate to Manage Roles page');
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
        StepLogger.step('Click on the radio button of the option of "Apply Role to"');
        await ManagePeopleHelper.clickOnEmployeedApplicationOption();
        StepLogger.verification('The selected radio button is enabled');
        await ManagePeopleHelper.verifyEmployeeApplicationOption();

        StepLogger.stepId(3);
        StepLogger.step('Input Description value in the "Description" textbox');
        const description = await RandomHelper.getRandomString(Constants.number.eight);
        await ManagePeopleHelper.typeRoleDescription(description);
        StepLogger.verification('The inputted value is displayed in the "Description" textbox');
        await ManagePeopleHelper.verifyRoleDescriptionValue(description);

        StepLogger.stepId(4);
        StepLogger.step('Select the Permission in the "Permission Available" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);
        StepLogger.verification('The Selected permission is highlighted');
        await ManagePeopleHelper.verifyHighlightedAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(5);
        StepLogger.step('Click on the ">>" button to move the selected permission to the Selected combobox');
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(6);
        StepLogger.step('Repeat step 4-5 to add another permission to the "Selected" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('A Webpage pop up is displayed with a message "Role Name Required"');
        await ManagePeopleHelper.verifyRoleNameRequiredPopup();

        StepLogger.stepId(8);
        StepLogger.step('Click "OK" button on the pop up page');
        await ManagePeopleHelper.clickOkButtonOnInformationRequiredPopup();
        StepLogger.verification('The Webpage is closed and the Role Manager is displayed');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.postCondition('Sign out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-801
    it('Remove a Permission to a Role - [22389052]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT

        StepLogger.caseId = 22389052;
        StepLogger.preCondition('Login as an Admin user, create a role and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        const roleName = await ManagePeopleHelper.createRoleAndAddExtraPermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Role');
        await ManagePeopleHelper.clickOnARole(roleName);
        StepLogger.verification('The Role Manager is displayed with the details of the Role');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on a permission on the "Selected" combo box');
        await ManagePeopleHelper.clickOnSelectedPermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);
        StepLogger.verification('The selected permission option is highlighted');
        await ManagePeopleHelper.verifyHighlightedSelectedPermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(3);
        StepLogger.step('Click the "<<" to remove the permission from the "Selected"  combo box section');
        await ManagePeopleHelper.clickOnPushLeftIcon();
        StepLogger.verification('The selected permission is moved to the "Permission Available" combo box');
        await ManagePeopleHelper.verifyAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

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
        StepLogger.step('Verify the permission removed are present in the "Permission Available" section of the Manage Roles page');
        StepLogger.verification('The Removed permission is displayed in the "Permission Available" section of the Manage Roles page');
        await ManagePeopleHelper.verifyAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.postCondition('Clean up and sign out');
        await ManagePeopleHelper.clickOnCancelButton();
        await ManagePeopleHelper.deleteRoleAndSignOut(roleName);
    });

    // Jira References - KNOV-795
    it('Add a new Role without adding value for Description - [22388269]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT

        StepLogger.caseId = 22388269;
        StepLogger.preCondition('Login as an Admin user and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        await ManagePeopleHelper.navigateToManageRolesPage();

        StepLogger.stepId(1);
        StepLogger.step('Verify the Manage Roles page is displayed with the following buttons "Submit", "Cancel", "Select"');
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
        await ManagePeopleHelper.typeRoleName(roleName);
        StepLogger.verification('The Role Name is displayed in the textbox');
        await ManagePeopleHelper.verifyRoleNameValue(roleName);

        StepLogger.stepId(4);
        StepLogger.step('Select the Permission in the "Permission Available" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);
        StepLogger.verification('The Selected permission is highlighted');
        await ManagePeopleHelper.verifyHighlightedAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(5);
        StepLogger.step('Click on the ">>" button to move the selected permission to the Selected combobox');
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(6);
        StepLogger.step('Repeat step 4-5 to add another permission to the "Selected" combobox');
        await ManagePeopleHelper.selectPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('A Webpage pop up is displayed with the message "Description Required"');
        await ManagePeopleHelper.verifyDescriptionRequiredPopup();

        StepLogger.stepId(8);
        StepLogger.step('Click "OK" button on the Webpage pop up');
        await ManagePeopleHelper.clickOkButtonOnInformationRequiredPopup();
        StepLogger.verification('The Role Manager page is displayed');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.postCondition('Sign out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-796
    it('Add a new Role without selecting a Permission - [22388271]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Feb 2019 19:32:21 GMT

        StepLogger.caseId = 22388271;
        StepLogger.preCondition('Sign In as an admin user and navigate to Manage Roles page');
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
        await ManagePeopleHelper.typeRoleName(roleName);
        StepLogger.verification('The Role Name is displayed in the textbox');
        await ManagePeopleHelper.verifyRoleNameValue(roleName);

        StepLogger.stepId(4);
        StepLogger.step('Input Description value in the "Description" textbox');
        const description = await RandomHelper.getRandomString(Constants.number.eight);
        await ManagePeopleHelper.typeRoleDescription(description);
        StepLogger.verification('The inputted value is displayed in the "Description" textbox');
        await ManagePeopleHelper.verifyRoleDescriptionValue(description);

        StepLogger.stepId(5);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('A Webpage is displayed with a message "Permissions Required"');
        await ManagePeopleHelper.verifyPermissionRequiredPopup();

        StepLogger.stepId(6);
        StepLogger.step('Click the "OK" button on the Webpage pop up page');
        await ManagePeopleHelper.clickOkButtonOnInformationRequiredPopup();
        StepLogger.verification('The Webpage Pop up page is closed and Role Manager is displayed');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.postCondition('Sign out');
        await AdminLoginPageHelper.logout(true);
    });

    // Jira References - KNOV-799
    it('Add a member to a Role - [22388276]', async () => {
        // Auto generated by aurea-automation - util on Wed, 27 Feb 2019 18:15:34 GMT

        StepLogger.caseId = 22388276;
        StepLogger.preCondition('Login as an Admin user, create a role and navigate to Role Manage KKC page');
        await AdminLoginPageHelper.loginAsAdmin();
        const roleName = await ManagePeopleHelper.createRole();

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Role');
        await ManagePeopleHelper.clickOnARole(roleName);
        StepLogger.verification('The Role Manager is displayed with the details of the Role');
        await ManagePeopleHelper.verifyRoleDetailsFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select"button beside the Members section');
        await ManagePeopleHelper.clickOnSelectButton();
        StepLogger.verification('The Select Users pop up page is displayed');
        await ManagePeople1Helper.verifySelectUsersPopupDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click the "Show All" button');
        await ManagePeopleHelper.clickOnShowAllButton();
        StepLogger.verification('All the list of the Users available is displayed in the "Users" section of the page');
        await ManagePeopleHelper.verifyUsersListDisplayedFromFindUsersPopup();

        StepLogger.stepId(4);
        StepLogger.step('Click on the checkbox of the desired Users to select them');
        await ManagePeople1Helper.selectUserFromFindUsersPopup(CredentialsHelper.admin.username);
        StepLogger.verification('The selected users are displayed in the "Selected Users" section of the page');
        await ManagePeople1Helper.verifyUserDisplayedInSelectedUsersList(CredentialsHelper.admin.username);

        StepLogger.stepId(5);
        StepLogger.step('Click on "OK" button');
        await ManagePeople1Helper.clickOkFromSelectUsersForm();
        StepLogger.verification('The Select Users page is closed and the number of Users is displayed on the Manage Roles page');
        await ManagePeople1Helper.verfyPageIsClosedAndMemberCountUpdated(Constants.number.one);

        StepLogger.stepId(6);
        StepLogger.step('Click the "Submit" button');
        await ManagePeopleHelper.clickOnSubmitButton();
        StepLogger.verification('The Manage Roles page is closed');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.postCondition('Clean up');
        await ManagePeopleHelper.deleteRole(roleName);
    });

    // Jira References - KNOV-792
    it('Cancel the Adding a new Role Manager using the Cancel button - [22383871]', async () => {
        // Auto generated by aurea-automation - util on Wed, 27 Feb 2019 18:15:34 GMT

        StepLogger.caseId = 22383871;
        StepLogger.preCondition('Navigate to Manage Roles page');
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
        StepLogger.step('Input role name in the "Role Name" textbox');
        const name = await RandomHelper.getRandomString();
        await ManagePeopleHelper.typeRoleName(name);
        StepLogger.verification('The Role Name is displayed in the textbox');
        await ManagePeopleHelper.verifyRoleNameValue(name);

        StepLogger.stepId(3);
        StepLogger.step('Input Description value in the "Description" textbox');
        const description = await RandomHelper.getRandomString();
        await ManagePeopleHelper.typeRoleDescription(description);
        StepLogger.verification('The inputted value is displayed in the "Description" textbox');
        await ManagePeopleHelper.verifyRoleDescriptionValue(description);

        StepLogger.stepId(4);
        StepLogger.step('Select the Permission in the "Permission Available" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(
            ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);
        StepLogger.verification('The Selected permission is highlighted');
        await ManagePeopleHelper.verifyHighlightedAvailablePermission(
            ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(5);
        StepLogger.step('Click on the ">>" button to move the selected permission to the Selected combobox');
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.analyticsDateConfigurationManager);

        StepLogger.stepId(6);
        StepLogger.step('Repeat step 4-5 to add another permission to the "Selected" combobox');
        await ManagePeopleHelper.clickOnAvailablePermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);
        await ManagePeopleHelper.clickOnPushRightIcon();
        StepLogger.verification('The selected permission is moved to the "Selected" combobox');
        await ManagePeopleHelper.verifySelectedPermission(ManagePeopleConstant.availablePermissions.manageEmailTemplates);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Cancel" button');
        await ManagePeopleHelper.clickOnCancelButton();
        StepLogger.verification('A Webpage pop up page is displayed with a message "Do you want to save changes made to this Role?"');
        await ManagePeopleHelper.verifyDoYouWantToSavedPopupDisplayed();

        StepLogger.stepId(8);
        StepLogger.step('Click on "No" button on the pop up page');
        await ManagePeopleHelper.clickNoButtonOnDoYouWantToSavePopup();
        StepLogger.verification('The Webpage is closed and the Manage Roles page is closed and the role is not created');
        await ManagePeopleHelper.verifyRoleManagerKkcDisplayed();

        StepLogger.stepId(9);
        StepLogger.step('Verify the Role is not created');
        StepLogger.verification('The Role is not saved');
        await ManagePeople1Helper.verifyRoleNotDisplayedInTheList(name);
    });
});