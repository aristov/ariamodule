import { ARIAAttrTypeBoolean } from './ARIAAttrTypeBoolean'

/**
 * Indicates an element is being modified and that assistive technologies MAY want
 *  to wait until the modifications are complete before exposing them to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-busy
 */
export class ARIABusy extends ARIAAttrTypeBoolean {
}

/**
 * @alias ARIABusy
 */
export { ARIABusy as Busy }
