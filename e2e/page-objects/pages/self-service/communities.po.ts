import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { CommunitiesConstant } from './communities.constant';

const tag = HtmlHelper.tags;
const names = CommunitiesConstant.formControls;
const attr = CommunitiesConstant.attributes;
const msg = CommunitiesConstant.messages;
const title = CommunitiesConstant.titles;

export class CommunitiesPage {

    static get titles() {
        return {
            postAQuestion: $(xpath(tag.td)
                .textContains(names.postAQuestionPrefix)
                .textContains(names.postAQuestionSufix)
                .buildByObject(), names.postAQuestion),
            PreviewAndSubmitPost: $(by.cssContainingText(tag.td, title.PreviewAndSubmitPost), title.PreviewAndSubmitPost),
        };
    }

    static get formControls() {
        const recent = names.myMostRecentPostsOps;
        const titles = CommunitiesConstant.titles;
        return {
            comunitiesTab: $(by.cssContainingText(tag.span, names.comunities), names.comunities),
            communitiesHomeLink: $(by.cssContainingText(tag.a, names.communitiesHome), names.communitiesHome),
            newPost: $(by.css(`${tag.input}[value="${attr.value.newPost}"]`), names.newPost),
            cancelButton: $(by.cssContainingText(tag.a, names.cancel), names.cancel),
            addButton: $(by.css(`${tag.input}[value="${attr.value.add}"]`), names.add),
            communityLink: $(xpath(tag.span)
                .descendant(tag.a)
                .contains('href', '/selfservice/browse.do')
                .nthChild(Constants.number.one)
                .buildByObject(), names.communityLink),
            communityLinks: $(xpath(tag.span)
                .descendant(tag.a)
                .contains('href', '/selfservice/browse.do')
                .buildByObject(), names.communityLinks),
            comunityLinkByText(text: string) {
                return $(by.cssContainingText(tag.div, text), text);
            },
            communityPageDetailsHeaderByText(text: string) {
                return $(by.cssContainingText(tag.div, text), text);
            },
            newPostButtonFromACommunityPage: $(by.cssContainingText(tag.a, names.newPost), names.newPost),
            subjectTextbox: $(by.name(attr.name.title), names.subject),
            communityDropdown: $(by.name(attr.name.selectedForumID), names.community),
            communityDropdownOptionByIndex(index: number) {
                return $(xpath(tag.select)
                    .where('name', attr.name.selectedForumID)
                    .descendant(tag.option)
                    .nthChild(index)
                    .buildByObject(), names.community);
            },
            continueButton: $(by.cssContainingText(tag.a, names.continue), names.continue),
            detailsTextbox: $(by.css(`.${attr.class.cke_editable}`), names.details),
            detailsParagraph: $(by.css(`.${attr.class.cke_editable} ${tag.p}`), names.details),
            submitButton: $(by.cssContainingText(tag.a, names.submit), names.submit),
            myMostRecentPostsSection: $(by.cssContainingText(tag.td, names.myMostRecentPosts), names.myMostRecentPosts),
            recentBySubject(text: string) {
                return $(xpath(tag.a)
                    .contains('href', 'MRPShow')
                    .textContains(text)
                    .buildByObject(), text);
            },
            recentByIndex(index: number) {
                return $(xpath(tag.a)
                    .contains('href', 'MRPShow')
                    .nthChild(index)
                    .buildByObject(), 'link ' + index);
            },
            showAllLink: $(by.cssContainingText(tag.a, names.showAll), names.showAll),
            showFewerLink: $(by.xpath(`//a[contains(text(),"${names.showFewer}")]`), names.showFewer),
            showFewer: $(by.cssContainingText(tag.a, names.showFewer), names.showFewer),
            previewSubjectByText(text: string) {
                return $(by.cssContainingText(tag.span, text), text);
            },
            previewDetailsByText(text: string) {
                return $(by.cssContainingText(tag.p, text), text);
            },
            dateFieldBysubject(subject: string) {
                return $(xpath(tag.a)
                    .textContains(subject)
                    .parent(tag.td)
                    .followingSibling(tag.td)
                    .followingSibling(tag.td)
                    .buildByObject(), names.date);
            },
            editButton: $(xpath(tag.a).contains('href', 'editPostClicked()').buildByObject(), names.edit),
            postLinkFromBrowsePageBySubject(subject: string) {
                return $(xpath(tag.a)
                    .contains('href', 'assignURL')
                    .textContains(subject)
                    .buildByObject(), subject);
            },
            myMostRecentPosts: {
                headers: {
                    subject: this.getTableColumn(recent.subject),
                    community: this.getTableColumn(recent.community),
                    posted: this.getTableColumn(recent.posted),
                },
                tableElements: $$(by
                    .xpath(`//td[contains(text(),"${recent.subject}")]//parent::tr//parent::tbody//parent::table//tr`),
                    names.myMostRecentPostsOps.table
                ),
            },
            mySubscriptions: {
                editButton: $(by.cssContainingText(`a[class="${attr.class.blueButtons}"]`,
                    names.mySubscriptions.editButton),
                    names.mySubscriptions.editButton
                ),
                title: $(by.cssContainingText(tag.a, titles.contentSubscriptions), titles.contentSubscriptions),
                header: $(by.css('.pop_logo + td .pop_hd_text'),
                    titles.contentSubscriptions),
            },
            buttons: {
                cancel: this.getButtonByValue(names.cancel),
                search: this.getButtonByValue(names.search),
                advancedSearch: $(by.xpath(`(//input[@value="${names.search}"])[2]`), names.search),
                submit: this.getButtonByValue(names.submit),
            },
            dropDowns: {
                searches: {
                    searchesDropDown: $(by.css('select[name="forum"]'), names.searchesDropDown),
                    searchesDropDownOptions: $$(by.css('[name=\'forum\'] option'), names.searchesDropDown),
                },
            },
            results: $(by.css('.results_title'), names.results),
            advancedSearch: $(by.cssContainingText(tag.a, names.advancedSearch), names.advancedSearch),
            textBoxes: {
                searchName: $(by.id('Title'), CommunitiesConstant.attributes.name.title),
            },
            abcButton: $(by.css(`${tag.input}[value="${attr.value.abc}"]`), names.abc),
            firstSpellingSuggestion: $(xpath(tag.select)
                .contains('name', attr.name.suggestions)
                .descendant(tag.option)
                .nthChild(Constants.number.one)
                .buildByObject(), names.suggestions),
            spellingSuggestionByText(text: string) {
                return $(xpath(tag.select)
                    .contains('name', attr.name.suggestions)
                    .descendant(tag.option)
                    .textContains(text)
                    .buildByObject(), names.suggestions);
            },
            okButtonFromSpellingEditorPopup: $(by.css(`${tag.input}[value="${attr.value.ok}"]`), names.ok),
            notigyMeLabel: $(by.cssContainingText(tag.b, names.notifyMe), names.notifyMe),
            neverRadioButton: $(by.id(attr.id.never), names.never),
            immediatelyRadioButton: $(by.id(attr.id.instant), names.immediately),
            dailyRadioButton: $(by.id(attr.id.daily), names.daily),
            weeklyRadioButton: $(by.id(attr.id.never), names.weekly),
            communityDropdownOptions: $(xpath(tag.select)
                .where('name', attr.name.selectedForumID)
                .descendant(tag.option)
                .buildByObject(), names.community),
        };
    }

