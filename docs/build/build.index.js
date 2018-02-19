/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dommodule__ = __webpack_require__(15);


const { assign, getPrototypeOf } = Object
const { HTMLDocument, HTMLElement, document } = window

const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'
const HTML_PREFIX = 'html'
const EMPTY_PREFIX = ''
const LOCAL_NAME = 'html'
const NAME_PROPERTY_NAME = 'name'
const TABINDEX_ATTRIBUTE_NAME = 'tabindex'

class HTMLElementAssembler extends __WEBPACK_IMPORTED_MODULE_0_dommodule__["c" /* ElementAssembler */] {
    /**
     * @param {*} init
     */
    assign(init) {
        super.assign(init)
        if(NAME_PROPERTY_NAME in init) this.name = init.name
    }

    /**
     * Click the element
     */
    click() {
        this.node.click()
    }

    /**
     * Focus the element
     */
    focus() {
        this.node.focus()
    }

    /**
     * Blur the element
     */
    blur() {
        this.node.blur()
    }

    /**
     * @param {String} name
     */
    set name(name) {
        if(NAME_PROPERTY_NAME in this.node) this.node.name = name
        else this._onMismatch(NAME_PROPERTY_NAME, name)
    }

    /**
     * @returns {String} 
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} accessKey
     */
    set accessKey(accessKey) {
        this.node.accessKey = accessKey
    }

    /**
     * @returns {String}
     */
    get accessKey() {
        return this.node.accessKey
    }

    /**
     * @param {{}} dataset
     */
    set dataset(dataset) {
        assign(this.node.dataset, dataset)
    }

    /**
     * @returns {{}} DOMStringMap
     */
    get dataset() {
        return this.node.dataset
    }

    /**
     * @param {String} dir
     */
    set dir(dir) {
        this.node.dir = dir
    }

    /**
     * @returns {String}
     */
    get dir() {
        return this.node.dir
    }

    /**
     * @param {String} innerHTML
     */
    set innerHTML(innerHTML) {
        this.node.innerHTML = innerHTML
    }

    /**
     * @returns {String} 
     */
    get innerHTML() {
        return this.node.innerHTML
    }

    /**
     * @param {String} lang
     */
    set lang(lang) {
        this.node.lang = lang
    }

    /**
     * @returns {String}
     */
    get lang() {
        return this.node.lang
    }

    /**
     * @param {{}} style
     */
    set style(style) {
        assign(this.node.style, style)
    }

    /**
     * @returns {{}} CSSStyleDeclaration
     */
    get style() {
        return this.node.style
    }

    /**
     * @param {Number} tabIndex
     */
    set tabIndex(tabIndex) {
        if(isNaN(tabIndex)) {
            this.node.removeAttribute(TABINDEX_ATTRIBUTE_NAME)
        }
        else this.node.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        return this.node.hasAttribute(TABINDEX_ATTRIBUTE_NAME)?
            this.node.tabIndex :
            NaN
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.node.title = title
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.node.title
    }

    /**
     * @param {Boolean} translate
     */
    set translate(translate) {
        this.node.translate = translate
    }

    /**
     * @returns {Boolean}
     */
    get translate() {
        return this.node.translate
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.node.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.node.hidden
    }

    /**
     * Create the specified Element node
     * @param {*} [init]
     * @returns {Element|*} created element
     */
    static create(init) {
        if(document instanceof HTMLDocument) {
            const { localName = this.localName } = init || this
            return document.createElement(localName)
        }
        else return super.create(init)
    }

    /**
     * @returns {Function} HTMLElementAssembler
     */
    static get baseAssembler() {
        return HTMLElementAssembler
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return document instanceof HTMLDocument?
            EMPTY_PREFIX :
            HTML_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        const assembler = this.baseAssembler
        if(this === assembler) return LOCAL_NAME
        else {
            let object = this
            let proto
            while(proto = getPrototypeOf(object)) {
                if(proto === assembler) break
                else object = proto
            }
            return object.name.toLowerCase()
        }
    }

    /**
     * @returns {Window.HTMLElement}
     */
    static get intraface() {
        return HTMLElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLElementAssembler;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__a__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__a__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__a__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abbr__ = __webpack_require__(83);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(84);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__article__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_4__article__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aside__ = __webpack_require__(86);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audio__ = __webpack_require__(87);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__b__ = __webpack_require__(88);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base__ = __webpack_require__(89);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bdi__ = __webpack_require__(90);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bdo__ = __webpack_require__(91);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blockquote__ = __webpack_require__(92);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__body__ = __webpack_require__(93);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__br__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__button__ = __webpack_require__(95);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__canvas__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__caption__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cite__ = __webpack_require__(97);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__code__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__col__ = __webpack_require__(99);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__colgroup__ = __webpack_require__(100);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__data__ = __webpack_require__(101);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__datalist__ = __webpack_require__(102);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dd__ = __webpack_require__(103);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__del__ = __webpack_require__(104);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__details__ = __webpack_require__(105);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dfn__ = __webpack_require__(106);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dialog__ = __webpack_require__(107);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__div__ = __webpack_require__(108);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_28__div__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dl__ = __webpack_require__(109);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__document__ = __webpack_require__(110);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dt__ = __webpack_require__(111);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__element__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__em__ = __webpack_require__(112);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__embed__ = __webpack_require__(113);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__fieldset__ = __webpack_require__(114);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__figcaption__ = __webpack_require__(115);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__figure__ = __webpack_require__(116);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__footer__ = __webpack_require__(117);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_38__footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__form__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_39__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__h1__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_40__h1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__h2__ = __webpack_require__(119);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__h3__ = __webpack_require__(120);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__h4__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__h5__ = __webpack_require__(122);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__h6__ = __webpack_require__(123);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__head__ = __webpack_require__(124);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__header__ = __webpack_require__(125);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_47__header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__hgroup__ = __webpack_require__(126);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__hr__ = __webpack_require__(127);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__html__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__hyperlink__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__i__ = __webpack_require__(128);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__iframe__ = __webpack_require__(129);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__img__ = __webpack_require__(130);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__input__ = __webpack_require__(131);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_55__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ins__ = __webpack_require__(132);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__kbd__ = __webpack_require__(133);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_57__kbd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__label__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_58__label__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_58__label__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__legend__ = __webpack_require__(134);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__li__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__link__ = __webpack_require__(136);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__main__ = __webpack_require__(137);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_62__main__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__map__ = __webpack_require__(138);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__mark__ = __webpack_require__(139);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__media__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__menu__ = __webpack_require__(140);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__meta__ = __webpack_require__(141);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__meter__ = __webpack_require__(142);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__mod__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__nav__ = __webpack_require__(143);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__noscript__ = __webpack_require__(144);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__object__ = __webpack_require__(145);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ol__ = __webpack_require__(146);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__optgroup__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__option__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__output__ = __webpack_require__(147);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__p__ = __webpack_require__(148);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_77__p__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__param__ = __webpack_require__(149);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__picture__ = __webpack_require__(150);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pre__ = __webpack_require__(151);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__progress__ = __webpack_require__(152);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__q__ = __webpack_require__(153);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__rp__ = __webpack_require__(154);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__rt__ = __webpack_require__(155);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ruby__ = __webpack_require__(156);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__s__ = __webpack_require__(157);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__samp__ = __webpack_require__(158);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__script__ = __webpack_require__(159);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__section__ = __webpack_require__(160);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_89__section__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__select__ = __webpack_require__(161);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__small__ = __webpack_require__(162);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__source__ = __webpack_require__(163);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__span__ = __webpack_require__(164);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_93__span__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__strong__ = __webpack_require__(165);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__style__ = __webpack_require__(166);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__sub__ = __webpack_require__(167);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__summary__ = __webpack_require__(168);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__sup__ = __webpack_require__(169);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__table__ = __webpack_require__(170);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_99__table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__tbody__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_100__tbody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__td__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_101__td__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__template__ = __webpack_require__(171);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__textarea__ = __webpack_require__(172);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_103__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__tfoot__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__th__ = __webpack_require__(60);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_105__th__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__thead__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_106__thead__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__time__ = __webpack_require__(173);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__title__ = __webpack_require__(174);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__tr__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_109__tr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__track__ = __webpack_require__(175);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__u__ = __webpack_require__(176);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__ul__ = __webpack_require__(177);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__var__ = __webpack_require__(178);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__video__ = __webpack_require__(179);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__wbr__ = __webpack_require__(180);
/* unused harmony namespace reexport */






















































































































/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atomic__ = __webpack_require__(181);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__atomic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boolean__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busy__ = __webpack_require__(182);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__busy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__disabled__ = __webpack_require__(183);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__disabled__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__haspopup__ = __webpack_require__(184);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__haspopup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hidden__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__hidden__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__idref__ = __webpack_require__(186);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__idref__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__idref__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__idreflist__ = __webpack_require__(187);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__idreflist__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__idreflist__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_8__idreflist__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__integer__ = __webpack_require__(188);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_9__integer__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__number__ = __webpack_require__(189);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_10__number__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_10__number__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_10__number__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal__ = __webpack_require__(190);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_11__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__multiline__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_12__multiline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__multiselectable__ = __webpack_require__(192);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_13__multiselectable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pressed__ = __webpack_require__(193);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_14__pressed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__readonly__ = __webpack_require__(194);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_15__readonly__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__required__ = __webpack_require__(195);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_16__required__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__string__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_17__string__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__string__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_17__string__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_17__string__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__token__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_18__token__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tokenlist__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_19__tokenlist__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_19__tokenlist__["b"]; });






















/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structure__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A renderable structural containment unit in a document or application.
 * https://www.w3.org/TR/wai-aria-1.1/#section
 */
class Section extends __WEBPACK_IMPORTED_MODULE_0__structure__["a" /* Structure */] {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["l" /* Expanded */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Section;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert__ = __webpack_require__(198);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alertdialog__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__alertdialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article__ = __webpack_require__(200);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__application__ = __webpack_require__(201);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banner__ = __webpack_require__(202);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cell__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__cell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkbox__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__columnheader__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__columnheader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__combobox__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_10__combobox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__complementary__ = __webpack_require__(205);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__command__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__composite__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contentinfo__ = __webpack_require__(206);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__definition__ = __webpack_require__(207);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialog__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_16__dialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directory__ = __webpack_require__(208);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__document__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__feed__ = __webpack_require__(209);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__figure__ = __webpack_require__(210);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__form__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__grid__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_22__grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gridcell__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_23__gridcell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gridrow__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_24__gridrow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__datacell__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_25__datacell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__group__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_26__group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__heading__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_27__heading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__headrowgroup__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_28__headrowgroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__img__ = __webpack_require__(215);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__input__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__landmark__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__link__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_32__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__list__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__listbox__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_34__listbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__listitem__ = __webpack_require__(69);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__log__ = __webpack_require__(217);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__main__ = __webpack_require__(218);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__marquee__ = __webpack_require__(219);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__math__ = __webpack_require__(220);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__menu__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_40__menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__menubutton__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_41__menubutton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__menuitem__ = __webpack_require__(48);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_42__menuitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__menuitemlink__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_43__menuitemlink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__multitextbox__ = __webpack_require__(223);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_44__multitextbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__navigation__ = __webpack_require__(224);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__none__ = __webpack_require__(225);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__note__ = __webpack_require__(226);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__option__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_48__option__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__radio__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_49__radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__radiogroup__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_50__radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__range__ = __webpack_require__(73);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__region__ = __webpack_require__(227);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__role__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__roletype__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__row__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_55__row__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__rowgroup__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_56__rowgroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__rowheader__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_57__rowheader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__search__ = __webpack_require__(228);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__section__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__sectionhead__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__select__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__selectbox__ = __webpack_require__(229);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_62__selectbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__separator__ = __webpack_require__(230);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__slider__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_64__slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__status__ = __webpack_require__(74);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__structure__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__tab__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_67__tab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__table__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__tablist__ = __webpack_require__(232);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_69__tablist__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__tabpanel__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_70__tabpanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__term__ = __webpack_require__(233);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__textbox__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_72__textbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__timer__ = __webpack_require__(234);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__toolbar__ = __webpack_require__(235);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__tooltip__ = __webpack_require__(236);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__tree__ = __webpack_require__(77);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_76__tree__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__treeitem__ = __webpack_require__(78);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_77__treeitem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__widget__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__window__ = __webpack_require__(64);
/* unused harmony namespace reexport */










































// export * from './menubar'


// export * from './menuitemcheckbox'
// export * from './menuitemradio'






// export * from './progressbar' // fixme









// export * from './scrollbar'

// export * from './searchbox' // fixme





 // todo
// export * from './spinbutton' // fixme


// export * from './switch'
 // fixme

 // fixme
 // fixme






// export * from './treegrid'





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


const TOKEN_TRUE = 'true'

/**
 * Value representing either true or false.
 * The default value for this value type is false unless otherwise specified.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false
 */
class BooleanAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {*} value {Boolean}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return this.node.value === TOKEN_TRUE
    }

    /**
     * @param {Boolean} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === false
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BooleanAttrType;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dommodule__ = __webpack_require__(15);


const ARIA_PREFIX = 'aria-'
const DEFAULT_VALUE = ''

class ARIAAttrAssembler extends __WEBPACK_IMPORTED_MODULE_0_dommodule__["a" /* AttrAssembler */] {
    /**
     * @returns {String}
     */
    static get defaultValue() {
        return DEFAULT_VALUE
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ARIA_PREFIX + this.name.toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ARIAAttrAssembler;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TYPE_FUNCTION = 'function'
/* harmony export (immutable) */ __webpack_exports__["f"] = TYPE_FUNCTION;

const TYPE_STRING = 'string'
/* harmony export (immutable) */ __webpack_exports__["g"] = TYPE_STRING;

const DEFAULT_NAMESPACE_URI = ''
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_NAMESPACE_URI;

const DEFAULT_PREFIX = ''
/* harmony export (immutable) */ __webpack_exports__["b"] = DEFAULT_PREFIX;

const INSTANCE_PROPERTY_NAME = '__instance__'
/* harmony export (immutable) */ __webpack_exports__["c"] = INSTANCE_PROPERTY_NAME;

const NAMESPACE_SEPARATOR = ':'
/* harmony export (immutable) */ __webpack_exports__["d"] = NAMESPACE_SEPARATOR;

const NO_PARENT_INDEX = -1
/* harmony export (immutable) */ __webpack_exports__["e"] = NO_PARENT_INDEX;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A perceivable section containing content that is relevant to a specific,
 * author-specified purpose and sufficiently important that users will likely
 * want to be able to navigate to the section easily and to have it listed
 * in a summary of the page. Such a page summary could be generated dynamically
 * by a user agent or assistive technology.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#landmark
 */
class Landmark extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Landmark;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { map } = Array.prototype
const { HTMLFormElement } = window

class Form extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * Reset the form
     */
    reset() {
        this.node.reset()
    }

    /**
     * Submit the form
     */
    submit() {
        this.node.submit()
    }

    /**
     * @param {String} acceptCharset
     */
    set acceptCharset(acceptCharset) {
        this.node.acceptCharset = acceptCharset
    }

    /**
     * @returns {String}
     */
    get acceptCharset() {
        return this.node.acceptCharset
    }

    /**
     * @param {String} action
     */
    set action(action) {
        this.node.action = action
    }

    /**
     * @return {String}
     */
    get action() {
        return this.node.action
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @returns {(HTMLElementAssembler|*)[]}
     */
    get elements() {
        return map.call(this.node.elements, node => {
            return this.getInstance(node)
        })
    }

    /**
     * @param {String} enctype
     */
    set enctype(enctype) {
        this.node.enctype = enctype
    }

    /**
     * @returns {String}
     */
    get enctype() {
        return this.node.enctype
    }

    /**
     * @param {String} method
     */
    set method(method) {
        this.node.method = method
    }

    /**
     * @returns {String}
     */
    get method() {
        return this.node.method
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {Boolean} noValidate
     */
    set noValidate(noValidate) {
        this.node.noValidate = noValidate
    }

    /**
     * @returns {Boolean}
     */
    get noValidate() {
        return this.node.noValidate
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {window.HTMLFormElement}
     */
    static get interface() {
        return HTMLFormElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;


/**
 * @param {*} [init]
 * @returns {Form}
 */
function form(init) {
    return new Form(init)
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = label;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(9);



const { HTMLLabelElement } = window

class Label extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param control
     */
    set control(control) {
        this.htmlFor = control.id
    }

    /**
     * @returns {*}
     */
    get control() {
        return this.getInstance(this.node.control)
    }

    /**
     * @returns {Form|ElementAssembler|null}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @param {*} htmlFor
     */
    set htmlFor(htmlFor) {
        this.node.htmlFor = htmlFor
    }

    /**
     * @returns {NodeAssembler|null}
     */
    get htmlFor() {
        return this.node.htmlFor
    }

    /**
     * @returns {window.HTMLLabelElement}
     */
    static get interface() {
        return HTMLLabelElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Label;


/**
 * @param {*} [init]
 * @returns {Label}
 */
function label(init) {
    return new Label(init)
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__roletype__ = __webpack_require__(26);


/**
 * A document structural element.
 * https://www.w3.org/TR/wai-aria-1.1/#structure
 */
class Structure extends __WEBPACK_IMPORTED_MODULE_0__roletype__["a" /* RoleType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Structure;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria__ = __webpack_require__(2);





/**
 * A cell in a tabular container.
 * https://www.w3.org/TR/wai-aria-1.1/#cell
 */
class Cell extends __WEBPACK_IMPORTED_MODULE_2__section__["a" /* Section */] {
    /**
     * @returns {RowGroup|null}
     */
    get body() {
        const row = this.row
        return row? row.body : null
    }

    /**
     * @param {Number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["f" /* ColIndex */], String(colIndex))
    }

    /**
     * @returns {Number}
     */
    get colIndex() {
        const index = this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["f" /* ColIndex */])
        return isNaN(index)? this.ownerElement.cellIndex : index
    }

    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        if(colSpan > 1) {
            this.ownerElement.colSpan = colSpan
        }
        else this.removeAttribute('colspan')
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.ownerElement.colSpan
    }

    /**
     * @returns {Row|null}
     */
    get row() {
        const parentNode = this.parentNode
        return parentNode && parentNode.role
    }

    /**
     * @param {Number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["H" /* RowIndex */], rowIndex)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        const index = this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["H" /* RowIndex */])
        return isNaN(index)? this.row.rowIndex : index
    }

    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        if(rowSpan > 1) {
            this.ownerElement.rowSpan = rowSpan
        }
        else this.removeAttribute('rowspan')
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.ownerElement.rowSpan
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_1__table__["a" /* Table */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["n" /* Td */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cell;


/**
 * @param {*} init
 * @returns {Cell}
 */
function cell(...init) {
    return new Cell(...init)
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composite__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form__ = __webpack_require__(28);




/**
 * A form widget that allows the user to make selections from a set of choices.
 * https://www.w3.org/TR/wai-aria-1.1/#select
 */
class Select extends __WEBPACK_IMPORTED_MODULE_0__composite__["a" /* Composite */] {
    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["y" /* Orientation */], orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["y" /* Orientation */])
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_2__form__["a" /* Form */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Select;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__roletype__ = __webpack_require__(26);


/**
 * An interactive component of a graphical user interface (GUI).
 * https://www.w3.org/TR/wai-aria-1.1/#widget
 */
class Widget extends __WEBPACK_IMPORTED_MODULE_0__roletype__["a" /* RoleType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Widget;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__attr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__characterdata__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__childnode__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctype__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__document__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__document__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__element__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__element__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventtarget__ = __webpack_require__(49);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fragment__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__instruction__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(36);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__parentnode__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__target__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__text__ = __webpack_require__(54);
/* unused harmony namespace reexport */
/**
 * @module dommodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @licence MIT
 */

















/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__command__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




const DEFAULT_TABINDEX_VALUE = 0

/**
 * An input that allows for user-triggered actions when clicked or pressed.
 * https://www.w3.org/TR/wai-aria-1.1/#button
 */
class Button extends __WEBPACK_IMPORTED_MODULE_0__command__["a" /* Command */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        const isObject = init && init.constructor === Object
        this.tabIndex = isObject && 'tabIndex' in init?
            init.tabIndex :
            DEFAULT_TABINDEX_VALUE
        this.on('click', event => this.onClick(event))
        this.on('keydown', event => this.onKeyDown(event))
        this.on('keyup', event => this.onKeyUp(event))
        this.on('mousedown', event => this.onMouseDown(event))
        this.on('mouseup', event => this.onMouseUp(event))
        this.on('blur', () => this.active = false)
        this.on('mouseleave', () => this.active = false)
        super.init(init)
    }

    /**
     * Activate the button
     */
    activate() {
        this.emit('activate')
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) event.stopImmediatePropagation()
        else this.activate()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Enter') this.ownerElement.click()
        else if(key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.active = true
        }
    }

    /**
     * @param {String} key
     */
    onKeyUp({ key }) {
        if(key === ' ') {
            if(this.active) this.ownerElement.click()
            this.active = false
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.disabled) this.active = true
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        if(!this.disabled) this.active = false
    }

    /**
     * @param {Boolean} active
     */
    set active(active) {
        this.classList.toggle('active', active)
    }

    /**
     * @returns {Boolean}
     */
    get active() {
        return this.classList.contains('active')
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["l" /* Expanded */])
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @param {String} pressed
     */
    set pressed(pressed) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["B" /* Pressed */], pressed)
    }

    /**
     * @returns {String}
     */
    get pressed() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["B" /* Pressed */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;


/**
 * @param {*} init
 * @returns {Button}
 */
function button(...init) {
    return new Button(...init)
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria__ = __webpack_require__(2);





const { map } = Array.prototype

/**
 * A section containing data arranged in rows and columns.
 * https://www.w3.org/TR/wai-aria-1.1/#table
 */
class Table extends __WEBPACK_IMPORTED_MODULE_1__section__["a" /* Section */] {
    /**
     * @returns {RowGroup[]}
     */
    get bodies() {
        const nodeList = this.ownerElement.node.tBodies
        return map.call(nodeList, node => this.getRole(node))
    }

    /**
     * @returns {Cell[]}
     */
    get cells() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__cell__["a" /* Cell */])
    }

    /**
     * @param {Number} colCount
     */
    set colCount(colCount) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["e" /* ColCount */], colCount)
    }

    /**
     * @returns {Number}
     */
    get colCount() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["e" /* ColCount */])
    }

    /**
     * @returns {RowGroup|null|*}
     */
    get foot() {
        return this.getRole(this.ownerElement.tFoot)
    }

    /**
     * @returns {RowGroup|null}
     */
    get head() {
        return this.getRole(this.ownerElement.tHead)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const caption = this.ownerElement.createCaption()
        caption.textContent = label
    }

    /**
     * @returns {String}
     */
    get label() {
        const caption = this.ownerElement.caption
        return caption? caption.textContent : ''
    }

