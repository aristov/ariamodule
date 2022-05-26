(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("htmlmodule"));
	else if(typeof define === 'function' && define.amd)
		define(["htmlmodule"], factory);
	else if(typeof exports === 'object')
		exports["ariamodule"] = factory(require("htmlmodule"));
	else
		root["ariamodule"] = factory(root["htmlmodule"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__2__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module ariamodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @see https://www.w3.org/TR/wai-aria
 */
module.exports = __webpack_require__(1)


/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(2)

const AriaTypeApplicable = __webpack_require__(3)
const AriaTypeBoolean = __webpack_require__(5)
const AriaTypeIdRef = __webpack_require__(6)
const AriaTypeIdRefList = __webpack_require__(7)
const AriaTypeInteger = __webpack_require__(8)
const AriaTypeNumber = __webpack_require__(9)
const AriaTypeString = __webpack_require__(10)
const AriaTypeToken = __webpack_require__(11)
const AriaTypeTokenList = __webpack_require__(12)
const AriaTypeTristate = __webpack_require__(13)
const RoleType = __webpack_require__(14)

exports.AriaActiveDescendant = class AriaActiveDescendant extends AriaTypeIdRef {}
exports.AriaAtomic = class AriaAtomic extends AriaTypeBoolean {}
exports.AriaAutoComplete = class AriaAutoComplete extends AriaTypeToken {}
exports.AriaBusy = class AriaBusy extends AriaTypeBoolean {}
exports.AriaChecked = class AriaChecked extends AriaTypeTristate {}
exports.AriaColCount = class AriaColCount extends AriaTypeInteger {}
exports.AriaColIndex = class AriaColIndex extends AriaTypeInteger {}
exports.AriaColSpan = class AriaColSpan extends AriaTypeInteger {}
exports.AriaControls = class AriaControls extends AriaTypeIdRefList {}
exports.AriaCurrent = class AriaCurrent extends AriaTypeToken { static defaultValue = false }
exports.AriaDescribedBy = class AriaDescribedBy extends AriaTypeIdRefList {}
exports.AriaDetails = class AriaDetails extends AriaTypeIdRef {}
exports.AriaDisabled = class AriaDisabled extends AriaTypeBoolean {}
exports.AriaDropEffect = class AriaDropEffect extends AriaTypeTokenList {}
exports.AriaErrorMessage = class AriaErrorMessage extends AriaTypeIdRef {}
exports.AriaExpanded = class AriaExpanded extends AriaTypeApplicable {}
exports.AriaFlowTo = class AriaFlowTo extends AriaTypeIdRefList {}
exports.AriaGrabbed = class AriaGrabbed extends AriaTypeApplicable {}
exports.AriaHasPopup = class AriaHasPopup extends AriaTypeToken { static defaultValue = false }
exports.AriaHidden = class AriaHidden extends AriaTypeApplicable {}
exports.AriaInvalid = class AriaInvalid extends AriaTypeToken { static defaultValue = false }
exports.AriaKeyShortcuts = class AriaKeyShortcuts extends AriaTypeString {}
exports.AriaLabel = class AriaLabel extends AriaTypeString {}
exports.AriaLabelledBy = class AriaLabelledBy extends AriaTypeIdRefList {}
exports.AriaLevel = class AriaLevel extends AriaTypeInteger {}
exports.AriaLive = class AriaLive extends AriaTypeToken {}
exports.AriaModal = class AriaModal extends AriaTypeBoolean {}
exports.AriaMultiLine = class AriaMultiLine extends AriaTypeBoolean {}
exports.AriaMultiSelectable = class AriaMultiSelectable extends AriaTypeBoolean {}
exports.AriaOrientation = class AriaOrientation extends AriaTypeToken {}
exports.AriaOwns = class AriaOwns extends AriaTypeIdRefList {}
exports.AriaPlaceholder = class AriaPlaceholder extends AriaTypeString {}
exports.AriaPosInSet = class AriaPosInSet extends AriaTypeInteger {}
exports.AriaPressed = class AriaPressed extends AriaTypeTristate {}
exports.AriaReadOnly = class AriaReadOnly extends AriaTypeBoolean {}
exports.AriaRelevant = class AriaRelevant extends AriaTypeTokenList {}
exports.AriaRequired = class AriaRequired extends AriaTypeBoolean {}
exports.AriaRoleDescription = class AriaRoleDescription extends AriaTypeString {}
exports.AriaRowCount = class AriaRowCount extends AriaTypeInteger {}
exports.AriaRowIndex = class AriaRowIndex extends AriaTypeInteger {}
exports.AriaRowSpan = class AriaRowSpan extends AriaTypeInteger {}
exports.AriaSelected = class AriaSelected extends AriaTypeApplicable {}
exports.AriaSetSize = class AriaSetSize extends AriaTypeInteger {}
exports.AriaSort = class AriaSort extends AriaTypeToken {}
exports.AriaValueMax = class AriaValueMax extends AriaTypeNumber {}
exports.AriaValueMin = class AriaValueMin extends AriaTypeNumber {}
exports.AriaValueNow = class AriaValueNow extends AriaTypeNumber {}
exports.AriaValueText = class AriaValueText extends AriaTypeString {}

exports.RoleAlert = class RoleAlert extends RoleType {}
exports.RoleAlertDialog = class RoleAlertDialog extends RoleType {}
exports.RoleApplication = class RoleApplication extends RoleType {}
exports.RoleArticle = class RoleArticle extends RoleType {}
exports.RoleBanner = class RoleBanner extends RoleType {}
exports.RoleBlockQuote = class RoleBlockQuote extends RoleType {}
exports.RoleButton = class RoleButton extends RoleType {}
exports.RoleCaption = class RoleCaption extends RoleType {}
exports.RoleCell = class RoleCell extends RoleType {}
exports.RoleCheckBox = class RoleCheckBox extends RoleType {}
exports.RoleColumnHeader = class RoleColumnHeader extends RoleType {}
exports.RoleComboBox = class RoleComboBox extends RoleType {}
exports.RoleCommand = class RoleCommand extends RoleType {}
exports.RoleComplementary = class RoleComplementary extends RoleType {}
exports.RoleComposite = class RoleComposite extends RoleType {}
exports.RoleContentInfo = class RoleContentInfo extends RoleType {}
exports.RoleDefinition = class RoleDefinition extends RoleType {}
exports.RoleDialog = class RoleDialog extends RoleType {}
exports.RoleDirectory = class RoleDirectory extends RoleType {}
exports.RoleDocument = class RoleDocument extends RoleType {}
exports.RoleFeed = class RoleFeed extends RoleType {}
exports.RoleFigure = class RoleFigure extends RoleType {}
exports.RoleForm = class RoleForm extends RoleType {}
exports.RoleGrid = class RoleGrid extends RoleType {}
exports.RoleGridCell = class RoleGridCell extends RoleType {}
exports.RoleGroup = class RoleGroup extends RoleType {}
exports.RoleHeading = class RoleHeading extends RoleType {}
exports.RoleImg = class RoleImg extends RoleType {}
exports.RoleInput = class RoleInput extends RoleType {}
exports.RoleLandmark = class RoleLandmark extends RoleType {}
exports.RoleLink = class RoleLink extends RoleType {}
exports.RoleList = class RoleList extends RoleType {}
exports.RoleListBox = class RoleListBox extends RoleType {}
exports.RoleListItem = class RoleListItem extends RoleType {}
exports.RoleLog = class RoleLog extends RoleType {}
exports.RoleMain = class RoleMain extends RoleType {}
exports.RoleMarquee = class RoleMarquee extends RoleType {}
exports.RoleMath = class RoleMath extends RoleType {}
exports.RoleMenu = class RoleMenu extends RoleType {}
exports.RoleMenuBar = class RoleMenuBar extends RoleType {}
exports.RoleMenuItem = class RoleMenuItem extends RoleType {}
exports.RoleMenuItemCheckBox = class RoleMenuItemCheckBox extends RoleType {}
exports.RoleMenuItemRadio = class RoleMenuItemRadio extends RoleType {}
exports.RoleNavigation = class RoleNavigation extends RoleType {}
exports.RoleNone = class RoleNone extends RoleType {}
exports.RoleNote = class RoleNote extends RoleType {}
exports.RoleOption = class RoleOption extends RoleType {}
exports.RoleParagraph = class RoleParagraph extends RoleType {}
exports.RolePresentation = class RolePresentation extends RoleType {}
exports.RoleProgressBar = class RoleProgressBar extends RoleType {}
exports.RoleRadio = class RoleRadio extends RoleType {}
exports.RoleRadioGroup = class RoleRadioGroup extends RoleType {}
exports.RoleRange = class RoleRange extends RoleType {}
exports.RoleRegion = class RoleRegion extends RoleType {}
exports.RoleRow = class RoleRow extends RoleType {}
exports.RoleRowGroup = class RoleRowGroup extends RoleType {}
exports.RoleRowHeader = class RoleRowHeader extends RoleType {}
exports.RoleScrollBar = class RoleScrollBar extends RoleType {}
exports.RoleSearch = class RoleSearch extends RoleType {}
exports.RoleSearchBox = class RoleSearchBox extends RoleType {}
exports.RoleSection = class RoleSection extends RoleType {}
exports.RoleSectionHead = class RoleSectionHead extends RoleType {}
exports.RoleSelect = class RoleSelect extends RoleType {}
exports.RoleSeparator = class RoleSeparator extends RoleType {}
exports.RoleSlider = class RoleSlider extends RoleType {}
exports.RoleSpinButton = class RoleSpinButton extends RoleType {}
exports.RoleStatus = class RoleStatus extends RoleType {}
exports.RoleStrong = class RoleStrong extends RoleType {}
exports.RoleStructure = class RoleStructure extends RoleType {}
exports.RoleSwitch = class RoleSwitch extends RoleType {}
exports.RoleTab = class RoleTab extends RoleType {}
exports.RoleTabList = class RoleTabList extends RoleType {}
exports.RoleTabPanel = class RoleTabPanel extends RoleType {}
exports.RoleTable = class RoleTable extends RoleType {}
exports.RoleTerm = class RoleTerm extends RoleType {}
exports.RoleTextBox = class RoleTextBox extends RoleType {}
exports.RoleTimer = class RoleTimer extends RoleType {}
exports.RoleToolBar = class RoleToolBar extends RoleType {}
exports.RoleToolTip = class RoleToolTip extends RoleType {}
exports.RoleTree = class RoleTree extends RoleType {}
exports.RoleTreeGrid = class RoleTreeGrid extends RoleType {}
exports.RoleTreeItem = class RoleTreeItem extends RoleType {}
exports.RoleWidget = class RoleWidget extends RoleType {}
exports.RoleWindow = class RoleWindow extends RoleType {}

RoleType.defineAttrs([
  exports.AriaAtomic,
  exports.AriaBusy,
  exports.AriaControls,
  exports.AriaCurrent,
  exports.AriaDescribedBy,
  exports.AriaDetails,
  exports.AriaDisabled,
  exports.AriaDropEffect,
  exports.AriaErrorMessage,
  exports.AriaFlowTo,
  exports.AriaGrabbed,
  exports.AriaHasPopup,
  exports.AriaHidden,
  exports.AriaInvalid,
  exports.AriaKeyShortcuts,
  exports.AriaLabel,
  exports.AriaLabelledBy,
  exports.AriaLive,
  exports.AriaOwns,
  exports.AriaRelevant,
  exports.AriaRoleDescription,
])

exports.RoleAlert.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleAlertDialog.defineAttrs([
  exports.AriaExpanded,
  exports.AriaModal,
])

exports.RoleApplication.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
])

