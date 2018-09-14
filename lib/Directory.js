import { List } from './List'

/**
 * @summary A list of references to members of a group, such as a static table of contents.
 * @see https://www.w3.org/TR/wai-aria-1.1/#directory
 */
export class Directory extends List {}

/**
 * @param {{}} init
 * @returns {Directory}
 */
export function directory(init) {
    return new Directory(init)
}
