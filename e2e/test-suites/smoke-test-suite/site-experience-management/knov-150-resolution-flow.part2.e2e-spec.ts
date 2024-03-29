import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { ResolutionFlowConstant } from '../../../page-objects/pages/manage-site-experience/resolution-flow/resolution-flow.constants';
import { ResolutionFlowHelper } from '../../../page-objects/pages/manage-site-experience/resolution-flow/resolution-flow.helper';
import { ResolutionFlowPage } from '../../../page-objects/pages/manage-site-experience/resolution-flow/resolution-flow.po';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.smokeSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = AdminLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await AdminLoginPageHelper.logout(true);
        await PageHelper.switchToFirstTab();
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-1827
    it(`Validation of the admin user adding a new resolution flow by making it visible and entering values in the descriptions and
        timer fields along with the mandatory fields (Name and Moderator) - [22409867]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 11 Mar 2019 08:28:34 GMT
        StepLogger.caseId = 22409867;
        const resolutionFlow = `${ResolutionFlowConstant.labels.test}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Builder tab');
        await ResolutionFlowHelper.navigateToBuilderTab();

        StepLogger.stepId(1);
        StepLogger.step('Enter a valid and unique name in the "Name:" field.');
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        StepLogger.verification('User should be able to add a value in the "Name:" field.');
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Moderator:" field.');
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        StepLogger.verification('The "Moderator" popup window should be displayed.');
        await ResolutionFlowHelper.verifyModeratorDialog();

        StepLogger.stepId(3);
        StepLogger.step('Click the radio button of any moderator from the list displayed in the "Moderator" popup window.');
        const moderator = await ResolutionFlowHelper.selectModerator();
        StepLogger.verification('User should be able to select any moderator from the list displayed in the "Moderator" popup window.');
        await ResolutionFlowHelper.verifyModerator();

        StepLogger.stepId(4);
        StepLogger.step('Click the OK button.');
        await ResolutionFlowHelper.clickOkModeratorDialog();
        StepLogger.verification(`The "Moderator" popup window should be closed and the user should be navigated to the "Builder" tab of
            "Resolution Flow Designer" with the selected moderators displayed next to the "Select" button of the "Moderator:" field.`);
        await ResolutionFlowHelper.verifySelectedModerator(moderator);

        StepLogger.stepId(5);
        StepLogger.step('Check the check box available in the "Make Visible:" field.');
        await ResolutionFlowPage.builderTab.makeVisible.clickButton();
        StepLogger.verification('User should be able to check the check box available in the "Make Visible:" field.');
        await ResolutionFlowHelper.verifyMakeVisibleChecked();

        StepLogger.stepId(6);
        StepLogger.step(`Enter valid text in the "Display Description" and "Internal Description" fields and enter valid numeric value
            in the "Timer:" field.`);
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(resolutionFlow);
        StepLogger.verification('User should be able to enter valid values in the "Display Description", "Internal Description" and "Timer" fields.');
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(resolutionFlow);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Save" button.');
        await ResolutionFlowHelper.clickSaveButton();
        StepLogger.verification(`A message as "Resolution Flow successfully saved (<Date & Time>)" should be displayed on the top of the page and
            the "last Modified:" field should also be updated with the system date and time.`);
        await ResolutionFlowHelper.verifyMessageAndLastModified();

        StepLogger.stepId(8);
        StepLogger.step(`To verify, navigate to the "Inbox" tab and verify if the newly added resolution flow is displayed among the list of
            available resolution flows.`);
        StepLogger.verification(`The "Builder" tab should be closed and the newly added resolution flow should be displayed among the list of
            available resolution flows with the values in the "Name", "Description" (value of internal description), "Visible" (tick mark) and
            "Moderator" fields as entered in the previous steps.`);
        await ResolutionFlowHelper.verifyCreatedResolutionFlow(resolutionFlow, moderator, true, true);

        StepLogger.stepId(9);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1773
    it(`Validation of the admin user adding a new resolution flow by selecting an existing community from the list along
        with the other fields - [22409868]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 11 Mar 2019 08:28:35 GMT
        StepLogger.caseId = 22409868;
        const resolutionFlow = `${ResolutionFlowConstant.labels.test}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Builder tab');
        await ResolutionFlowHelper.navigateToBuilderTab();

        StepLogger.stepId(1);
        StepLogger.step('Enter a valid and unique name in the "Name:" field.');
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        StepLogger.verification('User should be able to add a value in the "Name:" field.');
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Moderator:" field.');
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        StepLogger.verification('The "Moderator" popup window should be displayed.');
        await ResolutionFlowHelper.verifyModeratorDialog();

        StepLogger.stepId(3);
        StepLogger.step('Click the radio button of any moderator from the list displayed in the "Moderator" popup window.');
        let moderator = await ResolutionFlowHelper.selectModerator();
        StepLogger.verification('User should be able to select any moderator from the list displayed in the "Moderator" popup window.');
        await ResolutionFlowHelper.verifyModerator();

        StepLogger.stepId(4);
        StepLogger.step('Click the OK button.');
        await ResolutionFlowHelper.clickOkModeratorDialog();
        StepLogger.verification(`The "Moderator" popup window should be closed and the user should be navigated to the "Builder" tab of
            "Resolution Flow Designer" with the selected moderators displayed next to the "Select" button of the "Moderator:" field.`);
        await ResolutionFlowHelper.verifySelectedModerator(moderator);

        StepLogger.stepId(5);
        StepLogger.step('Check the check box available in the "Make Visible:" field.');
        await ResolutionFlowPage.builderTab.makeVisible.clickButton();
        StepLogger.verification('User should be able to check the check box available in the "Make Visible:" field.');
        await ResolutionFlowHelper.verifyMakeVisibleChecked();

        StepLogger.stepId(6);
        StepLogger.step(`Enter valid text in the "Display Description" and "Internal Description" fields and enter
            valid numeric value in the "Timer:" field.`);
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(resolutionFlow);
        StepLogger.verification('User should be able to enter valid values in the "Display Description", "Internal Description" and "Timer" fields.');
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(resolutionFlow);

        StepLogger.stepId(7);
        StepLogger.step('In the "Community:" field click the drop down list and select an option from the list displayed.');
        await ResolutionFlowHelper.selectCommunityOption(ResolutionFlowConstant.builderTab.generalDiscussions);
        StepLogger.verification(`The selected option should be displayed in the "Community:" field and the
            "--Webpage Dialog" message box with the message as "The moderator for this resolution flow has been set to the
            Community"s moderator: "<set moderator>" should be displayed if the moderator selected is step 2 is not the set one for the selected community.
            Note: The message box will not be displayed if the moderator selected in step 2 is the set one for the selected community.`);
        const message = await ResolutionFlowHelper.verifyCommunityAndMessage(ResolutionFlowConstant.builderTab.generalDiscussions);

        StepLogger.stepId(8);
        StepLogger.step(`Click the OK button.
            Note: Skip this step if the message box is not displayed.`);
        if (message.length > Constants.number.zero) {
            await ResolutionFlowHelper.clickOkCommunityModeratorWindow();
        }
        StepLogger.verification(`The message box should be closed and the "Moderator:" field should be updated with values as mentioned in
            the message box of step 7.`);
        if (message.length > Constants.number.zero) {
            moderator = await ResolutionFlowHelper.verifyModeratorUpdated(message);
        }

        StepLogger.stepId(9);
        StepLogger.step('Click the "Save" button.');
        await ResolutionFlowHelper.clickSaveButton();
        StepLogger.verification(`A message as "Resolution Flow successfully saved (<Date & Time>)" should be displayed on the top of the page and
        the "last Modified:" field should also be updated with the system date and time.`);
        await ResolutionFlowHelper.verifyMessageAndLastModified();

        StepLogger.stepId(10);
        StepLogger.step(`To verify, navigate to the "Inbox" tab and verify if the newly added resolution flow is displayed among the list
            of available resolution flows.`);
        StepLogger.verification(`The "Builder" tab should be closed and the newly added resolution flow should be displayed among the list of
            available resolution flows with the values in the "Name", "Description" (value of internal description), "Visible" (tick mark),
            "Community used" and "Moderator" fields as entered in the previous steps.`);
        await ResolutionFlowHelper.verifyCreatedResolutionFlow(resolutionFlow, moderator, true, true, true);

        StepLogger.stepId(11);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1828
    it(`Validation of the admin user is able to discard the resolution flow creation using the "Cancel" button in
        the "Builder" tab of "Resolution Flow Designer" page - [22409897]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 11 Mar 2019 08:28:35 GMT
        StepLogger.caseId = 22409897;
        const resolutionFlow = `${ResolutionFlowConstant.labels.test}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Builder tab');
        await ResolutionFlowHelper.navigateToBuilderTab();

        StepLogger.stepId(1);
        StepLogger.step('Enter a valid and unique name in the "Name:" field.');
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        StepLogger.verification('User should be able to add a value in the "Name:" field.');
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Moderator:" field.');
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        StepLogger.verification('The "Moderator" popup window should be displayed.');
        await ResolutionFlowHelper.verifyModeratorDialog();

        StepLogger.stepId(3);
        StepLogger.step('Click the radio button of any moderator from the list displayed in the "Moderator" popup window.');
        const moderator = await ResolutionFlowHelper.selectModerator();
        StepLogger.verification('User should be able to select any moderator from the list displayed in the "Moderator" popup window.');
        await ResolutionFlowHelper.verifyModerator();

        StepLogger.stepId(4);
        StepLogger.step('Click the OK button.');
        await ResolutionFlowHelper.clickOkModeratorDialog();
        StepLogger.verification(`The "Moderator" popup window should be closed and the user should be navigated to the "Builder" tab of
            "Resolution Flow Designer" with the selected moderators displayed next to the "Select" button of the "Moderator:" field.`);
        await ResolutionFlowHelper.verifySelectedModerator(moderator);

        StepLogger.stepId(5);
        StepLogger.step('Check the check box available in the "Make Visible:" field.');
        await ResolutionFlowPage.builderTab.makeVisible.clickButton();
        StepLogger.verification('User should be able to check the check box available in the "Make Visible:" field.');
        await ResolutionFlowHelper.verifyMakeVisibleChecked();

        StepLogger.stepId(6);
        StepLogger.step(`Enter valid text in the "Display Description" and "Internal Description" fields and enter valid
            numeric value in the "Timer:" field.`);
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(resolutionFlow);
        StepLogger.verification('User should be able to enter valid values in the "Display Description", "Internal Description" and "Timer" fields.');
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(resolutionFlow);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Cancel" button.');
        await ResolutionFlowPage.buttons.cancel.clickButton();
        StepLogger.verification(`The "--Webpage Dialog" message box should be displayed with the message as
            "Do you want to save the changes you made to this Resolution Flow?" along with the Yes, No and Cancel button should be displayed.`);
        await ResolutionFlowHelper.verifySaveChangesWindow();

        StepLogger.stepId(8);
        StepLogger.step('Click the "No" button.');
        await ResolutionFlowHelper.clickNoSaveChangesWindow();
        StepLogger.verification('The message box and the "Builder" tab should be closed and the user should be navigated to the "Inbox" tab.');
        await ResolutionFlowHelper.verifyBuilderTab();

        StepLogger.stepId(9);
        StepLogger.step('Verify if the newly added resolution flow is displayed among the list of available resolution flows.');
        StepLogger.verification('The newly added resolution flow should not be displayed in the list of available resolution flow.');
        await ResolutionFlowHelper.verifyResolutionFlowNotCreated(resolutionFlow);

        StepLogger.stepId(10);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1829
    it(`Validation of the admin user is able to create the resolution flow even on clicking the "Cancel" button in the "Builder"
        tab of "Resolution Flow Designer" page - [22409898]`, async () => {
        // Auto generated by aurea-automation - util on Tue, 12 Mar 2019 09:46:56 GMT
        StepLogger.caseId = 22409898;
        const resolutionFlow = `${ResolutionFlowConstant.labels.test}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Builder tab');
        await ResolutionFlowHelper.navigateToBuilderTab();

        StepLogger.stepId(1);
        StepLogger.step('Enter a valid and unique name in the "Name:" field.');
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        StepLogger.verification('User should be able to add a value in the "Name:" field.');
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Moderator:" field.');
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        StepLogger.verification('The "Moderator" popup window should be displayed.');
        await ResolutionFlowHelper.verifyModeratorDialog();

        StepLogger.stepId(3);
        StepLogger.step('Click the radio button of any moderator from the list displayed in the "Moderator" popup window.');
        const moderator = await ResolutionFlowHelper.selectModerator();
        StepLogger.verification('User should be able to select any moderator from the list displayed in the "Moderator" popup window.');
        await ResolutionFlowHelper.verifyModerator();

        StepLogger.stepId(4);
        StepLogger.step('Click the OK button.');
        await ResolutionFlowHelper.clickOkModeratorDialog();
        StepLogger.verification(`The "Moderator" popup window should be closed and the user should be navigated to the "Builder" tab of
            "Resolution Flow Designer" with the selected moderators displayed next to the "Select" button of the "Moderator:" field.`);
        await ResolutionFlowHelper.verifySelectedModerator(moderator);

        StepLogger.stepId(5);
        StepLogger.step('Check the check box available in the "Make Visible:" field.');
        await ResolutionFlowPage.builderTab.makeVisible.clickButton();
        StepLogger.verification('User should be able to check the check box available in the "Make Visible:" field.');
        await ResolutionFlowHelper.verifyMakeVisibleChecked();

        StepLogger.stepId(6);
        StepLogger.step('Enter valid text in the "Display Description" and "Internal Description" fields and enter valid numeric value in the "Timer:" field.');
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(resolutionFlow);
        StepLogger.verification('User should be able to enter valid values in the "Display Description", "Internal Description" and "Timer" fields.');
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(resolutionFlow);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Cancel" button.');
        await ResolutionFlowPage.buttons.cancel.clickButton();
        StepLogger.verification(`The "--Webpage Dialog" message box should be displayed with the message as
            "Do you want to save the changes you made to this Resolution Flow?" along with the Yes, No and Cancel button should be displayed.`);
        await ResolutionFlowHelper.verifySaveChangesWindow();

        StepLogger.stepId(8);
        StepLogger.step('Click the "Yes" button.');
        await ResolutionFlowHelper.clickYesSaveChangesWindow();
        StepLogger.verification('The message box and the "Builder" tab should be closed and the user should be navigated to the "Inbox" tab.');
        await ResolutionFlowHelper.verifyBuilderTab();

        StepLogger.stepId(9);
        StepLogger.step('Verify if the newly added resolution flow is displayed among the list of available resolution flows.');
        StepLogger.verification('The newly added resolution flow should be displayed in the list of available resolution flow.');
        await ResolutionFlowHelper.verifyCreatedResolutionFlowAfterSavingChanges(resolutionFlow);

        StepLogger.stepId(10);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1830
    it(`Validation of the admin user is able to continue with the resolution flow creation even on clicking the "Cancel" button in
        the "Builder" tab of "Resolution Flow Designer" page - [22409910]`, async () => {
        // Auto generated by aurea-automation - util on Tue, 12 Mar 2019 09:46:56 GMT
        StepLogger.caseId = 22409910;
        const resolutionFlow = `${ResolutionFlowConstant.labels.test}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;

        StepLogger.preCondition('Navigate to Builder tab');
        await ResolutionFlowHelper.navigateToBuilderTab();

        StepLogger.stepId(1);
        StepLogger.step('Enter a valid and unique name in the "Name:" field.');
        await ResolutionFlowHelper.enterResolutionFlowName(resolutionFlow);
        StepLogger.verification('User should be able to add a value in the "Name:" field.');
        await ResolutionFlowHelper.verifyResolutionFlowName(resolutionFlow);

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Moderator:" field.');
        await ResolutionFlowPage.builderTab.selectModerator.clickButton();
        StepLogger.verification('The "Moderator" popup window should be displayed.');
        await ResolutionFlowHelper.verifyModeratorDialog();

        StepLogger.stepId(3);
        StepLogger.step('Click the radio button of any moderator from the list displayed in the "Moderator" popup window.');
        const moderator = await ResolutionFlowHelper.selectModerator();
        StepLogger.verification('User should be able to select any moderator from the list displayed in the "Moderator" popup window.');
        await ResolutionFlowHelper.verifyModerator();

        StepLogger.stepId(4);
        StepLogger.step('Click the OK button.');
        await ResolutionFlowHelper.clickOkModeratorDialog();
        StepLogger.verification(`The "Moderator" popup window should be closed and the user should be navigated to the "Builder" tab of
            "Resolution Flow Designer" with the selected moderators displayed next to the "Select" button of the "Moderator:" field.`);
        await ResolutionFlowHelper.verifySelectedModerator(moderator);

        StepLogger.stepId(5);
        StepLogger.step('Check the check box available in the "Make Visible:" field.');
        await ResolutionFlowPage.builderTab.makeVisible.clickButton();
        StepLogger.verification('User should be able to check the check box available in the "Make Visible:" field.');
        await ResolutionFlowHelper.verifyMakeVisibleChecked();

        StepLogger.stepId(6);
        StepLogger.step('Enter valid text in the "Display Description" and "Internal Description" fields and enter valid numeric value in the "Timer:" field.');
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(resolutionFlow);
        StepLogger.verification('User should be able to enter valid values in the "Display Description", "Internal Description" and "Timer" fields.');
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(resolutionFlow);

        StepLogger.stepId(7);
        StepLogger.step('Click the "Cancel" button.');
        await ResolutionFlowPage.buttons.cancel.clickButton();
        StepLogger.verification(`The "--Webpage Dialog" message box should be displayed with the message as
            "Do you want to save the changes you made to this Resolution Flow?" along with the Yes, No and Cancel button should be displayed.`);
        await ResolutionFlowHelper.verifySaveChangesWindow();

        StepLogger.stepId(8);
        StepLogger.step('Click the "Cancel" button.');
        await ResolutionFlowHelper.clickCancelSaveChangesWindow();
        StepLogger.verification(`The message box should be closed and the "Builder" tab of the "Resolution Floe Designer" page should be displayed along with
            the values as entered in previous steps.`);
        await ResolutionFlowHelper.verifyBuilderTabWithValues(resolutionFlow, moderator);

        StepLogger.stepId(9);
        StepLogger.step('Click the "Save" button.');
        await ResolutionFlowHelper.clickSaveButton();
        StepLogger.verification(`A message as "Resolution Flow successfully saved (<Date & Time>)" should be displayed on the top of the page and
            the "last Modified:" field should also be updated with the system date and time.`);
        await ResolutionFlowHelper.verifyMessageAndLastModified();

        StepLogger.stepId(10);
        StepLogger.step(`To verify, navigate to the "Inbox" tab and verify if the newly added resolution flow is displayed among the list of available
            resolution flows.`);
        StepLogger.verification('The newly added resolution flow should be displayed in the list of available resolution flow.');
        await ResolutionFlowHelper.verifyCreatedResolutionFlow(resolutionFlow, moderator);

        StepLogger.stepId(11);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });
});
