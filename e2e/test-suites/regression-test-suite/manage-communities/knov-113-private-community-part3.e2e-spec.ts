import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { CommunitiesManagerConstant } from '../../../page-objects/pages/manage-communities/communities-manager/communities-manager.constants';
import { CommunitiesManagerHelper } from '../../../page-objects/pages/manage-communities/communities-manager/communities-manager.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = AdminLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.logout();
        await AdminLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-1612
    it('Add a New User(s) as a member of a Private Community - [22288657]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:52:02 GMT
        StepLogger.caseId = 22288657;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create Private Community with user');
        await CommunitiesManagerHelper.createPrivateCommunityWithUser(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the Private Community Record on the Manage Communities page');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community is highlighted and the following buttons are displayed at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Properties" button at the bottom of the page');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The Modal page of the Private Community is opened with the details of the Private Community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on "View / Edit Users" on the Private Community page');
        await CommunitiesManagerHelper.clickEditUserPrivate();
        StepLogger.verification('The "Select Users/Groups" page is opened');
        await CommunitiesManagerHelper.verifyUsersGroupsDialog(true);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Show All" button inside the "Users" section');
        await CommunitiesManagerHelper.clickShowAllUsers();
        StepLogger.verification('The list of all the User is displayed');
        await CommunitiesManagerHelper.verifyUsersList();

        StepLogger.stepId(5);
        StepLogger.step('Click on the Checkbox of the user(s) to add');
        const user = await CommunitiesManagerHelper.selectLastSearchedUser();
        StepLogger.verification('The User(s) selected is displayed in the "Selected Users & Groups" section of the page');
        await CommunitiesManagerHelper.verifySelectedUserGroup(user);

        StepLogger.stepId(6);
        StepLogger.step('Click "OK" button');
        await CommunitiesManagerHelper.clickOkUsersGroupsButton();
        StepLogger.verification('The "Select Users/Groups" page is closed and the Private Community page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(7);
        StepLogger.step('Click "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The Private Community is added with the list of User');
        await CommunitiesManagerHelper.verifyEditedCommunity(communityName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName, false);
    });

    // Jira References - KNOV-1613
    it('Add a new Group(s) as a member of a Private Community - [22288658]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:52:02 GMT
        StepLogger.caseId = 22288658;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create Private Community with user');
        await CommunitiesManagerHelper.createPrivateCommunityWithUser(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the Private Community Record on the Manage Communities page');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community is highlighted and the following buttons are displayed at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Properties" button at the bottom of the page');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The Modal page of the Private Community is opened with the details of the Private Community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on "View / Edit Users" on the Private Community page');
        await CommunitiesManagerHelper.clickEditUserPrivate();
        StepLogger.verification('The "Select Users/Groups" page is opened');
        await CommunitiesManagerHelper.verifyUsersGroupsDialog(true);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Show All" button inside the "Find Groups" section');
        await CommunitiesManagerHelper.clickShowAllGroups();
        StepLogger.verification('The list of all Groups is displayed');
        await CommunitiesManagerHelper.verifyGroupList();

        StepLogger.stepId(5);
        StepLogger.step('Click on the Checkbox of the Group(s) to add');
        const group = await CommunitiesManagerHelper.selectSearchedGroup();
        StepLogger.verification('The Group(s) selected is displayed in the "Selected Users & Groups" section of the page');
        await CommunitiesManagerHelper.verifySelectedUserGroup(group);

        StepLogger.stepId(6);
        StepLogger.step('Click "OK" button');
        await CommunitiesManagerHelper.clickOkUsersGroupsButton();
        StepLogger.verification('The "Select Users/Groups" page is closed and the Private Community page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(7);
        StepLogger.step('Click "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The Private Community is created with the list of group');
        await CommunitiesManagerHelper.verifyEditedCommunity(communityName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName, false);
    });

    // Jira References - KNOV-1614
    it('Remove User(s) as a member of a Private Community - [22288663]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:52:02 GMT
        StepLogger.caseId = 22288663;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create Private Community with user');
        await CommunitiesManagerHelper.createPrivateCommunityWithUser(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the Private Community Record on the Manage Communities page');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community is highlighted and the following buttons are displayed at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Properties" button at the bottom of the page');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The Modal page of the Private Community is opened with the details of the Private Community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on "View / Edit Users" on the Private Community page');
        await CommunitiesManagerHelper.clickEditUserPrivate();
        StepLogger.verification('The "Select Users/Groups" page is opened');
        await CommunitiesManagerHelper.verifyUsersGroupsDialog(true);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Minus" icon button inside the "Selected Users & Groups" section of the User(s) to remove');
        await CommunitiesManagerHelper.deleteMember();
        StepLogger.verification('The User(s) is remove from the List of User(s) in the "Selected Users & Groups" section');
        await CommunitiesManagerHelper.verifyDeletedMember();

        StepLogger.stepId(5);
        StepLogger.step('Click "OK" button');
        await CommunitiesManagerHelper.clickOkUsersGroupsButton();
        StepLogger.verification('The "Select Users/Groups" page is closed and the Private Community page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(6);
        StepLogger.step('Verify the Number of User on the page has reduced');
        StepLogger.verification('The Current member number has reduced');
        await CommunitiesManagerHelper.verifyNumberOfMembers();

        StepLogger.stepId(7);
        StepLogger.step('Click "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The Private Community is created with the list of user');
        await CommunitiesManagerHelper.verifyEditedCommunity(communityName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName, false);
    });

    // Jira References - KNOV-1615
    it('Remove a Group(s) as a member of a Private Community - [22288664]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:52:02 GMT
        StepLogger.caseId = 22288664;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create Private Community with user');
        await CommunitiesManagerHelper.createPrivateCommunityWithGroup(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the Private Community Record on the Manage Communities page');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community is highlighted and the following buttons are displayed at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Properties" button at the bottom of the page');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The Modal page of the Private Community is opened with the details of the Private Community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on "View / Edit Users" on the Private Community page');
        await CommunitiesManagerHelper.clickEditUserPrivate();
        StepLogger.verification('The "Select Users/Groups" page is opened');
        await CommunitiesManagerHelper.verifyUsersGroupsDialog(true);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Minus" icon button inside the "Selected Users & Groups" section of the User(s) to remove');
        await CommunitiesManagerHelper.deleteMember();
        StepLogger.verification('The User(s) is remove from the List of User(s) in the "Selected Users & Groups" section');
        await CommunitiesManagerHelper.verifyDeletedMember();

        StepLogger.stepId(5);
        StepLogger.step('Click "OK" button');
        await CommunitiesManagerHelper.clickOkUsersGroupsButton();
        StepLogger.verification('The "Select Users/Groups" page is closed and the Private Community page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(6);
        StepLogger.step('Verify the Number of User on the page has reduced');
        StepLogger.verification('The Current member number has reduced');
        await CommunitiesManagerHelper.verifyNumberOfMembers();

        StepLogger.stepId(7);
        StepLogger.step('Click "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The Private Community is created with the list of group');
        await CommunitiesManagerHelper.verifyEditedCommunity(communityName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName, false);
    });
});