    /**
     * @param {Number} rowCount
     */
    set rowCount(rowCount) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["G" /* RowCount */], rowCount)
    }

    /**
     * @returns {Number}
     */
    get rowCount() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["G" /* RowCount */])
    }

    /**
     * @returns {Row[]}
     */
    get rows() {
        const nodes = this.ownerElement.node.rows
        return map.call(nodes, node => this.getRole(node))
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["m" /* Table */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;


/**
 * @param {*} init
 * @returns {Table}
 */
function table(...init) {
    return new Table(...init)
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget__ = __webpack_require__(14);



/**
 * A generic type of widget that allows user input.
 * https://www.w3.org/TR/wai-aria-1.1/#input
 */
class Input extends __WEBPACK_IMPORTED_MODULE_1__widget__["a" /* Widget */] {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_0__form__["a" /* Form */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Input;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gridCell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__columnheader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aria__ = __webpack_require__(2);






const SELECT_ALL_KEY_RE = /^[aф]$/i
const TABINDEX_INITIAL_VALUE = -1

/**
 * A cell in a grid or treegrid.
 * https://www.w3.org/TR/wai-aria-1.1/#gridcell
 */
class GridCell extends __WEBPACK_IMPORTED_MODULE_1__cell__["a" /* Cell */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = TABINDEX_INITIAL_VALUE
        this.children = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]({ className : 'text' })
        this.on('focus', this.onFocus.bind(this))
        this.on('blur', this.onBlur.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousemove', this.onMouseMove.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        super.init(init)
    }

    /**
     * Drag the selected area
     */
    dragSelectedArea() {
        const { focusedCell, cells } = this.grid
        const tail = focusedCell.rowSpan
        cells.forEach(cell => {
            cell.selected = String(cell === this)
            if(cell.dropEffect.length) cell.dropEffect = null
        })
        if(tail) {
            const column = this.column//.filter(cell => cell instanceof GridCell)
            const isSameColumn = this.elementIndex === focusedCell.elementIndex
            const threshold = focusedCell.rowIndex + tail
            let start = this.rowIndex
            let end = start + tail
            if(isSameColumn && end < threshold) void 0
            else if(start >= column.length / 2
                || (isSameColumn && start >= threshold)
                || end > column.length) {
                start -= tail - 1
                end -= tail - 1
            }
            const collection = column.slice(start, end)
            const notAllowed = start < 0 || collection.some(({ ownerCell }) => {
                if(ownerCell === focusedCell) return false
                return Boolean(ownerCell.value) || ownerCell.rowSpan > 1
            })
            if(notAllowed) this.dropEffect = 'none'
            else {
                collection.forEach(cell => cell.selected = 'true')
                this.dropEffect = 'move'
            }
        }
    }

    /**
     * Focus the cell or it's owner
     */
    focus() {
        this.ownerCell.ownerElement.focus()
        if(this === this.ownerCell && this.value) {
            this.dropEffect = 'move'
        }
    }

    /**
     * @param {String} key
     * @param {Boolean} metaKey
     * @param {Boolean} ctrlKey
     * @returns {GridCell|null}
     */
    getSiblingByKeyEvent({ key, metaKey, ctrlKey }) {
        const cells = this.row.findAll(GridCell)
        const column = this.column.filter(cell => cell instanceof GridCell)
        const extraKey = metaKey || ctrlKey
        switch(key) {
            case 'ArrowLeft' :
                return extraKey? cells[0] : this.prevCell
            case 'ArrowRight' :
                return extraKey? cells[cells.length - 1] : this.nextCell
            case 'ArrowUp' :
                return extraKey? column[0] : this.aboveCell
            case 'ArrowDown' :
                return extraKey? column[column.length - 1] : this.belowCell
        }
        return null
    }

    /**
     * @returns {Boolean}
     */
    moveUp() {
        const cell = this.aboveCell
        if(cell && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    /**
     * @returns {Boolean}
     */
    moveRight() {
        let stop = false
        if(this.rowSpan > 1) {
            stop = this.owns.some(cell => {
                const { value, rowSpan } = cell.nextCell
                return Boolean(value) || rowSpan > 1
            })
        }
        const cell = this.nextCell
        if(!stop && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    /**
     * @returns {Boolean}
     */
    moveDown() {
        const cell = this.belowCell
        if(cell && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(this.owns[0] || cell)
            return true
        }
        return false
    }

    /**
     * @returns {Boolean}
     */
    moveLeft() {
        let stop = false
        if(this.rowSpan > 1) {
            stop = this.owns.some(cell => {
                const { value, rowSpan } = cell.prevCell
                return Boolean(value) || rowSpan > 1
            })
        }
        const cell = this.prevCell
        if(!stop && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        this.classList.remove('focus')
        if(this.dropEffect.length) {
            this.dropEffect = null
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const grid = this.grid
        if(this.selected) {
            grid.selected = 'false'
            this.selected = 'true'
            grid.activeDescendant = this
        }
        grid.gridCells.forEach(cell => cell.tabIndex = cell.value? 0 : -1)
        this.tabIndex = 0
        // this.grabbed = 'false'
        this.classList.add('focus')
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(event.shiftKey) {
            const grid = this.grid
            if(grid.focusedCell) {
                event.preventDefault()
                grid.activeDescendant = this
            }
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        const buttons = event.buttons
        if(buttons === 1) {
            if(this.focused && this.grabbed && this.value) {
                this.grabbed = 'true'
            }
            else {
                const grid = this.grid
                const focusedCell = grid.focusedCell
                if(focusedCell && focusedCell.grabbed === 'true') {
                    if(focusedCell.grabbed === 'true' && !focusedCell.readOnly) {
                        this.dragSelectedArea()
                    }
                }
                else if(this.row.multiselectable || grid.multiselectable) {
                    grid.activeDescendant = this
                }
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Alt' && this.grabbed && this.value) {
            this.grabbed = 'true'
        }
        else if(key === 'Enter') {
            this.onEnterKeyDown(event)
        }
        else if(key === 'Escape') {
            this.onEscapeKeyDown(event)
        }
        else if(key === 'Backspace') {
            this.onBackspaceKeyDown(event)
        }
        else if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        else if(SELECT_ALL_KEY_RE.test(key) && (event.metaKey || event.ctrlKey)) {
            this.onSelectAllKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onBackspaceKeyDown(event) {
        event.preventDefault()
        if(!this.readOnly) {
            const grid = this.grid
            const selectedCells = grid.selectedCells
            if(selectedCells.length > 1) {
                grid.collapseSelection()
            }
            else if(this.rowSpan > 1) {
                this.rowSpan--
                this.emit('change', { bubbles : true })
                grid.activeDescendant = this
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        const grid = this.grid
        const selectedCells = grid.selectedCells
        if(this.selected === 'true'
            && grid.multiselectable
            && selectedCells.length > 1) {
            if(selectedCells.some(cell => {
                return cell.value || cell.rowSpan > 1
            })) {
                this.grid.collapseSelection()
            }
            this.grid.mergeCells(selectedCells)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === 'Alt' && this.grabbed && this.value) {
            this.grabbed = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSelectAllKeyDown(event) {
        event.preventDefault()
        this.selectAll()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        if(event.target === this.ownerElement.node) {
            event.preventDefault()
            const grid = this.grid
            const cell = event.shiftKey? grid.activeDescendant : this
            const { key, shiftKey } = event
            if(cell) {
                const sibling = cell.getSiblingByKeyEvent(event)
                if(sibling) {
                    if(this.grabbed === 'true' && !this.readOnly) {
                        let change = false
                        if(key === 'ArrowLeft') change = this.moveLeft()
                        if(key === 'ArrowUp') change = this.moveUp()
                        if(key === 'ArrowRight') change = this.moveRight()
                        if(key === 'ArrowDown') change = this.moveDown()
                        if(change) this.emit('change', { bubbles : true })
                    }
                    else if(shiftKey) grid.activeDescendant = sibling
                    else if(this.grabbed === 'true' && this.readOnly) void 0
                    else sibling.focus()
                }
            }
        }
    }

    /**
     * Select all grid cells
     */
    selectAll() {
        if(this.row.multiselectable) this.row.selected = 'true'
        else if(this.grid.multiselectable) {
            this.column.forEach(cell => cell.selected = 'true')
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.selected === 'true') {
            this.grid.selected = 'false'
            this.selected = 'true'
        }
    }

    /**
     * @param {GridCell} cell
     */
    replaceWith(cell) {
        const rowSpan = this.rowSpan
        if(rowSpan > 1) this.rowSpan = 1
        const rows = this.body.rows
        const index1 = this.rowIndex
        const index2 = cell.rowIndex
        const row1 = rows[index1].ownerElement
        const row2 = rows[index2].ownerElement
        const ref1 = this.ownerElement.nextSibling
        const ref2 = cell.ownerElement.nextSibling
        row1.insertBefore(cell.ownerElement, ref1)
        row2.insertBefore(this.ownerElement, ref2)
        if(rowSpan > 1) this.rowSpan = rowSpan
        this.focus()
    }

    /**
     * @returns {GridCell}
     */
    get aboveCell() {
        let sibling = this.column[this.rowIndex - 1]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @returns {GridCell}
     */
    get belowCell() {
        const sibling = this.column[this.rowIndex + this.rowSpan]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        const index = this.elementIndex
        this.owns = this.row.cells.slice(index + 1, index + colSpan)
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return super.colSpan
    }

    /**
     * @returns {GridCell[]}
     */
    get column() {
        const body = this.body
        const handler = row => row.cells[this.elementIndex]
        return body? body.rows.map(handler) : null
    }

    /**
     * @returns {ColumnHeader|null}
     */
    get columnHeader() {
        const head = this.grid.head
        if(head) {
            const row = head.rows[0]
            if(row) {
                const cell = row.cells[this.elementIndex]
                if(cell instanceof __WEBPACK_IMPORTED_MODULE_2__columnheader__["a" /* ColumnHeader */]) return cell
            }
        }
        return null
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.tabIndex = NaN
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        const row = this.row
        return Boolean(row) && row.disabled || super.disabled
    }
    
    /**
     * @returns {Boolean}
     */
    get focused() {
        return this.classList.contains('focus')
    }

    /**
     * @param {String} grabbed
     */
    set grabbed(grabbed) {
        const grid = this.grid
        if(grid && !this.readOnly) {
            grid.classList.toggle('grabbed', grabbed === 'true')
        }
        super.grabbed = grabbed
    }

    /**
     * @returns {String}
     */
    get grabbed() {
        return super.grabbed
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_3__grid__["a" /* Grid */])
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        if(hidden) {
            if(this.selected) {
                this.selected = 'false'
            }
            this.value = ''
        }
        super.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return super.hidden
    }

    /**
     * @returns {GridCell}
     */
    get nextCell() {
        const sibling = this.row.cells[this.elementIndex + this.colSpan]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @param {GridCell} ownerCell
     */
    set ownerCell(ownerCell) {
        const value = this.value
        if(value) {
            ownerCell.value = [
                ownerCell.value,
                value
            ].filter(v => v.trim()).join(', ')
        }
        this.hidden = true
        if(this.tabIndex === 0) {
            this.tabIndex = -1
            ownerCell.tabIndex = 0
        }
    }

    /**
     * @returns {GridCell}
     */
    get ownerCell() {
        if(this.hidden) {
            const selector = `[aria-owns~=${ this.id }]`
            return this.grid.find(GridCell, selector) || this
        }
        else return this
    }

    /**
     * @param {GridCell[]} owns
     */
    set owns(owns) {
        this.owns.forEach(cell => {
            // fixme
            if(cell) cell.hidden = false
        })
        super.colSpan = 1
        super.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => cell.ownerCell = this)
            super.colSpan = last.elementIndex - this.elementIndex + 1
            super.rowSpan = last.rowIndex - this.rowIndex + 1
        }
        super.owns = owns
    }

    /**
     * @returns {GridCell[]}
     */
    get owns() {
        return super.owns
    }

    /**
     * @returns {GridCell}
     */
    get prevCell() {
        const sibling = this.row.cells[this.elementIndex - 1]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        const grid = this.grid
        return Boolean(grid) && grid.readOnly || this.getAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["C" /* ReadOnly */])
    }

    /**
     *
     * @param {Boolean} required
     */
    set required(required) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["E" /* Required */], required)
    }

    /**
     *
     * @returns {Boolean}
     */
    get required() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["E" /* Required */])
    }

    /**
     * @returns {RowHeader}
     */
    get rowHeader() {
        return this.row.header
    }

    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        const index = this.rowIndex
        this.owns = this.column.slice(index + 1, index + rowSpan)
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return super.rowSpan
    }

    /**
     *
     * @param {String} selected
     */
    set selected(selected) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["I" /* Selected */], selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["I" /* Selected */])
    }

    /**
     * @returns {Span|null}
     */
    get textElement() {
        return this.find(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */], '.text')
    }

    /**
     * @param {String} value
     */
    set value(value) {
        if(value) this.dataset.value = value
        else this.removeAttribute('data-value')
        this.textElement.innerHTML = value.replace(/\n/g, '<br>')
        this.dropEffect = value? 'move' : null
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value || this.textContent
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GridCell;


/**
 * @param {*} [init]
 * @returns {GridCell}
 */
function gridCell(...init) {
    return new GridCell(...init)
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export element */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parentnode__ = __webpack_require__(23);





const { keys } = Object
const { isArray, prototype : { indexOf, map, reduce } } = Array
const { Document, Element, document } = window

const INIT_PROPERTY_NAME = 'children'

/**
 * @param {Object} attrset
 * @param {String} name
 * @param {String} value
 * @returns {Object}
 */
function attrset(attrset, { name, value }) {
    attrset[name] = value
    return attrset
}

/**
 * Element DOM node assembler
 */
class ElementAssembler extends __WEBPACK_IMPORTED_MODULE_3__parentnode__["a" /* ParentNodeAssembler */] {

    /**
     * @param {Function|String} object
     * @returns {ElementAssembler|AttrAssembler|*|null}
     */
    closest(object) {
        if(typeof object === 'function') {
            const node = this.node.closest(object.selector)
            if(node) {
                const element = this.getInstance(node)
                return object.prototype instanceof __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */]?
                    element.getAttributeNode(object) :
                    element
            }
            else return null
        }
        else return this.getInstance(this.node.closest(object))
    }

    /**
     * this.getAttribute(AttrAssembler)
     * this.getAttribute('attr')
     *
     * @param {Function|String} attr
     * @returns {*}
     */
    getAttribute(attr) {
        const node = this.node
        if(typeof attr === __WEBPACK_IMPORTED_MODULE_0__const__["f" /* TYPE_FUNCTION */]) {
            const { namespace, qualifiedName, localName } = attr
            return namespace?
                node.getAttributeNS(namespace, localName) :
                node.getAttribute(qualifiedName)
        }
        else return node.getAttribute(attr)
    }

    /**
     * @returns {String[]}
     */
    getAttributeNames() {
        return this.node.getAttributeNames()
    }

    /**
     * this.getAttributeNode(AttrAssembler)
     * this.getAttributeNode('attr')
     *
     * @param {Function|String} attr
     * @returns {AttrAssembler|null}
     */
    getAttributeNode(attr) {
        const node = this.node
        const isFunctionType = typeof attr === __WEBPACK_IMPORTED_MODULE_0__const__["f" /* TYPE_FUNCTION */]
        let attrNode
        if(isFunctionType) {
            const { namespace, qualifiedName, localName } = attr
            attrNode = namespace?
                node.getAttributeNodeNS(namespace, localName) :
                node.getAttributeNode(qualifiedName)
        }
        else attrNode = node.getAttributeNode(attr)
        if(attrNode) {
            const assembler = isFunctionType?
                attr :
                this.constructor.attrAssembler
            return this.getInstance(attrNode, assembler)
        }
        else return null
    }

    /**
     * @param {String} classNames
     * @returns {(ElementAssembler)[]}
     */
    getElementsByClassName(classNames) {
        const nodes = this.node.getElementsByClassName(classNames)
        const { elementAssembler } = this.constructor
        return map.call(nodes, node => {
            return this.getInstance(node, elementAssembler)
        })
    }

    /**
     * @param {Function|String} object
     * @returns {*}
     */
    getElementsByTagName(object) {
        let nodes, assembler
        const node = this.node
        const isFunction = typeof object === 'function'
        const isAssembler = object === ElementAssembler
            || ElementAssembler.isPrototypeOf(object)
        if(isFunction && isAssembler) {
            const { namespace, localName, qualifiedName } = object
            nodes = namespace?
                node.getElementsByTagNameNS(namespace, localName) :
                node.getElementsByTagName(qualifiedName)
            assembler = object
        }
        else {
            nodes = node.getElementsByTagName(object)
            assembler = this.constructor.elementAssembler
        }
        return map.call(nodes, node => {
            return this.getInstance(node, assembler)
        })
    }

    /**
     * @param {Function|String} attr
     * @returns {Boolean}
     */
    hasAttribute(attr) {
        const node = this.node
        if(typeof attr === __WEBPACK_IMPORTED_MODULE_0__const__["f" /* TYPE_FUNCTION */]) {
            const { namespace, qualifiedName, localName } = attr
            return namespace?
                node.hasAttributeNS(namespace, localName) :
                node.hasAttribute(qualifiedName)
        }
        else return node.hasAttribute(attr)
    }

    /**
     * @returns {Boolean}
     */
    hasAttributes() {
        return this.node.hasAttributes()
    }

    /**
     * @param {String} selectors
     * @returns {Boolean}
     */
    matches(selectors) {
        return this.node.matches(selectors)
    }

    /**
     * @param {Function|String} attr
     */
    removeAttribute(attr) {
        const node = this.node
        if(typeof attr === __WEBPACK_IMPORTED_MODULE_0__const__["f" /* TYPE_FUNCTION */]) {
            const { namespace, qualifiedName, localName } = attr
            if(namespace) {
                node.removeAttributeNS(namespace, localName)
            }
            else node.removeAttribute(qualifiedName)
        }
        else node.removeAttribute(attr)
    }

    /**
     * this.removeAttributeNode('attr')
     * this.removeAttributeNode(AttrAssembler)
     * this.removeAttributeNode(this.getAttributeNode('attr'))
     * this.removeAttributeNode(this.node.getAttributeNode('attr'))
     *
     * @param {AttrAssembler|Attr|Function|String} attr
     * @returns {AttrAssembler|ElementAssembler.attrAssembler|null}
     */
    removeAttributeNode(attr) {
        const node = this.node
        const type = typeof attr
        if(type === __WEBPACK_IMPORTED_MODULE_0__const__["g" /* TYPE_STRING */] || type === __WEBPACK_IMPORTED_MODULE_0__const__["f" /* TYPE_FUNCTION */]) {
            const instance = this.getAttributeNode(attr)
            if(instance) {
                node.removeAttributeNode(instance.node)
                return instance
            }
            else return null
        }
        else {
            if(attr instanceof __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */]) return attr.remove()
            else {
                const attrNode = node.removeAttributeNode(attr)
                const { attrAssembler } = this.constructor
                return this.getInstance(attrNode, attrAssembler)
            }
        }
    }

    /**
     * this.setAttribute(AttrAssembler, 'foobar')
     * this.setAttribute('attr', 'foobar')
     *
     * @param {Function|String|*} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        const instance = this.getAttributeNode(attr)
        if(instance) instance.value = value
        else {
            if(typeof attr === __WEBPACK_IMPORTED_MODULE_0__const__["f" /* TYPE_FUNCTION */]) {
                if(!attr.removeOnValue(value)) {
                    this.setAttributeNode(new attr({ value }))
                }
            }
            else if(!this.constructor.attrAssembler.removeOnValue(value)) {
                this.node.setAttribute(attr, value)
            }
        }
    }

    /**
     * this.setAttributeNode(new AttrAssembler)
     * this.setAttributeNode(document.createAttribute('attr'))
     *
     * @param {AttrAssembler|Attr} attr
     * @returns {AttrAssembler|ElementAssembler.attrAssembler|null}
     */
    setAttributeNode(attr) {
        const node = this.node
        let replacedNode
        if(attr instanceof __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */]) {
            const { namespaceURI, name } = attr
            replacedNode = namespaceURI?
                node.getAttributeNodeNS(namespaceURI, name) :
                node.getAttributeNode(name)
            attr.ownerElement = node
        }
        else {
            replacedNode = attr.namespaceURI?
                node.setAttributeNodeNS(attr) :
                node.setAttributeNode(attr)
        }
        if(replacedNode) {
            const { attrAssembler } = this.constructor
            return this.getInstance(replacedNode, attrAssembler)
        }
        else return null
    }

    /**
     * Set content attributes on the element
     * @param {*} attributes
     */
    set attributes(attributes) {
        if(attributes instanceof __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */]) {
            attributes.ownerElement = this.node
        }
        else if(isArray(attributes)) {
            attributes.forEach(attr => this.attributes = attr)
        }
        else this.setAttributeNode(attributes)
    }

    /**
     * Get all attributes of the element as an array
     * @returns {Array}
     */
    get attributes() {
        const { attrAssembler } = this.constructor
        return map.call(this.node.attributes, node => {
            return this.getInstance(node, attrAssembler)
        })
    }

    /**
     * Set content attributes on the element
     * @param {*} attrset dictionary object
     */
    set attrset(attrset) {
        const node = this.node
        for(let name in attrset) {
            node.setAttribute(name, attrset[name])
        }
    }

    /**
     * Get all content attributes of the element as a dictionary-object
     * @returns {{}}
     */
    get attrset() {
        return reduce.call(this.node.attributes, attrset, {})
    }

    /**
     * Append children to the element
     * @param {*} children
     */
    set children(children) {
        this.childNodes = children
    }

    /**
     * Get all children of the element as an array
     * @returns {Array}
     */
    get children() {
        const { elementAssembler } = this.constructor
        return map.call(this.node.children, node => {
            return this.getInstance(node, elementAssembler)
        })
    }

    /**
     * Set the class list of the element
     * @param {*} classList token / token list / token-boolean dict {String|Array|{}}
     */
    set classList(classList) {
        if(classList) {
            const list = this.node.classList
            if(isArray(classList)) {
                classList.forEach(token => this.classList = token)
            }
            else if(classList.constructor === Object) {
                keys(classList).forEach(token => {
                    if(classList[token]) list.add(token)
                })
            }
            else list.add(classList)
        }
    }

    /**
     * Get the class list of the element as an array
     * @returns {DOMTokenList} classList interface
     */
    get classList() {
        return this.node.classList
    }

    /**
     * Set the class name of the element
     * @param {String} className
     */
    set className(className) {
        if(className) this.node.className = className
        else this.node.removeAttribute('class')
    }

    /**
     * Get the class name of the element
     * @returns {String}
     */
    get className() {
        return this.node.className
    }

    /**
     * Get the element index among its sibling elements or -1 if it has no parent
     * @returns {Number}
     */
    get elementIndex() {
        const parentNode = this.node.parentNode
        return parentNode?
            indexOf.call(parentNode.children, this.node) :
            __WEBPACK_IMPORTED_MODULE_0__const__["e" /* NO_PARENT_INDEX */]
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get firstElementChild() {
        return this.getInstance(
            this.node.firstElementChild,
            this.constructor.elementAssembler)
    }

    /**
     * Set the unique identifier on the element
     * @param {String} id
     */
    set id(id) {
        this.node.id = id
    }

    /**
     * Get the unique identifier of the element
     * @returns {String}
     */
    get id() {
        return this.node.id
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get lastElementChild() {
        return this.getInstance(
            this.node.lastElementChild,
            this.constructor.elementAssembler)
    }

    /**
     * @returns {String}
     */
    get localName() {
        return this.node.localName
    }

    /**
     * @returns {String|null}
     */
    get namespaceURI() {
        return this.node.namespaceURI
    }

    /**
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        if(parentNode instanceof __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentAssembler */]) {
            parentNode.documentElement = this.node
        }
        else {
            if(parentNode instanceof Document) {
                const element = parentNode.documentElement
                if(element) parentNode.removeChild(element)
            }
            super.parentNode = parentNode
        }
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }

    /**
     * @return {String}
     */
    get prefix() {
        return this.node.prefix
    }

    /**
     * Get a previous sibling of the element
     * @returns {ChildNodeAssembler|null|*}
     */
    get previousElementSibling() {
        return this.getInstance(
            this.node.previousElementSibling,
            this.constructor.elementAssembler)
    }

    /**
     * @return {String}
     */
    get tagName() {
        return this.node.tagName
    }

    /**
     * Get a next sibling of the element
     * @returns {ChildNodeAssembler|null|*}
     */
    get nextElementSibling() {
        return this.getInstance(
            this.node.nextElementSibling,
            this.constructor.elementAssembler)
    }

    /**
     * Create the specified Element node
     * @param {*} [init]
     * @returns {Element|*} created element
     */
    static create(init) {
        const {
            namespace = this.namespace,
            prefix = this.prefix,
            localName = this.localName
        } = init || this
        let qualifiedName = init && init.qualifiedName
        if(!qualifiedName) {
            qualifiedName = prefix?
                prefix + __WEBPACK_IMPORTED_MODULE_0__const__["d" /* NAMESPACE_SEPARATOR */] + localName :
                localName
        }
        return document.createElementNS(namespace, qualifiedName)
    }

    /**
     * @returns {Function}
     */
    static get attrAssembler() {
        return __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */]
    }

    /**
     * @returns {String}
     */
    static get initPropertyName() {
        return INIT_PROPERTY_NAME
    }

    /**
     * @returns {Function}
     */
    static get documentAssembler() {
        return __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentAssembler */]
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return ElementAssembler
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return Element
    }

    /**
     * The local name of the element node
     * @returns {String}
     */
    static get localName() {
        return this === ElementAssembler?
            LOCAL_NAME :
            this.name.toLowerCase()
    }

    /**
     * Default namespace URI
     * @returns {String}
     */
    static get namespace() {
        return __WEBPACK_IMPORTED_MODULE_0__const__["a" /* DEFAULT_NAMESPACE_URI */]
    }

    /**
     * The XML namespace prefix
     * @returns {String}
     */
    static get prefix() {
        return __WEBPACK_IMPORTED_MODULE_0__const__["b" /* DEFAULT_PREFIX */]
    }

    /**
     * The qualified name of the element node
     * @returns {String}
     */
    static get qualifiedName() {
        const { prefix, localName } = this
        return prefix?
            prefix + __WEBPACK_IMPORTED_MODULE_0__const__["d" /* NAMESPACE_SEPARATOR */] + localName :
            localName
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return this.localName
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ElementAssembler;


/**
 * Element assembler factory
 * @param {*} init
 * @returns {ElementAssembler}
 */
function element(...init) {
    return new ElementAssembler(...init)
}

const LOCAL_NAME = element.name


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctype__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parentnode__ = __webpack_require__(23);




const {
    Document,
    DocumentType,
    Element,
    document : { implementation }
} = window
const DEFAULT_DOCTYPE = null
const DEFAULT_QUALIFIED_NAME = 'document'

/**
 * Document DOM node assembler
 */
class DocumentAssembler extends __WEBPACK_IMPORTED_MODULE_2__parentnode__["a" /* ParentNodeAssembler */] {
    /**
     * @param {String} id
     * @returns {ElementAssembler}
     */
    getElementById(id) {
        const node = this.node.getElementById(id)
        const assembler = this.constructor.elementAssembler
        return this.getInstance(node, assembler)
    }

    /**
     * Set the associated document type declaration node
     * @param {*} doctype node or assembler
     */
    set doctype(doctype) {
        if(doctype instanceof __WEBPACK_IMPORTED_MODULE_1__doctype__["a" /* DocumentTypeAssembler */]) {
            doctype.parentNode = this.node
        }
        else {
            const node = this.node
            const firstChild = node.firstChild
            if(firstChild) {
                if(firstChild instanceof DocumentType) {
                    node.replaceChild(doctype, firstChild)
                }
                else node.insertBefore(doctype, firstChild)
            }
            else node.appendChild(doctype)
        }
    }

    /**
     * The associatied document type declaration node
     * @returns {DocumentTypeAssembler|DocumentAssembler.doctypeAssembler|null}
     */
    get doctype() {
        const doctypeNode = this.node.doctype
        if(doctypeNode) {
            const { doctypeAssembler } = this.constructor
            return this.getInstance(doctypeNode, doctypeAssembler)
        }
        else return null
    }

    /**
     * Set the root document element
     * @param {*} documentElement node or assembler or init dictionary
     */
    set documentElement(documentElement) {
        const node = this.node
        const element = this.documentElement
        if(documentElement instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* ElementAssembler */]) {
            documentElement.parentNode = node
        }
        else if(documentElement instanceof Element) {
            if(element) element.remove()
            node.appendChild(documentElement)
        }
        else if(documentElement === null && element) {
            element.remove()
        }
        else {
            if(element) element.init(documentElement)
            else {
                const { elementAssembler } = this.constructor
                const element = new elementAssembler(documentElement)
                element.parentNode = node
            }
        }
    }

    /**
     * The root document element
     * @returns {ElementAssembler|DocumentAssembler.elementAssembler|null} Element
     */
    get documentElement() {
        const elementNode = this.node.documentElement
        if(elementNode) {
            const { elementAssembler } = this.constructor
            return this.getInstance(elementNode, elementAssembler)
        }
        else return null
    }

    /**
     * Create the specified Document node
     * @param {*} [init]
     * @returns {Document}
     */
    static create(init) {
        const {
            namespace = this.namespace,
            qualifiedName = this.qualifiedName,
            doctype = this.doctype
        } = init || this
        return implementation.createDocument(
            namespace,
            qualifiedName,
            doctype instanceof __WEBPACK_IMPORTED_MODULE_1__doctype__["a" /* DocumentTypeAssembler */]?
                doctype.node :
                doctype)
    }

    /**
     * The default namespace URI
     * @returns {String}
     */
    static get namespace() {
        return this.elementAssembler.namespace
    }

    /**
     * The qualified name of the document element node
     * @returns {String}
     */
    static get qualifiedName() {
        return this === DocumentAssembler?
            DEFAULT_QUALIFIED_NAME :
            this.elementAssembler.qualifiedName
    }

    /**
     * Doctype redefenition facility
     * @returns {*|null}
     */
    static get doctype() {
        return DEFAULT_DOCTYPE
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0__element__["a" /* ElementAssembler */]
    }

    /**
     * @returns {Function}
     */
    static get doctypeAssembler() {
        return __WEBPACK_IMPORTED_MODULE_1__doctype__["a" /* DocumentTypeAssembler */]
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return Document
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DocumentAssembler;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(36);



const { prototype : { indexOf } } = Array

/**
 * ChildNode DOM interface assembler
 */
class ChildNodeAssembler extends __WEBPACK_IMPORTED_MODULE_1__node__["a" /* NodeAssembler */] {
    /**
     * @param {NodeAssembler|Node|String} items
     */
    after(...items) {
        this.node.after(...items.map(item => {
            return item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* NodeAssembler */]?
                item.node :
                item
        }))
    }
    
    /**
     * @param {NodeAssembler|Node|String} items
     */
    before(...items) {
        this.node.before(...items.map(item => {
            return item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* NodeAssembler */]?
                item.node :
                item
        }))
    }

    /**
     * Remove node from tree
     */
    remove() {
        if(this.parentNode) {
            this.parentNode.removeChild(this.node)
        }
    }

    /**
     * @param {NodeAssembler|Node|String} items
     */
    replaceWith(...items) {
        this.node.replaceWith(...items.map(item => {
            return item instanceof __WEBPACK_IMPORTED_MODULE_1__node__["a" /* NodeAssembler */]?
                item.node :
                item
        }))
    }

    /**
     * Append the node to the specified parent
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        parentNode.appendChild(this.node)
    }

    /**
     * Get the parent node
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return this.getInstance(this.node.parentNode)
    }

    /**
     * @param {ElementAssembler} parentElement
     */
    set parentElement(parentElement) {
        parentElement.appendChild(this.node)
    }

    /**
     * @returns {ElementAssembler}
     */
    get parentElement() {
        return this.getInstance(this.node.parentElement)
    }

    /**
     * Get a next sibling of the node
     * @returns {ChildNodeAssembler|null|*}
     */
    get nextSibling() {
        return this.getInstance(this.node.nextSibling)
    }

    /**
     * Get a previous sibling of the node
     * @returns {ChildNodeAssembler|null|*}
     */
    get previousSibling() {
        return this.getInstance(this.node.previousSibling)
    }

    /**
     * Get the node index among its sibling nodes or -1 if it has no parent
     * @returns {Number}
     */
    get index() {
        const parentNode = this.node.parentNode
        return parentNode?
            indexOf.call(parentNode.childNodes, this.node) :
            __WEBPACK_IMPORTED_MODULE_0__const__["e" /* NO_PARENT_INDEX */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ChildNodeAssembler;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__childnode__ = __webpack_require__(22);



const { isArray, prototype : { forEach, map } } = Array
const { document } = window

const INIT_PROPERTY_NAME = 'childNodes'

/**
 * ParentNode DOM interface assembler
 */
class ParentNodeAssembler extends __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */] {
    /**
     * Append child nodes to the node
     * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
     */
    append(...childNodes) {
        childNodes.forEach(child => {
            if(child) {
                if(isArray(child)) this.append(...child)
                else this.appendChild(child)
            }
        })
    }

    /**
     * @param {*} child
     */
    appendChild(child) {
        if(child instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]) {
            child.parentNode = this.node
        }
        else if(typeof child === __WEBPACK_IMPORTED_MODULE_0__const__["g" /* TYPE_STRING */]) {
            this.node.appendChild(document.createTextNode(child))
        }
        else this.node.appendChild(child)
    }

    /**
     * @param {*} init
     * @returns {Node|*}
     */
    create(init) {
        return init && init.constructor === Object?
            super.create(init) :
            super.create()
    }

    /**
     * @param {NodeAssembler|Node} object
     * @returns {Boolean}
     */
    contains(object) {
        const node = object instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]?
            object.node :
            object
        return this.node.contains(node)
    }

    /**
     * @returns {Boolean}
     */
    hasChildNodes() {
        return this.node.hasChildNodes()
    }

    /**
     * @param {ChildNodeAssembler|Node|*} node
     * @param {ChildNodeAssembler|Node|*} child
     * @returns {ChildNodeAssembler|*}
     */
    insertBefore(node, child) {
        if(node instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]) {
            node = node.node
        }
        if(child instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]) {
            child = child.node
        }
        const result = this.node.insertBefore(node, child)
        return this.getInstance(result)
    }

    /**
     * https://www.w3.org/TR/dom/#dom-node-normalize
     */
    normalize() {
        this.node.normalize()
    }

    /**
     * Prepend child nodes to the node
     * @param {String|Node|ChildNodeAssembler|Array|*} items
     */
    prepend(...items) {
        this.node.prepend(...items.map(child => {
            return child instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]?
                child.node :
                child
        }))
    }

    /**
     * @param {String} selectors
     * @returns {ElementAssembler}
     */
    querySelector(selectors) {
        return this.getInstance(this.node.querySelector(selectors))
    }

    /**
     * @param {String} selectors
     * @returns {Array}
     */
    querySelectorAll(selectors) {
        const nodes = this.node.querySelectorAll(selectors)
        const handler = node => this.getInstance(node)
        return map.call(nodes, handler)
    }

    /**
     * @param {ChildNodeAssembler|Node|*} child
     */
    removeChild(child) {
        if(child instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]) {
            child.remove()
        }
        else this.node.removeChild(child)
    }

    /**
     * @param {ChildNodeAssembler|Node|*} node
     * @param {ChildNodeAssembler|Node|*} child
     * @returns {ChildNodeAssembler|*}
     */
    replaceChild(node, child) {
        if(node instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]) {
            node = node.node
        }
        if(child instanceof __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */]) {
            child = child.node
        }
        const result = this.node.replaceChild(node, child)
        return this.getInstance(result)
    }

    /**
     * @returns {Number}
     */
    get childElementCount() {
        return this.node.childElementCount
    }

    /**
     * Replace child nodes to the node
     * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
     */
    set childNodes(childNodes) {
        if(this.node.hasChildNodes()) {
            forEach.call(this.node.childNodes, child => {
                this.node.removeChild(child)
            })
        }
        this.append(childNodes)
    }

    /**
     * Get an array of child nodes
     * @returns {*} {Array}
     */
    get childNodes() {
        return Array.from(this.node.childNodes).map(node => {
            return this.getInstance(node)
        })
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get firstChild() {
        return this.getInstance(this.node.firstChild)
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get lastChild() {
        return this.getInstance(this.node.lastChild)
    }

    /**
     * Set a text content of the node
     * @param {String} textContent
     */
    set textContent(textContent) {
        this.node.textContent = textContent
    }

    /**
     * Get a text content of the node
     * @returns {String}
     */
    get textContent() {
        return this.node.textContent
    }

    /**
     * @returns {String}
     */
    static get initPropertyName() {
        return INIT_PROPERTY_NAME
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ParentNodeAssembler;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__childnode__ = __webpack_require__(22);



const { CharacterData } = window
const DEFAULT_DATA = ''

/**
 * CharacterData DOM interface assembler
 */
class CharacterDataAssembler extends __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */] {
    /**
     * Use the string type init as data
     * @param {*} init
     */
    assemble(init) {
        return typeof init === __WEBPACK_IMPORTED_MODULE_0__const__["g" /* TYPE_STRING */]?
            this.node = this.constructor.create({ data : init }) :
            super.assemble(init)
    }

    /**
     * Set character data of the node
     * @param {String} data
     */
    set data(data) {
        this.node.data = data
    }

    /**
     * Get character data of the node
     * @returns {String}
     */
    get data() {
        return this.node.data
    }

    /**
     * @returns {String}
     */
    static get data() {
        return DEFAULT_DATA
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return CharacterData
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CharacterDataAssembler;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tbody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tr__ = __webpack_require__(40);



const { map } = Array.prototype
const { HTMLTableSectionElement } = window

class TBody extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstance(this.node.insertRow(index), __WEBPACK_IMPORTED_MODULE_1__tr__["a" /* Tr */])
    }

    /**
     * @param {Number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_1__tr__["a" /* Tr */])
        })
    }

    /**
     * @returns {window.HTMLTableSectionElement}
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TBody;


/**
 * @param {*} [init]
 * @returns {TBody}
 */
function tbody(...init) {
    return new TBody(...init)
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * The base role from which all other roles in this taxonomy inherit.
 * https://www.w3.org/TR/wai-aria-1.1/#roletype
 */
class RoleType extends __WEBPACK_IMPORTED_MODULE_1__role__["a" /* RoleAttrAssembler */] {
    /**
     * @param {Boolean} atomic
     */
    set atomic(atomic) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["b" /* Atomic */], atomic)
    }

    /**
     * @returns {Boolean}
     */
    get atomic() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["b" /* Atomic */])
    }

    /**
     * @param {Boolean} busy
     */
    set busy(busy) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["c" /* Busy */], busy)
    }

    /**
     * @returns {Boolean}
     */
    get busy() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["c" /* Busy */])
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["g" /* Controls */], controls)
    }

    /**
     * @returns {*[]}
     */
    get controls() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["g" /* Controls */])
    }

    /**
     * @param {String} current
     */
    set current(current) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["h" /* Current */], current)
    }

    /**
     * @returns {String}
     */
    get current() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["h" /* Current */])
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["i" /* Disabled */], disabled)
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["i" /* Disabled */])
    }

    /**
     * @param {String} dropEffect
     */
    set dropEffect(dropEffect) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["j" /* DropEffect */], dropEffect)
    }

    /**
     * @returns {String}
     */
    get dropEffect() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["j" /* DropEffect */])
    }

    /**
     * @param {NodeAssembler|null} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["k" /* ErrorMessage */], errorMessage)
    }

    /**
     * @returns {NodeAssembler|null}
     */
    get errorMessage() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["k" /* ErrorMessage */])
    }

    /**
     * @param {String} grabbed
     */
    set grabbed(grabbed) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["m" /* Grabbed */], grabbed)
    }

    /**
     * @returns {String}
     */
    get grabbed() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["m" /* Grabbed */])
    }

    /**
     * @param {String} hasPopup
     */
    set hasPopup(hasPopup) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["n" /* HasPopup */], hasPopup)
    }

    /**
     * @returns {String}
     */
    get hasPopup() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["n" /* HasPopup */])
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["o" /* Hidden */], hidden)
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["o" /* Hidden */])
    }

    /**
     * @param {String} invalid
     */
    set invalid(invalid) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["p" /* Invalid */], invalid)
    }

    /**
     * @returns {String}
     */
    get invalid() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["p" /* Invalid */])
    }

    /**
     * @param {String} keyShortCuts
     */
    set keyShortCuts(keyShortCuts) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["q" /* KeyShortCuts */], keyShortCuts)
    }

    /**
     * @returns {String}
     */
    get keyShortCuts() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["q" /* KeyShortCuts */])
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["r" /* Label */], label)
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["r" /* Label */])
    }

    /**
     * @param {*} labelledBy {(NodeAssembler|Node|String)[]}
     */
    set labelledBy(labelledBy) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["s" /* LabelledBy */], labelledBy)
    }

    /**
     * @returns {NodeAssembler[]}
     */
    get labelledBy() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["s" /* LabelledBy */])
    }

    /**
     * @param {String} live
     */
    set live(live) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["u" /* Live */], live)
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["u" /* Live */])
    }

    /**
     * @param {NodeAssembler[]|*} owns
     */
    set owns(owns) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["z" /* Owns */], owns)
    }

    /**
     * @returns {NodeAssembler[]|*}
     */
    get owns() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["z" /* Owns */])
    }

    /**
     * @param {String[]} relevant
     */
    set relevant(relevant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["D" /* Relevant */], relevant)
    }

    /**
     * @returns {String[]}
     */
    get relevant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["D" /* Relevant */])
    }

    /**
     * @param {String} roleDescription
     */
    set roleDescription(roleDescription) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["F" /* RoleDescription */], roleDescription)
    }

    /**
     * @returns {String}
     */
    get roleDescription() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["F" /* RoleDescription */])
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoleType;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__(14);


/**
 * A form of widget that performs an action but does not receive input data.
 * https://www.w3.org/TR/wai-aria-1.1/#command
 */
