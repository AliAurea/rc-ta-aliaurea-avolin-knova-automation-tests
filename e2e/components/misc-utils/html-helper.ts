import { HtmlHelperFactory } from '@aurea/protractor-automation-helper';

export class HtmlHelper extends HtmlHelperFactory {
    static get tags() {
        return {
            a: 'a',
            any: '*',
            abbr: 'abbr',
            acronym: 'acronym',
            address: 'address',
            applet: 'applet',
            area: 'area',
            article: 'article',
            aside: 'aside',
            audio: 'audio',
            b: 'b',
            base: 'base',
            baseFont: 'basefont',
            bdi: 'bdi',
            bdo: 'bdo',
            big: 'big',
            blockQuote: 'blockquote',
            body: 'body',
            br: 'br',
            button: 'button',
            canvas: 'canvas',
            caption: 'caption',
            center: 'center',
            cite: 'cite',
            code: 'code',
            col: 'col',
            colGroup: 'colgroup',
            command: 'command',
            dataList: 'datalist',
            dd: 'dd',
            del: 'del',
            details: 'details',
            dfn: 'dfn',
            dir: 'dir',
            div: 'div',
            dl: 'dl',
            dt: 'dt',
            em: 'em',
            embed: 'embed',
            fieldSet: 'fieldset',
            figCaption: 'figcaption',
            figure: 'figure',
            font: 'font',
            footer: 'footer',
            form: 'form',
            frame: 'frame',
            frameSet: 'frameset',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            head: 'head',
            header: 'header',
            hGroup: 'hgroup',
            hr: 'hr',
            html: 'html',
            i: 'i',
            iFrame: 'iframe',
            img: 'img',
            input: 'input',
            ins: 'ins',
            kbd: 'kbd',
            keyGen: 'keygen',
            label: 'label',
            legend: 'legend',
            li: 'li',
            link: 'link',
            map: 'map',
            mark: 'mark',
            menu: 'menu',
            meta: 'meta',
            meter: 'meter',
            nav: 'nav',
            noFrames: 'noframes',
            noScript: 'noscript',
            object: 'object',
            ol: 'ol',
            optGroup: 'optgroup',
            option: 'option',
            output: 'output',
            p: 'p',
            param: 'param',
            pre: 'pre',
            progress: 'progress',
            q: 'q',
            rp: 'rp',
            rt: 'rt',
            ruby: 'ruby',
            s: 's',
            sAmp: 'samp',
            script: 'script',
            section: 'section',
            select: 'select',
            small: 'small',
            source: 'source',
            span: 'span',
            strike: 'strike',
            strong: 'strong',
            style: 'style',
            sub: 'sub',
            summary: 'summary',
            sup: 'sup',
            table: 'table',
            tBody: 'tbody',
            td: 'td',
            textArea: 'textarea',
            tFoot: 'tfoot',
            th: 'th',
            tHead: 'thead',
            time: 'time',
            title: 'title',
            tr: 'tr',
            track: 'track',
            tt: 'tt',
            u: 'u',
            ul: 'ul',
            value: 'value',
            var: 'var',
            video: 'video',
            wbr: 'wbr',
        };
    }

    static get additionalAttributes() {
        return{
            ngRepeat: 'ng-repeat',
            ariaExpanded: 'aria-expanded',
            nghref : 'ng-href',
            uibTooltip: 'uib-tooltip',
            itemText: 'item-text',
            dataSelected: 'data-selected',
            dataRef: 'data-ref',
            tip : 'tip',
            contextmenuItemText: 'contextmenu-item-text',
            headerCaptionOne: 'header_caption_1',
            headerCaptionTwo: 'header_caption_2',
            headerButton: 'u8-header-button',
            gridTable: 'grid-table',
            selected: 'selected',
            treeContentFormPanel: 'tree_content_form_panel_Panel',
            imgCheckboxChecked: 'img-checkbox-checked-xs',
            dateInput: 'dateinput-label',
            overviewPanel: 'OverviewPanel',
            fontWeight: 'font-weight',
            backgroundColor: 'background-color',
            backgroundImage: 'background-image',
            borderLeftColor: 'border-left-color',
            ariaHidden: 'aria-hidden',
            cursor: 'cursor',
            contenteditable: 'contenteditable',
        };
    }

    public static get xpathExpressions() {
        return {
            following: 'following',
            ancestor: 'ancestor',
            descendant: 'descendant',
            followingSibling: 'following-sibling',
            preceding: 'preceding',
            precedingSibling: 'preceding-sibling',
        };
    }

    public static get attributeValues() {
        return {
            active: 'active',
            selected: 'selected',
        };
    }

    public static get cssExpressions() {
        return {
            optionChecked: 'option:checked',
        };
    }
}