exports.RoleArticle.defineAttrs([
  exports.AriaExpanded,
  exports.AriaPosInSet,
  exports.AriaSetSize,
])

exports.RoleBanner.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleBlockQuote.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleButton.defineAttrs([
  exports.AriaExpanded,
  exports.AriaPressed,
])

exports.RoleCaption.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleCell.defineAttrs([
  exports.AriaColIndex,
  exports.AriaColSpan,
  exports.AriaExpanded,
  exports.AriaRowIndex,
  exports.AriaRowSpan,
])

exports.RoleCheckBox.defineAttrs([
  exports.AriaChecked,
  exports.AriaReadOnly,
])

exports.RoleColumnHeader.defineAttrs([
  exports.AriaColIndex,
  exports.AriaColSpan,
  exports.AriaExpanded,
  exports.AriaRowIndex,
  exports.AriaRowSpan,
  exports.AriaSort,
])

exports.RoleComboBox.defineAttrs([
  exports.AriaAutoComplete,
  exports.AriaExpanded,
  exports.AriaReadOnly,
  exports.AriaRequired,
])

exports.RoleComplementary.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleComposite.defineAttrs([
  exports.AriaActiveDescendant,
])

exports.RoleContentInfo.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleDefinition.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleDialog.defineAttrs([
  exports.AriaExpanded,
  exports.AriaModal,
])

