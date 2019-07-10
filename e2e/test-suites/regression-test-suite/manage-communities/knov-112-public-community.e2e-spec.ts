import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { CommunitiesManagerConstant } from '../../../page-objects/pages/manage-communities/communities-manager/communities-manager.constants';
import { CommunitiesManagerHelper } from '../../../page-objects/pages/manage-communities/communities-manager/communities-manager.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;
    let communityName = `${CommunitiesManagerConstant.labels.test}`;
    let categoryName = `${CommunitiesManagerConstant.labels.test}`;

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

    // Jira References - KNOV-1357
    it('Create a Collaboration Workflow - [22250221]', async () => {
        // Auto generated by aurea-automation - util on Wed, 06 Mar 2019 10:44:38 GMT
        StepLogger.caseId = 22250221;
        communityName = `${communityName}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create community with Managed Collaboration');
        await CommunitiesManagerHelper.createCommunityWithManagedCollaboration(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the Name of the public community with Managed Collaboration created');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The public community is highlighted and the following button are visible in the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Properties" button');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The pop page is displayed with the details of the public community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on the "Edit Collaboration Process"');
        await CommunitiesManagerHelper.clickEditCollaborationProcess();
        StepLogger.verification('The "Collaboration Workflow Editor" page is displayed');
        await CommunitiesManagerHelper.verifyCollaborationWorkflowDialog();

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Add Action" button');
        await CommunitiesManagerHelper.clickAddActionCollaborationWorkflowDialog();
        StepLogger.verification('A new section is added to the Collaboration Workflow Editor page');
        await CommunitiesManagerHelper.verifyActionAdded();

        StepLogger.stepId(5);
        StepLogger.step('Click "Save" button');
        await CommunitiesManagerHelper.clickSaveCollaborationWorkflowDialog();
        StepLogger.verification('The Action is saved successfully');
        await CommunitiesManagerHelper.verifyActionAdded();

        StepLogger.stepId(6);
        StepLogger.step('Click the "Cancel" button');
        await CommunitiesManagerHelper.clickCancelCollaborationWorkflowDialog();
        StepLogger.verification('The "Collaboration Workflow Editor" page is closed and the Community detail page is displayed');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(7);
        StepLogger.step('Click on the "Edit Collaboration Process"');
        await CommunitiesManagerHelper.clickEditCollaborationProcess();
        StepLogger.verification('The "Collaboration Workflow Editor" page is displayed');
        await CommunitiesManagerHelper.verifyCollaborationWorkflowDialog();

        StepLogger.stepId(8);
        StepLogger.step('Verify the additional section and Action is added to the "Collaboration Workflow Editor"');
        StepLogger.verification('The new section is displayed');
        await CommunitiesManagerHelper.verifyActionAdded();

        StepLogger.postCondition('Close windows and delete community');
        await CommunitiesManagerHelper.closeWindowsAndDeleteCommunity(communityName);
    });

    // Jira References - KNOV-1358
    it('Cancel the creation of Collaboration Workflow - [22250224]', async () => {
        // Auto generated by aurea-automation - util on Wed, 06 Mar 2019 10:44:38 GMT
        StepLogger.caseId = 22250224;
        communityName = `${communityName}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Create community with Managed Collaboration');
        await CommunitiesManagerHelper.createCommunityWithManagedCollaboration(communityName);

        StepLogger.stepId(1);
        StepLogger.step('Click on the Name of the public community with Managed Collaboration created');
        await CommunitiesManagerHelper.clickCommunity(communityName);
        StepLogger.verification(`The public community is highlighted and the following button are visible in the bottom of the page
            "Edit Properties"
            "Edit Visibility"
            "Edit Home Page Options"
            "Delete"`);
        await CommunitiesManagerHelper.verifyCommunityAndButtons(communityName);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Edit Properties" button');
        await CommunitiesManagerHelper.clickEditPropertiesButton();
        StepLogger.verification('The pop page is displayed with the details of the public community');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(3);
        StepLogger.step('Click on the "Edit Collaboration Process"');
        await CommunitiesManagerHelper.clickEditCollaborationProcess();
        StepLogger.verification('The "Collaboration Workflow Editor" page is displayed');
        await CommunitiesManagerHelper.verifyCollaborationWorkflowDialog();

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Add Action" button');
        await CommunitiesManagerHelper.clickAddActionCollaborationWorkflowDialog();
        StepLogger.verification('A new section is added to the Collaboration Workflow Editor page');
        await CommunitiesManagerHelper.verifyActionAdded();

        StepLogger.stepId(5);
        StepLogger.step('Click "Cancel" button');
        await CommunitiesManagerHelper.clickCancelCollaborationWorkflowDialog();
        StepLogger.verification('The "Collaboration Workflow Editor" page is closed and the Community detail page is displayed');
        await CommunitiesManagerHelper.verifyEditCommunityDialog(true);

        StepLogger.stepId(6);
        StepLogger.step('Click on the "Edit Collaboration Process"');
        await CommunitiesManagerHelper.clickEditCollaborationProcess();
        StepLogger.verification('The "Collaboration Workflow Editor" page is displayed');
        await CommunitiesManagerHelper.verifyCollaborationWorkflowDialog();

        StepLogger.stepId(7);
        StepLogger.step('Verify the additional section and Action is not added to the "Collaboration Workflow Editor"');
        StepLogger.verification('The new section is not added');
        await CommunitiesManagerHelper.verifyActionNotAdded();

        StepLogger.postCondition('Close windows and delete community');
        await CommunitiesManagerHelper.closeWindowsAndDeleteCommunity(communityName);
    });

    // Jira References - KNOV-1359
    it('Cancel the creation a Public Community - [22250226]', async () => {
        // Auto generated by aurea-automation - util on Wed, 06 Mar 2019 10:44:38 GMT
        StepLogger.caseId = 22250226;
        communityName = `${communityName}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Community" button at the bottom of the page');
        await CommunitiesManagerHelper.clickCreateCommunity();
        StepLogger.verification('The New Community creation Pop up page is displayed');
        await CommunitiesManagerHelper.verifyNewCommunityDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input the name of the Community in the "Name" text box');
        await CommunitiesManagerHelper.enterCommunityName(communityName);
        StepLogger.verification('The Name value is displayed');
        await CommunitiesManagerHelper.verifyCommunityName(communityName);

        StepLogger.stepId(3);
        StepLogger.step('Input a value for description in the "Description" textarea');
        await CommunitiesManagerHelper.enterCommunityDescription(communityName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifyCommunityDescription(communityName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the "Moderator" button');
        await CommunitiesManagerHelper.clickSelectModerator();
        StepLogger.verification('The Moderator selection modal is opened');
        await CommunitiesManagerHelper.verifyModeratorDialog();

        StepLogger.stepId(5);
        StepLogger.step('Click on the checkbox of the desired Moderator(s) and click "Ok" button');
        const moderator = await CommunitiesManagerHelper.selectModeratorAndClickOk();
        StepLogger.verification('The Selected Moderators are displayed on the New Community creation pop up page');
        await CommunitiesManagerHelper.verifySelectedModerator(moderator);

        StepLogger.stepId(6);
        StepLogger.step('Click on the "Cancel" button');
        await CommunitiesManagerHelper.clickCancelCommunity();
        StepLogger.verification('The New Community creation modal is closed and the Public Community is not created');
        await CommunitiesManagerHelper.verifyCommunityDeleted(communityName);
    });

    // Jira References - KNOV-1360
    it('Cancel the creation of a Community Category - [22250227]', async () => {
        // Auto generated by aurea-automation - util on Wed, 06 Mar 2019 10:44:38 GMT
        StepLogger.caseId = 22250227;
        categoryName = `${categoryName}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Communities Manager');
        await CommunitiesManagerHelper.navigateToCommunitiesManager(true);

        StepLogger.stepId(1);
        StepLogger.step('Click on the "Create Subcategory" at the button of the page');
        await CommunitiesManagerHelper.clickCreateSubcategory();
        StepLogger.verification('The Category creation modal pop up page is displayed');
        await CommunitiesManagerHelper.verifyCreateSubcategoryDialog(true);

        StepLogger.stepId(2);
        StepLogger.step('Input the name value in the "New Sub Category within Communities:" textbox e.g "QAMTEST"');
        await CommunitiesManagerHelper.enterSubcategoryName(categoryName);
        StepLogger.verification('The Name value is displayed in the textbox');
        await CommunitiesManagerHelper.verifySubcategoryName(categoryName);

        StepLogger.stepId(3);
        StepLogger.step('Input the description in the "Description" textbox');
        await CommunitiesManagerHelper.enterSubcategoryDescription(categoryName);
        StepLogger.verification('The inputted value is displayed');
        await CommunitiesManagerHelper.verifySubcategoryDescription(categoryName);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Cancel" button');
        await CommunitiesManagerHelper.clickCancelCategory();
        StepLogger.verification('The modal pop up is closed, the Community Manger"s page is displayed and the Category is not created');
        await CommunitiesManagerHelper.verifyCommunityDeleted(categoryName);
    });
});