class Command extends __WEBPACK_IMPORTED_MODULE_0__widget__["a" /* Widget */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Command;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landmark__ = __webpack_require__(8);



/**
 * A landmark region that contains a collection of items and objects that,
 * as a whole, combine to create a form.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#form
 */
class Form extends __WEBPACK_IMPORTED_MODULE_1__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["e" /* Form */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;


/**
 * @param {*} [init]
 * @returns {Form}
 */
function form(...init) {
    return new Form(...init)
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export listbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__option__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria__ = __webpack_require__(2);





const SELECT_ALL_KEY_RE = /^[aф]$/i

/**
 * A widget that allows the user to select one or more items from a list of choices.
 * https://www.w3.org/TR/wai-aria-1.1/#listbox
 */
class Listbox extends __WEBPACK_IMPORTED_MODULE_1__select__["a" /* Select */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._box = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]({
            parentNode : this,
            className : 'box'
        })
        this.tabIndex = 0
        this.on('focus', this.onFocus.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('select', this.onSelect.bind(this))
        this.on('check', this.onCheck.bind(this))
        this._box.on('focus', () => this.focus())
        super.init(init)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        if(this.checkable || !this.readOnly) {
            const { key, shiftKey } = event
            const options = this.options.filter(({ hidden }) => !hidden)
            const selectedOptions = this.selectedOptions
            const direction = key === 'ArrowLeft' || key === 'ArrowUp'? -1 : 1
            const index = direction < 0? 0 : selectedOptions.length - 1
            const selectedOption = selectedOptions[index]
            let nextIndex = options.indexOf(selectedOption) + direction
            if(this.multiselectable) {
                if(!shiftKey) {
                    if(nextIndex === options.length) nextIndex = 0
                    if(nextIndex < 0) nextIndex = options.length - 1
                    this.options.forEach(option => option.selected = 'false')
                }
                const option = options[nextIndex]
                if(option) {
                    option.selected = 'true'
                    this.scrollToSelectedOption()
                }
            }
            else {
                if(nextIndex === options.length) nextIndex = 0
                if(nextIndex < 0) nextIndex = options.length - 1
                this.options.forEach(option => option.selected = 'false')
                options[nextIndex].selected = 'true'
                this.scrollToSelectedOption()
            }
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        if(!this.readOnly && !this.selectedOptions.length) {
            this.options[0].selected = 'true'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        if(key === ' ') {
            event.preventDefault()
            this.onSpaceKeyDown(event)
        }
        if(SELECT_ALL_KEY_RE.test(key) && (event.metaKey || event.ctrlKey)) {
            event.preventDefault()
            if(this.multiselectable) {
                this.options.forEach(option => option.selected = 'true')
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') this.onSpaceKeyUp(event)
    }

    /**
     * @param {CustomEvent} event
     */
    onSelect(event) {
        if(!this.checkable) {
            const value = this.value
            const selectedOptions = this.selectedOptions
            this.value = selectedOptions.length?
                selectedOptions.map(({ value }) => value).join() :
                ''
            if(value !== this.value) {
                this.emit('change', {
                    bubbles : true,
                    detail : {
                        oldValue : value,
                        value : this.value
                    }
                })
            }
        }
    }

    /**
     * @param {CustomEvent} event
     */
    onCheck(event) {
        const checkedOptions = this.checkedOptions
        this.value = checkedOptions.length?
            checkedOptions.map(({ value }) => value).join() :
            ''
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        if(!event.repeat) {
            this.selectedOptions.forEach(option => {
                option.classList.add('active')
            })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyUp(event) {
        if(this.checkable && !this.readOnly) {
            const value = this.value
            if(this.multiselectable){
                this.selectedOptions.forEach(option => {
                    option.checked = String(option.checked === 'false')
                })
            }
            else {
                const isChecked = this.checkedOption === this.selectedOption
                this.checkedOptions = isChecked? [] : this.selectedOptions
            }
            if(this.value !== value) {
                this.emit('change', {
                    bubbles : true,
                    detail : {
                        oldValue : value,
                        value : this.value
                    }
                })
            }
        }
        this.selectedOptions.forEach(option => {
            option.classList.remove('active')
        })
    }

    /**
     * Preform scroll to the last selected option
     */
    scrollToSelectedOption() {
        const node = this._box.node
        const option = this.selectedOption.ownerElement.node
        const optionBottom = option.offsetTop + option.clientHeight
        const nodeBottom = node.scrollTop + node.clientHeight
        const isOptionAbove = option.offsetTop < node.scrollTop
        const isOptionBelow = optionBottom > nodeBottom
        if(isOptionAbove || isOptionBelow) {
            const delta = option.clientHeight - node.clientHeight
            node.scrollTop = option.offsetTop + Math.floor(delta / 2)
        }
    }

    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["a" /* ActiveDescendant */], activeDescendant)
    }

    /**
     * @returns {RoleAttrAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["a" /* ActiveDescendant */])
    }

    /**
     * @returns {Boolean}
     */
    get checkable() {
        return Boolean(this.find(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-checked]'))
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = this._box.children = children
    }

    /**
     * @returns {Array}
     */
    get children() {
        return super.children
    }

    /**
     * @param {Option[]} options
     */
    set checkedOptions(options) {
        this.checkedOptions.forEach(option => {
            option.checked = 'false'
        })
        options.forEach(option => {
            option.checked = 'true'
        })
    }

    /**
     * @returns {Option[]}
     */
    get checkedOptions() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-checked=true]')
    }

    /**
     * @returns {Option|null}
     */
    get checkedOption() {
        return this.checkedOptions[0] || null
    }

    /**
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput}
     */
    get input() {
        return this._input || (this._input = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["g" /* Input */]({
            parentNode : this,
            type : 'hidden'
        }))
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const id = this.id + '-label'
        const instance = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["h" /* Label */]({ id, children : label })
        this.ownerElement.prepend(this.labelledBy = instance)
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @return {String}
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["x" /* Multiselectable */], multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["x" /* Multiselectable */])
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        this._box.children = options
        const option = this.find(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-checked]')?
            this.checkedOption :
            this.selectedOption
        this.value = option? option.value : ''
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */])
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["C" /* ReadOnly */])
    }

    /**
     * @returns {Option|null}
     */
    get selectedOption() {
        return this.selectedOptions[0] || null
    }

    /**
     * @returns {Option[]}
     */
    get selectedOptions() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-selected=true]')
    }

    /**
     * @returns {String}
     */
    get text() {
        const options = this.checkable?
            this.checkedOptions :
            this.selectedOptions
        const handler = ({ textContent }) => textContent
        return options.length? options.map(handler).join() : ''
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Span
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Listbox;


/**
 * @param {*} [init]
 * @returns {Listbox}
 */
function listbox(...init) {
    return new Listbox(...init)
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export option */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A selectable item in a select list.
 * https://www.w3.org/TR/wai-aria-1.1/#option
 */
class Option extends __WEBPACK_IMPORTED_MODULE_0__input__["a" /* Input */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        if(!this.selected) this.selected = 'false'
        this.on('click', this.onClick.bind(this))
        this.on('mouseenter', this.onMouseEnter.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mousemove', this.onMouseMove.bind(this))
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if(this.checked && !this.listbox.readOnly) {
            const listbox = this.listbox
            const value = listbox.value
            if(!listbox.multiselectable) {
                listbox.options.forEach(option => {
                    if(option !== this) option.checked = 'false'
                })
            }
            this.checked = String(this.checked === 'false')
            if(listbox.value !== value) {
                listbox.emit('change', { bubbles : true })
            }
            event.stopPropagation()
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseEnter(event) {
        const { buttons } = event
        if(this.multiselectable && buttons === 1) {
            this.selected = 'true'
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        const listbox = this.listbox
        if(!this.disabled && (listbox.checkable || !listbox.readOnly)) {
            if((event.metaKey || event.ctrlKey || event.shiftKey)
                && this.listbox.multiselectable) {
                void null
            }
            else {
                this.listbox.options.forEach(option => {
                    option.selected = 'false'
                })
            }
            this.selected = 'true'
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        if(this.listbox.multiselectable && event.buttons === 1) {
            this.selected = 'true'
        }
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["d" /* Checked */], checked)
        if(this.listbox) {
            this.emit('check', { bubbles : true })
        }
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["d" /* Checked */])
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        const listbox = this.listbox
        return listbox && listbox.disabled || super.disabled
    }

    /**
     * @returns {Listbox|*|null}
     */
    get listbox() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_1__listbox__["a" /* Listbox */])
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        const listbox = this.listbox
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["I" /* Selected */], selected)
        if(listbox && selected === 'true') {
            listbox.activeDescendant = this
            this.emit('select', { bubbles : true })
        }
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["I" /* Selected */])
    }

    /**
     * @param {String} value
     */
    set value(value) {
        if(value) this.dataset.value = value
        else this.removeAttribute('data-value')
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;


/**
 * @param {*} [init]
 * @returns {Option}
 */
function option(...init) {
    return new Option(...init)
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridcell__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A composite widget containing a collection of one or more rows with one
 * or more cells where some or all cells in the grid are focusable by using
 * methods of two-dimensional navigation, such as directional arrow keys.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#grid
 */
class Grid extends __WEBPACK_IMPORTED_MODULE_0__table__["a" /* Table */] {
    /**
     * @param {*} init
     */
    init(init) {
        this.on('mousedown', this.onMouseDown.bind(this))
        this.onMouseUp = this.onMouseUp.bind(this)
        super.init(init)
    }

    /**
     * @param {*} children
     */
    append(children) {
        super.append(children)
        this.resetTabIndex()
    }

    /**
     * Clear all GridCells
     */
    clear() {
        this.gridCells.forEach(cell => cell.clear())
        this.resetTabIndex()
    }

    /**
     * Remove selected attribute from all cells except focused
     */
    collapseSelection() {
        const focusedCell = this.focusedCell
        this.selectedCells.forEach(cell => {
            if(cell !== focusedCell) cell.selected = 'false'
        })
        this.activeDescendant = focusedCell
    }

    /**
     * Drop cell to the selected area
     */
    dropCellToSelectedArea() {
        const focusedCell = this.focusedCell
        const selectedCells = this.selectedCells
        const handler = ({ dropEffect }) => dropEffect.length
        const dropTargets = selectedCells.filter(handler)
        const dropTarget = dropTargets[0]
        if(dropTarget) {
            if(dropTarget.dropEffect.includes('move') && selectedCells.length) {
                focusedCell.replaceWith(selectedCells[0])
                focusedCell.emit('change', { bubbles : true })
            }
            else {
                if(dropTarget.dropEffect.length) {
                    dropTarget.dropEffect = null
                }
                this.collapseSelection()
            }
        }
        focusedCell.grabbed = 'false'
    }

    /**
     * Merge cells
     * @param {[GridCell]} cells
     */
    mergeCells(cells) {
        const first = cells[0]
        const last = cells[cells.length - 1]
        const owns = cells.slice(1).concat(last.owns)
        const filtered = cells.filter(({ value }) => value)
        const readOnlyCells = cells.filter(({ readOnly }) => readOnly)
        if(readOnlyCells.length || filtered.length > 1) {
            this.collapseSelection()
        }
        else {
            cells.forEach(cell => {
                if(cell.owns.length) cell.owns = []
            })
            first.owns = owns
            first.focus()
            first.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        this.ownerDocument.on('mouseup', this.onMouseUp)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const focusedCell = this.focusedCell
        const cells = this.gridCells
        if(focusedCell) {
            if(focusedCell.grabbed === 'true') {
                this.dropCellToSelectedArea()
            }
        }
        cells.forEach(cell => {
            cell.dropEffect = cell === focusedCell && cell.value? 'move' : null
        })
        this.ownerDocument.un('mouseup', this.onMouseUp)
    }

    /**
     * Reset grid tabIndex
     */
    resetTabIndex() {
        const cells = this.gridCells
        if(!cells.some(({ tabIndex }) => tabIndex === 0)) {
            const first = cells[0]
            if(first) first.tabIndex = 0
        }
    }

    /**
     * Update selection according to the focused and active descendant cell
     */
    updateSelection() {
        const { focusedCell, activeDescendant } = this
        if(focusedCell && focusedCell.selected) {
            const row = focusedCell.row
            let cells, index1, index2
            if(row.multiselectable) {
                cells = row.cells
                cells.forEach(cell => cell.selected = 'false')
                index1 = focusedCell.elementIndex
                index2 = activeDescendant.elementIndex
            }
            else if(this.multiselectable) {
                cells = focusedCell.column
                cells.forEach(cell => cell.selected = 'false')
                index1 = row.rowIndex
                index2 = activeDescendant.rowIndex
            }
            if(cells) {
                const selection = cells.slice(
                    Math.min(index1, index2),
                    Math.max(index1, index2) + 1)
                selection.forEach(cell => cell.selected = 'true')
            }
        }
    }

    /**
     * @param {GridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */], activeDescendant)
        this.updateSelection()
    }

    /**
     * @returns {GridCell}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */])
    }

    /**
     * @param {*} content
     */
    set content(content) {
        this.append(content)
    }

    /**
     * @returns {GridCell}
     */
    get focusedCell() {
        return this.find(__WEBPACK_IMPORTED_MODULE_1__gridcell__["a" /* GridCell */], '.focus')
    }

    /**
     * @returns {(GridCell|*)[]}
     */
    get gridCells() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_1__gridcell__["a" /* GridCell */])
    }

    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["t" /* Level */], level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["t" /* Level */])
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["x" /* Multiselectable */], multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["x" /* Multiselectable */])
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["C" /* ReadOnly */])
    }

    /**
     * Select or deselect all grid cells
     * @param {String} selected
     */
    set selected(selected) {
        this.rows.forEach(row => row.selected = selected)
        this.gridCells.forEach(cell => cell.selected = selected)
    }

    /**
     * Gell all selected cells
     * @returns {[GridCell]}
     */
    get selectedCells() {
        return this.gridCells.filter(({ selected }) => selected === 'true')
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Grid;


/**
 * @param {*} init
 * @returns {Grid}
 */
function grid(...init) {
    return new Grid(...init)
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export group */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A set of user interface objects which are not intended to be included
 * in a page summary or table of contents by assistive technologies.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#group
 */
class Group extends __WEBPACK_IMPORTED_MODULE_1__section__["a" /* Section */] {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */], activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Group;


/**
 * @param {*} [init]
 * @returns {Group}
 */
function group(...init) {
    return new Group(...init)
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class HTMLHyperlinkAssembler extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @returns {String}
     */
    get origin() {
        return this.node.origin
    }

    /**
     * @param {String} protocol
     */
    set protocol(protocol) {
        this.node.protocol = protocol
    }

    /**
     * @returns {String}
     */
    get protocol() {
        return this.node.protocol
    }

    /**
     * @param {String} username
     */
    set username(username) {
        this.node.username = username
    }

    /**
     * @returns {String} 
     */
    get username() {
        return this.node.username
    }

    /**
     * @param {String} password
     */
    set password(password) {
        this.node.password = password
    }

    /**
     * @returns {String}
     */
    get password() {
        return this.node.password
    }

    /**
     * @param {String} host
     */
    set host(host) {
        this.node.host = host
    }

    /**
     * @returns {String} 
     */
    get host() {
        return this.node.host
    }

    /**
     * @param {String} hostname
     */
    set hostname(hostname) {
        this.node.hostname = hostname
    }

    /**
     * @returns {String}
     */
    get hostname() {
        return this.node.hostname
    }

    /**
     * @param {String} port
     */
    set port(port) {
        this.node.port = port
    }

    /**
     * @returns {String}
     */
    get port() {
        return this.node.port
    }

    /**
     * @param {String} pathname
     */
    set pathname(pathname) {
        this.node.pathname = pathname
    }

    /**
     * @returns {String}
     */
    get pathname() {
        return this.node.pathname
    }

    /**
     * @param {String} search
     */
    set search(search) {
        this.node.search = search
    }

    /**
     * @returns {String}
     */
    get search() {
        return this.node.search
    }

    /**
     * @param {String} hash
     */
    set hash(hash) {
        this.node.hash = hash
    }

    /**
     * @returns {String}
     */
    get hash() {
        return this.node.hash
    }

    /**
     * @returns {Function} HTMLHyperlinkAssembler
     */
    static get baseAssembler() {
        return HTMLHyperlinkAssembler
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLHyperlinkAssembler;



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export attr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(36);




const { Attr, Element, document } = window

const INIT_PROPERTY_NAME = 'value'

class AttrAssembler extends __WEBPACK_IMPORTED_MODULE_2__node__["a" /* NodeAssembler */] {
    /**
     * @returns {AttrAssembler}
     */
    remove() {
        const ownerElement = this.ownerElement
        if(ownerElement) {
            return ownerElement.removeAttributeNode(this.node)
        }
        else {
            throw TypeError(`Failed to execute 'remove' on '${
                this.constructor.name 
                }': the ownerElement is null.`)
        }
    }

    /**
     * @returns {String}
     */
    get localName() {
        return this.node.localName
    }

    /**
     * @return {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @returns {String|null}
     */
    get namespaceURI() {
        return this.node.namespaceURI
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        const node = this.node
        if(ownerElement instanceof __WEBPACK_IMPORTED_MODULE_1__element__["a" /* ElementAssembler */]) {
            ownerElement.setAttributeNode(node)
        }
        else if(ownerElement instanceof Element) {
            if(node.namespaceURI) {
                ownerElement.setAttributeNodeNS(node)
            }
            else ownerElement.setAttributeNode(node)
        }
        else if(ownerElement && ownerElement.constructor === Object) {
            if(this.node.ownerElement) {
                this.ownerElement.init(ownerElement)
            }
            else {
                const { elementAssembler } = this.constructor
                const element = new elementAssembler(ownerElement)
                element.setAttributeNode(node)
            }
        }
        else if(ownerElement === null) this.remove()
        else {
            throw TypeError(`Failed to set 'ownerElement' on '${
                this.constructor.name
                }': parameter is not of expected type.`)
        }
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        const ownerElement = this.node.ownerElement
        if(ownerElement) {
            const { elementAssembler } = this.constructor
            return this.getInstance(ownerElement, elementAssembler)
        }
        else return null
    }

    /**
     * @return {String}
     */
    get prefix() {
        return this.node.prefix
    }

    /**
     * @param {*} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {*}
     */
    get value() {
        return this.node.value
    }

    /**
     *
     * @param {*} [init]
     */
    static create(init) {
        const {
            namespace = this.namespace,
            prefix = this.prefix,
            localName = this.localName
        } = init || this
        let name = init && init.name
        if(!name) {
            name = prefix?
                prefix + __WEBPACK_IMPORTED_MODULE_0__const__["d" /* NAMESPACE_SEPARATOR */] + localName :
                localName
        }
        return namespace?
            document.createAttributeNS(namespace, name) :
            document.createAttribute(name)
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === null
    }

    /**
     * @returns {String}
     */
    static get initPropertyName() {
        return INIT_PROPERTY_NAME
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_1__element__["a" /* ElementAssembler */]
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return Attr
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this === AttrAssembler?
            LOCAL_NAME :
            this.name.toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return __WEBPACK_IMPORTED_MODULE_0__const__["a" /* DEFAULT_NAMESPACE_URI */]
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return __WEBPACK_IMPORTED_MODULE_0__const__["b" /* DEFAULT_PREFIX */]
    }

    /**
     * The qualified name of the element node
     * @returns {String}
     */
    static get qualifiedName() {
        const { prefix, localName } = this
        return prefix?
            prefix + __WEBPACK_IMPORTED_MODULE_0__const__["d" /* NAMESPACE_SEPARATOR */] + localName :
            localName
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return `[${ this.localName }]`
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AttrAssembler;


/**
 *
 * @param {...*} [init]
 * @returns {AttrAssembler}
 */
function attr(...init) {
    return new AttrAssembler(...init)
}

const LOCAL_NAME = attr.name


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export doctype */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__childnode__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__(21);




const { DocumentType, document : { implementation } } = window
const DEFAULT_PUBLIC_ID = ''
const DEFAULT_SYSTEM_ID = ''

/**
 * DocumentType DOM node assembler
 */
class DocumentTypeAssembler extends __WEBPACK_IMPORTED_MODULE_1__childnode__["a" /* ChildNodeAssembler */] {
    /**
     * @param {*} init
     * @returns {init}
     */
    create(init) {
        return typeof init === __WEBPACK_IMPORTED_MODULE_0__const__["g" /* TYPE_STRING */]?
            super.create({ qualifiedName : init }) :
            super.create(init)
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        if(parentNode instanceof __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentAssembler */]) {
            parentNode.doctype = this
        }
        else {
            const node = this.node
            const firstChild = parentNode.firstChild
            if(firstChild) {
                if(firstChild instanceof DocumentType) {
                    parentNode.replaceChild(node, firstChild)
                }
                else parentNode.insertBefore(node, firstChild)
            }
            else parentNode.appendChild(node)
        }
    }

    /**
     * @returns {*}
     */
    get parentNode() {
        return super.parentNode
    }

    /**
     * Create the specified DocumentType node
     * @param {String} [qualifiedName]
     * @param {String} [publicId]
     * @param {String} [systemId]
     * @returns {DocumentType}
     */
    static create({
        qualifiedName = this.qualifiedName,
        publicId = this.publicId,
        systemId = this.systemId
    } = this) {
        return implementation.createDocumentType(qualifiedName, publicId, systemId)
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.documentAssembler.qualifiedName
    }

    /**
     * @returns {String}
     */
    static get publicId() {
        return DEFAULT_PUBLIC_ID
    }

    /**
     * @returns {String}
     */
    static get systemId() {
        return DEFAULT_SYSTEM_ID
    }

    /**
     * @returns {DocumentAssembler}
     */
    static get documentAssembler() {
        return __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentAssembler */]
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return DocumentType
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DocumentTypeAssembler;


/**
 * DocumentType assembler factory
 * @param {Node|{}|String} [init]
 * @returns {DocumentTypeAssembler}
 */
function doctype(...init) {
    return new DocumentTypeAssembler(...init)
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventtarget__ = __webpack_require__(49);


const { Node } = window

/**
 * Node DOM interface assembler
 */
class NodeAssembler extends __WEBPACK_IMPORTED_MODULE_0__eventtarget__["a" /* EventTargetAssembler */] {
    /**
     * @param {*} init
     * @returns {Node|*}
     */
    assemble(init) {
        if(init && init.constructor === Object && init.node instanceof Node) {
            this.node = init.node
            this.init(init)
        }
        else super.assemble(init)
        return this.node
    }

    /**
     * @param {Boolean} deep
     * @returns {NodeAssembler|*}
     */
    cloneNode(deep) {
        return this.getInstance(this.node.cloneNode(deep), this.constructor)
    }

    /**
     * @param {NodeAssembler|Node} object
     * @returns {Number}
     */
    compareDocumentPosition(object) {
        const node = object instanceof NodeAssembler?
            object.node :
            object
        return this.node.compareDocumentPosition(node)
    }

    /**
     * @param {Node|*|null} node
     * @param {Function} [assembler]
     * @returns {TargetAssembler|*}
     */
    getInstance(node, assembler) {
        if(node) {
            const constructor = this.constructor
            if(constructor.hasInstance(node)) {
                return constructor.getInstance(node)
            }
            else {
                return assembler?
                    new assembler({ node }) :
                    constructor.getInstance(node)
            }
        }
        return null
    }

    /**
     * @param {NodeAssembler|Node} object
     * @returns {Boolean}
     */
    isEqualNode(object) {
        const node = object instanceof NodeAssembler?
            object.node :
            object
        return this.node.isEqualNode(node)
    }

    /**
     * @param {String} namespace
     * @returns {String|null}
     */
    lookupPrefix(namespace) {
        return this.node.lookupPrefix(namespace)
    }

    /**
     * @param {String} prefix
     * @returns {String|null}
     */
    lookupNamespaceURI(prefix) {
        return this.node.lookupNamespaceURI(prefix)
    }

    /**
     * @param {String} namespace
     * @returns {Boolean}
     */
    isDefaultNamespace(namespace) {
        return this.node.isDefaultNamespace(namespace)
    }

    /**
     * @param {Node|*} node
     */
    set node(node) {
        if(node !== this.node) {
            const constructor = this.constructor
            if(node instanceof constructor.interface) this.setInstance(node)
            else {
                const message = `Failed to set 'node' on '${ constructor.name }': parameter is not of expected type.`
                throw TypeError(message)
            }
        }
    }

    /**
     * @returns {Node|*}
     */
    get node() {
        return this._target
    }

    /**
     * @returns {Number}
     */
    get nodeType() {
        return this.node.nodeType
    }

    /**
     * @returns {String}
     */
    get nodeName() {
        return this.node.nodeName
    }

    /**
     * @returns {String}
     */
    get baseURI() {
        return this.node.baseURI
    }

    /**
     * @returns {DocumentAssembler}
     */
    get ownerDocument() {
        return this.getInstance(this.node.ownerDocument)
    }

    /**
     * @param {String} nodeValue
     */
    set nodeValue(nodeValue) {
        this.node.nodeValue = nodeValue
    }

    /**
     * @returns {String}
     */
    get nodeValue() {
        return this.node.nodeValue
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return Node
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NodeAssembler;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLMediaElement } = window

class HTMLMediaAssembler extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {Function} HTMLMediaAssembler
     */
    static get baseAssembler() {
        return HTMLMediaAssembler
    }

    /**
     * @returns {window.HTMLMediaElement}
     */
    static get interface() {
        return HTMLMediaElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLMediaAssembler;



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export option */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(9);



const { HTMLOptionElement } = window
const LOCAL_NAME = 'option'

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the Option class from the HTML standard
 * https://www.w3.org/TR/html/sec-forms.html#dom-htmloptionelement-option
 */
class HTMLOption extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.node.label
    }

    /**
     * @param {Boolean} defaultSelected
     */
    set defaultSelected(defaultSelected) {
        this.node.defaultSelected = defaultSelected
    }

    /**
     * @returns {Boolean}
     */
    get defaultSelected() {
        return this.node.defaultSelected
    }

    /**
     * @param {Boolean} selected
     */
    set selected(selected) {
        this.node.selected = selected
    }

    /**
     * @returns {Boolean}
     */
    get selected() {
        return this.node.selected
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {Number}
     */
    get index() {
        return this.node.index
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {window.HTMLOptionElement}
     */
    static get interface() {
        return HTMLOptionElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLOption;


/**
 * @param {*} [init]
 * @returns {HTMLOption}
 */
function option(init) {
    return new HTMLOption(init)
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLModElement } = window

class HTMLModAssembler extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @param {String} dateTime
     */
    set dateTime(dateTime) {
        this.node.dateTime = dateTime
    }

    /**
     * @returns {String}
     */
    get dateTime() {
        return this.node.dateTime
    }

    /**
     * @returns {Function} HTMLModAssembler
     */
    static get baseAssembler() {
        return HTMLModAssembler
    }

    /**
     * @returns {window.HTMLModElement}
     */
    static get interface() {
        return HTMLModElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLModAssembler;



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__td__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__th__ = __webpack_require__(60);




const { map } = Array.prototype
const { HTMLTableRowElement } = window

class Tr extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} [index]
     * @returns {Td}
     */
    insertCell(index) {
        return this.getInstance(this.node.insertCell(index), __WEBPACK_IMPORTED_MODULE_1__td__["a" /* Td */])
    }

    /**
     * @param {Number} index
     */
    deleteCell(index) {
        this.node.deleteCell(index)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        return this.node.rowIndex
    }

    /**
     * @returns {Number}
     */
    get sectionRowIndex() {
        return this.node.sectionRowIndex
    }

    /**
     * @returns {(Td|Th)[]}
     */
    get cells() {
        return map.call(this.node.cells, node => {
            const assembler = node.tagName === 'TH'? __WEBPACK_IMPORTED_MODULE_2__th__["a" /* Th */] : __WEBPACK_IMPORTED_MODULE_1__td__["a" /* Td */]
            return this.getInstance(node, assembler)
        })
    }

    /**
     * @returns {window.HTMLTableRowElement}
     */
    static get interface() {
        return HTMLTableRowElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tr;


/**
 * @param {*} [init]
 * @returns {Tr}
 */
function tr(...init) {
    return new Tr(...init)
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export td */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTableCellElement } = window

class Td extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.node.colSpan
    }
    
    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.node.rowSpan
    }

    /**
     * @param {Th[]} headers
     */
    set headers(headers) {
        this.node.headers = headers.map(({ id }) => id).join(' ')
    }

    /**
     * @returns {Th[]}
     */
    get headers() {
        const headers = this.node.headers
        return headers?
            headers.split(' ').map(id => {
                const node = document.getElementById(id)
                return node && this.getInstance(node/*, Th*/) // fixme
            }) : []
    }

    /**
     * @returns {Number}
     */
    get cellIndex() {
        return this.node.cellIndex
    }

    /**
     * @returns {window.HTMLTableCellElement}
     */
    static get interface() {
        return HTMLTableCellElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Td;


/**
 * @param {*} [init]
 * @returns {Td}
 */
function td(...init) {
    return new Td(...init)
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dommodule__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria_aria__ = __webpack_require__(6);



const { getPrototypeOf } = Object
const { prototype : { map } } = Array
const { document } = window

const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '
const UNIQUE_ID_MULTIPLIER = 1e10

/**
 * https://www.w3.org/TR/role-attribute/
 * https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 */
class RoleAttrAssembler extends __WEBPACK_IMPORTED_MODULE_0_dommodule__["a" /* AttrAssembler */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        const roleList = this.constructor.roleList
        this.node.value = roleList.join(ROLE_SEPARATOR)
        if(init) {
            if(init.constructor === Object) {
                if(init.hasOwnProperty('ownerElement')) {
                    this.ownerElement = init.ownerElement
                }
                if(init.hasOwnProperty('name')) {
                    this.name = init.name
                }
                super.init(init)
            }
            else this.ownerElement.init(init)
        }
        this.classList = roleList
    }

    /**
     * @param {*} items
     */
    after(...items) {
        this.ownerElement.after(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {*} items
     */
    append(...items) {
        this.ownerElement.append(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {*} child
     */
    appendChild(child) {
        this.ownerElement.appendChild(child)
    }

    /**
     * @param {*} items
     */
    before(...items) {
        this.ownerElement.before(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {Function} assembler
     * @returns {*|null}
     */
    closest(assembler) {
        return this.ownerElement.closest(assembler)
    }

    /**
     * @param {NodeAssembler|Node|*} node
     * @returns {Boolean}
     */
    contains(node) {
        return this.ownerElement.contains(node)
    }

    /**
     * @param {*} args
     */
    emit(...args) {
        this.ownerElement.emit(...args)
    }

    /**
     * @param {Function} assembler
     * @param {String} [selectorPart]
     * @returns {*}
     */
    find(assembler, selectorPart) {
        let selector = assembler.selector
        if(selectorPart) selector += selectorPart
        const node = this.ownerElement.node.querySelector(selector)
        if(node) {
            const element = this.getInstance(node)
            const isAttr = assembler === __WEBPACK_IMPORTED_MODULE_0_dommodule__["a" /* AttrAssembler */]
                || __WEBPACK_IMPORTED_MODULE_0_dommodule__["a" /* AttrAssembler */].isPrototypeOf(assembler)
            return isAttr?
                element.getAttributeNode(assembler) :
                element
        }
        return null
    }

    /**
     * @param {Function} assembler
     * @param {String} [selectorPart]
     * @returns {(RoleAttrAssembler|ElementAssembler|*)[]}
     */
    findAll(assembler, selectorPart) {
        let selector = assembler.selector
        if(selectorPart) selector += selectorPart
        const collection = this.ownerElement.node.querySelectorAll(selector)
        const isAttr = assembler === __WEBPACK_IMPORTED_MODULE_0_dommodule__["a" /* AttrAssembler */]
            || __WEBPACK_IMPORTED_MODULE_0_dommodule__["a" /* AttrAssembler */].isPrototypeOf(assembler)
        return map.call(collection, node => {
            const element = this.getInstance(node)
            return isAttr?
                element.getAttributeNode(assembler) :
                element
        })
    }

    /**
     * Focus the owner element
     */
    focus() {
        this.ownerElement.focus()
    }

    /**
     * Generate unique identifier among the document
     * @returns {String}
     */
    generateUniqueId() {
        const doc = this.node.ownerDocument || document
        let id
        do id = this.constructor.generateId()
        while(doc.getElementById(id))
        return id
    }

    /**
     * @param {*} attr
     * @returns {*}
     */
    getAttribute(attr) {
        const instance = this.ownerElement.getAttributeNode(attr)
        if(instance) return instance.value
        else {
            return typeof attr === 'function'?
                attr.defaultValue :
                this.constructor.attrAssembler.defaultValue
        }
    }

    /**
     * @param {Node|NodeAssembler|*} target
     * @returns {RoleAttrAssembler|null|*}
     */
    getRole(target) {
        const instance = this.getInstance(target)
        return instance instanceof RoleAttrAssembler?
            instance :
            instance && instance.role || null
    }

    /**
     * @param {Function|String} attr
     */
    hasAttribute(attr) {
        return this.ownerElement.hasAttribute(attr)
    }

    /**
     * @param {*} items
     */
    prepend(...items) {
        this.ownerElement.prepend(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * Remove the onwer element from a tree
     */
    remove() {
        this.ownerElement.remove()
    }

    /**
     * @param {Function|String} attr
     */
    removeAttribute(attr) {
        this.ownerElement.removeAttribute(attr)
    }

    /**
     * @param {*} child
     */
    removeChild(child) {
        this.ownerElement.removeChild(child)
    }

    /**
     * @param {*} args
     */
    on(...args) {
        this.ownerElement.on(...args)
    }

    /**
     * @param {Function|String} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        this.ownerElement.setAttribute(attr, value)
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(value !== undefined) {
            if(name in this.constructor) void null
            else if(name in this) {
                this[name] = value
            }
            else {
                const ownerElement = this.ownerElement
                if(name in ownerElement) {
                    ownerElement[name] = value
                }
                else if(name in ownerElement.node) {
                    ownerElement.node[name] = value
                }
                else this._onMismatch(name, value)
            }
        }
    }

    /**
     * @param {*} args
     */
    un(...args) {
        this.ownerElement.un(...args)
    }

    /**
     * @param {*} childNodes
     */
    set childNodes(childNodes) {
        this.ownerElement.childNodes = childNodes
    }

    /**
     * @returns {(ChildNodeAssembler)[]}
     */
    get childNodes() {
        return this.ownerElement.childNodes
    }

    /**
     * @param {*} children
     */
    set children(children) {
        this.ownerElement.children = children
    }

    /**
     * @returns {(ElementAssembler)[]}
     */
    get children() {
        return this.ownerElement.children
    }

    /**
     * @param {*} classList
     */
    set classList(classList) {
        this.ownerElement.classList = classList
    }

    /**
     * @returns {DOMTokenList}
     */
    get classList() {
        return this.ownerElement.classList
    }

    /**
     * @param {String} className
     */
    set className(className) {
        this.ownerElement.className = className
    }

    /**
     * @returns {String}
     */
    get className() {
        return this.ownerElement.className
    }

    /**
     * @param {*} dataset
     */
    set dataset(dataset) {
        this.ownerElement.dataset = dataset
    }

    /**
     * @returns {DOMStringMap}
     */
    get dataset() {
        return this.ownerElement.dataset
    }

    /**
     * @returns {Number}
     */
    get elementIndex() {
        return this.ownerElement.elementIndex
    }

    /**
     * @param {String} id
     */
    set id(id) {
        this.ownerElement.id = id
    }

    /**
     * @return {String}
     */
    get id() {
        return this.ownerElement.id || (this.id = this.generateUniqueId())
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.dataset.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.dataset.name
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        const ownerElement = super.ownerElement
        if(ownerElement) return ownerElement
        else {
            const { elementAssembler } = this.constructor
            return this.ownerElement = new elementAssembler
        }
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        this.ownerElement.parentNode = parentNode
    }

    /**
     * @returns {ParentNodeAssembler|*|null}
     */
    get parentNode() {
        return this.ownerElement.parentNode
    }

    /**
     * @param {*} style
     */
    set style(style) {
        this.ownerElement.style = style
    }

    /**
     * @returns {CSSStyleDeclaration}
     */
    get style() {
        return this.ownerElement.style
    }

    /**
     * @param {Number} tabIndex
     */
    set tabIndex(tabIndex) {
        this.ownerElement.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        return this.ownerElement.tabIndex
    }

    /**
     * @param {String} textContent
     */
    set textContent(textContent) {
        this.ownerElement.textContent = textContent
    }

    /**
     * @returns {String}
     */
    get textContent() {
        return this.ownerElement.textContent
    }

    /**
     * @param {*} [init]
     */
    static create(init) {
        return document.createAttribute(this.qualifiedName)
    }
    
    /**
     * @returns {String}
     */
    static generateId() {
        return this.name + Math.floor(Math.random() * UNIQUE_ID_MULTIPLIER)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return true
    }

    /**
     * @returns {Function}
     */
    static get attrAssembler() {
        return __WEBPACK_IMPORTED_MODULE_1__aria_aria__["a" /* ARIAAttrAssembler */]
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return this.abstract?
            `[${ ROLE_ATTR_NAME }]` :
            `[${ ROLE_ATTR_NAME }~=${ this.role }]`
    }

    /**
     * @returns {String}
     */
    static get role() {
        return this.name.toLowerCase()
    }

    /**
     * @returns {String[]}
     */
    static get roleList() {
        const list = []
        let object = this
        do if(object.abstract === false) {
            list.push(object.role)
        }
        while((object = getPrototypeOf(object)) && ROLE_ATTR_NAME in object)
        return list
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoleAttrAssembler;


Object.defineProperties(__WEBPACK_IMPORTED_MODULE_0_dommodule__["c" /* ElementAssembler */].prototype, {
    appendChild : {
        configurable : true,
        writable : true,
        /**
         * @param {AttrAssembler|ChildNodeAssembler|Node|*} child
         */
        value(child) {
            if(child instanceof RoleAttrAssembler) {
                child.parentNode = this.node
            }
            else {
                const object = Object.getPrototypeOf(__WEBPACK_IMPORTED_MODULE_0_dommodule__["c" /* ElementAssembler */])
                object.prototype.appendChild.call(this, child)
            }
        }
    },
    role : {
        configurable : true,
        /**
         * @returns {AttrAssembler}
         */
        get() {
            return this.getAttributeNode(RoleAttrAssembler)
        }
    }
})

Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_dommodule__["c" /* ElementAssembler */], 'selector', {
    configurable : true,
    /**
     * @returns {String}
     */
    get() {
        return this.localName
    }
})


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A widget that may contain navigable descendants or owned children.
 * https://www.w3.org/TR/wai-aria-1.1/#composite
 */
class Composite extends __WEBPACK_IMPORTED_MODULE_0__widget__["a" /* Widget */] {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["a" /* ActiveDescendant */], activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["a" /* ActiveDescendant */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Composite;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export textbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A type of input that allows free-form text as its value.
 * https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
class Textbox extends __WEBPACK_IMPORTED_MODULE_1__input__["a" /* Input */] {
    /**
     * @param {*} init
     */
    init(init) {
        this.children = this.createInput()
        super.init(init)
    }

    /**
     * Creat the HTML input
     */
    createInput() {
        const { inputAssembler } = this.constructor
        return new inputAssembler({
            className : 'input',
            onblur : this.onInputBlur.bind(this),
            onfocus : this.onInputFocus.bind(this)
        })
    }

    /**
     * Focus the input
     */
    focus() {
        this.input.focus()
    }

    /**
     * @param {FocusEvent} event
     */
    onInputBlur(event) {
        this.classList.remove('focus')
    }

    /**
     * @param {FocusEvent} event
     */
    onInputFocus(event) {
        this.classList.add('focus')
    }

    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */], activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */])
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.input.disabled = disabled
        this.classList.toggle('disabled', disabled)
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.input.disabled
    }

    /**
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput|null|*}
     */
    get input() {
        return this.find(this.constructor.inputAssembler)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const instance = this.labelledBy[0]
        if(instance) instance.textContent = label
        else {
            const id = this.id
            const instance = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["h" /* Label */]({
                id : id + '-label',
                htmlFor : this.input.id = id + '-input',
                children : label
            })
            this.labelledBy = [instance]
            this.ownerElement.prepend(instance)
        }
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {Boolean} multiline
     */
    set multiline(multiline) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["w" /* Multiline */], multiline)
    }

    /**
     * @returns {Boolean}
     */
    get multiline() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["w" /* Multiline */])
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @return {String} 
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.input.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.input.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.classList.toggle('readonly', this.input.readOnly = readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.input.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.input.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.input.required
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
        // this.input.defaultValue = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Span
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]
    }

    /**
     * @returns {Function} Input
     */
    static get inputAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["g" /* Input */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Textbox;


/**
 * @param {*} [init]
 * @returns {Textbox}
 */
function textbox(...init) {
    return new Textbox(...init)
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export list */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A section containing listitem elements.
 * https://www.w3.org/TR/wai-aria-1.1/#list
 */
class List extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = List;


/**
 * @param {...*} [init]
 * @returns {List}
 */
function list(...init) {
    return new List(...init)
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridcell__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rowgroup__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rowheader__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aria__ = __webpack_require__(2);










/**
 * A row of cells in a tabular container.
 * https://www.w3.org/TR/wai-aria-1.1/#row
 */
class Row extends __WEBPACK_IMPORTED_MODULE_4__group__["a" /* Group */] {
    /**
     * @returns {RowGroup}
     */
    get body() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_5__rowgroup__["a" /* RowGroup */])
    }

    /**
     * @returns {(Cell)[]}
     */
    get cells() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_1__cell__["a" /* Cell */])
    }

    /**
     * @param {Number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["f" /* ColIndex */], colIndex)
    }

    /**
     * @returns {Number}
     */
    get colIndex() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["f" /* ColIndex */])
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        const table = this.table
        return table && table.disabled || super.disabled
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_2__grid__["a" /* Grid */])
    }

    /**
     * @returns {(GridCell)[]}
     */
    get gridCells() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_3__gridcell__["a" /* GridCell */])
    }

    /**
     * @returns {RowHeader|null}
     */
    get header() {
        return this.find(__WEBPACK_IMPORTED_MODULE_6__rowheader__["a" /* RowHeader */])
    }

    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["t" /* Level */], level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["t" /* Level */])
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["x" /* Multiselectable */], multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["x" /* Multiselectable */])
    }

    /**
     * @returns {Row}
     */
    get nextRow() {
        const element = this.ownerElement.nextElementSibling
        return element && this.getRole(element)
    }

    /**
     * @returns {Row}
     */
    get previousRow() {
        const element = this.ownerElement.previousElementSibling
        return element && this.getRole(element)
    }

    /**
     * @param {Number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["H" /* RowIndex */], rowIndex)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        const index = this.getAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["H" /* RowIndex */])
        return isNaN(index)? this.elementIndex : index
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["I" /* Selected */], selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_8__aria__["I" /* Selected */])
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_7__table__["a" /* Table */])
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["q" /* Tr */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Row;


/**
 * @param {*} [init]
 * @returns {Row}
 */
function row(...init) {
    return new Row(...init)
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rowGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridcell__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__row__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__structure__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table__ = __webpack_require__(17);








/**
 * A structure containing one or more row elements in a tabular container.
 * https://www.w3.org/TR/wai-aria-1.1/#rowgroup
 */
class RowGroup extends __WEBPACK_IMPORTED_MODULE_5__structure__["a" /* Structure */] {
    /**
     * @returns {Table|*|null}
     */
    get table() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_6__table__["a" /* Table */])
    }

    /**
     * @returns {Grid|*|null}
     */
    get grid() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_2__grid__["a" /* Grid */])
    }

    /**
     * @returns {Cell[]}
     */
    get cells() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_1__cell__["a" /* Cell */])
    }

    /**
     * @returns {GridCell[]}
     */
    get gridCells() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_3__gridcell__["a" /* GridCell */])
    }

    /**
     * @returns {Row[]}
     */
    get rows() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_4__row__["a" /* Row */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["k" /* TBody */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RowGroup;


/**
 * @param {...*} [init]
 * @returns {RowGroup}
 */
function rowGroup(...init) {
    return new RowGroup(...init)
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export menuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(70);




/**
 * An option in a set of choices contained by a menu or menubar.
 * https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
class MenuItem extends __WEBPACK_IMPORTED_MODULE_1__command__["a" /* Command */] {
    /**
     * @param {*} init
     */
    init(init) {
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mouseenter', this.onMouseEnter.bind(this))
        this.on('click', this.onClick.bind(this))
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * Stub for extension
     */
    activate() {}

    /**
     * Focus the menu item or it's owner menu
     */
    focus() {
        if(this.hidden) {
            if(this.menu) this.menu.focus()
        }
        else super.focus()
    }

    /**
     * @param {Event} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else {
            event.stopPropagation()
            this.activate()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'ArrowUp' || key === 'ArrowDown') {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        else if(key === ' ' && !event.repeat) {
            event.preventDefault()
            this.classList.add('active')
        }
        else if(key === 'Enter') {
            this.emit('click')
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const items = this.menu.items
        const direction = event.key === 'ArrowUp'? -1 : 1
        let index = items.indexOf(this) + direction
        if(index === items.length) index = 0
        if(index < 0) index = items.length - 1
        items[index].focus()
    }

    /**
     * @param { KeyboardEvent } event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click')
            // if(node.href) window.location.href = node.href
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseEnter(event) {
        this.focus()
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        const menu = this.menu
        return Boolean(menu) && menu.hidden || super.hidden
    }

    /**
     * @returns {Menu|null}
     */
    get menu() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuItem;


/**
 * @param {*} [init]
 * @returns {MenuItem}
 */
function menuItem(...init) {
    return new MenuItem(...init)
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__target__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(7);



const { CustomEvent, EventTarget } = window

class EventTargetAssembler extends __WEBPACK_IMPORTED_MODULE_0__target__["a" /* TargetAssembler */] {
    /**
     * @param {String} eventType
     * @param {CustomEventInit|{}} [eventInit]
     */
    emit(eventType, eventInit) {
        const event = new CustomEvent(eventType, eventInit)
        this._target.dispatchEvent(event)
    }

    /**
     * @param {String} type
     * @param {Function} callback
     * @param {Object} [capture=false]
     * @returns {EventTargetAssembler}
     */
    on(type, callback, capture = false) {
        this._target.addEventListener(type, callback, capture)
        return this
    }

    /**
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} [capture=false]
     * @returns {EventTargetAssembler}
     */
    un(type, callback, capture = false) {
        this._target.removeEventListener(type, callback, capture)
        return this
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return EventTarget
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventTargetAssembler;


Object.defineProperty(
    EventTarget.prototype,
    __WEBPACK_IMPORTED_MODULE_1__const__["c" /* INSTANCE_PROPERTY_NAME */], {
        writable : true,
        value : null
    })


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);


const INIT_PROPERTY_NAME = 'init'

class TargetAssembler {
    /**
     * Create the assembler instance and assemble the specified object
     * Initializes the object by all passed init arguments
     * @param {*} [init]
     */
    constructor(init) {
        this.assemble(init)
    }

    /**
     * Instantiate and initialize the specified object
     * @param {*} [init] initializing dictionary
     * @returns {Object|*}
     */
    assemble(init) {
        this.create(init)
        this.init(init)
        return this._target
    }

    /**
     * Create the specified object
     * @param {*} [init] initializing dictionary
     * @returns {Object|*}
     */
    create(init) {
        const target = this.constructor.create(init)
        this.setInstance(target)
        return target
    }

    /**
     * @param {Object|*} target
     */
    setInstance(target) {
        this._target = target
        target[__WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */]] = this
    }

    /**
     * Initialize the object with the defined properties
     * @param {*} [init] initializing dictionary
     * @returns {Boolean}
     */
    init(init) {
        if(init && init.constructor === Object) {
            this.assign(init)
        }
        else if(init) {
            this.assign({ [this.constructor.initPropertyName] : init })
        }
        else this.assign({})
    }

    /**
     * @param {*} init
     */
    assign(init) {
        for(let prop in init) {
            this.setProperty(prop, init[prop])
        }
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(value !== undefined) {
            if(name in this.constructor) void null
            else if(name in this) {
                this[name] = value
            }
            else if(name in this._target) {
                this._target[name] = value
            }
            else this._onMismatch(name, value)
        }
    }

    /**
     * The init property mismatch handler
     * @param {String} prop mismatched property name
     * @param {*} value mismatched property value
     */
    _onMismatch(prop, value) {
        const propval = prop + `="${ value }"`
        const name = this.constructor.name
        const message = `The property ${ propval } is not found on the ${ name } instance`
        console.warn(this, message)
    }

    /**
     * Stub for extension
     */
    static create() {
        throw Error(`Could not create an abstract ${ this.name } instance`)
    }

    /**
     * @param {Object|*} target
     * @returns {Boolean}
     */
    static hasInstance(target) {
        return target.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */])
    }

    /**
     * @param {TargetAssembler|Object|*} target
     * @returns {TargetAssembler|*|null}
     */
    static getInstance(target) {
        return target instanceof TargetAssembler?
            target :
            target[__WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */]]
    }

    /**
     * @returns {String}
     */
    static get initPropertyName() {
        return INIT_PROPERTY_NAME
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TargetAssembler;


Object.defineProperty(
    TargetAssembler.prototype,
    '_target', {
        writable : true,
        value : null
    })


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export comment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__characterdata__ = __webpack_require__(24);


const { Comment, document } = window

/**
 * Comment DOM node assembler
 */
class CommentAssembler extends __WEBPACK_IMPORTED_MODULE_0__characterdata__["a" /* CharacterDataAssembler */] {
    /**
     * Create the specified Comment node
     * @param {String} data
     * @returns {Comment}
     */
    static create({ data = this.data } = this) {
        return document.createComment(data)
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return Comment
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommentAssembler;


/**
 * Comment assembler factory
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {CommentAssembler}
 */
function comment(...init) {
    return new CommentAssembler(...init)
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fragment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parentnode__ = __webpack_require__(23);


const { DocumentFragment, document } = window

/**
 * DocumentFragment DOM node assembler
 */
class DocumentFragmentAssembler extends __WEBPACK_IMPORTED_MODULE_0__parentnode__["a" /* ParentNodeAssembler */] {
    /**
     * Create a new DocumentFragment node
     * @returns {DocumentFragment}
     */
    static create(init) {
        return document.createDocumentFragment()
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return DocumentFragment
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DocumentFragmentAssembler;


/**
 * DocumentFragment assembler factory
 * @param {{}|*} [init]
 * @returns {DocumentFragmentAssembler}
 */
function fragment(...init) {
    return new DocumentFragmentAssembler(...init)
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export instruction */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__characterdata__ = __webpack_require__(24);


const { keys } = Object
const { ProcessingInstruction, document } = window
const PI_ATTRIBUTES_SEPARATOR = ' '
const PI_ATTRIBUTES_SEPARATOR_RE = /\s+/

/**
 * ProcessingInstruction DOM node assembler
 */
class ProcessingInstructionAssembler extends __WEBPACK_IMPORTED_MODULE_0__characterdata__["a" /* CharacterDataAssembler */] {
    /**
     * @param {{}} attrset
     */
    set attrset(attrset) {
        const result = []
        keys(attrset).forEach(key => {
            if(key) result.push(key + `="${ attrset[key] }"`)
        })
        this.data = result.join(PI_ATTRIBUTES_SEPARATOR)
    }

    /**
     * @returns {{}}
     */
    get attrset() {
        const data = this.data.split(PI_ATTRIBUTES_SEPARATOR_RE)
        return data.reduce((res, pair) => {
            const [key, value] = pair.split('=')
            res[key] = value.substr(1, value.length - 2)
            return res
        }, {})
    }

    /**
     * Create the specified ProcessingInstruction node
     * @param {String} [target]
     * @param {String} [data]
     * @returns {ProcessingInstruction}
     */
    static create({
        target = this.target, 
        data = this.data
    } = this) {
        return document.createProcessingInstruction(target, data)
    }

    /**
     * The processing instruction default target
     * @returns {String}
     */
    static get target() {
        return this === ProcessingInstructionAssembler?
            instruction.name :
            this.name.toLowerCase()
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return ProcessingInstruction
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProcessingInstructionAssembler;


/**
 * ProcessingInstruction assembler factory (alias)
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {ProcessingInstructionAssembler}
 */
function instruction(...init) {
    return new ProcessingInstructionAssembler(...init)
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export text */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__characterdata__ = __webpack_require__(24);


const { Text, document } = window

/**
 * Text DOM node assembler
 */
class TextAssembler extends __WEBPACK_IMPORTED_MODULE_0__characterdata__["a" /* CharacterDataAssembler */] {
    /**
     * Create the specified Text node
     * @param {String} data
     * @returns {Text}
     */
    static create({ data = this.data } = this) {
        return document.createTextNode(data)
    }

    /**
     * @returns {Function}
     */
    static get interface() {
        return Text
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextAssembler;


/**
 * Text assembler factory
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {TextAssembler}
 */
function text(...init) {
    return new TextAssembler(...init)
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export area */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyperlink__ = __webpack_require__(33);


const { HTMLAreaElement } = window

class Area extends __WEBPACK_IMPORTED_MODULE_0__hyperlink__["a" /* HTMLHyperlinkAssembler */] {
    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {String} coords
     */
    set coords(coords) {
        this.node.coords = coords
    }

    /**
     * @returns {String}
     */
    get coords() {
        return this.node.coords
    }

    /**
     * @param {String} shape
     */
    set shape(shape) {
        this.node.shape = shape
    }

    /**
     * @returns {String}
     */
    get shape() {
        return this.node.shape
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @param {String} download
     */
    set download(download) {
        this.node.download = download
    }

    /**
     * @returns {String}
     */
    get download() {
        return this.node.download
    }

    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }

    /**
     * @returns {DOMTokenList}
     */
    get relList() {
        return this.node.relList
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {window.HTMLAreaElement}
     */
    static get interface() {
        return HTMLAreaElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Area;


/**
 * @param {*} [init]
 * @returns {Area}
 */
function area(...init) {
    return new Area(...init)
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export caption */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTableCaptionElement } = window

class Caption extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLTableCaptionElement}
     */
    static get interface() {
        return HTMLTableCaptionElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Caption;


/**
 * @param {*} [init]
 * @returns {Caption}
 */
function caption(...init) {
    return new Caption(...init)
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export html */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLHtmlElement } = window

class Html extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLHtmlElement}
     */
    static get interface() {
        return HTMLHtmlElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Html;


/**
 * @param {*} [init]
 * @returns {Html}
 */
function html(...init) {
    return new Html(...init)
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export optgroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLOptGroupElement } = window

class OptGroup extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String} 
     */
    get label() {
        return this.node.label
    }

    /**
     * @returns {window.HTMLOptGroupElement}
     */
    static get interface() {
        return HTMLOptGroupElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OptGroup;


/**
 * @param {*} [init]
 * @returns {OptGroup}
 */
function optgroup(...init) {
    return new OptGroup(...init)
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export thead */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tbody__ = __webpack_require__(25);


class THead extends __WEBPACK_IMPORTED_MODULE_0__tbody__["a" /* TBody */] {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = THead;


/**
 * @param {*} [init]
 * @returns {THead}
 */
function thead(...init) {
    return new THead(...init)
}

const LOCAL_NAME = thead.name


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export th */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__td__ = __webpack_require__(41);


class Th extends __WEBPACK_IMPORTED_MODULE_0__td__["a" /* Td */] {
    /**
     * @param {String} scope
     */
    set scope(scope) {
        this.node.scope = scope
    }

    /**
     * @returns {String}
     */
    get scope() {
        return this.node.scope
    }

    /**
     * @param {String} abbr
     */
    set abbr(abbr) {
        this.node.abbr = abbr
    }

    /**
     * @returns {String} 
     */
    get abbr() {
        return this.node.abbr
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Th;


/**
 * @param {*} [init]
 * @returns {Th}
 */
function th(...init) {
    return new Th(...init)
}

const LOCAL_NAME = th.name


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tfoot */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tbody__ = __webpack_require__(25);


class TFoot extends __WEBPACK_IMPORTED_MODULE_0__tbody__["a" /* TBody */] {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TFoot;


/**
 * @param {*} [init]
 * @returns {TFoot}
 */
function tfoot(...init) {
    return new TFoot(...init)
}

const LOCAL_NAME = tfoot.name


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


const TOKEN_FALSE = 'false'
const TOKEN_NONE = 'none'
const TOKEN_OFF = 'off'
const TOKEN_UNDEFINED = 'undefined'

class TokenAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {*} value {String|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || value === TOKEN_UNDEFINED
    }
}
/* harmony export (immutable) */ __webpack_exports__["i"] = TokenAttrType;


class Autocomplete extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}
/* unused harmony export Autocomplete */


class Checked extends TokenAttrType {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Checked;


class Current extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Current;


class Expanded extends TokenAttrType {}
/* harmony export (immutable) */ __webpack_exports__["c"] = Expanded;


class Grabbed extends TokenAttrType {}
/* harmony export (immutable) */ __webpack_exports__["d"] = Grabbed;


class Invalid extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = Invalid;


class Live extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_OFF
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = Live;


class Orientation extends TokenAttrType {}
/* harmony export (immutable) */ __webpack_exports__["g"] = Orientation;


class Selected extends TokenAttrType {}
/* harmony export (immutable) */ __webpack_exports__["h"] = Selected;


class Sort extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}
/* unused harmony export Sort */



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_htmlmodule__ = __webpack_require__(1);



const { document } = window
const { SHOW_ELEMENT, FILTER_ACCEPT, FILTER_REJECT } = NodeFilter

/**
 * @param {Node} node
 * @returns {Number}
 */
function iteratorHandler(node) {
    const { tabIndex, disabled, hidden, type } = node
    return tabIndex < 0 || disabled || hidden || type === 'hidden'?
        FILTER_REJECT :
        FILTER_ACCEPT
}

/**
 * A dialog is a descendant window of the primary window of a web application.
 * https://www.w3.org/TR/wai-aria-1.1/#dialog
 */
class Dialog extends __WEBPACK_IMPORTED_MODULE_0__window__["a" /* ARIAWindow */] {
    /**
     * @param {*} init
     */
    init(init) {
        this._trigger = null
        this.classList = 'popup'
        super.init(init)
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
        setTimeout(() => {
            this.ownerDocument.on('click', this.onDocumentClick)
            this.ownerDocument.on('keydown', this.onDocumentKeyDown)
        }, 0)
    }

    /**
     * @param {*} trigger
     */
    bindTrigger(trigger) {
        this.onTriggerKeyDown = this.onTriggerKeyDown.bind(this)
        trigger.on('keydown', this.onTriggerKeyDown)
        trigger.controls = this
        if(trigger.expanded === 'false') {
            trigger.expanded = 'true'
        }
    }

    /**
     * Unsetup trigger
     */
    unbindTrigger() {
        const trigger = this._trigger
        trigger.un('keydown', this.onTriggerKeyDown)
        if(trigger.controls.length) {
            trigger.controls = null
        }
    }

    /**
     * Focus the first widget inside the dialog
     */
    focus() {
        const widget = this.widgets[0]
        if(widget) widget.focus()
    }

    /**
     * @returns {Boolean}
     */
    focusTrigger() {
        const trigger = this.trigger
        if(trigger && typeof trigger.focus === 'function') {
            trigger.focus()
            return true
        }
        return false
    }

    /**
     * Cancel and remove the dialog
     */
    cancel() {
        this.emit('cancel', { bubbles : true, cancelable : true })
        this.remove()
    }

    /**
     * @param {Node} target
     */
    onDocumentClick({ target }) {
        if(this.assertive) {
            if(this.modal) this.focus()
        }
        else {
            const trigger = this.trigger
            if(this.contains(target) || (trigger && trigger.contains(target))) {
                void null
            }
            else this.cancel()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDocumentKeyDown(event) {
        const key = event.key
        if(key === 'Escape') this.onEscapeKeyDown(event)
        if(key === 'Tab') this.onTabKeyDown(event)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(!this.assertive) this.cancel()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        const widgets = this.widgets
        const last = widgets[widgets.length - 1]
        if(!event.shiftKey && event.target === last) {
            event.preventDefault()
            this.focusTrigger() || this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTriggerKeyDown(event) {
        if(event.key === 'Tab' && event.shiftKey) {
            const widgets = this.widgets
            const last = widgets[widgets.length - 1]
            if(last) {
                event.preventDefault()
                last.focus()
            }
        }
        if(event.key === 'Escape' && !this.assertive) {
            this.cancel()
        }
    }

    /**
     * Remove the dialog
     */
    remove() {
        const trigger = this.trigger
        if(trigger) {
            if(trigger.expanded === 'true') {
                trigger.expanded = 'false'
            }
            this.focusTrigger()
            this.trigger = null
        }
        this.ownerDocument.un('click', this.onDocumentClick)
        this.ownerDocument.un('keydown', this.onDocumentKeyDown)
        super.remove()
    }

    /**
     * @param {Boolean} assertive
     */
    set assertive(assertive) {
        this.classList.toggle('assertive', assertive)
    }

    /**
     * @returns {Boolean}
     */
    get assertive() {
        return this.classList.contains('assertive')
    }

    set autofocus(autofocus) {
        if(autofocus) {
            setTimeout(() => this.focus(), 0)
        }
    }

    /**
     * @param {*} trigger
     */
    set trigger(trigger) {
        const _trigger = this._trigger
        if(trigger && !_trigger) this.bindTrigger(trigger)
        else if(_trigger && !trigger) this.unbindTrigger()
        else if(trigger && _trigger) {
            this.trigger = null
            this.trigger = trigger
        }
        this._trigger = trigger
    }

    /**
     * @returns {null|RoleType}
     */
    get trigger() {
        return this._trigger
    }

    /**
     * @returns {Array}
     */
    get widgets() {
        const iterator = document.createNodeIterator(
            this.ownerElement.node,
            SHOW_ELEMENT,
            iteratorHandler)
        const widgets = []
        let node
        while(node = iterator.nextNode()) widgets.push(node)
        return widgets
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {String}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_1_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dialog;


/**
 * @param {*} [init]
 * @returns {Dialog}
 */
function dialog(...init) {
    return new Dialog(...init)
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__roletype__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A browser or application window.
 * https://www.w3.org/TR/wai-aria-1.1/#window
 *
 * The `ARIA` prefix is used to avoid a confilct
 * with the native `Window` interface from the HTML standard
 * https://www.w3.org/TR/html/browsers.html#the-window-object
 */
class ARIAWindow extends __WEBPACK_IMPORTED_MODULE_0__roletype__["a" /* RoleType */] {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["l" /* Expanded */])
    }

    /**
     * @param {Boolean} modal
     */
    set modal(modal) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["v" /* Modal */], modal)
    }

    /**
     * @returns {Boolean}
     */
    get modal() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["v" /* Modal */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ARIAWindow;



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export document */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * An element containing content that assistive
 * technology users may want to browse in a reading mode.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#document
 *
 * The `ARIA` prefix is used to avoid a confilct
 * with the native `Document` interface from the DOM standard
 * https://www.w3.org/TR/dom/#document
 */
class ARIADocument extends __WEBPACK_IMPORTED_MODULE_1__structure__["a" /* Structure */] {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["l" /* Expanded */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }

    /**
     * @returns {String}
     */
    static get role() {
        return this === ARIADocument? ROLE_TYPE : super.role
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ARIADocument;


/**
 * @param {*} [init]
 * @returns {ARIADocument}
 */
function document(...init) {
    return new ARIADocument(...init)
}

const ROLE_TYPE = document.name


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export columnHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__(12);



const COLUMN_HEADER_SCOPE = 'col'

/**
 * A cell containing header information for a column.
 * https://www.w3.org/TR/wai-aria-1.1/#columnheader
 */
class ColumnHeader extends __WEBPACK_IMPORTED_MODULE_1__cell__["a" /* Cell */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.ownerElement.scope = COLUMN_HEADER_SCOPE
        super.init(init)
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["p" /* Th */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColumnHeader;


/**
 * @param {*} [init]
 * @returns {ColumnHeader}
 */
function columnHeader(...init) {
    return new ColumnHeader(...init)
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rowHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__(12);



const ROW_HEADER_SCOPE = 'row'

/**
 * A cell containing header information for a row in a grid.
 * https://www.w3.org/TR/wai-aria-1.1/#rowheader
 */
class RowHeader extends __WEBPACK_IMPORTED_MODULE_1__cell__["a" /* Cell */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.ownerElement.scope = ROW_HEADER_SCOPE
        super.init(init)
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["p" /* Th */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RowHeader;


/**
 * @param {*} [init]
 * @returns {RowHeader}
 */
function rowHeader(...init) {
    return new RowHeader(...init)
}


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structure__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A structure that labels or summarizes the topic of its related section.
 * https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 */
class SectionHead extends __WEBPACK_IMPORTED_MODULE_0__structure__["a" /* Structure */] {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["l" /* Expanded */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SectionHead;



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export listItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A single item in a list or directory.
 * https://www.w3.org/TR/wai-aria-1.1/#listitem
 */
class ListItem extends __WEBPACK_IMPORTED_MODULE_1__section__["a" /* Section */] {
    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["t" /* Level */], level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["t" /* Level */])
    }

    /**
     * @param {Number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["A" /* PosInSet */], posInSet)
    }

    /**
     * @returns {Number}
     */
    get posInSet() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["A" /* PosInSet */])
    }

    /**
     * @param {Number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["J" /* SetSize */], setSize)
    }

    /**
     * @returns {Number}
     */
    get setSize() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["J" /* SetSize */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ListItem;


/**
 * @param {*} [init]
 * @returns {ListItem}
 */
function listItem(...init) {
    return new ListItem(...init)
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuitem__ = __webpack_require__(48);




/**
 * A type of widget that offers a list of choices to the user.
 * https://www.w3.org/TR/wai-aria-1.1/#menu
 */
class Menu extends __WEBPACK_IMPORTED_MODULE_1__select__["a" /* Select */] {
    /**
     * @param {*} init
     */
    init(init) {
        this._trigger = null
        super.init(init)
    }

    focus() {
        if(this.trigger) {
            this.trigger.focus()
        }
    }

    /**
     * @returns {[MenuItem]}
     */
    get items() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__menuitem__["a" /* MenuItem */])
    }

    /**
     * @param {RoleAttrAssembler} trigger
     */
    set trigger(trigger) {
        this._trigger = trigger
    }

    /**
     * @returns {RoleAttrAssembler}
     */
    get trigger() {
        return this._trigger
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_htmlmodule_lib_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radiogroup__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aria__ = __webpack_require__(2);






const LEFT_UP = ['ArrowLeft', 'ArrowUp']

/**
 * A checkable input in a group of elements with the same role,
 * only one of which can be checked at a time.
 * https://www.w3.org/TR/wai-aria-1.1/#radio
 */
class Radio extends __WEBPACK_IMPORTED_MODULE_2__input__["a" /* Input */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        super.init(init)
        this.tabIndex = this.checked? 0 : -1
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else this.checked = 'true'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(event.key.startsWith('Arrow')) {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        if(key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.classList.add('active')
        }
        if(key === 'Enter') this.submitForm()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        let radio = this
        do {
            radio = LEFT_UP.includes(event.key)?
                radio.prev :
                radio.next
        }
        while(radio.disabled)
        if(radio !== this) {
            radio.checked = 'true'
            radio.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.ownerElement.click()
        }
    }

    /**
     * Submit the owner form
     */
    submitForm() {
        const form = this.closest(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["e" /* Form */])
        if(form) {
            form.emit('submit', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        this.tabIndex = checked === 'true'? 0 : -1
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["d" /* Checked */], checked)
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_4__aria__["d" /* Checked */])
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        const group = this.group
        return group && group.disabled || super.disabled
    }

    /**
     * @returns {RadioGroup|*|null}
     */
    get group() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_3__radiogroup__["a" /* RadioGroup */])
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const id = this.id + '-label'
        super.children = [
            new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]({ className : 'box' }),
            this.labelledBy = new __WEBPACK_IMPORTED_MODULE_1_htmlmodule_lib_index__["h" /* Label */]({ id, children : label })
        ]
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @returns {Radio}
     */
    get next() {
        const radios = this.group.radios
        let index = radios.indexOf(this) + 1
        if(index === radios.length) index = 0
        return radios[index]
    }

    set parentNode(parentNode) {
        super.parentNode = parentNode
    }

    get parentNode() {
        return super.parentNode
    }

    /**
     * @returns {Radio}
     */
    get prev() {
        const radios = this.group.radios
        let index = radios.indexOf(this) - 1
        if(index < 0) index = radios.length - 1
        return radios[index]
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.dataset.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value || ''
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Radio;


/**
 * @param {*} [init]
 * @returns {Radio}
 */
function radio(...init) {
    return new Radio(...init)
}


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export radioGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio__ = __webpack_require__(71);





/**
 * A group of radio buttons.
 * https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
class RadioGroup extends __WEBPACK_IMPORTED_MODULE_2__select__["a" /* Select */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const observer = new MutationObserver(mutations => {
            mutations.forEach(record => {
                if(record.attributeName === 'aria-checked') {
                    this.onChecked(record)
                }
            })
        })
        observer.observe(this.ownerElement.node, {
            attributes : true,
            subtree : true
        })
        if(this.disabled) {
            this.radios.forEach(radio => radio.disabled = true)
        }
    }

    onChecked(record) {
        const checked = record.target.getAttribute('aria-checked')
        if(checked === 'true') {
            const target = this.getRole(record.target)
            const value = this.value
            this.radios.forEach(radio => {
                if(radio === target) {
                    this.value = radio.value
                }
                else radio.checked = 'false'
            })
            if(this.value !== value) {
                this.emit('change', { bubbles : true })
            }
        }
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.radios.forEach(radio => radio.disabled = disabled)
        super.disabled = this.input.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput}
     */
    get input() {
        return this._input || (this._input = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["g" /* Input */]({
            parentNode : this,
            type : 'hidden'
        }))
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const id = this.id + '-label'
        const instance = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["h" /* Label */]({ id, children : label })
        this.ownerElement.prepend(this.labelledBy = instance)
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {Radio[]} radios
     */
    set radios(radios) {
        this.append(radios)
        const checkedRadio = this.find(__WEBPACK_IMPORTED_MODULE_3__radio__["a" /* Radio */], '[aria-checked=true]')
        if(checkedRadio) {
            this.value = checkedRadio.value
        }
        else {
            const all = this.findAll(__WEBPACK_IMPORTED_MODULE_3__radio__["a" /* Radio */])
            const filtered = all.filter(({ disabled }) => !disabled)
            const radio = filtered[0]
            if(radio) radio.tabIndex = 0
        }

    }

    /**
     * @returns {Radio[]}
     */
    get radios() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_3__radio__["a" /* Radio */])
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["C" /* ReadOnly */])
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RadioGroup;


/**
 * @param {*} [init]
 * @returns {RadioGroup}
 */
function radioGroup(...init) {
    return new RadioGroup(...init)
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * An input representing a range of values that can be set by the user.
 * https://www.w3.org/TR/wai-aria-1.1/#range
 *
 * The `ARIA` prefix is used to avoid a confilct
 * with the native `Range` class from the DOM standard
 * https://www.w3.org/TR/dom/#range
 */
class ARIARange extends __WEBPACK_IMPORTED_MODULE_0__widget__["a" /* Widget */] {
    /**
     * @param {Number} valueMax
     */
    set valueMax(valueMax) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["K" /* ValueMax */], valueMax)
    }

    /**
     * @returns {Number}
     */
    get valueMax() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["K" /* ValueMax */])
    }
    
    /**
     * @param {Number} valueMin
     */
    set valueMin(valueMin) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["L" /* ValueMin */], valueMin)
    }

    /**
     * @returns {Number}
     */
    get valueMin() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["L" /* ValueMin */])
    }
    
    /**
     * @param {Number} valueNow
     */
    set valueNow(valueNow) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["M" /* ValueNow */], valueNow)
    }

    /**
     * @returns {Number}
     */
    get valueNow() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["M" /* ValueNow */])
    }

    /**
     * @param {String} valueText
     */
    set valueText(valueText) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["N" /* ValueText */], valueText)
    }

    /**
     * @returns {String}
     */
    get valueText() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["N" /* ValueText */])
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ARIARange;



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export status */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A type of live region whose content is advisory information
 * for the user but is not important enough to justify an alert,
 * often but not necessarily presented as a status bar.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#status
 */
class Status extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @param {String} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["u" /* Live */])? super.live : 'polite'
    }

    /**
     * @param {Boolean} atomic
     */
    set atomic(atomic) {
        super.atomic = atomic
    }

    /**
     * @returns {Boolean}
     */
    get atomic() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["b" /* Atomic */])? super.atomic : true
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Status;


/**
 * @param {...*} [init]
 * @returns {Status}
 */
function status(...init) {
    return new Status(...init)
}


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabpanel__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




class Tab extends __WEBPACK_IMPORTED_MODULE_0__widget__["a" /* Widget */] {
    /**
     * @param {{}} [init]
     */
    init(init) {
        this._panel = null
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * @param {TabPanel|null} panel
     */
    set panel(panel) {
        if(panel instanceof __WEBPACK_IMPORTED_MODULE_1__tabpanel__["a" /* TabPanel */]) {
            this.controls = this._panel = panel
        }
        else this.controls = this._panel = null
    }

    /**
     * @returns {TabPanel|null}
     */
    get panel() {
        return this._panel
    }

    /**
     * @param {Number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["A" /* PosInSet */], posInSet)
    }

    /**
     * @returns {Number}
     */
    get posInSet () {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["A" /* PosInSet */])
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        this.controls.forEach(panel => {
            if(panel) panel.expanded = selected
        })
        this.tabIndex = selected === 'true'? 0 : -1
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["I" /* Selected */], selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["I" /* Selected */]) || 'false'
    }

    /**
     * @param {Number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["J" /* SetSize */], setSize)
    }

    /**
     * @returns {Number}
     */
    get setSize () {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["J" /* SetSize */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tab;



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section__ = __webpack_require__(3);



class TabPanel extends __WEBPACK_IMPORTED_MODULE_1__section__["a" /* Section */] {
    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
    
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TabPanel;



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treeitem__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria__ = __webpack_require__(2);





/**
 * A type of list that may contain sub-level
 * nested groups that can be collapsed and expanded.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#tree
 */
class Tree extends __WEBPACK_IMPORTED_MODULE_1__select__["a" /* Select */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const item = this.items[0]
        if(item) item.tabIndex = 0
        this.on('focus', this.onFocus.bind(this), true)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const element = this.getInstance(event.target)
        const role = element.role
        if(role instanceof __WEBPACK_IMPORTED_MODULE_2__treeitem__["a" /* TreeItem */]) {
            this.items.forEach(item => {
                item.tabIndex = item === role? 0 : -1
            })
        }
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["x" /* Multiselectable */], multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["x" /* Multiselectable */])
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["E" /* Required */], 'true')
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["E" /* Required */])
    }

    /**
     * @returns {Array}
     */
    get items() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__treeitem__["a" /* TreeItem */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tree;


/**
 * @param {*} [init]
 * @returns {Tree}
 */
function tree(...init) {
    return new Tree(...init)
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export treeItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listitem__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tree__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aria__ = __webpack_require__(2);







/**
 * An option item of a tree. This is an element within a tree that may be expanded
 * or collapsed if it contains a sub-level group of tree item elements.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#treeitem
 */
class TreeItem extends __WEBPACK_IMPORTED_MODULE_3__listitem__["a" /* ListItem */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = -1
        this.selected = 'false'
        this.on('focus', this.onFocus.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('dblclick', this.onDoubleClick.bind(this))
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onDoubleClick(event) {
        event.stopPropagation()
        this.toggle()
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        this.selected = 'true'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(event.target === this.ownerElement.node) {
            if(key === 'Enter') this.onEnterKeyDown(event)
            if(key === ' ') this.onSpaceKeyDown(event)
            if(key.startsWith('Arrow')) this.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.toggle()
    }
    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        this.toggle()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        event.preventDefault()
        switch(event.key) {
            case 'ArrowUp': this.onArrowUpKeyDown(event); break
            case 'ArrowRight': this.onArrowRightKeyDown(event); break
            case 'ArrowDown': this.onArrowDownKeyDown(event); break
            case 'ArrowLeft': this.onArrowLeftKeyDown(event); break
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        const parent = this.parent
        if(parent) {
            const items = parent.items.filter(({ hidden }) => !hidden)
            const index = items.indexOf(this)
            const prevItem = items[index - 1]
            if(prevItem) prevItem.focus()
            else if(parent instanceof TreeItem) {
                parent.focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        if(this.expanded === 'false') this.expanded = 'true'
        else {
            const items = this.items
            if(items.length) items[0].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        if(this.expanded === 'true') this.items[0].focus()
        else {
            const items = this.tree.items.filter(({ hidden }) => !hidden)
            const index = items.indexOf(this)
            const item = items[index + 1]
            if(item) item.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        if(this.expanded === 'true') this.expanded = 'false'
        else {
            const parent = this.parent
            if(parent instanceof TreeItem) parent.focus()
        }
    }

    /**
     * Toggle the expanded state of tree item
     */
    toggle() {
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false')
        }
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        if(!this.expanded) {
            const button = new __WEBPACK_IMPORTED_MODULE_1__button__["a" /* Button */]({
                onclick : () => this.toggle(),
                tabIndex : NaN,
                className : ''
            })
            this.prepend(button)
        }
        super.expanded = expanded
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {Group|null} group
     */
    set group(group) {
        if(group) this.append(group)
        else {
            const group = this.group
            if(group) group.remove()
        }
    }

    /**
     * @returns {Group|null}
     */
    get group() {
        return this.find(__WEBPACK_IMPORTED_MODULE_2__group__["a" /* Group */])
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        let parent = this
        let hidden = false
        do {
            parent = parent.parent
            if(parent.expanded === 'false') {
                hidden = true
                break
            }
        }
        while(parent instanceof TreeItem)
        return hidden || super.hidden
    }

    /**
     * @returns {TreeItem[]}
     */
    get items() {
        return this.findAll(TreeItem)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const id = this.id + '-label'
        const instance = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["h" /* Label */]({ id, children : label })
        this.ownerElement.prepend(this.labelledBy = instance)
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }
    
    /**
     * @returns {TreeItem|null}
     */
    get parent() {
        return this.parentNode.closest(TreeItem) || this.closest(__WEBPACK_IMPORTED_MODULE_4__tree__["a" /* Tree */])
    }

    /**
     * @returns {Tree|null}
     */
    get tree() {
        return this.closest(__WEBPACK_IMPORTED_MODULE_4__tree__["a" /* Tree */])
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        if(selected === 'true') {
            this.tree.items.forEach(item => item.selected = 'false')
        }
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["I" /* Selected */], selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["I" /* Selected */])
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["d" /* Checked */], checked)
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["d" /* Checked */])
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TreeItem;


/**
 * @param {*} [init]
 * @returns {TreeItem}
 */
function treeItem(...init) {
    return new TreeItem(...init)
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tests_link_test__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tests_button_test__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_checkbox_test__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tests_radiogroup_test__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tests_listbox_test__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tests_textbox_test__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tests_selectbox_test__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tests_combobox_test__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tests_menu_test__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tests_dialog_test__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tests_tree_test__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tests_grid_test__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tests_tablist_test__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tests_slider_test__ = __webpack_require__(250);
















/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_index__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Link')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib_index__["o" /* Link */]({
                href : '//yandex.ru',
                children : 'Simple'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib_index__["o" /* Link */]({
                href : '//google.ru',
                rel : 'external',
                children : 'External'
            })
        ])
    ]
})


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = a;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyperlink__ = __webpack_require__(33);


const { HTMLAnchorElement } = window

class A extends __WEBPACK_IMPORTED_MODULE_0__hyperlink__["a" /* HTMLHyperlinkAssembler */] {
    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @param {String} download
     */
    set download(download) {
        this.node.download = download
    }

    /**
     * @returns {String}
     */
    get download() {
        return this.node.download
    }
    
    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }

    /**
     * @param {String} rev
     */
    set rev(rev) {
        this.node.rev = rev
    }

    /**
     * @returns {String}
     */
    get rev() {
        return this.node.rev
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {window.HTMLAnchorElement}
     */
    static get interface() {
        return HTMLAnchorElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = A;


/**
 * @param {*} [init]
 * @returns {A}
 */
function a(init) {
    return new A(init)
}


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__document__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fragment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctype__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__element__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instruction__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__text__ = __webpack_require__(54);










const { defineProperty } = Object
const { Node } = window

const nodeTypeMap = {
    [Node.ATTRIBUTE_NODE] : __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */],
    [Node.ELEMENT_NODE] : __WEBPACK_IMPORTED_MODULE_6__element__["a" /* ElementAssembler */],
    [Node.COMMENT_NODE] : __WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentAssembler */],
    [Node.DOCUMENT_FRAGMENT_NODE] : __WEBPACK_IMPORTED_MODULE_4__fragment__["a" /* DocumentFragmentAssembler */],
    [Node.DOCUMENT_NODE] : __WEBPACK_IMPORTED_MODULE_3__document__["a" /* DocumentAssembler */],
    [Node.DOCUMENT_TYPE_NODE] : __WEBPACK_IMPORTED_MODULE_5__doctype__["a" /* DocumentTypeAssembler */],
    [Node.PROCESSING_INSTRUCTION_NODE] : __WEBPACK_IMPORTED_MODULE_7__instruction__["a" /* ProcessingInstructionAssembler */],
    [Node.TEXT_NODE] : __WEBPACK_IMPORTED_MODULE_8__text__["a" /* TextAssembler */]
}
/* unused harmony export nodeTypeMap */


defineProperty(Node.prototype, __WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */], {
    configurable : true,
    get() {
        const assembler = nodeTypeMap[this.nodeType]
        return this[__WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */]] = new assembler({ node : this })
    },
    set(value) {
        defineProperty(this, __WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */], { writable : true, value })
    }
})

/*
 * This is a workaround for the JSDOM's issue #1641:
 *  https://github.com/tmpvar/jsdom/issues/1641
 * todo: remove when the problem is solved
 */
defineProperty(window.Attr.prototype, __WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */], {
    configurable : true,
    get() {
        return this[__WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */]] = new __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* AttrAssembler */]({ node : this })
    },
    set(value) {
        defineProperty(this, __WEBPACK_IMPORTED_MODULE_0__const__["c" /* INSTANCE_PROPERTY_NAME */], { writable : true, value })
    }
})


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export abbr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Abbr extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Abbr */


/**
 * @param {*} [init]
 * @returns {Abbr}
 */
function abbr(...init) {
    return new Abbr(...init)
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export address */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Address extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Address */


/**
 * @param {*} [init]
 * @returns {Address}
 */
function address(...init) {
    return new Address(...init)
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = article;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Article extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Article;


/**
 * @param {*} [init]
 * @returns {Article}
 */
function article(...init) {
    return new Article(...init)
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export aside */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Aside extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Aside */


/**
 * @param {*} [init]
 * @returns {Aside}
 */
function aside(...init) {
    return new Aside(...init)
}


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export audio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media__ = __webpack_require__(37);


const { HTMLAudioElement } = window

class Audio extends __WEBPACK_IMPORTED_MODULE_0__media__["a" /* HTMLMediaAssembler */] {
    // todo
    /**
     * @returns {window.HTMLAudioElement}
     */
    static get interface() {
        return HTMLAudioElement
    }
}
/* unused harmony export Audio */


/**
 * @param {*} [init]
 * @returns {Audio}
 */
function audio(...init) {
    return new Audio(...init)
}


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export b */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class B extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export B */


/**
 * @param {*} [init]
 * @returns {B}
 */
function b(...init) {
    return new B(...init)
}


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export base */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLBaseElement } = window

class Base extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {window.HTMLBaseElement}
     */
    static get interface() {
        return HTMLBaseElement
    }
}
/* unused harmony export Base */


/**
 * @param {*} [init]
 * @returns {Base}
 */
function base(...init) {
    return new Base(...init)
}


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bdi */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Bdi extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Bdi */


/**
 * @param {*} [init]
 * @returns {Bdi}
 */
function bdi(...init) {
    return new Bdi(...init)
}


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bdo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Bdo extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Bdo */


/**
 * @param {*} [init]
 * @returns {Bdo}
 */
function bdo(...init) {
    return new Bdo(...init)
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export blockquote */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLQuoteElement } = window

class BlockQuote extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {window.HTMLQuoteElement}
     */
    static get interface() {
        return HTMLQuoteElement
    }
}
/* unused harmony export BlockQuote */


/**
 * @param {*} [init]
 * @returns {BlockQuote}
 */
function blockquote(...init) {
    return new BlockQuote(...init)
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export body */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLBodyElement } = window

class Body extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLBodyElement}
     */
    static get interface() {
        return HTMLBodyElement
    }
}
/* unused harmony export Body */