exports.RoleDirectory.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleDocument.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleFeed.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleFigure.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleForm.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleGrid.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaColCount,
  exports.AriaExpanded,
  exports.AriaLevel,
  exports.AriaMultiSelectable,
  exports.AriaReadOnly,
  exports.AriaRowCount,
])

exports.RoleGridCell.defineAttrs([
  exports.AriaColIndex,
  exports.AriaColSpan,
  exports.AriaExpanded,
  exports.AriaReadOnly,
  exports.AriaRequired,
  exports.AriaRowIndex,
  exports.AriaRowSpan,
  exports.AriaSelected,
])

exports.RoleGroup.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
])

exports.RoleHeading.defineAttrs([
  exports.AriaExpanded,
  exports.AriaLevel,
])

exports.RoleImg.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleLandmark.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleLink.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleList.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleListBox.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaMultiSelectable,
  exports.AriaOrientation,
  exports.AriaOrientation,
  exports.AriaReadOnly,
  exports.AriaRequired,
])

exports.RoleListItem.defineAttrs([
  exports.AriaExpanded,
  exports.AriaLevel,
  exports.AriaPosInSet,
  exports.AriaSetSize,
])

exports.RoleLog.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleMain.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleMarquee.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleMath.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleMenu.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaOrientation,
  exports.AriaOrientation,
])

