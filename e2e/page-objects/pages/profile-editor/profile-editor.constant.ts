export class ProfileEditorConstant {
    static get testData() {
        return {
            defFirstName: 'Default FirstName',
            defLastName: 'Default LastName',
            defRole: 'Administrator',
            defBio: 'default bio for test user',
            defAccessLevel: 'Public',
            defMetadataProduct: 'TD_Product',
            defMetadataProduct2: 'TD_Product241664',
            defMetadataValue: 'SG_TD_PRODUCT_1',
            defMetadataValue2: 'SG_TD_PRODUCT241664_1',
            defCommunity: '-General Discussions',
        };
    }

    static get titles() {
        return {
            profileEditor: 'Profile Editor',
        };
    }

    static get profileDataFormLabels() {
        return {
            textBoxes: {
                userName: 'userName',
                password: 'password',
                confirmPassword: 'cpassword',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                bio: 'biodata',
                accessLevel: 'accessLevel',
            },
            checkBoxes: {
                role: 'Role',
            },
            buttons: {
                save: 'Save',
                submit: 'Submit',
                cancel: 'Cancel',
                delete: 'Delete',
                expertiseProfileSelect: 'Expertise Profile',
                groupsSelect: 'Groups',
                accessLevelsSelect: 'Access Levels',
                universalMetadataSelect: 'Universal Metadata',
            },
            successfullyUser: 'User successfully saved',
        };
    }

    static get popUps() {
        return {
            titles: {
                selectAccessLevels: 'Select Access Levels',
                emailSubscriptionStep1: 'Email Subscription - Step 1',
                emailSubscriptionStep2: 'Email Subscription - Step 2',
                universalMetadata: 'Select Universal Metadata',
                selectRSSFeeds: 'Select RSS Feeds',
            },
            buttons: {
                add: 'Add',
                remove: 'Remove',
                ok: 'OK',
                cancel: 'Cancel',
                next: 'Next',
                select: 'Select',
                submit: 'Submit',
                close: 'Close',
            },
            dropdowns: {
                category: 'Category',
                sendEmails: 'Send Emails',
                languages: 'Languages',
                options: {
                    category: {
                        communities: 'Communities',
                        knowledgeBase: 'Knowledge Base',
                    },
                    emails: {
                        immediately: 'Immediately',
                        daily: 'Daily',
                        weekly: 'Weekly',
                    },
                },
            },
            textBoxes: {
                titleContents: 'Title Contents',
            },
            checkBoxes: {
                question: 'question',
                insight: 'insight',
                topic: 'topic',
                webCase: 'assistance',
            },
            firstURL: 'first URL',
            delete: 'delete',
            selectRSSFeedsHeaders: {
                name: 'Name',
                description: 'Description',
                url: 'Url',
            },
        };
    }

    static get tabs() {
        return {
            titles: {
                subscription: 'content subscription',
                notifications: 'Notifications',
                communities: 'Communities',
                preferences: 'Preferences',
            },
            buttons: {
                createEmailSubscription: 'Create Email Subscription',
                selectRSSFeeds: 'Select RSS Feeds',
            },
            tableHeaders: {
                type: 'Type',
                item: 'Item',
                howOften: 'How Often',
                edit: 'Edit',
                del: 'Delete',
            },
        };
    }
}
