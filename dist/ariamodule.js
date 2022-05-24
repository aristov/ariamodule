(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ariamodule"] = factory();
	else
		root["ariamodule"] = factory();
})(this, () => {
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

const AriaTypeApplicable = __webpack_require__(20)
const AriaTypeBoolean = __webpack_require__(22)
const AriaTypeIdRef = __webpack_require__(23)
const AriaTypeIdRefList = __webpack_require__(24)
const AriaTypeInteger = __webpack_require__(25)
const AriaTypeNumber = __webpack_require__(26)
const AriaTypeString = __webpack_require__(27)
const AriaTypeToken = __webpack_require__(28)
const AriaTypeTokenList = __webpack_require__(29)
const AriaTypeTristate = __webpack_require__(30)
const RoleType = __webpack_require__(31)

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
/***/ ((module, exports, __webpack_require__) => {

/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = __webpack_require__(3)

exports.AttrType = __webpack_require__(6)
exports.Dataset = __webpack_require__(5)
exports.DomElem = __webpack_require__(7)
exports.DomNode = __webpack_require__(9)
exports.HtmlElem = __webpack_require__(4)
exports.Style = __webpack_require__(19)

exports.window = __webpack_require__(8)


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const HtmlElem = __webpack_require__(4)

exports.HtmlA = class HtmlA extends HtmlElem {}
exports.HtmlAbbr = class HtmlAbbr extends HtmlElem {}
exports.HtmlAddress = class HtmlAddress extends HtmlElem {}
exports.HtmlArea = class HtmlArea extends HtmlElem {}
exports.HtmlArticle = class HtmlArticle extends HtmlElem {}
exports.HtmlAside = class HtmlAside extends HtmlElem {}
exports.HtmlAudio = class HtmlAudio extends HtmlElem {}
exports.HtmlB = class HtmlB extends HtmlElem {}
exports.HtmlBase = class HtmlBase extends HtmlElem {}
exports.HtmlBdi = class HtmlBdi extends HtmlElem {}
exports.HtmlBdo = class HtmlBdo extends HtmlElem {}
exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlElem {}
exports.HtmlBody = class HtmlBody extends HtmlElem {}
exports.HtmlBr = class HtmlBr extends HtmlElem {}
exports.HtmlButton = class HtmlButton extends HtmlElem {}
exports.HtmlCanvas = class HtmlCanvas extends HtmlElem {}
exports.HtmlCaption = class HtmlCaption extends HtmlElem {}
exports.HtmlCite = class HtmlCite extends HtmlElem {}
exports.HtmlCode = class HtmlCode extends HtmlElem {}
exports.HtmlCol = class HtmlCol extends HtmlElem {}
exports.HtmlColGroup = class HtmlColGroup extends HtmlElem {}
exports.HtmlData = class HtmlData extends HtmlElem {}
exports.HtmlDataList = class HtmlDataList extends HtmlElem {}
exports.HtmlDd = class HtmlDd extends HtmlElem {}
exports.HtmlDel = class HtmlDel extends HtmlElem {}
exports.HtmlDetails = class HtmlDetails extends HtmlElem {}
exports.HtmlDfn = class HtmlDfn extends HtmlElem {}
exports.HtmlDialog = class HtmlDialog extends HtmlElem {}
exports.HtmlDiv = class HtmlDiv extends HtmlElem {}
exports.HtmlDl = class HtmlDl extends HtmlElem {}
exports.HtmlDt = class HtmlDt extends HtmlElem {}
exports.HtmlEm = class HtmlEm extends HtmlElem {}
exports.HtmlEmbed = class HtmlEmbed extends HtmlElem {}
exports.HtmlFieldSet = class HtmlFieldSet extends HtmlElem {}
exports.HtmlFigCaption = class HtmlFigCaption extends HtmlElem {}
exports.HtmlFigure = class HtmlFigure extends HtmlElem {}
exports.HtmlFooter = class HtmlFooter extends HtmlElem {}
exports.HtmlForm = class HtmlForm extends HtmlElem {}
exports.HtmlH1 = class HtmlH1 extends HtmlElem {}
exports.HtmlH2 = class HtmlH2 extends HtmlElem {}
exports.HtmlH3 = class HtmlH3 extends HtmlElem {}
exports.HtmlH4 = class HtmlH4 extends HtmlElem {}
exports.HtmlH5 = class HtmlH5 extends HtmlElem {}
exports.HtmlH6 = class HtmlH6 extends HtmlElem {}
exports.HtmlHGroup = class HtmlHGroup extends HtmlElem {}
exports.HtmlHead = class HtmlHead extends HtmlElem {}
exports.HtmlHeader = class HtmlHeader extends HtmlElem {}
exports.HtmlHr = class HtmlHr extends HtmlElem {}
exports.HtmlHtml = class HtmlHtml extends HtmlElem {}
exports.HtmlI = class HtmlI extends HtmlElem {}
exports.HtmlIFrame = class HtmlIFrame extends HtmlElem {}
exports.HtmlImg = class HtmlImg extends HtmlElem {}
exports.HtmlInput = class HtmlInput extends HtmlElem {}
exports.HtmlIns = class HtmlIns extends HtmlElem {}
exports.HtmlKbd = class HtmlKbd extends HtmlElem {}
exports.HtmlLabel = class HtmlLabel extends HtmlElem {}
exports.HtmlLegend = class HtmlLegend extends HtmlElem {}
exports.HtmlLi = class HtmlLi extends HtmlElem {}
exports.HtmlLink = class HtmlLink extends HtmlElem {}
exports.HtmlMain = class HtmlMain extends HtmlElem {}
exports.HtmlMap = class HtmlMap extends HtmlElem {}
exports.HtmlMark = class HtmlMark extends HtmlElem {}
exports.HtmlMenu = class HtmlMenu extends HtmlElem {}
exports.HtmlMeta = class HtmlMeta extends HtmlElem {}
exports.HtmlMeter = class HtmlMeter extends HtmlElem {}
exports.HtmlNav = class HtmlNav extends HtmlElem {}
exports.HtmlNoScript = class HtmlNoScript extends HtmlElem {}
exports.HtmlObject = class HtmlObject extends HtmlElem {}
exports.HtmlOl = class HtmlOl extends HtmlElem {}
exports.HtmlOptGroup = class HtmlOptGroup extends HtmlElem {}
exports.HtmlOption = class HtmlOption extends HtmlElem {}
exports.HtmlOutput = class HtmlOutput extends HtmlElem {}
exports.HtmlP = class HtmlP extends HtmlElem {}
exports.HtmlParam = class HtmlParam extends HtmlElem {}
exports.HtmlPicture = class HtmlPicture extends HtmlElem {}
exports.HtmlPre = class HtmlPre extends HtmlElem {}
exports.HtmlProgress = class HtmlProgress extends HtmlElem {}
exports.HtmlQ = class HtmlQ extends HtmlElem {}
exports.HtmlRp = class HtmlRp extends HtmlElem {}
exports.HtmlRt = class HtmlRt extends HtmlElem {}
exports.HtmlRuby = class HtmlRuby extends HtmlElem {}
exports.HtmlS = class HtmlS extends HtmlElem {}
exports.HtmlSamp = class HtmlSamp extends HtmlElem {}
exports.HtmlScript = class HtmlScript extends HtmlElem {}
exports.HtmlSection = class HtmlSection extends HtmlElem {}
exports.HtmlSelect = class HtmlSelect extends HtmlElem {}
exports.HtmlSmall = class HtmlSmall extends HtmlElem {}
exports.HtmlSource = class HtmlSource extends HtmlElem {}
exports.HtmlSpan = class HtmlSpan extends HtmlElem {}
exports.HtmlStrong = class HtmlStrong extends HtmlElem {}
exports.HtmlStyle = class HtmlStyle extends HtmlElem {}
exports.HtmlSub = class HtmlSub extends HtmlElem {}
exports.HtmlSummary = class HtmlSummary extends HtmlElem {}
exports.HtmlSup = class HtmlSup extends HtmlElem {}
exports.HtmlTBody = class HtmlTBody extends HtmlElem {}
exports.HtmlTFoot = class HtmlTFoot extends HtmlElem {}
exports.HtmlTHead = class HtmlTHead extends HtmlElem {}
exports.HtmlTable = class HtmlTable extends HtmlElem {}
exports.HtmlTd = class HtmlTd extends HtmlElem {}
exports.HtmlTemplate = class HtmlTemplate extends HtmlElem {}
exports.HtmlTextArea = class HtmlTextArea extends HtmlElem {}
exports.HtmlTh = class HtmlTh extends HtmlElem {}
exports.HtmlTime = class HtmlTime extends HtmlElem {}
exports.HtmlTitle = class HtmlTitle extends HtmlElem {}
exports.HtmlTr = class HtmlTr extends HtmlElem {}
exports.HtmlTrack = class HtmlTrack extends HtmlElem {}
exports.HtmlU = class HtmlU extends HtmlElem {}
exports.HtmlUl = class HtmlUl extends HtmlElem {}
exports.HtmlVar = class HtmlVar extends HtmlElem {}
exports.HtmlVideo = class HtmlVideo extends HtmlElem {}
exports.HtmlWbr = class HtmlWbr extends HtmlElem {}

exports.HtmlA.defineProps([
  'origin',
])

exports.HtmlA.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'target',
  'download',
  'rel',
  'rev',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlArea.defineProps([
  'origin',
  'relList',
])

exports.HtmlArea.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'alt',
  'coords',
  'shape',
  'target',
  'download',
  'rel',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlAudio.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

exports.HtmlAudio.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
])

exports.HtmlAudio.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
], true)

