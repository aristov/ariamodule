import { RoleType } from './RoleType.js'

/**
 * An element whose implicit native role semantics will not be mapped to the accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#none
 */
export class RoleNone extends RoleType
{
}

RoleNone.abstract = false
