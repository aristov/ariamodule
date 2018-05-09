import { Menu } from './menu'

/**
 * @summary A presentation of menu that usually remains visible
 *  and is usually presented horizontally.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menubar
 */
export class Menubar extends Menu {}

/**
 * @param {*} [init]
 * @returns {Menubar}
 */
export function menubar(init) {
    return new Menubar(init)
}
