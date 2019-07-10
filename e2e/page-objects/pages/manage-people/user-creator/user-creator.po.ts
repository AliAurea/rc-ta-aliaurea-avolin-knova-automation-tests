import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { UserCreatorConstant } from './user-creator.constant';

const tag = HtmlHelper.tags;
const title = UserCreatorConstant.titles;
const attr = UserCreatorConstant.attributes;
const names = UserCreatorConstant.names;
export class UserCreatorPage {

    static get titles() {
        return {
            profileEditor: $(by.cssContainingText(tag.span, title.profileEditor), title.profileEditor),
            selectGroups: $(by.cssContainingText(tag.span, title.selectGroups), title.selectGroups),
            selectLanguages: $(by.cssContainingText(tag.span, title.selectLanguages), title.selectLanguages),
            expertiseProfile: $(by.cssContainingText(tag.span, title.expertiseProfile), title.expertiseProfile),
            addExpertise: $(by.cssContainingText(tag.span, title.addExpertise), title.addExpertise),
            selectUniversalMetadata: $(by.cssContainingText(tag.span, title.selectUniversalMetadata), title.selectUniversalMetadata),
            selectAccessLevels: $(by.cssContainingText(tag.span, title.selectAccessLevels), title.selectAccessLevels),
            selectUnifiedTemplates: $(by.cssContainingText(tag.span, title.selectUnifiedTemplates), title.selectUnifiedTemplates),
        };
    }

