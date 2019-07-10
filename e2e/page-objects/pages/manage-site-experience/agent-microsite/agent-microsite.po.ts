import { by, element } from 'protractor';
import { By } from 'selenium-webdriver';

import { Constants } from '../../../../components/misc-utils/constants';
import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { AgentMicrositeConstant } from './agent-microsite.constant';

const tag = HtmlHelper.tags;
const title = AgentMicrositeConstant.titles;
const resFlowForm = AgentMicrositeConstant.resolutionFlowDesignerForm;
const att = AgentMicrositeConstant.attributes;
const message = AgentMicrositeConstant.messages;

export class AgentMicrositePage {

    static get titles() {
        return {
            resolutionFlowDesigner: $(by.cssContainingText(tag.span, title.resolutionFlowDesigner), title.resolutionFlowDesigner),
            deletePoppup: $(by.cssContainingText(tag.span, title.deletePopup), title.deletePopup),
            recommendationManager: $(by.cssContainingText(tag.span, title.recommendationManager), title.recommendationManager),
        };
    }

    static get resolutionFlowDesignerForm() {
        return {
            resolutionNameList: $(xpath(tag.a).contains('href', 'openRF').buildByObject(), resFlowForm.resolutionNamesList),
            builderTab: $(by.id(att.id.builder), resFlowForm.builderTab),
            newStepsButton: $(xpath(tag.input).where('value', resFlowForm.newSteps).buildByObject(), resFlowForm.newSteps),
            newStepButton: $(by.id(att.id.newstepID), resFlowForm.newStep),
            saveButton: $(by.id(att.id.saveID), resFlowForm.saveButton),
            stepsLink: $(xpath(tag.td).textContains(resFlowForm.runTheFollowingStepsLabel).descendant(tag.a).buildByObject(), resFlowForm.stepsLink),
            srocessDesignerTab: $(by.cssContainingText(tag.li, resFlowForm.processDesignerTab), resFlowForm.processDesignerTab),
            stepsList: element.all(By.xpath('//span[contains(@id, ".title")]')),
            expandIconList: $(xpath(tag.span)
                .contains('id', 'title')
                .precendingSibling(tag.img)
                .contains('align', 'absmiddle')
                .buildByObject(), resFlowForm.stepExpandIconList),
            cancelButton: $(by.id(att.id.cancelIFrameID), resFlowForm.cancelButton),
            deleteIconList: $(xpath(tag.img).contains('onclick', 'deleteStepByIndex').buildByObject(), resFlowForm.deleteIconList),
        };
    }

    static get deletePopup() {
        const delForm = AgentMicrositeConstant.deletePopup;
        return {
            deleteFromPageRandionButton: $(xpath(tag.input).where('value', att.value.deleteFromPage).buildByObject(), delForm.deleteFromPageRadioButton),
            okButton: $(by.id(att.id.okButtonDeleteStepPopup), delForm.okButton),
        };
    }

