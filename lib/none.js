import { RoleAttrAssembler } from './role'

/**
 * @summary An element whose implicit native role semantics will not be mapped to the accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#none
 */
export class None extends RoleAttrAssembler {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {None}
 */
export function none(init) {
    return new None(init)
}
