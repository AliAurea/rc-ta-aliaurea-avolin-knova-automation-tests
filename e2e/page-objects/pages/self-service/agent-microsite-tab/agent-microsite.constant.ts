export class AgentMicrositeSelfServiceConstant {
    static get testData() {
        return {
            defSendEmail: 'Daily',
            immediately: 'Immediately',
        };
    }

    static get formControls() {
        return {
            agentMicrositeTab: 'Agent Microsite',
            close: 'Close',
            submit: 'Submit',
            ok: 'OK',
            whatsPopular: {
                firstWhatsPopularDocument: "What's popular, firstDocument",
                documentDetailsTitle: 'Details: Document Title',
                tabBar: 'tabbar',
                fullScreen: 'Full Screen',
                bookMark: 'Bookmark',
                emailDoc: 'Email Document',
                rssSubscribe: 'Subscribe to Document through RSS',
                emailSubscribe: 'Subscribe to Document through email',
                printDoc: 'Print',
                backToPrevious: 'Back to Previous Page',
                upToResearchResults: 'Up to Search Results',
                toEmailTextBox: 'To email',
                sendEmailsDropDown: 'email',
            },
        };
    }

    static get titles() {
        return {
            whatsPopular: "What's Popular",
            viewDocument: 'View Document',
            addToFavorites: 'Add to Favorites',
            emailSubscriptionDetails: 'Email Subscription Details',
            rssSubscriptionDetails: 'RSS Subscription Details',
            emailDocument: 'Email Document',
            sentAcknoledgement: 'Sent Acknowledgment',
        };
    }
}
