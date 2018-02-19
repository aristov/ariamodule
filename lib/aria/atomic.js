import { BooleanAttrType } from './boolean'

/**
 * Indicates whether assistive technologies will present all,
 * or only parts of, the changed region based on the change
 * notifications defined by the aria-relevant attribute.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#aria-atomic
 */
export class Atomic extends BooleanAttrType {}
