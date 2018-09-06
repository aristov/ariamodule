import { Div } from 'htmlmodule'
import { ARIARange } from './range'

const { some } = Array.prototype
const { ELEMENT_NODE } = Node

/**
 * @summary An element that displays the progress status for tasks that take a long time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#progressbar
 */
export class ProgressBar extends ARIARange {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this.children = this._bar = new Div
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        this.setupObserver()
        super.init(init)
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
        observer.observe(this.ownerDocument.node, { childList : true, subtree : true })
    }

    /**
     * Update the progress bar position
     */
    updatePosition() {
        const { valueNow, valueMin, valueMax } = this
        const { clientWidth } = this.ownerElement.node
        this._bar.style.width = valueNow * clientWidth / (valueMax - valueMin) + 'px'
    }

    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        super.valueNow = valueNow
        this.updatePosition()
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        return super.valueNow
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class} Div
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {ProgressBar}
 */
export function progressbar(init) {
    return new ProgressBar(init)
}
