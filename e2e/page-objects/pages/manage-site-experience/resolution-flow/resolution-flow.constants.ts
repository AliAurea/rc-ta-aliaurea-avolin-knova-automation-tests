export class ResolutionFlowConstant {

    static get elementNames() {
        return {
            resolutionFlowDesigner: 'Resolution Flow Designer',
            show: 'Show',
            newResolutionFlow: 'New Resolution Flow',
            reorder: 'Reorder',
            validate: 'Validate',
            builder: 'Builder',
            select: 'Select',
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'OK',
            message: 'message',
            yes: 'Yes',
            no: 'No',
            close: 'Close',
            communities: 'Communities',
            procDesigner: 'Process Designer',
            newStep: 'New Step',
            expandAll: 'Expand All',
            steps: 'Steps',
            step: 'Step',
            copyName: 'copyName',
            list: 'List',
        };
    }

    static get classes() {
        return {
            title: 'pop_hd_text',
            titles: 'titles',
            tableHeader: 'table_header',
            bodyBold: 'body_bold',
            body: 'body',
            tableDataRow: 'table_data_row',
            bodySteps: 'body12',
            noDataMsg: 'aptean-empty-table-note',
        };
    }

    static get labels() {
        return {
            test: 'Test',
            copy: 'Copy',
        };
    }

    static get tabFields() {
        return {
            name: 'Name',
            description: 'Description',
            visible: 'Visible',
            communityUsed: 'Community Used',
            moderator: 'Moderator',
            delete: 'Delete',
            copy: 'Copy',
        };
    }

    static get ids() {
        return {
            show: 'show',
            builder: 'builder',
            savebtn: 'savebtn',
            cancelIFrameId: 'cancelIFrameID',
            okId: 'okID',
            inbox: 'inbox',
            text: 'text',
        };
    }

    static get reorder() {
        return {
            moveUp: 'Move Up',
            moveDown: 'Move Down',
            items: 'select[name="rules"]',
            rules: 'rules',
        };
    }

    static get showDropdown() {
        return {
            showActive: 'Show Active',
            showInactive: 'Show inactive',
            showAll: 'Show All',
            option: 'select#show option',
        };
    }

    static get builderTab() {
        return {
            name: 'name',
            rfDesignerForm: 'rfDesignerForm',
            moderator: 'Moderator',
            moderatorId: 'moderatorID',
            displayCSG: 'displayCSG',
            makeVisible: 'Make Visible',
            lastModifiedText: 'lastModifiedText',
            lastModified: 'Last Modified',
            displayDescription: 'displayDescription',
            internalDescription: 'internalDescription',
            timer: 'timer',
            community: 'Community',
            associatedForum: 'associatedForum',
            newRule: 'New Rule',
            editForumsId: 'editForumsID',
            dialogIFrame: 'dialogIFrame',
            moderatorIFrame: 'supervisorFrame',
            moderatorTable: 'content-table',
            radioButton: 'radiobutton',
            moderatorDisplay: 'moderatorDisplay',
            visible: 'Visible',
            generalDiscussions: 'General Discussions',
            communityOption: 'select[name="associatedForum"] option',
            newSteps: 'New Steps',
        };
    }

    static get messages() {
        return {
            resolutionFlowSuccessfullySaved: 'Resolution Flow successfully saved',
            duplicateName: 'A Resolution Flow with this name already exists. Please enter a different name.',
            communityModerator: "The moderator for this Resolution Flow has been set to the Community's moderator",
            saveChanges:  'Do you want to save the changes you made to this Resolution Flow?',
            passedValidation: 'All Resolution Flows passed validation',
            noDataToDisplay: 'No data to display',
        };
    }

    static get procDesignerTab() {
        return {
            procDesigner: 'procdesigner4',
            newStepId: 'newstepID',
            expandAllId: 'expandAllID',
            saveId: 'saveID',
            steps: 'steps',
            stepNameInput: 'sninput0',
            stepName: 'Step Name',
            closeTd: 'td[align="right"]',
        };
    }
}
