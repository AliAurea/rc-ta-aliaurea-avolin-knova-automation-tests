import { by } from 'protractor';

import { $, $$ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { AgentMicrositeSelfServiceConstant } from './agent-microsite.constant';

const names = AgentMicrositeSelfServiceConstant.formControls;
const title = AgentMicrositeSelfServiceConstant.titles;
const tag = HtmlHelper.tags;

export class AgentMicrositeSelfServicePage {

    static get formControls() {
        return {
            agentMicrositeTab: $(by.cssContainingText(tag.span, names.agentMicrositeTab), names.agentMicrositeTab),
            submitBtnDialogWindow: $(by.css(`input[value="${names.submit}"]`), names.submit),
            okBtnDialogWindow: $(by.css('input[value="OK"'), names.ok),
            closeBtnDialogWindow: $(by.css(`input[value="${names.close}"]`), names.close),
            whatsPopular: {
                firstDocument: $(by.xpath('(//table[@class="GS_document"]//a)[1]'),
                    names.whatsPopular.firstWhatsPopularDocument
                ),
                documentDetailsTitle: $(by.className('document_title'), names.whatsPopular.documentDetailsTitle),
                tabBars: $$(by.xpath(`//td[@class="${names.whatsPopular.tabBar}"]`), names.whatsPopular.tabBar),
                tabBar: 'tabbar',
                fullScreen: this.getTabBarWithTitle(names.whatsPopular.fullScreen),
                addToFavorites: this.getTabBarWithTitle(title.addToFavorites),
                bookMark: this.getTabBarWithTitle(names.whatsPopular.bookMark),
                emailDoc: this.getTabBarWithTitle(names.whatsPopular.emailDoc),
                rssSubscribe: $(by
                    .xpath(`//img[@title="${names.whatsPopular.rssSubscribe}"]//parent::a`),
                        names.whatsPopular.rssSubscribe
                    ),
                emailSubscribe: $(by
                    .xpath(`//img[@title="${names.whatsPopular.emailSubscribe}"]//parent::a`),
                    names.whatsPopular.emailSubscribe
                    ),
                printDoc: this.getTabBarWithTitle(names.whatsPopular.printDoc),
                backToPrevious: this.getTabBarWithTitle(names.whatsPopular.backToPrevious),
                upToResearchResults: this.getTabBarWithTitle(names.whatsPopular.upToResearchResults),
                toEmailTextbox: $(by.css('input[name="toAddress"'), names.whatsPopular.toEmailTextBox),
                sendEmailDropDown: $(by
                    .css(`select[name="${names.whatsPopular.sendEmailsDropDown}"]`),
                        names.whatsPopular.sendEmailsDropDown
                    ),
            },
        };
    }

    static getTabBarWithTitle(tabTitle: string) {
        return $(by.xpath(`//a[@title="${tabTitle}"]`), tabTitle);
    }

    static get sections() {
        return {
            whatsPopular: $(by.cssContainingText('.results_title', title.whatsPopular),
                title.whatsPopular
            ),
        };
    }
}
