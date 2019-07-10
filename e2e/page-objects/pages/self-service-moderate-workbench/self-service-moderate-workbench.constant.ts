export class SelfServiceModerateWorkbenchConstant {
    static get names() {
        return {
            webCasesContainer: 'Web cases container',
            webCases: 'WebCases',
            subnavOn: 'subnav_on',
            activeWebCases: 'Active WebCases',
            moderatorWorkbench: 'Moderator Workbench',
            content: 'Content',
            users: 'Users',
            selectRfCommunity: 'Select RF/Community',
            tools: 'Tools',
            viewEditResolutionFlowMembers: 'View/Edit Resolution Flow Members',
            moderate: 'moderate',
            username: 'User name',
            searchIcon: 'Search icon',
            searchResults: 'Search results',
            webCaseAlerts: 'WebCase Alerts',
            contentAlerts: 'Content Alerts',
            titleLink: 'Title link',
            sensitiveWords: 'Sensitive Words',
            edit: 'Edit',
            delete: 'Delete',
            editDescription: 'Edit Description',
            editCommunityDescription: 'Edit Community Description',
            description: 'Description',
            save: 'Save',
        };
    }

    static get attributes() {
        return {
            class: {
                subnavOn: 'subnav_on',
                tableBorder: 'table_border',
                manageCasesAction: 'ManageCasesAction',
                subnav: 'subnav',
            },
            name: {
                rfId: 'rf_id',
                moderate: 'moderate',
                username: 'username',
                vieworeditmembers: 'vieworeditmembers',
                btnSearch: 'btn_search',
                openUserDetails: 'openUserDetails',
                editprofile: 'editprofile',
                viewprofane: 'viewprofane',
                editdescription: 'editdescription',
                description: 'description',
            },
        };
    }

    static get titles() {
        return {
            moderatorWorkbench: 'Moderator Workbench',
        };
    }

    static get testData() {
        return {
            rfCommunity: 'TD_RF252065 (RF)',
            admin: 'Admin',
            productDiscussionCommunity: 'Product Discussions (Community)',
        };
    }
}
