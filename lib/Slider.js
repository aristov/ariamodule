import { Input } from 'htmlmodule/lib/Input'
import { Span } from 'htmlmodule/lib/Span'
import { Role } from './Role'
import { Range } from './Range'
import { Orientation } from './aria/Orientation'
import { ReadOnly } from './aria/ReadOnly'

const { ELEMENT_NODE } = Node
const DEFAULT_VALUE_MIN = 0
const DEFAULT_VALUE_MAX = 100

/**
 * @summary A user input where the user selects a value from within a given range.
 * @see https://www.w3.org/TR/wai-aria-1.1/#slider
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
export class Slider extends Range {
    /**
     * @param {{}} init
     */
    create(init) {
        const { Track, Thumb } = this.constructor
        super.create(init)
        if(init.hasOwnProperty('valueNow')) {
            const valueNow = init.valueNow
            const valueList = Array.isArray(valueNow)? valueNow : [valueNow]
            this.children = new Track(valueList.map(() => new Thumb))
        }
        else this.children = new Track(new Thumb)
        this._name = ''
        this._valueNow = null
    }

    /**
     * @param {{}} init
     */
    init(init) {
        super.init(init)
        if(init.hasOwnProperty('valueNow')) {
            this.setProperty('valueNow', init.valueNow)
        }
    }

    /**
     * @param {string} name
     * @returns {boolean}
     */
    setPropertyFilter(name) {
        return name !== 'valueNow' && super.setPropertyFilter(name)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
        this.thumbs.forEach(thumb => thumb.disabled = disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {*} labelledBy {*[]}
     */
    set labelledBy(labelledBy) {
        super.labelledBy = labelledBy
        this.thumbs.forEach(thumb => thumb.labelledBy = labelledBy)
    }

    /**
     * @returns {*[]}
     */
    get labelledBy() {
        return super.labelledBy
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._name = name
        this.thumbs.forEach(thumb => thumb.name = name)
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._name
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(Orientation, orientation)
        this.thumbs.forEach(thumb => thumb.orientation = orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(Orientation) || 'horizontal'
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, readOnly)
        this.thumbs.forEach(thumb => thumb.readOnly = readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @returns {array.Thumb|*}
     */
    get thumbs() {
        return this.findAll(this.constructor.Thumb)
    }

    /**
     * @param {number|array.number} valueNow
     */
    set valueNow(valueNow) {
        const valueList = Array.isArray(valueNow)?
            valueNow :
            [valueNow]
        this.thumbs.forEach((thumb, i) => thumb.valueNow = valueList[i])
    }

    /**
     * @returns {number|array.number}
     */
    get valueNow() {
        const thumbs = this.thumbs
        return thumbs.length === 1?
            thumbs[0].valueNow :
            thumbs.map(({ valueNow }) => valueNow)
    }

    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        this.thumbs.forEach(thumb => thumb.valueMin = valueMin)
        super.valueMin = valueMin
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        const value = super.valueMax
        return value === null? DEFAULT_VALUE_MAX : value
    }

    /**
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        this.thumbs.forEach(thumb => thumb.valueMax = valueMax)
        super.valueMax = valueMax
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        const value = super.valueMax
        return value === null? DEFAULT_VALUE_MAX : value
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {string}
     */
    static get role() {
        return this === Slider? '_' + super.role : super.role
    }
}

class Thumb extends Range {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.tabIndex = 0
        this._input = new Input({
            parentNode : this,
            type : 'hidden',
            value : init.hasOwnProperty('valueNow')?
                init.valueNow :
                this.valueNow
        })
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('mousedown', this.onMouseDown)
        this.on('keydown', this.onKeyDown)
        this.setupObserver()
        super.init(init)
    }

    /**
     * Setup the mutation observer
     */
    setupObserver() {
        const node = this.node
        const observer = new MutationObserver(records => {
            for(const record of records) {
                for(const addedNode of record.addedNodes) {
                    if(addedNode.nodeType === ELEMENT_NODE && addedNode.contains(node)) {
                        this.updatePosition()
                        observer.disconnect()
                        return
                    }
                }
            }
        })
        observer.observe(document, { childList : true, subtree : true })
    }

    /**
     * @param value
     */
    changeValue(value) {
        if(this.valueMin <= value && value <= this.valueMax) {
            this.valueNow = this._valueNow = value
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * Update position of the slider
     */
    updatePosition() {
        const { valueMax, valueMin, valueNow } = this
        if(this.orientation === 'vertical') {
            const parentHeight = this.parentNode.node.clientHeight
            const height = this.node.offsetHeight
            const step = (parentHeight - height) / (valueMax - valueMin)
            this.style.top = (valueMax - valueNow) * step + 'px'
        }
        else {
            const parentWidth = this.parentNode.node.clientWidth
            const width = this.node.offsetWidth
            const step = (parentWidth - width) / (valueMax - valueMin)
            this.style.left = (valueNow - valueMin) * step + 'px'
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.readOnly && !this.disabled) {
            const { ownerDocument } = this
            ownerDocument.on('mousemove', this.onMouseMove, this)
            ownerDocument.on('mouseup', this.onMouseUp, this)
            this._valueNow = this.valueNow
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        event.preventDefault()
        const { valueMin, valueMax } = this
        const node = this.parentNode.node
        let valueNow
        if(this.orientation === 'vertical') {
            const height = this.node.offsetHeight
            const parentHeight = node.clientHeight - height
            const y = event.pageY - getPageTopOf(node) - height / 2
            valueNow = valueMax - Math.round((valueMax - valueMin) * y / parentHeight)
        }
        else {
            const width = this.node.offsetWidth
            const parentWidth = node.clientWidth - width
            const x = event.pageX - getPageLeftOf(node) - width / 2
            valueNow = valueMin + Math.round((valueMax - valueMin) * x / parentWidth)
        }
        this.valueNow = Math.min(Math.max(valueMin, valueNow), valueMax)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const { ownerDocument } = this
        const valueNow = this.valueNow
        ownerDocument.un('mouseup', this.onMouseUp, this)
        ownerDocument.un('mousemove', this.onMouseMove, this)
        if(this._valueNow !== valueNow) {
            this.emit('change', { bubbles : true })
            this._valueNow = valueNow
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        switch(event.key) {
            case 'ArrowUp': this.onArrowUpKeyDown(event); break
            case 'ArrowDown': this.onArrowDownKeyDown(event); break
            case 'ArrowLeft': this.onArrowLeftKeyDown(event); break
            case 'ArrowRight': this.onArrowRightKeyDown(event); break
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.changeValue(this.valueNow + 1)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.changeValue(this.valueNow - 1)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.changeValue(this.valueNow - 1)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.changeValue(this.valueNow + 1)
        }
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
        this._input.parentNode = disabled? null : this
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._input.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._input.name
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(Orientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(Orientation) || 'horizontal'
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
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        const value = super.valueMax
        return value === null? DEFAULT_VALUE_MAX : value
    }

    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        const value = super.valueMin
        return value === null? DEFAULT_VALUE_MIN : value
    }

    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        super.valueNow = this._input.value = valueNow
        if(this.ownerDocument.contains(this.node)) {
            this.updatePosition()
        }
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        const { valueMin, valueMax } = this
        const valueNow = super.valueNow
        if(valueNow === null) {
            return valueMin + (valueMax - valueMin) / 2
        }
        return Math.min(Math.max(valueMin, valueNow), valueMax)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {string}
     */
    static get role() {
        return this === Thumb? 'Slider' : super.role
    }
}

class Track extends Span {}

/**
 * @param {Element|HTMLElement} node
 * @returns {number}
 */
function getPageLeftOf(node) {
    let left = node.offsetLeft
    while(node = node.offsetParent) {
        left += node.offsetLeft
    }
    return left
}

/**
 * @param {Element|HTMLElement} node
 * @returns {number}
 */
function getPageTopOf(node) {
    let left = node.offsetTop
    while(node = node.offsetParent) {
        left += node.offsetTop
    }
    return left
}

Slider.Thumb = Thumb
Slider.Track = Track
Role.Slider = Slider
