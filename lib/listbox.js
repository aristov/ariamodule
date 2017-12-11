import { Span } from 'htmlmodule'
import { Select } from './select'
import { Option } from './option'
import { ActiveDescendant, Multiselectable } from './aria'

const SELECT_ALL_KEY_RE = /^[aф]$/i

export class Listbox extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = 0
        super.init(init)
        this.on('focus', this.onFocus.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('select', this.onSelect.bind(this))
        this.on('check', this.onCheck.bind(this))
        this._box.on('focus', () => this.focus())
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const { key, shiftKey } = event
        const options = this.options.filter(({ hidden }) => !hidden)
        const selectedOptions = this.selectedOptions
        const direction = key === 'ArrowLeft' || key === 'ArrowUp'? -1 : 1
        const selectedOption = selectedOptions[direction < 0?
            0 :
            selectedOptions.length - 1]
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

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        if(!this.selectedOptions.length) {
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
        const chackableOption = this.find(Option, '[aria-checked]')
        if(!chackableOption) {
            const selectedOptions = this.selectedOptions
            this.value = selectedOptions.length?
                selectedOptions.map(({ value }) => value).join() :
                ''
        }
    }

    /**
     * @param {CustomEvent} event
     */
    onCheck(event) {
        const checkedOptions  = this.checkedOptions
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
        if(this.find(Option, '[aria-checked]')) {
            if(this.multiselectable){
                this.selectedOptions.forEach(option => {
                    option.checked = String(option.checked === 'false')
                })
            }
            else {
                const isChecked = this.checkedOption === this.selectedOption
                this.checkedOptions = isChecked? [] : this.selectedOptions
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
        const option = this.selectedOption.node
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
        super.children = this._box = new Span({
            className : 'box',
            children
        })
    }

    /**
     * @returns {Array}
     */
    get children() {
        return super.children
    }

    /**
     * @param {(Option)[]} options
     */
    set checkedOptions(options) {
        this.checkedOptions.forEach(option => {
            option.checked = 'false'
        })
        options.forEach(option => {
            option.checked = 'true'
        })
        this.emit('change')
    }

    /**
     * @returns {(Option)[]}
     */
    get checkedOptions() {
        return this.findAll(Option, '[aria-checked=true]')
    }

    /**
     * @returns {Option|null}
     */
    get checkedOption() {
        return this.checkedOptions[0] || null
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(Multiselectable, multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(Multiselectable)
    }

    /**
     * @returns {(Option)[]}
     */
    get options() {
        return this.findAll(Option)
    }

    /**
     * @returns {Option|null}
     */
    get selectedOption() {
        return this.selectedOptions[0] || null
    }

    /**
     * @returns {(RoleAttrAssembler|*)[]}
     */
    get selectedOptions() {
        return this.findAll(Option, '[aria-selected=true]')
    }

    /**
     * @returns {String}
     */
    get text() {
        const isCheckable = this.find(Option, '[aria-checked]')
        const options = isCheckable?
            this.checkedOptions :
            this.selectedOptions
        const handler = ({ textContent }) => textContent
        return options.length? options.map(handler).join() : ''
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

/**
 * @param {*} [init]
 * @returns {Listbox}
 */
export function listbox(...init) {
    return new Listbox(...init)
}
