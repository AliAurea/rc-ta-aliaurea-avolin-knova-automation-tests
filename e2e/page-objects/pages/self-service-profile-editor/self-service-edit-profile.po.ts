import { by } from 'protractor';
import { By } from 'selenium-webdriver';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPageConstant } from '../common/common-page.constant';

import { SelfServiceEditProfileConstant } from './self-service-edit-profile.contant';

const tag = HtmlHelper.tags;
const section = SelfServiceEditProfileConstant.sections;
const names = SelfServiceEditProfileConstant.names;
const { id, name, classes } = SelfServiceEditProfileConstant.attibutes;
const commonNames = CommonPageConstant.names;

export class SelfServiceEditProfilePage {
    static get sections() {
        return {
            generalPreferences: $(by.cssContainingText(tag.b, section.generalPreferences), section.generalPreferences),
            searchPreferences: $(by.cssContainingText(tag.b, section.searchPreferences), section.searchPreferences),
            micrositePreferences: $(by.cssContainingText(tag.b, section.micrositePreferences), section.micrositePreferences),
            userControls: $(by.cssContainingText(tag.b, section.userControls), section.userControls),
            authoringControls: $(by.cssContainingText(tag.b, section.authoringControls), section.authoringControls),
            roles: $(by.cssContainingText(tag.b, section.roles), section.roles),
        };
    }

