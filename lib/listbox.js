import { Input as HTMLInput } from 'htmlmodule/lib/input'
import { Label } from 'htmlmodule/lib/label'
import { Span } from 'htmlmodule/lib/span'
import { Select } from './select'
import { Option } from './option'
import { ActiveDescendant } from './aria/activedescendant'
import { Multiselectable } from './aria/multiselectable'
import { ReadOnly } from './aria/readonly'
import { Required } from './aria/required'

/**
 * @summary A widget that allows the user to select one or more items from a list of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listbox
 * todo emit change
 */
export class Listbox extends Select {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
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
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        super.init(init)
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
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        if(!this.readOnly) {
            const options = this.options
            const selectedIndex = options.indexOf(this.selectedOption)
            let option 
            if(event.key === 'ArrowDown') {
                option = selectedIndex > -1?
                    options[selectedIndex + 1] :
                    options[0]
            }
            else if(event.key === 'ArrowUp') {
                option = selectedIndex > -1?
                    options[selectedIndex - 1] :
                    options[options.length - 1]
            }
            if(option) {
                option.selected = true
            }
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
        this.setAttribute(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {RoleAttrAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = this._box.children = children
    }

    /**
     * @returns {array}
     */
    get children() {
        return super.children
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
        this.dataset.name = name
    }

    /**
     * @return {string}
     */
    get name() {
        return this.dataset.name
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
     * @param {Option|null} selectedOption
     */
    set selectedOption(selectedOption) {
        if(selectedOption !== this.selectedOption) {
            for(const option of this.options) {
                if(option !== selectedOption) {
                    option.selected = false
                }
            }
            this.activeDescendant = selectedOption
            this.emit('change', { bubbles : true })
        }
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
        // todo
    }

    /**
     * @returns {string}
     */
    get value() {
        // todo
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
