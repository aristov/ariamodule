import { Role } from './Role'
import { Landmark } from './Landmark'

/**
 * @summary The main content of a document.
 * @see https://www.w3.org/TR/wai-aria-1.1/#main
 */
export class Main extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.Main = Main
