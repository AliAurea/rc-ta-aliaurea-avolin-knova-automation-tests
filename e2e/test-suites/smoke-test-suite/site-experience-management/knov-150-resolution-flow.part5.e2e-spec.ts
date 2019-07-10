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

    // Jira References - KNOV-1793
    it(`Validation of the admin user editing the resolution flow that was copied from an existing one for
        resolution flow before creation - [22423400]`, async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 11:16:04 GMT
        StepLogger.caseId = 22423400;
        const resolutionFlow = `${PageHelper.getUniqueId()}${ResolutionFlowConstant.labels.test}`;
        const copy = `${ResolutionFlowConstant.labels.copy}${resolutionFlow}`;

        StepLogger.preCondition('Create a Resolution Flow');
        const moderator = await ResolutionFlowHelper.createResolutionFlow(resolutionFlow);

        StepLogger.stepId(1);
        StepLogger.step('For an existing resolution flow click the copy symbol available in the "Copy" field.');
        await ResolutionFlowHelper.clickCopyResolutionFlow(resolutionFlow);
        StepLogger.verification('The "Copy Resflow Dialog" message box should be displayed.');
        await ResolutionFlowHelper.verifyCopyDialog();

        StepLogger.stepId(2);
        StepLogger.step('Enter a unique name in the "Name:" field and click the OK button.');
        await ResolutionFlowHelper.enterCopyNameAndClickOk(copy);
        StepLogger.verification(`The "Builder" tab should be displayed for the user with the name provided along with the details
            of the resolution flow selected in step 1.`);
        await ResolutionFlowHelper.verifyBuilderTabWithValues(copy, moderator);

        StepLogger.stepId(3);
        StepLogger.step(`Click the drop down list of the "Community" field and select the "Select --->" option from the list then execute
            step 1 to 4 of [C22409860] for editing the name and moderator`);
        const values = await ResolutionFlowHelper.selectModeratorAndCommunity();
        StepLogger.verification(`The "Moderator" popup window should be closed and the user should be navigated to the "Builder" tab of
            "Resolution Flow Designer" with the selected moderators displayed next to the "Select" button of the "Moderator:" field.`);
        await ResolutionFlowHelper.verifySelectedModerator(values.moderator);

        StepLogger.stepId(4);
        StepLogger.step(`Execute step 6 to 8 of [C22409868] for editing the values of "Display Description", "Internal Description",
            "Timer" and "Community" fields.`);
        await ResolutionFlowHelper.enterDescriptionFieldsAndTimer(copy);
        StepLogger.verification(`The updated values should be displayed in the "Display Description", "Internal Description", "Timer"
            and "Community" fields.`);
        await ResolutionFlowHelper.verifyDescriptionFieldsAndTimer(copy);

        StepLogger.stepId(5);
        StepLogger.step('Click the "Save" button.');
        await ResolutionFlowHelper.clickSaveButton();
        StepLogger.verification(`A message as "Resolution Flow successfully saved (<Date & Time>)" should be displayed on the top of
            the page and the "last Modified:" field should also be updated with the system date and time.`);
        await ResolutionFlowHelper.verifyMessageAndLastModified();

        StepLogger.stepId(6);
        StepLogger.step('To verify, navigate to the "Inbox" tab and verify if the newly created resolution flow is displayed.');
        StepLogger.verification('The "Builder" tab should be closed and the created resolution flow should be displayed with the updated values.');
        await ResolutionFlowHelper.verifyCreatedResolutionFlow(copy, moderator, false, true, true, values.community);

        StepLogger.stepId(7);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1856
    it(`Validation of the admin user can discard the creation a new resolution flow by copying an existing one form the
        "Resolution Flow Manager" page - [22423328]`, async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 11:16:35 GMT
        StepLogger.caseId = 22423328;
        const resolutionFlow = `${PageHelper.getUniqueId()}${ResolutionFlowConstant.labels.test}`;

        StepLogger.preCondition('Create a Resolution Flow');
        await ResolutionFlowHelper.createResolutionFlow(resolutionFlow);

        StepLogger.stepId(1);
        StepLogger.step('For an existing resolution flow click the copy symbol available in the "Copy" field.');
        await ResolutionFlowHelper.clickCopyResolutionFlow(resolutionFlow);
        StepLogger.verification('The "Copy Resflow Dialog" message box should be displayed.');
        await ResolutionFlowHelper.verifyCopyDialog();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Cancel" button.');
        await ResolutionFlowPage.copyDialog.cancelBtn.clickButton();
        StepLogger.verification(`The "Copy Resflow Dialog" message box should be closed and the user should be navigated to the
            "Inbox" tab of the "Resolution Flow Manager" page.`);
        await ResolutionFlowHelper.verifyPageContent();

        StepLogger.stepId(3);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1789
    it(`Validation of the error message when admin user attempt to create a resolution flow with an existing name using
        copy feature - [22423338]`, async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 11:17:00 GMT
        const resolutionFlow = `${PageHelper.getUniqueId()}${ResolutionFlowConstant.labels.test}`;

        StepLogger.preCondition('Create a Resolution Flow');
        await ResolutionFlowHelper.createResolutionFlow(resolutionFlow);

        StepLogger.caseId = 22423338;
        StepLogger.stepId(1);
        StepLogger.step('For an existing resolution flow click the copy symbol available in the "Copy" field.');
        await ResolutionFlowHelper.clickCopyResolutionFlow(resolutionFlow);
        StepLogger.verification('The "Copy Resflow Dialog" message box should be displayed.');
        await ResolutionFlowHelper.verifyCopyDialog();

        StepLogger.stepId(2);
        StepLogger.step('Enter an existing resflow name in the "Name:" field and click the OK button.');
        await ResolutionFlowHelper.enterCopyNameAndClickOk(resolutionFlow);
        StepLogger.verification(`The "--Webpage Dialog" message box with the message as "A Resolution Flow with this name
            already exists. Please enter a different name." should be displayed.`);
        await ResolutionFlowHelper.verifyDuplicateNameWindow();

        StepLogger.stepId(3);
        StepLogger.step('Click the OK button.');
        await ResolutionFlowHelper.clickOkButtonWindow();
        StepLogger.verification('The "Copy Resflow Dialog" message box should be displayed.');
        await ResolutionFlowHelper.verifyCopyDialog();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Cancel" button.');
        await ResolutionFlowPage.copyDialog.cancelBtn.clickButton();
        StepLogger.verification(`The "Copy Resflow Dialog" message box should be closed and the user should be navigated to
            the "Inbox" tab of the "Resolution Flow Manager" page.`);
        await ResolutionFlowHelper.verifyPageContent();

        StepLogger.stepId(5);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1790
    it('Validation of the admin user re-ordering the available resolution flows in the "Resolution Flow Manager" page - [22423346]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 11:17:17 GMT
        StepLogger.caseId = 22423346;

        StepLogger.preCondition('Navigate to Resolution Flow');
        await ResolutionFlowHelper.navigateToResolutionFlow();
        const resolutionFlow = await ResolutionFlowHelper.getResolutionFlowByIndex(Constants.number.one);

        StepLogger.stepId(1);
        StepLogger.step('Click the "Reorder" button available at the bottom of the page.');
        await ResolutionFlowPage.buttons.reorder.clickButton();
        StepLogger.verification(`The "Reorder Resolution Flows" window should be displayed with the available resolution flows
            displayed in the same order as in the "Inbox" tab.`);
        await ResolutionFlowHelper.verifyReorderModalDisplayed(true);

        StepLogger.stepId(2);
        StepLogger.step('Click on one of the resolution flow name from the list and click the "up arrow" option.');
        let initialOrder = await ResolutionFlowHelper.moveResolutionFlow(resolutionFlow);
        StepLogger.verification('The selected resolution flow should be moved one step upward.');
        await ResolutionFlowHelper.verifyItemsReorderedOnReorderModal(initialOrder);

        StepLogger.stepId(3);
        StepLogger.step('Click on another resolution flow name from the list and click the "down arrow" option.');
        initialOrder = await ResolutionFlowHelper.moveResolutionFlow(resolutionFlow, false);
        StepLogger.verification('The selected resolution flow should be moved one step downward.');
        await ResolutionFlowHelper.verifyItemsReorderedOnReorderModal(initialOrder);

        StepLogger.stepId(4);
        StepLogger.step('Click the "OK" button.');
        await ResolutionFlowPage.reorder.ok.clickButton();
        StepLogger.verification(`The "Copy Resflow Dialog" message box should be closed and the user should be navigated to the
            "Inbox" tab of the "Resolution Flow Manager" page.`);
        await ResolutionFlowHelper.verifyInboxTab(true);

        StepLogger.stepId(5);
        StepLogger.step('Verify if the resolution flows are displayed in the order as made in step 2 and 3.');
        StepLogger.verification('The resolution flows should be displayed in the order as made in step 2 and 3.');
        await ResolutionFlowHelper.verifyResolutionFlowsReordered(initialOrder);

        StepLogger.stepId(6);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1791
    it('Validation of the admin user validating the available resolution flows in the "Resolution Flow Manager" page - [22423387]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 11:17:33 GMT
        StepLogger.caseId = 22423387;

        StepLogger.preCondition('Navigate to Resolution Flow');
        await ResolutionFlowHelper.navigateToResolutionFlow();

        StepLogger.stepId(1);
        StepLogger.step('Click the "Validate" button available at the bottom of the page.');
        await ResolutionFlowPage.buttons.validate.clickButton();
        StepLogger.verification(`The validation for any invalid condition should happen and the invalid conditions if any should be
            displayed else a message as "All Resolution Flows passed the validation." message should be displayed in the
            "--Webpage Dialog" message box.`);
        await ResolutionFlowHelper.verifyPassedValidationWindow();

        StepLogger.stepId(2);
        StepLogger.step('Click the "OK" button.');
        await ResolutionFlowHelper.clickOkButtonPassedValidationWindow();
        StepLogger.verification(`The "Copy Resflow Dialog" message box should be closed and the user should be navigated to the
            "Inbox" tab of the "Resolution Flow Manager" page.`);
        await ResolutionFlowHelper.verifyInboxTab(true);

        StepLogger.stepId(3);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-1792
    it('Validation of the admin user setting the display of existing resolution flows in the "Resolution Flow Manager" page - [22423396]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 11:17:50 GMT
        StepLogger.caseId = 22423396;

        StepLogger.preCondition('Navigate to Resolution Flow');
        await ResolutionFlowHelper.navigateToResolutionFlow();

        StepLogger.stepId(1);
        StepLogger.step('Verify if a drop down option is displayed at the top right end of the page.');
        StepLogger.verification('A drop down option with the "Show Active" option selected as default should be displayed at the top right end of the page.');
        await ResolutionFlowHelper.verifyShowDropdown();

        StepLogger.stepId(2);
        StepLogger.step(`Click the drop down option and verify if the below options are displayed in the drop down list option.
            - Show Inactive
            - Show All`);
        await ResolutionFlowPage.show.showDropdown.clickButton();
        StepLogger.verification(`The below options should be displayed in the drop down list option.
            - Show Inactive
            - Show All`);
        await ResolutionFlowHelper.verifyShowDropdownOptions();

        StepLogger.stepId(3);
        StepLogger.step('Click the "Show Inactive" option.');
        await ResolutionFlowHelper.selectShowOption(ResolutionFlowConstant.showDropdown.showInactive);
        StepLogger.verification(`After refresh the list of available inactive resolution flows should be displayed (if any) else a message
            as "No data to display" should be displayed.`);
        await ResolutionFlowHelper.verifyResolutionFlowList();

        StepLogger.stepId(4);
        StepLogger.step('From the drop down option, select the "Show All" option.');
        await ResolutionFlowHelper.selectShowOption(ResolutionFlowConstant.showDropdown.showAll);
        StepLogger.verification('The list of all active and inactive resolution flows should be displayed.');
        await ResolutionFlowHelper.verifyResolutionFlowList();

        StepLogger.stepId(5);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });
});