exports.RoleMenuBar.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaOrientation,
  exports.AriaOrientation,
  exports.AriaOrientation,
])

exports.RoleMenuItem.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleMenuItemCheckBox.defineAttrs([
  exports.AriaChecked,
  exports.AriaExpanded,
])

exports.RoleMenuItemRadio.defineAttrs([
  exports.AriaChecked,
  exports.AriaExpanded,
])

exports.RoleNavigation.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleNote.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleOption.defineAttrs([
  exports.AriaChecked,
  exports.AriaPosInSet,
  exports.AriaSelected,
  exports.AriaSetSize,
])

exports.RoleParagraph.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleProgressBar.defineAttrs([
  exports.AriaValueMax,
  exports.AriaValueMin,
  exports.AriaValueNow,
  exports.AriaValueText,
])

exports.RoleRadio.defineAttrs([
  exports.AriaChecked,
])

exports.RoleRadioGroup.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaOrientation,
  exports.AriaReadOnly,
  exports.AriaRequired,
])

exports.RoleRange.defineAttrs([
  exports.AriaValueMax,
  exports.AriaValueMin,
  exports.AriaValueNow,
  exports.AriaValueText,
])

exports.RoleRegion.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleRow.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaColIndex,
  exports.AriaExpanded,
  exports.AriaLevel,
  exports.AriaMultiSelectable,
  exports.AriaRowIndex,
  exports.AriaSelected,
])

