import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { CommonPageHelper } from '../../../../page-objects/pages/common/common-page.helper';
import { CommunitiesPageHelper } from '../../../../page-objects/pages/self-service/communities.helper';
import { SelfServiceLoginPageHelper } from '../../../../page-objects/pages/self-service/self-service-login.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: SelfServiceLoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = SelfServiceLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await SelfServiceLoginPageHelper.logout();
        await SelfServiceLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-1574
    it('Verify Admin user is able to edit the post using Edit button in the "Preview and Submit Post" page - [22939028]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:20 GMT

        StepLogger.caseId = 22939028;
        StepLogger.preCondition('Create a post');
        await CommunitiesPageHelper.createPostWithoutSubmittingIt();

        // Step 1 is covered in pre-condition
        StepLogger.stepId(1);
        StepLogger.step('User gets navigated to "Preview and Submit Page" as specified in Pre-condition [C22939017]');
        StepLogger.verification('User should be able to navigate to "Preview and Submit Page"');
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Edit button in "Preview and Submit Page"');
        await CommunitiesPageHelper.clickOnEditButton();
        StepLogger.verification('User should get navigated to the Post a Question page');
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Update Subject of the Post  Ex : New Question on Knova application');
        const subject = RandomHelper.getRandomString();
        await CommunitiesPageHelper.typeSubject(subject);
        StepLogger.verification('User should be able to update the Subject of the Post');
        await CommunitiesPageHelper.verifySubjectFieldValue(subject);

        StepLogger.stepId(4);
        StepLogger.step('Click on "Continue" button in the "Post a Question" page');
        await CommunitiesPageHelper.clickOnContinueButton();
        StepLogger.verification('User should get navigated to the "Preview and Submit Post" page successfully without errors');
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify the updated Subject of the post gets displayed in the "Preview and Submit Post" page');
        StepLogger.verification('Updated Subject of the post should get displayed in the "Preview and Submit Post" page');
        await CommunitiesPageHelper.verifyPreviewPageSubject(subject);

        StepLogger.stepId(6);
        StepLogger.step('Click on "Submit" button in the "Preview and Submit Post" page');
        await CommunitiesPageHelper.clickOnSubmitButton();
        StepLogger.verification('New Post should get submitted successfully without errors in the Community page');
        await CommunitiesPageHelper.verifyPostLinkFromBrowsePage(subject);
    });

    // Jira References - KNOV-1688
    it(`Verify when admin user launches New Post button from a selected Community, the
    Community field should display the Selected Community name by default in "Post a Question" page - [22946542]`, async () => {
            // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:20 GMT

            StepLogger.caseId = 22946542;
            StepLogger.stepId(1);
            StepLogger.step(`User should get navigated to the "Post a Question" page as specified in the pre-condition
        [C22938336]`);
            await CommunitiesPageHelper.clickOnCommunitiesTab();
            await CommunitiesPageHelper.clickOnNewPostButton();
            StepLogger.verification('User should be able to navigate to the "Post a Question" page');
            await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

            StepLogger.stepId(2);
            StepLogger.step('Verify by default Community field displays the "Community name" from where the New Post button is clicked');
            StepLogger.verification('By default, Community field should display the "Community name" from where the New Post button is clicked');
            await CommunitiesPageHelper.verifyCommunityDropdownHasDefaultOption();
            await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);

            StepLogger.stepId(3);
            StepLogger.step(`Input Subject in the "Post a Question" page
        Ex : Question on Jive application`);
            const subject = RandomHelper.getRandomString();
            await CommunitiesPageHelper.typeSubject(subject);
            StepLogger.verification('User should be able to input Subject in the "Post a Question" page');
            await CommunitiesPageHelper.verifySubjectFieldValue(subject);

            StepLogger.stepId(4);
            StepLogger.step('Input Details in the "Post a Question" page');
            const details = RandomHelper.getRandomString();
            await CommunitiesPageHelper.enterPostDetails(details);
            StepLogger.verification('User should be able to enter Details in the "Post a Question" page');
            await CommunitiesPageHelper.verifyDetailsFieldValue(details);

            StepLogger.stepId(5);
            StepLogger.step('Click on Continue button in the "Post a Question" page');
            await await CommunitiesPageHelper.clickOnContinueButton();
            StepLogger.verification('User should get navigated to the Preview and Submit Post page successfully without errors');
            await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();

            StepLogger.stepId(6);
            StepLogger.step('Click on Submit button in Preview and Submit Post page');
            await CommunitiesPageHelper.clickOnSubmitButton();
            StepLogger.verification('On Submit , the New Post should get successfully posted in the selected Community page');
            await CommunitiesPageHelper.verifyPostLinkFromBrowsePage(subject);
        });

    // Jira References - KNOV-1575
    it('Verify admin user is able to submit a New Post without selecting Community from Community field in the Post a Question page - [22939075]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:20 GMT

        StepLogger.caseId = 22939075;
        StepLogger.preCondition('Click on Communities tab');
        await CommunitiesPageHelper.clickOnCommunitiesTab();

        StepLogger.stepId(1);
        StepLogger.step('Click on "New Post" button as specified in the Pre-condition [C22938328]');
        await CommunitiesPageHelper.clickOnNewPostButton();
        StepLogger.verification('User should get navigated to the "Post a Question" page');
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step(`Input Subject in the "Post a Question" page
        Ex : Question on Knova application`);
        const subject = RandomHelper.getRandomString();
        await CommunitiesPageHelper.typeSubject(subject);
        StepLogger.verification('User should be able to input Subject in the "Post a Question" page');
        await CommunitiesPageHelper.verifySubjectFieldValue(subject);

        // This step does not require any action
        StepLogger.stepId(3);
        StepLogger.step('Do not Select Community for the New Post from "Community" field drop down');
        StepLogger.verification('User should not select Community for the New Post from "Community" field drop down;');

        StepLogger.stepId(4);
        StepLogger.step('Click on Continue button in the "Post a Question" page');
        await CommunitiesPageHelper.clickOnContinueButton();
        StepLogger.verification(`A "--Webpage Dialog" message box gets displayed as
        "Communities is a Category. Please select a Community"`);
        await CommunitiesPageHelper.verifyCommunitiesIsACategoryPleaseSelectACommunityDisplayedAndCloseIt();

        // Step 5 is covered in step 4
        StepLogger.stepId(5);
        StepLogger.step('Click OK on the "--Webpage Dialog" message');
        StepLogger.verification('User should get navigated back to the "Post a Question" page');
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

        StepLogger.stepId(6);
        StepLogger.step(`Select Community for the New Post from "Community" field drop down in the "Post a Question" page
        Ex : -TD_Private Community`);
        const community = await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        StepLogger.verification('Community for the New Post should be selected from "Community" field drop down in the "Post a Question" page');
        await CommunitiesPageHelper.verifySelectedCommunityDropdownOption(community);

        StepLogger.stepId(7);
        StepLogger.step('Input Details in the "Post a Question" page');
        const details = RandomHelper.getRandomString();
        await CommunitiesPageHelper.enterPostDetails(details);
        StepLogger.verification('User should be able to enter Details in the "Post a Question" page');
        await CommunitiesPageHelper.verifyDetailsFieldValue(details);

        StepLogger.stepId(8);
        StepLogger.step('Click on "Continue" button');
        await CommunitiesPageHelper.clickOnContinueButton();
        StepLogger.verification('User should get navigated to the "Preview and Submit Post" page successfully');
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
    });

    // Jira References - KNOV-1572
    it('Verify click on "Cancel" button in the "Post a Question" page navigates back to the Communities Home page - [22938431]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:20 GMT

        StepLogger.caseId = 22938431;
        await CommunitiesPageHelper.clickOnCommunitiesTab();

        StepLogger.stepId(1);
        StepLogger.step('click on "New Post" button as specified in the Pre-condition [C22938328]');
        await CommunitiesPageHelper.clickOnNewPostButton();
        StepLogger.verification('User should get navigated to the "Post a Question" page');
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step(`Input Subject in the "Post a Question" page
        Ex : Question on Knova application`);
        const subject = RandomHelper.getRandomString();
        await CommunitiesPageHelper.typeSubject(subject);
        StepLogger.verification('User should be able to input Subject in the "Post a Question" page');
        await CommunitiesPageHelper.verifySubjectFieldValue(subject);

        StepLogger.stepId(3);
        StepLogger.step(`Select Community for the New Post from "Community" field drop down in the "Post a Question" page
        Ex : -TD_Private Community`);
        const community = await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        StepLogger.verification('Community for the New Post should be selected from "Community" field drop down in the "Post a Question" page');
        await CommunitiesPageHelper.verifySelectedCommunityDropdownOption(community);

        StepLogger.stepId(4);
        StepLogger.step('Input Details in the "Post a Question" page');
        const details = RandomHelper.getRandomString();
        await CommunitiesPageHelper.enterPostDetails(details);
        StepLogger.verification('User should be able to enter Details in the "Post a Question" page');
        await CommunitiesPageHelper.verifyDetailsFieldValue(details);

        StepLogger.stepId(5);
        StepLogger.step('Click on "Cancel" button in the "Post a Question" page');
        await CommunitiesPageHelper.clickOnCancelButton();
        StepLogger.verification('New Post should get cancelled and user should get navigated back to Communities Home page');
        await CommunitiesPageHelper.verifyCommunitiesHomeDisplayed();
    });

    // Jira References - KNOV-1573
    it('Verify click on "Continue" button in the "Post a Question" page navigates admin user to the "Preview and Submit Post" page - [22939017]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:21 GMT

        StepLogger.caseId = 22939017;
        StepLogger.preCondition('Click on Communities tab');
        await CommunitiesPageHelper.clickOnCommunitiesTab();

        StepLogger.stepId(1);
        StepLogger.step('click on "New Post" button as specified in the Pre-condition C22938328');
        await CommunitiesPageHelper.clickOnNewPostButton();
        StepLogger.verification('User should get navigated to the "Post a Question" page');
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step(`Input Subject in the "Post a Question" page
        Ex : Question on Knova application`);
        const subject = RandomHelper.getRandomString();
        await CommunitiesPageHelper.typeSubject(subject);
        StepLogger.verification('User should be able to input Subject in the "Post a Question" page');
        await CommunitiesPageHelper.verifySubjectFieldValue(subject);

        StepLogger.stepId(3);
        StepLogger.step(`Select Community for the New Post from "Community" field drop down in the "Post a Question" page
        Ex : -TD_Private Community`);
        const community = await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        StepLogger.verification('Community for the New Post should be selected from "Community" field drop down in the "Post a Question" page');
        await CommunitiesPageHelper.verifySelectedCommunityDropdownOption(community);

        StepLogger.stepId(4);
        StepLogger.step('Input Details in the "Post a Question" page');
        const details = RandomHelper.getRandomString();
        await CommunitiesPageHelper.enterPostDetails(details);
        StepLogger.verification('User should be able to enter Details in the "Post a Question" page');
        await CommunitiesPageHelper.verifyDetailsFieldValue(details);

        StepLogger.stepId(5);
        StepLogger.step('Click on "Continue" button in the "Post a Question" page');
        await CommunitiesPageHelper.clickOnContinueButton();
        StepLogger.verification('User should get navigated to the "Preview and Submit Post" page successfully without errors');
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
    });

    // Jira References - KNOV-1568
    it(`Verify click on "ABC" button under "Details" section in "Post a Question" page displays
    the "Check Spelling" window for admin user - [22938408]`, async () => {
            // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:22 GMT

            StepLogger.caseId = 22938408;
            StepLogger.preCondition('Click on Communities tab');
            await CommunitiesPageHelper.clickOnCommunitiesTab();

            StepLogger.stepId(1);
            StepLogger.step('Click on "New Post" button as specified in the Pre-condition [C22938328]');
            await CommunitiesPageHelper.clickOnNewPostButton();
            StepLogger.verification('User should get navigated to the "Post a Question" page');
            await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

            StepLogger.stepId(2);
            StepLogger.step(`Input Subject in the "Post a Question" page
        Ex : Question on Knova application`);
            const subject = RandomHelper.getRandomString();
            await CommunitiesPageHelper.typeSubject(subject);
            StepLogger.verification('User should be able to input Subject in the "Post a Question" page');
            await CommunitiesPageHelper.verifySubjectFieldValue(subject);

            StepLogger.stepId(3);
            StepLogger.step(`Select Community for the New Post from "Community" field drop down  in the "Post a Question" page
        Ex : -TD_Private Community`);
            const community = await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
            StepLogger.verification('Community for the New Post should be selected from "Community" field drop down  in the "Post a Question" page');
            await CommunitiesPageHelper.verifySelectedCommunityDropdownOption(community);

            StepLogger.stepId(4);
            StepLogger.step('Input Details in the "Post a Question" page');
            const details = RandomHelper.getRandomString();
            await CommunitiesPageHelper.enterPostDetails(details);
            StepLogger.verification('User should be able to enter Details in the "Post a Question" page');
            await CommunitiesPageHelper.verifyDetailsFieldValue(details);

            StepLogger.stepId(5);
            StepLogger.step('Verify "ABC" button is available for user to check spelling under Details section');
            StepLogger.verification('"ABC" button should be available for user under Details section');
            await CommunitiesPageHelper.verifyAbcButtonDisplayed();

            StepLogger.stepId(6);
            StepLogger.step('Validate the spell check by clicking on "ABC" button');
            await CommunitiesPageHelper.clickAbcButton();
            StepLogger.verification('Check Spelling window should get displayed displaying Suggestions for User');
            await CommunitiesPageHelper.verifyCheckSpellingPopupDisplayed();

            StepLogger.stepId(7);
            StepLogger.step('Check the "Suggestions" and select the required option');
            await CommunitiesPageHelper.clickOnRandomSpellingSuggestion();
            StepLogger.verification('User should be able to select an option from the suggestions');
            await CommunitiesPageHelper.verifyFirstSuggestionHighlighted();

            StepLogger.stepId(8);
            StepLogger.step('Click on OK button in the Check Spelling window');
            await CommunitiesPageHelper.clickOkButtonFromSpellingEditorPopup();
            StepLogger.verification('User should get navigated to "Post a Question" page');
            await PageHelper.switchToFirstTab();
            await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

            StepLogger.stepId(9);
            StepLogger.step('Click on Continue button in the  "Post a Question" page');
            await CommunitiesPageHelper.clickOnContinueButton();
            StepLogger.verification('User should get navigated to the Preview and Submit Post page successfully without errors');
            await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
        });

    // Jira References - KNOV-1569
    it('Verify admin user is able to select any of the "Notify me" option in the Post a Question page - [22938409]', async () => {
        // Auto generated by aurea-automation - util on Thu, 07 Mar 2019 10:59:23 GMT

        StepLogger.caseId = 22938409;
        StepLogger.preCondition('Click on Communities tab');
        await CommunitiesPageHelper.clickOnCommunitiesTab();

        StepLogger.stepId(1);
        StepLogger.step('Click on "New Post" button as specified in the Pre-condition [C22938328]');
        await CommunitiesPageHelper.clickOnNewPostButton();
        StepLogger.verification('User should get navigated to the "Post a Question" page');
        await CommunitiesPageHelper.verifyPostAQuestionPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step(`Input Subject in the "Post a Question" page
        Ex : Question on Knova application`);
        const subject = RandomHelper.getRandomString();
        await CommunitiesPageHelper.typeSubject(subject);
        StepLogger.verification('User should be able to input Subject in the "Post a Question" page');
        await CommunitiesPageHelper.verifySubjectFieldValue(subject);

        StepLogger.stepId(3);
        StepLogger.step(`Select Community for the New Post from "Community" field drop down in the "Post a Question" page
        Ex : -TD_Private Community`);
        const community = await CommunitiesPageHelper.selectCommunityDropdownOptionByIndex(Constants.number.two);
        StepLogger.verification('Community for the New Post should be selected from "Community" field drop down in the "Post a Question" page');
        await CommunitiesPageHelper.verifySelectedCommunityDropdownOption(community);

        StepLogger.stepId(4);
        StepLogger.step('Input Details in the "Post a Question" page');
        const details = RandomHelper.getRandomString();
        await CommunitiesPageHelper.enterPostDetails(details);
        StepLogger.verification('User should be able to enter Details in the "Post a Question" page');
        await CommunitiesPageHelper.verifyDetailsFieldValue(details);

        StepLogger.stepId(5);
        StepLogger.step(`Go to "Notify me" field and verify below options are available as radio buttons
        Never
        Immediately
        Daily
        Weekly`);
        StepLogger.verification('User should be able to view the specified "Notify me" options');
        await CommonPageHelper.switchToDefaultContent();
        await CommunitiesPageHelper.verifyNotifyMeSection();

        StepLogger.stepId(6);
        StepLogger.step('Select one of the "Notify me" option Ex: Daily');
        await CommunitiesPageHelper.clickOnDailyRadioButton();
        StepLogger.verification('User should be able to select the specified "Notify me" option');
        await CommunitiesPageHelper.verifyDailyRadionButtonIsMarked();

        StepLogger.stepId(7);
        StepLogger.step('Click on Continue button in the "Post a Question" page');
        await CommunitiesPageHelper.clickOnContinueButton();
        StepLogger.verification('User should get navigated to the Preview and Submit Post page successfully without errors');
        await CommunitiesPageHelper.verifyPostPreviewPageDisplayed();
    });
});