exports.HtmlBase.defineProps([
  'href',
  'target',
], true)

exports.HtmlBlockQuote.defineProps([
  'cite',
], true)

exports.HtmlButton.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlButton.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlButton.defineProps([
  'autofocus',
  'disabled',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'type',
  'value',
], true)

exports.HtmlCanvas.defineMethods([
  'getContext',
  'probablySupportsContext',
  'toDataURL',
  'toBlob',
])

exports.HtmlCanvas.defineProps([
  'width',
  'height',
], true)

exports.HtmlCol.defineProps([
  'span',
], true)

exports.HtmlColGroup.defineProps([
  'span',
], true)

exports.HtmlData.defineProps([
  'value',
], true)

exports.HtmlDel.defineProps([
  'cite',
  'dateTime',
], true)

exports.HtmlDetails.defineProps([
  'open',
], true)

exports.HtmlDialog.defineMethods([
  'show',
  'showModal',
  'close',
])

exports.HtmlDialog.defineProps([
  'open',
  'returnValue',
], true)

exports.HtmlEmbed.defineProps([
  'src',
  'type',
  'width',
  'height',
], true)

exports.HtmlFieldSet.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlFieldSet.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlFieldSet.defineProps([
  'disabled',
  'name',
], true)

exports.HtmlForm.defineMethods([
  'checkValidity',
  'reportValidity',
  'reset',
  'submit',
])

