import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { AdminHomePageHelper } from '../../admin-home-page/admin-home.helper';
import { CommonPageHelper } from '../../common/common-page.helper';
import { CommonPage } from '../../common/common.po';
import { UserCreatorConstant } from '../user-creator/user-creator.constant';
import { UserCreatorHelper } from '../user-creator/user-creator.helper';

import { UserAndGroupFinderConstant } from './user-and-group-finder.constant';
import { UserAndGroupFinderPage } from './user-and-group-finder.po';

export class UserAndGroupFinderHelper {

    static async verifyUserAndGroupFinderPageDisplayed() {
        await CommonPageHelper.switchToContentFrame();
        await UserAndGroupFinderPage.titles.userAndGroupFinder.verifyDisplayedStatus();
    }

    static async verifyFindGroupFormDisplayed() {
        await UserAndGroupFinderPage.titles.findGroups.verifyDisplayedStatus();
    }

    static async typeFirstName(firstName: string) {
        StepLogger.subStep(`Type ${firstName} in First Name field`);
        await UserAndGroupFinderPage.formControls.firstName.clearText();
        await UserAndGroupFinderPage.formControls.firstName.sendKeys(firstName);
    }

    static async verifyFirstNameValue(firstName: string) {
        await UserAndGroupFinderPage.formControls.firstName.verifyTextBoxContains(firstName);
    }

    static async clickOnSearchIcon() {
        StepLogger.subStep('Click on Search icon');
        await UserAndGroupFinderPage.formControls.searchIcon.hoverOverAndClick();
    }

    static async verifyUserDisplayedInSearchList(user: string) {
        await PageHelper.switchToiFrame(CommonPage.userFrame);
        await UserAndGroupFinderPage.formControls.userInSeachList(user).verifyDisplayedStatus();
    }

    static async ClickOnAUserDisplayedInSearchList(user: string) {
        StepLogger.subStep(`Click on ${user} from the Search list`);
        await UserAndGroupFinderPage.formControls.userInSeachList(user).scrollToElement();
        await UserAndGroupFinderPage.formControls.userInSeachList(user).hoverOverAndClick();
    }

    static async searchUserByFirstName(firstName: string) {
        await AdminHomePageHelper.navigateToUserAndGroupFinder();
        await UserAndGroupFinderHelper.typeFirstName(firstName);
        await UserAndGroupFinderHelper.clickOnSearchIcon();
        await UserAndGroupFinderHelper.verifyUserDisplayedInSearchList(firstName);
        await UserAndGroupFinderHelper.ClickOnAUserDisplayedInSearchList(firstName);
        await UserCreatorHelper.verifyProfileEditorPageDisplayed();
    }

    static async createUserAndNavigateToUserAndGroupFider(
        userName: string = RandomHelper.getRandomString(),
        password: string = RandomHelper.getRandomString(),
        firstName: string = RandomHelper.getRandomString(),
        lastName: string = RandomHelper.getRandomString(),
        role: string = UserCreatorConstant.roles.administrator
    ) {
        await UserCreatorHelper.createUser(userName, password, firstName, lastName, role);
        await PageHelper.refreshPage();
        await AdminHomePageHelper.navigateToUserAndGroupFinder();
    }

    static async createUserAndFindItByFirstName(
        userName: string = RandomHelper.getRandomString(),
        password: string = RandomHelper.getRandomString(),
        firstName: string = RandomHelper.getRandomString(),
        lastName: string = RandomHelper.getRandomString(),
        role: string = UserCreatorConstant.roles.administrator
    ) {
        await UserCreatorHelper.createUser(userName, password, firstName, lastName, role);
        await PageHelper.refreshPage();
        await UserAndGroupFinderHelper.searchUserByFirstName(firstName);
    }

    static async clickOnEmployeedApplicationUser() {
        StepLogger.subStep('Click on Employee Application option');
        await UserAndGroupFinderPage.controlForm.buttons.employeeApplications.hoverOverAndClick();
    }

    static async verifyEmployeedApplicationUser() {
        StepLogger.subVerification('Verify Employee Application option');
        await ExpectationHelper.verifyCheckboxIsChecked(
            UserAndGroupFinderPage.controlForm.buttons.employeeApplications);
    }

    static async clickOnEmployeedApplicationGroup() {
        StepLogger.subStep('Click on Employee Application option');
        await UserAndGroupFinderPage.controlFormGroup.buttons.employeeApplications.hoverOverAndClick();
    }

    static async verifyEmployeedApplicationGroup() {
        StepLogger.subVerification('Verify Employee Application option');
        await ExpectationHelper.verifyCheckboxIsChecked(
            UserAndGroupFinderPage.controlFormGroup.buttons.employeeApplications);
    }

    static async clickOnSearchIconGroup() {
        StepLogger.subStep('Click on Search icon');
        await UserAndGroupFinderPage.controlFormGroup.buttons.search.clickLink();
    }

