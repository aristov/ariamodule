import { ApplicableAttrType } from './ApplicableAttrType'

let undefined

/**
 * @summary Indicates whether the element, or another grouping
 *  element it controls, is currently expanded or collapsed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
 */
export class Expanded extends ApplicableAttrType {}

Expanded.Transition = class extends Expanded {
    /**
     * @param {boolean|undefined} value
     */
    set value(value) {
        if(value === this.node.value) return
        if(value === undefined) {
            super.value = value
            return
        }
        const ownerElement = this.ownerElement
        const node = ownerElement && ownerElement.node
        if(node && this.parentNode && getComputedStyle(node).transitionDuration !== '0s') {
            const handler = event => {
                if(event.target === node) {
                    super.value = false
                    ownerElement.un('transitionend', handler)
                }
            }
            if(value) {
                this.node.value =  'false-true'
                setTimeout(() => super.value = true, 20)
            }
            else {
                ownerElement.on('transitionend', handler)
                this.node.value =  'true-false'
            }
        }
        else super.value = value
    }

    /**
     * @returns {boolean|undefined}
     */
    get value() {
        return super.value
    }
}