exports.HtmlForm.defineProps([
  'acceptCharset',
  'action',
  'autocomplete',
  'enctype',
  'method',
  'name',
  'noValidate',
  'target',
], true)

exports.HtmlIFrame.defineProps([
  'sandbox',
])

exports.HtmlIFrame.defineProps([
  'src',
  'srcdoc',
  'allowFullScreen',
  'allowPaymentRequest',
  'width',
  'height',
  'referrerPolicy',
], true)

exports.HtmlImg.defineMethods([
  'decode',
])

exports.HtmlImg.defineProps([
  'complete',
  'currentSrc',
  'naturalWidth',
  'naturalHeight',
])

exports.HtmlImg.defineProps([
  'alt',
  'referrerPolicy',
  'src',
  'srcset',
  'sizes',
  'crossOrigin',
  'useMap',
  'isMap',
  'height',
  'width',
], true)

exports.HtmlInput.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
  'stepDown',
  'stepUp',
])

exports.HtmlInput.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlInput.defineProps([
  'accept',
  'alt',
  'autocomplete',
  'autofocus',
  'defaultChecked',
  'checked',
  'dirName',
  'disabled',
  'files',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'height',
  'indeterminate',
  'inputMode',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'defaultValue',
  'value',
  'valueAsDate',
  'valueAsNumber',
  'width',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

exports.HtmlIns.defineProps([
  'cite',
  'dateTime',
], true)

exports.HtmlLabel.defineProps([
  'htmlFor',
], true)

exports.HtmlLi.defineProps([
  'value',
], true)

exports.HtmlLink.defineProps([
  'relList',
  'sizes',
])

exports.HtmlLink.defineProps([
  'href',
  'crossOrigin',
  'rel',
  'rev',
  'media',
  'nonce',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlMap.defineProps([
  'name',
], true)

exports.HtmlMeta.defineAttrs([
  'charset',
])

exports.HtmlMeta.defineProps([
  'httpEquiv',
  'name',
  'content',
], true)

exports.HtmlMeter.defineProps([
  'value',
  'min',
  'max',
  'low',
  'high',
  'optimum',
], true)

exports.HtmlObject.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlObject.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlObject.defineProps([
  'name',
  'data',
  'type',
  'typeMustMatch',
  'useMap',
  'width',
  'height',
], true)

exports.HtmlOl.defineProps([
  'reversed',
  'start',
  'type',
], true)

exports.HtmlOptGroup.defineProps([
  'disabled',
  'label',
], true)

exports.HtmlOption.defineProps([
  'index',
])

exports.HtmlOption.defineProps([
  'disabled',
  'label',
  'defaultSelected',
  'selected',
  'value',
  'text',
], true)

exports.HtmlOutput.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlOutput.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlOutput.defineProps([
  'htmlFor',
  'defaultValue',
  'name',
  'value',
], true)

exports.HtmlParam.defineProps([
  'name',
  'value',
], true)

exports.HtmlProgress.defineProps([
  'position',
])

exports.HtmlProgress.defineProps([
  'value',
  'max',
], true)

exports.HtmlQ.defineProps([
  'cite',
], true)

exports.HtmlScript.defineProps([
  'src',
  'type',
  'noModule',
  'charset',
  'async',
  'defer',
  'crossOrigin',
  'integrity',
  'referrerPolicy',
  'text',
  'nonce',
], true)

exports.HtmlSelect.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlSelect.defineProps([
  'type',
  'length',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlSelect.defineProps([
  'autocomplete',
  'autofocus',
  'disabled',
  'multiple',
  'name',
  'required',
  'size',
  'selectedIndex',
  'value',
], true)

exports.HtmlSource.defineProps([
  'src',
  'type',
  'srcset',
  'sizes',
  'media',
], true)

exports.HtmlStyle.defineProps([
  'media',
  'nonce',
  'type',
], true)

exports.HtmlTd.defineProps([
  'cellIndex',
])

exports.HtmlTd.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
], true)

exports.HtmlTextArea.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
])

exports.HtmlTextArea.defineProps([
  'type',
  'textLength',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlTextArea.defineProps([
  'autocomplete',
  'autofocus',
  'cols',
  'dirName',
  'disabled',
  'inputMode',
  'maxLength',
  'minLength',
  'name',
  'placeholder',
  'readOnly',
  'required',
  'rows',
  'wrap',
  'step',
  'defaultValue',
  'value',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

exports.HtmlTh.defineProps([
  'cellIndex',
])

exports.HtmlTh.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
  'scope',
  'abbr',
], true)

exports.HtmlTime.defineProps([
  'dateTime',
], true)

exports.HtmlTitle.defineProps([
  'text',
], true)

exports.HtmlTr.defineProps([
  'rowIndex',
  'sectionRowIndex',
])

exports.HtmlTrack.defineProps([
  'readyState',
  'track',
])

exports.HtmlTrack.defineProps([
  'kind',
  'src',
  'srclang',
  'label',
  'default',
], true)

exports.HtmlVideo.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

exports.HtmlVideo.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
  'videoWidth',
  'videoHeight',
])

exports.HtmlVideo.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
  'width',
  'height',
  'poster',
], true)


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Dataset = __webpack_require__(5)
const DomElem = __webpack_require__(7)
const Style = __webpack_require__(19)

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlElem extends DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'
}

