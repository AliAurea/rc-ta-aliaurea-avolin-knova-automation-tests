import { by } from 'protractor';

import { $, $$ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { UserAndGroupFinderConstant } from './user-and-group-finder.constant';

const { tags: tag, attributes } = HtmlHelper;
const { controlForm: attrs, names, attributes: attr, titles: title, labels } = UserAndGroupFinderConstant;

export class UserAndGroupFinderPage {

    static get titles() {
        return {
            userAndGroupFinder: $(by.cssContainingText(tag.span, title.userAndGroupFinder), title.userAndGroupFinder),
            findGroups: $(by.cssContainingText(tag.td, title.findGroups), title.findGroups),
        };
    }

    static get formControls() {
        return {
            firstName: $(by.id(attr.id.firstname), names.firstname),
            searchIcon: $(by.id(attr.id.Image2), names.searchIcon),
            userInSeachList(user: string) {
                return $(xpath(tag.a)
                    .contains('href', 'userprofile')
                    .textContains(user)
                    .buildByObject(), user);
            },
        };
    }

    static get controlForm() {
        return {
            textBoxes: {
                userName: $(by.id(attr.id.userId), attrs.textBoxes.userName),
                lastName: $(by.id(attr.id.lastName), attrs.textBoxes.lastName),
            },
            buttons: {
                search: $(by.xpath('(//input[@id="Image2"])[1]'), attrs.buttons.search),
                employeeApplications: $(by.css(
                    `#${attr.id.user} input[value="${attr.value.ksc}"][name="${names.appName}"]`), attrs.buttons.employeeApplications),
                customerApplications: $(by.css(
                    `#${attr.id.user} input[value="${attr.value.kss}"]`), attrs.buttons.customerApplications),
                showAll: $(by.css(`#${attr.id.user} input[value="${names.showAll}"]`), names.showAll),
            },
            userList(username: string) {
                return $(by.xpath(`//a[contains(text(),"${username}")]`), username);
            },
            firstUserSearched: $(xpath(tag.div)
                .where(attributes.class, attr.class.apteanBody)
                .descendant(tag.a)
                .first()
                .buildByObject(), labels.user),
            availableUsers: $$(by.css(`${tag.table} ${tag.tr}`), labels.user),
        };
    }

    static get controlFormGroup() {
        return {
            textBoxes: {
                groupName: $(by.id(attr.id.groupName), attrs.textBoxes.groupName),
                ownerName: $(by.id(attr.id.ownerName), attrs.textBoxes.ownerName),
            },
            buttons: {
                search: $(by.css(`#${attr.id.group} #${attr.id.Image2}`), attrs.buttons.search),
                employeeApplications: $(by.css(
                    `#${attr.id.group} input[value="${attr.value.ksc}"][name="${names.appName}`), attrs.buttons.employeeApplications),
                customerApplications: $(by.css(
                    `#${attr.id.group} input[value="${attr.value.kss}"]`), attrs.buttons.customerApplications),
                showAll: $(by.css(`#${attr.id.group} input[value="${names.showAll}"]`), names.showAll),
            },
            groupList(group: string) {
                return $(by.cssContainingText(tag.a, group), group);
            },
            firstGroupSearched: $(xpath(tag.div)
                .where(attributes.class, attr.class.apteanBody)
                .descendant(tag.a)
                .first()
                .buildByObject(), labels.group),
            availableGroups: $$(by.css(`${tag.table} ${tag.tr}`), labels.group),
        };
    }
}
