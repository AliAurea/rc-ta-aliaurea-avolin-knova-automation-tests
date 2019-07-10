export class CommunitiesConstant {

    static get testData() {
        return {
            defSegment: 'TD_Product',
            generalSearch: '-General Discussions',
            communitySearch: 'General Discussions',
            productSearch: '-Product Discussions',
            documentTypeSearch: 'Insight',
            publishedSearch: 'Within the Last Week',
            defSearchVal: 'FB_PRODUCTDISCUSSIONS_1_1',
            defSearchInVal: 'Title Only',
            defAuthor: 'Author Default',
            defLanguage: 'English',
            defSearchName: 'default Search',
        };
    }

    static get formControls() {
        return {
            comunities: 'Communities',
            communitiesHome: ' Communities Home',
            newPost: 'New Post',
            postAQuestionPrefix: 'Post',
            postAQuestionSufix: 'Question',
            postAQuestion: 'Post A Question',
            cancel: 'Cancel',
            add: 'Add',
            communityLink: 'Community link',
            communityLinks: 'Community links',
            subject: 'Subject',
            community: 'Community',
            continue: 'Continue ',
            details: 'Details',
            submit: 'Submit',
            edit: 'Edit',
            myMostRecentPosts: 'My Most Recent Posts',
            showAll: 'Show All',
            showFewer: 'Show Fewer',
            date: 'Date',
            search: 'Search',
            results: 'Results',
            showAllLink: 'Show All',
            myMostRecentPostsOps: {
                subject: 'Subject',
                community: 'Community',
                posted: 'Posted',
                table: 'Table',
            },
            mySubscriptions: {
                editButton: 'Edit',
            },
            searchesDropDown: 'searches DropDown',
            advancedSearch: 'Advanced Search',
            abc: 'ABC',
            suggestions: 'Suggestions',
            ok: 'OK',
            notifyMe: 'Notify me...',
            never: 'Never',
            immediately: 'Immediately',
            daily: 'Daily',
            weekly: 'Weekly',
        };
    }

    static get attributes() {
        return {
            value: {
                newPost: 'New Post',
                add: 'Add',
                abc: 'ABC',
                ok: 'OK',
            },
            name: {
                title: 'title',
                selectedForumID: 'selectedForumID',
                forumCommunity: 'forum',
                suggestions: 'suggestions',
            },
            class: {
                cke_editable: 'cke_editable',
                threadDate: 'threadDate',
                blueButtons: 'btn_lt-blue_58',
                btnLtBlue: 'btn_lt-blue_',
            },
            id: {
                never: 'never',
                instant: 'Instant',
                daily: 'Daily',
                weekly: 'Weekly',
            },
        };
    }

    static get titles() {
        return {
            attachmentEditor: 'Attachment Editor',
            PreviewAndSubmitPost: 'Preview and Submit Post',
            contentSubscriptions: 'Content Subscriptions',
            editEmailDocumentSubscription: 'Edit Document Subscription',
            addSearchToFavorites: 'Add Search to Favorites',
            checkSpelling: 'Check Spelling',
        };
    }

    static get messages() {
        return {
            pleaseEnterSomeDetailsForThisPost: 'Please enter some details for this post',
            pleaseEnterASubjectForThisPost: 'Please enter a subject for this post',
            communitiesIsACategoryPleaseSelectACommunity: 'Communities is a Category. Please select a Community',
        };
    }

    static get filters() {
        return {
            searchInDropDown: 'searchFor',
            communityDropDown: 'forum',
            publisheDropDown: 'datepublished',
            showFocusChoicesRadio: 'showFocusChoices',
            focusOn: 'on',
            focusOff: 'off',
            authorTextBox: 'author',
            documentTypeDropDown: 'document',
            languageDropDown: 'locale',
            guidedSearch: 'Guided Search',
            newestDiscussions: 'kwidget01.docType',
            mostPopDiscussions: 'kwidget02.docType',
            firstNewestDiscussion: 'First Newest Discussion result',
            firstPopularDiscussion: 'First Most Popular Discussion result',
            saveSearch: 'Save Search',
        };
    }

    static get xpaths() {
        return {
            firstNewestDisc: '(//form[@name="kwidget01"]//parent::table//following-sibling::table/tbody/tr/td/a)[1]',
            firstPopDisc: '(//form[@name="kwidget02"]//parent::table//following-sibling::table/tbody/tr/td/a)[1]',
        };
    }
}
