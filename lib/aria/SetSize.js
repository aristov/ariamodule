import { IntegerAttrType } from './IntegerAttrType'

/**
 * @summary Defines the number of items in the current set of listitems or treeitems.
 *  Not required if all elements in the set are present in the DOM.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-setsize
 */
export class SetSize extends IntegerAttrType {}
