import { by } from 'protractor';

import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { ProfileEditorConstant } from './profile-editor.constant';

const { tags, attributes } = HtmlHelper;
export class ProfileEditorPage {
    static get titles() {
        const labels = ProfileEditorConstant.titles;
        return {
            profileEditor: $(by.cssContainingText('.pop_hd_text', labels.profileEditor), labels.profileEditor),
        };
    }

    static get ProfileDataForm() {
        const labels = ProfileEditorConstant.profileDataFormLabels;
        return {
            textBoxes: {
                userName: this.getTexboxElement(labels.textBoxes.userName),
                password: this.getTexboxElement(labels.textBoxes.password),
                confirmPassword: this.getTexboxElement(labels.textBoxes.confirmPassword),
                firstName: this.getTexboxElement(labels.textBoxes.firstName),
                lastName: this.getTexboxElement(labels.textBoxes.lastName),
                email: this.getTexboxElement(labels.textBoxes.email),
                bio: $(by.id(labels.textBoxes.bio), labels.textBoxes.bio),
            },
            checkBoxes: {
                role(roleName: string) {
                    return $(xpath(HtmlHelper.tags.a)
                        .textContains(roleName)
                        .parent(HtmlHelper.tags.td)
                        .precendingSibling(HtmlHelper.tags.td)
                        .descendant(HtmlHelper.tags.input)
                        .buildByObject(), roleName);
                },
            },
            buttons: {
                save: $(by.id('saveID'), labels.buttons.save),
                submit: $(by.id('submitID'), labels.buttons.submit),
                cancel: $(by.id('cancelID'), labels.buttons.cancel),
                delete: $(by.id('deleteBtn'), labels.buttons.delete),
                expertiseProfileSelect: this.getSmallButton(labels.buttons.expertiseProfileSelect),
                groupsSelect: this.getSmallButton(labels.buttons.groupsSelect),
                accessLevelsSelect: this.getSmallButton(labels.buttons.accessLevelsSelect),
                universalMetadataSelect: this.getSmallButton(labels.buttons.universalMetadataSelect),
            },
            labels: {
                accessLevel(accessLevel: string) {
                    return $(by.cssContainingText('#accessLevel', accessLevel), accessLevel);
                },
            },
            successfullySaved: $(
                by.cssContainingText('.aptean_body', labels.successfullyUser),
                labels.successfullyUser),
        };
    }

    static get popUps() {
        const popUps = ProfileEditorConstant.popUps;
        const defProduct = ProfileEditorConstant.testData.defMetadataProduct;
        const titles = ProfileEditorConstant.tabs.tableHeaders;
        const defProductValue = defProduct.toUpperCase();
        return {
            titles: {
                selectAccessLevels: this.getTitle(popUps.titles.selectAccessLevels),
                emailSubscriptionStep1 : this.getTitle(popUps.titles.emailSubscriptionStep1),
                emailSubscriptionStep2: this.getTitle(popUps.titles.emailSubscriptionStep2),
                universalMetadataSelect: this.getTitle(popUps.titles.universalMetadata),
                selectRSSFeeds: this.getTitle(popUps.titles.selectRSSFeeds),
            },
            buttons: {
                add: this.getPopUpButton(popUps.buttons.add),
                remove: this.getPopUpButton(popUps.buttons.remove),
                ok: this.getPopUpButton(popUps.buttons.ok),
                cancel: this.getPopUpButton(popUps.buttons.cancel),
                next: this.getPopUpButton(popUps.buttons.next),
                submit: this.getPopUpButton(popUps.buttons.submit),
                close: this.getPopUpButton(popUps.buttons.close),
            },
            accessLevel: $(by.id('nameSAL_Public'), popUps.titles.selectAccessLevels),
            emailSubscriptionStep1 : {
                categoryDropDown: $(by.id('conceptcategory'), popUps.dropdowns.category),
                sendEmailsDropDown: $(by.css('select[name="email"]'), popUps.dropdowns.sendEmails),
            },
            emailSubscriptionStep2: {
                languages: {
                    languagesDropDown: $(by.css('select[name="kbLanguage"]'), popUps.dropdowns.languages),
                    languagesDropDownOptions: $$(by.css('[name=\'kbLanguage\'] option'), popUps.dropdowns.languages),
                },
                titleContentsTextBox: $(by.css('input[name="keywords"]'), popUps.textBoxes.titleContents),
                segmentsSelectButton: $(by.css('input[value="Select"]'), popUps.buttons.select),
                metadataSelectProduct(index: string) {
                    return $(by
                        .xpath(`(//div[contains(@id,"wrapper_SG_${defProductValue}")])[${index}]`), defProduct);
                },
                metadataSelectedProduct(index: string) {
                    return $(by
                    .xpath(`(//option[contains(@value,"SG_${defProductValue}")])[${index}]`), defProduct);
                },
                metadataSelectedDropDown: $(by.id('selectedUM'), defProduct),
                metadataToggler: $(by.xpath('//div[@id="xSG_SupportGoals"]/a'), defProduct),
                selectedMetadata: $(by.css('#selectedMetadata'), defProduct),
                selectedMetadataName(name: string) {
                    return $(by
                        .xpath(`//span[@id="selectedMetadata"][contains(text(),"${name}")]`), name);
                },
                community: {
                    communityDropDown: $(by.css('select[name="NodeId"]'), popUps.dropdowns.languages),
                    communityDropDownOptions: $$(by.css('[name=\'NodeId\'] option'), popUps.dropdowns.languages),
                },
                checkBoxes: {
                    question: this.getCheckbox(popUps.checkBoxes.question),
                    insight: this.getCheckbox(popUps.checkBoxes.insight),
                    topic: this.getCheckbox(popUps.checkBoxes.topic),
                    webCase: this.getCheckbox(popUps.checkBoxes.webCase),
                },
            },
            emailSubscriptionKB(name: string) {
                return $(by.xpath(`//*[@id="content-table"]/table/tbody/tr/td[contains(text(),"${name}")]`), name);
            },
            emailSubscriptionCommunities(name: string) {
                return $(by.xpath(`//*[@id="content-table"]/table/tbody/tr[1]/td[2]/a[contains(text(),"${name}")]`), name);
            },
            firstURL: $(by.xpath('(//tr[@class="table_data_row1"]//child::td/a)[1]'), popUps.firstURL),
            firstDeleteButton: $(by
                .xpath(`//tr[@class="table_data_row1"]//a[contains(@onclick, "${popUps.delete}")]`)
                , popUps.delete
            ),
            firstEditButton: $(by
                .xpath(`(//tr[@class="table_data_row1"]//child::td//input[@value="${titles.edit}"])[1]`),
                titles.edit
            ),
            selectRSSFeedsHeaders: {
                name: this.getSelectFeedTableHeader(popUps.selectRSSFeedsHeaders.name),
                description: this.getSelectFeedTableHeader(popUps.selectRSSFeedsHeaders.description),
                url: this.getSelectFeedTableHeader(popUps.selectRSSFeedsHeaders.url),
            },
        };
    }

