import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { SelfServiceHomePageConstant } from './self-service-home-page.contant';

const tag = HtmlHelper.tags;
const names = SelfServiceHomePageConstant.labels;
const { classes, name, id } = SelfServiceHomePageConstant.attributes;
export class SelfServiceHomePage {
    static get elements() {
        return {
            welcomenLabel: $(by.cssContainingText(tag.span, names.welcome), names.welcome),
            editProfileLink: $(by.cssContainingText(tag.span, names.editPofile), names.editPofile),
            searchButton: $(by.css(`${tag.input}[value=${names.search}]`), names.search),
            searchTextbox: $(by.name(name.searchString), names.searchTextbox),
            productDropdown: $(by.name(name.product), names.product),
            advancedSearchLink: $(by.cssContainingText(tag.a, names.advancedSearch), names.advancedSearch),
            advancedSearchArea: $(by.css(`${tag.table}.${classes.searchborder} ${tag.td}.${classes.searchboxAdv}`),
                names.advancedSearch),
            saveSearch: $(by.cssContainingText(tag.a, names.saveSearch), names.saveSearch),
            savedSearch: $(by.name(name.savedSearches), names.savedSearch),
            savedSearchOptions: $(by.css(`${tag.select}[name="${name.savedSearches}"] ${tag.option}`),
                names.savedSearch),
            searchIn: $(by.name(name.searchFor), names.searchIn),
            products: $(by.css(`${tag.select}[name="${name.product}"][multiple]`), names.products),
            documentType: $(by.name(name.document), names.documentType),
            language: $(by.css(`${tag.select}[name="${name.locale}"`), names.language),
            showFocusChoicesOn: $(by.css(`${tag.input}[name="${name.showFocusChoices}"][value="${names.on}"]`),
                names.showFocusChoicesOn),
            showFocusChoicesOff: $(by.css(`${tag.input}[name="${name.showFocusChoices}"][value="${names.off}"]`),
                names.showFocusChoicesOff),
            author: $(by.name(name.author), names.author),
            publishedFrom: $(by.name(name.fromDatepublished), names.publishedFrom),
            publishedTo: $(by.name(name.toDatepublished), names.publishedTo),
            publicationStatus: $(by.name(name.publicationstatus), names.publicationStatus),
            guidedSearchLink: $(by.cssContainingText(tag.a, names.guidedSearch), names.guidedSearch),
            searchResults: $(xpath(tag.table)
                .where('class', classes.searchactions)
                .followingSibling(tag.table)
                .buildByObject(), names.searchResults),
            customerMicrosite: $(by.cssContainingText(tag.span, names.customerMicrosite), names.customerMicrosite),
            agentMicrosite: $(by.cssContainingText(tag.span, names.agentMicrosite), names.agentMicrosite),
            micrositeTab: $(xpath(tag.a).contains('href', names.micrositeDo).buildByObject(), names.micrositeTab),
            moderateLink: $(by.cssContainingText(tag.span, names.moderate), names.moderate),
            tdMicrosite: $(xpath(tag.a)
                .contains('href', names.tdMicrosite.toUpperCase())
                .buildByObject(), names.tdMicrosite),
            myFavorites: $(by.id(id.savedItemsWidgetId), names.myFavorites),
            myFavoritesEditIcon: $(by.css(`img[src*="${names.edit}"]`), names.edit),
            editFavoriteItems: $(by.css(`.${classes.tableDataRowTwo}`), names.editableItems),
            closeButton: $(by.css(`${tag.input}[value=${names.close}]`), names.close),
            myFavoritesRefreshIcon: $(by.css(
                `#${id.savedItemsWidgetId} ${tag.table} ${tag.tBody} ${tag.tr} ${tag.td}:nth-child(${Constants.number.six})`
            ), names.refresh),
            mySubscriptionsEditButton: $(by.css(`${tag.a}[href*="${names.userProfileSubscriptionTab}"]`), names.edit),
            answerWizardsRefreshButton: $(xpath(tag.td)
                .text(names.answerWizards)
                .parent(tag.tr)
                .descendant(tag.td)
                .descendant(tag.a)
                .descendant(tag.div)
                .descendant(tag.img)
                .contains('src', name.refresh)
                .buildByObject(), names.refresh),
            whatsPopulaRefreshButton: $(by.css(
                `${tag.form}[action="${names.mswhatspopularDo}"] img[src*="${name.refresh}"]`), names.refresh),
            get whatsPopulaWidget() {
                return $(by.css(`${tag.form}[action="${names.mswhatspopularDo}"]`), names.whatsPopular);
            },
            mySubscriptionsWidget: $(by.id(id.mssubscriptionlist), names.mySubscriptions),
            myMicrositesWidget: $(by.id(id.mymicrosites), names.mymicrosites),
            myMicrositesWidgetItems: $(by.css(`.${classes.mymicBackground} ${tag.td} ${tag.a}`),
                names.mymicrosites),
            answerWizardsWidget: $(by.id(id.msbrowseanswerwizards), names.answerWizards),
        };
    }
}