    static async verifyUserDisplayedInSearchListGroup(user: string) {
        await PageHelper.switchToiFrame(CommonPage.groupFrame);
        await UserAndGroupFinderPage.formControls.userInSeachList(user).verifyDisplayedStatus();
    }

    static async typeLastName(name: string) {
        StepLogger.subStep(`Type ${name} in Last Name field`);
        await UserAndGroupFinderPage.controlForm.textBoxes.lastName.sendKeys(name);
    }

    static async verifyLastNameValue(lastName: string) {
        await UserAndGroupFinderPage.controlForm.textBoxes.lastName.verifyTextBoxContains(lastName);
    }

    static async typeUsername(name: string) {
        StepLogger.subStep(`Type ${name} in Username field`);
        await UserAndGroupFinderPage.controlForm.textBoxes.userName.sendKeys(name);
    }

    static async verifyUsernameValue(name: string) {
        await UserAndGroupFinderPage.controlForm.textBoxes.userName.verifyTextBoxContains(name);
    }

    static async enterFirsLastUsername(criteria: string) {
        await this.typeFirstName(criteria);
        await this.typeLastName(criteria);
        await this.typeUsername(criteria);
    }

    static async verifyFirsLastUsername(criteria: string) {
        await this.verifyFirstNameValue(criteria);
        await this.verifyLastNameValue(criteria);
        await this.verifyUsernameValue(criteria);
    }

    static async verifyAvailableUsers() {
        await PageHelper.switchToiFrame(CommonPage.userFrame);
        const count = await UserAndGroupFinderPage.controlForm.availableUsers.item.count();
        await ExpectationHelper.verifyValueGraterThan(count, Constants.number.zero);
    }

    static async clickFirstUserInSearchList() {
        await UserAndGroupFinderPage.controlForm.firstUserSearched.clickLink();
    }

    static async verifyShowAllButton() {
        await UserAndGroupFinderPage.controlForm.buttons.showAll.verifyDisplayedStatus();
    }

    static async clickShowAll() {
        await UserAndGroupFinderPage.controlForm.buttons.showAll.clickButton();
    }

    static async typeGroupName(toSearch: boolean = false, name: string = UserAndGroupFinderConstant.labels.all) {
        const { controlFormGroup } = UserAndGroupFinderPage;
        let group = name;
        if (toSearch) {
            await PageHelper.switchToiFrame(CommonPage.groupFrame);
            group = await controlFormGroup.firstGroupSearched.getText();
            await CommonPageHelper.switchToContentFrame();
        }
        StepLogger.subStep(`Type ${name} in Group Name field`);
        await controlFormGroup.textBoxes.groupName.sendKeys(group);
        return group;
    }

    static async verifyGroupNameValue(name: string) {
        await UserAndGroupFinderPage.controlFormGroup.textBoxes.groupName.verifyTextBoxContains(name);
    }

    static async verifyGroupDisplayedInSearchList(group: string) {
        await PageHelper.switchToiFrame(CommonPage.groupFrame);
        await UserAndGroupFinderPage.controlFormGroup.groupList(group).verifyDisplayedStatus();
    }

    static async clickOnGroupDisplayedInSearchList(group: string) {
        const { controlFormGroup } = UserAndGroupFinderPage;
        StepLogger.subStep(`Click on ${group} from the Search list`);
        await controlFormGroup.groupList(group).scrollToElement();
        await controlFormGroup.groupList(group).hoverOverAndClick();
    }

    static async typeOwnerName(name: string) {
        await UserAndGroupFinderPage.controlFormGroup.textBoxes.ownerName.sendKeys(name);
    }

    static async verifyOwnerNameValue(name: string) {
        await UserAndGroupFinderPage.controlFormGroup.textBoxes.ownerName.verifyTextBoxContains(name);
    }

    static async verifyAvailableGroups() {
        const { controlFormGroup } = UserAndGroupFinderPage;
        await PageHelper.switchToiFrame(CommonPage.groupFrame);
        const count = await controlFormGroup.availableGroups.item.count();
        await ExpectationHelper.verifyValueGraterThan(count, Constants.number.zero);
        return await controlFormGroup.firstGroupSearched.getText();
    }

    static async typeGroupOwnerName(name: string) {
        await this.typeGroupName(false, name);
        await this.typeOwnerName(name);
    }

    static async verifyGroupOwnerName(name: string) {
        await this.verifyGroupNameValue(name);
        await this.verifyOwnerNameValue(name);
    }

    static async verifyShowAllButtonGroup() {
        await UserAndGroupFinderPage.controlFormGroup.buttons.showAll.verifyDisplayedStatus();
    }

    static async clickShowAllGroup() {
        await UserAndGroupFinderPage.controlFormGroup.buttons.showAll.clickButton();
    }
}
