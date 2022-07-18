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

const AriaTypeApplicable = exports.AriaTypeApplicable = __webpack_require__(3)
const AriaTypeBoolean = exports.AriaTypeBoolean = __webpack_require__(5)
const AriaTypeIdRef = exports.AriaTypeIdRef = __webpack_require__(6)
const AriaTypeIdRefList = exports.AriaTypeIdRefList = __webpack_require__(7)
const AriaTypeInteger = exports.AriaTypeInteger = __webpack_require__(8)
const AriaTypeNumber = exports.AriaTypeNumber = __webpack_require__(9)
const AriaTypeString = exports.AriaTypeString = __webpack_require__(10)
const AriaTypeToken = exports.AriaTypeToken = __webpack_require__(11)
const AriaTypeTokenList = exports.AriaTypeTokenList = __webpack_require__(12)
const AriaTypeTristate = exports.AriaTypeTristate = __webpack_require__(13)
const RoleType = exports.RoleType = __webpack_require__(14)
const { ElemType } = exports

exports.AriaActiveDescendant = class AriaActiveDescendant extends AriaTypeIdRef
{
  static propName = 'activeDescendant'
  static nodeName = 'aria-activedescendant'
}
exports.AriaAtomic = class AriaAtomic extends AriaTypeBoolean
{
  static propName = 'atomic'
  static nodeName = 'aria-atomic'
}
exports.AriaAutoComplete = class AriaAutoComplete extends AriaTypeToken
{
  static propName = 'autoComplete'
  static nodeName = 'aria-autocomplete'
}
exports.AriaBusy = class AriaBusy extends AriaTypeBoolean
{
  static propName = 'busy'
  static nodeName = 'aria-busy'
}
exports.AriaChecked = class AriaChecked extends AriaTypeTristate
{
  static propName = 'checked'
  static nodeName = 'aria-checked'
}
exports.AriaColCount = class AriaColCount extends AriaTypeInteger
{
  static propName = 'colCount'
  static nodeName = 'aria-colcount'
}
exports.AriaColIndex = class AriaColIndex extends AriaTypeInteger
{
  static propName = 'colIndex'
  static nodeName = 'aria-colindex'
}
exports.AriaColSpan = class AriaColSpan extends AriaTypeInteger
{
  static propName = 'colSpan'
  static nodeName = 'aria-colspan'
}
exports.AriaControls = class AriaControls extends AriaTypeIdRefList
{
  static propName = 'controls'
  static nodeName = 'aria-controls'
}
exports.AriaCurrent = class AriaCurrent extends AriaTypeToken
{
  static propName = 'current'
  static nodeName = 'aria-current'
}
exports.AriaDescribedBy = class AriaDescribedBy extends AriaTypeIdRefList
{
  static propName = 'describedBy'
  static nodeName = 'aria-describedby'
}
exports.AriaDetails = class AriaDetails extends AriaTypeIdRef
{
  static propName = 'details'
  static nodeName = 'aria-details'
}
exports.AriaDisabled = class AriaDisabled extends AriaTypeBoolean
{
  static propName = 'disabled'
  static nodeName = 'aria-disabled'
}
exports.AriaDropEffect = class AriaDropEffect extends AriaTypeTokenList
{
  static propName = 'dropEffect'
  static nodeName = 'aria-dropeffect'
}
exports.AriaErrorMessage = class AriaErrorMessage extends AriaTypeIdRef
{
  static propName = 'errorMessage'
  static nodeName = 'aria-errormessage'
}
exports.AriaExpanded = class AriaExpanded extends AriaTypeApplicable
{
  static propName = 'expanded'
  static nodeName = 'aria-expanded'
}
exports.AriaFlowTo = class AriaFlowTo extends AriaTypeIdRefList
{
  static propName = 'flowTo'
  static nodeName = 'aria-flowto'
}
exports.AriaGrabbed = class AriaGrabbed extends AriaTypeApplicable
{
  static propName = 'grabbed'
  static nodeName = 'aria-grabbed'
}
exports.AriaHasPopup = class AriaHasPopup extends AriaTypeToken
{
  static propName = 'hasPopup'
  static nodeName = 'aria-haspopup'
}
exports.AriaHidden = class AriaHidden extends AriaTypeApplicable
{
  static propName = 'hidden'
  static nodeName = 'aria-hidden'
}
exports.AriaInvalid = class AriaInvalid extends AriaTypeToken
{
  static propName = 'invalid'
  static nodeName = 'aria-invalid'
}
exports.AriaKeyShortcuts = class AriaKeyShortcuts extends AriaTypeString
{
  static propName = 'keyShortcuts'
  static nodeName = 'aria-keyshortcuts'
}
exports.AriaLabel = class AriaLabel extends AriaTypeString
{
  static propName = 'label'
  static nodeName = 'aria-label'
}
exports.AriaLabelledBy = class AriaLabelledBy extends AriaTypeIdRefList
{
  static propName = 'labelledBy'
  static nodeName = 'aria-labelledby'
}
exports.AriaLevel = class AriaLevel extends AriaTypeInteger
{
  static propName = 'level'
  static nodeName = 'aria-level'
}
exports.AriaLive = class AriaLive extends AriaTypeToken
{
  static propName = 'live'
  static nodeName = 'aria-live'
}
exports.AriaModal = class AriaModal extends AriaTypeBoolean
{
  static propName = 'modal'
  static nodeName = 'aria-modal'
}
exports.AriaMultiLine = class AriaMultiLine extends AriaTypeBoolean
{
  static propName = 'multiLine'
  static nodeName = 'aria-multiline'
}
exports.AriaMultiSelectable = class AriaMultiSelectable extends AriaTypeBoolean
{
  static propName = 'multiSelectable'
  static nodeName = 'aria-multiselectable'
}
exports.AriaOrientation = class AriaOrientation extends AriaTypeToken
{
  static propName = 'orientation'
  static nodeName = 'aria-orientation'
}
exports.AriaOwns = class AriaOwns extends AriaTypeIdRefList
{
  static propName = 'owns'
  static nodeName = 'aria-owns'
}
exports.AriaPlaceholder = class AriaPlaceholder extends AriaTypeString
{
  static propName = 'placeholder'
  static nodeName = 'aria-placeholder'
}
exports.AriaPosInSet = class AriaPosInSet extends AriaTypeInteger
{
  static propName = 'posInSet'
  static nodeName = 'aria-posinset'
}
exports.AriaPressed = class AriaPressed extends AriaTypeTristate
{
  static propName = 'pressed'
  static nodeName = 'aria-pressed'
}
exports.AriaReadOnly = class AriaReadOnly extends AriaTypeBoolean
{
  static propName = 'readOnly'
  static nodeName = 'aria-readonly'
}
exports.AriaRelevant = class AriaRelevant extends AriaTypeTokenList
{
  static propName = 'relevant'
  static nodeName = 'aria-relevant'
}
exports.AriaRequired = class AriaRequired extends AriaTypeBoolean
{
  static propName = 'required'
  static nodeName = 'aria-required'
}
exports.AriaRoleDescription = class AriaRoleDescription extends AriaTypeString
{
  static propName = 'roleDescription'
  static nodeName = 'aria-roledescription'
}
exports.AriaRowCount = class AriaRowCount extends AriaTypeInteger
{
  static propName = 'rowCount'
  static nodeName = 'aria-rowcount'
}
exports.AriaRowIndex = class AriaRowIndex extends AriaTypeInteger
{
  static propName = 'rowIndex'
  static nodeName = 'aria-rowindex'
}
exports.AriaRowSpan = class AriaRowSpan extends AriaTypeInteger
{
  static propName = 'rowSpan'
  static nodeName = 'aria-rowspan'
}
exports.AriaSelected = class AriaSelected extends AriaTypeApplicable
{
  static propName = 'selected'
  static nodeName = 'aria-selected'
}
exports.AriaSetSize = class AriaSetSize extends AriaTypeInteger
{
  static propName = 'setSize'
  static nodeName = 'aria-setsize'
}
exports.AriaSort = class AriaSort extends AriaTypeToken
{
  static propName = 'sort'
  static nodeName = 'aria-sort'
}
exports.AriaValueMax = class AriaValueMax extends AriaTypeNumber
{
  static propName = 'valueMax'
  static nodeName = 'aria-valuemax'
}
exports.AriaValueMin = class AriaValueMin extends AriaTypeNumber
{
  static propName = 'valueMin'
  static nodeName = 'aria-valuemin'
}
exports.AriaValueNow = class AriaValueNow extends AriaTypeNumber
{
  static propName = 'valueNow'
  static nodeName = 'aria-valuenow'
}
exports.AriaValueText = class AriaValueText extends AriaTypeString
{
  static propName = 'valueText'
  static nodeName = 'aria-valuetext'
}

