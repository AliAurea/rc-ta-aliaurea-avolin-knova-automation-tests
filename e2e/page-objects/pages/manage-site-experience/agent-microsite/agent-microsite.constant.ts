export class AgentMicrositeConstant {

    static get titles() {
        return {
            resolutionFlowDesigner: 'Resolution Flow Designer',
            deletePopup: 'Dialog Delete Reusable Step',
            recommendationManager: 'Recommendation Manager',
        };
    }

    static get resolutionFlowDesignerForm() {
        return {
            resolutionNamesList: 'Resolution names list',
            builderTab: 'Builder tab',
            newSteps: 'New Steps',
            newStep: 'New Step',
            saveButton: 'Save',
            stepsLink: 'Steps link',
            stepExpandIconList: 'Step Expand icon list',
            processDesignerTab: 'Process Designer',
            runTheFollowingStepsLabel: 'Then run the following steps',
            stepsList: 'Steps list',
            cancelButton: 'Cancel',
            deleteIconList: 'Delete icon list',
        };
    }

    static get recommendationManagerForm() {
        return {
            addPageletButton: 'Add Pagelet',
            pageletsTableColumns: {
                name: 'Name',
                id: 'ID',
                location: 'Location',
                delete: 'Delete',
            },
            pageletsTab: 'Pagelets tab',
            newPageletTab: 'New Pagelet tab',
            showOn: 'Show On',
            name: 'Name',
            save: 'Save',
            addNewLink: 'Add New Link',
            recommendationLink: 'Recommendation link',
            document: 'Document',
            text: 'Text',
            alwaysUseDocumentTitle: 'Always Use Document Title',
            alwaysUseDocumentSynopsis: 'Always Use Document Synopsis ',
            comunity: 'Comunity',
            findDocument: 'Find Document',
            searchIcon: 'Search icon',
            searchResultsLink: 'Search results link',
            plusIconInSearchResults: 'Plus icon in search results',
            resolutionFlow: 'Resolution flow',
            url: 'URL',
            nothing: 'Nothing',
            graphic: 'Graphic',
            synopsis: 'Synopsis',
            currentlyLinked: 'Currently linked',
            specifyLinkText: 'Specify link text',
            specifySynopsis: 'Specify synopsis',
            addImage: 'Add Image',
            alwaysUseResolutionFlowName: 'Always Use Resolution Flow Name',
            alwaysUseResolutionFlowDescription: 'Always Use Resolution Flow Description',
            firstPagelet: 'First pagelet',
            searchPage: 'Search Page',
            homePage: 'Home Page',
            searchAndHomePage: 'Search and Home Page',
        };
    }

    static get attributes() {
        return {
            id: {
                builder: 'builder',
                newstepID: 'newstepID',
                saveID: 'saveID',
                cancelIFrameID: 'cancelIFrameID',
                okButtonDeleteStepPopup: 'okID',
                headerPageletName: 'headerPageletName',
                selectPage: 'selectPage',
                pagelets: 'pagelets',
                pageletName: 'pageletName',
                submitPageletBtn: 'submitPageletBtn',
                addRecommendationBtn: 'addRecommendationBtn',
                linkDOCRadio: 'linkDOCRadio',
                displayTextRadio: 'displayTextRadio',
                docTitleType: 'docDynamicText',
                docDynamicSynopsis: 'docDynamicSynopsis',
                linkForumRadio: 'linkForumRadio',
                linkRFRadio: 'linkRFRadio',
                linkURLRadio: 'linkURLRadio',
                linkNoneRadio: 'linkNoneRadio',
                displayGraphicsRadio: 'displayGraphicsRadio',
                text: 'text',
                synopsis: 'synopsis',
                forumsddl: 'forumsddl',
                forumfound: 'forumfound',
                rfsddl: 'rfsddl',
                rfStaticText: 'rfStaticText',
                rfSynopsisType: 'rfSynopsisType',
                rfStaticSynopsis: 'rfStaticSynopsis',
                rfDynamicText: 'rfDynamicText',
                rfDynamicSynopsis: 'rfDynamicSynopsis',
            },
            value: {
                deleteFromPage: 'deleteFromPage',
                addPagelet: 'Add Pagelet',
                addImage: 'Add Image',
            },
            name: {
                searchString: 'searchString',
                rfId: 'rfId',
                delete: 'delete',
                recommendationDo: 'recommendation.do',
            },
        };
    }

    static get deletePopup() {
        return {
            deleteFromPageRadioButton: 'Delete from page',
            okButton: 'OK',
        };
    }

    static get pages() {
        return {
            homePage: 'Home Page',
        };
    }

    static get messages() {
        return {
            pageletSaveMessage: 'Pagelet has been succesfully saved.',
            documentAddedMessage: 'Document has been added succesfully.',
            propertyLeftBlank: 'The following properties cannot be blank:',
            noGraphicSpecifiedMessage: ' graphic has been specified.',
            areYouRureToDeletePagelet: 'Are you sure to delete MSRecommendation',
        };
    }
}
