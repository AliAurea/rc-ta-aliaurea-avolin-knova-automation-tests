import { by } from 'protractor';

import { $, $$ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { ResolutionFlowConstant } from './resolution-flow.constants';

const { attributes, tags } = HtmlHelper;

export class ResolutionFlowPage {
    private static readonly names = ResolutionFlowConstant.elementNames;
    private static readonly classes = ResolutionFlowConstant.classes;
    private static readonly ids = ResolutionFlowConstant.ids;
    private static readonly tab = ResolutionFlowConstant.tabFields;
    private static readonly builder = ResolutionFlowConstant.builderTab;
    private static readonly msg = ResolutionFlowConstant.messages;
    private static readonly procTab = ResolutionFlowConstant.procDesignerTab;
    private static readonly attr = ResolutionFlowConstant.reorder;

    static get buttons() {
        return {
            newResolutionFlow: $(by.css(`input[value="${this.names.newResolutionFlow}"]`), this.names.newResolutionFlow),
            reorder: $(by.css(`input[value="${this.names.reorder}"]`), this.names.reorder),
            validate: $(by.css(`input[value="${this.names.validate}"]`), this.names.validate),
            save: $(by.css(`input#${this.ids.savebtn}`), this.names.save),
            cancel: $(by.css(`input#${this.ids.cancelIFrameId}`), this.names.cancel),
        };
    }

    static get show() {
        return {
            showDropdown: $(by.css(`${tags.select}#${this.ids.show}`), this.names.show),
            showOption: (name: string) => $(
                by.cssContainingText(ResolutionFlowConstant.showDropdown.option, name), name),
            allOptions: $$(by.css(ResolutionFlowConstant.showDropdown.option), this.names.show),
        };
    }

    static get tableFields() {
        return {
            name: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.name), this.tab.name),
            description: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.description), this.tab.description),
            visible: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.visible), this.tab.visible),
            communityUsed: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.communityUsed), this.tab.communityUsed),
            moderator: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.moderator), this.tab.moderator),
            delete: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.delete), this.tab.delete),
            copy: $(by.cssContainingText(`${tags.td}.${this.classes.tableHeader}`, this.tab.copy), this.tab.copy),
        };
    }

    static get builderTab() {
        return {
            builder: $(by.css(`${tags.li}#${this.ids.builder}`), this.names.builder),
            name: $(by.css(`form[name=${this.builder.rfDesignerForm}] input[name="${this.builder.name}"]`), this.builder.name),
            moderator: $(by.css(`form[name=${this.builder.rfDesignerForm}] td.${this.classes.bodyBold}`), this.builder.name),
            selectModerator: $(by.id(this.builder.moderatorId), this.names.select),
            makeVisible: $(by.css(`input[name="${this.builder.displayCSG}"]`), this.builder.makeVisible),
            lastModified: $(by.css(`${tags.span}#${this.builder.lastModifiedText}`), this.builder.lastModified),
            displayDescription: $(by.css(`${tags.textArea}[name="${this.builder.displayDescription}"]`), this.builder.displayDescription),
            internalDescription: $(by.css(`${tags.textArea}[name="${this.builder.internalDescription}"]`), this.builder.internalDescription),
            timer: $(by.css(`input[name="${this.builder.timer}"]`), this.builder.timer),
            communityDropdown: $(by.css(`select[name="${this.builder.associatedForum}"]`), this.builder.community),
            communityDropdownOption: (name: string) => $(
                by.cssContainingText(this.builder.communityOption, name), name),
            editBtn: $(by.css(`input#${this.builder.editForumsId}`), this.names.edit),
            newRuleBtn: $(by.css(`input[value="${this.builder.newRule}"]`), this.builder.newRule),
            dialogIFrame: $(by.id(this.builder.dialogIFrame), this.builder.dialogIFrame),
            moderatorIFrame: $(by.css(`#${this.builder.moderatorIFrame}`), this.builder.moderatorIFrame),
            moderatorTable: $(by.id(this.builder.moderatorTable), this.builder.moderator),
            moderatorCheckbox: $(xpath(tags.input)
                .where(attributes.name, this.builder.radioButton)
                .first()
                .buildByObject(), this.builder.moderator),
            moderatorName: $(xpath(tags.td)
                .descendant(tags.a)
                .first()
                .buildByObject(), this.builder.moderator),
            selectedModerator: $(by.id(this.builder.moderatorDisplay), this.builder.moderator),
            ok: $(by.id(this.ids.okId), this.names.ok),
            cancel: $(by.id(this.ids.cancelIFrameId), this.names.cancel),
            successMsg: $(by.cssContainingText(`${tags.td} ${tags.div}.${this.classes.body}`,
                this.msg.resolutionFlowSuccessfullySaved), this.msg.resolutionFlowSuccessfullySaved),
            allCommunities: $$(by.css(this.builder.communityOption), this.names.communities),
            newSteps: $(by.css(`input[value="${this.builder.newSteps}"]`), this.builder.newSteps),
            createdStep: (name: string) => $(
                by.cssContainingText(`${tags.a}.${this.classes.bodySteps}`, name), name),
        };
    }

    static get titles() {
        return {
            pageTitle: $(by.css(`${tags.span}.${this.classes.title}`), this.names.resolutionFlowDesigner),
        };
    }

    static get inboxTab() {
        return {
            inbox: $(by.css(`${tags.li}#${this.ids.inbox}`), this.ids.inbox),
            resolutionFlow: (name: string) => $(
                by.cssContainingText(tags.a, name), name),
            allResolutionFlows: (name: string) => $$(
                by.cssContainingText(tags.a, name), name),
            moderator: (name: string) => $(
                by.xpath(`(//tr[contains(@class,"${this.classes.tableDataRow}")][descendant::td//a[contains(text(),"${name}")]]//td)[5]//span`),
                this.builder.moderator),
            visible: (name: string) => $(
                by.xpath(`(//tr[contains(@class,"${this.classes.tableDataRow}")][descendant::td//a[contains(text(),"${name}")]]//td//img)[1]`),
                this.builder.visible),
            description: (name: string) => $(
                by.xpath(`(//tr[contains(@class,"${this.classes.tableDataRow}")][descendant::td//a[contains(text(),"${name}")]]//td)[2]//span`),
                this.tab.description),
            community: (name: string) => $(
                by.xpath(`(//tr[contains(@class,"${this.classes.tableDataRow}")][descendant::td//a[contains(text(),"${name}")]]//td)[4]//span`),
                this.builder.community),
            copy: (name: string) => $(
                by.xpath(`(//tr[contains(@class,"${this.classes.tableDataRow}")][descendant::td//a[contains(text(),"${name}")]]//td)[7]//a`),
                this.tab.copy),
            resolutionFlowList: $$(by.xpath(`//tr[contains(@class,"${this.classes.tableDataRow}")]//td[1]//a`), this.names.list),
            noDataMsg: $(by.cssContainingText(`${tags.div}.${this.classes.noDataMsg}`, this.msg.noDataToDisplay), this.msg.noDataToDisplay),
        };
    }

    static get duplicateNameWindow() {
        return {
            okBtn: $(by.css(`input[value="${this.names.ok}"]`), this.names.ok),
            dialog: $(by.cssContainingText(HtmlHelper.tags.span, this.msg.duplicateName),
                this.msg.duplicateName),
        };
    }

    static get communityModeratorWindow() {
        return {
            okBtn: $(by.css(`input[value="${this.names.ok}"]`), this.names.ok),
            dialog: $(by.cssContainingText(tags.span, this.msg.communityModerator),
                this.msg.communityModerator),
            text: $(by.css(`${tags.span}#${this.ids.text}`), this.names.message),
        };
    }

    static get saveChangesWindow() {
        return {
            yesBtn: $(by.css(`input[value="${this.names.yes}"]`), this.names.yes),
            noBtn: $(by.css(`input[value="${this.names.no}"]`), this.names.no),
            cancelBtn: $(by.css(`input[value="${this.names.cancel}"]`), this.names.cancel),
            dialog: $(by.cssContainingText(tags.td, this.msg.saveChanges), this.msg.saveChanges),
        };
    }

    static get processFlowTab() {
        return {
            tab: $(by.css(`${tags.li}#${this.procTab.procDesigner}`), this.names.procDesigner),
            newStep: $(by.id(this.procTab.newStepId), this.names.newStep),
            expandAll: $(by.id(this.procTab.expandAllId), this.names.expandAll),
            save: $(by.id(this.procTab.saveId), this.names.save),
            stepDetails: $(by.css(`${tags.div}#${this.procTab.steps}`), this.procTab.steps),
            nameStep: $(by.id(this.procTab.stepNameInput), this.procTab.stepName),
            closeBtn: $(by.css(`${tags.div}#${this.procTab.steps} ${this.procTab.closeTd} ${tags.img}`), this.names.close),
            successMsg: $(by.cssContainingText(`${tags.td} ${tags.span}.${this.classes.body}`,
                this.msg.resolutionFlowSuccessfullySaved), this.msg.resolutionFlowSuccessfullySaved),
        };
    }

    static get copyDialog() {
        return {
            dialogIFrame: $(by.id(this.builder.dialogIFrame), this.builder.dialogIFrame),
            name: $(by.css(`input[name="${this.names.copyName}"]`), this.names.copyName),
            okBtn: $(by.css(`input#${this.ids.okId}`), this.names.ok),
            cancelBtn: $(by.css(`input#${this.ids.cancelIFrameId}`), this.names.cancel),
        };
    }

    static get passedValidationWindow() {
        return {
            okBtn: $(by.css(`input[value="${this.names.ok}"]`), this.names.ok),
            dialog: $(by.cssContainingText(HtmlHelper.tags.span, this.msg.passedValidation),
                this.msg.passedValidation),
        };
    }

    static get reorder() {
        return {
            dialogIFrame: $(by.css(`#${this.builder.dialogIFrame}`), this.builder.dialogIFrame),
            moveUp: $(by.css(`[${attributes.alt}='${this.attr.moveUp}']`), this.attr.moveUp),
            moveDown: $(by.css(`[${attributes.alt}='${this.attr.moveDown}']`), this.attr.moveDown),
            ok: $(by.id(this.ids.okId), this.names.ok),
            cancel: $(by.id(this.ids.cancelIFrameId), this.names.cancel),
            allItems: $$(by.css(`${this.attr.items} ${tags.option}`), this.builder.dialogIFrame),
            selectItem: (itemName: string) => $(xpath(tags.select)
                .where(attributes.name, this.attr.rules)
                .descendant(tags.option)
                .text(itemName)
                .buildByObject(), itemName),
        };
    }
}