const types = [
  exports.RoleAlert = class RoleAlert extends RoleType
  {
    static role = 'Alert'
  },
  exports.RoleAlertDialog = class RoleAlertDialog extends RoleType
  {
    static role = 'AlertDialog'
  },
  exports.RoleApplication = class RoleApplication extends RoleType
  {
    static role = 'Application'
  },
  exports.RoleArticle = class RoleArticle extends RoleType
  {
    static role = 'Article'
  },
  exports.RoleBanner = class RoleBanner extends RoleType
  {
    static role = 'Banner'
  },
  exports.RoleBlockQuote = class RoleBlockQuote extends RoleType
  {
    static role = 'BlockQuote'
  },
  exports.RoleButton = class RoleButton extends RoleType
  {
    static role = 'Button'
  },
  exports.RoleCaption = class RoleCaption extends RoleType
  {
    static role = 'Caption'
  },
  exports.RoleCell = class RoleCell extends RoleType
  {
    static role = 'Cell'
  },
  exports.RoleCheckBox = class RoleCheckBox extends RoleType
  {
    static role = 'CheckBox'
  },
  exports.RoleColumnHeader = class RoleColumnHeader extends RoleType
  {
    static role = 'ColumnHeader'
  },
  exports.RoleComboBox = class RoleComboBox extends RoleType
  {
    static role = 'ComboBox'
  },
  exports.RoleCommand = class RoleCommand extends RoleType
  {
    static role = 'Command'
  },
  exports.RoleComplementary = class RoleComplementary extends RoleType
  {
    static role = 'Complementary'
  },
  exports.RoleComposite = class RoleComposite extends RoleType
  {
    static role = 'Composite'
  },
  exports.RoleContentInfo = class RoleContentInfo extends RoleType
  {
    static role = 'ContentInfo'
  },
  exports.RoleDefinition = class RoleDefinition extends RoleType
  {
    static role = 'Definition'
  },
  exports.RoleDialog = class RoleDialog extends RoleType
  {
    static role = 'Dialog'
  },
  exports.RoleDirectory = class RoleDirectory extends RoleType
  {
    static role = 'Directory'
  },
  exports.RoleDocument = class RoleDocument extends RoleType
  {
    static role = 'Document'
  },
  exports.RoleFeed = class RoleFeed extends RoleType
  {
    static role = 'Feed'
  },
  exports.RoleFigure = class RoleFigure extends RoleType
  {
    static role = 'Figure'
  },
  exports.RoleForm = class RoleForm extends RoleType
  {
    static role = 'Form'
  },
  exports.RoleGrid = class RoleGrid extends RoleType
  {
    static role = 'Grid'
  },
  exports.RoleGridCell = class RoleGridCell extends RoleType
  {
    static role = 'GridCell'
  },
  exports.RoleGroup = class RoleGroup extends RoleType
  {
    static role = 'Group'
  },
  exports.RoleHeading = class RoleHeading extends RoleType
  {
    static role = 'Heading'
  },
  exports.RoleImg = class RoleImg extends RoleType
  {
    static role = 'Img'
  },
  exports.RoleInput = class RoleInput extends RoleType
  {
    static role = 'Input'
  },
  exports.RoleLandmark = class RoleLandmark extends RoleType
  {
    static role = 'Landmark'
  },
  exports.RoleLink = class RoleLink extends RoleType
  {
    static role = 'Link'
  },
  exports.RoleList = class RoleList extends RoleType
  {
    static role = 'List'
  },
  exports.RoleListBox = class RoleListBox extends RoleType
  {
    static role = 'ListBox'
  },
  exports.RoleListItem = class RoleListItem extends RoleType
  {
    static role = 'ListItem'
  },
  exports.RoleLog = class RoleLog extends RoleType
  {
    static role = 'Log'
  },
  exports.RoleMain = class RoleMain extends RoleType
  {
    static role = 'Main'
  },
  exports.RoleMarquee = class RoleMarquee extends RoleType
  {
    static role = 'Marquee'
  },
  exports.RoleMath = class RoleMath extends RoleType
  {
    static role = 'Math'
  },
  exports.RoleMenu = class RoleMenu extends RoleType
  {
    static role = 'Menu'
  },
  exports.RoleMenuBar = class RoleMenuBar extends RoleType
  {
    static role = 'MenuBar'
  },
  exports.RoleMenuItem = class RoleMenuItem extends RoleType
  {
    static role = 'MenuItem'
  },
  exports.RoleMenuItemCheckBox = class RoleMenuItemCheckBox extends RoleType
  {
    static role = 'MenuItemCheckBox'
  },
  exports.RoleMenuItemRadio = class RoleMenuItemRadio extends RoleType
  {
    static role = 'MenuItemRadio'
  },
  exports.RoleNavigation = class RoleNavigation extends RoleType
  {
    static role = 'Navigation'
  },
  exports.RoleNone = class RoleNone extends RoleType
  {
    static role = 'None'
  },
  exports.RoleNote = class RoleNote extends RoleType
  {
    static role = 'Note'
  },
  exports.RoleOption = class RoleOption extends RoleType
  {
    static role = 'Option'
  },
  exports.RoleParagraph = class RoleParagraph extends RoleType
  {
    static role = 'Paragraph'
  },
  exports.RolePresentation = class RolePresentation extends RoleType
  {
    static role = 'Presentation'
  },
  exports.RoleProgressBar = class RoleProgressBar extends RoleType
  {
    static role = 'ProgressBar'
  },
  exports.RoleRadio = class RoleRadio extends RoleType
  {
    static role = 'Radio'
  },
  exports.RoleRadioGroup = class RoleRadioGroup extends RoleType
  {
    static role = 'RadioGroup'
  },
  exports.RoleRange = class RoleRange extends RoleType
  {
    static role = 'Range'
  },
  exports.RoleRegion = class RoleRegion extends RoleType
  {
    static role = 'Region'
  },
  exports.RoleRow = class RoleRow extends RoleType
  {
    static role = 'Row'
  },
  exports.RoleRowGroup = class RoleRowGroup extends RoleType
  {
    static role = 'RowGroup'
  },
  exports.RoleRowHeader = class RoleRowHeader extends RoleType
  {
    static role = 'RowHeader'
  },
  exports.RoleScrollBar = class RoleScrollBar extends RoleType
  {
    static role = 'ScrollBar'
  },
  exports.RoleSearch = class RoleSearch extends RoleType
  {
    static role = 'Search'
  },
  exports.RoleSearchBox = class RoleSearchBox extends RoleType
  {
    static role = 'SearchBox'
  },
  exports.RoleSection = class RoleSection extends RoleType
  {
    static role = 'Section'
  },
  exports.RoleSectionHead = class RoleSectionHead extends RoleType
  {
    static role = 'SectionHead'
  },
  exports.RoleSelect = class RoleSelect extends RoleType
  {
    static role = 'Select'
  },
  exports.RoleSeparator = class RoleSeparator extends RoleType
  {
    static role = 'Separator'
  },
  exports.RoleSlider = class RoleSlider extends RoleType
  {
    static role = 'Slider'
  },
  exports.RoleSpinButton = class RoleSpinButton extends RoleType
  {
    static role = 'SpinButton'
  },
  exports.RoleStatus = class RoleStatus extends RoleType
  {
    static role = 'Status'
  },
  exports.RoleStrong = class RoleStrong extends RoleType
  {
    static role = 'Strong'
  },
  exports.RoleStructure = class RoleStructure extends RoleType
  {
    static role = 'Structure'
  },
  exports.RoleSwitch = class RoleSwitch extends RoleType
  {
    static role = 'Switch'
  },
  exports.RoleTab = class RoleTab extends RoleType
  {
    static role = 'Tab'
  },
  exports.RoleTabList = class RoleTabList extends RoleType
  {
    static role = 'TabList'
  },
  exports.RoleTabPanel = class RoleTabPanel extends RoleType
  {
    static role = 'TabPanel'
  },
  exports.RoleTable = class RoleTable extends RoleType
  {
    static role = 'Table'
  },
  exports.RoleTerm = class RoleTerm extends RoleType
  {
    static role = 'Term'
  },
  exports.RoleTextBox = class RoleTextBox extends RoleType
  {
    static role = 'TextBox'
  },
  exports.RoleTimer = class RoleTimer extends RoleType
  {
    static role = 'Timer'
  },
  exports.RoleToolBar = class RoleToolBar extends RoleType
  {
    static role = 'ToolBar'
  },
  exports.RoleToolTip = class RoleToolTip extends RoleType
  {
    static role = 'ToolTip'
  },
  exports.RoleTree = class RoleTree extends RoleType
  {
    static role = 'Tree'
  },
  exports.RoleTreeGrid = class RoleTreeGrid extends RoleType
  {
    static role = 'TreeGrid'
  },
  exports.RoleTreeItem = class RoleTreeItem extends RoleType
  {
    static role = 'TreeItem'
  },
  exports.RoleWidget = class RoleWidget extends RoleType
  {
    static role = 'Widget'
  },
  exports.RoleWindow = class RoleWindow extends RoleType
  {
    static role = 'Window'
  },
]

