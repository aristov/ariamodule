import { Span } from 'htmlmodule/lib/Span'
import { Role } from './Role'
import { Range } from './Range'
import { Orientation } from './aria/Orientation'
import { ReadOnly } from './aria/ReadOnly'

const { some } = Array.prototype
const { ELEMENT_NODE } = Node
const DEFAULT_VALUE_MAX = 100
const DEFAULT_VALUE_MIN = 0

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
        super.create(init)
        this.children = this._bar = new Bar
    }

    /**
     * @param {{}} init
     */
    init(init) {
        if(init.hasOwnProperty('valueNow')) {
            const valueNow = init.valueNow
            const valueList = Array.isArray(valueNow)? valueNow : [valueNow]
            this._bar.append(valueList.map(valueNow => new Thumb))
            super.init(init)
            this.setProperty('valueNow', valueNow)
        }
        else {
            this._bar.append(new Thumb)
            super.init(init)
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
     * @param {*} labelledBy {*[]}
     */
    set labelledBy(labelledBy) {
        super.labelledBy = labelledBy
        this.findAll(Thumb).forEach(thumb => thumb.labelledBy = labelledBy)
    }

    /**
     * @returns {*[]}
     */
    get labelledBy() {
        return super.labelledBy
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(Orientation, orientation)
        this.findAll(Thumb).forEach(thumb => thumb.orientation = orientation)
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
        this.findAll(Thumb).forEach(thumb => thumb.readOnly = readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
        this.findAll(Thumb).forEach(thumb => thumb.disabled = disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {number|array} valueNow
     */
    set valueNow(valueNow) {
        const thumbs = this.findAll(Thumb)
        const valueList = Array.isArray(valueNow)? valueNow : [valueNow]
        thumbs.forEach((thumb, i) => thumb.valueNow = valueList[i])
    }

    /**
     * @returns {number|array}
     */
    get valueNow() {
        const thumbs = this.findAll(Thumb)
        return thumbs.length === 1?
            thumbs[0].valueNow :
            thumbs.map(({ valueNow }) => valueNow)
    }

    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        this.findAll(Thumb).forEach(thumb => thumb.valueMin = valueMin)
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
        this.findAll(Thumb).forEach(thumb => thumb.valueMax = valueMax)
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

    /**
     * @returns {string}
     */
    static get classToken() {
        return this.name
    }

    /**
     * @returns {array}
     */
    static get classList() {
        const list = []
        let object = this
        do if(object.abstract === false) {
            const item = object.classToken
            list.includes(item) || list.push(item)
        }
        while((object = Object.getPrototypeOf(object)) && 'classToken' in object)
        return list
    }
}

class Bar extends Span {}

class Thumb extends Range {
    /**
     * @param {{}} init
     */
    init(init) {
        this.on('mousedown', this.onMouseDown)
        this.on('keydown', this.onKeyDown)
        this.tabIndex = 0
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
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.readOnly && !this.disabled) {
            const { ownerDocument } = this
            ownerDocument.on('mousemove', this.onMouseMove, this)
            ownerDocument.on('mouseup', this.onMouseUp, this)
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        event.preventDefault()
        const { valueMin, valueMax } = this
        const node = this.parentNode.node
        if(this.orientation === 'vertical') {
            const height = this.node.offsetHeight
            const parentHeight = node.clientHeight - height
            const y = event.pageY - getPageTopOf(node) - height / 2
            this.valueNow = valueMax - Math.round((valueMax - valueMin) * y / parentHeight)
        }
        else {
            const width = this.node.offsetWidth
            const parentWidth = node.clientWidth - width
            const x = event.pageX - getPageLeftOf(node) - width / 2
            this.valueNow = valueMin + Math.round((valueMax - valueMin) * x / parentWidth)
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const { ownerDocument } = this
        ownerDocument.un('mouseup', this.onMouseUp, this)
        ownerDocument.un('mousemove', this.onMouseMove, this)
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
            this.valueNow++
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.valueNow--
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.valueNow--
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        if(!this.readOnly) {
            event.preventDefault()
            this.valueNow++
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
        const nextSibling = this.getRoleOf(this.ownerElement.nextElementSibling)
        const max = nextSibling? nextSibling.valueNow : this.valueMax
        const previousSibling = this.getRoleOf(this.ownerElement.previousElementSibling)
        const min = previousSibling? previousSibling.valueNow : this.valueMin
        super.valueNow = Math.min(Math.max(min, valueNow), max)
        if(document.contains(this.node)) {
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

    /**
     * @returns {string}
     */
    static get classToken() {
        return this.name
    }

    /**
     * @returns {array}
     */
    static get classList() {
        const list = []
        let object = this
        do if(object.abstract === false) {
            const item = object.classToken
            list.includes(item) || list.push(item)
        }
        while((object = Object.getPrototypeOf(object)) && 'classToken' in object)
        return list
    }
}

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
Role.Slider = Slider