/**
 * @param {*} [init]
 * @returns {Body}
 */
function body(init) {
    return new Body(init)
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export br */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLBRElement } = window

class Br extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLBRElement}
     */
    static get interface() {
        return HTMLBRElement
    }
}
/* unused harmony export Br */


/**
 * @param {*} [init]
 * @returns {Br}
 */
function br(...init) {
    return new Br(...init)
}


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label__ = __webpack_require__(10);




const { map } = Array.prototype
const { HTMLButtonElement } = window

class Button extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @param {String} formAction
     */
    set formAction(formAction) {
        this.node.formAction = formAction
    }

    /**
     * @returns {String}
     */
    get formAction() {
        return this.node.formAction
    }

    /**
     * @param {String} formEnctype
     */
    set formEnctype(formEnctype) {
        this.node.formEnctype = formEnctype
    }

    /**
     * @returns {String}
     */
    get formEnctype() {
        return this.node.formEnctype
    }

    /**
     * @param {String} formMethod
     */
    set formMethod(formMethod) {
        this.node.formMethod = formMethod
    }

    /**
     * @returns {String}
     */
    get formMethod() {
        return this.node.formMethod
    }

    /**
     * @param {Boolean} formNoValidate
     */
    set formNoValidate(formNoValidate) {
        this.node.formNoValidate = formNoValidate
    }

    /**
     * @returns {Boolean}
     */
    get formNoValidate() {
        return this.node.formNoValidate
    }

    /**
     * @param {String} formTarget
     */
    set formTarget(formTarget) {
        this.node.formTarget = formTarget
    }

    /**
     * @returns {String}
     */
    get formTarget() {
        return this.node.formTarget
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_2__label__["a" /* Label */])
        })
    }

    /**
     * @returns {window.HTMLButtonElement}
     */
    static get interface() {
        return HTMLButtonElement
    }
}
/* unused harmony export Button */


