import { IntegerAttrType } from './integer'

/**
 * @summary Defines the number of items in the current set of listitems or treeitems.
 *  Not required if all elements in the set are present in the DOM.
 * @see {@link https://www.w3.org/TR/wai-aria-1.1/#aria-setsize}
 */
export class SetSize extends IntegerAttrType {}
