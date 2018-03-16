import { Textbox } from './textbox'

/**
 * @summary A type of textbox intended for specifying search criteria.
 * @see https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
export class Searchbox extends Textbox {}

/**
 * @param {*} [init]
 * @returns {Searchbox}
 */
export function searchbox(...init) {
    return new Searchbox(...init)
}