    static get messages() {
        return {
            pleaseEnterSomeDetailsForThisPost: $(by.cssContainingText(
                tag.span,
                msg.pleaseEnterSomeDetailsForThisPost),
                msg.pleaseEnterSomeDetailsForThisPost),
            pleaseEnterASubjectForThisPost: $(by.cssContainingText(
                tag.span,
                msg.pleaseEnterASubjectForThisPost),
                msg.pleaseEnterASubjectForThisPost
            ),
            communitiesIsACategoryPleaseSelectACommunity: $(by.cssContainingText(
                tag.td,
                msg.communitiesIsACategoryPleaseSelectACommunity),
                msg.communitiesIsACategoryPleaseSelectACommunity),
        };
    }

    private static getButtonByValue(name: string) {
        return $(by.css(`input[value="${name}"]`), name);
    }

    private static getTableColumn(name: string) {
        return $(by.xpath(`//td[@class="bodyGray11"][contains(text(),"${name}")]`), name);
    }

    public static editButtonForSegment(segment: string) {
        const btn = names.mySubscriptions.editButton;
        return $(by
            .xpath(`//td[contains(text(),"${segment}")]//following-sibling::td/child::input[@value="${btn}"]`)
            , segment
        );
    }

    static get editButtons() {
        return $$(by.css(`[class*="${attr.class.btnLtBlue}"]`),
            names.mySubscriptions.editButton);
    }

