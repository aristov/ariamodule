import { TokenAttrType } from './token'

/**
 * @summary Value representing true or false, with an intermediate "mixed" value.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_tristate
 */
export class TristateAttrType extends TokenAttrType {}

/**
 * @summary Value representing true, false, or not applicable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false-undefined
 */
export class ApplicableAttrType extends TokenAttrType {}
