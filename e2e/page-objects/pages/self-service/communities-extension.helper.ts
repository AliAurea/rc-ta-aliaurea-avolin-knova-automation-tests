import { StepLogger } from '../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../components/html/checkbox-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';

import { CommunitiesPage } from './communities.po';

export class CommunitiesPageHelperExtension {
    static async verifyFirstSuggestionHighlighted() {
        const color = await CommunitiesPage.formControls.firstSpellingSuggestion.getCssValue('backgroundColor');
        await ExpectationHelper.verifyStringEqualTo(color, Constants.colorCode.blue);
    }

    static async clickOkButtonFromSpellingEditorPopup() {
        StepLogger.subStep('Click on OK button');
        await CommunitiesPage.formControls.okButtonFromSpellingEditorPopup.hoverOverAndClick();
    }

    static async verifyNotifyMeSection() {
        await CommunitiesPage.formControls.notigyMeLabel.verifyDisplayedStatus();
        await CommunitiesPage.formControls.neverRadioButton.verifyDisplayedStatus();
        await CommunitiesPage.formControls.immediatelyRadioButton.verifyDisplayedStatus();
        await CommunitiesPage.formControls.dailyRadioButton.verifyDisplayedStatus();
        await CommunitiesPage.formControls.weeklyRadioButton.verifyDisplayedStatus();
    }

    static async clickOnDailyRadioButton() {
        StepLogger.subStep('Click on Daily radio button');
        await CommunitiesPage.formControls.dailyRadioButton.hoverOverAndClick();
    }

    static async verifyDailyRadionButtonIsMarked() {
        const selected = await CheckboxHelper.isCheckboxChecked(CommunitiesPage.formControls.dailyRadioButton);
        await ExpectationHelper.verifyStringEqualTo(selected.toString(), Constants.boolean.true.toString());
    }

    static async clickOnComunityDropdown() {
        StepLogger.subStep('Click on Community dropdown');
        await CommunitiesPage.formControls.communityDropdown.hoverOverAndClick();
    }

    static async verifyComunityDropdownOptionsDisplayed() {
        await CommunitiesPage.formControls.communityDropdownOptions.verifyDisplayedStatus();
    }

    static async verifyCommunityLinksDisplayed() {
        await CommunitiesPage.formControls.communityLinks.verifyDisplayedStatus();
    }

    static async clickOnCommunitiesHomeLink() {
        StepLogger.subStep('Click on Communities Home link');
        await CommunitiesPage.formControls.communitiesHomeLink.hoverOverAndClick();
    }
}