/**
 * @param {*} [init]
 * @returns {Button}
 */
function button(init) {
    return new Button(init)
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export canvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLCanvasElement } = window

class Canvas extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} contextId
     * @param {*} args
     * @returns {*|CanvasRenderingContext2D|WebGLRenderingContext}
     */
    getContext(contextId, ...args) {
        return this.node.getContext(contextId, ...args)
    }

    /**
     * @param {String} contextId
     * @param {*} args
     * @returns {Boolean}
     */
    probablySupportsContext(contextId, ...args) {
        return this.node.probablySupportsContext(contextId, ...args)
    }

    /**
     * @param {String} type
     * @param {*} args
     * @returns {String}
     */
    toDataURL(type, ...args) {
        return this.node.toDataURL(type, ...args)
    }

    /**
     * @param {Function} _callback
     * @param {String} type
     * @param {*} args
     */
    toBlob(_callback, type, ...args) {
        this.node.toBlob(_callback, type, ...args)
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {window.HTMLCanvasElement}
     */
    static get interface() {
        return HTMLCanvasElement
    }
}
/* unused harmony export Canvas */


/**
 * @param {*} [init]
 * @returns {Canvas}
 */
function canvas(...init) {
    return new Canvas(...init)
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cite */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Cite extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Cite */


/**
 * @param {*} [init]
 * @returns {Cite}
 */
function cite(...init) {
    return new Cite(...init)
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export code */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Code extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Code */


/**
 * @param {*} [init]
 * @returns {Code}
 */
function code(...init) {
    return new Code(...init)
}


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTableColElement } = window

class Col extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {Number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {window.HTMLTableColElement}
     */
    static get interface() {
        return HTMLTableColElement
    }
}
/* unused harmony export Col */


/**
 * @param {*} [init]
 * @returns {Col}
 */
function col(...init) {
    return new Col(...init)
}


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colgroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTableColElement } = window

class ColGroup extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {Number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {window.HTMLTableColElement}
     */
    static get interface() {
        return HTMLTableColElement
    }
}
/* unused harmony export ColGroup */


/**
 * @param {*} [init]
 * @returns {ColGroup}
 */
function colgroup(...init) {
    return new ColGroup(...init)
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export data */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLDataElement } = window

class Data extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLDataElement}
     */
    static get interface() {
        return HTMLDataElement
    }
}
/* unused harmony export Data */


/**
 * @param {*} [init]
 * @returns {Data}
 */
function data(...init) {
    return new Data(...init)
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export datalist */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__(38);



const { prototype : { map } } = Array
const { HTMLDataListElement } = window

class DataList extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {HTMLOption[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstance(option, __WEBPACK_IMPORTED_MODULE_1__option__["a" /* HTMLOption */])
        })
    }

    /**
     * @returns {window.HTMLDataListElement}
     */
    static get interface() {
        return HTMLDataListElement
    }
}
/* unused harmony export DataList */


/**
 * @param {*} [init]
 * @returns {DataList}
 */
function datalist(...init) {
    return new DataList(...init)
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Dd extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Dd */


/**
 * @param {*} [init]
 * @returns {Dd}
 */
function dd(...init) {
    return new Dd(...init)
}


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export del */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mod__ = __webpack_require__(39);


class Del extends __WEBPACK_IMPORTED_MODULE_0__mod__["a" /* HTMLModAssembler */] {}
/* unused harmony export Del */


/**
 * @param {*} [init]
 * @returns {Del}
 */
function del(...init) {
    return new Del(...init)
}


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export details */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLDetailsElement } = window

class Details extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {Boolean}
     */
    get open() {
        return this.node.open
    }

    /**
     * @returns {window.HTMLDetailsElement}
     */
    static get interface() {
        return HTMLDetailsElement
    }
}
/* unused harmony export Details */


/**
 * @param {*} [init]
 * @returns {Details}
 */
function details(...init) {
    return new Details(...init)
}


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dfn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Dfn extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Dfn */


/**
 * @param {*} [init]
 * @returns {Dfn}
 */
function dfn(...init) {
    return new Dfn(...init)
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLDialogElement } = window

class Dialog extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {window.HTMLDialogElement}
     */
    static get interface() {
        return HTMLDialogElement
    }
}
/* unused harmony export Dialog */


/**
 * @param {*} [init]
 * @returns {Dialog}
 */
function dialog(...init) {
    return new Dialog(...init)
}


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export div */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLDivElement } = window

class Div extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLDivElement}
     */
    static get interface() {
        return HTMLDivElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Div;


/**
 * @param {*} [init]
 * @returns {Div}
 */
function div(init) {
    return new Div(init)
}


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLDListElement } = window

class Dl extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLDListElement}
     */
    static get interface() {
        return HTMLDListElement
    }
}
/* unused harmony export Dl */


/**
 * @param {*} [init]
 * @returns {Dl}
 */
function dl(...init) {
    return new Dl(...init)
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dommodule__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html__ = __webpack_require__(57);



const { HTMLDocument, document : { implementation } } = window

const DEFAULT_TITLE = 'HTML document'

class HTMLDocumentAssembler extends __WEBPACK_IMPORTED_MODULE_0_dommodule__["b" /* DocumentAssembler */] {
    /**
     * @param {HTMLElement} activeElement
     */
    set activeElement(activeElement) {
        if(this.node.contains(activeElement)) {
            activeElement.focus()
        }
    }

    /**
     * @returns {HTMLElement}
     */
    get activeElement() {
        return this.node.activeElement
    }

    /**
     * @param {HTMLBodyElement} body
     */
    set body(body) {
        this.node.body = body
    }

    /**
     * @returns {HTMLBodyElement}
     */
    get body() {
        return this.node.body
    }

    /**
     * @param {HTMLHeadElement} head
     */
    set head(head) {
        const element = this.head
        if(element) element.replaceWith(head)
        else this.documentElement.prepend(head)
    }

    /**
     * @returns {HTMLHeadElement}
     */
    get head() {
        return this.node.head
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.node.title = title
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.node.title
    }

    /**
     * @param {*} init
     * @returns {HTMLDocument}
     */
    static create(init) {
        const { title = this.title } = init || this
        return implementation.createHTMLDocument(title)
    }

    /**
     * @returns {Html}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_1__html__["a" /* Html */]
    }

    /**
     * @returns {Window.HTMLDocument}
     */
    static get interface() {
        return HTMLDocument
    }

    /**
     * @returns {String}
     */
    static get title() {
        return DEFAULT_TITLE
    }
}
/* unused harmony export HTMLDocumentAssembler */



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Dt extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Dt */


/**
 * @param {*} [init]
 * @returns {Dt}
 */
function dt(...init) {
    return new Dt(...init)
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export em */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Em extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Em */


/**
 * @param {*} [init]
 * @returns {Em}
 */
function em(...init) {
    return new Em(...init)
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export embed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLEmbedElement } = window

class Embed extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {window.HTMLEmbedElement}
     */
    static get interface() {
        return HTMLEmbedElement
    }
}
/* unused harmony export Embed */


/**
 * @param {*} [init]
 * @returns {Embed}
 */
function embed(...init) {
    return new Embed(...init)
}


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fieldset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(9);



const { map } = Array.prototype
const { HTMLFieldSetElement } = window

class FieldSet extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }
    
    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {(HTMLElementAssembler|*)[]}
     */
    get elements() {
        return map.call(this.node.elements, node => {
            return this.getInstance(node)
        })
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {window.HTMLFieldSetElement}
     */
    static get interface() {
        return HTMLFieldSetElement
    }
}
/* unused harmony export FieldSet */


/**
 * @param {*} [init]
 * @returns {FieldSet}
 */
function fieldset(...init) {
    return new FieldSet(...init)
}


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export figcaption */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class FigCaption extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export FigCaption */


/**
 * @param {*} [init]
 * @returns {FigCaption}
 */
function figcaption(...init) {
    return new FigCaption(...init)
}


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export figure */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Figure extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Figure */


/**
 * @param {*} [init]
 * @returns {Figure}
 */
function figure(...init) {
    return new Figure(...init)
}


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export footer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Footer extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;


/**
 * @param {*} [init]
 * @returns {Footer}
 */
function footer(...init) {
    return new Footer(...init)
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class H1 extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export H1 */


/**
 * @param {*} [init]
 * @returns {H1}
 */
function h1(init) {
    return new H1(init)
}



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export h2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class H2 extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export H2 */


/**
 * @param {*} [init]
 * @returns {H2}
 */
function h2(...init) {
    return new H2(...init)
}


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export h3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class H3 extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export H3 */


/**
 * @param {*} [init]
 * @returns {H3}
 */
function h3(...init) {
    return new H3(...init)
}


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export h4 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class H4 extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export H4 */


/**
 * @param {*} [init]
 * @returns {H4}
 */
function h4(...init) {
    return new H4(...init)
}


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export h5 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class H5 extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export H5 */


/**
 * @param {*} [init]
 * @returns {H5}
 */
function h5(...init) {
    return new H5(...init)
}


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export h6 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class H6 extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export H6 */


/**
 * @param {*} [init]
 * @returns {H6}
 */
function h6(...init) {
    return new H6(...init)
}


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export head */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLHeadElement } = window

class Head extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLHeadElement}
     */
    static get interface() {
        return HTMLHeadElement
    }
}
/* unused harmony export Head */


/**
 * @param {*} [init]
 * @returns {Head}
 */
function head(...init) {
    return new Head(...init)
}


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export header */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Header extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;


/**
 * @param {*} [init]
 * @returns {Header}
 */
function header(...init) {
    return new Header(...init)
}


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hgroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class HGroup extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export HGroup */


/**
 * @param {*} [init]
 * @returns {HGroup}
 */
function hgroup(...init) {
    return new HGroup(...init)
}


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLHRElement } = window

class Hr extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLHRElement}
     */
    static get interface() {
        return HTMLHRElement
    }
}
/* unused harmony export Hr */


/**
 * @param {*} [init]
 * @returns {Hr}
 */
function hr(...init) {
    return new Hr(...init)
}


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export i */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class I extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export I */


/**
 * @param {*} [init]
 * @returns {I}
 */
function i(...init) {
    return new I(...init)
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iframe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dommodule__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(0);



const { HTMLIFrameElement } = window

class IFrame extends __WEBPACK_IMPORTED_MODULE_1__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srcdoc
     */
    set srcdoc(srcdoc) {
        this.node.srcdoc = srcdoc
    }

    /**
     * @returns {String}
     */
    get srcdoc() {
        return this.node.srcdoc
    }

    /**
     * @returns {DOMTokenList}
     */
    get sandbox() {
        return this.node.sandbox
    }

    /**
     * @param {Boolean} allowFullScreen
     */
    set allowFullScreen(allowFullScreen) {
        this.node.allowFullScreen = allowFullScreen
    }

    /**
     * @returns {Boolean}
     */
    get allowFullScreen() {
        return this.node.allowFullScreen
    }

    /**
     * @param {Boolean} allowPaymentRequest
     */
    set allowPaymentRequest(allowPaymentRequest) {
        this.node.allowPaymentRequest = allowPaymentRequest
    }

    /**
     * @returns {Boolean}
     */
    get allowPaymentRequest() {
        return this.node.allowPaymentRequest
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {DocumentAssembler|null}
     */
    get contentDocument() {
        return this.getInstance(this.node.contentDocument, __WEBPACK_IMPORTED_MODULE_0_dommodule__["b" /* DocumentAssembler */])
    }

    /**
     * @returns {Window|null}
     */
    get contentWindow() {
        return this.node.contentWindow
    }

    /**
     * @returns {window.HTMLIFrameElement}
     */
    static get interface() {
        return HTMLIFrameElement
    }
}
/* unused harmony export IFrame */


/**
 * @param {*} [init]
 * @returns {IFrame}
 */
function iframe(...init) {
    return new IFrame(...init)
}


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export img */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLImageElement } = window

class Img extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Promise}
     */
    decode() {
        return this.node.decode()
    }

    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @returns {Boolean}
     */
    get complete() {
        return this.node.complete
    }

    /**
     * @returns {String}
     */
    get currentSrc() {
        return this.node.currentSrc
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srcset
     */
    set srcset(srcset) {
        this.node.srcset = srcset
    }

    /**
     * @returns {String}
     */
    get srcset() {
        return this.node.srcset
    }

    /**
     * @param {String} sizes
     */
    set sizes(sizes) {
        this.node.sizes = sizes
    }

    /**
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {String} useMap
     */
    set useMap(useMap) {
        this.node.useMap = useMap
    }

    /**
     * @returns {String}
     */
    get useMap() {
        return this.node.useMap
    }

    /**
     * @param {Boolean} isMap
     */
    set isMap(isMap) {
        this.node.isMap = isMap
    }

    /**
     * @returns {Boolean}
     */
    get isMap() {
        return this.node.isMap
    }

    /**
     * @returns {Number}
     */
    get naturalWidth() {
        return this.node.naturalWidth
    }

    /**
     * @returns {Number}
     */
    get naturalHeight() {
        return this.node.naturalHeight
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @returns {window.HTMLImageElement}
     */
    static get interface() {
        return HTMLImageElement
    }
}
/* unused harmony export Img */


/**
 * @param {*} [init]
 * @returns {Img}
 */
function img(init) {
    return new Img(init)
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form__ = __webpack_require__(9);




const { map } = Array.prototype
const { HTMLInputElement } = window

class Input extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * Select the input
     */
    select() {
        this.node.select()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {*} args
     */
    setRangeText(...args) {
        this.node.setRangeText(...args)
    }

    /**
     * @param {*} args
     */
    setSelectionRange(...args) {
        this.node.setSelectionRange(...args)
    }

    /**
     * @param {Number} n
     */
    stepDown(n) {
        this.node.stepDown()
    }

    /**
     * @param {Number} n
     */
    stepUp(n) {
        this.node.stepUp()
    }

    /**
     * @param {String} accept
     */
    set accept(accept) {
        this.node.accept = accept
    }

    /**
     * @returns {String}
     */
    get accept() {
        return this.node.accept
    }

    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} defaultChecked
     */
    set defaultChecked(defaultChecked) {
        this.node.defaultChecked = defaultChecked
    }

    /**
     * @returns {Boolean}
     */
    get defaultChecked() {
        return this.node.defaultChecked
    }

    /**
     * @param {Boolean} checked
     */
    set checked(checked) {
        this.node.checked = checked
    }

    /**
     * @returns {Boolean}
     */
    get checked() {
        return this.node.checked
    }

    /**
     * @param {String} dirName
     */
    set dirName(dirName) {
        this.node.dirName = dirName
    }

    /**
     * @returns {String}
     */
    get dirName() {
        return this.node.dirName
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_2__form__["a" /* Form */])
    }

    /**
     * @param {*} files
     */
    set files(files) {
        this.node.files = files
    }

    /**
     * @returns {*}
     */
    get files() {
        return this.node.files
    }

    /**
     * @param {String} formAction
     */
    set formAction(formAction) {
        this.node.formAction = formAction
    }

    /**
     * @returns {String}
     */
    get formAction() {
        return this.node.formAction
    }

    /**
     * @param {String} formEnctype
     */
    set formEnctype(formEnctype) {
        this.node.formEnctype = formEnctype
    }

    /**
     * @returns {String}
     */
    get formEnctype() {
        return this.node.formEnctype
    }

    /**
     * @param {String} formMethod
     */
    set formMethod(formMethod) {
        this.node.formMethod = formMethod
    }

    /**
     * @returns {String}
     */
    get formMethod() {
        return this.node.formMethod
    }

    /**
     * @param {Boolean} formNoValidate
     */
    set formNoValidate(formNoValidate) {
        this.node.formNoValidate = formNoValidate
    }

    /**
     * @returns {Boolean}
     */
    get formNoValidate() {
        return this.node.formNoValidate
    }

    /**
     * @param {String} formTarget
     */
    set formTarget(formTarget) {
        this.node.formTarget = formTarget
    }

    /**
     * @returns {String}
     */
    get formTarget() {
        return this.node.formTarget
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {Boolean} indeterminate
     */
    set indeterminate(indeterminate) {
        this.node.indeterminate = indeterminate
    }

    /**
     * @returns {Boolean}
     */
    get indeterminate() {
        return this.node.indeterminate
    }

    /**
     * @param {String} inputMode
     */
    set inputMode(inputMode) {
        this.node.inputMode = inputMode
    }

    /**
     * @returns {String}
     */
    get inputMode() {
        return this.node.inputMode
    }

    /**
     * @returns {HTMLElementAssembler|null}
     */
    get list() {
        return this.getInstance(this.node.list, __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */])
    }

    /**
     * @param {String} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {String}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {Number} maxLength
     */
    set maxLength(maxLength) {
        this.node.maxLength = maxLength
    }

    /**
     * @returns {Number}
     */
    get maxLength() {
        return this.node.maxLength
    }

    /**
     * @param {String} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {String}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {Number} minLength
     */
    set minLength(minLength) {
        this.node.minLength = minLength
    }

    /**
     * @returns {Number}
     */
    get minLength() {
        return this.node.minLength
    }

    /**
     * @param {Boolean} multiple
     */
    set multiple(multiple) {
        this.node.multiple = multiple
    }

    /**
     * @returns {Boolean}
     */
    get multiple() {
        return this.node.multiple
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} pattern
     */
    set pattern(pattern) {
        this.node.pattern = pattern
    }

    /**
     * @returns {String}
     */
    get pattern() {
        return this.node.pattern
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.node.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.node.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.node.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} size
     */
    set size(size) {
        this.node.size = size
    }

    /**
     * @returns {Number}
     */
    get size() {
        return this.node.size
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} step
     */
    set step(step) {
        this.node.step = step
    }

    /**
     * @returns {String}
     */
    get step() {
        return this.node.step
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} defaultValue
     */
    set defaultValue(defaultValue) {
        this.node.defaultValue = defaultValue
    }

    /**
     * @returns {String}
     */
    get defaultValue() {
        return this.node.defaultValue
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Date} valueAsDate
     */
    set valueAsDate(valueAsDate) {
        this.node.valueAsDate = valueAsDate
    }

    /**
     * @returns {Date}
     */
    get valueAsDate() {
        return this.node.valueAsDate
    }

    /**
     * @param {Number} valueAsNumber
     */
    set valueAsNumber(valueAsNumber) {
        this.node.valueAsNumber = valueAsNumber
    }

    /**
     * @returns {Number}
     */
    get valueAsNumber() {
        return this.node.valueAsNumber
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_1__label__["a" /* Label */])
        })
    }

    /**
     * @param {Number} selectionStart
     */
    set selectionStart(selectionStart) {
        this.node.selectionStart = selectionStart
    }

    /**
     * @returns {Number}
     */
    get selectionStart() {
        return this.node.selectionStart
    }

    /**
     * @param {Number} selectionEnd
     */
    set selectionEnd(selectionEnd) {
        this.node.selectionEnd = selectionEnd
    }

    /**
     * @returns {Number}
     */
    get selectionEnd() {
        return this.node.selectionEnd
    }

    /**
     * @param {String} selectionDirection
     */
    set selectionDirection(selectionDirection) {
        this.node.selectionDirection = selectionDirection
    }

    /**
     * @returns {String}
     */
    get selectionDirection() {
        return this.node.selectionDirection
    }

    /**
     * @returns {window.HTMLInputElement}
     */
    static get interface() {
        return HTMLInputElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Input;


/**
 * @param {*} [init]
 * @returns {Input}
 */
function input(init) {
    return new Input(init)
}


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ins */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mod__ = __webpack_require__(39);


class Ins extends __WEBPACK_IMPORTED_MODULE_0__mod__["a" /* HTMLModAssembler */] {}
/* unused harmony export Ins */


/**
 * @param {*} [init]
 * @returns {Ins}
 */
function ins(...init) {
    return new Ins(...init)
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = kbd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Kbd extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Kbd */


/**
 * @param {*} [init]
 * @returns {Kbd}
 */
function kbd(...init) {
    return new Kbd(...init)
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export legend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(9);



const { HTMLLegendElement } = window

class Legend extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @returns {window.HTMLLegendElement}
     */
    static get interface() {
        return HTMLLegendElement
    }
}
/* unused harmony export Legend */


/**
 * @param {*} [init]
 * @returns {Legend}
 */
function legend(...init) {
    return new Legend(...init)
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export li */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLLIElement } = window

class Li extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLLIElement}
     */
    static get interface() {
        return HTMLLIElement
    }
}
/* unused harmony export Li */


/**
 * @param {*} [init]
 * @returns {Li}
 */
function li(init) {
    return new Li(init)
}


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLLinkElement } = window