exports.RoleRowHeader.defineAttrs([
  exports.AriaColIndex,
  exports.AriaColSpan,
  exports.AriaExpanded,
  exports.AriaRowIndex,
  exports.AriaRowSpan,
  exports.AriaSort,
])

exports.RoleScrollBar.defineAttrs([
  exports.AriaOrientation,
  exports.AriaValueMax,
  exports.AriaValueMax,
  exports.AriaValueMin,
  exports.AriaValueMin,
  exports.AriaValueNow,
  exports.AriaValueNow,
  exports.AriaValueText,
])

exports.RoleSearch.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleSearchBox.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaAutoComplete,
  exports.AriaMultiLine,
  exports.AriaPlaceholder,
  exports.AriaReadOnly,
  exports.AriaRequired,
])

exports.RoleSection.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleSectionHead.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleSelect.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaOrientation,
])

exports.RoleSlider.defineAttrs([
  exports.AriaOrientation,
  exports.AriaReadOnly,
  exports.AriaValueMax,
  exports.AriaValueMax,
  exports.AriaValueMin,
  exports.AriaValueMin,
  exports.AriaValueNow,
  exports.AriaValueNow,
  exports.AriaValueText,
])

exports.RoleSpinButton.defineAttrs([
  exports.AriaReadOnly,
  exports.AriaRequired,
  exports.AriaValueMax,
  exports.AriaValueMax,
  exports.AriaValueMin,
  exports.AriaValueMin,
  exports.AriaValueNow,
  exports.AriaValueText,
])

exports.RoleStatus.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleStrong.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleSwitch.defineAttrs([
  exports.AriaChecked,
  exports.AriaReadOnly,
])

exports.RoleTab.defineAttrs([
  exports.AriaPosInSet,
  exports.AriaSelected,
  exports.AriaSetSize,
])

exports.RoleTabList.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaLevel,
  exports.AriaMultiSelectable,
  exports.AriaOrientation,
])

exports.RoleTabPanel.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleTable.defineAttrs([
  exports.AriaColCount,
  exports.AriaExpanded,
  exports.AriaRowCount,
])

exports.RoleTerm.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleTextBox.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaAutoComplete,
  exports.AriaMultiLine,
  exports.AriaPlaceholder,
  exports.AriaReadOnly,
  exports.AriaRequired,
])

exports.RoleTimer.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleToolBar.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaOrientation,
])

exports.RoleToolTip.defineAttrs([
  exports.AriaExpanded,
])

exports.RoleTree.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaExpanded,
  exports.AriaMultiSelectable,
  exports.AriaOrientation,
  exports.AriaOrientation,
  exports.AriaRequired,
])

exports.RoleTreeGrid.defineAttrs([
  exports.AriaActiveDescendant,
  exports.AriaColCount,
  exports.AriaExpanded,
  exports.AriaLevel,
  exports.AriaMultiSelectable,
  exports.AriaReadOnly,
  exports.AriaRowCount,
])

exports.RoleTreeItem.defineAttrs([
  exports.AriaChecked,
  exports.AriaExpanded,
  exports.AriaLevel,
  exports.AriaPosInSet,
  exports.AriaSelected,
  exports.AriaSetSize,
])

exports.RoleWindow.defineAttrs([
  exports.AriaExpanded,
  exports.AriaModal,
])


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * Value representing true, false, or not applicable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false-undefined
 * @abstract
 */
class AriaTypeApplicable extends AriaType
{
  static defaultValue = undefined

  /**
   * value === 'true'
   * value === '*' // non empty string
   *      => true
   *
   * value === 'false'
   *      => false
   *
   * value === 'undefined'
   * value === ''
   * no attr
   *      => undefined
   *
   * @param {DomElem} elem
   * @returns {boolean|undefined}
   */
  static get(elem) {
    const value = super.get(elem)
    if(value) {
      return value === 'undefined'?
        undefined :
        Boolean(value) && value !== 'false'
    }
    return value
  }

