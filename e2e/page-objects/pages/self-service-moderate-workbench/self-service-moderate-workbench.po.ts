import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { SelfServiceModerateWorkbenchConstant } from './self-service-moderate-workbench.constant';

const { class: classes, name } = SelfServiceModerateWorkbenchConstant.attributes;
const tag = HtmlHelper.tags;
const title = SelfServiceModerateWorkbenchConstant.titles;
const names = SelfServiceModerateWorkbenchConstant.names;

export class SelfServiceModerateWorkbenchPage {
    static get titles() {
        return {
            moderatorWorkbench: $(by.cssContainingText(`${tag.span}.${classes.subnavOn}`,
                title.moderatorWorkbench),
                title.moderatorWorkbench),
            activeWebCases: $(by.cssContainingText(tag.span,
                names.activeWebCases),
                names.activeWebCases),
        };
    }

    static get elements() {
        return {
            getTabByText(text: string) {
                return $(xpath(tag.span)
                    .contains('class', classes.subnav)
                    .text(text)
                    .buildByObject(), text);
            },
            webCasesContainer: $(by.className(classes.tableBorder), names.webCasesContainer),
            webCasesTab: $(by.cssContainingText(`${tag.a}[href*=${classes.manageCasesAction}] ${tag.span}`,
                names.webCases),
                names.webCases),
            selectRfCommunity: $(by.name(name.rfId), names.selectRfCommunity),
            toolsSection: $(by.cssContainingText(tag.span, names.tools), names.tools),
            viewEditResolutionFlowMembersLink: $(by.cssContainingText(tag.a, names.viewEditResolutionFlowMembers),
                names.viewEditResolutionFlowMembers),
            selectRfCommunitySecondOption: $(by.css(
                `${tag.select}[name=${name.rfId}] ${tag.option}:nth-child(${Constants.number.two})`
            ), names.selectRfCommunity),
            selectRfCommunityOptionByText(text: string) {
                return $(xpath(tag.select)
                    .where('name', name.rfId)
                    .descendant(tag.option)
                    .text(text)
                    .buildByObject(), text);
            },
            username: $(by.name(name.username), names.username),
            searchIcon: $(by.name(name.btnSearch), names.searchIcon),
            getSearchResultsRecordByText(text: string) {
                return $(by.cssContainingText(`${tag.a}[href*="${name.openUserDetails}"]`,
                    text),
                    names.searchResults);
            },
            get webCasesAlertsTable() {
                return $(xpath(tag.span)
                    .textContains(names.webCaseAlerts)
                    .parent(tag.td)
                    .parent(tag.tr)
                    .parent(tag.tBody)
                    .parent(tag.table)
                    .followingSibling(tag.table)
                    .buildByObject(), names.webCaseAlerts);
            },
            get contentAlertsTable() {
                return $(xpath(tag.span)
                    .textContains(names.webCaseAlerts)
                    .parent(tag.td)
                    .parent(tag.tr)
                    .parent(tag.tBody)
                    .parent(tag.table)
                    .followingSibling(tag.table)
                    .buildByObject(), names.contentAlerts);
            },
            titleLink: $(by.css(`${tag.a}[href*="${name.viewprofane}"]`), names.titleLink),
            sensitiveWords: $(by.cssContainingText(tag.b, names.sensitiveWords), names.sensitiveWords),
            edit: $(by.css(`${tag.input}[value="${names.edit}"]`), names.edit),
            delete: $(by.css(`${tag.input}[value="${names.delete}"]`), names.delete),
            save: $(by.css(`${tag.input}[value="${names.save}"]`), names.save),
            editDescriptionLink: $(by.cssContainingText(tag.a, names.editDescription), names.editDescription),
            description: $(by.name(name.description), names.description),
        };
    }
}