class Link extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }


    /**
     * @param {String} rev
     */
    set rev(rev) {
        this.node.rev = rev
    }

    /**
     * @returns {String}
     */
    get rev() {
        return this.node.rev
    }

    /**
     * @returns {DOMTokenList}
     */
    get relList() {
        return this.node.relList
    }

    /**
     * @param {String} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.node.media
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }
    
    /**
     * @returns {window.HTMLLinkElement}
     */
    static get interface() {
        return HTMLLinkElement
    }
}
/* unused harmony export Link */


/**
 * @param {*} [init]
 * @returns {Link}
 */
function link(...init) {
    return new Link(...init)
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export main */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Main extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Main;


/**
 * @param {*} [init]
 * @returns {Main}
 */
function main(init) {
    return new Main(init)
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export map */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(55);



const _map = Array.prototype.map
const { HTMLMapElement } = window

class Map extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Area[]}
     */
    get areas() {
        return _map.call(this.node.areas, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_1__area__["a" /* Area */])
        })
    }

    /**
     * @returns {(Img|Object)[]}
     */
    get images() {
        return _map.call(this.node.images, node => {
            return this.getInstance(node)
        })
    }

    /**
     * @returns {window.HTMLMapElement}
     */
    static get interface() {
        return HTMLMapElement
    }
}
/* unused harmony export Map */


/**
 * @param {*} [init]
 * @returns {Map}
 */
function map(...init) {
    return new Map(...init)
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mark */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Mark extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Mark */


/**
 * @param {*} [init]
 * @returns {Mark}
 */
function mark(...init) {
    return new Mark(...init)
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLMenuElement } = window

class Menu extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLMenuElement}
     */
    static get interface() {
        return HTMLMenuElement
    }
}
/* unused harmony export Menu */


/**
 * @param {*} [init]
 * @returns {Menu}
 */
function menu(...init) {
    return new Menu(...init)
}


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export meta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLMetaElement } = window

class Meta extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} httpEquiv
     */
    set httpEquiv(httpEquiv) {
        this.node.httpEquiv = httpEquiv
    }

    /**
     * @returns {String}
     */
    get httpEquiv() {
        return this.node.httpEquiv
    }

    /**
     * @param {String} content
     */
    set content(content) {
        this.node.content = content
    }

    /**
     * @returns {String}
     */
    get content() {
        return this.node.content
    }

    /**
     * @returns {window.HTMLMetaElement}
     */
    static get interface() {
        return HTMLMetaElement
    }
}
/* unused harmony export Meta */


/**
 * @param {*} [init]
 * @returns {Meta}
 */
function meta(...init) {
    return new Meta(...init)
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export meter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__(10);



const { map } = Array.prototype
const { HTMLMeterElement } = window

class Meter extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Number} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {Number}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {Number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {Number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {Number} low
     */
    set low(low) {
        this.node.low = low
    }

    /**
     * @returns {Number}
     */
    get low() {
        return this.node.low
    }

    /**
     * @param {Number} high
     */
    set high(high) {
        this.node.high = high
    }

    /**
     * @returns {Number}
     */
    get high() {
        return this.node.high
    }

    /**
     * @param {Number} optimum
     */
    set optimum(optimum) {
        this.node.optimum = optimum
    }

    /**
     * @returns {Number}
     */
    get optimum() {
        return this.node.optimum
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_1__label__["a" /* Label */])
        })
    }

    /**
     * @returns {window.HTMLMeterElement}
     */
    static get interface() {
        return HTMLMeterElement
    }
}
/* unused harmony export Meter */


/**
 * @param {*} [init]
 * @returns {Meter}
 */
function meter(...init) {
    return new Meter(...init)
}


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nav */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Nav extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Nav */


/**
 * @param {*} [init]
 * @returns {Nav}
 */
function nav(...init) {
    return new Nav(...init)
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noscript */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class NoScript extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export NoScript */


/**
 * @param {*} [init]
 * @returns {NoScript}
 */
function noscript(...init) {
    return new NoScript(...init)
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export object */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLObjectElement } = window
const LOCAL_NAME = 'object'

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the native `Object` class from the ECMAScript standard
 * https://tc39.github.io/ecma262/#sec-object-objects
 */
class HTMLObject extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {window.HTMLObjectElement}
     */
    static get interface() {
        return HTMLObjectElement
    }
}
/* unused harmony export HTMLObject */


/**
 * @param {*} [init]
 * @returns {HTMLObject}
 */
function object(...init) {
    return new HTMLObject(...init)
}


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ol */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLOListElement } = window

class Ol extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Boolean} reversed
     */
    set reversed(reversed) {
        this.node.reversed = reversed
    }

    /**
     * @returns {Boolean}
     */
    get reversed() {
        return this.node.reversed
    }

    /**
     * @param {Number} start
     */
    set start(start) {
        this.node.start = start
    }

    /**
     * @returns {Number}
     */
    get start() {
        return this.node.start
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {window.HTMLOListElement}
     */
    static get interface() {
        return HTMLOListElement
    }
}
/* unused harmony export Ol */


/**
 * @param {*} [init]
 * @returns {Ol}
 */
function ol(init) {
    return new Ol(init)
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export output */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLOutputElement } = window

class Output extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {window.HTMLOutputElement}
     */
    static get interface() {
        return HTMLOutputElement
    }
}
/* unused harmony export Output */


/**
 * @param {*} [init]
 * @returns {Output}
 */
function output(...init) {
    return new Output(...init)
}


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = p;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLParagraphElement } = window

class P extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLParagraphElement}
     */
    static get interface() {
        return HTMLParagraphElement
    }
}
/* unused harmony export P */


/**
 * @param {*} [init]
 * @returns {P}
 */
function p(init) {
    return new P(init)
}


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export param */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLParamElement } = window

class Param extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLParamElement}
     */
    static get interface() {
        return HTMLParamElement
    }
}
/* unused harmony export Param */


/**
 * @param {*} [init]
 * @returns {Param}
 */
function param(...init) {
    return new Param(...init)
}


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export picture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLPictureElement } = window

class Picture extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLPictureElement}
     */
    static get interface() {
        return HTMLPictureElement
    }
}
/* unused harmony export Picture */


/**
 * @param {*} [init]
 * @returns {Picture}
 */
function picture(...init) {
    return new Picture(...init)
}


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pre */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLPreElement } = window

class Pre extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLPreElement}
     */
    static get interface() {
        return HTMLPreElement
    }
}
/* unused harmony export Pre */


/**
 * @param {*} [init]
 * @returns {Pre}
 */
function pre(...init) {
    return new Pre(...init)
}


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__(10);



const { map } = Array.prototype
const { HTMLProgressElement } = window

class Progress extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {Number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @returns {Number}
     */
    get position() {
        return this.node.position
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_1__label__["a" /* Label */])
        })
    }

    /**
     * @returns {window.HTMLProgressElement}
     */
    static get interface() {
        return HTMLProgressElement
    }
}
/* unused harmony export Progress */


/**
 * @param {*} [init]
 * @returns {Progress}
 */
function progress(...init) {
    return new Progress(...init)
}


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export q */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLQuoteElement } = window

class Q extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {window.HTMLQuoteElement}
     */
    static get interface() {
        return HTMLQuoteElement
    }
}
/* unused harmony export Q */


/**
 * @param {*} [init]
 * @returns {Q}
 */
function q(...init) {
    return new Q(...init)
}


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Rp extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Rp */


/**
 * @param {*} [init]
 * @returns {Rp}
 */
function rp(...init) {
    return new Rp(...init)
}


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Rt extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Rt */


/**
 * @param {*} [init]
 * @returns {Rt}
 */
function rt(...init) {
    return new Rt(...init)
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ruby */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Ruby extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Ruby */


/**
 * @param {*} [init]
 * @returns {Ruby}
 */
function ruby(...init) {
    return new Ruby(...init)
}


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export s */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class S extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export S */


/**
 * @param {*} [init]
 * @returns {S}
 */
function s(...init) {
    return new S(...init)
}


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export samp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Samp extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Samp */


/**
 * @param {*} [init]
 * @returns {Samp}
 */
function samp(...init) {
    return new Samp(...init)
}


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export script */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLScriptElement } = window

class Script extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} charset
     */
    set charset(charset) {
        this.node.charset = charset
    }

    /**
     * @returns {String}
     */
    get charset() {
        return this.node.charset
    }

    /**
     * @param {Boolean} async
     */
    set async(async) {
        this.node.async = async
    }

    /**
     * @returns {Boolean}
     */
    get async() {
        return this.node.async
    }

    /**
     * @param {Boolean} defer
     */
    set defer(defer) {
        this.node.defer = defer
    }

    /**
     * @returns {Boolean}
     */
    get defer() {
        return this.node.defer
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
    }

    /**
     * @returns {window.HTMLScriptElement}
     */
    static get interface() {
        return HTMLScriptElement
    }
}
/* unused harmony export Script */


/**
 * @param {*} [init]
 * @returns {Script}
 */
function script(...init) {
    return new Script(...init)
}


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = section;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Section extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Section */


/**
 * @param {*} [init]
 * @returns {Section}
 */
function section(...init) {
    return new Section(...init)
}


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__optgroup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option__ = __webpack_require__(38);






const { map } = Array.prototype
const { HTMLSelectElement } = window

class Select extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {HTMLOption|HTMLOptionElement|OptGroup|HTMLOptGroupElement} element
     * @param {HTMLElementAssembler|HTMLElement|Number} [before=null]
     */
    add(element, before = null) {
        if(element instanceof __WEBPACK_IMPORTED_MODULE_4__option__["a" /* HTMLOption */] || element instanceof __WEBPACK_IMPORTED_MODULE_3__optgroup__["a" /* OptGroup */]) {
            element = element.node
        }
        if(before instanceof __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */]) {
            before = before.node
        }
        this.node.add(element, before)
    }

    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @param {Number} index
     * @returns {ElementAssembler|null}
     */
    item(index) {
        return this.getInstance(this.node.item(index))
    }

    /**
     * @param {String} name
     * @returns {HTMLOption|null}
     */
    namedItem(name) {
        return this.getInstance(this.node.namedItem(name), __WEBPACK_IMPORTED_MODULE_4__option__["a" /* HTMLOption */])
    }

    /**
     * @param {Number} [index]
     */
    remove(index) {
        this.node.remove(index)
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, __WEBPACK_IMPORTED_MODULE_1__form__["a" /* Form */])
    }

    /**
     * @param {Boolean} multiple
     */
    set multiple(multiple) {
        this.node.multiple = multiple
    }

    /**
     * @returns {Boolean}
     */
    get multiple() {
        return this.node.multiple
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} size
     */
    set size(size) {
        this.node.size = size
    }

    /**
     * @returns {Number}
     */
    get size() {
        return this.node.size
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {HTMLOption[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstance(option, __WEBPACK_IMPORTED_MODULE_4__option__["a" /* HTMLOption */])
        })
    }

    /**
     * @returns {Number}
     */
    get length() {
        return this.node.length
    }

    /**
     * @returns {HTMLOption[]}
     */
    get selectedOptions() {
        return map.call(this.node.selectedOptions, option => {
            return this.getInstance(option, __WEBPACK_IMPORTED_MODULE_4__option__["a" /* HTMLOption */])
        })
    }

    /**
     * @param {Number} selectedIndex
     */
    set selectedIndex(selectedIndex) {
        this.node.selectedIndex = selectedIndex
    }

    /**
     * @returns {Number}
     */
    get selectedIndex() {
        return this.node.selectedIndex
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_2__label__["a" /* Label */])
        })
    }

    /**
     * @returns {window.HTMLSelectElement}
     */
    static get interface() {
        return HTMLSelectElement
    }
}
/* unused harmony export Select */


/**
 * @param {*} [init]
 * @returns {Select}
 */
function select(init) {
    return new Select(init)
}


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export small */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Small extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Small */


/**
 * @param {*} [init]
 * @returns {Small}
 */
function small(...init) {
    return new Small(...init)
}


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export source */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLSourceElement } = window

class Source extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {window.HTMLSourceElement}
     */
    static get interface() {
        return HTMLSourceElement
    }
}
/* unused harmony export Source */


/**
 * @param {*} [init]
 * @returns {Source}
 */
function source(...init) {
    return new Source(...init)
}


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export span */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLSpanElement } = window

class Span extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLSpanElement}
     */
    static get interface() {
        return HTMLSpanElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Span;


/**
 * @param {*} [init]
 * @returns {Span}
 */
function span(init) {
    return new Span(init)
}


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export strong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Strong extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Strong */


/**
 * @param {*} [init]
 * @returns {Strong}
 */
function strong(init) {
    return new Strong(init)
}


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export style */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLStyleElement } = window

class Style extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.node.media
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {window.HTMLStyleElement}
     */
    static get interface() {
        return HTMLStyleElement
    }
}
/* unused harmony export Style */


/**
 * @param {*} [init]
 * @returns {Style}
 */
function style(...init) {
    return new Style(...init)
}


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Sub extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Sub */


/**
 * @param {*} [init]
 * @returns {Sub}
 */
function sub(...init) {
    return new Sub(...init)
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export summary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Summary extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Summary */


/**
 * @param {*} [init]
 * @returns {Summary}
 */
function summary(...init) {
    return new Summary(...init)
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Sup extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Sup */


/**
 * @param {*} [init]
 * @returns {Sup}
 */
function sup(...init) {
    return new Sup(...init)
}


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__caption__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thead__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tfoot__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tbody__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tr__ = __webpack_require__(40);







const { map } = Array.prototype
const { HTMLTableElement } = window

class Table extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {HTMLTableCaptionElement}
     */
    createCaption() {
        return this.getInstance(this.node.createCaption(), __WEBPACK_IMPORTED_MODULE_1__caption__["a" /* Caption */])
    }

    /**
     * Delete the table caption
     */
    deleteCaption() {
        this.node.deleteCaption()
    }
    
    /**
     * @returns {HTMLTableSectionElement}
     */
    createTHead() {
        return this.getInstance(this.node.createTHead(), __WEBPACK_IMPORTED_MODULE_2__thead__["a" /* THead */])
    }

    /**
     * Delete the table caption
     */
    deleteTHead() {
        this.node.deleteTHead()
    }

    /**
     * @returns {HTMLTableSectionElement}
     */
    createTFoot() {
        return this.getInstance(this.node.createTFoot(), __WEBPACK_IMPORTED_MODULE_3__tfoot__["a" /* TFoot */])
    }

    /**
     * Delete the table caption
     */
    deleteTFoot() {
        this.node.deleteTFoot()
    }

    /**
     * @returns {HTMLTableSectionElement}
     */
    createTBody() {
        return this.getInstance(this.node.createTBody(), __WEBPACK_IMPORTED_MODULE_4__tbody__["a" /* TBody */])
    }

    /**
     * @param {Number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstance(this.node.insertRow(index), __WEBPACK_IMPORTED_MODULE_5__tr__["a" /* Tr */])
    }

    /**
     * @param {Number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @param {*} caption {Caption|HTMLTableCaptionElement|String}
     */
    set caption(caption) {
        const node = this.node
        if(caption instanceof __WEBPACK_IMPORTED_MODULE_1__caption__["a" /* Caption */]) {
            node.caption = caption.node
        }
        else if(typeof caption === 'string') {
            node.caption = new __WEBPACK_IMPORTED_MODULE_1__caption__["a" /* Caption */](caption)
        }
        else node.caption = caption
    }

    /**
     * @returns {HTMLTableCaptionElement}
     */
    get caption() {
        return this.node.caption
    }

    /**
     * @param {*} tHead {THead|HTMLTableSectionElement}
     */
    set tHead(tHead) {
        this.node.tHead = tHead instanceof __WEBPACK_IMPORTED_MODULE_2__thead__["a" /* THead */]?
            tHead.node :
            tHead
    }

    /**
     * @returns {THead}
     */
    get tHead() {
        return this.getInstance(this.node.tHead, __WEBPACK_IMPORTED_MODULE_2__thead__["a" /* THead */])
    }

    /**
     * @param {*} tFoot {TFoot|HTMLTableSectionElement}
     */
    set tFoot(tFoot) {
        this.node.tFoot = tFoot instanceof __WEBPACK_IMPORTED_MODULE_3__tfoot__["a" /* TFoot */]?
            tFoot.node :
            tFoot
    }

    /**
     * @returns {TFoot}
     */
    get tFoot() {
        return this.getInstance(this.node.tFoot, __WEBPACK_IMPORTED_MODULE_3__tfoot__["a" /* TFoot */])
    }

    /**
     * @returns {TBody[]}
     */
    get tBodies() {
        return map.call(this.node.tBodies, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_4__tbody__["a" /* TBody */])
        })
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => {
            return this.getInstance(node, __WEBPACK_IMPORTED_MODULE_5__tr__["a" /* Tr */])
        })
    }

    /**
     * @returns {window.HTMLTableElement}
     */
    static get interface() {
        return HTMLTableElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;


/**
 * @param {*} [init]
 * @returns {Table}
 */
function table(init) {
    return new Table(init)
}


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export template */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTemplateElement } = window

class Template extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {window.HTMLTemplateElement}
     */
    static get interface() {
        return HTMLTemplateElement
    }
}
/* unused harmony export Template */


/**
 * @param {*} [init]
 * @returns {Template}
 */
function template(...init) {
    return new Template(...init)
}


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export textarea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__(10);



const { HTMLTextAreaElement } = window

class TextArea extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * Select the input
     */
    select() {
        this.node.select()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {*} args
     */
    setRangeText(...args) {
        this.node.setRangeText(...args)
    }

    /**
     * @param {*} args
     */
    setSelectionRange(...args) {
        this.node.setSelectionRange(...args)
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Number} cols
     */
    set cols(cols) {
        this.node.cols = cols
    }

    /**
     * @returns {Number}
     */
    get cols() {
        return this.node.cols
    }
    
    /**
     * @param {String} dirName
     */
    set dirName(dirName) {
        this.node.dirName = dirName
    }

    /**
     * @returns {String}
     */
    get dirName() {
        return this.node.dirName
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {*}
     */
    get form() {
        return this.node.form
    }
    
    /**
     * @param {String} inputMode
     */
    set inputMode(inputMode) {
        this.node.inputMode = inputMode
    }

    /**
     * @returns {String}
     */
    get inputMode() {
        return this.node.inputMode
    }

    /**
     * @param {Number} maxLength
     */
    set maxLength(maxLength) {
        this.node.maxLength = maxLength
    }

    /**
     * @returns {Number}
     */
    get maxLength() {
        return this.node.maxLength
    }
    
    /**
     * @param {Number} minLength
     */
    set minLength(minLength) {
        this.node.minLength = minLength
    }

    /**
     * @returns {Number}
     */
    get minLength() {
        return this.node.minLength
    }
    
    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.node.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.node.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.node.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} rows
     */
    set rows(rows) {
        this.node.rows = rows
    }

    /**
     * @returns {Number}
     */
    get rows() {
        return this.node.rows
    }

    /**
     * @param {String} wrap
     */
    set wrap(wrap) {
        this.node.wrap = wrap
    }

    /**
     * @returns {String}
     */
    get wrap() {
        return this.node.wrap
    }

    /**
     * @param {String} step
     */
    set step(step) {
        this.node.step = step
    }

    /**
     * @returns {String}
     */
    get step() {
        return this.node.step
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} defaultValue
     */
    set defaultValue(defaultValue) {
        this.node.defaultValue = defaultValue
    }

    /**
     * @returns {String}
     */
    get defaultValue() {
        return this.node.defaultValue
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Number}
     */
    get textLength() {
        return this.node.textLength
    }
    
    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {*}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        const handler = node => this.getInstance(node, __WEBPACK_IMPORTED_MODULE_1__label__["a" /* Label */])
        return map.call(this.node.labels, handler)
    }

    /**
     * @param {Number} selectionStart
     */
    set selectionStart(selectionStart) {
        this.node.selectionStart = selectionStart
    }

    /**
     * @returns {Number}
     */
    get selectionStart() {
        return this.node.selectionStart
    }

    /**
     * @param {Number} selectionEnd
     */
    set selectionEnd(selectionEnd) {
        this.node.selectionEnd = selectionEnd
    }

    /**
     * @returns {Number}
     */
    get selectionEnd() {
        return this.node.selectionEnd
    }

    /**
     * @param {String} selectionDirection
     */
    set selectionDirection(selectionDirection) {
        this.node.selectionDirection = selectionDirection
    }

    /**
     * @returns {String}
     */
    get selectionDirection() {
        return this.node.selectionDirection
    }
    
    /**
     * @returns {window.HTMLTextAreaElement}
     */
    static get interface() {
        return HTMLTextAreaElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextArea;


/**
 * @param {*} [init]
 * @returns {TextArea}
 */
function textarea(...init) {
    return new TextArea(...init)
}


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export time */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTimeElement } = window

class Time extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} dateTime
     */
    set dateTime(dateTime) {
        this.node.dateTime = dateTime
    }

    /**
     * @returns {String}
     */
    get dateTime() {
        return this.node.dateTime
    }

    /**
     * @returns {window.HTMLTimeElement}
     */
    static get interface() {
        return HTMLTimeElement
    }
}
/* unused harmony export Time */


/**
 * @param {*} [init]
 * @returns {Time}
 */
function time(...init) {
    return new Time(...init)
}


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTitleElement } = window

class Title extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {window.HTMLTitleElement}
     */
    static get interface() {
        return HTMLTitleElement
    }
}
/* unused harmony export Title */


/**
 * @param {*} [init]
 * @returns {Title}
 */
function title(...init) {
    return new Title(...init)
}


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export track */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLTrackElement } = window

class Track extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    // todo
    /**
     * @returns {window.HTMLTrackElement}
     */
    static get interface() {
        return HTMLTrackElement
    }
}
/* unused harmony export Track */


/**
 * @param {*} [init]
 * @returns {Track}
 */
function track(...init) {
    return new Track(...init)
}


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export u */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class U extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export U */


/**
 * @param {*} [init]
 * @returns {U}
 */
function u(...init) {
    return new U(...init)
}


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ul */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


const { HTMLUListElement } = window

class Ul extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {
    /**
     * @returns {window.HTMLUListElement}
     */
    static get interface() {
        return HTMLUListElement
    }
}
/* unused harmony export Ul */


/**
 * @param {*} [init]
 * @returns {Ul}
 */
function ul(init) {
    return new Ul(init)
}


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export variable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Var extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Var */


/**
 * The different naming is used to avoid a confilct
 * with the legacy `var` JavaScript keyword
 *
 * @param {*} [init]
 * @returns {Var}
 */
function variable(...init) {
    return new Var(...init)
}


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export video */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media__ = __webpack_require__(37);


const { HTMLVideoElement } = window

class Video extends __WEBPACK_IMPORTED_MODULE_0__media__["a" /* HTMLMediaAssembler */] {
    // todo
    /**
     * @returns {window.HTMLVideoElement}
     */
    static get interface() {
        return HTMLVideoElement
    }
}
/* unused harmony export Video */


/**
 * @param {*} [init]
 * @returns {Video}
 */
function video(...init) {
    return new Video(...init)
}


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wbr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element__ = __webpack_require__(0);


class Wbr extends __WEBPACK_IMPORTED_MODULE_0__element__["a" /* HTMLElementAssembler */] {}
/* unused harmony export Wbr */


/**
 * @param {*} [init]
 * @returns {Wbr}
 */
function wbr(...init) {
    return new Wbr(...init)
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates whether assistive technologies will present all,
 * or only parts of, the changed region based on the change
 * notifications defined by the aria-relevant attribute.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-atomic
 */
class Atomic extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Atomic;



/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates an element is being modified and that assistive technologies MAY want
 * to wait until the modifications are complete before exposing them to the user.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-busy
 */
class Busy extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Busy;



/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


class Disabled extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {
    /**
     * @param {*} init
     */
    init(init) {
        this._tabIndex = NaN
        super.init(init)
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
        if(ownerElement.hasAttribute('tabindex')) {
            this._tabIndex = ownerElement.tabIndex
            ownerElement.removeAttribute('tabIndex')
        }
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        return super.ownerElement
    }

    /**
     * Revert tabIndex value on remove
     */
    remove() {
        if(!isNaN(this._tabIndex)) {
            this.ownerElement.tabIndex = this._tabIndex
        }
        super.remove()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Disabled;



/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates the availability and type of interactive popup element,
 * such as menu or dialog, that can be triggered by an element.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
 */
class HasPopup extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = HasPopup;



/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates whether the element is exposed to an accessibility API.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
 */
class Hidden extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hidden;



/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


class IDREFAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {*} value {ElementAssembler|RoleAttrAssembler|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(typeof value === 'string') {
            super.value = value
        }
        else if('id' in value) {
            super.value = value.id
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get value() {
        const value = super.value
        const element = value?
            this.ownerDocument.getElementById(value) :
            null
        return element && element.role || element
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return null
    }
}
/* unused harmony export IDREFAttrType */


class ActiveDescendant extends IDREFAttrType {}
/* harmony export (immutable) */ __webpack_exports__["a"] = ActiveDescendant;


class Details extends IDREFAttrType {}
/* unused harmony export Details */


class ErrorMessage extends IDREFAttrType {}
/* harmony export (immutable) */ __webpack_exports__["b"] = ErrorMessage;



/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


const ID_REF_SEPARATOR = ' '
const idMap = ({ id }) => id

class IDREFListAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {*} value {Array|String|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else {
            if(Array.isArray(value)) {
                this.node.value = value.map(idMap).join(ID_REF_SEPARATOR)
            }
            else {
                const isObject = typeof value === 'object'
                this.node.value = isObject && 'id' in value?
                    value.id :
                    value
            }
        }
    }

    /**
     * @returns {NodeAssembler[]}
     */
    get value() {
        const value = this.node.value
        return value?
            value.split(ID_REF_SEPARATOR).map(id => {
                const element = id?
                    this.ownerDocument.getElementById(id) :
                    null
                return element && element.role || element
            }) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (Array.isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}
/* unused harmony export IDREFListAttrType */


class Controls extends IDREFListAttrType {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controls;


class DescribedBy extends IDREFListAttrType {}
/* unused harmony export DescribedBy */


class FlowTo extends IDREFListAttrType {}
/* unused harmony export FlowTo */


class LabelledBy extends IDREFListAttrType {}
/* harmony export (immutable) */ __webpack_exports__["b"] = LabelledBy;


class Owns extends IDREFListAttrType {}
/* harmony export (immutable) */ __webpack_exports__["c"] = Owns;



/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


class IntegerAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.node.value)
    }

    /**
     * @param {Number} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return isNaN(value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return NaN
    }
}
/* unused harmony export IntegerAttrType */


class ColCount extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColCount;


class ColIndex extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["b"] = ColIndex;


class ColSpan extends IntegerAttrType {}
/* unused harmony export ColSpan */


class Level extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["c"] = Level;


class PosInSet extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["d"] = PosInSet;


class RowCount extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["e"] = RowCount;


class RowIndex extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["f"] = RowIndex;


class RowSpan extends IntegerAttrType {}
/* unused harmony export RowSpan */


class SetSize extends IntegerAttrType {}
/* harmony export (immutable) */ __webpack_exports__["g"] = SetSize;



/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


class NumberAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.node.value)
    }

    /**
     * @param {Number} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return isNaN(value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return NaN
    }
}
/* unused harmony export NumberAttrType */


class ValueMax extends NumberAttrType {}
/* harmony export (immutable) */ __webpack_exports__["a"] = ValueMax;


class ValueMin extends NumberAttrType {}
/* harmony export (immutable) */ __webpack_exports__["b"] = ValueMin;


class ValueNow extends NumberAttrType {}
/* harmony export (immutable) */ __webpack_exports__["c"] = ValueNow;



/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates whether an element is modal when displayed.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-modal
 */
class Modal extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;



/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates whether a text box accepts multiple lines of input or only a single line.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-multiline
 */
class Multiline extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Multiline;



/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates that the user may select more than one item from the current selectable descendants.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable
 */
class Multiselectable extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Multiselectable;



/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token__ = __webpack_require__(62);


class Pressed extends __WEBPACK_IMPORTED_MODULE_0__token__["i" /* TokenAttrType */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.onClick = this.onClick.bind(this)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        this.value = String(this.value === 'false')
    }

    /**
     * @returns {AttrAssembler}
     */
    remove() {
        this.ownerElement.un('click', this.onClick)
        return super.remove()
    }

    /**
     * @param {Button|null|*} ownerElement
     */
    set ownerElement(ownerElement) {
        if(super.ownerElement = ownerElement) {
            this.getInstance(ownerElement).on('click', this.onClick)
        }
    }

    /**
     * @returns {Button|null|*}
     */
    get ownerElement() {
        return super.ownerElement
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pressed;



/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates that the element is not editable, but is otherwise operable.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
 */
class ReadOnly extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = ReadOnly;



/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boolean__ = __webpack_require__(5);


/**
 * Indicates that user input is required on the element before a form may be submitted.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#aria-required
 */
class Required extends __WEBPACK_IMPORTED_MODULE_0__boolean__["a" /* BooleanAttrType */] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Required;



/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


class StringAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {String} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === this.defaultValue
    }
}
/* unused harmony export StringAttrType */


class KeyShortCuts extends StringAttrType {}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyShortCuts;


class Label extends StringAttrType {}
/* harmony export (immutable) */ __webpack_exports__["b"] = Label;


class Placeholder extends StringAttrType {}
/* unused harmony export Placeholder */


class RoleDescription extends StringAttrType {}
/* harmony export (immutable) */ __webpack_exports__["c"] = RoleDescription;


class ValueText extends StringAttrType {}
/* harmony export (immutable) */ __webpack_exports__["d"] = ValueText;



/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(6);


const TOKEN_NONE = 'none'
const TOKEN_SEPARATOR = ' '

class TokenListAttrType extends __WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ARIAAttrAssembler */] {
    /**
     * @param {...String} tokens
     */
    addTokens(...tokens) {
        const value = this.value
        tokens.forEach(token => {
            if(!value.includes(token)) value.push(token)
        })
        this.value = value
    }

    /**
     * @param {String} token
     * @returns {Boolean}
     */
    containsToken(token) {
        return this.value.includes(token)
    }

    /*remove() {
        if(this.ownerElement) super.remove()
    }*/

    /**
     * @param {...String} tokens
     * @returns {AttrAssembler}
     */
    removeTokens(...tokens) {
        if(tokens.length) {
            const value = this.value
            tokens.forEach(token => {
                const index = value.indexOf(token)
                if(index > -1) value.splice(index, 1)
            })
            this.value = value
        }
    }

    /**
     * @param {*} value {String[]|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(Array.isArray(value)) {
            const list = value.filter(Boolean)
            if(list.length) {
                this.node.value = list.join(TOKEN_SEPARATOR)
            }
            else this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String[]}
     */
    get value() {
        const value = this.node.value
        return value? value.split(TOKEN_SEPARATOR) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (Array.isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}
/* unused harmony export TokenListAttrType */


class DropEffect extends TokenListAttrType {
    /**
     * @returns {{String}[]}
     */
    /*static get value() {
        return [TOKEN_NONE]
    }*/
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DropEffect;


class Relevant extends TokenListAttrType {}
/* harmony export (immutable) */ __webpack_exports__["b"] = Relevant;



/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A type of live region with important, and usually time-sensitive, information.
 * https://www.w3.org/TR/wai-aria-1.1/#alert
 */
class Alert extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @param {String} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["u" /* Live */])? super.live : 'assertive'
    }

    /**
     * @param {Boolean} atomic
     */
    set atomic(atomic) {
        super.atomic = atomic
    }

    /**
     * @returns {Boolean}
     */
    get atomic() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["b" /* Atomic */])? super.atomic : true
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Alert */


/**
 * @param {...*} [init]
 * @returns {Alert}
 */
function alert(...init) {
    return new Alert(...init)
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export alertDialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_htmlmodule__ = __webpack_require__(1);



/**
 * A type of dialog that contains an alert message,
 * where initial focus goes to an element within the dialog.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#alertdialog
 */
class AlertDialog extends __WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* Dialog */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.modal = true
        this.createBackdrop()
        if(this.assertive) {
            this.onDocumentFocus = this.onDocumentFocus.bind(this)
            this.ownerDocument.on('focus', this.onDocumentFocus, true)
        }
        this.onResize = this.onResize.bind(this)
        window.addEventListener('resize', this.onResize)
        this.focus()
    }

    /**
     * Adjust dialog height
     */
    adjustHeight() {
        const node = this.ownerElement.node
        const style = window.getComputedStyle(node)
        const marginTop = Number(style.marginTop.replace('px', ''))
        const marginBottom = Number(style.marginBottom.replace('px', ''))
        let margin = marginTop + marginBottom
        if(isNaN(margin)) margin = 0
        node.style.maxHeight = window.innerHeight < node.scrollHeight + margin?
            window.innerHeight - margin + 'px' :
            'none'
    }

    /**
     * Create a backdrop
     */
    createBackdrop() {
        this._backdrop = new __WEBPACK_IMPORTED_MODULE_1_htmlmodule__["c" /* Div */]({
            parentNode : document.body,
            className : 'backdrop',
            children : this
        })
        this.adjustHeight()
    }

    /**
     * Remove the dialog
     */
    remove() {
        if(this.assertive) {
            this.ownerDocument.un('focus', this.onDocumentFocus, true)
        }
        super.remove()
        this._backdrop.remove()
        window.removeEventListener('resize', this.onResize)
    }

    /**
     * @param {Node} target
     */
    onDocumentFocus({ target }) {
        if(!this.contains(target)) this.focus()
    }

    /**
     * @param {Event} event
     */
    onResize(event) {
        this.adjustHeight()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        const { widgets } = this
        const { target, shiftKey } = event
        const first = widgets[0]
        const last = widgets[widgets.length - 1]
        if(shiftKey && target === first) {
            event.preventDefault()
            last.focus()
        }
        else if(!shiftKey && target === last) {
            event.preventDefault()
            first.focus()
        }
        else super.onTabKeyDown(event)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AlertDialog;


/**
 * @param {*} [init]
 * @returns {AlertDialog}
 */
function alertDialog(...init) {
    return new AlertDialog(...init)
}


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export article */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A section of a page that consists of a composition that forms
 * an independent part of a document, page, or site.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#article
 */
class Article extends __WEBPACK_IMPORTED_MODULE_1__document__["a" /* ARIADocument */] {
    /**
     * @param {Number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["A" /* PosInSet */], posInSet)
    }

    /**
     * @returns {Number}
     */
    get posInSet () {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["A" /* PosInSet */])
    }

    /**
     * @param {Number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["J" /* SetSize */], setSize)
    }

    /**
     * @returns {Number}
     */
    get setSize () {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["J" /* SetSize */])
    }

    /**
     * @returns {Function} Article
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["b" /* Article */]
    }
}
/* unused harmony export Article */


