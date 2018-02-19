import { ARIARange } from './range'
import { Orientation, ReadOnly } from './aria'

const { some } = Array.prototype
const { ELEMENT_NODE } = Node
const DEFAULT_VALUE_MAX = 100
const DEFAULT_VALUE_MIN = 0

/**
 * A user input where the user selects a value from within a given range.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#slider
 * https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
export class Slider extends ARIARange {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = 0
        this.setupObserver()
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        event.preventDefault()
        const { valueMin, valueMax } = this
        const node = this.parentNode.node
        const width = this.ownerElement.node.offsetWidth
        const parentWidth = node.clientWidth - width
        const x = event.pageX - getPageLeft(node) - width / 2
        this.valueNow = Math.round((valueMax - valueMin) * x / parentWidth) + valueMin
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const ownerDocument = this.node.ownerDocument
        ownerDocument.removeEventListener('mouseup', this.onMouseUp)
        ownerDocument.removeEventListener('mousemove', this.onMouseMove)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            event.preventDefault()
            switch(key) {
                case 'ArrowDown': case 'ArrowLeft': this.valueNow--; break
                case 'ArrowUp': case 'ArrowRight': this.valueNow++; break
            }
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        const ownerDocument = this.node.ownerDocument
        ownerDocument.addEventListener('mousemove', this.onMouseMove)
        ownerDocument.addEventListener('mouseup', this.onMouseUp)
    }

    /**
     * Setup the initializing mutation observer
     */
    setupObserver() {
        const element = this.ownerElement.node
        const observer = new MutationObserver(records => {
            for(let record of records) {
                const stop = some.call(record.addedNodes, node => {
                    if(node.nodeType === ELEMENT_NODE && node.contains(element)) {
                        this.updatePosition()
                        return true
                    }
                    else return false
                })
                if(stop) {
                    observer.disconnect()
                    break
                }
            }
        })
        observer.observe(this.node.ownerDocument, { childList : true, subtree : true })
    }

    /**
     * Update position of the slider
     */
    updatePosition() {
        const { valueMax, valueMin, valueNow } = this
        const parentWidth = this.parentNode.node.clientWidth
        const width = this.ownerElement.node.offsetWidth
        const step = (parentWidth - width) / (valueMax - valueMin)
        this.style.left = Math.round((valueNow - valueMin) * step) + 'px'
    }

    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(Orientation, orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(Orientation) || 'horizontal'
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {Number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {Number}
     */
    get valueMax() {
        const value = super.valueMax
        return isNaN(value)? DEFAULT_VALUE_MAX : value
    }

    /**
     * @param {Number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {Number}
     */
    get valueMin() {
        const value = super.valueMin
        return isNaN(value)? DEFAULT_VALUE_MIN : value
    }

    /**
     * @param {Number} valueNow
     */
    set valueNow(valueNow) {
        const nextSibling = this.getRole(this.ownerElement.nextElementSibling)
        const max = nextSibling? nextSibling.valueNow : this.valueMax
        const previousSibling = this.getRole(this.ownerElement.previousElementSibling)
        const min = previousSibling? previousSibling.valueNow : this.valueMin
        super.valueNow = Math.min(Math.max(valueNow, min), max)
        if(this.node.ownerDocument.contains(this.ownerElement.node)) {
            this.updatePosition()
        }
    }

    /**
     * @returns {Number}
     */
    get valueNow() {
        const { valueMin, valueMax } = this
        const valueNow = super.valueNow
        const value = isNaN(valueNow)?
            valueMin + Math.round((valueMax - valueMin) / 2) :
            valueNow
        return Math.min(Math.max(value, valueMin), valueMax)
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
 * @returns {Slider}
 */
export function slider(...init) {
    return new Slider(...init)
}

function getPageLeft(node) {
    let left = node.offsetLeft
    while(node = node.offsetParent) {
        left += node.offsetLeft
    }
    return left
}
