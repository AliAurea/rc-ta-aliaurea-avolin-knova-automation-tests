export class UserAndGroupFinderConstant {

    static get titles() {
        return {
            userAndGroupFinder: 'User & Group Finder',
            findGroups: 'Find Groups',
        };
    }

    static get attributes() {
        return {
            id: {
                firstname: 'firstname',
                Image2: 'Image2',
                user: 'user',
                group: 'group',
                ownerName: 'ownername',
                lastName: 'lastname',
                userId: 'userId',
                groupName: 'groupname',
            },
            value: {
                ksc: 'KSC',
                kss: 'KSS',
            },
            class: {
                apteanBody: 'aptean_body',
            },
        };
    }

    static get names() {
        return {
            firstname: 'First name',
            searchIcon: 'Search icon',
            appName: 'appName',
            showAll: 'Show All',
        };
    }

    static get controlForm() {
        return {
            textBoxes: {
                userName: 'User Name',
                ownerName: 'Owner"s Username',
                lastName: 'Last Name',
                groupName: 'Group Name',
            },
            buttons: {
                search: 'Search',
                employeeApplications: 'Employee Applications ',
                customerApplications: 'Customer Applications',
            },
        };
    }

    static get labels() {
        return {
            test: 'Test',
            all: '*',
            admin: 'admin',
            user: 'User',
            group: 'Group',
        };
    }
}
