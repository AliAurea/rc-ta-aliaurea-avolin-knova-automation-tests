import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { SelfServiceEditProfileConstant } from '../../../../page-objects/pages/self-service-profile-editor/self-service-edit-profile.contant';
import { SelfServiceEditProfilePageHelper } from '../../../../page-objects/pages/self-service-profile-editor/self-service-edit-profile.helper';
import { SelfServiceHomePageHelper } from '../../../../page-objects/pages/self-service/self-service-home-page.helper';
import { SelfServiceLoginPageHelper } from '../../../../page-objects/pages/self-service/self-service-login.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: SelfServiceLoginPageHelper;
    const profileConstants = SelfServiceEditProfileConstant;

    beforeAll(async () => {
        loginPageHelper = SelfServiceLoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
        await loginPageHelper.goTo();
    });

    beforeEach(async () => {
        await PageHelper.switchToFirstTab();
        await SelfServiceHomePageHelper.clickOnLogOutIfPresent();
        await loginPageHelper.goTo();
        await SelfServiceLoginPageHelper.loginAsAdmin();
    });

    // Jira References - KNOV-2504
    it('Verify user is able to choose languages in Self Service -> Profile Data -> Authoring section - [23968970]', async () => {
        // Auto generated by aurea-automation - util on Thu, 02 May 2019 01:51:59 GMT

        StepLogger.caseId = 23968970;
        StepLogger.preCondition('Navigate to Profile Data');
        await SelfServiceEditProfilePageHelper.navigateToProfileData();

        StepLogger.stepId(1);
        StepLogger.step('Verify user can view "Languages" under authoring controls section');
        StepLogger.verification('User should be able to view  "Languages" under authoring controls section');
        await SelfServiceEditProfilePageHelper.verifyLanguagesButtonDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on "Select" next to language');
        await SelfServiceEditProfilePageHelper.clickOnLanguagesButton();
        StepLogger.verification('User should be able to view the select languages dialog box');
        await SelfServiceEditProfilePageHelper.verifySelectLanguagesDialogDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on any language in available section to select it');
        const language = await SelfServiceEditProfilePageHelper.clickOnARandomAvailableOption();
        StepLogger.verification('User should be able to able to select a language');
        await SelfServiceEditProfilePageHelper.verifyAvailableOptionSelected(language);

        StepLogger.stepId(4);
        StepLogger.step('Click on >> (double arrows) to add the selected language to Included section');
        await SelfServiceEditProfilePageHelper.clickOnAddButton();
        StepLogger.verification('The language should be visible in the Included section');
        await SelfServiceEditProfilePageHelper.verifyIncludedOption(language);

        StepLogger.stepId(5);
        StepLogger.step('Click on OK');
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        StepLogger.verification('The language should be added to the authoring roles section in profile data tab');
        await SelfServiceEditProfilePageHelper.verifyLanguageFromProfileDataPage(language);

        StepLogger.postCondition('Remove the language from the List');
        await SelfServiceEditProfilePageHelper.removeLanguage(language);
    });

    // Jira References - KNOV-2501
    it('Verify user is able to view roles and authoring controls section in Self Service - [23968816]', async () => {
        // Auto generated by aurea-automation - util on Thu, 02 May 2019 01:52:00 GMT

        StepLogger.caseId = 23968816;
        StepLogger.stepId(1);
        StepLogger.step('Verify is user is able to view a Edit profile link once logged in');
        StepLogger.verification('User should be able to view a edit profile link once logged in on the top right hand corner of the page');
        await SelfServiceHomePageHelper.verifyEditProfileLink();

        StepLogger.stepId(2);
        StepLogger.step('Click on Edit profile link at the top right.');
        await SelfServiceHomePageHelper.clickOnEditProfile();
        StepLogger.verification('Profile Editor window will be opened with preferences tab chosen');
        await SelfServiceEditProfilePageHelper.verifyEditProfilePageDisplayed();
        await SelfServiceEditProfilePageHelper.verifyTabHighlighted(profileConstants.names.preferences);

        StepLogger.stepId(3);
        StepLogger.step('Click on Profile data tab');
        await SelfServiceEditProfilePageHelper.clickOnTab(profileConstants.names.profileData);
        StepLogger.verification('Profile data tab details should be displayed');
        await SelfServiceEditProfilePageHelper.verifyProfileDataDetailsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify user can view roles');
        StepLogger.verification('User should be able to view roles section');
        await SelfServiceEditProfilePageHelper.verifyRolesSectionDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify user can view authoring controls');
        StepLogger.verification(`User should be able to able to view the authoring controls :
        - Access levels
        - Languages
        - Unified templates
        - Universal metadata`);
        await SelfServiceEditProfilePageHelper.verifyAuthoringControlsElements();
    });

    // Jira References - KNOV-2505
    it('Verify user is able to remove languages in Self Service -> Profile Data -> Authoring section - [23968971]', async () => {
        // Auto generated by aurea-automation - util on Thu, 02 May 2019 01:52:00 GMT

        StepLogger.caseId = 23968971;
        StepLogger.preCondition('Pasa a random language to the "included" list');
        const language = await SelfServiceEditProfilePageHelper.includeARandomLanguage();

        StepLogger.stepId(1);
        StepLogger.step('Verify user can view "Languages" under authoring controls section');
        StepLogger.verification('User should be able to view  "Languages" under authoring controls section');
        await SelfServiceEditProfilePageHelper.verifyLanguagesButtonDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on "Select" next to language');
        await SelfServiceEditProfilePageHelper.clickOnLanguagesButton();
        StepLogger.verification('User should be able to view the select languages dialog box');
        await SelfServiceEditProfilePageHelper.verifySelectLanguagesDialogDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on any language in Included section to select it');
        await SelfServiceEditProfilePageHelper.clickOnAnIncludedElement(language);
        StepLogger.verification('User should be able to able to select a language from the included section');
        await SelfServiceEditProfilePageHelper.verifyIncludedOptionSelected(language);

        StepLogger.stepId(4);
        StepLogger.step('Click on << (double arrows) to remove the selected language from Included section');
        await SelfServiceEditProfilePageHelper.clickOnRemoveButton();
        StepLogger.verification('The language should be removed from the Included section and should be present in available section');
        await SelfServiceEditProfilePageHelper.verifyAvailableOption(language);

        StepLogger.stepId(5);
        StepLogger.step('Click on OK');
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        StepLogger.verification('The language should be removed from authoring roles section in profile data tab');
        await SelfServiceEditProfilePageHelper.verifyLanguageIsNotIncludedFromProfileDataPage(language);
    });

    // Jira References - KNOV-2506
    it('Verify user is able to add  "Unified Templates" in Self Service -> Profile Data -> Authoring section - [23968972]', async () => {
        // Auto generated by aurea-automation - util on Thu, 02 May 2019 01:52:00 GMT

        StepLogger.caseId = 23968972;
        StepLogger.preCondition('Navigate to Profile Data');
        await SelfServiceEditProfilePageHelper.navigateToProfileData();

        StepLogger.stepId(1);
        StepLogger.step('Verify user can view "Unified Templates" under authoring controls section');
        StepLogger.verification('User should be able to view  "Unified Templates" under authoring controls section');
        await SelfServiceEditProfilePageHelper.verifyUnifiedTemplateButton();

        StepLogger.stepId(2);
        StepLogger.step('Click on "Select" next to Unified Templates');
        await SelfServiceEditProfilePageHelper.clickOnUnifiedTemplateButton();
        StepLogger.verification('User should be able to view the select Unified Templates dialog box');
        await SelfServiceEditProfilePageHelper.verifySelectUnifiedTemplatesDialogDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on the unified template name in available section');
        const template = await SelfServiceEditProfilePageHelper.clickOnARandomAvailableOption();
        StepLogger.verification('User should be able to select the unified template from the available section');
        await SelfServiceEditProfilePageHelper.verifyAvailableOptionSelected(template);

        StepLogger.stepId(4);
        StepLogger.step('Click on >> to add the chosen unified template to the included section');
        await SelfServiceEditProfilePageHelper.clickOnAddButton();
        StepLogger.verification('The selected unified template should be added to included section and removed from available section');
        await SelfServiceEditProfilePageHelper.verifyIncludedOption(template);

        StepLogger.stepId(5);
        StepLogger.step('Click on OK');
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        StepLogger.verification('The unified template should be added to the authoring roles section in profile data tab');
        await SelfServiceEditProfilePageHelper.verifyUnifiedTemplateFromProfileDataPage(template);

        StepLogger.postCondition('Remove the template from the List');
        await SelfServiceEditProfilePageHelper.removeTemplate(template);
    });

    // Jira References - KNOV-2507
    it('Verify user is able to remove "Unified Templates" in Self Service -> Profile Data -> Authoring section - [23968973]', async () => {
        // Auto generated by aurea-automation - util on Thu, 02 May 2019 01:52:00 GMT

        StepLogger.caseId = 23968973;
        StepLogger.preCondition('Include a random template');
        const template = await SelfServiceEditProfilePageHelper.includeARandomTemplate();

        StepLogger.stepId(1);
        StepLogger.step('Verify user can view "Unified Templates" under authoring controls section');
        StepLogger.verification('User should be able to view  "Unified Templates" under authoring controls section');
        await SelfServiceEditProfilePageHelper.verifyUnifiedTemplateButton();

        StepLogger.stepId(2);
        StepLogger.step('Click on "Select" next to Unified Templates');
        await SelfServiceEditProfilePageHelper.clickOnUnifiedTemplateButton();
        StepLogger.verification('User should be able to view the select Unified Templates dialog box');
        await SelfServiceEditProfilePageHelper.verifySelectUnifiedTemplatesDialogDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on the unified template name in included section');
        await SelfServiceEditProfilePageHelper.clickOnAnIncludedElement(template);
        StepLogger.verification('User should be able to select the unified template from the included section');
        await SelfServiceEditProfilePageHelper.verifyIncludedOptionSelected(template);

        StepLogger.stepId(4);
        StepLogger.step('Click on << to remove the chosen unified template from included section');
        await SelfServiceEditProfilePageHelper.clickOnRemoveButton();
        StepLogger.verification('The selected unified template should be removed from included section and added to available section');
        await SelfServiceEditProfilePageHelper.verifyAvailableOption(template);

        StepLogger.stepId(5);
        StepLogger.step('Click on OK');
        await SelfServiceEditProfilePageHelper.clickOnOkButtonAndSwitchToProfileData();
        StepLogger.verification('The unified template should be removed from the authoring roles section in profile data tab');
        await SelfServiceEditProfilePageHelper.verifyUnifiedTemplateIsNotIncludedFromProfileDataPage(template);
    });
});