import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { AdminLoginPageHelper } from '../../../../page-objects/pages/admin-login-page/admin-login.helper';
import { RssFeedManagerConstant } from '../../../../page-objects/pages/administer-system/rss-feed-manager/rss-feed-manager.constants';
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
    it(`Validation of creating a RSS Feed by adding "Segments" through the "Search" option along
        with the mandatory fields in the "RSS Feed Details" window - [22342001]`, async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22342001;
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
        StepLogger.step('Click the "Select" button available in the "Segments:" field.');
        await RssFeedManagerPage.rssFeedDetail.segmentsInput.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be displayed.');
        await RssFeedManagerHelper.verifySegmentPopUp();

        StepLogger.stepId(6);
        StepLogger.step('Select the "Search" radio button under the "Find Segments by:" section.');
        await RssFeedManagerHelper.clickSearchOption();
        StepLogger.verification('User should be displayed with the "Search" text box along with the magnifier symbol.');
        await RssFeedManagerHelper.verifySearchTextBox();

        StepLogger.stepId(7);
        StepLogger.step('Enter a valid available segment name (e.g, Article) in the search text field and click the magnifier symbol.');
        await RssFeedManagerHelper.enterAndSearchSegment(RssFeedManagerConstant.elementNames.article);
        StepLogger.verification('The searched segment along with its immediate parent segment should be displayed in the ' +
            '"Search Result" section in a table format.');
        await RssFeedManagerHelper.verifySegmentSearchResult();

        StepLogger.stepId(8);
        StepLogger.step('Click the " + " button available under the "Action" field for the added segment ' +
            'and verify if the added segment is displayed under the "Selected:" section along with the main parent segment.');
        await RssFeedManagerHelper.addSearchedSegment();
        StepLogger.verification('The selected segment should be displayed under the "Selected:" section.');
        await RssFeedManagerHelper.verifySelectedSegment();

        StepLogger.stepId(9);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be closed and the selected segment ' +
            'along with its immediate parent segment should be displayed under the "Select" ' +
                'button of the "Segments:" field in the format "<immediate parent>: <selected segment>"');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(10);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(11);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", "Segments" and "Language" fields as entered/selected');
        StepLogger.verification('The newly added RSS feed should be displayed with values in the "Name:", "Segments" and "Language:" ' +
            'fields as entered/selected');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(12);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validating if the admin user can remove the added segment through the "Select Universal Metadata" window - [22341935]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:53 GMT

        StepLogger.caseId = 22341935;
        StepLogger.preCondition('Execute step 1 to 7 of C22341891 - Validation of creating a RSS Feed by adding Segments along with the mandatory ' +
            'fields in the RSS Feed Details windo');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.selectSegmentForNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Select the added option available in the "Selected:" section and click the "Remove" button.');
        await RssFeedManagerHelper.selectAndRemoveSelectedSegment();
        StepLogger.verification('The selected option should be removed from the "Selected:" section.');
        await RssFeedManagerHelper.verifySelectedSegmentRemoved();

        StepLogger.stepId(2);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be closed with no segment should be ' +
            'added and displayed under the "Select" button of the "Segments:" field.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(3);
        StepLogger.step('Scroll down the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" window should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(4);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", ' +
            '"Language" fields as entered/selected and no value in the "Segments" field.');
        StepLogger.verification('The newly added RSS feed should be displayed with the values in the "Name", ' +
            '"Language" fields as entered/selected and no value in the "Segments" field.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(5);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validating if the admin user can add more than one segment through the "Select Universal Metadata" window - [22341908]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:40 GMT

        StepLogger.caseId = 22341908;
        StepLogger.preCondition('Execute step 1 to 7 of C22341891 - Validation of creating a RSS Feed by adding Segments along with the mandatory fields ' +
            'in the RSS Feed Details window');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.selectSegmentForNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Click on the arrow available on the left of a different option available ' +
            '(e.g, Document Lifecycle States) and select one of the sub option displayed (e.g, Pending)');
        await RssFeedManagerHelper.enterAndSearchSegment(RssFeedManagerConstant.elementNames.pending);
        StepLogger.verification('User should be able to select the different segment now.');
        await RssFeedManagerHelper.verifySegmentSearchResult();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Add" button.');
        await RssFeedManagerHelper.addSearchedSegment();
        StepLogger.verification('The selected segment should be added to the existing list displayed in the "Selected:" section.');
        await RssFeedManagerHelper.verifySelectedPendingSegment();

        StepLogger.stepId(3);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be closed and all the selected ' +
            'segment along with its immediate parent segment should be displayed under the ' +
                '"Select" button of the "Segments:" field in the format "<immediate parent>: <selected segment>"');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(4);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(5);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", "Segments" and "Language" fields as entered/selected.');
        StepLogger.verification('The newly added RSS feeds should be displayed with values in the "Name:", "Segments" and "Language:" ' +
            'fields as entered/selected.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(6);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validating if the admin user is able to update the Segments options in the "RSS Feed Details" popup window - [22378918]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:05:04 GMT

        StepLogger.caseId = 22378918;
        StepLogger.preCondition('Execute step 1 to 4 of C22336372 - Validation of admin user viewing the available ' +
            'fields and buttons in the RSS Feed Manager page of Knova Administrator application');
        await RssFeedManagerHelper.navigateToRssFeedManager();
        const feedName = await RssFeedManagerHelper.createNewRssFeed();

        StepLogger.stepId(1);
        StepLogger.step('Click on the feed name under the "Name" field of an existing RSS Feed with value(s) in the "Segements" field.');
        await RssFeedManagerHelper.clickRssFeed(feedName);
        StepLogger.verification('The "RSS Feed Details" popup window should be displayed with the existing values displayed in the respective fields.');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(2);
        StepLogger.step('Click the "Select" button available in the "Segments" field.');
        await RssFeedManagerPage.rssFeedDetail.segmentsInput.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata"  window with the existing selected segements displayed in the "Selected" ' +
            'section should be displayed.');
        await RssFeedManagerHelper.verifySegmentPopUp();

        StepLogger.stepId(3);
        StepLogger.step('Click on the arrow available on the left of any of the option available ' +
            '(e.g, Document Types) and select one of the sub option displayed (e.g, Article)');
        await RssFeedManagerHelper.clickSearchAndEnterSegment(RssFeedManagerConstant.elementNames.article);
        StepLogger.verification('User should be able to select a sub option from the list.');
        await RssFeedManagerHelper.verifySegmentSearchResult();

        StepLogger.stepId(4);
        StepLogger.step('Click the "Add" button.');
        await RssFeedManagerHelper.addSearchedSegment();
        StepLogger.verification('The selected segment should be displayed hierarchy -wise (e.g, System Segments > ' +
            'Document Types > Article) in the "Selected:" section along with the already existing selected segments.');
        await RssFeedManagerHelper.verifySelectedSegment();

        StepLogger.stepId(5);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be closed and the selected segment ' +
            'along with its immediate parent segment should be displayed with the existing ' +
                'segment(s) under the "Select" button of the "Segments:" field in the format "<immediate parent>: <selected segment>"');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(6);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(7);
        StepLogger.step('Verify if the updated record is displayed with the newly added segment along with the existing segment(s) in the "Segments" field.');
        StepLogger.verification('The updated record should be displayed with the newly added segment along with the existing segment(s) ' +
            'in the "Segments" field.');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(8);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });

    // Jira References - KNOV-97
    it('Validation of creating a RSS Feed by adding "Segments" along with the mandatory fields in the "RSS Feed Details" window - [22341891]', async () => {
        // Auto generated by aurea-automation - util on Mon, 25 Feb 2019 08:04:41 GMT

        StepLogger.caseId = 22341891;
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
        StepLogger.step('Click the "Select" button available in the "Segments:" field.');
        await RssFeedManagerPage.rssFeedDetail.segmentsInput.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be displayed.');
        await RssFeedManagerHelper.verifySegmentPopUp();

        StepLogger.stepId(6);
        StepLogger.step('Click on the arrow available on the left of any of the option available ' +
            '(e.g, Document Types) and select one of the sub option displayed (e.g, Article)');
        await RssFeedManagerHelper.clickSearchAndEnterSegment(RssFeedManagerConstant.elementNames.article);
        StepLogger.verification('User should be able to select a sub option from the list.');
        await RssFeedManagerHelper.verifySegmentSearchResult();

        StepLogger.stepId(7);
        StepLogger.step('Click the "Add" button.');
        await RssFeedManagerHelper.addSearchedSegment();
        StepLogger.verification('The selected segment should be displayed hierarchy -wise (e.g, System Segments > Document Types > Article) ' +
            'in the "Selected:" section.');
        await RssFeedManagerHelper.verifySelectedSegment();

        StepLogger.stepId(8);
        StepLogger.step('Click the OK button.');
        await RssFeedManagerPage.buttons.oK.hoverOverAndClick();
        StepLogger.verification('The "Select Universal Metadata" window should be closed and the selected segment ' +
            'along with its immediate parent segment should be displayed under the "Select" ' +
                'button of the "Segments:" field in the format "<immediate parent>: <selected segment>"');
        await RssFeedManagerHelper.verifyRssFeedDetailOption();

        StepLogger.stepId(9);
        StepLogger.step('Scroll down to the bottom of the page and click the "Submit" button.');
        await RssFeedManagerPage.buttons.submit.hoverOverAndClick();
        StepLogger.verification('The "RSS Feed Details" page should be closed and the user should be navigated to the "RSS Feed Manager" page.');
        await RssFeedManagerHelper.verifyNavigation();

        StepLogger.stepId(10);
        StepLogger.step('Verify if the newly added RSS feed is displayed with the values in the "Name", "Segments" and "Language" fields as entered/selected');
        StepLogger.verification('The newly added RSS feed should be displayed with values in the "Name:", "Segments" and "Language:" ' +
            'fields as entered/selected');
        await RssFeedManagerHelper.verifyCreatedRssFeedByNameAndDelete(feedName);

        StepLogger.stepId(11);
        StepLogger.step('Click the burger icon from the top left corner of the page and select the "Logout" option.');
        await AdminLoginPageHelper.logout(true);
        StepLogger.verification('User should be logged out and the Knova Administrator application login page should be displayed.');
        await AdminLoginPageHelper.verifyUserNotLogged();
    });
});
