import { Label } from 'htmlmodule/lib/label'
import { Span } from 'htmlmodule/lib/span'
import { Select } from './select'
import { Option } from './option'
import { Selected } from './aria/selected'
import { Multiselectable } from './aria/multiselectable'
import { ReadOnly } from './aria/readonly'
import { Required } from './aria/required'

/**
 * @summary A widget that allows the user to select one or more items from a list of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listbox
 * todo PageDown + PageUp + Select all
 * todo Type-ahead
 * todo scrollIntoView
 */
export class Listbox extends Select {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this._name = ''
        this._anchor = null
        this._box = new Span({
            parentNode : this,
            className : 'box',
            onfocus : () => this.focus() // scrollable box can receive focus in Firefox
        })
        this.tabIndex = 0
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const selectedOption = this.selectedOption
        if(selectedOption) {
            this.activeDescendant = selectedOption
        }
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        this.on('mousedown', this.onMouseDown)
        this.on('mouseover', this.onMouseOver)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        if(!this.readOnly) {
            const options = this.options
            const index = options.indexOf(this.activeDescendant)
            let option
            if(event.key === 'ArrowDown') {
                option = index > -1?
                    options[index + 1] :
                    options[0]
            }
            if(event.key === 'ArrowUp') {
                option = index > -1?
                    options[index - 1] :
                    options[options.length - 1]
            }
            if(option) {
                // option.selected = true
                this.activeDescendant = option
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Shift' && !this._anchor) {
            this._anchor = this.activeDescendant
        }
        if(key.startsWith('Arrow')) {
            event.preventDefault()
            if(!event.shiftKey) {
                this._anchor = null
            }
            this.onArrowKeyDown(event)
        }
        if(key === ' ') {
            event.preventDefault()
            this.onSpaceKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.onSpaceKeyUp(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        for(const option of this.selectedOptions) {
            option.classList.add('active')
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyUp(event) {
        for(const option of this.selectedOptions) {
            option.classList.remove('active')
        }
    }

    /**
     * @param {MouseEvent} event
     * @param {Element} event.target
     */
    onMouseDown(event) {
        if(!this.readOnly && !this.disabled) {
            const option = this.getRoleOf(event.target.closest(Option.selector))
            if(option) {
                if(this.multiselectable && !event.shiftKey) {
                    this._anchor = option
                }
                this.activeDescendant = option
            }
        }
    }

    /**
     * @param {MouseEvent} event
     * @param {Element} event.target
     */
    onMouseOver(event) {
        if(event.buttons === 1 && !this.readOnly && !this.disabled) {
            const option = this.getRoleOf(event.target.closest(Option.selector))
            if(option) {
                this.activeDescendant = option
            }
        }
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
        if(this.multiselectable && this._anchor) {
            const options = this.options
            const index1 = options.indexOf(this._anchor)
            const index2 = options.indexOf(activeDescendant)
            const range = options.slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
            for(const option of options) {
                if(range.includes(option)) {
                    option._input.parentNode = option // fixme
                    option.setAttribute(Selected, true)
                }
                else option.selected = false
            }
            super.activeDescendant = activeDescendant
            this.emit('change', { bubbles : true }) // fixme
        }
        else if(activeDescendant !== this.activeDescendant) {
            for(const option of this.options) {
                if(option === activeDescendant) {
                    option._input.parentNode = option // fixme
                    option.setAttribute(Selected, true)
                }
                else option.selected = false
            }
            super.activeDescendant = activeDescendant
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|*|null}
     */
    get activeDescendant() {
        return super.activeDescendant
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.prepend(this.labelledBy = new Label(label))
    }

    /**
     * @returns {string}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {string} name
     */
    set name(name) {
        for(const option of this.options) {
            if(!option.name) {
                option.name = name
            }
        }
        this._name = name
    }

    /**
     * @return {string}
     */
    get name() {
        return this._name
    }

    /**
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(Multiselectable, multiselectable)
    }

    /**
     * @returns {boolean}
     */
    get multiselectable() {
        return this.getAttribute(Multiselectable)
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        for(const option of options) {
            if(!option.name) {
                option.name = this.name
            }
        }
        this._box.children = options
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this.findAll(Option)
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return super.orientation || 'vertical'
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttribute(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttribute(Required)
    }

    /**
     * @returns {Option|null}
     */
    get selectedOption() {
        return this.find(Option, ({ selected }) => selected)
    }

    /**
     * @returns {Option[]}
     */
    get selectedOptions() {
        return this.findAll(Option, ({ selected }) => selected)
    }

    /**
     * @param {string} value
     */
    set value(value) {
        const option = this.find(Option, ({ value : v }) => v == value)
        if(option) {
            this._anchor = null
            option.selected = true
        }
        else for(const option of this.options) {
            option.selected = false
        }
    }

    /**
     * @returns {string}
     */
    get value() {
        const selectedOption = this.selectedOption
        return selectedOption? selectedOption.value : ''
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Listbox}
 */
export function listbox(init) {
    return new Listbox(init)
}
