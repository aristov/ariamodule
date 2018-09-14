import { Landmark } from './landmark'

/**
 * @summary A region that contains mostly site-oriented content, rather than page-specific content.
 * @see https://www.w3.org/TR/wai-aria-1.1/#banner
 */
export class Banner extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Banner}
 */
export function banner(init) {
    return new Banner(init)
}
