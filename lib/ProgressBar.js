import { Role } from './Role'
import { Range } from './Range'

/**
 * @summary An element that displays the progress status for tasks that take a long time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#progressbar
 */
export class ProgressBar extends Range {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIAProgressBar = Role.ProgressBar = ProgressBar