    static get recommendationManagerForm() {
        const rForm = AgentMicrositeConstant.recommendationManagerForm;
        return {
            addPageletButton: $(by.css(`${tag.input}[value="${att.value.addPagelet}"]`), rForm.addPageletButton),
            pageletsTableColumns: {
                name: $(by.cssContainingText(tag.td, rForm.pageletsTableColumns.name), rForm.pageletsTableColumns.name),
                id: $(by.cssContainingText(tag.td, rForm.pageletsTableColumns.id), rForm.pageletsTableColumns.id),
                location: $(by.cssContainingText(tag.td, rForm.pageletsTableColumns.location), rForm.pageletsTableColumns.location),
                delete: $(by.cssContainingText(tag.td, rForm.pageletsTableColumns.delete), rForm.pageletsTableColumns.delete),
            },
            firstDeleteIcon: $(xpath(tag.img)
                .contains('src', att.name.delete)
                .nthChild(Constants.number.one)
                .buildByObject(), rForm.pageletsTableColumns.delete),
            firstPagelet: $(xpath(tag.a)
                .contains('href', att.name.recommendationDo)
                .nthChild(Constants.number.one)
                .buildByObject(), rForm.firstPagelet),
            pageletsTab: $(by.css(`${tag.ul}[role="tablist"] li[id="${att.id.pagelets}"]`), rForm.pageletsTab),
            newPageletTab: $(by.css(`${tag.ul}[role="tablist"] li[id="${att.id.headerPageletName}"]`), rForm.newPageletTab),
            showOnDropdown: $(by.id(att.id.selectPage), rForm.showOn),
            nameTextbox: $(by.id(att.id.pageletName), rForm.name),
            saveButton: $(by.id(att.id.submitPageletBtn), rForm.save),
            pageletSaveMessage: $(by.cssContainingText(
                tag.span,
                message.pageletSaveMessage),
                message.pageletSaveMessage),
            pageletByName(name: string) {
                return $(by.cssContainingText(tag.a, name), name);
            },
            addNewLink: $(by.id(att.id.addRecommendationBtn), rForm.addNewLink),
            recommendationLink: $(by.cssContainingText(tag.a, 'recommendation'), rForm.recommendationLink),
            documentRadioButton: $(by.id(att.id.linkDOCRadio), rForm.document),
            textRadioButton: $(by.id(att.id.displayTextRadio), rForm.text),
            alwaysUseDocumentTitleRadioButton: $(by.id(att.id.docTitleType), rForm.alwaysUseDocumentTitle),
            alwaysUseDocumentSynopsisRadioButton: $(by.id(att.id.docDynamicSynopsis), rForm.alwaysUseDocumentSynopsis),
            comunityRadioButton: $(by.id(att.id.linkForumRadio), rForm.comunity),
            findDocument: $(by.name(att.name.searchString), rForm.findDocument),
            searchIcon: $(xpath(tag.input).contains('onclick', 'performSearch').buildByObject(), rForm.searchIcon),
            searchResultsLink: $(xpath(tag.a).contains('href', 'openViewDoc').buildByObject(), rForm.searchResultsLink),
            plusIconInSearchReseults: $(xpath(tag.input).contains('src', 'round_add.png').buildByObject(), rForm.plusIconInSearchResults),
            documentAddedMessage: $(by.cssContainingText(tag.b, message.documentAddedMessage), message.documentAddedMessage),
            resolutionFlowRadtioButton: $(by.id(att.id.linkRFRadio), rForm.resolutionFlow),
            urlRadtioButton: $(by.id(att.id.linkURLRadio), rForm.url),
            nothingRadtioButton: $(by.id(att.id.linkNoneRadio), rForm.nothing),
            graphicRadtioButton: $(by.id(att.id.displayGraphicsRadio), rForm.graphic),
            textField: $(by.id(att.id.text), rForm.text),
            synopsisField: $(by.id(att.id.synopsis), rForm.synopsis),
            comunityDropdown: $(by.id(att.id.forumsddl), rForm.comunity),
            comunityDropdownOptions: $(by.css(`#${att.id.forumsddl} ${tag.option}`), rForm.comunity),
            currentlyLinkedField: $(by.css(`#${att.id.forumfound} ${tag.a}`), rForm.currentlyLinked),
            recommendationLinkByName(name: string) {
                return $(by.cssContainingText(tag.a, name), name);
            },
            resolutionFlowDropdown: $(by.id(att.id.rfsddl), rForm.resolutionFlow),
            resolutionFlowDropdownOption: $(xpath(tag.select)
                .where('name', att.name.rfId)
                .descendant(tag.option)
                .nthChild(Constants.number.two).buildByObject(), rForm.resolutionFlow),
            specifyLinkText: $(by.id(att.id.rfStaticText), rForm.specifyLinkText),
            specifySynopsisRadioButton: $(by.id(att.id.rfStaticSynopsis), rForm.specifySynopsis),
            synopsysTextbox: $(by.id(att.id.synopsis), rForm.synopsis),
            propertyLeftBlankMessage: $(by.cssContainingText(tag.span, message.propertyLeftBlank), message.propertyLeftBlank),
            addImageButton: $(by.css(`${tag.input}[value="${att.value.addImage}"]`), rForm.addImage),
            noGraphicSpecifiedMessage: $(by.cssContainingText(tag.span, message.noGraphicSpecifiedMessage), message.noGraphicSpecifiedMessage),
            alwaysUseResolutionFlowNameRadioButton: $(by.id(att.id.rfDynamicText), rForm.alwaysUseResolutionFlowName),
            alwaysUseResolutionFlowDescriptionRadioButton: $(by.id(att.id.rfDynamicSynopsis), rForm.alwaysUseResolutionFlowDescription),
            deletePageleteConfirmationMessage: $(by.cssContainingText(tag.span, message.areYouRureToDeletePagelet),
                message.areYouRureToDeletePagelet),
        };
    }
}