types.forEach(type => type.class = undefined)

ElemType.defineAttrs([
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
   * @param {*} value {boolean|undefined|string}
   */
  static set(elem, value) {
    if(String(value) === 'undefined' || value === '') {
      elem.node.removeAttribute(this.nodeName)
    }
    else super.set(elem, String(Boolean(value) && value !== 'false'))
  }
}

module.exports = AriaTypeApplicable


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { AttrType } = __webpack_require__(2)

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs
 * @see https://www.w3.org/TR/html/dom.html#state-and-property-attributes
 * @see http://www.w3.org/ns/wai-aria/
 * @abstract
 */
class AriaType extends AttrType
{
  /**
   * @param {ElemType} elem
   * @returns {string|null|*}
   * @override
   */
  static get(elem) {
    const value = super.get(elem)
    return value || this.defaultValue
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
   * @param {*} value {boolean|string|number|null|undefined}
   */
  static set(elem, value) {
    if(value && value !== 'false') {
      super.set(elem, 'true')
    }
    else elem.node.removeAttribute(this.nodeName)
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
   * @param {ElemType} elem
   * @returns {string[]}
   */
  static get(elem) {
    const value = elem.node.getAttribute(this.nodeName)
    return value? value.split(' ') : this.defaultValue
  }

  /**
   * @param {ElemType} elem
   * @param {*} value {string[]|string}
   */
  static set(elem, value) {
    if(Array.isArray(value)) {
      const list = value.filter(Boolean)
      if(list.length) {
        super.set(elem, list.join(' '))
      }
      else elem.node.removeAttribute(this.nodeName)
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
   * @param {string|undefined} value
   */
  static set(elem, value) {
    if(String(value) === 'undefined') {
      elem.node.removeAttribute(this.nodeName)
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
   * @param {ElemType} elem
   * @returns {string[]}
   */
  static get(elem) {
    const value = elem.node.getAttribute(this.nodeName)
    return value? value.split(' ') : this.defaultValue
  }

  /**
   * @param {ElemType} elem
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
    else elem.node.removeAttribute(this.nodeName)
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
   * @param {ElemType} elem
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
   * @param {ElemType} elem
   * @param {*} value {boolean|string}
   */
  static set(elem, value) {
    if(String(value) === 'undefined' || value === '') {
      elem.node.removeAttribute(this.nodeName)
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

const { ElemType, HtmlType } = __webpack_require__(2)
const innerText = Object.getOwnPropertyDescriptor(HtmlType.prototype, 'innerText')

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
class RoleType extends ElemType
{
  static class = undefined
}

Object.defineProperty(RoleType.prototype, 'innerText', innerText)

RoleType.defineMethods([
  'blur',
  'click',
  'focus',
])

RoleType.defineProps({
  autofocus : 'autofocus',
  contentEditable : 'contenteditable',
  inputMode : 'inputmode',
  lang : 'lang',
  tabIndex : 'tabindex',
  translate : 'translate',
})

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