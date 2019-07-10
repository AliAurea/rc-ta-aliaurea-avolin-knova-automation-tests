import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { AdminLoginPageHelper } from '../../../page-objects/pages/admin-login-page/admin-login.helper';
import { CommonPageHelper } from '../../../page-objects/pages/common/common-page.helper';
import { AgentMicrositeHelper } from '../../../page-objects/pages/manage-site-experience/agent-microsite/agent-microsite.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.smokeSuite, () => {
    let loginPageHelper: AdminLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = AdminLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await AdminLoginPageHelper.logout(true);
        await PageHelper.switchToFirstTab();
        await loginPageHelper.goTo();
        await AdminLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-1469
    it(`Validation of the error message when adding a pagelet without an image by linking to
            "Community" with "Graphic" display - [22431311]`, async () => {
            // Auto generated by aurea-automation - util on Tue, 05 Mar 2019 14:28:04 GMT

            StepLogger.caseId = 22431311;
            StepLogger.preCondition('Navigate to Pagelete page');
            await AgentMicrositeHelper.navigateToNewPageletPage();

            StepLogger.stepId(1);
            StepLogger.step('Enter a unique pagelet name in the "Name:" field and click the "Add New Link" button.');
            const name = RandomHelper.getRandomString();
            await AgentMicrositeHelper.typePageletNameAndClickAddNewLink(name);
            StepLogger.verification(`A new recommendation should be added in the text area below
            the "Name" field and a new section should be displayed with the "Display What" tab selected as default.`);
            await AgentMicrositeHelper.verifyRecommendationLinkDisplayed();

            StepLogger.stepId(2);
            StepLogger.step('In the "Link To:" field click the radio button of "Community" option.');
            await AgentMicrositeHelper.clickOnComunityRadioButton();
            StepLogger.verification(`User should be able to select the "Community" option in the "Link To:" field
            and the below fields should be displayed in the "Display What" tab.
            - Link To
            - Document (radio button)
            - Community (radio button - selected)
            - Resolution Flow (radio button)
            - URL (radio button)
            - Nothing (radio button)
            - Currently Linked:
            - Community: (drop down option)
            - Display
            - Text (radio button)
            - Graphic (radio button)
            - Text:
            - Synopsis:`);
            await AgentMicrositeHelper.verifyLinkComunityFields();

            StepLogger.stepId(3);
            StepLogger.step(`'Click the drop down list option in the "Community:" field and select an option
            from the list displayed. (e.g, qa_addUser)`);
            const comunity = await AgentMicrositeHelper.selectAComunityDropdownRandomOption();
            StepLogger.verification(`The selected option should be displayed in the "Community" field
            and the same value should be displayed in the "Currently Linked:" and "Text:" fields.`);
            await AgentMicrositeHelper.verifyComunityDropdownSelectedValue(comunity);

            StepLogger.stepId(4);
            StepLogger.step('Click the "Graphic" option in the "Display:" field.');
            await AgentMicrositeHelper.clickOnGraphicRadioButton();
            StepLogger.verification(`User should be able to select the "Graphic" option
            in the "Display:" field and a "Add Image" button should be displayed below the "Display:" field.`);
            await AgentMicrositeHelper.verifyGraphicRadioButtonChecked();
            await AgentMicrositeHelper.verifyAddImageButtonDisplayed();

            StepLogger.stepId(5);
            StepLogger.step('Click the "Save" button.');
            await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
            StepLogger.verification(`The "--Webpage Dialog" message box with the message as "Recommendation
            <temp recommendation name> is to be displayed as a graphic,
            but no graphic has been specified." should be displayed.`);
            await AgentMicrositeHelper.verifyNoGraphicSpecifiedMessageDisplayedAncCloseIt();

            // Step 6 is covered in step 5
            StepLogger.stepId(6);
            StepLogger.step('Click the OK button.');
            StepLogger.verification('The  message box should be closed and the user should be navigated to the "New Pagelet" tab.');
            await AgentMicrositeHelper.verifyPoppupIsClosed();

            StepLogger.stepId(7);
            StepLogger.step('Click on the "Pagelets" tab.');
            await CommonPageHelper.switchToContentFrame();
            await AgentMicrositeHelper.clickOnPagelestTab();
            StepLogger.verification(`The "New Pagelet" tab should be closed and the "Pagelets" tab should be displayed
            with no new pagelet added among the list displayed.`);
            await AgentMicrositeHelper.verifyPageletNotDisplayed(name);

            StepLogger.stepId(8);
            StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
            await AdminLoginPageHelper.logout(true);
            StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
            await AdminLoginPageHelper.verifyUserNotLogged();
        });

    // Jira References - KNOV-1529
    it(`Validation of the admin user adding a new pagelet by linking to "Resolution Flow" for
    "Text" Display and default options selected in "Text" and "Synopsis" fields - [22435068]`, async () => {
            // Auto generated by aurea-automation - util on Tue, 05 Mar 2019 14:28:04 GMT

            StepLogger.caseId = 22435068;
            StepLogger.preCondition('Navigate to Pagelete page');
            await AgentMicrositeHelper.navigateToNewPageletPage();

            StepLogger.stepId(1);
            StepLogger.step('Enter a unique pagelet name in the "Name:" field and click the "Add New Link" button.');
            const name = RandomHelper.getRandomString();
            await AgentMicrositeHelper.typePageletNameAndClickAddNewLink(name);
            StepLogger.verification(`A new recommendation should be added in the text area below the
            "name" field and a new section should be displayed with the "Display What" tab selected as default.`);
            await AgentMicrositeHelper.verifyRecommendationLinkDisplayed();

            StepLogger.stepId(2);
            StepLogger.step('In the "Display What" tab select the radio button of the "Resolution Flow" option in the "Link To:" field.');
            await AgentMicrositeHelper.clickOnResolutionFlowRadioButton();
            StepLogger.verification('User should be able to select the "Resolution Flow" option in the "Link To:" field.');
            await AgentMicrositeHelper.verifyResolutionFlowRadioButtonChecked();

            StepLogger.stepId(3);
            StepLogger.step(`Click the drop down list of "Resolution Flow:" field and select an option
            from the list displayed. (e.g, TD_Community248608)`);
            const resolution = await AgentMicrositeHelper.selectAResolutionFlowDropdownRandomOption();
            StepLogger.verification('The selected option should be displayed in the "Resolution Flow:" field.');
            await AgentMicrositeHelper.verifySelectedResolutionFlowOption(resolution);

            StepLogger.stepId(4);
            StepLogger.step(`Verify if the below options are selected as default in the mentioned fields.
            - "Text" option in "Display" field.
            - "Always Use Resolution Flow Name " option in Text:" field.
            - "Always Use Resolution Flow Description" option in the "Synopsis" field.`);
            StepLogger.verification(`The below options should be selected as default in the mentioned fields.
            - "Text" option in "Display" field.
            - "Always Use Resolution Flow Name " option in Text:" field.
            - "Always Use Resolution Flow Description" option in the "Synopsis" field.`);
            await AgentMicrositeHelper.veriryResolutionFlowDefaultSelectedOptions();

            StepLogger.stepId(5);
            StepLogger.step('Click the "Save" button.');
            await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
            StepLogger.verification(`The selected resolution flow name should be added to the text area below
            the "Name:" field with a  success message as "Pagelet has been succesfully saved." should be
            displayed on the top of the page and an ID should be auto set for the pagelet in the "ID:"
            field along with the tab name changed to the name provided for the pagelet.`);
            await AgentMicrositeHelper.verifySavedPageletMessagePageletNameAtTheTopAndTextFieldValue(name, resolution);

            StepLogger.stepId(6);
            StepLogger.step(`To verify, click on the "Pagelets" tab and verify if the newly added pagelet is
            displayed in the list of available pagelets.`);
            await AgentMicrositeHelper.clickOnPagelestTab();
            StepLogger.verification(`The <pagelet name>" tab should be closed then in the "Pagelets" tab the
            newly added pagelet should be displayed among the list of available pagelets with the "Name",
            "Location" as provided in the previous steps and the "ID" as generated in step 5.`);
            await AgentMicrositeHelper.verifyCreatedPageletDisplayed(name);

            StepLogger.stepId(7);
            StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
            await AdminLoginPageHelper.logout(true);
            StepLogger.verification('user should be logged out and the Knova Administrator application login page should be displayed.');
            await AdminLoginPageHelper.verifyUserNotLogged();
        });

    // Jira References - KNOV-1466
    it(`Validation of error message when attempting to add a pagelet without
        adding image by linking to "Document" with "Graphic" display - [22431159]`, async () => {
            // Auto generated by aurea-automation - util on Tue, 05 Mar 2019 14:28:04 GMT

            StepLogger.caseId = 22431159;
            StepLogger.preCondition('Navigate to Pagelete page');
            await AgentMicrositeHelper.navigateToNewPageletPage();

            StepLogger.stepId(1);
            StepLogger.step('Enter a unique pagelet name in the "Name:" field and click the "Add New Link" button.');
            const name = RandomHelper.getRandomString();
            await AgentMicrositeHelper.typePageletNameAndClickAddNewLink(name);
            StepLogger.verification(`A new recommendation should be added in the text area below
        the "Name" field and a new section should be displayed with the "Display What" tab selected as default.`);
            await AgentMicrositeHelper.verifyRecommendationLinkDisplayed();

            StepLogger.stepId(2);
            StepLogger.step('Verify that the "Document" option is selected as default in the "Link To:" field.');
            StepLogger.verification('The "Document" option should be selected as default in the "Link To:" field.');
            await AgentMicrositeHelper.verifyDocumentRadioButtonChecked();

            StepLogger.stepId(3);
            StepLogger.step(`In the "Display:" field select the "Graphic" option and verify if the "Add Image"
        button is displayed under the "Display:" field.`);
            await AgentMicrositeHelper.clickOnGraphicRadioButton();

            StepLogger.verification(`User should be able to select the "Graphic" option and the "Add Image"
        button should be displayed under the "Display:" field.`);
            await AgentMicrositeHelper.verifyGraphicRadioButtonChecked();
            await AgentMicrositeHelper.verifyAddImageButtonDisplayed();

            StepLogger.stepId(4);
            StepLogger.step('Scroll down the page and click the "Save" button.');
            await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
            StepLogger.verification(`The "--Webpage Dialog" message box with the message as
        "Recommendation <temp recommendation name> is to be displayed as
        a graphic, but no graphic has been specified" should be displayed.`);
            await AgentMicrositeHelper.verifyNoGraphicSpecifiedMessageDisplayedAncCloseIt();

            // Step 5 is covered in stet 4
            StepLogger.stepId(5);
            StepLogger.step('Click the "OK" button.');
            StepLogger.verification(`The message box should be closed and the user should
        be navigated to the "New Pagelet" tab with no image name displayed in the
        "Graphic:" field of the "Display When" tab.`);
            await AgentMicrositeHelper.verifyPoppupIsClosed();

            StepLogger.stepId(6);
            StepLogger.step('Click on the "Pagelets" tab.');
            await CommonPageHelper.switchToContentFrame();
            await AgentMicrositeHelper.clickOnPagelestTab();
            StepLogger.verification(`The "New Pagelet" tab should be closed and the "Pagelets" tab
        should be displayed with no new pagelet added among the list displayed.`);
            await AgentMicrositeHelper.verifyPageletNotDisplayed(name);

            StepLogger.stepId(7);
            StepLogger.step(`Click the burger icon from the top left corner of the page and
        select the "Logout" option.`);
            await AdminLoginPageHelper.logout(true);
            StepLogger.verification(`user should be logged out and the Knova Administrator
        application login page should be displayed.`);
            await AdminLoginPageHelper.verifyUserNotLogged();
        });

    // Jira References - KNOV-1473
    it('Validation of the admin user editing the "Name:" field of an existing pagelet - [22436896]', async () => {
        // Auto generated by aurea-automation - util on Tue, 05 Mar 2019 14:28:04 GMT

        StepLogger.caseId = 22436896;
        StepLogger.preCondition('Create pagelet');
        const pagelet = await AgentMicrositeHelper.createPagelet();

        StepLogger.stepId(1);
        StepLogger.step('Click on the pagelet name of any available pagelets.');
        await AgentMicrositeHelper.ClickOnAPageLet(pagelet);
        StepLogger.verification('The details of the selected page should be displayed in a new tab.');
        await AgentMicrositeHelper.verifyPageletNameFieldValue(pagelet);

        StepLogger.stepId(2);
        StepLogger.step('Verify if the tab name and the text mentioned in the "Name:" field are the same.');
        StepLogger.verification('The tab name and the text mentioned in the "Name:" field should be the same.');
        await AgentMicrositeHelper.verifyPageletNameDisplayedInTab(pagelet);

        StepLogger.stepId(3);
        StepLogger.step('Edit the value in the "Name:" field');
        const newName = await RandomHelper.getRandomString();
        await AgentMicrositeHelper.typePageletName(newName);
        StepLogger.verification(`User should be able to edit the value in the "name:"
        field and the updated value should be displayed.`);
        await AgentMicrositeHelper.verifyPageletNameFieldValue(newName);

        StepLogger.stepId(4);
        StepLogger.step('Click the "Save" button.');
        await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
        StepLogger.verification(`A message as "Pagelet has been succesfully saved."
        should be displayed on the top of the page with the tab name also updated
        as the value provided in the "Name:" field.`);
        await AgentMicrositeHelper.verifyPageletSavedMessageDisplayed();
        await AgentMicrositeHelper.verifyPageletNameDisplayedInTab(newName);

        StepLogger.stepId(5);
        StepLogger.step(`To verify, Click on the "Pagelets" tab and for the
        updated pagelet, verify if the name is displayed as updated.`);
        await AgentMicrositeHelper.clickOnPagelestTab();
        StepLogger.verification('For the updated pagelet, the name should be displayed as updated.');
        await AgentMicrositeHelper.verifyCreatedPageletDisplayed(newName);

        StepLogger.stepId(6);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification(`user should be logged out and the Knova Administrator
        application login page should be displayed.`);
        await AdminLoginPageHelper.verifyUserNotLogged();
    });
});
