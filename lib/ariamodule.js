exports = module.exports = require('htmlmodule')

const AriaTypeApplicable = require('./AriaTypeApplicable')
const AriaTypeBoolean = require('./AriaTypeBoolean')
const AriaTypeIdRef = require('./AriaTypeIdRef')
const AriaTypeIdRefList = require('./AriaTypeIdRefList')
const AriaTypeInteger = require('./AriaTypeInteger')
const AriaTypeNumber = require('./AriaTypeNumber')
const AriaTypeString = require('./AriaTypeString')
const AriaTypeToken = require('./AriaTypeToken')
const AriaTypeTokenList = require('./AriaTypeTokenList')
const AriaTypeTristate = require('./AriaTypeTristate')
const RoleType = require('./RoleType')

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
