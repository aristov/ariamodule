import { TokenAttrType } from './token'

/**
 * @summary Indicates the current "pressed" state of toggle buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
 */
export class Pressed extends TokenAttrType {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.onClick = this.onClick.bind(this)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        this.value = String(this.value === 'false')
    }

    /**
     * @returns {AttrAssembler}
     */
    remove() {
        this.ownerElement.un('click', this.onClick)
        return super.remove()
    }

    /**
     * @param {Button|null|*} ownerElement
     */
    set ownerElement(ownerElement) {
        if(super.ownerElement = ownerElement) {
            this.getInstance(ownerElement).on('click', this.onClick)
        }
    }

    /**
     * @returns {Button|null|*}
     */
    get ownerElement() {
        return super.ownerElement
    }
}
