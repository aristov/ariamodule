import { TristateAttrType } from './tristate'

/**
 * @summary Indicates the current "pressed" state of toggle buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
 */
export class Pressed extends TristateAttrType {
    /**
     * fixme https://github.com/w3c/aria/issues/773
     * @returns {undefined}
     */
    static get defaultValue() {
        return undefined
    }
}
