import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Span } from 'htmlmodule/lib/Span'
import { Option } from './option'
import { Role } from './role'
import { Select } from './select'
import { Multiselectable } from './aria/multiselectable'
import { ReadOnly } from './aria/readonly'
import { Required } from './aria/required'
import { Selected } from './aria/selected'

/**
 * @summary A widget that allows the user to select one or more items from a list of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listbox
 * todo Home + End + PageDown + PageUp
 * todo Type-ahead
 * todo orientation = horizontal
 * todo expanded
 */
export class ListBox extends Select {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._name = ''
        this._box = null
        this._transition = false
        this.tabIndex = 0
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        this.on('mousedown', this.onMouseDown)
        this.on('transitionend', this.onTransitionEnd)
        super.init(init)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        event.preventDefault()
        if(this.readOnly) return
        const options = this.options.filter(({ hidden }) => !hidden)
        const activeDescendant = this.activeDescendant
        const index = options.indexOf(activeDescendant)
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
            if(this.multiselectable) {
                if(event.shiftKey) {
                    if(!this._anchor) {
                        this._anchor = activeDescendant || option
                    }
                }
                else this._anchor = null
            }
            this.activeDescendant = option
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === ' ') {
            this.onSpaceKeyDown(event)
        }
        if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        if(event.code === 'KeyA' && (event.metaKey || event.ctrlKey)) {
            this.onSelectAllKeyDown(event)
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
    onSelectAllKeyDown(event) {
        event.preventDefault()
        if(this.readOnly || !this.multiselectable) return
        const options = this.options
        if(this.selectedOptions.length < options.length) {
            for(const option of options) {
                option._input.parentNode = option // fixme
                option.setAttr(Selected, true)
            }
            this._anchor = options[0]
            super.activeDescendant = options[options.length - 1]
            this.emit('change', { bubbles : true })
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
        if(this.readOnly || this.disabled) return
        const option = this.getRoleOf(event.target.closest(Option.selector))
        if(option) {
            const anchor = this._anchor
            if(this.multiselectable && (!event.shiftKey || !this._anchor)) {
                this._anchor = option
            }
            if(option !== this.activeDescendant || anchor !== this._anchor) {
                this.activeDescendant = option
                this.emit('change', { bubbles : true })
            }
        }
        this.on('mouseover', this.onMouseOver)
        this.ownerDocument.on('mouseup', this.onMouseUp, this)
    }

    /**
     * @param {MouseEvent} event
     * @param {Element} event.target
     */
    onMouseOver(event) {
        const option = this.getRoleOf(event.target.closest(Option.selector))
        if(option) {
            if(this.multiselectable && !this._anchor) {
                this._anchor = option
            }
            if(option !== this.activeDescendant) {
                this.activeDescendant = option
                this.emit('change', { bubbles : true })
            }
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        this.un('mouseover', this.onMouseOver)
        this.ownerDocument.un('mouseup', this.onMouseUp, this)
    }

    /**
     * @param {TransitionEvent} event
     */
    onTransitionEnd(event) {
        if(event.target === this.ownerElement.node) {
            if(this.hidden === true) {
                super.expanded = false
                this._transition = false
            }
            else this._transition = true
        }
    }

    /**
     * @param {Option} option
     */
    smoothScrollTo(option) {
        const optionNode = option.ownerElement.node
        const boxNode = optionNode.parentNode
        const offset = Math.min(optionNode.offsetHeight / 5, 5)
        const optionTop = optionNode.offsetTop - offset
        const optionBottom = optionNode.offsetTop + optionNode.offsetHeight + offset
        const boxHeight = boxNode.clientHeight
        const scrollEdge = boxNode.scrollHeight - boxNode.clientHeight
        let scrollTop = Math.round(boxNode.scrollTop)
        function scroll() {
            if(optionTop < boxNode.scrollTop) {
                if((boxNode.scrollTop = scrollTop--) > 0) {
                    setTimeout(scroll)
                } 
            }
            else if(optionBottom > boxNode.scrollTop + boxHeight) {
                if((scrollEdge - (boxNode.scrollTop = scrollTop++)) > 0) {
                    setTimeout(scroll)
                }
            }
        }
        scroll()
    }

    /**
     * @param {Option} option
     */
    scrollTo(option) {
        const optionNode = option.ownerElement.node
        const boxNode = optionNode.parentNode
        const offset = Math.min(optionNode.offsetHeight / 5, 5)
        const optionTop = optionNode.offsetTop - offset
        const optionBottom = optionNode.offsetTop + optionNode.offsetHeight + offset
        const boxHeight = boxNode.clientHeight
        if(optionTop < boxNode.scrollTop) {
            boxNode.scrollTop = optionTop - boxHeight / 2
        }
        else if(optionBottom > boxNode.scrollTop + boxHeight) {
            boxNode.scrollTop = optionBottom - boxHeight / 2
        }
    }

    /**
     * Set up the list box
     */
    update() {
        super.activeDescendant = this.selectedOptions[0] || null
        this._anchor = this.multiselectable? this.activeDescendant : null
        if(this.name) {
            for(const option of this.options) {
                if(!option.name) {
                    option.name = this.name
                }
            }
        }
    }

    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        const anchor = this._anchor || activeDescendant
        const options = this.options
        const index1 = options.indexOf(anchor)
        const index2 = options.indexOf(activeDescendant)
        const range = options.slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
        for(const option of options) {
            if(range.includes(option)) {
                option._input.parentNode = option // fixme
                option.setAttr(Selected, true)
            }
            else option.selected = false
        }
        this.scrollTo(super.activeDescendant = activeDescendant)
    }

    /**
     * @returns {Role|ElementAssembler|*|null}
     */
    get activeDescendant() {
        return super.activeDescendant
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = children
        this.update()
    }

    /**
     * @returns {ElementAssembler[]}
     */
    get children() {
        return super.children
    }

    /**
     * @param {boolean} expanded
     */
    set expanded(expanded) {
        this.hidden = !expanded
    }

    /**
     * @returns {boolean}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
        if(hidden) {
            if(!this._transition || getComputedStyle(this.ownerElement.node).transitionDuration === '0s') {
                super.expanded = false
            }
        }
        else setTimeout(() => super.expanded = true, 10)
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
    }

    /**
     * @param {*} label {string|ElementAssembler|Role|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler || label instanceof Role) {
            this.prepend(this.labelledBy = label)
        }
        else super.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        const labelledBy = this.labelledBy
        return labelledBy.length?
            labelledBy[0].textContent :
            super.label
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
        this.setAttr(Multiselectable, multiselectable)
    }

    /**
     * @returns {boolean}
     */
    get multiselectable() {
        return this.getAttr(Multiselectable)
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        const box = this._box || (this._box = new Span({
            parentNode : this,
            onfocus : () => this.focus() // scrollable box can receive focus in Firefox
        }))
        box.children = options
        this.update()
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
        this.setAttr(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(Required)
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
        const option = this.find(Option, option => option.value == value)
        if(option) {
            this._anchor = null
            this.activeDescendant = option
        }
        else for(const option of this.options) {
            option.selected = false
        }
    }

    /**
     * @returns {string}
     */
    get value() {
        const selectedOptions = this.selectedOptions
        return selectedOptions.length? selectedOptions[0].value : ''
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {ListBox}
 */
export function listBox(init) {
    return new ListBox(init)
}