    private static getCheckbox(name: string) {
        return $(by.css(`input[name='${name}']`), name);
    }

    public static getEmailSubscriptionDdOptions(name: string) {
        return {
            category: $(by.cssContainingText('select[id="conceptcategory"] option', name), name),
            email: $(by.cssContainingText('select[name="email"] option', name), name),
        };
    }

    private static getPopUpButton(value: string) {
        return $(by.css(`input[value="${value}"]`), value);
    }

    private static getTexboxElement(label: string) {
        return $(by.css(`${tags.input}[${attributes.name}=${label}]`), label);
    }

    private static getSmallButton(label: string) {
        return $(xpath(HtmlHelper.tags.td)
            .textContains(label)
            .parent(HtmlHelper.tags.td)
            .precendingSibling(HtmlHelper.tags.td)
            .descendant(HtmlHelper.tags.input)
            .buildByObject(), label);
    }

    static get tabs() {
        const label = ProfileEditorConstant.tabs;
        return {
            titles: {
                subscription: $(by.id('susbscription'), label.titles.subscription),
                notifications: $(by.id('notifications'), label.titles.notifications),
                communities: $(by.id('forums'), label.titles.communities),
                preferences: $(by.id('preferences'), label.titles.preferences),
            },
            contentSubscription: {
                buttons: {
                    createEmailSubscription: $(
                        by.css(`input[value="${label.buttons.createEmailSubscription}"]`),
                        label.buttons.createEmailSubscription),
                    selectRSSFeeds: $(by.css(`input[value="${label.buttons.selectRSSFeeds}"]`), label.buttons.selectRSSFeeds),
                },
                tableHeaders: {
                    type: this.getTableHeader(label.tableHeaders.type),
                    item: this.getTableHeader(label.tableHeaders.item),
                    howOften: this.getTableHeader(label.tableHeaders.howOften),
                    edit: this.getTableHeaderExtra(label.tableHeaders.edit),
                    del: this.getTableHeaderExtra(label.tableHeaders.del),
                },
            },
        };
    }

    private static getSelectFeedTableHeader(name: string) {
        return $(by.xpath(`//td[contains(text(), "${name}")]`), name);
    }

    private static getTableHeader(name: string) {
        return $(by.xpath(`//td[@class="table_header"]//span[contains(text(),"${name}")]`), name);
    }

    private static getTableHeaderExtra(name: string) {
        return $(by.xpath(`//td[@class="table_header"]//child::span//b[contains(text(),"${name}")]`), name);
    }

    private static getTitle(title: string) {
        return $(by.cssContainingText('#ui-id-1', title), title);
    }
}
