import { Span } from 'htmlmodule'
import { Select } from './select'
import { Option } from './option'
import { ActiveDescendant, Multiselectable } from './aria'

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
        if(!shiftKey) {
            if(nextIndex === options.length) nextIndex = 0
            if(nextIndex < 0) nextIndex = options.length - 1
        }
        if(this.multiselectable) {
            if(!shiftKey) this.options.forEach(option => option.selected = 'false')
            const option = options[nextIndex]
            if(option) {
                option.selected = 'true'
                this.scrollToSelectedOption()
            }
        }
        else {
            this.options.forEach(option => option.selected = 'false')
            options[nextIndex].selected = 'true'
            this.scrollToSelectedOption()
        }
    }

    onFocus() {
        if(!this.selectedOptions.length) {
            this.options[0].selected = 'true'
        }
    }

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
        if(key === 'a' && event.metaKey) {
            event.preventDefault()
            this.options.forEach(option => option.selected = 'true')
        }
    }

    onKeyUp(event) {
        if(event.key === ' ') this.onSpaceKeyUp(event)
    }

    onSelect(event) {
        const chackableOption = this.find(Option, '[aria-checked]')
        if(!chackableOption) {
            const selectedOptions = this.selectedOptions
            this.value = selectedOptions.length?
                selectedOptions.map(({ value }) => value).join() :
                ''
        }
    }

    onCheck(event) {
        const checkedOptions  = this.checkedOptions
        this.value = checkedOptions.length?
            checkedOptions.map(({ value }) => value).join() :
            ''
    }

    onSpaceKeyDown(event) {
        if(!event.repeat) {
            this.selectedOptions.forEach(option => {
                option.classList.add('active')
            })
        }
    }

    onSpaceKeyUp() {
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
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }

    set children(children) {
        super.children = this._box = new Span({
            className : 'box',
            children
        })
    }

    get children() {
        return super.children
    }

    set checkedOptions(options) {
        this.checkedOptions.forEach(option => {
            option.checked = 'false'
        })
        options.forEach(option => {
            option.checked = 'true'
        })
        this.emit('change')
    }

    get checkedOptions() {
        return this.findAll(Option, '[aria-checked=true]')
    }

    get checkedOption() {
        return this.checkedOptions[0]
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

    get options() {
        return this.findAll(Option)
    }

    get selectedOption() {
        return this.selectedOptions[0]
    }

    get selectedOptions() {
        return this.findAll(Option, '[aria-selected=true]')
    }

    get text() {
        const options = this.findAll(Option, '[aria-selected=true]')
        return options.length?
            options.map(({ textContent }) => {
                return textContent
            }).join() : ''
    }

    set value(value) {
        if(value) this.dataset.value = value
        else this.removeAttribute('data-value')
    }

    get value() {
        return this.dataset.value
    }

    static get abstract() {
        return false
    }
}

export function listbox(...init) {
    return new Listbox(...init)
}
