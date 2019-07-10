import { DropDownHelper } from '../../../../components/html/dropdown-helper';

import { AgentMicrositeConstant } from './agent-microsite.constant';
import { AgentMicrositeHelper } from './agent-microsite.helper';
import { AgentMicrositePage } from './agent-microsite.po';

export class AgentMicrositeHelperExtension {
    static async editTheFirstPageleteToSelectShowOnSearchPage() {
        const pagelet = await AgentMicrositePage.recommendationManagerForm.firstPagelet.getText();
        await AgentMicrositePage.recommendationManagerForm.firstPagelet.hoverOverAndClick();
        await DropDownHelper.selectOptionByText(
            AgentMicrositePage.recommendationManagerForm.showOnDropdown,
            AgentMicrositeConstant.recommendationManagerForm.searchPage);
        await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
        await AgentMicrositeHelper.clickOnPagelestTab();
        return pagelet;
    }

    static async editTheFirstPageleteToSelectShowOnSearchAndHomePage() {
        const pagelet = await AgentMicrositePage.recommendationManagerForm.firstPagelet.getText();
        await AgentMicrositePage.recommendationManagerForm.firstPagelet.hoverOverAndClick();
        await DropDownHelper.selectOptionByText(
            AgentMicrositePage.recommendationManagerForm.showOnDropdown,
            AgentMicrositeConstant.recommendationManagerForm.searchAndHomePage);
        await AgentMicrositeHelper.clickOnSaveButtonFromRecommendationPage();
        await AgentMicrositeHelper.clickOnPagelestTab();
        return pagelet;
    }
}
