import { Role } from './Role'
import { RoleTextBox } from './RoleTextBox'

/**
 * @summary A type of textbox intended for specifying search criteria.
 * @see https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
export class RoleSearchBox extends RoleTextBox {
}

export { RoleSearchBox as SearchBox, RoleSearchBox as ARIASearchBox }

Role.SearchBox = RoleSearchBox