/**
 * @param {...*} [init]
 * @returns {Article}
 */
function article(...init) {
    return new Article(...init)
}


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export application */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A structure containing one or more focusable elements requiring user input,
 * such as keyboard or gesture events, that do not follow a standard interaction
 * pattern supported by a widget role.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#application
 */
class Application extends __WEBPACK_IMPORTED_MODULE_1__structure__["a" /* Structure */] {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */], activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["a" /* ActiveDescendant */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* unused harmony export Application */


/**
 * @param {*} init
 * @returns {Application}
 */
function application(...init) {
    return new Application(...init)
}


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export banner */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landmark__ = __webpack_require__(8);



/**
 * A region that contains mostly site-oriented content, rather than page-specific content.
 * https://www.w3.org/TR/wai-aria-1.1/#banner
 */
class Banner extends __WEBPACK_IMPORTED_MODULE_1__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["f" /* Header */]
    }
}
/* unused harmony export Banner */


/**
 * @param {*} init
 * @returns {Banner}
 */
function banner(...init) {
    return new Banner(...init)
}


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A checkable input that has three possible values: true, false, or mixed.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#checkbox
 */
class Checkbox extends __WEBPACK_IMPORTED_MODULE_1__input__["a" /* Input */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._input = null
        this.tabIndex = 0
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mouseup', this.onMouseUp.bind(this))
        this.on('blur', () => this.active = false)
        this.on('mouseleave', () => this.active = false)
        super.init(init)
    }

    /**
     * Activate the checkbox
     */
    activate() {
        if(!this.readOnly) {
            this.checked = String(this.checked === 'false')
            this.emit('change', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) event.stopImmediatePropagation()
        else this.activate()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.active = true
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.disabled) this.active = true
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        if(!this.disabled) this.active = false
    }

    /**
     * @param {Boolean} active
     */
    set active(active) {
        this.classList.toggle('active', active)
    }

    /**
     * @returns {Boolean}
     */
    get active() {
        return this.classList.contains('active')
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        if(checked === 'true') {
            this.input.parentNode = this
        }
        else this.input.remove()
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["d" /* Checked */], checked)
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["d" /* Checked */]) || 'false'
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = this.input.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput}
     */
    get input() {
        let input = this._input
        if(!input) {
            input = this._input = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["g" /* Input */]({
                type : 'hidden',
                value : 'on'
            })
            if(this.checked === 'true') {
                input.parentNode = this
            }
        }
        return input
    }

    /**
     * @param {String} label
     */
    set label(label) {
        super.children = [
            this.labelledBy = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["h" /* Label */]({
                id : this.id + '-label',
                children : label
            })
        ]
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @retrurns {String} 
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["C" /* ReadOnly */])
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Checkbox;


/**
 * @param {*} init
 * @returns {Checkbox}
 */
function checkbox(...init) {
    return new Checkbox(...init)
}


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textbox__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__option__ = __webpack_require__(30);







/**
 * A composite widget containing a single-line textbox and another element,
 * such as a listbox or grid, that can dynamically pop up to help the user
 * set the value of the textbox.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
class Combobox extends __WEBPACK_IMPORTED_MODULE_1__select__["a" /* Select */] {
    /**
     * @param {*} init
     */
    init(init) {
        this.children = [
            new __WEBPACK_IMPORTED_MODULE_2__textbox__["a" /* Textbox */]({
                onkeydown : this.onTextBoxKeyDown.bind(this),
                oninput : this.onTextBoxInput.bind(this),
                onclick : this.onTextBoxClick.bind(this)
            }),
            new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]({
                tabIndex : NaN,
                onclick : this.onButtonClick.bind(this),
                innerHTML : '&nbsp;'
            }),
            new __WEBPACK_IMPORTED_MODULE_4__listbox__["a" /* Listbox */]({
                tabIndex : NaN,
                classList : 'popup',
                onchange : this.onListBoxChange.bind(this),
                onclick : this.onListBoxClick.bind(this)
            })
        ]
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        super.init(init)
    }

    /**
     * Clear the listbox
     */
    clear() {
        this.listbox.options.forEach(option => option.remove())
    }

    /**
     * @param {Event} event
     */
    onTextBoxInput(event) {
        const value = this.value.trim()
        const regexp = new RegExp(value, 'i')
        if(value.length) {
            const filtered = this.options.filter(({ textContent }) => {
                return regexp.test(textContent)
            })
            if(filtered.length) {
                const regexp = new RegExp(`^${ value }$`, 'i')
                this.rebuild(filtered)
                this.listbox.options.forEach(opt => {
                    if(regexp.test(opt.textContent)) opt.selected = 'true'
                    return opt
                })
                this.invalid = 'false'
            }
            else {
                this.rebuild()
                this.invalid = 'true'
            }
            this.expanded = 'true'
        }
        else {
            this.rebuild()
            this.invalid = 'false'
            this.listbox.value = ''
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onTextBoxClick(event) {
        this.textbox.readOnly && this.toggle()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTextBoxKeyDown(event) {
        const key = event.key
        const textbox = this.textbox
        switch(key) {
            case 'Escape':
                this.onEscapeKeyDown(event)
                break
            case 'Enter':
                this.onEnterKeyDown(event)
                break
            case ' ':
                if(textbox.readOnly) this.toggle()
                break
            case 'Tab':
                this.expanded = 'false'
                break
            default:
                if(['ArrowUp', 'ArrowDown'].includes(key)) {
                    this.onArrowKeyDown(event)
                }
                else if(!event.metaKey && textbox.readOnly) {
                    event.preventDefault()
                }
        }
    }
    
    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const listbox = this.listbox
        this.expanded = 'true'
        listbox.onKeyDown(event)
        event.preventDefault()
    }

    /**
     * @param {MouseEvent} event
     */
    onButtonClick(event) {
        this.textbox.focus()
        this.toggle()
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        if(!this.ownerElement.contains(event.target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.ownerElement.contains(event.target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        event.stopPropagation()
        this.value = this.listbox.text
        this.toggle()
        this.invalid = 'false'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.value) {
            event.stopPropagation()
            this.value = ''
            this.clear()
        }
        else if(this.expanded === 'true') {
            event.stopPropagation()
            this.expanded = 'false'
        }
        this.rebuild()
        this.invalid = 'false'
    }

    /**
     * @param {Event} event
     */
    onListBoxChange(event) {
        const listbox = this.listbox
        this.value = listbox.text
        this.activeDescendant = listbox.activeDescendant
        this.invalid = 'false'
    }

    /**
     * @param {MouseEvent} event
     */
    onListBoxClick(event) {
        this.textbox.focus()
        this.expanded = 'false'
    }

    /**
     * @param {{ textContent }[]} options
     */
    rebuild(options = this.options) {
        this.clear()
        this.listbox.options = options.map(opt => new __WEBPACK_IMPORTED_MODULE_5__option__["a" /* Option */](opt))
    }

    /**
     * Remove the combobox
     */
    remove() {
        this.ownerDocument.un('click', this.onDocumentClick)
        this.ownerDocument.un('focus', this.onDocumentFocus, true)
        super.remove()
    }

    /**
     * Toggle the expanded state
     */
    toggle() {
        this.expanded = String(this.expanded === 'false')
    }

    /**
     * @param {Option|null} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ActiveDescendant */], activeDescendant)
    }

    /**
     * @returns {Option|null}
     */
    get activeDescendant() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["a" /* ActiveDescendant */])
    }

    /**
     * 
     * @returns {RoleAttrAssembler|ElementAssembler|*}
     */
    get button() {
        return this.find(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */])
    }

    set disabled(disabled) {
        this.textbox.disabled = disabled
        this.button.disabled = disabled
        this.listbox.disabled = disabled
        super.disabled = disabled
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["l" /* Expanded */], expanded)
        if(expanded === 'true' && !this.listbox.options.length) {
            this.rebuild()
        }
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["l" /* Expanded */])?
            this.getAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["l" /* Expanded */]) :
            'false'
    }

    /**
     * @param {String} hasPopup
     */
    set hasPopup(hasPopup) {
        super.hasPopup = hasPopup
    }

    /**
     * @returns {String}
     */
    get hasPopup() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["n" /* HasPopup */])?
            super.hasPopup :
            'listbox'
    }

    /**
     * @param {String} invalid
     */
    set invalid(invalid) {
        if(invalid !== this.invalid) {
            super.invalid = invalid
            if(invalid === 'true') this.rebuild()
        }
    }

    /**
     * @returns {String}
     */
    get invalid() {
        return super.invalid
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.textbox.label = label
    }

    /**
     * @returns {String} 
     */
    get label() {
        return this.textbox.label
    }

    /**
     * @returns {Listbox|null}
     */
    get listbox() {
        return this.find(__WEBPACK_IMPORTED_MODULE_4__listbox__["a" /* Listbox */])
    }

    /**
     * @param {{ textContent }[]} options
     */
    set options(options) {
        this.dataset.options = JSON.stringify(options)
    }

    /**
     * @returns {{ textContent }[]}
     */
    get options() {
        return JSON.parse(this.dataset.options)
    }

    /**
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.ownerDocument.on('click', this.onDocumentClick)
        this.ownerDocument.on('focus', this.onDocumentFocus, true)
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.textbox.readOnly = readOnly
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["C" /* ReadOnly */])
    }

    /**
     * @returns {Textbox|null}
     */
    get textbox() {
        return this.find(__WEBPACK_IMPORTED_MODULE_2__textbox__["a" /* Textbox */])
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.textbox.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.textbox.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Combobox;



/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export complementary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landmark__ = __webpack_require__(8);


/**
 * A supporting section of the document, designed to be complementary
 * to the main content at a similar level in the DOM hierarchy,
 * but remains meaningful when separated from the main content.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#complementary
 */
class Complementary extends __WEBPACK_IMPORTED_MODULE_0__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Complementary */


/**
 * @param {...*} [init]
 * @returns {Complementary}
 */
function complementary(...init) {
    return new Complementary(...init)
}


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export contentInfo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landmark__ = __webpack_require__(8);



/**
 * A large perceivable region that contains information about the parent document.
 * https://www.w3.org/TR/wai-aria-1.1/#contentinfo
 */
class ContentInfo extends __WEBPACK_IMPORTED_MODULE_1__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["d" /* Footer */]
    }
}
/* unused harmony export ContentInfo */


/**
 * @param {*} init
 * @returns {ContentInfo}
 */
function contentInfo(...init) {
    return new ContentInfo(...init)
}


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export definition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A definition of a term or concept.
 * https://www.w3.org/TR/wai-aria-1.1/#definition
 */
class Definition extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Definition */


/**
 * @param {...*} [init]
 * @returns {Definition}
 */
function definition(...init) {
    return new Definition(...init)
}


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export directory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(45);


/**
 * A list of references to members of a group, such as a static table of contents.
 * https://www.w3.org/TR/wai-aria-1.1/#directory
 */
class Directory extends __WEBPACK_IMPORTED_MODULE_0__list__["a" /* List */] {}
/* unused harmony export Directory */


/**
 * @param {...*} [init]
 * @returns {Directory}
 */
function directory(...init) {
    return new Directory(...init)
}


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export feed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list__ = __webpack_require__(45);



/**
 * A scrollable list of articles where scrolling may cause
 * articles to be added to or removed from either end of the list.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#feed
 */
class Feed extends __WEBPACK_IMPORTED_MODULE_1__list__["a" /* List */] {
    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* unused harmony export Feed */


/**
 * @param {...*} [init]
 * @returns {Feed}
 */
function feed(...init) {
    return new Feed(...init)
}


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export figure */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A perceivable section of content that typically contains
 * a graphical document, images, code snippets, or example text.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#figure
 */
class Figure extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Figure */


/**
 * @param {...*} [init]
 * @returns {Figure}
 */
function figure(...init) {
    return new Figure(...init)
}


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row__ = __webpack_require__(46);


class GridRow extends __WEBPACK_IMPORTED_MODULE_0__row__["a" /* Row */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = -1
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        if(['Enter', ' '].includes(event.key)) {
            event.preventDefault()
            this.emit('click', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        let row
        if(event.key === 'ArrowUp') row = this.previousRow
        if(event.key === 'ArrowDown') row = this.nextRow
        if(row) {
            event.preventDefault()
            this.tabIndex = -1
            row.tabIndex = 0
            row.focus()
        }
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        if(!this.elementIndex) this.tabIndex = 0
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GridRow;



/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dataCell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridcell__ = __webpack_require__(19);



const CHARACTER_KEY_RE = /^[a-zа-я0-9!\/\$%\.\s]$/i

class DataCell extends __WEBPACK_IMPORTED_MODULE_1__gridcell__["a" /* GridCell */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.on('dblclick', this.onDoubleClick.bind(this))
    }

    /**
     * @param {KeyboardEvent} event
     */
    onInputKeyPress(event) {
        // Fix for MS Windows, where event.key is not equal 'Enter'
        if(event.code === 'Enter') {
            if(event.ctrlKey) this.insertLineBreak()
            else event.preventDefault()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onInputKeyDown(event) {
        if(event.key === 'Enter') {
            if(event.metaKey) {
                this.insertLineBreak(event.target)
                event.stopPropagation()
            }
            else if(event.ctrlKey) event.stopPropagation()
            else event.preventDefault()
        }
    }

    /**
     * Insert a line break in the multiline input field
     */
    insertLineBreak() {
        const input = this.input
        const value = input.value
        const start = value.substr(0, input.selectionStart)
        const end = value.substr(input.selectionEnd)
        const index = start.length + 1
        input.value = start + '\n' + end
        input.setSelectionRange(index, index)
    }

    /**
     * @param {Event} event
     */
    onInputChange(event) {
        event.stopPropagation()
    }

    /**
     * @param {MouseEvent} event
     */
    onDoubleClick(event) {
        this.mode = 'edit'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        super.onKeyDown(event)
        if(CHARACTER_KEY_RE.test(event.key)) {
            this.onCharacterKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onCharacterKeyDown(event) {
        if(this.mode === 'navigation' && !event.metaKey) {
            this.mode = 'edit'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSelectAllKeyDown(event) {
        if(this.mode === 'navigation') {
            super.onSelectAllKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onBackspaceKeyDown(event) {
        event.preventDefault()
        if(!this.readOnly && this.mode !== 'edit') {
            const grid = this.grid
            const selectedCells = grid.selectedCells
            const { value, rowSpan } = this
            if(event.metaKey || event.ctrlKey) {
                if(value) {
                    this.confirmClear(() => {
                        this.value = ''
                        if(rowSpan > 1) this.rowSpan = 1
                        this.emit('change', { bubbles : true })
                    })
                }
                else if(rowSpan > 1) this.rowSpan = 1
                grid.activeDescendant = this
            }
            else if(selectedCells.length > 1 || rowSpan > 1) {
                super.onBackspaceKeyDown(event)
            }
            else if(value) {
                this.confirmClear(() => {
                    this.value = ''
                    this.emit('change', { bubbles : true })
                })
            }
        }
    }

    confirmClear(callback) {
        callback.call(this)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.mode === 'edit') {
            this.value = this.dataset.value || ''
            this.mode = 'navigation'
            this.focus()
        }
        else super.onEscapeKeyDown(event)
    }

    /**
     * @param {FocusEvent} event
     */
    onInputBlur(event) {
        this.mode = 'navigation'
    }

    /**
     * @param event
     */
    onEnterKeyDown(event) {
        const grid = this.grid
        if(this.mode === 'edit') {
            this.mode = 'navigation'
            this.focus()
        }
        else if(this.selected === 'true'
            && grid.multiselectable
            && grid.selectedCells.length > 1) {
            super.onEnterKeyDown(event)
        }
        else this.mode = 'edit'
    }

    /**
     * Clear the grid cell
     */
    clear() {
        this.value = ''
        if(this.owns.length) this.owns = []
    }

    /**
     * Set the edit mode
     */
    setEditMode() {
        this.dataset.mode = 'edit'
        this.textElement.hidden = true
        this.input.hidden = false
        this.input.focus()
    }

    /**
     * Set the navigation mode
     */
    setNavigationMode() {
        const change = this.dataset.value !== this.input.value
        this.dataset.mode = 'navigation'
        this.value = this.input.value
        this.input.hidden = true
        this.textElement.hidden = false
        if(change) this.emit('change', { bubbles : true })
    }

    /**
     * @param {String} mode
     */
    set mode(mode) {
        if(!this.readOnly && mode !== this.mode) {
            if(mode === 'edit') this.setEditMode()
            else this.setNavigationMode()
        }
    }

    /**
     * @returns {String}
     */
    get mode() {
        return this.dataset.mode || 'navigation'
    }

    /**
     * @returns {TextArea}
     */
    get input() {
        return this.find(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["o" /* TextArea */]) || new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["o" /* TextArea */]({
            parentNode : this,
            hidden : true,
            onblur : this.onInputBlur.bind(this),
            onchange : this.onInputChange.bind(this),
            onkeypress : this.onInputKeyPress.bind(this),
            onkeydown : this.onInputKeyDown.bind(this)
        })
    }

    /**
     * @param {String} value
     */
    set value(value) {
        super.value = this.input.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataCell;


/**
 * @param {...*} [init]
 * @returns {GridCell}
 */
function dataCell(...init) {
    return new DataCell(...init)
}


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export heading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sectionhead__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * A heading for a section of the page.
 * https://www.w3.org/TR/wai-aria-1.1/#heading
 */
class Heading extends __WEBPACK_IMPORTED_MODULE_1__sectionhead__["a" /* SectionHead */] {
    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["t" /* Level */], level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["t" /* Level */])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Heading;


/**
 * @param {*} init
 * @returns {Heading}
 */
function heading(...init) {
    return new Heading(...init)
}


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export headRowGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rowgroup__ = __webpack_require__(47);



class HeadRowGroup extends __WEBPACK_IMPORTED_MODULE_1__rowgroup__["a" /* RowGroup */] {
    /**
     * @returns {Function} THead
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["l" /* THead */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadRowGroup;


/**
 * @param {*} [init]
 * @returns {HeadRowGroup}
 */
function headRowGroup(...init) {
    return new HeadRowGroup(...init)
}


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export img */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section__ = __webpack_require__(3);



/**
 * A container for a collection of elements that form an image.
 * https://www.w3.org/TR/wai-aria-1.1/#img
 */
class Img extends __WEBPACK_IMPORTED_MODULE_1__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }
}
/* unused harmony export Img */


function img(...init) {
    return new Img(...init)
}


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__command__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aria__ = __webpack_require__(2);




/**
 * An interactive reference to an internal or external resource that,
 * when activated, causes the user agent to navigate to that resource.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#link
 */
class Link extends __WEBPACK_IMPORTED_MODULE_1__command__["a" /* Command */] {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_2__aria__["l" /* Expanded */])
    }

    /**
     * @param {String} href
     */
    set href(href) {
        this.ownerElement.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.ownerElement.href
    }

    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.ownerElement.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.ownerElement.rel
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["a" /* A */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Link;


/**
 * @param {*} [init]
 * @returns {Link}
 */
function link(...init) {
    return new Link(...init)
}


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export log */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A type of live region where new information is added
 * in meaningful order and old information may disappear.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#log
 */
class Log extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @param {String} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["u" /* Live */])? super.live : 'polite'
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Log */


/**
 * @param {...*} [init]
 * @returns {Log}
 */
function log(...init) {
    return new Log(...init)
}


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export main */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landmark__ = __webpack_require__(8);



/**
 * The main content of a document.
 * https://www.w3.org/TR/wai-aria-1.1/#main
 */
class Main extends __WEBPACK_IMPORTED_MODULE_1__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["i" /* Main */]
    }
}
/* unused harmony export Main */


/**
 * @param {*} [init]
 * @returns {Main}
 */
function main(...init) {
    return new Main(...init)
}


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export marquee */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A type of live region where non-essential information changes frequently.
 * https://www.w3.org/TR/wai-aria-1.1/#marquee
 */
class Marquee extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @param {String} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["u" /* Live */])? super.live : 'off'
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Marquee */


/**
 * @param {...*} [init]
 * @returns {Marquee}
 */
function marquee(...init) {
    return new Marquee(...init)
}


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export math */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * Content that represents a mathematical expression.
 * https://www.w3.org/TR/wai-aria-1.1/#math
 */
class Math extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Math */


/**
 * @param {...*} [init]
 * @returns {Math}
 */
function math(...init) {
    return new Math(...init)
}


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export menuButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(16);


class MenuButton extends __WEBPACK_IMPORTED_MODULE_0__button__["a" /* Button */] {
    /**
     * @param {*} init
     */
    init(init) {
        super.init(init)
        this.hasPopup = 'menu'
        this.expanded = 'false'
        this.menu.classList.add('popup')
        this.menu.on('keydown', this.onMenuKeyDown.bind(this))
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
    }

    /**
     * Activate the menu button
     */
    activate() {
        this.expanded = String(this.expanded === 'false')
    }

    /**
     * @param {HTMLElement} target
     */
    onDocumentClick({ target }) {
        if(!this.contains(target) && !this.menu.contains(target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {HTMLElement} target
     */
    onDocumentFocus({ target }) {
        const node = this.ownerElement.node
        const menu = this.menu
        if(target !== node && !menu.contains(target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {String} key
     */
    onMenuKeyDown({ key }) {
        if(key === 'Escape') {
            this.expanded = 'false'
            this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        super.onKeyDown(event)
        const key = event.key
        if(key === 'ArrowDown' || key === 'ArrowUp') {
            if(this.expanded === 'false') this.expanded = 'true'
            const items = this.menu.items
            items[key === 'ArrowDown'? 0 : items.length - 1].focus()
            event.preventDefault()
        }
        if(key === 'Escape') this.expanded = 'false'
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        const document = this.ownerDocument
        super.expanded = expanded
        this.menu.hidden = expanded === 'false'
        if(expanded === 'true') {
            document.on('click', this.onDocumentClick)
            document.on('focus', this.onDocumentFocus, true)
        } else {
            document.un('click', this.onDocumentClick)
            document.un('focus', this.onDocumentFocus, true)
        }
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {Menu} menu
     */
    set menu(menu) {
        menu.trigger = this
        this.controls = this._menu = menu
    }

    /**
     * @returns {Menu}
     */
    get menu() {
        return this._menu
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.ownerElement.after(this.menu.ownerElement)
    }

    /**
     * @returns {*}
     */
    get parentNode() {
        return super.parentNode
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuButton;


/**
 * @param {*} [init]
 * @returns {MenuButton}
 */
function menuButton(...init) {
    return new MenuButton(...init)
}


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export menuItemLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuitem__ = __webpack_require__(48);



class MenuItemLink extends __WEBPACK_IMPORTED_MODULE_1__menuitem__["a" /* MenuItem */] {
    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key !== 'Enter') {
            super.onKeyDown(event)
        }
    }

    /**
     * @param { KeyboardEvent } event
     */
    onKeyUp(event) {
        super.onKeyUp(event)
        if(event.key === ' ') {
            if(this.href) location = this.href
        }
    }

    /**
     * @param {String} href
     */
    set href(href) {
        this.ownerElement.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.ownerElement.href
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.ownerElement.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.ownerElement.target
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["a" /* A */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuItemLink;


/**
 * @param {*} [init]
 * @returns {MenuItemLink}
 */
function menuItemLink(...init) {
    return new MenuItemLink(...init)
}


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textbox__ = __webpack_require__(44);



class MultiTextbox extends __WEBPACK_IMPORTED_MODULE_1__textbox__["a" /* Textbox */] {
    /**
     * @param {Boolean} multiline
     */
    set multiline(multiline) {}

    /**
     * @returns {Boolean}
     */
    get multiline() {
        return true
    }

    /**
     * @returns {TextArea}
     */
    static get inputAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["o" /* TextArea */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MultiTextbox;



/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export navigation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landmark__ = __webpack_require__(8);


/**
 * A collection of navigational elements (usually links)
 * for navigating the document or related documents.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#navigation
 */
class Navigation extends __WEBPACK_IMPORTED_MODULE_0__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Navigation */


/**
 * @param {...*} [init]
 * @returns {Navigation}
 */
function navigation(...init) {
    return new Navigation(...init)
}


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role__ = __webpack_require__(42);


class None extends __WEBPACK_IMPORTED_MODULE_0__role__["a" /* RoleAttrAssembler */] {}
/* unused harmony export None */



/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export note */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A section whose content is parenthetic or ancillary to the main content of the resource.
 * https://www.w3.org/TR/wai-aria-1.1/#note
 */
class Note extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Note */


/**
 * @param {...*} [init]
 * @returns {Note}
 */
function note(...init) {
    return new Note(...init)
}


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export region */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landmark__ = __webpack_require__(8);


/**
 * A perceivable section containing content that is relevant to a specific, author-specified
 * purpose and sufficiently important that users will likely want to be able to navigate
 * to the section easily and to have it listed in a summary of the page.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#region
 */
class Region extends __WEBPACK_IMPORTED_MODULE_0__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Region */


/**
 * @param {...*} [init]
 * @returns {Region}
 */
function region(...init) {
    return new Region(...init)
}


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landmark__ = __webpack_require__(8);


/**
 * A landmark region that contains a collection of items and objects that,
 * as a whole, combine to create a search facility.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#search
 */
class Search extends __WEBPACK_IMPORTED_MODULE_0__landmark__["a" /* Landmark */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Search */


/**
 * @param {...*} [init]
 * @returns {Search}
 */
function search(...init) {
    return new Search(...init)
}


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__option__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aria__ = __webpack_require__(2);







class Selectbox extends __WEBPACK_IMPORTED_MODULE_1__select__["a" /* Select */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.children = [
            new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]({
                hasPopup : 'listbox',
                onclick : this.onButtonClick.bind(this)
            }),
            new __WEBPACK_IMPORTED_MODULE_4__listbox__["a" /* Listbox */]({
                tabIndex : NaN,
                classList : 'popup',
                onchange : this.onListBoxChange.bind(this)
            })
        ]
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        super.init(init)
    }

    /**
     * Focus the selectbox
     */
    focus() {
        this.button.focus()
    }

    /**
     * @param {MouseEvent} event
     */
    onButtonClick(event) {
        const expanded = this.expanded
        if(expanded === 'true') {
            if(!this.multiselectable || !this.find(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-checked]')) {
                this.expanded = 'false'
            }
        }
        else this.expanded = 'true'
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        if(!this.contains(target)) {
            this.expanded = 'false'
        }
        if(this.listbox.contains(target)) {
            if(this.multiselectable) {
                this.focus()
            }
            else {
                this.expanded = 'false'
                this.focus()
            }
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.contains(event.target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Enter') event.stopPropagation()
        if(key === 'Escape' && this.expanded === 'true') {
            event.stopPropagation()
            this.expanded = 'false'
        }
        else if(key === ' ' && !event.repeat) {
            this.onSpaceKeyDown(event)
        }
        else if(key.startsWith('Arrow')) {
            event.preventDefault()
            if(this.expanded === 'false') {
                this.expanded = 'true'
            }
            else this.listbox.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            if(this.expanded === 'false' || this.multiselectable) {
                this.listbox.onSpaceKeyUp(event)
            }
        }
    }

    /**
     * @param {CustomEvent} event
     */
    onListBoxChange(event) {
        event.stopPropagation()
        this.button.textContent = this.listbox.text || '—'
        this.emit('change', { bubbles : true, detail : event.detail })
    }

    /**
     * @param event
     */
    onSpaceKeyDown(event) {
        if(this.expanded === 'true' && this.find(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-checked]')) {
            this.listbox.onSpaceKeyDown(event)
        }
    }

    /**
     * @returns {Button|null}
     */
    get button() {
        return this.find(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */])
    }

    set disabled(disabled) {
        this.button.disabled = disabled
        this.listbox.disabled = disabled
        super.disabled = disabled
    }

    get disabled() {
        return super.disabled
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        const doc = this.ownerDocument
        if(expanded === 'true') {
            const listbox = this.listbox
            if(!listbox.selectedOption) {
                listbox.options[0].selected = 'true'
            }
            doc.on('click', this.onDocumentClick)
            doc.on('focus', this.onDocumentFocus, true)
        }
        else {
            doc.un('click', this.onDocumentClick)
            doc.un('focus', this.onDocumentFocus, true)
        }
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["l" /* Expanded */], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["l" /* Expanded */])?
            this.getAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["l" /* Expanded */]) :
            'false'
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const instance = this.labelledBy[0]
        if(instance) instance.textContent = label
        else {
            const instance = new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["h" /* Label */]({
                id : this.id + '-label',
                onclick : () => this.focus(),
                children : label
            })
            this.labelledBy = [instance]
            this.ownerElement.prepend(instance)
        }
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @returns {Listbox|null}
     */
    get listbox() {
        return this.find(__WEBPACK_IMPORTED_MODULE_4__listbox__["a" /* Listbox */])
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.listbox.multiselectable = multiselectable
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.listbox.multiselectable
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.listbox.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.listbox.name
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        const listbox = this.listbox
        listbox.options = options
        const option = this.find(__WEBPACK_IMPORTED_MODULE_2__option__["a" /* Option */], '[aria-checked]')?
            listbox.checkedOption :
            listbox.selectedOption || options[0]
        this.text = option? option.textContent : '—'
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this.listbox.options
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.listbox.readOnly = readOnly
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_5__aria__["C" /* ReadOnly */])
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.button.textContent = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.button.textContent
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.listbox.options.forEach(option => {
            option.selected = String(option.value === value)
        })
        this.listbox.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.listbox.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Span
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Selectbox;


/**
 * @param {...*} [init]
 * @returns {Selectbox}
 */
function selectbox(...init) {
    return new Selectbox(...init)
}


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export separator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structure__ = __webpack_require__(11);


/**
 * A divider that separates and distinguishes
 * sections of content or groups of menuitems.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#separator
 */
class Separator extends __WEBPACK_IMPORTED_MODULE_0__structure__["a" /* Structure */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Separator */


/**
 * @param {...*} [init]
 * @returns {Separator}
 */
function separator(...init) {
    return new Separator(...init)
}


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export slider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



const { some } = Array.prototype
const { ELEMENT_NODE } = Node
const DEFAULT_VALUE_MAX = 100
const DEFAULT_VALUE_MIN = 0

/**
 * A user input where the user selects a value from within a given range.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#slider
 * https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
class Slider extends __WEBPACK_IMPORTED_MODULE_0__range__["a" /* ARIARange */] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = 0
        this.setupObserver()
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        event.preventDefault()
        const { valueMin, valueMax } = this
        const node = this.parentNode.node
        const width = this.ownerElement.node.offsetWidth
        const parentWidth = node.clientWidth - width
        const x = event.pageX - getPageLeft(node) - width / 2
        this.valueNow = Math.round((valueMax - valueMin) * x / parentWidth) + valueMin
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const ownerDocument = this.node.ownerDocument
        ownerDocument.removeEventListener('mouseup', this.onMouseUp)
        ownerDocument.removeEventListener('mousemove', this.onMouseMove)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            event.preventDefault()
            switch(key) {
                case 'ArrowDown': case 'ArrowLeft': this.valueNow--; break
                case 'ArrowUp': case 'ArrowRight': this.valueNow++; break
            }
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        const ownerDocument = this.node.ownerDocument
        ownerDocument.addEventListener('mousemove', this.onMouseMove)
        ownerDocument.addEventListener('mouseup', this.onMouseUp)
    }

    /**
     * Setup the initializing mutation observer
     */
    setupObserver() {
        const element = this.ownerElement.node
        const observer = new MutationObserver(records => {
            for(let record of records) {
                const stop = some.call(record.addedNodes, node => {
                    if(node.nodeType === ELEMENT_NODE && node.contains(element)) {
                        this.updatePosition()
                        return true
                    }
                    else return false
                })
                if(stop) {
                    observer.disconnect()
                    break
                }
            }
        })
        observer.observe(this.node.ownerDocument, { childList : true, subtree : true })
    }

    /**
     * Update position of the slider
     */
    updatePosition() {
        const { valueMax, valueMin, valueNow } = this
        const parentWidth = this.parentNode.node.clientWidth
        const width = this.ownerElement.node.offsetWidth
        const step = (parentWidth - width) / (valueMax - valueMin)
        this.style.left = Math.round((valueNow - valueMin) * step) + 'px'
    }

    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["y" /* Orientation */], orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["y" /* Orientation */]) || 'horizontal'
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["C" /* ReadOnly */], readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["C" /* ReadOnly */])
    }

    /**
     * @param {Number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {Number}
     */
    get valueMax() {
        const value = super.valueMax
        return isNaN(value)? DEFAULT_VALUE_MAX : value
    }

    /**
     * @param {Number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {Number}
     */
    get valueMin() {
        const value = super.valueMin
        return isNaN(value)? DEFAULT_VALUE_MIN : value
    }

    /**
     * @param {Number} valueNow
     */
    set valueNow(valueNow) {
        const nextSibling = this.getRole(this.ownerElement.nextElementSibling)
        const max = nextSibling? nextSibling.valueNow : this.valueMax
        const previousSibling = this.getRole(this.ownerElement.previousElementSibling)
        const min = previousSibling? previousSibling.valueNow : this.valueMin
        super.valueNow = Math.min(Math.max(valueNow, min), max)
        if(this.node.ownerDocument.contains(this.ownerElement.node)) {
            this.updatePosition()
        }
    }

    /**
     * @returns {Number}
     */
    get valueNow() {
        const { valueMin, valueMax } = this
        const valueNow = super.valueNow
        const value = isNaN(valueNow)?
            valueMin + Math.round((valueMax - valueMin) / 2) :
            valueNow
        return Math.min(Math.max(value, valueMin), valueMax)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;


/**
 * @param {*} [init]
 * @returns {Slider}
 */
function slider(...init) {
    return new Slider(...init)
}

function getPageLeft(node) {
    let left = node.offsetLeft
    while(node = node.offsetParent) {
        left += node.offsetLeft
    }
    return left
}


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composite__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aria__ = __webpack_require__(2);





class TabList extends __WEBPACK_IMPORTED_MODULE_1__composite__["a" /* Composite */] {
    /**
     * @param {{}} [init]
     */
    init(init) {
        this.on('focus', this.onFocus.bind(this), true)
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const targetTab = this.getRole(event.target)
        if(targetTab instanceof __WEBPACK_IMPORTED_MODULE_2__tab__["a" /* Tab */]) {
            this.tabs.forEach(tab => {
                tab.selected = String(tab === targetTab)
            })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const tab = this.getRole(event.target, __WEBPACK_IMPORTED_MODULE_2__tab__["a" /* Tab */])
        if(tab instanceof __WEBPACK_IMPORTED_MODULE_2__tab__["a" /* Tab */]) {
            const tabs = this.tabs
            const key = event.key
            const index = tabs.indexOf(tab)
            let direction
            if(this.orientation === 'vertical') {
                if(key === 'ArrowUp') direction = -1
                if(key === 'ArrowDown') direction = 1
            }
            else {
                if(key === 'ArrowLeft') direction = -1
                if(key === 'ArrowRight') direction = 1
            }
            if(direction) {
                event.preventDefault()
                let nextTab = tabs[index + direction]
                if(!nextTab) {
                    nextTab = direction > 0? tabs[0] : tabs[tabs.length - 1]
                }
                nextTab.focus()
            }
        }
    }

    /**
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.tabs.forEach(tab => {
            const panel = tab.panel
            if(panel && !panel.parentNode) {
                panel.labelledBy = tab
                panel.expanded = tab.selected
                panel.parentNode = parentNode
            }
        })
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }

    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["t" /* Level */], level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["t" /* Level */])
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["x" /* Multiselectable */], multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["x" /* Multiselectable */])
    }

    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["y" /* Orientation */], orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_3__aria__["y" /* Orientation */]) || 'horizontal'
    }

    /**
     * @returns {Tab[]}
     */
    get tabs() {
        return this.findAll(__WEBPACK_IMPORTED_MODULE_2__tab__["a" /* Tab */])
    }

    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["c" /* Div */]
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TabList;



/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export term */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A word or phrase with a corresponding definition.
 * https://www.w3.org/TR/wai-aria-1.1/#term
 */
class Term extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Term */


/**
 * @param {...*} [init]
 * @returns {Term}
 */
function term(...init) {
    return new Term(...init)
}


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aria__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status__ = __webpack_require__(74);



/**
 * A type of live region containing a numerical counter which indicates an amount
 * of elapsed time from a start point, or the time remaining until an end point.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#timer
 */
class Timer extends __WEBPACK_IMPORTED_MODULE_1__status__["a" /* Status */] {
    /**
     * @param {String} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.hasAttribute(__WEBPACK_IMPORTED_MODULE_0__aria__["u" /* Live */])? super.live : 'off'
    }
}
/* unused harmony export Timer */


/**
 * @param {...*} [init]
 * @returns {Timer}
 */
function timer(...init) {
    return new Timer(...init)
}


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aria__ = __webpack_require__(2);



/**
 * A collection of commonly used function buttons
 * or controls represented in compact visual form.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#toolbar
 */
class Toolbar extends __WEBPACK_IMPORTED_MODULE_0__group__["a" /* Group */] {
    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["y" /* Orientation */], orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(__WEBPACK_IMPORTED_MODULE_1__aria__["y" /* Orientation */])
    }
}
/* unused harmony export Toolbar */


/**
 * @param {*} [init]
 * @returns {Toolbar}
 */
function toolbar(...init) {
    return new Toolbar(...init)
}


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section__ = __webpack_require__(3);


/**
 * A contextual popup that displays a description for an element.
 * https://www.w3.org/TR/wai-aria-1.1/#tooltip
 */
class Tooltip extends __WEBPACK_IMPORTED_MODULE_0__section__["a" /* Section */] {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
/* unused harmony export Tooltip */


/**
 * @param {...*} [init]
 * @returns {Tooltip}
 */
function tooltip(...init) {
    return new Tooltip(...init)
}


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_index__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Button')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib_index__["b" /* Button */]('Simple')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib_index__["b" /* Button */]({
                pressed : 'true',
                children : 'Pressed toggle button'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib_index__["b" /* Button */]({
                disabled : true,
                children : 'Disabled'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib_index__["b" /* Button */]({
                pressed : 'true',
                disabled : true,
                children : 'Pressed and disabled'
            })
        ])
    ]
})


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);
// import { form, input, label } from 'htmlmodule'



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Checkbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* Checkbox */]({
                label : 'Simple',
                name : 'checkbox-simple',
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* Checkbox */]({
                label : 'Checked',
                name : 'checkbox-checked',
                checked : 'true',
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* Checkbox */]({
                label : 'Read only',
                readOnly : true,
                name : 'checkbox-readonly',
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* Checkbox */]({
                label : 'Checked read only',
                checked : 'true',
                readOnly : true,
                name : 'checkbox-readonly',
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* Checkbox */]({
                label : 'Disabled',
                name : 'checkbox-disabled',
                disabled : true
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* Checkbox */]({
                label : 'Checked and disabled',
                name : 'checkbox-checked-disabled',
                checked : 'true',
                disabled : true
            })
        ])
    ]
})

/*article({
    parentNode : document.body,
    children : form([
        h1('Native checkbox'),
        section([
            label([
                input({
                    type : 'checkbox',
                    name : 'checkbox-no-value',
                }),
                'Native checkbox'
            ])
        ]),
        section([
            label([
                input({
                    type : 'checkbox',
                    name : 'checkbox-has-value',
                    value : 'test',
                    checked : true
                }),
                'Native checkbox'
            ])
        ])
    ])
})*/


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Radio group')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["x" /* RadioGroup */]({
                label : 'Simple',
                radios : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '1', label : 'First' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '2', label : 'Second' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '3', label : 'Third' })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["x" /* RadioGroup */]({
                label : 'Checked',
                radios : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '1', label : 'First' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '2',
                        checked : 'true',
                        label : 'Second'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '3', label : 'Third' })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["x" /* RadioGroup */]({
                label : 'Single disabled',
                radios : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '1',
                        disabled: true,
                        label : 'First'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '2',
                        label : 'Second'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '3',
                        label : 'Third'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["x" /* RadioGroup */]({
                label : 'Checked and single disabled',
                radios : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '1',
                        checked : true,
                        label : 'First'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '2',
                        disabled: true,
                        label : 'Second'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '3',
                        label : 'Third'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["x" /* RadioGroup */]({
                label : 'Group disabled',
                disabled : true,
                radios : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '1', label : 'First' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({ value : '2', label : 'Second' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["w" /* Radio */]({
                        value : '3',
                        checked : 'true',
                        label : 'Third'
                    })
                ]
            })
        ])
    ]
})


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Listbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["p" /* Listbox */]({
                label : 'Simple',
                name : 'listbox-simple',
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '1', children : 'First option' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '2', children : 'Second option' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '3', children : 'Third option' })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["p" /* Listbox */]({
                label : 'Multiselectable',
                name : 'listbox-multiselectable',
                multiselectable : true,
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '1', children : 'First option' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '2', children : 'Second option' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '3', children : 'Third option' })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["p" /* Listbox */]({
                label : 'Read only',
                readOnly : true,
                name : 'listbox-readonly',
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '1', children : 'First option' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '2', children : 'Second option' }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({ value : '3', children : 'Third option' })
                ]
            })
        ]),
        /*section([
            new Listbox({
                label : 'Disabled',
                disabled : true,
                options : [
                    new Option({ value : '1', children : 'First option' }),
                    new Option({ value : '2', children : 'Second option' }),
                    new Option({ value : '3', children : 'Third option' })
                ]
            })
        ])*/
    ]
})

Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Check listbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["p" /* Listbox */]({
                label : 'Simple',
                name : 'check-listbox-simple',
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '1',
                        checked : 'false',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '2',
                        checked : 'false',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '3',
                        checked : 'false',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["p" /* Listbox */]({
                label : 'Multiselectable',
                name : 'check-listbox-multiselectable',
                multiselectable : true,
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '1',
                        checked : 'false',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '2',
                        checked : 'false',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '3',
                        checked : 'false',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["p" /* Listbox */]({
                label : 'Read only',
                name : 'check-listbox-readonly',
                readOnly : true,
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '1',
                        checked : 'false',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '2',
                        checked : 'false',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '3',
                        checked : 'false',
                        children : 'Third option'
                    })
                ]
            })
        ])
    ]
})


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Textbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["G" /* Textbox */]({
                label : 'Simple',
                name : 'textbox-simple'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["G" /* Textbox */]({
                label : 'Has placeholder',
                name : 'textbox-placeholder',
                placeholder : 'Hint'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["G" /* Textbox */]({
                label : 'Read only',
                readOnly : true,
                name : 'textbox-simple'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["G" /* Textbox */]({
                label : 'Disabled',
                name : 'textbox-disabled',
                disabled : true
            })
        ])
    ]
})

Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Multi textbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["u" /* MultiTextbox */]({
                label : 'Simple',
                name : 'textbox-multiline',
                multiline : true
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["u" /* MultiTextbox */]({
                label : 'Has placeholder',
                name : 'textbox-multiline-placeholder',
                placeholder : 'Hint',
                multiline : true
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["u" /* MultiTextbox */]({
                label : 'Disabled',
                name : 'textbox-multiline-disabled',
                disabled : true,
                multiline : true
            })
        ])
    ]
})


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Selectbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["B" /* Selectbox */]({
                label : 'Simple',
                name : 'selectbox-simple',
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '1',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '2',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["B" /* Selectbox */]({
                label : 'Multiselectable',
                name : 'selectbox-multiselectable',
                multiselectable : true,
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '1',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '2',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        new __WEBPACK_IMPORTED_MODULE_1__lib__["B" /* Selectbox */]({
            label : 'Read only',
            readOnly : true,
            name : 'selectbox-readonly',
            options : [
                new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                    value : '1',
                    children : 'First option'
                }),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                    value : '2',
                    children : 'Second option'
                }),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                    value : '3',
                    children : 'Third option'
                })
            ]
        })
    ]
})
Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Check selectbox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["B" /* Selectbox */]({
                label : 'Simple',
                name : 'check-selectbox-simple',
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '1',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '2',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["B" /* Selectbox */]({
                label : 'Multiselectable',
                name : 'check-selectbox-multiselectable',
                multiselectable : true,
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '1',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '2',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["B" /* Selectbox */]({
                label : 'Read only',
                name : 'check-selectbox-readonly',
                readOnly : true,
                options : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '1',
                        children : 'First option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '2',
                        children : 'Second option'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["v" /* Option */]({
                        checked : 'false',
                        value : '3',
                        children : 'Third option'
                    })
                ]
            })
        ])
    ]
})


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stub_countrysuggest__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stub_countrysuggest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stub_countrysuggest__);




Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Combobox')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["f" /* Combobox */]({
                label : 'Simple',
                options : __WEBPACK_IMPORTED_MODULE_2__stub_countrysuggest___default.a.map(({ id, name }) => ({
                    value : id,
                    textContent : name
                }))
            })
        ])
    ]
})


