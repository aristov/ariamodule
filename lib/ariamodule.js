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

exports.RoleAlert = class RoleAlert extends RoleType
{
  static role = 'Alert'
}
exports.RoleAlertDialog = class RoleAlertDialog extends RoleType
{
  static role = 'AlertDialog'
}
exports.RoleApplication = class RoleApplication extends RoleType
{
  static role = 'Application'
}
exports.RoleArticle = class RoleArticle extends RoleType
{
  static role = 'Article'
}
exports.RoleBanner = class RoleBanner extends RoleType
{
  static role = 'Banner'
}
exports.RoleBlockQuote = class RoleBlockQuote extends RoleType
{
  static role = 'BlockQuote'
}
exports.RoleButton = class RoleButton extends RoleType
{
  static role = 'Button'
}
exports.RoleCaption = class RoleCaption extends RoleType
{
  static role = 'Caption'
}
exports.RoleCell = class RoleCell extends RoleType
{
  static role = 'Cell'
}
exports.RoleCheckBox = class RoleCheckBox extends RoleType
{
  static role = 'CheckBox'
}
exports.RoleColumnHeader = class RoleColumnHeader extends RoleType
{
  static role = 'ColumnHeader'
}
exports.RoleComboBox = class RoleComboBox extends RoleType
{
  static role = 'ComboBox'
}
exports.RoleCommand = class RoleCommand extends RoleType
{
  static role = 'Command'
}
exports.RoleComplementary = class RoleComplementary extends RoleType
{
  static role = 'Complementary'
}
exports.RoleComposite = class RoleComposite extends RoleType
{
  static role = 'Composite'
}
exports.RoleContentInfo = class RoleContentInfo extends RoleType
{
  static role = 'ContentInfo'
}
exports.RoleDefinition = class RoleDefinition extends RoleType
{
  static role = 'Definition'
}
exports.RoleDialog = class RoleDialog extends RoleType
{
  static role = 'Dialog'
}
exports.RoleDirectory = class RoleDirectory extends RoleType
{
  static role = 'Directory'
}
exports.RoleDocument = class RoleDocument extends RoleType
{
  static role = 'Document'
}
exports.RoleFeed = class RoleFeed extends RoleType
{
  static role = 'Feed'
}
exports.RoleFigure = class RoleFigure extends RoleType
{
  static role = 'Figure'
}
exports.RoleForm = class RoleForm extends RoleType
{
  static role = 'Form'
}
exports.RoleGrid = class RoleGrid extends RoleType
{
  static role = 'Grid'
}
exports.RoleGridCell = class RoleGridCell extends RoleType
{
  static role = 'GridCell'
}
exports.RoleGroup = class RoleGroup extends RoleType
{
  static role = 'Group'
}
exports.RoleHeading = class RoleHeading extends RoleType
{
  static role = 'Heading'
}
exports.RoleImg = class RoleImg extends RoleType
{
  static role = 'Img'
}
exports.RoleInput = class RoleInput extends RoleType
{
  static role = 'Input'
}
exports.RoleLandmark = class RoleLandmark extends RoleType
{
  static role = 'Landmark'
}
exports.RoleLink = class RoleLink extends RoleType
{
  static role = 'Link'
}
exports.RoleList = class RoleList extends RoleType
{
  static role = 'List'
}
exports.RoleListBox = class RoleListBox extends RoleType
{
  static role = 'ListBox'
}
exports.RoleListItem = class RoleListItem extends RoleType
{
  static role = 'ListItem'
}
exports.RoleLog = class RoleLog extends RoleType
{
  static role = 'Log'
}
exports.RoleMain = class RoleMain extends RoleType
{
  static role = 'Main'
}
exports.RoleMarquee = class RoleMarquee extends RoleType
{
  static role = 'Marquee'
}
exports.RoleMath = class RoleMath extends RoleType
{
  static role = 'Math'
}
exports.RoleMenu = class RoleMenu extends RoleType
{
  static role = 'Menu'
}
exports.RoleMenuBar = class RoleMenuBar extends RoleType
{
  static role = 'MenuBar'
}
exports.RoleMenuItem = class RoleMenuItem extends RoleType
{
  static role = 'MenuItem'
}
exports.RoleMenuItemCheckBox = class RoleMenuItemCheckBox extends RoleType
{
  static role = 'MenuItemCheckBox'
}
exports.RoleMenuItemRadio = class RoleMenuItemRadio extends RoleType
{
  static role = 'MenuItemRadio'
}
exports.RoleNavigation = class RoleNavigation extends RoleType
{
  static role = 'Navigation'
}
exports.RoleNone = class RoleNone extends RoleType
{
  static role = 'None'
}
exports.RoleNote = class RoleNote extends RoleType
{
  static role = 'Note'
}
exports.RoleOption = class RoleOption extends RoleType
{
  static role = 'Option'
}
exports.RoleParagraph = class RoleParagraph extends RoleType
{
  static role = 'Paragraph'
}
exports.RolePresentation = class RolePresentation extends RoleType
{
  static role = 'Presentation'
}
exports.RoleProgressBar = class RoleProgressBar extends RoleType
{
  static role = 'ProgressBar'
}
exports.RoleRadio = class RoleRadio extends RoleType
{
  static role = 'Radio'
}
exports.RoleRadioGroup = class RoleRadioGroup extends RoleType
{
  static role = 'RadioGroup'
}
exports.RoleRange = class RoleRange extends RoleType
{
  static role = 'Range'
}
exports.RoleRegion = class RoleRegion extends RoleType
{
  static role = 'Region'
}
exports.RoleRow = class RoleRow extends RoleType
{
  static role = 'Row'
}
exports.RoleRowGroup = class RoleRowGroup extends RoleType
{
  static role = 'RowGroup'
}
exports.RoleRowHeader = class RoleRowHeader extends RoleType
{
  static role = 'RowHeader'
}
exports.RoleScrollBar = class RoleScrollBar extends RoleType
{
  static role = 'ScrollBar'
}
exports.RoleSearch = class RoleSearch extends RoleType
{
  static role = 'Search'
}
exports.RoleSearchBox = class RoleSearchBox extends RoleType
{
  static role = 'SearchBox'
}
exports.RoleSection = class RoleSection extends RoleType
{
  static role = 'Section'
}
exports.RoleSectionHead = class RoleSectionHead extends RoleType
{
  static role = 'SectionHead'
}
exports.RoleSelect = class RoleSelect extends RoleType
{
  static role = 'Select'
}
exports.RoleSeparator = class RoleSeparator extends RoleType
{
  static role = 'Separator'
}
exports.RoleSlider = class RoleSlider extends RoleType
{
  static role = 'Slider'
}
exports.RoleSpinButton = class RoleSpinButton extends RoleType
{
  static role = 'SpinButton'
}
exports.RoleStatus = class RoleStatus extends RoleType
{
  static role = 'Status'
}
exports.RoleStrong = class RoleStrong extends RoleType
{
  static role = 'Strong'
}
exports.RoleStructure = class RoleStructure extends RoleType
{
  static role = 'Structure'
}
exports.RoleSwitch = class RoleSwitch extends RoleType
{
  static role = 'Switch'
}
exports.RoleTab = class RoleTab extends RoleType
{
  static role = 'Tab'
}
exports.RoleTabList = class RoleTabList extends RoleType
{
  static role = 'TabList'
}
exports.RoleTabPanel = class RoleTabPanel extends RoleType
{
  static role = 'TabPanel'
}
exports.RoleTable = class RoleTable extends RoleType
{
  static role = 'Table'
}
exports.RoleTerm = class RoleTerm extends RoleType
{
  static role = 'Term'
}
exports.RoleTextBox = class RoleTextBox extends RoleType
{
  static role = 'TextBox'
}
exports.RoleTimer = class RoleTimer extends RoleType
{
  static role = 'Timer'
}
exports.RoleToolBar = class RoleToolBar extends RoleType
{
  static role = 'ToolBar'
}
exports.RoleToolTip = class RoleToolTip extends RoleType
{
  static role = 'ToolTip'
}
exports.RoleTree = class RoleTree extends RoleType
{
  static role = 'Tree'
}
exports.RoleTreeGrid = class RoleTreeGrid extends RoleType
{
  static role = 'TreeGrid'
}
exports.RoleTreeItem = class RoleTreeItem extends RoleType
{
  static role = 'TreeItem'
}
exports.RoleWidget = class RoleWidget extends RoleType
{
  static role = 'Widget'
}
exports.RoleWindow = class RoleWindow extends RoleType
{
  static role = 'Window'
}

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