    static get editorProfileForm() {
        return {
            username: $(by.name(attr.name.userName), names.userName),
            password: $(by.name(attr.name.password), names.password),
            passwordConfirmation: $(by.name(attr.name.cpassword), names.passwordConfirmation),
            firstName: $(by.name(attr.name.firstName), names.firstName),
            lastName: $(by.name(attr.name.lastName), names.lastName),
            email: $(by.name(attr.name.email), attr.name.email),
            bioInfo: $(by.name(attr.name.biodata), names.bioInfo),
            roleCheckbox(role: string) {
                return $(xpath(tag.a)
                    .textContains(role)
                    .parent(tag.td)
                    .precendingSibling(tag.td)
                    .descendant(tag.input)
                    .buildByObject(), role);
            },
            saveButton: $(by.id(attr.id.saveID), names.saveButton),
            submitButton: $(by.id(attr.id.submitID), names.submitButton),
            userSuccessfullySavedMessage: $(
                by.cssContainingText(tag.td, names.userSuccessfullySavedMessage),
                names.userSuccessfullySavedMessage),
            selectGroupsButton: $(by.id(attr.id.memStatus), names.selectGroupsButton),
            showAllButton: $(by.name(attr.name.showall), names.showAll),
            inactiveUserCheckbox: $(by.name(attr.name.isActive), names.inactiveUSer),
            availableGroups: $(xpath(tag.img).contains('src', 'groups').parent(tag.div).buildByObject(), names.availableGroups),
            groupNameTextbox: $(by.id(attr.id.groupname), names.groupname),
            searchIcon: $(by.id(attr.id.Image2), names.searchIcon),
            availableGroupByName(name: string) {
                return $(by.cssContainingText(tag.div, name), name);
            },
            availableGroupCheckbox: $(by.name(attr.name.selectItems), names.availableGroupCheckbox),
            okButton: $(by.id(attr.id.submitBtn), names.okButton),
            selectNumberGroupsOfGroups: $(by.id(attr.id.groupCount), names.selectedNumberOfGroups),
            selectLanguages: $(by.name(attr.name.lang), names.selectLanguages),
            selectAccessLevelButton: $(by.name(attr.name.waccessl), names.selectAccessLevel),
            dataManagedExternallyForThisUserCheckbox: $(by.id(attr.id.externalData), names.dataManagedExternallyForThisUser),
            authenticateThisUserExternallyCheckbox: $(by.id(attr.id.externalAuth), names.authenticateThisUserExternally),
            availableLanguagesList: $(by.css(`${tag.select}[name="${attr.name.available}"] ${tag.option}`), names.availableLanguages),
            includedLanguagesList: $(by.css(`${tag.select}[name="${attr.name.included}"] ${tag.option}`), names.availableLanguages),
            availableLanguage(language: string) {
                return $(xpath(tag.select)
                    .where('name', attr.name.available)
                    .descendant(tag.option)
                    .textContains(language)
                    .buildByObject(), language);
            },
            includedLanguage(language: string) {
                return $(xpath(tag.select)
                    .where('name', attr.name.included)
                    .descendant(tag.option)
                    .textContains(language)
                    .buildByObject(), language);
            },
            addIcon: $(by.id(attr.id.addID), names.addIcon),
            removeIcon: $(by.id(attr.id.removeID), names.removeIcon),
            selectedLanguageFromUserProfileDialog: $(xpath(tag.td)
                .textContains('Languages')
                .parent(tag.tr)
                .descendant(tag.td)
                .descendant(tag.span)
                .buildByObject(), names.selectedLanguageFromUserProfileDialog),
            okButtonFromSelectLanguagePopup: $(by.id(attr.id.submitID), names.okButton),
            manageExpertiseProfileButton: $(xpath(tag.input)
                .contains('onclick', 'manageExpertise')
                .buildByObject(), names.selectManageExpertiseButton),
            addMetadataButton: $(by.css(`${tag.input}[value="${attr.value.AddMetadata}"]`), names.AddMetadata),
            selectMetadataButton: $(xpath(tag.input)
                .where('value', attr.value.select)
                .contains('onclick', title.selectUniversalMetadata)
                .buildByObject(), names.selectMetadataButton),
            metadataItem(index: number) {
                return $(xpath(tag.div)
                    .contains('onclick', 'javascript')
                    .nthChild(index)
                    .buildByObject(), names.metadataItem);
            },
            accessLevelItem: $(by.css(`${tag.div}[class="${attr.class.treediv}"]`), names.accessLevel),
            addButtonFromAccessLevelsDialog: $(by.css(`${tag.input}[value="${attr.value.add}"]`), names.addButton),
            okButtonFromAccessLevelsDialod: $(by.id(attr.id.submitDialogID), names.okButton),
            selecteAccessLevel: $(by.id('selectedUM'), names.selectAccessLevel),
            selectedAccessLevelFromEditProfilePage: $(by.id(attr.id.authAccessLevel), names.accessLevel),
            selectUnifiedTemplatesButton: $(by.name(attr.name.utempalte), names.unifiedTemplates),
            availableUnifiedTemplates: $(by.css(`${tag.select}[name="${attr.name.available}"] ${tag.option}`), names.availableUnifiedTemplates),
            includedUnifiedTemplates: $(by.css(`${tag.select}[name="${attr.name.included}"] ${tag.option}`), names.includedUnifiedTemplates),
            availableUnifiedTemplateByText(text: string) {
                return $(xpath(tag.select)
                    .where('name', attr.name.available)
                    .descendant(tag.option)
                    .textContains(text)
                    .buildByObject(), text);
            },
            includedUnifiedTemplateByText(text: string) {
                return $(xpath(tag.select)
                    .where('name', attr.name.included)
                    .descendant(tag.option)
                    .textContains(text)
                    .buildByObject(), text);
            },
            selectedTemplateFromEditProfile: $(by.id(attr.id.authUTemplates), names.unifiedTemplates),
            selectUniversalMetadataButton: $(xpath(tag.input)
                .contains('onclick', 'popShowUMDialog')
                .buildByObject(), names.selectUniversalMetadataButton),
            addCommunityButton: $(by.css(`${tag.input}[value="${attr.value.addCommunity}"]`), names.addCommunity),
            selectComunityDropdown: $(by.name(attr.name.product), names.selectComunity),
            selectComunityDropdownOption: $(xpath(tag.select)
                .where('name', attr.name.product)
                .descendant(tag.option)
                .notContains('value', names.comunities)
                .buildByObject(), names.selectComunity),
            reputationLevelDropdown: $(by.name(attr.name.erllist), names.reputationLevel),
            reputationLevelDropdownOption: $(xpath(tag.select)
                .where('name', attr.name.erllist)
                .descendant(tag.option)
                .notContains('value', names.AllReputationLevels)
                .buildByObject(), names.reputationLevel),
            skillsTextbox: $(by.name(attr.name.skill1), names.skills),
            skillLevelRadioButton: $(xpath(tag.input)
                .where('name', attr.name.level)
                .contains('type', 'radio').buildByObject(), names.skillLevel),
            okButtonFromAddExpertiseDialog: $(by.css(`${tag.input}[value="${attr.value.oK}"]`), names.okButton),
            tabs: {
                preferences: $(by.cssContainingText(tag.li, names.tabs.preferences), names.tabs.preferences),
                notifications: $(by.cssContainingText(tag.li, names.tabs.notifications), names.tabs.notifications),
            },
            preferencesTab: {
                emailLanguage: $(by.name(attr.name.emailLanguage), attr.name.emailLanguage),
                fullNameFormat: $(by.name(attr.name.fullNameFormat), attr.name.fullNameFormat),
                dateFormat: $(by.name(attr.name.dateFormat), attr.name.dateFormat),
                timeFormat: $(by.name(attr.name.timeFormat), attr.name.timeFormat),
                itemsPerPage: $(by.name(attr.name.itemsPerPage), attr.name.itemsPerPage),
                defaultMicrosite: $(by.name(attr.name.defaultMicrosite), attr.name.defaultMicrosite),
                resultsPerPage: $(by.name(attr.name.numDocsPerPage), names.resultsPerPage),
                whatsNew: $(by.name(attr.name.whatsNew), attr.name.whatsNew),
                showThreadsInResults: $(by.name(attr.name.showThreads), names.showThreadsInResults),
            },
            notificationTab: {
                notoficationForm: $(by.name(attr.name.notificationsForm), attr.name.notificationsForm),
                expandAll: $(by.css(`${tag.input}[value='${attr.value.expandAll}']`), attr.value.expandAll),
                collapseAll: $(by.css(`${tag.input}[value='${attr.value.collapseAll}']`), attr.value.collapseAll),
                authoringEvent: $(by.cssContainingText(`${tag.td}.${attr.class.headerLtBlu}`, names.authoringEvent),
                    names.authoringEvent),
                collaborationEvent: $(by.cssContainingText(`${tag.td}.${attr.class.headerLtBlu}`, names.collaborationEvent),
                    names.collaborationEvent),
                feedBackEvent: $(by.cssContainingText(`${tag.td}.${attr.class.headerLtBlu}`, names.feedBackEvent),
                    names.feedBackEvent),
                webCasesEvent: $(by.cssContainingText(`${tag.td}.${attr.class.headerLtBlu}`, names.webCasesEvent),
                    names.webCasesEvent),
                authoringEventExpand: $(by.css(`${tag.table}#${attr.id.authoringEvents}`), names.authoringEvent),
                collaborationEventExpand: $(by.css(`${tag.table}#${attr.id.collabEvents}`), names.collaborationEvent),
                feedBackEventExpand: $(by.css(`${tag.table}#${attr.id.feedbackEvents}`), names.feedBackEvent),
                webCasesEventExpand: $(by.css(`${tag.table}#${attr.id.webCaseEvents}`), names.webCasesEvent),
                authoringEventArrow: $(by.xpath(`//${tag.td}[@class='${attr.class.headerLtBlu}' and contains((.),'${names.authoringEvent}')]//img`),
                    names.authoringEvent),
                notifyExist: $(by.css(`${tag.table}#${attr.id.authoringEvents} input[name='${attr.name.notifyExists}']`),
                    attr.name.notifyExists),
                collaborationEventArrow: $(by.xpath(`//${tag.td}[@class='${attr.class.headerLtBlu}' and contains((.),'${names.collaborationEvent}')]//img`),
                    names.collaborationEvent),
                notifyCollaborate: $(by.css(`${tag.table}#${attr.id.collabEvents} input[name='${attr.name.notifyCollaborate}']`),
                    attr.name.notifyCollaborate),
                feedBackEventArrow: $(by.xpath(`//${tag.td}[@class='${attr.class.headerLtBlu}' and contains((.),'${names.feedBackEvent}')]//img`),
                    names.feedBackEvent),
                notifyFeedbackAssigned: $(by.css(`${tag.table}#${attr.id.feedbackEvents} input[name='${attr.name.notifyFeedbackAssigned}']`),
                    attr.name.notifyFeedbackAssigned),
                webCasesEventArrow: $(by.xpath(`//${tag.td}[@class='${attr.class.headerLtBlu}' and contains((.),'${names.webCasesEvent}')]//img`),
                    names.webCasesEvent),
                notifyCaseAvailable: $(by.css(`${tag.table}#${attr.id.webCaseEvents} input[name='${attr.name.notifyCaseAvailable}']`),
                    attr.name.notifyCaseAvailable),
            },
            defaultMicrositeOptions: $(by.css(`${tag.select}[name=${attr.name.defaultMicrosite}] option`), attr.name.defaultMicrosite),
        };
    }

    static getSkillCreatedComunityByText(text: string) {
        return $(by.cssContainingText(tag.td, text), text);
    }
}