  /**
   * value = true
   * value = 'true'
   * value = '*' // non empty string
   *      => 'true'
   *
   * value = false
   * value = 'false'
   *      => 'false'
   *
   * value = undefined
   * value = 'undefined'
   * value = ''
   *      => no attr
   *
   * @param {DomElem} elem
   * @param {*} value {boolean|undefined|string}
   */
  static set(elem, value) {
    if(value === 'undefined' || value === '') {
      elem.node.removeAttribute(this.localName)
    }
    else super.set(elem, String(Boolean(value) && value !== 'false'))
  }
}

module.exports = AriaTypeApplicable


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { AttrType } = __webpack_require__(2)

const ARIA_ATTR_PREFIX = 'aria-'

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs
 * @see https://www.w3.org/TR/html/dom.html#state-and-property-attributes
 * @see http://www.w3.org/ns/wai-aria/
 * @abstract
 */
class AriaType extends AttrType
{
  /**
   * @param {DomElem} elem
   * @returns {string|null|*}
   * @override
   */
  static get(elem) {
    const value = super.get(elem)
    return value || this.defaultValue
  }

  /**
   * @returns {string}
   * @override
   */
  static get attrName() {
    const name = this.name.slice(4)
    return name[0].toLowerCase() + name.slice(1)
  }

  /**
   * @returns {string}
   * @override
   */
  static get localName() {
    return ARIA_ATTR_PREFIX + this.name.slice(4).toLowerCase()
  }
}

module.exports = AriaType


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * Value representing either true or false.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false
 * @abstract
 */
class AriaTypeBoolean extends AriaType
{
  static defaultValue = false

  /**
   * value === 'true'
   * value === '*' // non empty string
   *      => true
   *
   * value === 'false'
   * value === ''
   * no attr
   *      => false
   *
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static get(elem) {
    const value = super.get(elem)
    return Boolean(value) && value !== 'false'
  }

  /**
   * value = true
   * value = 'true'
   * value = '*' // non empty string
   * value = 1
   * value = * // non zero
   *      => 'true'
   *
   * value = false
   * value = 'false'
   * value = ''
   * value = null
   * value = undefined
   * value = 0
   *      => no attr
   *
   * @param {DomElem} elem
   * @param {*} value {boolean|string|number|null|undefined}
   */
  static set(elem, value) {
    if(value && value !== 'false') {
      super.set(elem, 'true')
    }
    else elem.node.removeAttribute(this.localName)
  }
}

module.exports = AriaTypeBoolean


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * Reference to the ID of another element in the same document
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref
 * @abstract
 */
class AriaTypeIdRef extends AriaType
{
}

module.exports = AriaTypeIdRef


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 * @abstract
 */
class AriaTypeIdRefList extends AriaType
{
  static defaultValue = []

  /**
   * @param {DomElem} elem
   * @returns {string[]}
   */
  static get(elem) {
    const value = elem.node.getAttribute(this.localName)
    return value? value.split(' ') : this.defaultValue
  }

  /**
   * @param {DomElem} elem
   * @param {*} value {string[]|string}
   */
  static set(elem, value) {
    if(Array.isArray(value)) {
      const list = value.filter(Boolean)
      if(list.length) {
        super.set(elem, list.join(' '))
      }
      else elem.node.removeAttribute(this.localName)
    }
    else super.set(elem, value)
  }
}

module.exports = AriaTypeIdRefList


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * A numerical value without a fractional component.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_integer
 * @abstract
 */