    static get filters() {
        const labels = CommunitiesConstant.filters;
        return {
            searchInDropDown: $(by.css(`select[name="${labels.searchInDropDown}"]`), labels.searchInDropDown),
            communityDropDown: $(by
                .xpath(`//*[contains(@id,"div_expertsearch")]//select[@name="${labels.communityDropDown}"]`),
                labels.communityDropDown
            ),
            publisheDropDown: $(by.css(`select[name="${labels.publisheDropDown}"]`), labels.publisheDropDown),
            showFocusChoicesRadioBtnOn: $(by.css(`input[value="${labels.focusOn}"]`),
                labels.focusOn
            ),
            showFocusChoicesRadioBtnOff: $(by.css(`input[value="${labels.focusOff}"]`),
                labels.focusOff
            ),
            authorTextBox: $(by.css(`input[name="${labels.authorTextBox}"]`), labels.authorTextBox),
            documentTypeDropDown: $(by.css(`select[name="${labels.documentTypeDropDown}"]`),
                labels.documentTypeDropDown
            ),
            languageDropDown: $(by.css(`select[name="${labels.languageDropDown}"]`), labels.languageDropDown),
            guidedSearch: $(by.cssContainingText(tag.a, labels.guidedSearch), labels.guidedSearch),
            saveSearch: $(by.cssContainingText(tag.a, labels.saveSearch), labels.saveSearch),
            newestDiscussionsOptions: {
                newestDiscussionsDropDown: $(by.xpath(`(//select[@name="${labels.newestDiscussions}"])[1]`),
                    labels.newestDiscussions
                ),
                newestDiscussionsDropDownOptions: $$(by.css(`[name="${labels.newestDiscussions}"] option`),
                    labels.newestDiscussions
                ),
            },
            firstNewestDiscussion: $(by.xpath(CommunitiesConstant.xpaths.firstNewestDisc), labels.firstNewestDiscussion),
            mostPopularDiscussionsOptions: {
                mostPopDiscussionsDropDown: $(by.xpath(`(//select[@name="${labels.mostPopDiscussions}"])[1]`),
                    labels.newestDiscussions
                ),
                mostPopDiscussionsDropDownOptions: $$(by.css(`[name="${labels.mostPopDiscussions}"] option`),
                    labels.mostPopDiscussions
                ),
            },
            firstPopularDiscussion: $(by.xpath(CommunitiesConstant.xpaths.firstPopDisc), labels.firstPopularDiscussion),
            communityDropdownOptionAdvancedSearchByIndex(index: string) {
                return $(by
                    .xpath(`(//select[@name="${attr.name.forumCommunity}"]//child::option[position()=${index}])[2]`),
                    attr.name.forumCommunity
                );
            },
        };
    }
}
