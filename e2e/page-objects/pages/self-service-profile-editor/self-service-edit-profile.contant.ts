export class SelfServiceEditProfileConstant {

    static get sections() {
        return {
            generalPreferences: 'General Preferences',
            searchPreferences: 'Search Preferences',
            micrositePreferences: 'Microsite Preferences',
            userControls: 'User Controls',
            roles: 'Roles',
            authoringControls: 'Authoring Controls',
        };
    }

    static get names() {
        return {
            subnavOn: 'subnav_on',
            preferences: 'Preferences',
            save: 'Save',
            cancel: 'Cancel',
            notifications: 'Notifications',
            expandAll: 'Expand All',
            collapseAll: 'Collapse All',
            authoringEvents: 'Authoring Events',
            collaborationEvents: 'Collaboration Events',
            feedbackEvents: 'Feedback Events',
            webCasesEvents: 'Web Cases Events',
            expand: 'expand',
            collapse: 'collapse',
            yes: 'Yes',
            profileData: 'Profile Data',
            initial: 'Initial',
            email: 'Email',
            confirmation: 'Confirmation',
            error: 'Error',
            password: 'Password',
            conformationPassword: 'Confirmation password',
            expertiseProfile: 'Expertise profile',
            groups: 'Groups',
            accessLevels: 'Access levels',
            languages: 'Languages',
            unifiedTemplates: 'Unified templates',
            universalMetadata: 'Universal metadata',
            selectLanguages: 'Select Languages',
            available: 'available',
            included: 'included',
            add: 'Add',
            remove: 'Remove',
            ok: 'OK',
            selectUnifiedTemplates: 'Select Unified Templates',
            defaultMicrosite: 'Default microsite',
        };
    }

    static get attibutes() {
        return {
            id: {
                collabEvents: 'collabEvents',
                authoringEvents: 'authoringEvents',
                feedbackEvents: 'feedbackEvents',
                webCaseEvents: 'webCaseEvents',
                language: 'language',
                authUTemplates: 'authUTemplates',
            },
            name: {
                email: 'email',
                middleName: 'middleName',
                password: 'password',
                cpassword: 'cpassword',
                defaultMicrosite: 'defaultMicrosite',
            },
            classes: {
                manageExpertise: 'manageExpertise',
                formSuog: 'formSUOG',
                popSelectAccessLevel: 'popSelectAccessLevel',
                popSelectLanguage: 'popSelectLanguage',
                popSelectUTemplates: 'popSelectUTemplates',
                formAuthUmDialog: 'formAuthUMDialog',
            },
        };
    }

    static get messages() {
        return {
            pleaseEnterValidEmailAddress: 'Please enter valid Email Address',
            passwordDontMatch: 'The entered passwords do not match. Please re-enter them.',
            blankMandatoryField: 'The following properties cannot be blank:',
            invalidPassword: 'The entered Password is invalid' +
                '.  The Password can be from 6 to 64 characters and may not contain spaces.',
        };
    }
}
