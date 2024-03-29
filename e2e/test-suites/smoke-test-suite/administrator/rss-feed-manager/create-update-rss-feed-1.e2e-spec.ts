import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
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
    it(`Validating if the admin user is able to edit the values available in the Name, Description, URL Root, Language
        and Title Contains fields of the "RSS Feed Details" popup window - [22344080]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22344080;
        const editFeedName = PageHelper.getUniqueId();
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.createNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Click on the feed name under the "Name" field of an existing RSS Feed with values ' +
            'in the  Name, Description, URL Root, Language and Title Contains fields.');
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
        StepLogger.step('Click the drop down option in the "Language" field and select a different option from ' +
            'the previous selected option from the list of options displayed. (e.g, English)');
        const language = await RssFeedManagerHelper.selectLanguageOption();
        StepLogger.verification('User should be able to select a different option in the "Language:" field.');
        await RssFeedManagerHelper.verifySelectedLanguageOption(language);

        StepLogger.stepId(6);
        StepLogger.step('Navigate to the "Title Contains:" field and edit the existing value with a new value.');
        await RssFeedManagerPage.rssFeedDetail.title.sendKeys(editFeedName);
        StepLogger.verification('User should be able to edit the existing value available in the "Title Contains:" field');
        await RssFeedManagerPage.rssFeedDetail.title.verifyTextEntered(editFeedName);

        StepLogger.stepId(7);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(8);
        StepLogger.step('Verify if the selected RSS feed in step 1 is displayed with the updated values in ' +
            'the Name, Description, URL Root, Language and Title Contains field as updated in step 2 to 6.');
        StepLogger.verification('The selected RSS feed in step 1 should be displayed with the updated values in the ' +
            'Name, Description, URL Root, Language and Title Contains field as updated in step 2 to 6.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(editFeedName);

        StepLogger.stepId(9);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validating if the admin user is able to update the knowledge sources options in the "RSS Feed Details" popup window - [22378913]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22378913;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.createNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Click on the feed name under the "Name" field of an existing RSS Feed with value(s) in the "Knowledge Sources" field.');
        await RssFeedManagerHelper.clickRssFeed(feedName);
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed with the existing values displayed in the respective fields.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Knowledge Sources:" field.');
        await RssFeedManagerPage.rssFeedDetail.knowledgeSourcesInput.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" popup window with the existing selected knowledge sources ' +
            'displayed in the "Selected" section should be displayed.');
        await RssFeedManagerHelper.verifyKnowledgeSourcePopUp();

        StepLogger.stepId(3);
        StepLogger.step('Select one of the option from the list under "Available" (e.g, KSM:FSSCFN) and click the " >> " button.');
        const knowledgeOptionText = await RssFeedManagerHelper.switchToFrameAndSelectKnowledgeSourceOption();
        StepLogger.verification('The selected option should now be moved from the "Available" section to the ' +
            '"Selected" section and the newly moved option along with the existing option(s) should be displayed in the "Selected" section.');
        await RssFeedManagerHelper.verifySelectedKnowledgeOption();

        StepLogger.stepId(4);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" window should be closed and the user should be navigated to ' +
            'the "RSS Feed Details" window with the newly added knowledge source along with the ' +
                'already existing one(s) displayed under the "Select" button of the "Knowledge Sources:" field.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(5);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(6);
        StepLogger.step('Verify if the updated record is displayed with the newly added knowledge source ' +
            'along with the existing knowledge source(s) in the "Knowledge Sources" field.');
        StepLogger.verification('The updated record should be displayed with the newly added knowledge source along ' +
            'with the existing knowledge source(s) in the "Knowledge Sources" field.');
        await RssFeedManagerHelper.verifyCreatedRssFeedAndDelete(feedName, knowledgeOptionText);

        StepLogger.stepId(7);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it(`Validation of creating a RSS Feed by selecting one Knowledge Source along
      with the mandatory fields in the "RSS Feed Details" window - [22336518]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:20 GMT

        StepLogger.caseId = 22336518;
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
        StepLogger.step('Click the "Select" button available in the "Knowledge Sources:" field.');
        await RssFeedManagerPage.rssFeedDetail.knowledgeSourcesInput.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" popup window should be displayed.');
        await RssFeedManagerHelper.verifyKnowledgeSourcePopUp();

        StepLogger.stepId(6);
        StepLogger.step('Select one of the option from the list under "Available" (e.g, KSM:FSSCFN) and click the " >> " button.');
        const knowledgeOptionText = await RssFeedManagerHelper.switchToFrameAndSelectKnowledgeSourceOption();
        StepLogger.verification('The selected option should now be moved from the "Available" section to the "Selected" section.');
        await RssFeedManagerPage.rssFeedDetail.selectedKnowledgeSourceOption.verifyDisplayedStatus();

        StepLogger.stepId(7);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" window should be closed and the user should be navigated to the ' +
            '"RSS Feed Details" window with the selected knowledge source displayed under the "Select" button of the "Knowledge Sources:" field.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(8);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(9);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", ' +
            ' "Knowledge Sources" and "Language" fields as entered/selected in step 2, 4 and 6.');
        StepLogger.verification('The newly added RSS feed should be displayed with values in the "Name:", ' +
            '"Knowledge Sources:" and "Language:" fields as entered in step 2, 4 and 6.');
        await RssFeedManagerHelper.verifyRssFeedLanguageKnowldgeAndDelete(feedName, selectedLanguage, knowledgeOptionText);

        StepLogger.stepId(10);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it(`Validation of creating a RSS Feed by selecting more than one Knowledge Source along
        with the mandatory fields in the "RSS Feed Details" window - [22341688]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:20 GMT

        StepLogger.caseId = 22341688;
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
        StepLogger.step('Click the "Select" button available in the "Knowledge Sources:" field.');
        await RssFeedManagerPage.rssFeedDetail.knowledgeSourcesInput.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" popup window should be displayed.');
        await RssFeedManagerHelper.verifyKnowledgeSourcePopUp();

        StepLogger.stepId(6);
        StepLogger.step('Press the "Ctrl" key in the keyboard and select more than one option from the list ' +
            ' of options displayed under "Available" section and click the " >> " button.');
        const knowledgeSelected = await RssFeedManagerHelper.switchToFrameAndSelectMultiKnowledgeSourceOption();
        StepLogger.verification('All the selected options should now be moved from the "Available" section to the "Selected" section.');
        await RssFeedManagerHelper.verifySelectedKnowledgeOption();

        StepLogger.stepId(7);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" window should be closed and the user should be navigated ' +
            'to the "RSS Feed Details" window with all the selected knowledge sources ' +
                'displayed under the "Select" button of the "Knowledge Sources:" field.');
        await RssFeedManagerHelper.verifyRssDetailAndDisplayedKnowledgeSource();

        StepLogger.stepId(8);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(9);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", "Knowledge Sources" ' +
            'and "Language" fields as entered/selected in step 2, 4 and 6.');
        StepLogger.verification('The newly added RSS feed should be displayed with values in the "Name:", "Knowledge Sources:" and ' +
            '"Language:" fields as entered in step 2, 4 and 6.');
        await RssFeedManagerHelper.verifyRssFeedLanguageKnowldgeAndDelete(feedName, selectedLanguage, knowledgeSelected);

        StepLogger.stepId(10);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it(`Validation of creating a new RSS Feed by selecting and un-selecting the
            knowledge sources using "<<" and ">>" button in the "Knowledge Sources" window - [22341700]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:20 GMT

        StepLogger.caseId = 22341700;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.selectKnowledgeSourceForNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Select one of the option from the list displayed in the "Selected" section and verify if the "<<" button is enabled.');
        await RssFeedManagerPage.rssFeedDetail.selectedKnowledgeSourceOption.hoverOverAndClick();
        StepLogger.verification('User should be able to select an option from the list under "Selected" section and the "<<" button should be enabled.');
        await RssFeedManagerPage.rssFeedDetail.removing.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click the "<<" button');
        await RssFeedManagerPage.rssFeedDetail.removing.hoverOverAndClick();
        StepLogger.verification('The selected option should be moved from the "Selected" section to the bottom in the list of the "Available" section.');
        await RssFeedManagerPage.rssFeedDetail.availableKnowledgeSourceOption.verifyDisplayedStatus();

        StepLogger.stepId(3);
        StepLogger.step('Press the "Ctrl" button from the keyboard and select more than one option from the available options under "Selected" section.');
        await RssFeedManagerHelper.selectSelectedKnowledgeSource();
        StepLogger.verification('User should be able to select more than one option in the "Selected" section.');
        await RssFeedManagerHelper.verifySelectedKnowledgeOption();

        StepLogger.stepId(4);
        StepLogger.step('Click the "<<" button.');
        await RssFeedManagerPage.rssFeedDetail.removing.hoverOverAndClick();
        StepLogger.verification('The selected options should be moved to the bottom list of the "Available" section.');
        await RssFeedManagerHelper.verifyRemovedSelectedKnowledgeSource();

        StepLogger.stepId(5);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" window should be closed and the user should be navigated to the ' +
            '"RSS Feed Details" window with the selected knowledge source(s)  displayed under the "Select" button of the "Knowledge Sources:" field.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(6);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(7);
        StepLogger.step('Verify if the newly added RSS feed displayed with the values in the "Name" , "Knowledge Sources" and "Language" fields');
        StepLogger.verification('The newly added RSS feed should be displayed with values in the "Name:" , "Knowledge Sources" ' +
            ' and "Language:" fields  in accordance with the values entered or selected.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(8);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validation of the "Cancel" button available in the "Knowledge Sources" window - [22341732]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:40 GMT

        StepLogger.caseId = 22341732;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.selectKnowledgeSourceForNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Press the "Ctrl" key in the keyboard and select more than one option from the ' +
            'list of options displayed under "Available" section and click the " >> " button.');
        await RssFeedManagerHelper.selectKnowledgeSourceOption();
        StepLogger.verification('All the selected options should now be moved from the "Available" section to the "Selected" section.');
        await RssFeedManagerHelper.verifySelectedKnowledgeOption();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Cancel" button.');
        await RssFeedManagerPage.buttons.cancel.hoverOverAndClick();
        StepLogger.verification('The "Knowledge Sources" window should be closed and the user should be navigated ' +
            'to the "RSS Feed Details" window without the selected knowledge sources displayed under the "Select" button of the "Knowledge Sources:" field.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(3);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(4);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", ' +
            '"Language" fields in accordance with the values entered or selected and is not holding any value in the "Knowledge Sources" field.');
        StepLogger.verification('The newly added RSS feed should be displayed with the values in the "Name", ' +
            '"Language" fields in accordance with the values entered or selected and should not hold any value in the "Knowledge Sources" field.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(5);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });
});