HtmlElem.defineAttrs([
  Dataset,
  Style,
])

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlElem.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'innerText',
  'inputMode',
  'lang',
  'tabIndex',
  'title',
  'translate',
], true)

module.exports = HtmlElem


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

class Dataset extends AttrType
{
  /**
   * @param {DomElem} elem
   * @returns {DOMStringMap}
   */
  static get(elem) {
    return elem.node.dataset
  }

  /**
   * @param {DomElem} elem
   * @param {{}} dataset
   */
  static set(elem, dataset) {
    const map = elem.node.dataset
    for(let [name, value] of Object.entries(dataset)) {
      if(value !== undefined) {
        map[name] = dataset[name]
      }
    }
  }
}

module.exports = Dataset


/***/ }),
/* 6 */
/***/ ((module) => {

/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrType
{
  static defaultValue = null

  /**
   * @param {DomElem} elem
   * @returns {string|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {string|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.localName, value)
  }

  /**
   * @returns {string}
   */
  static get attrName() {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  /**
   * @returns {string}
   */
  static get localName() {
    return this.name.toLowerCase()
  }
}

module.exports = AttrType


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(8)
const DomNode = __webpack_require__(9)

const { document } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class DomElem extends DomNode
{
  className = undefined

  static prefix = ''

  static namespace = ''

  /**
   * @return {*|Element}
   */
  createNode() {
    let constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name?.startsWith(prefix)) {
      const name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    throw Error(`Unable to resolve localName for "${ prefix }" prefix`)
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setClassName()
    super.init(deep)
  }

  setClassName() {
    if(this.props.className !== undefined) {
      this.className = this.props.className
    }
    if(this.className !== undefined) {
      if(this.className !== null) {
        this.node.className = this.className
      }
      return
    }
    let constructor = this.constructor
    const prefix = constructor.prefix
    const classList = this.node.classList
    do {
      if(constructor.name.startsWith(prefix)) {
        return
      }
      classList.add(constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.get]
   * @param {function} [attr.has]
   * @param {*|null} [attr.defaultValue]
   * @returns {string|*|null}
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.get(this)
    }
    return this.node.getAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(typeof attr === 'function') {
      value === null || attr.set(this, value)
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * Get all attributes of the element as an array
   * @returns {{}}
   */
  get attrs() {
    const attrs = {}
    for(const { name, value } of this.node.attributes) {
      attrs[name] = value
    }
    return attrs
  }

  /**
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      value === null ?
        this.node.removeAttribute(name) :
        this.node.setAttribute(name, value)
    }
  }

  /**
   * @return {string[]}
   */
  get class() {
    return this.node.className.split(' ')
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set class(value) {
    if(Array.isArray(value)) {
      this.node.classList.add(...value.filter(Boolean))
    }
    else if(value.constructor === Object) {
      for(const token of Object.keys(value)) {
        this.node.classList.toggle(token, value[token])
      }
    }
    else this.node.classList = value
  }

  /**
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    for(const attr of attrs) {
      const name = typeof attr === 'string' ? attr : attr.attrName
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        get() {
          return this.getAttr(attr)
        },
        set(value) {
          if(value !== undefined) {
            this.setAttr(attr, value)
          }
        },
      })
    }
  }
}

DomElem.defineMethods([
  'scrollTo',
  'scrollBy',
])

DomElem.defineProps([
  'classList',
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

DomElem.defineProps([
  'id',
  'innerHTML',
  'textContent',
], true)

Object.defineProperties(DomElem.prototype, {
  html : Object.getOwnPropertyDescriptor(DomElem.prototype, 'innerHTML'),
  text : Object.getOwnPropertyDescriptor(DomElem.prototype, 'textContent'),
})

module.exports = DomElem


/***/ }),
/* 8 */
/***/ ((module) => {

/**
 * @module xwindow
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
if(typeof window === 'undefined') {
  // Calling via eval() prevents jsdom extraction when using a module bundler
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(8)
const actualize = __webpack_require__(10)
const events = __webpack_require__(17)
const {
  getKey,
  nodeWillMount,
  nodeDidMount,
  nodeWillUpdate,
  nodeDidUpdate,
  childrenDidUpdate,
  nodeWillUnmount,
} = __webpack_require__(18)

const { CustomEvent, DocumentFragment, EventTarget, Node } = window
const SPECIAL_PROPS = {
  children : true,
  className : true,
  key : true,
  node : true,
}

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @abstract
 */
class DomNode
{
  state = {}

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.props = props = this.normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    if(props.key) {
      this.key = props.key
    }
  }

  /**
   * @param {*} [props]
   * @return {{}}
   */
  normalizeProps(props) {
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    else if(!props.children) {
      props.children = []
    }
    return props
  }

  /**
   * @returns {EventTarget}
   */
  createNode() {
    return new EventTarget
  }

  /**
   * @param {boolean} [deep]
   * @returns {this}
   */
  init(deep) {
    this.setProps()
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
  }

  setProps() {
    let name, value
    for(name in this.props) {
      value = this.props[name]
      if(SPECIAL_PROPS[name]) {
        continue
      }
      if(name in this) {
        this[name] = value
      }
    }
  }

  /**
   * @param {*} [children]
   * @return {(*|DomNode|string)[]}
   */
  normalizeChildren(children) {
    const result = []
    for(const child of [children].flat(Infinity)) {
      if(child === false || child === null || child === undefined) {
        continue
      }
      result.push(child)
    }
    return result
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    const fragment = new DocumentFragment
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.props.children = this.normalizeChildren(this.render())
    fragment.append(...this.props.children.map(child => child.node || child))
    actualize(this.node, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
      nodeWillUpdate,
      nodeDidUpdate,
      childrenDidUpdate,
      nodeWillUnmount,
    })
    this.componentDidUpdate(this.props, prevState)
  }

  /**
   * @return {*}
   */
  render() {
    return this.props.children
  }

  componentDidMount() {
    void null
  }

  componentDidUpdate() {
    void null
  }

  componentWillUnmount() {
    void null
  }

  /**
   * @param {boolean} [keepNode]
   */
  destroy(keepNode = false) {
    if(!this.node) {
      return
    }
    this.componentWillUnmount()
    for(const child of this.props.children) {
      child.node && child.destroy(true)
    }
    for(const type of this.__handlers.keys()) {
      this.node[type] = null
      this.__handlers.delete(type)
    }
    keepNode || this.node.remove()
    this.node.__instance = null
    this.node = null
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}} [dict]
   * @param {boolean} [dict.bubbles=false]
   * @param {boolean} [dict.cancelable=false]
   * @param {*} [dict.detail]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event === 'string') {
      const description = events[event] || [CustomEvent]
      const [constructor, bubbles, cancelable] = description
      if(!dict) {
        dict = {
          bubbles : bubbles || false,
          cancelable : cancelable || false,
        }
      }
      event = new constructor(event, dict)
    }
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string[]} events
   */
  static defineEvents(events) {
    for(const type of events) {
      const name = 'on' + type
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        set(callback) {
          if(callback) {
            this.node[name] = e => callback.call(this, e, e.target.__instance)
            this.__handlers.set(name, callback)
            return
          }
          this.node[name] = null
          this.__handlers.delete(name)
        },
        get() {
          return this.__handlers.get(name) || null
        },
      })
    }
  }

  /**
   * @param {string[]} methods
   */
  static defineMethods(methods) {
    for(const name of methods) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        writable : true,
        value : function(...args) {
          return this.node[name](...args)
        },
      })
    }
  }

  /**
   * @param {string[]} props
   * @param {boolean} [setters]
   */
  static defineProps(props, setters = false) {
    for(const name of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[name]
        },
      }
      if(setters) {
        desc.set = function(value) {
          if(value !== undefined) {
            this.node[name] = value
          }
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  /**
   * @param {{}} props
   * @param {Node} [parentNode]
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props)
    if(!parentNode) {
      instance.init(true)
      return instance
    }
    const fragment = new DocumentFragment
    fragment.append(instance.node)
    actualize(parentNode, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
    })
    return instance
  }
}

DomNode.defineEvents(Object.keys(events))

Object.defineProperty(DomNode.prototype, 'key', {
  writable : true,
  value : null,
})

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = DomNode


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module actualize
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @see {@link https://github.com/aristov/actualize}
 */
module.exports = __webpack_require__(11)


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const setChildren = __webpack_require__(12)
const updateNode = __webpack_require__(15)

const getNodeId = node => node.id

/**
 * @param {*|Node} treeA node for updating
 * @param {*|Node} treeB node to which `treeA` should be updated
 * @param {{}} [options] actualize options
 * @param {boolean} [options.childrenOnly] Update only the child nodes of the `treeA`, the element itself will be skipped. The default value is `false`.
 * @param {function} [options.getKey] Called to get a custom key of the node in a child list.  The default value is `node.id`.
 * @param {function} [options.nodeWillMount] Called before a node from the `B` tree is mounted to the `A` tree.
 * @param {function} [options.nodeDidMount] Called after a node from the `B` tree has been mounted to the `A` tree.
 * @param {function} [options.nodeWillUnmount] Called before a node in the `A` tree is unmounted.
 * @param {function} [options.nodeDidUnmount] Called after a node in the `A` tree has been unmounted.
 * @param {function} [options.nodeWillUpdate] Called before updating a node in the `A` tree.
 * @param {function} [options.nodeDidUpdate] Called after updating a node in the `A` tree.
 * @param {function} [options.childrenWillUpdate] Called before updating the child nodes of an element in the `A` tree.
 * @param {function} [options.childrenDidUpdate] Called after updating the child nodes of an element in the `A` tree.
 * @return {Element}
 */
function actualize(treeA, treeB, options = {}) {
  if(!options.getKey) {
    options.getKey = getNodeId
  }
  if(options.childrenOnly) {
    setChildren(treeA, treeB, options)
    return treeA
  }
  return updateNode(treeA, treeB, options)
}

module.exports = actualize


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = setChildren // avoiding empty exports for circular dependency

const getKeyIndex = __webpack_require__(13)
const setChildNodes = __webpack_require__(14)
const updateNode = __webpack_require__(15)

const { indexOf } = Array.prototype

/**
 * @param {*|Element} nodeA
 * @param {*|Element} nodeB
 * @param {{}} [options]
 */
function setChildren(nodeA, nodeB, options) {
  const indexA = getKeyIndex(nodeA, options.getKey)
  const indexB = getKeyIndex(nodeB, options.getKey)
  if(!indexA || !indexB) {
    setChildNodes(nodeA, nodeB, options)
    return
  }
  const {
    getKey,
    nodeWillMount,
    nodeDidMount,
    nodeWillUnmount,
    nodeDidUnmount,
  } = options
  const childrenB = Array.from(nodeB.children)
  let childA = nodeA.firstElementChild
  let childB, nextA, i, j
  while(childA) {
    nextA = childA.nextElementSibling
    if(!indexB[getKey(childA)]) {
      nodeWillUnmount?.(childA)
      childA.remove()
      nodeDidUnmount?.(childA)
    }
    childA = nextA
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(childA) {
      continue
    }
    nextA = nodeA.children[i]
    nodeWillMount?.(childB)
    if(nextA) {
      nextA.before(childB)
    }
    else nodeA.append(childB)
    nodeDidMount?.(childB)
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(!childA) {
      continue
    }
    j = indexOf.call(nodeA.children, childA)
    if(i === j) {
      updateNode(childA, childB, options)
      continue
    }
    nextA = nodeA.children[i].nextElementSibling
    if(nextA) {
      if(childA !== nextA && childA.nextElementSibling !== nextA) {
        nextA.before(childA)
      }
    }
    else nodeA.append(childA)
    updateNode(childA, childB, options)
  }
}


/***/ }),
/* 13 */
/***/ ((module) => {

const ELEMENT_NODE = 1

/**
 * @param {Node} node
 * @param {function} getKey
 * @return {{}|null}
 */
function getKeyIndex(node, getKey) {
  const index = {}
  let child, key
  for(child of node.childNodes) {
    if(child.nodeType !== ELEMENT_NODE) {
      return null
    }
    key = getKey(child)
    if(!key) {
      return null
    }
    index[key] = child
  }
  return index
}

module.exports = getKeyIndex


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const updateNode = __webpack_require__(15)

/**
 * @param {*|Element} nodeA
 * @param {*|Element} nodeB
 * @param {{}} [options]
 */
function setChildNodes(nodeA, nodeB, options) {
  const {
    nodeWillMount,
    nodeDidMount,
    nodeWillUnmount,
    nodeDidUnmount,
  } = options
  const childNodesA = Array.from(nodeA.childNodes)
  const childNodesB = Array.from(nodeB.childNodes)
  const length = Math.max(childNodesA.length, childNodesB.length)
  let i, childA, childB
  for(i = 0; i < length; i++) {
    childA = childNodesA[i]
    childB = childNodesB[i]
    if(!childA) {
      nodeWillMount?.(childB)
      nodeA.append(childB)
      nodeDidMount?.(childB)
      continue
    }
    if(!childB) {
      nodeWillUnmount?.(childA)
      childA.remove()
      nodeDidUnmount?.(childA)
      continue
    }
    updateNode(childA, childB, options)
  }
}

module.exports = setChildNodes


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const setAttrs = __webpack_require__(16)
const setChildren = __webpack_require__(12)

const ELEMENT_NODE = 1
const TEXT_NODE = 3

/**
 * @param {*|Node} nodeA
 * @param {*|Node} nodeB
 * @param {{}} [options]
 * @retuns {Node}
 */
function updateNode(nodeA, nodeB, options) {
  const {
    getKey,
    nodeWillMount,
    nodeDidMount,
    nodeWillUnmount,
    nodeDidUnmount,
    nodeWillUpdate,
    nodeDidUpdate,
    childrenWillUpdate,
    childrenDidUpdate,
  } = options
  if(nodeA.nodeType === TEXT_NODE && nodeB.nodeType === TEXT_NODE) {
    if(nodeA.data !== nodeB.data) {
      nodeWillUpdate?.(nodeA, nodeB)
      nodeA.data = nodeB.data
      nodeDidUpdate?.(nodeA, nodeB)
    }
    return nodeA
  }
  if(nodeA.nodeType === ELEMENT_NODE && nodeB.nodeType === ELEMENT_NODE) {
    if(nodeA.tagName === nodeB.tagName && getKey(nodeA) === getKey(nodeB)) {
      nodeWillUpdate?.(nodeA, nodeB)
      setAttrs(nodeA, nodeB)
      nodeDidUpdate?.(nodeA, nodeB)
      childrenWillUpdate?.(nodeA, nodeB)
      setChildren(nodeA, nodeB, options)
      childrenDidUpdate?.(nodeA, nodeB)
      return nodeA
    }
  }
  nodeWillUnmount?.(nodeA)
  nodeWillMount?.(nodeB)
  nodeA.replaceWith(nodeB)
  nodeDidUnmount?.(nodeA)
  nodeDidMount?.(nodeB)
  return nodeB
}

module.exports = updateNode


/***/ }),
/* 16 */
/***/ ((module) => {

/**
 * @param {*|Element} nodeA
 * @param {*|Element} nodeB
 */
function setAttrs(nodeA, nodeB) {
  const names = new Set
  let attr, value
  for(attr of nodeA.attributes) {
    names.add(attr.name)
    value = nodeB.getAttribute(attr.name)
    if(value === null) {
      nodeA.removeAttribute(attr.name)
      continue
    }
    if(attr.value !== value) {
      attr.value = value
    }
  }
  for(attr of nodeB.attributes) {
    if(!names.has(attr.name)) {
      nodeA.setAttribute(attr.name, attr.value)
    }
  }
  switch(nodeA.tagName) {
    case 'OPTION':
      nodeA.selected = nodeB.selected
      break
    case 'INPUT':
      nodeA.checked = nodeB.checked
      nodeA.indeterminate = nodeB.indeterminate
    case 'TEXTAREA':
      nodeA.value = nodeB.value
  }
}

module.exports = setAttrs


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(8)

/**
 * type : [constructor, bubbles, cancelable]
 */
module.exports = {
  blur : [window.FocusEvent],
  cancel : [window.Event, false, true],
  change : [window.Event, true],
  click : [window.MouseEvent, true, true],
  close : [window.Event],
  contextmenu : [window.MouseEvent, true, true],
  dblclick : [window.MouseEvent, true, true],
  error : [window.Event],
  focus : [window.FocusEvent],
  focusin : [window.FocusEvent, true],
  focusout : [window.FocusEvent, true],
  input : [window.InputEvent, true],
  invalid : [window.Event, false, true],
  keydown : [window.KeyboardEvent, true, true],
  keyup : [window.KeyboardEvent, true, true],
  load : [window.Event],
  mousedown : [window.MouseEvent, true, true],
  mouseenter : [window.MouseEvent],
  mouseleave : [window.MouseEvent],
  mousemove : [window.MouseEvent, true, true],
  mouseout : [window.MouseEvent, true, true],
  mouseover : [window.MouseEvent, true, true],
  mouseup : [window.MouseEvent, true, true],
  reset : [window.Event, true, true],
  resize : [window.UIEvent],
  scroll : [window.Event, true],
  submit : [window.Event, true, true],
  touchcancel : [window.TouchEvent, true],
  touchend : [window.TouchEvent, true, true],
  touchmove : [window.TouchEvent, true, true],
  touchstart : [window.TouchEvent, true, true],
  transitioncancel : [window.TransitionEvent, true],
  transitionend : [window.TransitionEvent, true, true],
  transitionrun : [window.TransitionEvent, true],
  transitionstart : [window.TransitionEvent, true],
}


/***/ }),
/* 18 */
/***/ ((module) => {

/**
 * @param {DomElem|string} child
 */
const componentDidMount = child => {
  if(child.node) {
    child.componentDidMount()
    child.props.children.forEach(componentDidMount)
  }
}

module.exports = {
  /**
   * @param {Element} node
   * @return {string}
   */
  getKey(node) {
    return node.__instance?.key || node.id
  },
  /**
   * @param {ChildNode|Element} nodeB
   */
  nodeWillMount(nodeB) {
    nodeB.__instance?.init(true)
  },
  /**
   * @param {ChildNode|Element} nodeB
   */
  nodeDidMount(nodeB) {
    nodeB.__instance && componentDidMount(nodeB.__instance)
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    if(instanceA.constructor === instanceB.constructor) {
      instanceB.state = instanceA.state
    }
    instanceB.init()
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeDidUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    for(const type of instanceA.__handlers.keys()) {
      nodeA[type] = null
    }
    for(const type of instanceB.__handlers.keys()) {
      nodeA[type] = nodeB[type]
      nodeB[type] = null
    }
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  childrenDidUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    instanceB.node = nodeA
    nodeA.__instance = instanceB
    nodeB.__instance = null
    if(instanceA.constructor === instanceB.constructor) {
      instanceB.componentDidUpdate(instanceA.props, instanceB.state)
    }
    else instanceB.componentDidMount()
  },
  /**
   * @param {ChildNode|Element} nodeA
   */
  nodeWillUnmount(nodeA) {
    nodeA.__instance?.destroy(true)
  },
}


/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

class Style extends AttrType
{
  /**
   * @param {HtmlElem} elem
   * @returns {CSSStyleDeclaration}
   */
  static get(elem) {
    return elem.node.style
  }

  /**
   * @param {HtmlElem} elem
   * @param {string|{}} style
   */
  static set(elem, style) {
    if(typeof style === 'string') {
      elem.node.style = style
    }
    else Object.assign(elem.node.style, style)
  }
}

module.exports = Style


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 21 */
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
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AriaType = __webpack_require__(21)

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
/* 31 */
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