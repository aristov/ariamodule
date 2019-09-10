import { Role } from './Role'
import { TextBox } from './TextBox'

/**
 * @summary A type of textbox intended for specifying search criteria.
 * @see https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
export class SearchBox extends TextBox {
}
export const ARIASearchBox = Role.SearchBox = SearchBox
