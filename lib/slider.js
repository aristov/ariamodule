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
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    onKeyDown(event) {
        if(event.key.startsWith('Arrow')) {
            event.preventDefault()
            const valueNow = this.valueNow
            if(['ArrowDown', 'ArrowLeft'].includes(event.key)) {
                if(valueNow > this.valueMin) {
                    this.valueNow = valueNow - 1
                }
            }
            else if(['ArrowUp', 'ArrowRight'].includes(event.key)) {
                if(valueNow < this.valueMax) {
                    this.valueNow = valueNow + 1
                }
            }
        }
    }

    setupObserver() {
        const element = this.ownerElement.node
        const observer = new MutationObserver(records => {
            for(let { addedNodes } of records) {
                const stop = some.call(addedNodes, node => {
                    if(node.nodeType === ELEMENT_NODE && node.contains(element)) {
                        this.updatePosition()
                        return false
                    }
                    else return true
                })
                if(stop) {
                    observer.disconnect()
                    break
                }
            }
        })
        observer.observe(this.node.ownerDocument, { childList : true, subtree : true })
    }

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
        super.valueNow = valueNow
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
            Math.floor((valueMax - valueMin) / 2) :
            valueNow
        return Math.min(value, valueMax)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
