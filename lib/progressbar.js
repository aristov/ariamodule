import { ARIARange } from './range'

/**
 * @summary An element that displays the progress status for tasks that take a long time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#progressbar
 */
export class Progressbar extends ARIARange {}

/**
 * @param {*} [init]
 * @returns {Progressbar}
 */
export function progressbar(init) {
    return new Progressbar(init)
}