class AriaTypeInteger extends AriaType
{
  /**
   * value === '.0'
   * value === '.0e-1'
   *      => 0
   *
   * value === '1.1'
   * value === '11e-1'
   *      => 1
   *
   * value === '4.2'
   * value === '42e-1'
   *      => 4
   *
   * value === 'NaN'
   * value === 'true'
   * value === 'false'
   * value === 'undefined'
   * value === 'xyz' // non empty string
   *      => NaN
   *
   * value === 'Infinity'
   *      => Infinity
   *
   * value === ''
   * no attr
   *      => null
   *
   * @param {DomElem} elem
   * @returns {number}
   */
  static get(elem) {
    const value = super.get(elem)
    return value && Math.floor(Number(value))
  }

  /**
   * value = .0
   * value = .0e-1
   * value = '.0'
   * value = '.0e-1'
   * value = []
   * value = [.0]
   * value = ['.0e-1']
   * value = false
   *      => '0'
   *
   * value = 1.1
   * value = 11e-1
   * value = '1.1'
   * value = '11e-1'
   * value = [1.1]
   * value = ['11e-1']
   * value = true
   *      => '1'
   *
   * value = 4.2
   * value = 42e-1
   * value = '4.2'
   * value = '42e-1'
   * value = [4.2]
   * value = ['4.2']
   *      => '4'
   *
   * value = NaN
   * value = 'NaN'
   * value = 'xyz' // non empty string
   * value = {}
   * value = [.0, 4.2, 1.1]
   * value = function() {}
   * value = undefined
   *      => 'NaN'
   *
   * value = Infinity
   * value = 'Infinity'
   *      => 'Infinity'
   *
   * value = null
   * value = ''
   *      => no attr
   *
   * @param {DomElem} elem
   * @param {number} value {number}
   */
  static set(elem, value) {
    super.set(elem, String(Math.floor(value)))
  }
}

module.exports = AriaTypeInteger


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * Any real numerical value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_number
 * @abstract
 */
class AriaTypeNumber extends AriaType
{
  /**
   * value === '.0'
   * value === '.0e-1'
   *      => 0
   *
   * value === '1'
   * value === '.1e1'
   *      => 1
   *
   * value === '4.2'
   * value === '42e-1'
   *      => 4.2
   *
   * value === 'NaN'
   * value === 'xyz' // non empty string
   *      => NaN
   *
   * value === 'Infinity'
   *      => Infinity
   *
   * value === ''
   * no attr
   *      => null
   *
   * @param {DomElem} elem
   * @returns {number}
   */
  static get(elem) {
    const value = super.get(elem)
    return value && Number(value)
  }

  /**
   * value = .0
   * value = .0e-1
   * value = '.0'
   * value = '.0e-1'
   * value = []
   * value = [.0]
   * value = ['.0e-1']
   * value = false
   *      => '0'
   *
   * value = 1
   * value = .1e1
   * value = '1'
   * value = '.1e1'
   * value = [1]
   * value = ['.1e1']
   * value = true
   *      => '1'
   *
   * value = 4.2
   * value = 42e-1
   * value = '4.2'
   * value = '42e-1'
   * value = [4.2]
   * value = ['4.2']
   *      => '4.2'
   *
   * value = NaN
   * value = 'NaN'
   * value = 'xyz' // non empty string
   * value = {}
   * value = [.0, 4.2, 1]
   * value = function() {}
   * value = undefined
   *      => 'NaN'
   *
   * value = Infinity
   * value = 'Infinity'
   *      => 'Infinity'
   *
   * value = ''
   * value = null
   *      => no attr
   *
   * @param {DomElem} elem
   * @param {*} value {number}
   */
  static set(elem, value) {
    super.set(elem, String(Number(value)))
  }
}

module.exports = AriaTypeNumber


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * Unconstrained value type.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_string
 * @abstract
 */
class AriaTypeString extends AriaType
{
  static defaultValue = ''
}

module.exports = AriaTypeString


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * One of a limited set of allowed values. An explicit value
 *  of undefined for this type is the equivalent of providing no value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token
 * @abstract
 */
class AriaTypeToken extends AriaType
{
  static defaultValue = undefined

