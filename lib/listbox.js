import { Span } from 'htmlmodule'
import { Select } from './select'
import { Option } from './option'
import { ActiveDescendant, Multiselectable } from './aria'

export class Listbox extends Select {
    init(init) {
        this.tabIndex = 0
        super.init(init)
        this.on('focus', this.onFocus.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this._box.on('focus', () => this.focus())
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

    get options() {
        return this.findAll(Option)
    }

    get selectedOption() {
        return this.selectedOptions[0]
    }

    get selectedOptions() {
        return this.findAll(Option, '[aria-selected=true]')
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

    set value(value) {
        this.dataset.value = value
    }

    get value() {
        return this.dataset.value
    }

    get text() {
        const option = this.find(Option, '[aria-selected=true]')
        return option? option.textContent : ''
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
            this.options.forEach(option => option.selected = 'false')
            options[nextIndex].selected = 'true'
            this.scrollToSelected()
        }
        else {
            if(nextIndex === options.length) nextIndex = 0
            if(nextIndex < 0) nextIndex = options.length - 1
            if(!shiftKey) this.options.forEach(option => option.selected = 'false')
            options[nextIndex].selected = 'true'
            this.scrollToSelected()
        }
    }

    scrollToSelected() {
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

    onSpaceKeyDown({ repeat }) {
        if(!repeat) {
            this.selectedOptions.forEach(option => {
                option.classList.add('active')
            })
        }
    }

    onKeyUp(event) {
        if(event.key === 'Space') this.onSpaceKeyUp(event)
    }

    onSpaceKeyUp() {
        if(this.find(Option, '[aria-checked]')) {
            this.checkedOptions = this.checkedOption === this.selectedOption?
                [] :
                this.selectedOptions
        }
        this.selectedOptions.forEach(option => {
            option.classList.remove('active')
        })
    }

    onFocus() {
        if(!this.selectedOptions.length) {
            this.options[0].selected = 'true'
        }
    }

    static get abstract() {
        return false
    }
}

export function listbox(...init) {
    return new Listbox(...init)
}