    static get elements() {
        return {
            getTabByText(text: string) {
                return $(xpath(tag.a)
                    .textContains(text)
                    .parent(tag.td)
                    .buildByObject(), text);
            },
            saveButton: $(By.css(`input[value="${names.save}"]`), names.save),
            yesButtonOnConfirmationPopup: $(By.css(`input[value="${names.yes}"]`), names.yes),
            cancelButton: $(By.css(`input[value="${names.cancel}"]`), names.cancel),
            expandAll: $(By.css(`input[value="${names.expandAll}"]`), names.expandAll),
            collapseAll: $(By.css(`input[value="${names.collapseAll}"]`), names.collapseAll),
            authoringEventsIcon: $(xpath(tag.a)
                .contains('onclick', id.authoringEvents)
                .descendant(tag.img)
                .buildByObject(), names.authoringEvents),
            collabEventsIcon: $(xpath(tag.a)
                .contains('onclick', id.collabEvents)
                .descendant(tag.img)
                .buildByObject(), names.collaborationEvents),
            feedbackEventsIcon: $(xpath(tag.a)
                .contains('onclick', id.feedbackEvents)
                .descendant(tag.img)
                .buildByObject(), names.feedbackEvents),
            webCaseEventsIcon: $(xpath(tag.a)
                .contains('onclick', id.webCaseEvents)
                .descendant(tag.img)
                .buildByObject(), names.webCasesEvents),
            collabEventsCheckboxes: $(
                By.css(`table#${id.collabEvents} tbody tr td input[type="${commonNames.checkbox}"]`
                ), names.collaborationEvents),
            authoringEventsCheckboxes: $(
                By.css(`table#${id.authoringEvents} tbody tr td input[type="${commonNames.checkbox}"]`
                ), names.authoringEvents),
            feedbackEventsCheckboxes: $(
                By.css(`table#${id.feedbackEvents} tbody tr td input[type="${commonNames.checkbox}"]`
                ), names.feedbackEvents),
            webCasesEventsCheckboxes: $(
                By.css(`table#${id.webCaseEvents} tbody tr td input[type="${commonNames.checkbox}"]`
                ), names.webCasesEvents),
            feedbackEventsRadioButtons: $(
                By.css(`table#${id.feedbackEvents} tbody tr td table tbody tr td input[type="${commonNames.radio}"]`
                ), names.feedbackEvents),
            getFeedbackEventsCheckboxByName(fName: string) {
                return $(xpath(tag.table)
                    .where('id', id.feedbackEvents)
                    .descendant(tag.tBody)
                    .descendant(tag.tr)
                    .descendant(tag.td)
                    .descendant(tag.input)
                    .where('type', commonNames.checkbox)
                    .where('name', fName)
                    .buildByObject(), fName);
            },
            getWebCasesEventsCheckboxByName(wName: string) {
                return $(xpath(tag.table)
                    .where('id', id.webCaseEvents)
                    .descendant(tag.tBody)
                    .descendant(tag.tr)
                    .descendant(tag.td)
                    .descendant(tag.input)
                    .where('type', commonNames.checkbox)
                    .where('name', wName)
                    .buildByObject(), wName);
            },
            getAuthoringEventsCheckboxByName(aName: string) {
                return $(xpath(tag.table)
                    .where('id', id.authoringEvents)
                    .descendant(tag.tBody)
                    .descendant(tag.tr)
                    .descendant(tag.td)
                    .descendant(tag.input)
                    .where('type', commonNames.checkbox)
                    .where('name', aName)
                    .buildByObject(), aName);
            },
            getCollabEventsCheckboxByName(cName: string) {
                return $(xpath(tag.table)
                    .where('id', id.collabEvents)
                    .descendant(tag.tBody)
                    .descendant(tag.tr)
                    .descendant(tag.td)
                    .descendant(tag.input)
                    .where('type', commonNames.checkbox)
                    .where('name', cName)
                    .buildByObject(), cName);
            },
            getFeedbackEventsRadioButtonByName(fName: string) {
                return $(xpath(tag.table)
                    .where('id', id.feedbackEvents)
                    .descendant(tag.tBody)
                    .descendant(tag.tr)
                    .descendant(tag.td)
                    .descendant(tag.table)
                    .descendant(tag.tBody)
                    .descendant(tag.tr)
                    .descendant(tag.td)
                    .descendant(tag.input)
                    .where('type', commonNames.radio)
                    .where('name', fName)
                    .buildByObject(), fName);
            },
            initial: $(By.css(`input[name="${name.middleName}"]`), names.initial),
            email: $(By.css(`input[name="${name.email}"]`), names.email),
            getMessageByText(text: string) {
                return $(by.cssContainingText(tag.span, text), text);
            },
            password: $(By.css(`input[name="${name.password}"]`), names.password),
            conformationPassword: $(By.css(`input[name="${name.cpassword}"]`), names.conformationPassword),
            get expertiseProfile() {
                return $(by.css(`${tag.input}[onclick*="${classes.manageExpertise}"]`), names.expertiseProfile);
            },
            get groups() {
                return $(by.css(`${tag.input}[onclick*="${classes.formSuog}"]`), names.groups);
            },
            get accessLevels() {
                return $(by.css(`${tag.input}[onclick*="${classes.popSelectAccessLevel}"]`), names.accessLevels);
            },
            get languages() {
                return $(by.css(`${tag.input}[onclick*="${classes.popSelectLanguage}"]`), names.languages);
            },
            get unifiedTemplate() {
                return $(by.css(`${tag.input}[onclick*="${classes.popSelectUTemplates}"]`), names.unifiedTemplates);
            },
            get universalMetadata() {
                return $(by.css(`${tag.input}[onclick*="${classes.formAuthUmDialog}"]`), names.universalMetadata);
            },
            get availableLanguage() {
                return $(by.css(`${tag.select}[name="${names.available}"] ${tag.option}`), names.available);
            },
            getAvailableLanguageByText(text: string) {
                return $(xpath(tag.select)
                    .where('name', names.available)
                    .descendant(tag.option)
                    .text(text)
                    .buildByObject(), text);
            },
            getIncludedLanguageByText(text: string) {
                return $(xpath(tag.select)
                    .where('name', names.included)
                    .descendant(tag.option)
                    .text(text)
                    .buildByObject(), text);
            },
            addButton: $(by.css(`${tag.input}[title="${names.add}"]`), names.add),
            removeButton: $(by.css(`${tag.input}[title="${names.remove}"]`), names.remove),
            okButton: $(by.css(`${tag.input}[value="${names.ok}"]`), names.ok),
            languageLabelFromProfileData: $(by.id(id.language), id.language),
            unifiedTemplateLabelFromProfileData: $(by.id(id.authUTemplates), id.authUTemplates),
            get availableUnifiedTemplate() {
                return $(by.css(`${tag.select}[name="${names.available}"] ${tag.option}`), names.available);
            },
            defaultMicrosite: $(by.name(name.defaultMicrosite), names.defaultMicrosite),
        };
    }
}