  /**
   * value === 'token'
   *      => 'token'
   *
   * value === 'undefined'
   * value === ''
   * no attr
   *      => undefined
   *
   * @param {DomElem} elem
   * @returns {string|undefined}
   */
  static get(elem) {
    const value = super.get(elem)
    if(value === 'undefined') {
      return undefined
    }
    return value
  }

  /**
   * @param {DomElem} elem
   * @param {string|undefined} value
   */
  static set(elem, value) {
    if(value === 'undefined') {
      elem.node.removeAttribute(this.localName)
    }
    else super.set(elem, value)
  }
}

module.exports = AriaTypeToken


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * A list of one or more tokens.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token_list
 * @abstract
 */
class AriaTypeTokenList extends AriaType
{
  static defaultValue = []

  /**
   * @param {DomElem} elem
   * @returns {string[]}
   */
  static get(elem) {
    const value = elem.node.getAttribute(this.localName)
    return value? value.split(' ') : this.defaultValue
  }

  /**
   * @param {DomElem} elem
   * @param {*} value {string[]|string}
   */
  static set(elem, value) {
    if(!Array.isArray(value)) {
      super.set(elem, value)
      return
    }
    const list = value.filter(Boolean)
    if(list.length) {
      super.set(elem, list.join(' '))
    }
    else elem.node.removeAttribute(this.localName)
  }
}

module.exports = AriaTypeTokenList


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(4)

/**
 * Value representing true or false, with an intermediate "mixed" value.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_tristate
 * @abstract
 */
class AriaTypeTristate extends AriaType
{
  static defaultValue = undefined

  /**
   * value === 'true'
   * value === '0'
   * value === '*' // non empty string
   *      => true
   *
   * value === 'false'
   *      => false
   *
   * value === 'mixed'
   *      => 'mixed'
   *
   * value === 'undefined'
   * value === ''
   * no attr
   *      => undefined
   *
   * @param {DomElem} elem
   * @returns {boolean|string}
   */
  static get(elem) {
    const value = super.get(elem)
    if(!value) {
      return value
    }
    if(value === 'mixed') {
      return 'mixed'
    }
    return value === 'undefined'?
      undefined :
      Boolean(value) && value !== 'false'
  }

  /**
   * value = true
   * value = 'true'
   * value = '*' // non empty string
   * value = 1
   * value = * // non zero number
   *      => 'true'
   *
   * value = false
   * value = 'false'
   * value = 0
   *      => 'false'
   *
   * value = 'mixed'
   *      => 'mixed'
   *
   * value = null
   * value = undefined
   * value = ''
   *      => no attr
   *
   * @param {DomElem} elem
   * @param {*} value {boolean|string}
   */
  static set(elem, value) {
    if(value === 'undefined' || value === '') {
      elem.node.removeAttribute(this.localName)
    }
    else if(value === 'mixed') {
      super.set(elem, 'mixed')
    }
    else super.set(elem, String(Boolean(value) && value !== 'false'))
  }
}

module.exports = AriaTypeTristate


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Dataset, DomElem, Style, window } = __webpack_require__(2)
const { document } = window

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
class RoleType extends DomElem
{
  static localName = 'div'

  static prefix = 'Role'

  /**
   * @override
   * @return {*|HTMLDivElement}
   */
  createNode() {
    return document.createElement(this.constructor.localName)
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setRoleAttr()
    super.init(deep)
  }

  setRoleAttr() {
    let constructor = this.constructor
    const prefix = constructor.prefix
    do if(constructor.name.startsWith(prefix)) {
      this.node.setAttribute('role', constructor.name.slice(prefix.length))
      return
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }
}

RoleType.defineAttrs([
  Dataset,
  Style,
])

RoleType.defineMethods([
  'blur',
  'click',
  'focus',
])

RoleType.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

RoleType.defineProps([
  'autofocus',
  'contentEditable',
  'innerText',
  'inputMode',
  'tabIndex',
], true)

module.exports = RoleType


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});