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

    // Jira References - KNOV-1594
    it('Create a Private Community at the top level of the hierarchy - [22271692]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22271692;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Private Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input the name of the Private Community in the "Name" text box');
        await CommunitiesManagerHelper.enterPrivateCommunityName(communityName);
        StepLogger.verification('The Name value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityName(communityName);

        StepLogger.stepId(3);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(communityName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Moderator" button');
        await CommunitiesManagerHelper.clickSelectModeratorPrivate();
        StepLogger.verification('The Moderator selection modal is opened');
        await CommunitiesManagerHelper.verifyModeratorDialogPrivate();

        StepLogger.stepId(5);
        StepLogger.step('Click on the checkbox of the desired Moderator(s) and click "Ok" button');
        const moderator = await CommunitiesManagerHelper.selectModeratorAndClickOkPrivate();
        StepLogger.verification('The Selected Moderators are displayed on the New Private Community creation pop up page');
        await CommunitiesManagerHelper.verifySelectedModeratorPrivate(moderator);

        StepLogger.stepId(6);
        StepLogger.step('Click on the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The New Community creation modal is closed and the Private Community is created successfully');
        await CommunitiesManagerHelper.verifyCreatedCommunity(communityName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName);
    });

    // Jira References - KNOV-1595
    it('Create a Private Community on a selected Community Category - [22271693]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22271693;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;
        const categoryName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create community subcategory');
        await CommunitiesManagerHelper.createSubcategory(categoryName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Category to create a community under');
        await CommunitiesManagerHelper.selectSubcategory(categoryName);
        StepLogger.verification(`The Category is selected with name displayed at the bottom of the page and the following button are visible
            "Create Subcategory"
            "Create Community"
            "Create Private Community"
            "Rename"
            "Delete"`);
        await CommunitiesManagerHelper.verifySubcategorySelected(categoryName);

        StepLogger.stepId(2);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Input the name of the Community in the "Name" text box');
        await CommunitiesManagerHelper.enterPrivateCommunityName(communityName);
        StepLogger.verification('The Name value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityName(communityName);

        StepLogger.stepId(4);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(communityName);

        StepLogger.stepId(5);
        StepLogger.step('Click on the "Moderator" button');
        await CommunitiesManagerHelper.clickSelectModeratorPrivate();
        StepLogger.verification('The Moderator selection modal is opened');
        await CommunitiesManagerHelper.verifyModeratorDialogPrivate();

        StepLogger.stepId(6);
        StepLogger.step('Click on the checkbox of the desired Moderator(s) and click "Ok" button');
        const moderator = await CommunitiesManagerHelper.selectModeratorAndClickOkPrivate();
        StepLogger.verification('The Selected Moderators are displayed on the New Private Community creation pop up page');
        await CommunitiesManagerHelper.verifySelectedModeratorPrivate(moderator);

        StepLogger.stepId(7);
        StepLogger.step('Click on the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The New Community creation modal is closed and the Private Community is created successfully');
        await CommunitiesManagerHelper.verifyCreatedCommunity(communityName);

        StepLogger.postCondition('Delete category and community');
        await CommunitiesManagerHelper.deleteCategoryAndCommunity(categoryName, communityName);
    });

    // Jira References - KNOV-1596
    it('Create a Private Community with a customized Template Page - [22271694]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22271694;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Private Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input the name of the Community in the "Name" text box');
        await CommunitiesManagerHelper.enterPrivateCommunityName(communityName);
        StepLogger.verification('The Name value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityName(communityName);

        StepLogger.stepId(3);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(communityName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Moderator" button');
        await CommunitiesManagerHelper.clickSelectModeratorPrivate();
        StepLogger.verification('The Moderator selection modal is opened');
        await CommunitiesManagerHelper.verifyModeratorDialogPrivate();

        StepLogger.stepId(5);
        StepLogger.step('Click on the checkbox of the desired Moderator(s) and click "Ok" button');
        const moderator = await CommunitiesManagerHelper.selectModeratorAndClickOkPrivate();
        StepLogger.verification('The Selected Moderators are displayed on the New Private Community creation pop up page');
        await CommunitiesManagerHelper.verifySelectedModeratorPrivate(moderator);

        StepLogger.stepId(6);
        StepLogger.step(`Input the file location and filename of the customized user interface template relative to the Knova Installation folder in the
            Template Page textbox e.g ..\Software\selfservice`);
        await CommunitiesManagerHelper.enterInputTemplatePrivate(communityName);
        StepLogger.verification('The Inputted file location is displayed in the Template Page text box');
        await CommunitiesManagerHelper.verifyInputTemplatePrivate(communityName);

        StepLogger.stepId(7);
        StepLogger.step('Click on the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The New Community creation modal is closed and the Private Community is created successfully');
        await CommunitiesManagerHelper.verifyCreatedCommunity(communityName);

        // Step 8 has been covered in Step 7
        StepLogger.stepId(8);
        StepLogger.step('Verify the private community page is created');
        StepLogger.verification('The private community should be created successfully');

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName);
    });

    // Jira References - KNOV-1597
    it('Create a Private Community with a blank fields - [22271695]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22271695;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Private Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('A pop up alert is displayed with a message "Community name required"');
        await CommunitiesManagerHelper.verifyCommunityNameRequired();

        StepLogger.stepId(3);
        StepLogger.step('Click on the "OK" button');
        await CommunitiesManagerHelper.clickOkButton();
        StepLogger.verification('The Pop up alert page is closed and the Private Community Creation modal is displayed');
        await CommunitiesManagerHelper.verifyWindowClosed();
    });

    // Jira References - KNOV-1598
    it('Create a Private Community without providing a value for Name - [22271696]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22271696;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Private Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(communityName);

        StepLogger.stepId(3);
        StepLogger.step('Click on the "Moderator" button');
        await CommunitiesManagerHelper.clickSelectModeratorPrivate();
        StepLogger.verification('The Moderator selection modal is opened');
        await CommunitiesManagerHelper.verifyModeratorDialogPrivate();

        StepLogger.stepId(4);
        StepLogger.step('Click on the checkbox of the desired Moderator(s) and click "Ok" button');
        const moderator = await CommunitiesManagerHelper.selectModeratorAndClickOkPrivate();
        StepLogger.verification('The Selected Moderators are displayed on the New Private Community creation pop up page');
        await CommunitiesManagerHelper.verifySelectedModeratorPrivate(moderator);

        StepLogger.stepId(5);
        StepLogger.step('Click on the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('An alert page is displayed with a message "Community Name Required"');
        await CommunitiesManagerHelper.verifyCommunityNameRequired();

        StepLogger.stepId(6);
        StepLogger.step('Click the "OK" on the Alert pop up');
        await CommunitiesManagerHelper.clickOkButton();
        StepLogger.verification('The Community Creation modal is displayed');
        await CommunitiesManagerHelper.verifyWindowClosed();
    });

    // Jira References - KNOV-1599
    it('Create a Private Community without selecting a Moderator - [22271697]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22271697;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Private Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input a value for the Community name in the "Name" textbox');
        await CommunitiesManagerHelper.enterPrivateCommunityName(communityName);
        StepLogger.verification('The Name value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityName(communityName);

        StepLogger.stepId(3);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(communityName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('An alert page is displayed with a message "Please select the Moderator"');
        await CommunitiesManagerHelper.verifySelectModeratorWindow();

        StepLogger.stepId(5);
        StepLogger.step('Click the "OK" on the Alert pop up');
        await CommunitiesManagerHelper.clickOkButton();
        StepLogger.verification('The Community Creation modal is displayed');
        await CommunitiesManagerHelper.verifyWindowClosed();
    });

    // Jira References - KNOV-1609
    it('Create a Private Community with a Name Value already existing - [22286527]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 09:34:05 GMT
        StepLogger.caseId = 22286527;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.createPrivateCommunity(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Private Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreatePrivateCommunity();
        StepLogger.verification('The New Private Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input the name of the Private Community in the "Name" text box of a name of a Private Community already existing');
        await CommunitiesManagerHelper.enterPrivateCommunityName(communityName);
        StepLogger.verification('The Name value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityName(communityName);

        StepLogger.stepId(3);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(communityName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Moderator" button');
        await CommunitiesManagerHelper.clickSelectModeratorPrivate();
        StepLogger.verification('The Moderator selection modal is opened');
        await CommunitiesManagerHelper.verifyModeratorDialogPrivate();

        StepLogger.stepId(5);
        StepLogger.step('Click on the checkbox of the desired Moderator(s) and click "Ok" button');
        const moderator = await CommunitiesManagerHelper.selectModeratorAndClickOkPrivate();
        StepLogger.verification('The Selected Moderators are displayed on the New Private Community creation pop up page');
        await CommunitiesManagerHelper.verifySelectedModeratorPrivate(moderator);

        StepLogger.stepId(6);
        StepLogger.step('Click on the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('An alert pop up page is displayed with a message "Community with this name already exist"');
        await CommunitiesManagerHelper.verifyCommunityNameAlreadyExits(true);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName);
    });

    // Jira References - KNOV-1600
    it('Edit the Properties of a Private Community - [22271698]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 11:25:07 GMT
        StepLogger.caseId = 22271698;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;
        const editName = `${communityName}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.createPrivateCommunity(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Private Community record');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community record is highlighted and the following button is visible at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click on "Edit Properties" button');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The Community Modal is opened with the details of the Private Community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Edit the name value of the Private Community in the "Name" textbox');
        await CommunitiesManagerHelper.enterPrivateCommunityName(editName);
        StepLogger.verification('The Name value is changed in the "Name" textbox');
        await CommunitiesManagerHelper.verifyPrivateCommunityName(editName);

        StepLogger.stepId(4);
        StepLogger.step('Edit the Description text area');
        await CommunitiesManagerHelper.enterPrivateCommunityDescription(editName);
        StepLogger.verification('The Description value is changed');
        await CommunitiesManagerHelper.verifyPrivateCommunityDescription(editName);

        StepLogger.stepId(5);
        StepLogger.step('Click the "Submit" button');
        await CommunitiesManagerHelper.clickPrivateCommunitySubmitButton();
        StepLogger.verification('The Community modal pop up page is closed and the changes are saved successfully');
        await CommunitiesManagerHelper.verifyEditedCommunity(editName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(editName, false);
    });

    // Jira References - KNOV-1601
    it('Edit a the Visibility of a Private Community - [22271699]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 11:25:07 GMT
        StepLogger.caseId = 22271699;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.createPrivateCommunity(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Private Community record');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community record is highlighted and the following button is visible at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click on "Edit Visibility" button');
        await CommunitiesManagerHelper.clickEditVisibilityButton();
        StepLogger.verification('The Community modal is opened with the details of the Private Community');
        await CommunitiesManagerHelper.verifyEditVisibilityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click the "Visibility" dropdown box');
        await CommunitiesManagerHelper.clickVisibilityDropdown();
        StepLogger.verification('The List of Visibility is displayed in the dropdown list option');
        await CommunitiesManagerHelper.verifyVisibilityDropdown();

        StepLogger.stepId(4);
        StepLogger.step('Click on the desired option e.g. public / private');
        await CommunitiesManagerHelper.selectVisibility(CommunitiesManagerConstant.visibilityDropdown.public);
        StepLogger.verification('The option selected is displayed in the Visibility Drodown box');
        await CommunitiesManagerHelper.verifySelectedVisibility(CommunitiesManagerConstant.visibilityDropdown.public);

        StepLogger.stepId(5);
        StepLogger.step('Click the "Submit" button');
        await CommunitiesManagerHelper.clickVisibilitySubmitButton();
        StepLogger.verification('The modal pop up page is closed and the changes made saved successfully');
        await CommunitiesManagerHelper.verifyCommunityVisibility(CommunitiesManagerConstant.visibilityDropdown.public);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName, false);
    });

    // Jira References - KNOV-1602
    it('Edit the Home Page of a Private Community - [22271700]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 11:25:07 GMT
        StepLogger.caseId = 22271700;
        const communityName = `${CommunitiesManagerConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.createPrivateCommunity(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the name of the Public Community record');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The Private Community record is highlighted and the following button is visible at the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Home Page Options" button');
        await CommunitiesManagerHelper.clickEditHomePageButton();
        StepLogger.verification('A modal pop up page is displayed');
        await CommunitiesManagerHelper.verifyHomePageDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on the radio button of the desired option e.g "This Community category page uses this Template"');
        await CommunitiesManagerHelper.clickPageUsesTemplateButton();
        StepLogger.verification('The radio button is selected');
        await CommunitiesManagerHelper.verifyPageUsesTemplateSelected();

        StepLogger.stepId(4);
        StepLogger.step('Input the file location address in the text box');
        await CommunitiesManagerHelper.selectHomeTemplate(communityName);
        StepLogger.verification('The location address is displayed');
        await CommunitiesManagerHelper.verifyHomeTemplate(communityName);

        StepLogger.stepId(5);
        StepLogger.step('Click the "Submit"button');
        await CommunitiesManagerHelper.clickHomePageSubmitButton();
        StepLogger.verification('The modal pop up is closed and the changes made is saved successfully');
        await CommunitiesManagerHelper.verifyCommunityTemplate(communityName);

        StepLogger.postCondition('Delete community');
        await CommunitiesManagerHelper.deleteCommunity(communityName, false);
    });
});
