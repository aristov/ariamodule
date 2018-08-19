import { ARIARange } from './range'
import { Orientation } from './aria/orientation'
import { ReadOnly } from './aria/readonly'

const { some } = Array.prototype
const { ELEMENT_NODE } = Node
const DEFAULT_VALUE_MAX = 100
const DEFAULT_VALUE_MIN = 0

/**
 * @param {Element|HTMLElement} element
 * @returns {number}
 */
function getPageLeftOf(element) {
    let left = element.offsetLeft
    while(element = element.offsetParent) {
        left += element.offsetLeft
    }
    return left
}

/**
 * @summary A user input where the user selects a value from within a given range.
 * @see https://www.w3.org/TR/wai-aria-1.1/#slider
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#slider
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
        const x = event.pageX - getPageLeftOf(node) - width / 2
        this.valueNow = Math.round((valueMax - valueMin) * x / parentWidth) + valueMin
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        document.removeEventListener('mouseup', this.onMouseUp)
        document.removeEventListener('mousemove', this.onMouseMove)
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
        document.addEventListener('mousemove', this.onMouseMove)
        document.addEventListener('mouseup', this.onMouseUp)
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
        observer.observe(document, { childList : true, subtree : true })
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
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttribute(Orientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttribute(Orientation) || 'horizontal'
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
        super.valueNow = Math.min(Math.max(valueNow, min), max)
        if(document.contains(this.ownerElement.node)) {
            this.updatePosition()
        }
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        const { valueMin, valueMax } = this
        const valueNow = super.valueNow
        const value = valueNow === null?
            valueMin + Math.round((valueMax - valueMin) / 2) :
            valueNow
        return Math.min(Math.max(value, valueMin), valueMax)
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
 * @returns {Slider}
 */
export function slider(init) {
    return new Slider(init)
}