/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = [{"id":"29386","name":"Абхазия","code":"7"},{"id":"211","name":"Австралия","code":"61"},{"id":"113","name":"Австрия","code":"43"},{"id":"167","name":"Азербайджан","code":"994"},{"id":"10054","name":"Албания","code":"355"},{"id":"20826","name":"Алжир","code":"213"},{"id":"21553","name":"Американские Виргинские острова","code":"1340"},{"id":"21534","name":"Ангилья","code":"1264"},{"id":"21182","name":"Ангола","code":"244"},{"id":"10088","name":"Андорра","code":"376"},{"id":"20856","name":"Антигуа и Барбуда","code":"1268"},{"id":"93","name":"Аргентина","code":"54"},{"id":"168","name":"Армения","code":"374"},{"id":"21536","name":"Аруба","code":"297"},{"id":"10090","name":"Афганистан","code":"93"},{"id":"21325","name":"Багамские острова","code":"1242"},{"id":"10091","name":"Бангладеш","code":"880"},{"id":"21019","name":"Барбадос","code":"1246"},{"id":"10532","name":"Бахрейн","code":"973"},{"id":"149","name":"Беларусь","code":"375"},{"id":"21544","name":"Белиз","code":"501"},{"id":"114","name":"Бельгия","code":"32"},{"id":"20869","name":"Бенин","code":"229"},{"id":"21546","name":"Бермудские Острова","code":"1441"},{"id":"115","name":"Болгария","code":"359"},{"id":"10015","name":"Боливия","code":"591"},{"id":"10057","name":"Босния и Герцеговина","code":"387"},{"id":"21239","name":"Ботсвана","code":"267"},{"id":"94","name":"Бразилия","code":"55"},{"id":"21559","name":"Британские Виргинские острова","code":"1284"},{"id":"20274","name":"Бруней","code":"673"},{"id":"21165","name":"Буркина-Фасо","code":"226"},{"id":"21214","name":"Бурунди","code":"257"},{"id":"21550","name":"Бутан","code":"975"},{"id":"21556","name":"Вануату","code":"678"},{"id":"21359","name":"Ватикан","code":"3906698"},{"id":"102","name":"Великобритания","code":"44"},{"id":"116","name":"Венгрия","code":"36"},{"id":"21184","name":"Венесуэла","code":"58"},{"id":"21562","name":"Восточный Тимор","code":"670"},{"id":"10093","name":"Вьетнам","code":"84"},{"id":"21137","name":"Габон","code":"241"},{"id":"21321","name":"Гаити","code":"509"},{"id":"21477","name":"Гайана","code":"592"},{"id":"21010","name":"Гамбия","code":"220"},{"id":"20802","name":"Гана","code":"233"},{"id":"20968","name":"Гватемала","code":"502"},{"id":"20818","name":"Гвинея","code":"224"},{"id":"21143","name":"Гвинея-Бисау","code":"245"},{"id":"96","name":"Германия","code":"49"},{"id":"10089","name":"Гибралтар","code":"350"},{"id":"21175","name":"Гондурас","code":"504"},{"id":"21426","name":"Гренада","code":"1473"},{"id":"21567","name":"Гренландия","code":"299"},{"id":"246","name":"Греция","code":"30"},{"id":"169","name":"Грузия","code":"995"},{"id":"20747","name":"Гуам","code":"1671"},{"id":"203","name":"Дания","code":"45"},{"id":"20762","name":"Демократическая Республика Конго","code":"243"},{"id":"21475","name":"Джибути","code":"253"},{"id":"20746","name":"Доминика","code":"1767"},{"id":"20917","name":"Доминиканская Республика","code":"1809 1829 1849"},{"id":"1056","name":"Египет","code":"20"},{"id":"21196","name":"Замбия","code":"260"},{"id":"20954","name":"Зимбабве","code":"263"},{"id":"181","name":"Израиль","code":"972"},{"id":"994","name":"Индия","code":"91"},{"id":"10095","name":"Индонезия","code":"62"},{"id":"10535","name":"Иордания","code":"962"},{"id":"20572","name":"Ирак","code":"964"},{"id":"10536","name":"Иран","code":"98"},{"id":"10063","name":"Ирландия","code":"353"},{"id":"10064","name":"Исландия","code":"354"},{"id":"204","name":"Испания","code":"34"},{"id":"205","name":"Италия","code":"39"},{"id":"21551","name":"Йемен","code":"967"},{"id":"21326","name":"Кабо-Верде","code":"238"},{"id":"159","name":"Казахстан","code":"7"},{"id":"21570","name":"Каймановы острова","code":"1345"},{"id":"20975","name":"Камбоджа","code":"855"},{"id":"20736","name":"Камерун","code":"237"},{"id":"95","name":"Канада","code":"1"},{"id":"21486","name":"Катар","code":"974"},{"id":"21223","name":"Кения","code":"254"},{"id":"20574","name":"Кипр","code":"357"},{"id":"207","name":"Киргизия","code":"996"},{"id":"21572","name":"Кирибати","code":"686"},{"id":"134","name":"Китай","code":"86"},{"id":"10029","name":"Кокосовые острова","code":"61891"},{"id":"21191","name":"Колумбия","code":"57"},{"id":"21297","name":"Коморские острова","code":"269"},{"id":"21131","name":"Коста-Рика","code":"506"},{"id":"20733","name":"Кот-д’Ивуар","code":"225"},{"id":"10017","name":"Куба","code":"53"},{"id":"10537","name":"Кувейт","code":"965"},{"id":"21538","name":"Кюрасао","code":"5999"},{"id":"20972","name":"Лаос","code":"856"},{"id":"206","name":"Латвия","code":"371"},{"id":"21261","name":"Лесото","code":"266"},{"id":"21278","name":"Либерия","code":"231"},{"id":"10538","name":"Ливан","code":"961"},{"id":"10023","name":"Ливия","code":"218"},{"id":"117","name":"Литва","code":"370"},{"id":"10067","name":"Лихтенштейн","code":"423"},{"id":"21203","name":"Люксембург","code":"352"},{"id":"21241","name":"Маврикий","code":"230"},{"id":"21349","name":"Мавритания","code":"222"},{"id":"20854","name":"Мадагаскар","code":"261"},{"id":"10068","name":"Македония","code":"389"},{"id":"21151","name":"Малави","code":"265"},{"id":"10097","name":"Малайзия","code":"60"},{"id":"21004","name":"Мали","code":"223"},{"id":"10098","name":"Мальдивы","code":"960"},{"id":"10069","name":"Мальта","code":"356"},{"id":"10020","name":"Марокко","code":"212"},{"id":"101521","name":"Мартиника","code":"596"},{"id":"21578","name":"Маршалловы острова","code":"692"},{"id":"20271","name":"Мексика","code":"52"},{"id":"21235","name":"Мозамбик","code":"258"},{"id":"208","name":"Молдова","code":"373"},{"id":"10070","name":"Монако","code":"377"},{"id":"10099","name":"Монголия","code":"976"},{"id":"37176","name":"Монтсеррат","code":"1664"},{"id":"10100","name":"Мьянма","code":"95"},{"id":"21217","name":"Намибия","code":"264"},{"id":"21582","name":"Науру","code":"674"},{"id":"10101","name":"Непал","code":"977"},{"id":"21339","name":"Нигер","code":"227"},{"id":"20741","name":"Нигерия","code":"234"},{"id":"118","name":"Нидерланды","code":"31"},{"id":"21231","name":"Никарагуа","code":"505"},{"id":"98542","name":"Ниуэ","code":"683"},{"id":"139","name":"Новая Зеландия","code":"64"},{"id":"21584","name":"Новая Каледония","code":"687"},{"id":"119","name":"Норвегия","code":"47"},{"id":"98539","name":"Норфолк","code":"672"},{"id":"210","name":"Объединённые Арабские Эмираты","code":"971"},{"id":"21586","name":"Оман","code":"968"},{"id":"21574","name":"Острова Кука","code":"682"},{"id":"10102","name":"Пакистан","code":"92"},{"id":"21589","name":"Палау","code":"680"},{"id":"98552","name":"Палестина","code":"970"},{"id":"21299","name":"Панама","code":"507"},{"id":"20739","name":"Папуа-Новая Гвинея","code":"675"},{"id":"20992","name":"Парагвай","code":"595"},{"id":"21156","name":"Перу","code":"51"},{"id":"120","name":"Польша","code":"48"},{"id":"10074","name":"Португалия","code":"351"},{"id":"20764","name":"Пуэрто-Рико","code":"1787 1939"},{"id":"21198","name":"Республика Конго","code":"242"},{"id":"225","name":"Россия","code":"7"},{"id":"21371","name":"Руанда","code":"250"},{"id":"10077","name":"Румыния","code":"40"},{"id":"84","name":"США","code":"1"},{"id":"20769","name":"Сальвадор","code":"503"},{"id":"20860","name":"Самоа","code":"685"},{"id":"20790","name":"Сан-Марино","code":"378"},{"id":"21199","name":"Сан-Томе и Принсипи","code":"239"},{"id":"10540","name":"Саудовская Аравия","code":"966"},{"id":"20789","name":"Сахарская Арабская Демократическая Республика","code":"212 213"},{"id":"21251","name":"Свазиленд","code":"268"},{"id":"10104","name":"Северная Корея","code":"850"},{"id":"10022","name":"Сейшельские острова","code":"248"},{"id":"21441","name":"Сенегал","code":"221"},{"id":"20754","name":"Сент-Винсент и Гренадины","code":"1784"},{"id":"21042","name":"Сент-Китс и Невис","code":"1869"},{"id":"21395","name":"Сент-Люсия","code":"1758"},{"id":"180","name":"Сербия","code":"381"},{"id":"10105","name":"Сингапур","code":"65"},{"id":"109724","name":"Синт-Мартен","code":"1721"},{"id":"10542","name":"Сирия","code":"963"},{"id":"121","name":"Словакия","code":"421"},{"id":"122","name":"Словения","code":"386"},{"id":"20915","name":"Соломоновы острова","code":"677"},{"id":"21227","name":"Сомали","code":"252"},{"id":"20957","name":"Судан","code":"249"},{"id":"21344","name":"Суринам","code":"597"},{"id":"21219","name":"Сьерра-Леоне","code":"232"},{"id":"209","name":"Таджикистан","code":"992"},{"id":"995","name":"Таиланд","code":"66"},{"id":"21208","name":"Танзания","code":"255"},{"id":"21171","name":"Того","code":"228"},{"id":"21599","name":"Тонга","code":"676"},{"id":"21187","name":"Тринидад и Тобаго","code":"1868"},{"id":"21601","name":"Тувалу","code":"688"},{"id":"10024","name":"Тунис","code":"216"},{"id":"170","name":"Туркмения","code":"993"},{"id":"983","name":"Турция","code":"90"},{"id":"21595","name":"Тёркс и Кайкос","code":"1649"},{"id":"21230","name":"Уганда","code":"256"},{"id":"171","name":"Узбекистан","code":"998"},{"id":"187","name":"Украина","code":"380"},{"id":"21289","name":"Уругвай","code":"598"},{"id":"21580","name":"Федеративные Штаты Микронезии","code":"691"},{"id":"10030","name":"Фиджи","code":"679"},{"id":"10108","name":"Филиппины","code":"63"},{"id":"123","name":"Финляндия","code":"358"},{"id":"101519","name":"Фолклендские острова","code":"500"},{"id":"124","name":"Франция","code":"33"},{"id":"21451","name":"Французская Гвиана","code":"594"},{"id":"21330","name":"Французская Полинезия","code":"689"},{"id":"10083","name":"Хорватия","code":"385"},{"id":"21007","name":"Центрально-Африканская Республика","code":"236"},{"id":"21331","name":"Чад","code":"235"},{"id":"21610","name":"Черногория","code":"382"},{"id":"125","name":"Чехия","code":"420"},{"id":"20862","name":"Чили","code":"56"},{"id":"126","name":"Швейцария","code":"41"},{"id":"127","name":"Швеция","code":"46"},{"id":"10109","name":"Шри-Ланка","code":"94"},{"id":"20785","name":"Эквадор","code":"593"},{"id":"21045","name":"Экваториальная Гвинея","code":"240"},{"id":"20989","name":"Эритрея","code":"291"},{"id":"179","name":"Эстония","code":"372"},{"id":"20768","name":"Эфиопия","code":"251"},{"id":"10021","name":"ЮАР","code":"27"},{"id":"135","name":"Южная Корея","code":"82"},{"id":"29387","name":"Южная Осетия","code":"7"},{"id":"108137","name":"Южный Судан","code":"211"},{"id":"10013","name":"Ямайка","code":"1876"},{"id":"137","name":"Япония","code":"81"}]

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



class CancelButton extends __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */] {
    activate() {
        const dialog = this.closest(__WEBPACK_IMPORTED_MODULE_1__lib__["h" /* Dialog */])
        if(dialog) dialog.cancel()
    }
}

Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Menu button')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["r" /* MenuButton */]({
                menu : new __WEBPACK_IMPORTED_MODULE_1__lib__["q" /* Menu */]([
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["s" /* MenuItem */]('Menu item'),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["t" /* MenuItemLink */]({
                        href : '//yandex.ru',
                        children : 'Menu item link'
                    }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["s" /* MenuItem */]({
                        onclick : ({ target }) => {
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* AlertDialog */]({
                                trigger : __WEBPACK_IMPORTED_MODULE_1__lib__["s" /* MenuItem */].getRole(target),
                                children : [
                                    new __WEBPACK_IMPORTED_MODULE_1__lib__["n" /* Heading */]('Dialog from menu'),
                                    Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])('This dialog demonstrates how to create a dialog from a popup menu.'),
                                    new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]('Ok'), ' ',
                                    new CancelButton('Cancel')
                                ]
                            })
                        },
                        children : 'Menu item dialog'
                    }),
                ]),
                children : 'Simple menu'
            })
        ])
    ]
})


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



class CancelButton extends __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */] {
    activate() {
        const dialog = this.closest(__WEBPACK_IMPORTED_MODULE_1__lib__["h" /* Dialog */])
        if(dialog) dialog.cancel()
    }
}

Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Dialog')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]({
                onclick : ({ target }) => {
                    const btn = __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */].prototype.getRole(target)
                    const dlg = btn.controls[0]
                    if(dlg) dlg.remove()
                    else {
                        btn.after(new __WEBPACK_IMPORTED_MODULE_1__lib__["h" /* Dialog */]({
                            trigger : btn,
                            children : [
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["n" /* Heading */]('Dialog'),
                                Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])('This is a simple dialog.'),
                                Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])(['It closes on the ', Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["u" /* kbd */])('Escape'), ' key press or an outside click.']),
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]('Ok'), ' ',
                                new CancelButton('Cancel')
                            ]
                        }))
                    }
                },
                expanded : 'false',
                children : 'Simple dialog'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]({
                onclick : ({ target }) => {
                    const btn = __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */].prototype.getRole(target)
                    const dlg = btn.controls[0]
                    if(dlg) dlg.remove()
                    else {
                        btn.after(new __WEBPACK_IMPORTED_MODULE_1__lib__["h" /* Dialog */]({
                            trigger : btn,
                            assertive : true,
                            children : [
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["n" /* Heading */]('Assertive dialog'),
                                Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])('This dialog is assertive.'),
                                Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])(['It doesn\'t close on the ', Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["u" /* kbd */])('Escape'), ' key press or an outside click.']),
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]('Ok'), ' ',
                                new CancelButton('Cancel')
                            ]
                        }))
                    }
                },
                expanded : 'false',
                children : 'Assertive dialog'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]({
                onclick : ({ target }) => {
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* AlertDialog */]({
                        trigger : __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */].prototype.getRole(target),
                        children : [
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["n" /* Heading */]('Alert dialog'),
                            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])('This is a simple alert dialog.'),
                            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])(['It is modal, but it closes on the ', Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["u" /* kbd */])('Escape'), ' key press or an outside click.']),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]('Ok'), ' ',
                            new CancelButton('Cancel')
                        ]
                    })
                },
                expanded : 'false',
                children : 'Alert dialog'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]({
                onclick : ({ target }) => {
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* AlertDialog */]({
                        trigger : __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */].prototype.getRole(target),
                        assertive : true,
                        children : [
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["n" /* Heading */]('Assertive alert dialog'),
                            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])('This modal dialog is assertive.'),
                            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["w" /* p */])(['It doesn\'t close on the ', Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["u" /* kbd */])('Escape'), ' key press or an outside click.']),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* Button */]('Ok'), ' ',
                            new CancelButton('Cancel')
                        ]
                    })
                },
                expanded : 'false',
                children : 'Assertive alert dialog'
            })
        ])
    ]
})


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Tree')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["H" /* Tree */]([
                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                    label : 'First',
                    expanded : 'true',
                    group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Nested 1' }),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Nested 2' })
                    ])
                }),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                    label : 'Second',
                    expanded : 'true',
                    group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                            label : 'Nested 1',
                            expanded : 'true',
                            group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                                    label : 'Subnested',
                                    expanded : 'true',
                                    group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Deepnested 1' }),
                                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Deepnested 2' })
                                    ])
                                })
                            ])
                        }),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                            label : 'Nested 2',
                            expanded : 'false',
                            group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Subnested 1' }),
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Subnested 2' })
                            ])
                        })
                    ])
                }),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                    label : 'Third',
                    expanded : 'true',
                    group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({
                            label : 'Nested 1',
                            expanded : 'false',
                            group : new __WEBPACK_IMPORTED_MODULE_1__lib__["l" /* Group */]([
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Subnested I' }),
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Subnested II' }),
                                new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Subnested III' })
                            ])
                        }),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["I" /* TreeItem */]({ label : 'Nested 2' })
                    ])
                })
            ])
        ])
    ]
})


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Grid')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["i" /* Grid */]({
                label : 'Simple',
                content : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["m" /* HeadRowGroup */](new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */],
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('One'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Two'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Three')
                    ])),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["z" /* RowGroup */](['A', 'B', 'C'].map(header => {
                        return new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */](header),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["j" /* GridCell */],
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["j" /* GridCell */],
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["j" /* GridCell */]
                        ])
                    }))
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["i" /* Grid */]({
                label : 'Multiselectable',
                multiselectable : true,
                content : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["m" /* HeadRowGroup */](new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */],
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('One'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Two'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Three')
                    ])),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["z" /* RowGroup */](['A', 'B', 'C'].map(header => {
                        return new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */](header),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["j" /* GridCell */]({ selected : 'false' }),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["j" /* GridCell */]({ selected : 'false' }),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["j" /* GridCell */]({ selected : 'false' })
                        ])
                    }))
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["i" /* Grid */]({
                label : 'Interactive rows',
                content : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["m" /* HeadRowGroup */](new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */],
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('One'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Two'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Three')
                    ])),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["z" /* RowGroup */](['A', 'B', 'C'].map(header => {
                        return new __WEBPACK_IMPORTED_MODULE_1__lib__["k" /* GridRow */]([
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */](header),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* Cell */],
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* Cell */],
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* Cell */]
                        ])
                    }))
                ]
            })
        ])
    ]
})
Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Data grid')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["i" /* Grid */]({
                label : 'Multiselectable',
                multiselectable : true,
                content : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["m" /* HeadRowGroup */](new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */],
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('One'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Two'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Three')
                    ])),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["z" /* RowGroup */](['A', 'B', 'C'].map(header => {
                        return new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */](header),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["g" /* DataCell */]({ selected : 'false' }),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["g" /* DataCell */]({ selected : 'false' }),
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["g" /* DataCell */]({ selected : 'false' })
                        ])
                    }))
                ]
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            new __WEBPACK_IMPORTED_MODULE_1__lib__["i" /* Grid */]({
                label : 'Draggable cells',
                multiselectable : true,
                content : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["m" /* HeadRowGroup */](new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */],
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('One'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Two'),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["e" /* ColumnHeader */]('Three')
                    ])),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["z" /* RowGroup */](['A', 'B', 'C'].map(header => {
                        return new __WEBPACK_IMPORTED_MODULE_1__lib__["y" /* Row */]([
                            new __WEBPACK_IMPORTED_MODULE_1__lib__["A" /* RowHeader */](header),
                            [1, 2, 3].map(() => {
                                return new __WEBPACK_IMPORTED_MODULE_1__lib__["g" /* DataCell */]({
                                    grabbed : 'false',
                                    selected : 'false'
                                })
                            })
                        ])
                    }))
                ]
            })
        ])
    ]
})


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    id : 'example-tablist',
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Tab list')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])('Horizontal'),
            new __WEBPACK_IMPORTED_MODULE_1__lib__["E" /* TabList */]([
                new __WEBPACK_IMPORTED_MODULE_1__lib__["D" /* Tab */]({
                    id : 'tab1',
                    controls : 'tabpanel1',
                    selected : 'true',
                    children : 'First'
                }),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["D" /* Tab */]({
                    id : 'tab2',
                    controls : 'tabpanel2',
                    children : 'Second'
                }),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["D" /* Tab */]({
                    id : 'tab3',
                    controls : 'tabpanel3',
                    children : 'Third'
                })
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__lib__["F" /* TabPanel */]({
                id : 'tabpanel1',
                labelledBy : 'tab1',
                expanded : 'true',
                children : '1'
            }),
            new __WEBPACK_IMPORTED_MODULE_1__lib__["F" /* TabPanel */]({
                id : 'tabpanel2',
                labelledBy : 'tab2',
                expanded : 'false',
                children : '2'
            }),
            new __WEBPACK_IMPORTED_MODULE_1__lib__["F" /* TabPanel */]({
                id : 'tabpanel3',
                labelledBy : 'tab3',
                expanded : 'false',
                children : '3'
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])({
            id : 'tablist-vertical',
            children : [
                Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])('Vertical'),
                new __WEBPACK_IMPORTED_MODULE_1__lib__["E" /* TabList */]({
                    orientation : 'vertical',
                    children : [
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["D" /* Tab */]({
                            panel : new __WEBPACK_IMPORTED_MODULE_1__lib__["F" /* TabPanel */]('1'),
                            selected : 'true',
                            children : 'First'
                        }),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["D" /* Tab */]({
                            panel : new __WEBPACK_IMPORTED_MODULE_1__lib__["F" /* TabPanel */]('2'),
                            children : 'Second'
                        }),
                        new __WEBPACK_IMPORTED_MODULE_1__lib__["D" /* Tab */]({
                            panel : new __WEBPACK_IMPORTED_MODULE_1__lib__["F" /* TabPanel */]('3'),
                            children : 'Third'
                        })
                    ]
                })
            ]
        })
    ]
})


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_htmlmodule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["s" /* article */])({
    parentNode : document.body,
    id : 'example-slider',
    children : [
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["t" /* h1 */])(Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["r" /* a */])('Slider')),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["v" /* label */])({ id : 'slider1', children : 'Simple' }),
            new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]({
                className : 'slidertrack',
                children : new __WEBPACK_IMPORTED_MODULE_1__lib__["C" /* Slider */]({ labelledBy : 'slider1' })
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["v" /* label */])({ id : 'slider2', children : 'Custom properties' }),
            new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]({
                className : 'slidertrack',
                children : new __WEBPACK_IMPORTED_MODULE_1__lib__["C" /* Slider */]({
                    labelledBy : 'slider2',
                    valueMin : -10,
                    valueNow : -5,
                    valueMax : 10
                })
            })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["x" /* section */])([
            Object(__WEBPACK_IMPORTED_MODULE_0_htmlmodule__["v" /* label */])({ id : 'slider3', children : 'Multi-thumb' }),
            new __WEBPACK_IMPORTED_MODULE_0_htmlmodule__["j" /* Span */]({
                className : 'slidertrack',
                children : [
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["C" /* Slider */]({ labelledBy : 'slider3', valueNow : 30 }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib__["C" /* Slider */]({ labelledBy : 'slider3', valueNow : 70 })
                ]
            })
        ])
    ]
})


/***/ })
/******/ ]);