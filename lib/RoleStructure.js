import { Role } from './Role'
import { RoleRoleType } from './RoleRoleType'

/**
 * @summary A document structural element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#structure
 * @abstract
 */
export class RoleStructure extends RoleRoleType {
}

export { RoleStructure as Structure, RoleStructure as ARIAStructure }

Role.Structure = RoleStructure
