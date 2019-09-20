import { Role } from './Role'
import { RoleRange } from './RoleRange'

/**
 * An element that displays the progress status for tasks that take a long time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#progressbar
 */
export class RoleProgressBar extends RoleRange {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleProgressBar as ProgressBar }

Role.ProgressBar = RoleProgressBar
