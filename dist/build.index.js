(function (htmlmodule) {
'use strict';

const { prototype : { reduce } } = Array;
const ARIA_PREFIX = 'aria-';
const ARIA_PREFIX_LENGTH = ARIA_PREFIX.length;

class ARIADOMAssembler extends htmlmodule.HTMLDOMAssembler {
    constructor(object, init) {
        super();
        if(typeof object === 'string') this.assemble(object, init);
        else if(object instanceof Node) {
            this.node = object;
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

    init(init) {
        super.init(htmlmodule.NodeInit(init));
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
        this.node.setAttribute('aria-disabled', String(disabled));
        if(disabled) this.node.removeAttribute('tabindex');
        else this.node.tabIndex = -1;
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
        this.node.setAttribute('aria-hidden', hidden);
    }

    get hidden() {
        return this.node.getAttribute('aria-hidden')
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
        this.node.setAttribute('aria-owns', owns);
    }

    get owns() {
        return this.node.getAttribute('aria-owns')
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

const { map } = Array.prototype;

class Grid extends Table {

    constructor(object, init) {
        super(object, {
            role : 'grid',
            className : 'grid',
        });
        if(init) this.init(init);
    }


    get rows() {
        return map.call(this.node.rows, ({ assembler }) => assembler)
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
        map.call(this.table.cells, cell => cell.assembler);
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

const { map: map$1 } = Array.prototype;

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
        return map$1.call(this.node.cells, ({ assembler }) => assembler)
    }

    get prev() {
        const sibling = this.node.previousSibling;
        return sibling && sibling.assembler
    }

    get next() {
        const sibling = this.node.nextSibling;
        return sibling && sibling.assembler
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

const modKeys = ['metaKey', 'altKey', 'shiftKey', 'ctrlKey'];

class GridCell extends Cell {

    constructor(object, init) {
        super(object, {
            role : 'gridcell',
            className : 'gridcell',
            tabIndex : -1,
        });
        this.init({
            onfocus : this.onFocus.bind(this),
            onkeydown : this.onKeyDown.bind(this),
        });
        if(init) this.init(init);
    }

    onFocus() {
        if(this.selected) {
            // this.selected = 'true'
        }
    }

    onKeyDown(event) {
        if(modKeys.some(mod => event[mod])) {
            this.onModKeyDown(event);
        }
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event);
        }
    }

    onArrowKeyDown(event) {
        const sibling = {
            ArrowLeft : this.prev,
            ArrowRight : this.next,
            ArrowUp : this.topSibling,
            ArrowDown : this.bottomSibling
        }[event.key];
        if(sibling) sibling.focus();
    }

    onModKeyDown() {}

    focus() {
        this.node.focus();
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
        // console.log(this.grid.cells.filter(({ selected }) => selected === 'true'))
        this.node.setAttribute('aria-selected', selected);
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    get grid() {
        return this.node.closest('table').assembler
    }

    get row() {
        const parent = this.node.parentNode;
        return parent && parent.assembler
    }

    get index() {
        return this.node.cellIndex
    }

    get prev() {
        const sibling = this.node.previousSibling;
        return sibling && sibling.assembler
    }

    get next() {
        const sibling = this.node.nextSibling;
        return sibling && sibling.assembler
    }

    get topSibling() {
        const prevRow = this.row.prev;
        return prevRow && prevRow.cells[this.index] || null
    }

    get bottomSibling() {
        const nextRow = this.row.next;
        return nextRow && nextRow.cells[this.index] || null
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex');
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor);

function gridcell(init) {
    return new GridCell('td', init)
}

const rows = Array.from(new Array(10));
const cells = Array.from(new Array(10));

const testgrid = grid(rows.map((r, j) =>
    row(cells.map((c, i) =>
        i? gridcell({
            disabled : i === 5 && j === 5,
            selected : false,
            children : j + '_' + c + '_' + i
        }) : htmlmodule.th(j + '_' + i)))
));

document.body.appendChild(testgrid.node);

}(htmlmodule));
