(function () {
'use strict';

/**
 * Converts any non-dictionary object argument to a `NodeInit` dictionary object
 * with a `children` property assigned to the passed object
 * @function NodeInit
 * @param {*|{}} [init] Various init types
 * @return {{children:*}|initial} `NodeInit` dictionary object
 */
function NodeInit(init) {
    if(init && init.constructor !== Object) {
        return { children : init }
    }
    return init
}

const { assign } = Object;
const { isArray } = Array;
const { document: document$1 } = window;

/**
 * - Assembler for `HTMLElement` DOM interface
 * - Provides built-in and adapted interfaces for `HTMLElement` initialization
 */
class HTMLDOMAssembler {

    /**
     * Set content attributes on the node
     * @param {{}} attributes dictionary object
     */
    set attributes(attributes) {
        const node = this.node;
        for(let name in attributes) {
            const value = attributes[name];
            if(typeof value === 'string') {
                node.setAttribute(name, value);
            }
        }
    }

    /**
     * Set custom `data-` attributes on the node
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.node.dataset, dataset);
    }

    /**
     * Assign CSS style declaration to the node
     * @param {{}} style declaration dictionary object (CSSStyleDeclaration )
     */
    set style(style) {
        assign(this.node.style, style);
    }

    /**
     * Append children to the node
     * Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
     * @param {Node|String|HTMLDOMAssembler|Array} [children]
     *  child node or string or assembler instance or array of listed
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child);
        }
        else if(children) {
            const child = typeof children === 'string'?
                document$1.createTextNode(children) :
                children instanceof HTMLDOMAssembler?
                    children.node :
                    children;
            this.node.appendChild(child);
        }
    }

    /**
     * Create the specified node and initialize it by a given property set
     * @param {String} tagName
     * @param {{}|String|Node|HTMLDOMAssembler|Array} [init]
     * @returns {Element} created and initialized DOM `Element` node
     */
    assemble(tagName, init) {
        this.create(tagName);
        return init? this.init(NodeInit(init)) : this.node
    }

    /**
     * Create the specified node
     * @param {String} tagName
     * @returns {HTMLElement|*} created node
     */
    create(tagName) {
        /**
         * Just created node, assigned to the assembler instance
         * @type {HTMLElement|*}
         */
        return this.node = document$1.createElement(tagName)
    }

    /**
     * Initialize the node with defined properties
     * @param {{}} init initializing `NodeInit` dictionary object
     * @returns {HTMLElement|*} initialized node
     */
    init(init) {
        const node = this.node;
        for(let prop in init) {
            const value = init[prop];
            if(value !== undefined) {
                if(prop in this) this[prop] = value;
                else if(prop in node) node[prop] = value;
            }
        }
        return node
    }
}

Object.defineProperty(HTMLDOMAssembler.prototype, 'node', { writable : true, value : null });

/**
 * Elements in the DOM represent things; that is, they have intrinsic meaning, also known as semantics.
 *
 * https://html.spec.whatwg.org
 */

const assembler = new HTMLDOMAssembler;

/**
 * Assembles the specified `HTMLElement` node
 *
 * Provides `HTMLElement` interface and all HTML DOM interfaces which inherit from it
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#htmlelement-htmlelement)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
 * • [msdn api](https://msdn.microsoft.com/en-us/library/hh869697.aspx)
 *
 * @function htmldom
 * @param {String} tagName element tag name
 * @param {{}|String|Node|HTMLDOMAssembler|Array} [init] `NodeInit` dictionary
 * @param {{}} [init.attributes] `HTMLElement` attributes set as a dictionary object
 * @param {{}} [init.dataset] `HTMLElement` dataset as a dictionary object
 * @param {{}} [init.style] `HTMLElement` style as a dictionary object (CSSStyleDeclaration)
 * @param {String|Node|HTMLDOMAssembler|Array} [init.children] `HTMLElement` child nodes
 * @param {String} [init.accessKey] Specify an access key for the element
 * @param {String} [init.className] `Element` class name reflects "class" attribute
 * @param {String} [init.contentEditable] Specify whether or not the element is editable
 * @param {String} [init.dir] Specify a text writing directionality of the content of the current element
 * @param {Boolean} [init.hidden] Specify the visibility state of the element
 * @param {String} [init.id] `Element` unique identifier reflects "id" content attribute
 * @param {String} [init.innerHTML] Paste a markup string as an inner DOM structure
 * @param {String} [init.innerText] Paste a string data as a single text node
 * @param {String} [init.lang] Define a human-language of the element and its contents
 * @param {Number} [init.tabIndex] Specify a focusability of the element
 * @param {String} [init.textContent] Paste string data as a single text node
 * @param {String} [init.title] Specify title of the element represents a browser title tooltip content
 * @param {Function} [init.onblur] Fired at nodes when they stop being focused
 * @param {Function} [init.onchange] Fired at controls when the user commits a value change (see also the input event)
 * @param {Function} [init.onclick] Normally a mouse event also synthetically fired at an element before its activation behavior is run,
 *                                  when an element is activated from a non-pointer input device (e.g. a keyboard)
 * @param {Function} [init.ondblclick] Fires on double click
 * @param {Function} [init.onfocus] Fired at nodes gaining focus
 * @param {Function} [init.onreset] Fired at a form element when it is reset
 * @param {Function} [init.onsubmit] Fired at a form element when it is submitted
 * @param {Function} [init.ontoggle] Fired at details elements when they open or close
 * @return {HTMLElement|*}
 */
function htmldom(tagName, init) {
 // todo @param {Function} [init.oninvalid] Fired at controls during form validation if they do not satisfy their constraints
 // todo @param {Function} [init.onload] Fired at an element containing a resource (e.g. img, embed) when its resource has finished loading
 // todo @param {Function} [init.onloadend] Fired at img elements after a successful load
 // todo @param {Function} [init.onloadstart] Fired at img elements when a load begins
 // todo @param {Function} [init.onpause] The element has been paused. Fired after the pause() method has returned
 // todo @param {Function} [init.onplay] The element is no longer paused. Fired after the play() method has returned, or when the autoplay attribute has caused playback to begin
 // todo @param {Function} [init.onratechange] Either the defaultPlaybackRate or the playbackRate attribute has just been updated
 // todo @param {Function} [init.onselect] Fired at form controls when their text selection is adjusted (whether by an API or by the user)
 // todo @param {Function} [init.onvolumechange] Either the volume attribute or the muted attribute has changed. Fired after the relevant attribute's setter has returned
    return assembler.assemble(tagName, init)
}


/**
 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed,
 *      if it had been relevant, consisting of just the element's contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-a-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 * • [msdn api](https://msdn.microsoft.com/en-us/library/hh869682.aspx)
 *
 * @function a
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.href] Address of the hyperlink
 * @param {String} [init.target] Browsing context for hyperlink navigation
 * @param {String} [init.rel] Relationship between the location in the document containing the hyperlink and the destination resource
 * @param {String} [init.hreflang] Language of the linked resource
 * @param {String} [init.type] Hint for the type of the referenced resource
 * @return {HTMLAnchorElement}
 *
 */


/**
 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
 * represents an abbreviation or acronym, optionally with its expansion.
 * The `title` attribute may be used to provide an expansion of the abbreviation.
 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-abbr-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
 *
 * @function abbr
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.title] Special semantics: full term or expansion of abbreviation
 * @return {HTMLElement}
 */


/**
 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
 * represents the contact information for its nearest `article` or `body` element ancestor.
 * If that is the `body` element, then the contact information applies to the document as a whole.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-address-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
 *
 * @function address
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
 * represents either a hyperlink with some text and a corresponding area on an image map,
 * or a dead area on an image map.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-area-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
 *
 * @function area
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.alt] Replacement text for use when images are not available
 * @param {String} [init.coords] Coordinates for the shape to be created in an image map
 * @param {String} [init.shape] The kind of shape to be created in an image map
 * @param {String} [init.href] Address of the hyperlink
 * @param {String} [init.target] Browsing context for hyperlink navigation
 * @param {String} [init.download] Whether to download the resource instead of navigating to it, and its file name if so
 * @param {String} [init.ping] URLs to ping
 * @param {String} [init.rel] Relationship between the location in the document containing the hyperlink and the destination resource
 * @return {HTMLAreaElement}
 */


/**
 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
 * represents a complete, or self-contained, composition in a document, page, application,
 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
 * an interactive widget or gadget, or any other independent item of content.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-article-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
 *
 * @function article
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
 * and which could be considered separate from that content.
 * Such sections are often represented as sidebars in printed typography.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-aside-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
 *
 * @function aside
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
 * represents a sound or audio stream.
 * Content may be provided inside the `audio` element.
 * User agents should not show this content to the user
 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
 * or to show text to the users of these older browsers informing them of how to access the audio contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-audio-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
 *
 * @function audio
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
 * @param {String} [init.preload] Hints how much buffering the media resource will likely need
 * @param {Boolean} [init.autoplay] Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} [init.loop] Whether to loop the media resource
 * @param {Boolean} [init.muted] Whether to mute the media resource by default
 * @param {Boolean} [init.controls] Show user agent controls
 * @return {HTMLAudioElement}
 *
 * @version HTML5
 */


/**
 * [The `b` element](https://html.spec.whatwg.org/#the-b-element)
 * represents a span of text to which attention is being drawn
 * for utilitarian purposes without conveying any extra importance
 * and with no implication of an alternate voice or mood,
 * such as key words in a document abstract, product names in a review,
 * actionable words in interactive text-driven software, or an article lede.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-b-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
 *
 * @function b
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `base` element](https://html.spec.whatwg.org/#the-base-element)
 * allows authors to specify the document base URL for the purposes of parsing URLs,
 * and the name of the default browsing context for the purposes of following hyperlinks.
 * The element does not represent any content beyond this information.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-base-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
 *
 * @function base
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.href] Document base URL
 * @param {String} [init.target] Default browsing context for hyperlink navigation and form submission
 * @return {HTMLElement}
 */


/**
 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-bdi-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
 *
 * @function bdi
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.dir] special semantics
 * @return {HTMLElement}
 */


/**
 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
 * represents explicit text directionality formatting control for its children.
 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-bdo-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
 *
 * @function bdo
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.dir] special semantics: `rtl` or `ltr` values allowed only
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `blockquote` element](https://html.spec.whatwg.org/#the-blockquote-element)
 * represents a section that is quoted from another source.
 * Content inside a blockquote must be quoted from another source,
 * whose address, if it has one, may be cited in the cite attribute.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-blockquote-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
 *
 * @function blockquote
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @return {HTMLQuoteElement}
 */


/**
 * [The `body` element](https://html.spec.whatwg.org/#the-body-element)
 * represents the main content of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-body-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
 *
 * @function body
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLBodyElement}
 */


/**
 * [The `br` element](https://html.spec.whatwg.org/#the-br-element)
 * represents a line break.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-br-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
 *
 * @function br
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLBRElement}
 */


/**
 * [The `button` element](https://html.spec.whatwg.org/#the-button-element)
 * represents a button labeled by its contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-button-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535211.aspx)
 *
 * @function button
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.formAction] URL to use for form submission
 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
 * @param {String} [init.formMethod] HTTP method to use for form submission
 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
 * @param {String} [init.formTarget] Browsing context for form submission
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {String} [init.type] Type of button
 * @param {String} [init.value] Value to be used for form submission
 * @return {HTMLButtonElement}
 */


/**
 * [The `canvas` element](https://html.spec.whatwg.org/#the-canvas-element)
 * provides scripts with a resolution-dependent bitmap canvas,
 * which can be used for rendering graphs, game graphics, art,
 * or other visual images on the fly.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-canvas-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
 *
 * @function canvas
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.width] Horizontal dimension
 * @param {Number} [init.height] Vertical dimension
 * @return {HTMLCanvasElement}
 *
 * @version HTML5
 */


/**
 * [The `caption` element](https://html.spec.whatwg.org/#the-caption-element)
 * represents the title of the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-caption-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
 *
 * @function caption
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableCaptionElement}
 */


/**
 * [The `cite` element](https://html.spec.whatwg.org/#the-cite-element)
 * represents the title of a work (e.g. a book, a paper, an essay, a poem,
 * a score, a song, a script, a film, a TV show, a game, a sculpture, a painting,
 * a theatre production, a play, an opera, a musical, an exhibition, a legal case report,
 * a computer program, etc). This can be a work that is being quoted or referenced in detail
 * (i.e. a citation), or it can just be a work that is mentioned in passing.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-cite-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
 *
 * @function cite
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `code` element](https://html.spec.whatwg.org/#the-code-element)
 * represents a fragment of computer code. This could be an XML element name,
 * a file name, a computer program, or any other string that a computer would recognize.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-code-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
 *
 * @function code
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `col` element](https://html.spec.whatwg.org/#the-col-element)
 * represents has a parent and that is a colgroup element that itself has a parent
 * that is a table element, then the col element represents one or more columns
 * in the column group represented by that colgroup.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-col-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
 *
 * @function col
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.span] Number of columns spanned by the element
 * @return {HTMLTableColElement}
 */


/**
 * [The `colgroup` element](https://html.spec.whatwg.org/#the-colgroup-element)
 * represents represents a group of one or more columns in the table that is its parent,
 * if it has a parent and that is a table element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-colgroup-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
 *
 * @function colgroup
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.span] Number of columns spanned by the element
 * @return {HTMLTableColElement}
 */


/*
 * [The `data` element](https://html.spec.whatwg.org/#the-data-element)
 * represents its contents, along with a machine-readable form
 * of those contents in the value attribute.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-data-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt706246.aspx)
 *
 * @function data
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.value] Machine-readable value
 * @return {HTMLDataElement}
 *
 * @version HTML5
 */
// todo
/*export function data(init) {
    return htmldom('data', init)
}*/

/**
 * [The `datalist` element](https://html.spec.whatwg.org/#the-datalist-element)
 * represents a set of option elements that represent predefined options for other controls.
 * In the rendering, the datalist element represents nothing and it, along with its children,
 * should be hidden.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772925.aspx)
 *
 * @function datalist
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLDataListElement}
 *
 * @version HTML5
 */


/**
 * [The `dd` element](https://html.spec.whatwg.org/#the-dd-element)
 * represents the description, definition, or value,
 * part of a term-description group in a description list (dl element).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dd-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535234.aspx)
 *
 * @function dd
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `del` element](https://html.spec.whatwg.org/#the-del-element)
 * represents a removal from the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-del-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535236.aspx)
 *
 * @function del
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @param {String} [init.dateTime] Date and (optionally) time of the change
 * @return {HTMLModElement}
 */


/**
 * [The `details` element](https://html.spec.whatwg.org/#the-details-element)
 * represents a disclosure widget from which the user can obtain additional information or controls.
 *
 * [w3](https://www.w3.org/TR/html/interactive-elements.html#the-details-element)
 * • [MDN elemeent reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 *
 * @function details
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.open] Whether the details are visible
 * @return {HTMLDetailsElement}
 *
 * @version HTML5
 */


/**
 * [The `dfn` element](https://html.spec.whatwg.org/#the-dfn-element)
 * represents the defining instance of a term. The paragraph, description list group,
 * or section that is the nearest ancestor of the dfn element must also contain
 * the definition(s) for the term given by the dfn element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dfn-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535237.aspx)
 *
 * @function dfn
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.title] Special semantics: Full term or expansion of abbreviation
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/*
 * [The `dialog` element](https://html.spec.whatwg.org/#the-dialog-element)
 * represents a part of an application that a user interacts with to perform a task,
 * for example a dialog box, inspector, or window.
 *
 * [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 *
 * @function dialog
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.open] Whether the dialog box is showing
 * @return {HTMLDialogElement}
 *
 * @version HTML5
 */
// todo
/*export function dialog(init) {
    return htmldom('dialog', init)
}*/

/**
 * [The `div` element](https://html.spec.whatwg.org/#the-div-element)
 * has no special meaning at all. It represents its children.
 * It can be used with the class, lang, and title attributes to mark up semantics
 * common to a group of consecutive elements.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-div-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535240.aspx)
 *
 * @function div
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLDivElement}
 */


/**
 * [The `dl` element](https://html.spec.whatwg.org/#the-dl-element)
 * represents an association list consisting of zero or more name-value groups (a description list).
 * A name-value group consists of one or more names (dt elements) followed by one or more values
 * (dd elements), ignoring any nodes other than dt and dd elements.
 * Within a single dl element, there should not be more than one dt element for each name.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dl-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535241.aspx)
 *
 * @function dl
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLDListElement}
 */


/**
 * [The `dt` element](https://html.spec.whatwg.org/#the-dt-element)
 * represents the term, or name, part of a term-description group in a description list (dl element).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-dt-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535243.aspx)
 *
 * @function dt
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `em` element](https://html.spec.whatwg.org/#the-em-element)
 * represents stress emphasis of its contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-em-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535244.aspx)
 *
 * @function em
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `embed` element](https://html.spec.whatwg.org/#the-embed-element)
 * provides an integration point for an external (typically non-HTML)
 * application or interactive content.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-embed-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535245.aspx)
 *
 * @function embed
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.height] Vertical dimension
 * @return {HTMLEmbedElement}
 */


/**
 * [The `fieldset` element](https://html.spec.whatwg.org/#the-fieldset-element)
 * represents
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-fieldset-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535247.aspx)
 *
 * @function fieldset
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.disabled] Whether the form control is disabled
 * @param {String} [init.name] Name of form control to use in the form.elements API
 * @return {HTMLFieldSetElement}
 */


/**
 * [The `figcaption` element](https://html.spec.whatwg.org/#the-figcaption-element)
 * represents a caption or legend for the rest of the contents
 * of the figcaption element's parent figure element, if any.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-figcaption-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593037.aspx)
 *
 * @function figcaption
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `figure` element](https://html.spec.whatwg.org/#the-figure-element)
 * represents some flow content, optionally with a caption,
 * that is self-contained (like a complete sentence) and is typically referenced
 * as a single unit from the main flow of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-figure-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
 *
 * @function figure
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `footer` element](https://html.spec.whatwg.org/#the-footer-element)
 * represents a footer for its nearest ancestor sectioning content or sectioning root element.
 * A footer typically contains information about its section such as who wrote it,
 * links to related documents, copyright data, and the like.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-footer-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593039.aspx)
 *
 * @function footer
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `form` element](https://html.spec.whatwg.org/#the-form-element)
 * represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-form-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535249.aspx)
 *
 * @function form
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.acceptCharset] Character encodings to use for form submission
 * @param {String} [init.action] URL to use for form submission
 * @param {String} [init.autocomplete] Default setting for autofill feature for controls in the form
 * @param {String} [init.enctype] Form data set encoding type to use for form submission
 * @param {String} [init.method] HTTP method to use for form submission
 * @param {String} [init.name] Name of form to use in the document.forms API
 * @param {Boolean} [init.noValidate] Bypass form control validation for form submission
 * @param {String} [init.target] Browsing context for form submission
 * @return {HTMLFormElement}
 */


/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-h1-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535253.aspx)
 *
 * @function h1
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h2
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h3
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h4
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h5
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */

/**
 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
 * represent headings for their sections.
 *
 * @function h6
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadingElement}
 */


/**
 * [The `head` element](https://html.spec.whatwg.org/#the-head-element)
 * represents a collection of metadata for the Document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-head-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTMLHeadElement)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535252.aspx)
 *
 * @function head
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHeadElement}
 */


/**
 * [The `header` element](https://html.spec.whatwg.org/#the-header-element)
 * represents a group of introductory or navigational aids.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-header-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593044.aspx)
 *
 * @function header
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `hgroup` element](https://html.spec.whatwg.org/#the-hgroup-element)
 * represents the heading of a section, which consists
 * of all the h1–h6 element children of the hgroup element.
 * The element is used to group a set of h1–h6 elements when the heading has multiple levels,
 * such as subheadings, alternative titles, or taglines.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-hgroup-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593045.aspx)
 *
 * @function hgroup
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `hr` element](https://html.spec.whatwg.org/#the-hr-element)
 * represents a paragraph-level thematic break, e.g. a scene change in a story,
 * or a transition to another topic within a section of a reference book.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-hr-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535254.aspx)
 *
 * @function hr
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLHRElement}
 */


/**
 * [The `html` element](https://html.spec.whatwg.org/#the-html-element)
 * represents the root of an HTML document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-html-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535255.aspx)
 *
 * @function html
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.manifest] [Application cache manifest](https://html.spec.whatwg.org/#concept-appcache-manifest)
 * @return {HTMLHtmlElement}
 */


/**
 * [The `i` element](https://html.spec.whatwg.org/#the-i-element)
 * represents a span of text in an alternate voice or mood,
 * or otherwise offset from the normal prose in a manner indicating a different quality of text,
 * such as a taxonomic designation, a technical term, an idiomatic phrase from another language,
 * transliteration, a thought, or a ship name in Western texts.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-i-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535257.aspx)
 *
 * @function i
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `iframe` element](https://html.spec.whatwg.org/#the-iframe-element)
 * represents a [nested browsing context](https://html.spec.whatwg.org/#nested-browsing-context).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-iframe-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535258.aspx)
 *
 * @function iframe
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.height] Vertical dimension
 * @param {String} [init.name] Name of nested browsing context
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.attributes.sandbox] Security rules for nested content
 * @return {HTMLIFrameElement}
 */


/**
 * [The `img` element](https://html.spec.whatwg.org/#the-img-element)
 * represents an image.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-img-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535259.aspx)
 *
 * @function img
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.alt] Replacement text for use when images are not available
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
 * @param {String} [init.useMap] Name of image map to use
 * @param {Boolean} [init.isMap] Whether the image is a server-side image map
 * @param {Number} [init.width] Horizontal dimension
 * @param {Number} [init.height] Vertical dimension
 * @return {HTMLImageElement}
 */


/**
 * [The `input` element](https://html.spec.whatwg.org/#the-input-element)
 * represents a typed data field, usually with a form control to allow the user to edit the data.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-input-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535260.aspx)
 *
 * @function input
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.alt] Replacement text for use when images are not available
 * @param {String} [init.accept] Hint for expected file type in file upload controls
 * @param {String} [init.autocomplete] Hint for form autofill feature
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Boolean} [init.checked] Whether the command or control is checked
 * @param {Boolean} [init.defaultChecked] Whether the command or control is checked by default
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.formAction] URL to use for form submission
 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
 * @param {String} [init.formMethod] HTTP method to use for form submission
 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
 * @param {String} [init.formTarget] Browsing context for form submission
 * @param {Boolean} [init.indeterminate]
 * @param {String} [init.inputMode] Hint for selecting an input modality
 * @param {String} [init.max] Maximum value
 * @param {Number} [init.maxLength] Maximum length of value
 * @param {String} [init.min] Minimum value
 * @param {Boolean} [init.multiple] Whether to allow multiple values
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {String} [init.pattern] Pattern to be matched by the form control's value
 * @param {String} [init.placeholder] User-visible label to be placed within the form control
 * @param {Boolean} [init.readOnly] Whether to allow the value to be edited by the user
 * @param {Boolean} [init.required] Whether the control is required for form submission
 * @param {Number} [init.size] Size of the control
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.step] Granularity to be matched by the form control's value
 * @param {String} [init.type] Type of form control
 * @param {String} [init.value] Value of the form control
 * @param {String} [init.defaultValue]
 * @param {String} [init.title] Special semantics: Description of pattern (when used with pattern attribute).
 * @param {String} [init.attributes.form] Associates the control with a form element (ID reference)
 * @param {String} [init.attributes.list] List of autocomplete options
 * @return {HTMLInputElement}
 */
function input(init) {
 // todo @param {String} [init.dirName] Name of form control to use for sending the element's directionality in form submission
 // todo @param {Number} [init.minLength] Minimum length of value
    return htmldom('input', init)
}

/**
 * [The `ins` element](https://html.spec.whatwg.org/#the-ins-element)
 * represents an addition to the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ins-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535842.aspx)
 *
 * @function ins
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @param {String} [init.dateTime] Date and (optionally) time of the change
 * @return {HTMLModElement}
 */


/**
 * [The `kbd` element](https://html.spec.whatwg.org/#the-kbd-element)
 * represents user input (typically keyboard input,
 * although it may also be used to represent other input, such as voice commands).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-kbd-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
 *
 * @function kbd
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `label` element](https://html.spec.whatwg.org/#the-label-element)
 * represents a caption in a user interface.
 * The caption can be associated with a specific form control,
 * known as the label element's labeled control, either using the `htmlFor` attribute,
 * or by putting the form control inside the label element itself.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-label-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535845.aspx)
 *
 * @function label
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.htmlFor] Associate the label with form control
 * @return {HTMLLabelElement}
 */


/**
 * [The `legend` element](https://html.spec.whatwg.org/#the-legend-element)
 * represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-legend-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535846.aspx)
 *
 * @function legend
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLLegendElement}
 */


/**
 * [The `li` element](https://html.spec.whatwg.org/#the-li-element)
 * represents a list item. If its parent element is an ol, ul, or menu element,
 * then the element is an item of the parent element's list, as defined for those elements.
 * Otherwise, the list item has no defined list-related relationship to any other li element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-li-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535847.aspx)
 *
 * @function li
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.value] Ordinal value of the list item (if the element is not a child of an ul or menu element)
 * @return {HTMLLIElement}
 */


/**
 * [The `link` element](https://html.spec.whatwg.org/#the-link-element)
 * allows authors to link their document to other resources.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-link-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535848.aspx)
 *
 * @function link
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.href] Address of the hyperlink
 * @param {String} [init.rel] Relationship between the document containing the hyperlink and the destination resource
 * @param {String} [init.media] Applicable media* @param {String} [init.nonce] Cryptographic nonce used in Content Security Policy checks
 * @param {String} [init.hreflang] Language of the linked resource
 * @param {String} [init.type] Hint for the type of the referenced resource
 * @param {String} [init.title] Special semantics: title of the link [CSS style sheet set name](CSS style sheet set name).
 * @return {HTMLLinkElement}
 */


/**
 * [The `main` element](https://html.spec.whatwg.org/#the-main-element)
 * can be used as a container for the dominant contents of another element.
 * It represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-main-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt634542.aspx)
 *
 * @function main
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `map` element](https://html.spec.whatwg.org/#the-map-element),
 * in conjunction with an img element and any area element descendants, defines an image map.
 * The element represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-map-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535850.aspx)
 *
 * @function map
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Name of [image map](https://html.spec.whatwg.org/#image-map) to reference from the `usemap` attribute
 * @return {HTMLMapElement}
 */


/**
 * [The `mark` element](https://html.spec.whatwg.org/#the-mark-element)
 * represents a run of text in one document marked or highlighted for reference purposes,
 * due to its relevance in another context.
 * When used in a quotation or other block of text referred to from the prose,
 * it indicates a highlight that was not originally present but which has been added
 * to bring the reader's attention to a part of the text that might not have been considered
 * important by the original author when the block was originally written,
 * but which is now under previously unexpected scrutiny.
 * When used in the main prose of a document,
 * it indicates a part of the document that has been highlighted
 * due to its likely relevance to the user's current activity.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-mark-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593046.aspx)
 *
 * @function mark
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/*
 * [The `menu` element](https://html.spec.whatwg.org/#the-menu-element)
 * represents a list of commands.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-menu-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535852.aspx)
 *
 * @function menu
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.type] Type of menu
 * @param {String} [init.label] User-visible label
 * @return {HTMLMenuElement}
 *
 * @version HTML5
 */
// todo
/*export function menu(init) {
    return htmldom('menu', init)
}*/

/*
 * [The `menuitem` element](https://html.spec.whatwg.org/#the-menuitem-element)
 * represents a command that the user can invoke from a popup menu
 * (either a context menu or the menu of a menu button).
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-menuitem-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
 *
 * @function menuitem
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.type] Type of command
 * @param {String} [init.label] User-visible label
 * @param {String} [init.icon] Icon for the command
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {Boolean} [init.checked] Whether the command or control is checked
 * @param {String} [init.radiogroup] Name of group of commands to treat as a radio button group
 * @param {Boolean} [init.default] Mark the command as being a default command
 * @param {String} [init.title] Special semantics: hint describing the command
 * @return {HTMLMenuItemElement}
 *
 * @version HTML5
 */
// todo
/*export function menuitem(init) {
    return htmldom('menuitem', init)
}*/

/**
 * [The `meta` element](https://html.spec.whatwg.org/#the-meta-element)
 * represents various kinds of metadata that cannot be expressed using the title,
 * base, link, style, and script elements.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-meta-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535853.aspx)
 *
 * @function meta
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Metadata name
 * @param {String} [init.httpEquiv] Pragma directive
 * @param {String} [init.content] Value of the element
 * @param {String} [init.attributes.charset] Character encoding declaration
 * @return {HTMLMetaElement}
 */


/*
 * [The `meter` element](https://html.spec.whatwg.org/#the-meter-element)
 * represents a scalar measurement within a known range, or a fractional value
 * for example disk usage, the relevance of a query result,
 * or the fraction of a voting population to have selected a particular candidate.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-meter-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt573149.aspx)
 *
 * @function meter
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.value] Current value of the element
 * @param {Number} [init.min] Lower bound of range
 * @param {Number} [init.max] Upper bound of range
 * @param {Number} [init.low] High limit of low range
 * @param {Number} [init.high] Low limit of high range
 * @param {Number} [init.optimum] Optimum value in gauge
 * @return {HTMLMeterElement}
 *
 * @version HTML5
 */
// todo
/*export function meter(init) {
    return htmldom('meter', init)
}*/

/**
 * [The `nav` element](https://html.spec.whatwg.org/#the-nav-element)
 * represents a section of a page that links to other pages or to parts within the page:
 * a section with navigation links.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-nav-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593047.aspx)
 *
 * @function nav
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `noscript` element](https://html.spec.whatwg.org/#the-noscript-element)
 * represents nothing if scripting is enabled,
 * and represents its children if scripting is disabled.
 * It is used to present different markup to user agents that support scripting
 * and those that don't support scripting, by affecting how the document is parsed.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-noscript-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535858.aspx)
 *
 * @function noscript
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `object` element](https://html.spec.whatwg.org/#the-object-element)
 * can represent an external resource, which, depending on the type of the resource,
 * will either be treated as an image, as a nested browsing context,
 * or as an external resource to be processed by a plugin.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-object-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535859.aspx)
 *
 * @function object
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.data] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {Boolean} [init.typeMustMatch] Whether the type attribute and the Content-Type value need to match for the resource to be used
 * @param {String} [init.name] Name of nested browsing context
 * @param {String} [init.useMap] Name of image map to use
 * @param {String} [init.width] Horizontal dimension
 * @param {String} [init.height] Vertical dimension
 * @param {String} [init.attributes.form] Associates the control with a form element (ID reference)
 * @return {HTMLObjectElement}
 */


/**
 * [The `ol` element](https://html.spec.whatwg.org/#the-ol-element)
 * represents a list of items, where the items have been intentionally ordered,
 * such that changing the order would change the meaning of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ol-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535875.aspx)
 *
 * @function ol
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.reversed] Number the list backwards
 * @param {Number} [init.start] Starting value of the list
 * @param {String} [init.type] Kind of list marker
 * @return {HTMLOListElement}
 */


/**
 * [The `optgroup` element](https://html.spec.whatwg.org/#the-optgroup-element)
 * represents a group of option elements with a common label.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-optgroup-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535876.aspx)
 *
 * @function optgroup
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.label] User-visible label
 * @return {HTMLOptGroupElement}
 */


/**
 * [The `option` element](https://html.spec.whatwg.org/#the-option-element)
 * represents an option in a select element or as part of a list of suggestions
 * in a datalist element.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-option-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535877.aspx)
 *
 * @function option
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {String} [init.label] User-visible label
 * @param {Boolean} [init.selected] Whether the option is selected
 * @param {String} [init.value] Value to be used for form submission
 * @return {HTMLOptionElement}
 */


/*
 * [The `output` element](https://html.spec.whatwg.org/#the-output-element)
 * represents the result of a calculation performed by the application,
 * or the result of a user action.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-output-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt732268.aspx)
 *
 * @function output
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.htmlFor] Specifies controls from which the output was calculated
 * @param {String} [init.name] Name of form control to use in the [form.elements](https://html.spec.whatwg.org/#dom-form-elements) API
 * @param {String} [init.defaultValue]
 * @param {String} [init.value]
 * @param {String} [init.attributes.form] Associates the control with a form element (ID reference)
 * @return {HTMLOutputElement}
 *
 * @version HTML5
 */
// todo
/*export function output(init) {
    return htmldom('output', init)
}*/

/**
 * [The `p` element](https://html.spec.whatwg.org/#the-p-element)
 * represents a paragraph.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-p-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535878.aspx)
 *
 * @function p
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLParagraphElement}
 */


/**
 * [The `param` element](https://html.spec.whatwg.org/#the-param-element)
 * defines parameters for plugins invoked by object elements.
 * It does not represent anything on its own.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-param-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535880.aspx)
 *
 * @function param
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Name of parameter
 * @param {String} [init.value] Value of parameter
 * @return {HTMLParamElement}
 */


/**
 * [The `picture` element](https://html.spec.whatwg.org/#the-picture-element)
 * is a container which provides multiple sources to its contained img element to allow authors
 * to declaratively control or give hints to the user agent about which image resource to use,
 * based on the screen pixel density, viewport size, image format, and other factors.
 * It represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-picture-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt574001.aspx)
 *
 * @function picture
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLPictureElement}
 *
 * @version HTML5
 */


/**
 * [The `pre` element](https://html.spec.whatwg.org/#the-pre-element)
 * represents a block of preformatted text, in which structure is represented
 * by typographic conventions rather than by elements.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-pre-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535883.aspx)
 *
 * @function pre
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLPreElement}
 */


/**
 * [The `progress` element](https://html.spec.whatwg.org/#the-progress-element)
 * represents the completion progress of a task. The progress is either indeterminate,
 * indicating that progress is being made but that it is not clear
 * how much more work remains to be done before the task is complete
 * (e.g. because the task is waiting for a remote host to respond),
 * or the progress is a number in the range zero to a maximum,
 * giving the fraction of work that has so far been completed.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-progress-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772953.aspx)
 *
 * @function progress
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {Number} [init.value] Current value of the element
 * @param {Number} [init.max] Upper bound of range
 * @return {HTMLProgressElement}
 *
 * @version HTML5
 */


/**
 * [The `q` element](https://html.spec.whatwg.org/#the-q-element)
 * represents some phrasing content quoted from another source.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-q-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535884.aspx)
 *
 * @function q
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
 * @return {HTMLQuoteElement}
 */


/**
 * [The `rp` element](https://html.spec.whatwg.org/#the-rp-element)
 * can be used to provide parentheses or other content
 * around a ruby text component of a ruby annotation,
 * to be shown by user agents that don't support ruby annotations.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-rp-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
 *
 * @function rp
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `rt` element](https://html.spec.whatwg.org/#the-rt-element)
 * marks the ruby text component of a ruby annotation.
 * When it is the child of a ruby element, it doesn't represent anything itself,
 * but the ruby element uses it as part of determining what it represents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-rt-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535885.aspx)
 *
 * @function rt
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `ruby` element](https://html.spec.whatwg.org/#the-ruby-element)
 * allows one or more spans of phrasing content to be marked with ruby annotations.
 * Ruby annotations are short runs of text presented alongside base text,
 * primarily used in East Asian typography as a guide for pronunciation
 * or to include other annotations.
 * In Japanese, this form of typography is also known as furigana.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ruby-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535886.aspx)
 *
 * @function ruby
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `s` element](https://html.spec.whatwg.org/#the-s-element)
 * represents contents that are no longer accurate or no longer relevant.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-s-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535890.aspx)
 *
 * @function s
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `samp` element](https://html.spec.whatwg.org/#the-samp-element)
 * represents sample or quoted output from another program or computing system.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-samp-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535891.aspx)
 *
 * @function samp
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `script` element](https://html.spec.whatwg.org/#the-script-element)
 * allows authors to include dynamic script and data blocks in their documents.
 * The element does not represent content for the user.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-script-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535892.aspx)
 *
 * @function script
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.charset] Character encoding of the external script resource
 * @param {Boolean} [init.async] Execute script when available, without blocking
 * @param {Boolean} [init.defer] Defer script execution
 * @param {String} [init.nonce] Cryptographic nonce used in Content Security Policy checks [CSP]
 * @return {HTMLScriptElement}
 */


/**
 * [The `section` element](https://html.spec.whatwg.org/#the-section-element)
 * represents a generic section of a document or application.
 * A section, in this context, is a thematic grouping of content,
 * typically with a heading.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-section-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593059.aspx)
 *
 * @function section
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `select` element](https://html.spec.whatwg.org/#the-select-element)
 * represents a control for selecting amongst a set of options.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-select-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535893.aspx)
 *
 * @function select
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.autocomplete] Hint for form autofill feature
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {Boolean} [init.multiple] Whether to allow multiple values
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {Boolean} [init.required] Whether the control is required for form submission
 * @param {Number} [init.size] Size of the control
 * @param {String} [init.attributes.form] Associates the control with a form element (ID reference)
 * @return {HTMLSelectElement}
 */


/*
 * [The `slot` element](https://html.spec.whatwg.org/#the-slot-element)
 * defines a slot. It is typically used in a shadow tree.
 * A slot element represents its assigned nodes, if any, and its contents otherwise.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-slot-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
 *
 * @function slot
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.name] Name of shadow tree slot
 * @return {HTMLSlotElement}
 *
 * @version HTML5
 */
// todo
/*export function slot(init) {
    return htmldom('slot', init)
}*/

/**
 * [The `small` element](https://html.spec.whatwg.org/#the-small-element)
 * represents side comments such as small print.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-small-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535894.aspx)
 *
 * @function small
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `source` element](https://html.spec.whatwg.org/#the-source-element)
 * allows authors to specify multiple alternative source sets for img elements
 * or multiple alternative media resources for media elements.
 * It does not represent anything on its own.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-source-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ff975070.aspx)
 *
 * @function source
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.media] Applicable media
 * @return {HTMLSourceElement}
 *
 * @version HTML5
 */


/**
 * [The `span` element](https://html.spec.whatwg.org/#the-span-element)
 * doesn't mean anything on its own,
 * but can be useful when used together with the global attributes,
 * e.g. class, lang, or dir. It represents its children.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-span-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535895.aspx)
 *
 * @function span
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLSpanElement}
 */
function span(init) {
    return htmldom('span', init)
}

/**
 * [The `strong` element](https://html.spec.whatwg.org/#the-strong-element)
 * represents strong importance, seriousness, or urgency for its contents.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-strong-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535897.aspx)
 *
 * @function strong
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `style` element](https://html.spec.whatwg.org/#the-style-element)
 * allows authors to embed style information in their documents.
 * The style element is one of several inputs to the styling processing model.
 * The element does not represent content for the user.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-style-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535898.aspx)
 *
 * @function style
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.media] Applicable media
 * @param {String} [init.nonce] Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
 * @param {String} [init.type] Type of embedded resource
 * @param {String} [init.title] Special semantics: CSS style sheet set name.
 * @return {HTMLStyleElement}
 */


/**
 * [The `sub` element](https://html.spec.whatwg.org/#the-sub-element)
 * represents a subscript.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-sub-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535899.aspx)
 *
 * @function sub
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `summary` element](https://html.spec.whatwg.org/#the-summary-element)
 *  represents a summary, caption, or legend for the rest of the contents
 *  of the summary element's parent details element, if any.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-summary-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
 *
 * @function summary
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */


/**
 * [The `sup` element](https://html.spec.whatwg.org/#the-sup-element)
 * represents a superscript
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-sup-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535900.aspx)
 *
 * @function sup
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `table` element](https://html.spec.whatwg.org/#the-table-element)
 * represents data with more than one dimension, in the form of a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-table-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535901.aspx)
 *
 * @function table
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {HTMLTableCaptionElement} [init.caption] Returns the table's caption element; can be set, to replace the caption element
 * @param {HTMLTableSectionElement} [init.tHead] Returns the table's thead element; can be set, to replace the thead element
 * @param {HTMLTableSectionElement} [init.tFoot] Returns the table's tfoot element; can be set, to replace the tfoot element
 * @return {HTMLTableElement}
 */


/**
 * [The `tbody` element](https://html.spec.whatwg.org/#the-tbody-element)
 * represents a block of rows that consist of a body of data for the parent table element,
 * if the tbody element has a parent and it is a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-tbody-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535902.aspx)
 *
 * @function tbody
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableSectionElement}
 */
function tbody(init) {
    return htmldom('tbody', init)
}

/**
 * [The `td` element](https://html.spec.whatwg.org/#the-td-element)
 * represents a data cell in a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-td-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535903.aspx)
 *
 * @function td
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.colSpan] Number of columns that the cell is to span
 * @param {String} [init.rowSpan] Number of rows that the cell is to span
 * @param {String} [init.headers] The header cells for this cell
 * @return {HTMLTableCellElement}
 */


/*
 * [The `template` element](https://html.spec.whatwg.org/#the-template-element)
 * is used to declare fragments of HTML that can be cloned and inserted in the document by script.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-template-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt586693.aspx)
 *
 * @function template
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTemplateElement}
 *
 * @version HTML5
 */
// todo
/*export function template(init) {
    return htmldom('template', init)
}*/

/**
 * [The `textarea` element](https://html.spec.whatwg.org/#the-textarea-element)
 * represents a multiline plain text edit control for the element's raw value.
 * The contents of the control represent the control's default value.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-textarea-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535904.aspx)
 *
 * @function textarea
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.autocomplete] Hint for form autofill feature
 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
 * @param {Number} [init.cols] Maximum number of characters per line
 * @param {Boolean} [init.disabled] Whether the form control is disabled
 * @param {Number} [init.maxLength] Maximum length of value
 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
 * @param {String} [init.placeholder] User-visible label to be placed within the form control
 * @param {Boolean} [init.readOnly] Whether to allow the value to be edited by the user
 * @param {Boolean} [init.required] Whether the control is required for form submission
 * @param {Number} [init.rows] Number of lines to show
 * @param {String} [init.wrap] How the value of the form control is to be wrapped for form submission
 * @param {String} [init.value]
 * @param {String} [init.defaultValue]
 * @param {String} [init.attributes.form] Associates the control with a form element
 * @return {HTMLTextAreaElement}
 */


/**
 * [The `tfoot` element](https://html.spec.whatwg.org/#the-tfoot-element)
 *  represents the block of rows that consist of the column summaries (footers)
 *  for the parent table element, if the tfoot element has a parent and it is a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-tfoot-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535907.aspx)
 *
 * @function tfoot
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableSectionElement}
 */


/**
 * [The `th` element](https://html.spec.whatwg.org/#the-th-element)
 * represents a header cell in a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-th-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535908.aspx)
 *
 * @function th
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.colSpan] Number of columns that the cell is to span
 * @param {String} [init.rowSpan] Number of rows that the cell is to span
 * @param {String} [init.headers] The header cells for this cell
 * @param {String} [init.scope] Specifies which cells the header cell applies to
 * @param {String} [init.abbr] Alternative label to use for the header cell when referencing the cell in other contexts
 * @return {HTMLTableCellElement}
 */


/**
 * [The `thead` element](https://html.spec.whatwg.org/#the-thead-element)
 * represents the block of rows that consist of the column labels (headers)
 * for the parent table element, if the thead element has a parent and it is a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-thead-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535909.aspx)
 *
 * @function thead
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableSectionElement}
 */


/*
 * [The `time` element](https://html.spec.whatwg.org/#the-time-element)
 * represents its contents,
 * along with a machine-readable form of those contents in the datetime attribute.
 * The kind of content is limited to various kinds of dates,
 * times, time-zone offsets, and durations, as described below.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-time-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt706248.aspx)
 *
 * @function time
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.dateTime] Machine-readable value
 * @return {HTMLTimeElement}
 *
 * @version HTML5
 */
// todo
/*export function time(init) {
    return htmldom('time', init)
}*/

/**
 * [The `title` element](https://html.spec.whatwg.org/#the-title-element)
 * represents the document's title or name.
 * Authors should use titles that identify their documents
 * even when they are used out of context,
 * for example in a user's history or bookmarks, or in search results.
 * The document's title is often different from its first heading,
 * since the first heading does not have to stand alone when taken out of context.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-title-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535910.aspx)
 *
 * @function title
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTitleElement}
 */


/**
 * [The `tr` element](https://html.spec.whatwg.org/#the-tr-element)
 * represents a row of cells in a table.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-tr-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535911.aspx)
 *
 * @function tr
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLTableRowElement}
 */


/**
 * [The `track` element](https://html.spec.whatwg.org/#the-track-element)
 * allows authors to specify explicit external timed text tracks for media elements.
 * It does not represent anything on its own.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-track-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772958.aspx)
 *
 * @function track
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.kind] The type of text track
 * @param {String} init.src Address of the resource
 * @param {String} [init.srclang] Language of the text track
 * @param {String} [init.label] User-visible label
 * @param {Boolean} [init.default] Enable the track if no other text track is more suitable
 * @return {HTMLTrackElement}
 *
 * @version HTML5
 */


/**
 * [The `u` element](https://html.spec.whatwg.org/#the-u-element)
 * represents a span of text with an unarticulated,
 * though explicitly rendered, non-textual annotation,
 * such as labeling the text as being a proper name in Chinese text
 * (a Chinese proper name mark), or labeling the text as being misspelt.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-u-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535913.aspx)
 *
 * @function u
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `ul` element](https://html.spec.whatwg.org/#the-ul-element)
 * represents a list of items, where the order of the items is not important — that is,
 * where changing the order would not materially change the meaning of the document.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-ul-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535914.aspx)
 *
 * @function ul
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLUListElement}
 */


/**
 * [the `var` element](https://html.spec.whatwg.org/#the-var-element)
 * represents a variable.
 * This could be an actual variable in a mathematical expression or programming context,
 * an identifier representing a constant, a symbol identifying a physical quantity,
 * a function parameter, or just be a term used as a placeholder in prose.
 *
 * **`var` is reserved JS keyword so use `variable` instead**
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-var-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535916.aspx)
 *
 * @function variable
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 */


/**
 * [The `video` element](https://html.spec.whatwg.org/#the-video-element)
 * is used for playing videos or movies, and audio files with captions.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-video-element)
 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772959.aspx)
 *
 * @function video
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @param {String} [init.src] Address of the resource
 * @param {String} [init.poster] Poster frame to show prior to video playback
 * @param {String} [init.preload] Hints how much buffering the media resource will likely need
 * @param {Boolean} [init.autoplay] Hint that the media resource can be started automatically when the page is loaded
 * @param {Boolean} [init.loop] Whether to loop the media resource
 * @param {Boolean} [init.muted] Whether to mute the media resource by default
 * @param {Boolean} [init.controls] Show user agent controls
 * @param {Number} [init.width] Horizontal dimension
 * @param {Number} [init.height] Vertical dimension
 * @return {HTMLVideoElement}
 *
 * @version HTML5
 */


/**
 * [The `wbr` element](https://html.spec.whatwg.org/#the-wbr-element)
 * represents a line break opportunity.
 *
 * [w3](https://www.w3.org/TR/html/single-page.html#the-wbr-element)
 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)
 *
 * @function wbr
 * @param {String|Array|Node|HTMLDOMAssembler|{}} [init] `NodeInit` dictionary
 * @return {HTMLElement}
 *
 * @version HTML5
 */

/**
 * @module htmlmodule is a thin (8.5kb) layer
 * between a developer and a pure HTML DOM semantics API
 * It serves to simplify the development of a web-applications
 */

const { prototype : { reduce } } = Array;
const ARIA_PREFIX = 'aria-';
const ARIA_PREFIX_LENGTH = ARIA_PREFIX.length;

class ARIADOMAssembler extends HTMLDOMAssembler {
    constructor(object$$1, init) {
        super();
        if(typeof object$$1 === 'string') this.assemble(object$$1, init);
        else if(object$$1 instanceof Node) {
            this.node = object$$1;
            if(init) this.init(init);
        }
        if(this.node) this.node.assembler = this;
    }

    set role(role) {
        this.node.setAttribute('role', role);
    }

    get role() {
        return this.node.getAttribute('role') || ''
    }

    set aria(aria) {
        const node = this.node;
        for(let name in aria) {
            const value = aria[name];
            if(typeof value === 'string') {
                node.setAttribute(ARIA_PREFIX + name, value);
            }
        }
    }

    get aria() {
        return reduce.call(this.node.attributes, (res, { name, value }) => {
            if(name.startsWith(ARIA_PREFIX)) {
                res[name.slice(ARIA_PREFIX_LENGTH)] = value;
            }
            return res
        }, {})
    }

    /**
     * [HTML : the id attribute](https://www.w3.org/TR/html5/dom.html#the-id-attribute)
     *
     * Specifies element's [unique identifier (ID)](https://www.w3.org/TR/dom/#concept-id).
     *
     * The value must be unique amongst all the IDs in the element's home subtree and must contain
     * at least one character. The value must not contain any space characters.
     * @param {String} id unique identifier of the element
     */
    set id(id) {
        this.node.id = id;
    }

    /**
     * Identifiers are opaque strings. Particular meanings should not be derived from the value of the id attribute.
     *
     * @returns {String} unique identifier, autogenerated if need
     */
    get id() {
        return this.node.id || (this.id = this.constructor.uniqid)
    }

    init(init) {
        super.init(NodeInit(init));
    }

    set dataset(dataset) {
        super.dataset = dataset;
    }

    get dataset() {
        return this.node.dataset
    }

    /**
     * Generate unique identifier
     * @returns {String} unique id
     */
    static get uniqid() {
        let id;
        do id = this.name + Math.floor(Math.random() * 1e10);
        while(document.getElementById(id))
        return id
    }
}

class RoleType extends ARIADOMAssembler {

    set atomic(atomic) {
        this.node.setAttribute('aria-atomic', atomic);
    }

    get atomic() {
        return this.node.getAttribute('aria-atomic')
    }

    set busy(busy) {
        this.node.setAttribute('aria-busy', busy);
    }

    get busy() {
        return this.node.getAttribute('aria-busy')
    }

    set controls(controls) {
        this.node.setAttribute('aria-controls', controls);
    }

    get controls() {
        return this.node.getAttribute('aria-controls')
    }

    set current(current) {
        this.node.setAttribute('aria-current', current);
    }

    get current() {
        return this.node.getAttribute('aria-current')
    }

    set describedBy(describedBy) {
        this.node.setAttribute('aria-describedBy', describedBy);
    }

    get describedBy() {
        return this.node.getAttribute('aria-describedBy')
    }

    set details(details) {
        this.node.setAttribute('aria-details', details);
    }

    get details() {
        return this.node.getAttribute('aria-details')
    }

    /**
     *
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        if(disabled) {
            this.node.setAttribute('aria-disabled', 'true');
            this.node.removeAttribute('tabindex');
        } else  {
            this.node.removeAttribute('aria-disabled');
            this.node.tabIndex = -1;
        }
    }

    /**
     *
     * @returns {boolean}
     */
    get disabled() {
        return this.node.getAttribute('aria-disabled') === 'true'
    }

    set dropEffect(dropEffect) {
        this.node.setAttribute('aria-dropEffect', dropEffect);
    }

    get dropEffect() {
        return this.node.getAttribute('aria-dropEffect')
    }

    set errorMessage(errorMessage) {
        this.node.setAttribute('aria-errorMessage', errorMessage);
    }

    get errorMessage() {
        return this.node.getAttribute('aria-errorMessage')
    }

    set flowTo(flowTo) {
        this.node.setAttribute('aria-flowTo', flowTo);
    }

    get flowTo() {
        return this.node.getAttribute('aria-flowTo')
    }

    set grabbed(grabbed) {
        this.node.setAttribute('aria-grabbed', grabbed);
    }

    get grabbed() {
        return this.node.getAttribute('aria-grabbed')
    }

    set hasPopup(hasPopup) {
        this.node.setAttribute('aria-hasPopup', hasPopup);
    }

    get hasPopup() {
        return this.node.getAttribute('aria-hasPopup')
    }

    set hidden(hidden) {
        this.node.hidden = hidden;
    }

    get hidden() {
        return this.node.hidden
    }

    set invalid(invalid) {
        this.node.setAttribute('aria-invalid', invalid);
    }

    get invalid() {
        return this.node.getAttribute('aria-invalid')
    }

    set keyShortCuts(keyShortCuts) {
        this.node.setAttribute('aria-keyShortCuts', keyShortCuts);
    }

    get keyShortCuts() {
        return this.node.getAttribute('aria-keyShortCuts')
    }

    set label(label) {
        this.node.setAttribute('aria-label', label);
    }

    get label() {
        return this.node.getAttribute('aria-label')
    }

    set labelledBy(labelledBy) {
        this.node.setAttribute('aria-labelledBy', labelledBy);
    }

    get labelledBy() {
        return this.node.getAttribute('aria-labelledBy')
    }

    set live(live) {
        this.node.setAttribute('aria-live', live);
    }

    get live() {
        return this.node.getAttribute('aria-live')
    }

    set owns(owns) {
        this.node.setAttribute('aria-owns', owns.map(node => node.id).join(' '));
    }

    get owns() {
        const owns = this.node.getAttribute('aria-owns');
        const handler = id => document.getElementById(id);
        return owns? owns.split(' ').map(handler) : []
    }

    set relevant(relevant) {
        this.node.setAttribute('aria-relevant', relevant);
    }

    get relevant() {
        return this.node.getAttribute('aria-relevant')
    }

    set roleDescription(roleDescription) {
        this.node.setAttribute('aria-roleDescription', roleDescription);
    }

    get roleDescription() {
        return this.node.getAttribute('aria-roleDescription')
    }
}

class Widget extends RoleType {
    set tabIndex(tabIndex) {
        this.node.tabIndex = tabIndex;
    }
    get tabIndex() {
        const node = this.node;
        return node.hasAttribute('tabindex')? node.tabIndex : null
    }
}

class Structure extends RoleType {}

class Section extends Structure {

    set expanded(expanded) {
        this.node.setAttribute('aria-expanded', expanded);
    }

    get expanded() {
        return this.node.getAttribute('aria-expanded')
    }
}

class Table extends Section {

    set colCount(colCount) {
        this.node.setAttribute('aria-colcount', colCount);
    }

    get colCount() {
        return this.node.getAttribute('aria-colcount')
    }

    set rowCount(rowCount) {
        this.node.setAttribute('aria-rowcount', rowCount);
    }

    get rowCount() {
        return this.node.getAttribute('aria-rowcount')
    }
}

const { map: map$$1 } = Array.prototype;

class Grid extends Table {

    constructor(object$$1, init) {
        super(object$$1, {
            role : 'grid',
            className : 'grid',
        });
        if(init) this.init(init);
        this.cells[0].tabIndex = 0;
    }


    get rows() {
        return map$$1.call(this.node.rows, ({ assembler }) => assembler)
    }

    set level(level) {
        this.node.setAttribute('aria-level', level);
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    set selected(selected) {
        this.cells.forEach(cell => cell.selected = selected);
    }

    get cells() {
        const collection = this.node.querySelectorAll('td[role=gridcell]');
        return map$$1.call(collection, cell => cell.assembler)
    }

    /**
     *
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.node.setAttribute('aria-multiselectable', String(multiselectable));
    }

    /**
     *
     * @returns {boolean}
     */
    get multiselectable() {
        return this.node.getAttribute('aria-multiselectable') === 'true'
    }

    set readOnly(readOnly) {
        this.node.setAttribute('aria-readonly', readOnly);
    }

    get readOnly() {
        return this.node.getAttribute('aria-readonly')
    }
}

function grid(init) {
    return new Grid('table', init)
}

class Group extends Section {

    set activeDescendant(activeDescendant) {
        this.node.setAttribute('aria-activedescendant', activeDescendant);
    }

    get activeDescendant() {
        return this.node.getAttribute('aria-activedescendant')
    }
}

const { map: map$2 } = Array.prototype;

class Row extends Group {
    constructor(object, init) {
        super(object, {
            role : 'row',
            className : 'row'
        });
        if(init) this.init(init);
    }

    set level(level) {
        this.node.setAttribute('aria-level', level);
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    set selected(selected) {
        this.cells.forEach(cell => cell.selected = selected);
        this.node.setAttribute('aria-selected', selected);
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    set colIndex(colIndex) {
        this.node.setAttribute('aria-colIndex', colIndex);
    }

    get colIndex() {
        return this.node.getAttribute('aria-colIndex')
    }

    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowIndex', rowIndex);
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowIndex')
    }
    /**
     *
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.node.setAttribute('aria-multiselectable', String(multiselectable));
    }

    /**
     *
     * @returns {boolean}
     */
    get multiselectable() {
        return this.node.getAttribute('aria-multiselectable') === 'true'
    }

    get cells() {
        return map$2.call(this.node.cells, ({ assembler }) => assembler)
    }

    get prev() {
        const sibling = this.node.previousSibling;
        return sibling && sibling.assembler
    }

    get next() {
        const sibling = this.node.nextSibling;
        return sibling && sibling.assembler
    }

    get index() {
        return this.node.rowIndex
    }
}

// Object.assign(Row.prototype, Widget.prototype)

function row(init) {
    return new Row('tr', init)
}

class Cell extends Section {

    set colIndex(colIndex) {
        this.node.setAttribute('aria-colindex', colIndex);
    }

    get colIndex() {
        return this.node.getAttribute('aria-colindex')
    }

    set colSpan(colSpan) {
        this.node.setAttribute('aria-colspan', colSpan);
    }

    get colSpan() {
        return this.node.getAttribute('aria-colspan')
    }

    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowIndex', rowIndex);
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowIndex')
    }

    set rowSpan(rowSpan) {
        this.node.setAttribute('aria-rowSpan', rowSpan);
    }

    get rowSpan() {
        return this.node.getAttribute('aria-rowSpan')
    }
}

let shiftKey = false;

class GridCell extends Cell {

    constructor(object$$1, init) {
        super(object$$1, {
            role : 'gridcell',
            className : 'gridcell',
            tabIndex : -1,
        });
        this.init({
            onfocus : this.onFocus.bind(this),
            onkeydown : this.onKeyDown.bind(this),
            onkeyup : this.onKeyUp.bind(this),
        });
        if(init) this.init(init);
        shiftKey = false;
    }

    onFocus() {
        if(this.selected) {
            if(shiftKey) {
                if(this.row.multiselectable) {
                    this.grid.rows.forEach(r => {
                        if(r !== this.row) r.selected = 'false';
                    });
                } else if(this.grid.multiselectable) {
                    this.grid.cells.forEach(c => {
                        if(c.index !== this.index) c.selected = 'false';
                    });
                }
            }
            else this.grid.selected = 'false';
            this.selected = 'true';
        }
    }

    onKeyDown(event) {
        const key = event.key;
        shiftKey = event.shiftKey;
        if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event);
        }
        else if(key === 'Enter') {
            this.onEnterKeyDown(event);
        }
        else if(key === 'Escape') {
            this.onEscapeKeyDown(event);
        }
        else if(/^a$/i.test(key) && (event.metaKey || event.ctrlKey)) {
            this.onSelectAllKeyDown(event);
        }
        else if(/^[a-zA-Z0-9 ]$/.test(key)) {
            this.onCharacterKeyDown(event);
        }
        else if(key === 'Backspace') {
            this.onBackspaceKeyDown(event);
        }
    }

    onSelectAllKeyDown(event) {
        event.preventDefault();
        if(this.row.multiselectable) {
            this.row.selected = 'true';
        } else if(this.grid.multiselectable) {
            this.column.forEach(c => c.selected = 'true');
        }
    }

    onCharacterKeyDown(event) {
        this.editmode = true;
    }

    onBackspaceKeyDown(event) {
        if(!this.editmode) {
            this.text.textContent = '';
        }
    }

    onKeyUp(event) {
        shiftKey = event.shiftKey;
    }

    onArrowKeyDown(event) {
        if(event.target === this.node) {
            event.preventDefault();
            const siblings = {
                ArrowLeft : () => this.prev,
                ArrowRight : () => this.next,
                ArrowUp : () => this.topSibling,
                ArrowDown : () => this.bottomSibling
            };
            const sibling = siblings[event.key]();
            if(sibling) sibling.focus();
        }
    }

    onEnterKeyDown(event) {
        if(this.selected === 'true') {
            const filter = ({ selected }) => selected === 'true';
            const cells = this.grid.cells.filter(filter);
            const first = cells[0];
            if(cells.length > 1) {
                if(cells.some(({ owns }) => owns.length)) {
                    cells.forEach(cell => {
                        if(cell.owns.length) cell.owns = [];
                        cell.selected = 'false';
                    });
                }
                else {
                    first.owns = cells.slice(1);
                    first.focus();
                }
            }
            else if(first.owns.length) first.owns = [];
            else this.editmode = !this.editmode;
        }
    }

    onEscapeKeyDown(event) {
        if(this.editmode) this.editmode = false;
    }

    onInputBlur(event) {
        this.editmode = false;
    }

    focus() {
        this.node.focus();
    }

    set editmode(editmode) {
        if(editmode !== this.editmode) {
            if(editmode) {
                this.text.hidden = true;
                this.input.value = this.text.textContent;
                this.input.hidden = false;
                this.input.focus();
            } else {
                this.input.hidden = true;
                this.text.textContent = this.input.value;
                this.text.hidden = false;
                this.focus();
            }
        }
    }

    get editmode() {
        return this.text.hidden
    }

    set readOnly(readOnly) {
        this.node.setAttribute('aria-readonly', readOnly);
    }

    get readOnly() {
        return this.node.getAttribute('aria-readonly')
    }

    set required(required) {
        this.node.setAttribute('aria-required', required);
    }

    get required() {
        return this.node.getAttribute('aria-required')
    }

    set selected(selected) {
        this.node.setAttribute('aria-selected', selected);
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    get grid() {
        return this.node.closest('table').assembler
    }

    get row() {
        return this.node.parentNode.assembler
    }

    get index() {
        return this.node.cellIndex
    }

    get prev() {
        const sibling = this.row.cells[this.index - 1];
        return sibling && sibling.span
    }

    get next() {
        const sibling = this.row.cells[this.index + this.colSpan];
        return sibling && sibling.span
    }

    get topSibling() {
        let sibling = this.column[this.row.index - 1];
        return sibling && sibling.span
    }

    get bottomSibling() {
        const sibling = this.column[this.row.index + this.rowSpan];
        return sibling && sibling.span
    }

    get column() {
        return this.grid.rows.map(r => r.cells[this.index])
    }

    get span() {
        if(this.hidden) {
            const selector = `td[aria-owns~=${ this.id }]`;
            const node = this.grid.node.querySelector(selector);
            return node? node.assembler : this
        } else return this
    }

    set colSpan(colSpan) {
        this.node.colSpan = colSpan;
    }

    get colSpan() {
        return this.node.colSpan
    }

    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan;
    }

    get rowSpan() {
        return this.node.rowSpan
    }

    set owns(owns) {
        this.owns.forEach(cell => cell.hidden = false);
        this.colSpan = 1;
        this.rowSpan = 1;
        if(owns.length) {
            const last = owns[owns.length - 1];
            owns.forEach(cell => cell.hidden = true);
            this.colSpan = last.index - this.index + 1;
            this.rowSpan = last.row.index - this.row.index + 1;
        }
        super.owns = owns;
    }

    get owns() {
        return super.owns
    }

    set input(input$$1) {
        this.node.append(input$$1);
    }

    get input() {
        let node = this.node.querySelector('input');
        if(!node) {
            this.input = node = input({
                value : this.node.textContent,
                onblur : this.onInputBlur.bind(this)
            });
        }
        return node
    }

    get text() {
        return this.node.querySelector('span.text')
    }

    set children(children) {
        super.children = span({ className : 'text', children });
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex');
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor);

function gridcell(init) {
    return new GridCell('td', init)
}

const rows = Array.from(new Array(36));
const cells = Array.from(new Array(10));

const testgrid = grid({
    multiselectable : true,
    children : tbody(rows.map((r, j) =>
        row({
            children : cells.map((c, i$$1) =>
                gridcell({
                    disabled : i$$1 === 5 && j === 5,
                    selected : false,
                    children : ''
                }))
        }))
    )
});

document.body.appendChild(testgrid.node);

}());
