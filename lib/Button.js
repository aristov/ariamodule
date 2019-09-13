import { Role } from './Role'
import { Command } from './Command'
import { Dialog } from './Dialog'
import { Form } from './Form'
import { Menu } from './Menu'
import { Expanded } from './aria/Expanded'
import { Pressed } from './aria/Pressed'

/**
 * @summary An input that allows for user-triggered actions when clicked or pressed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#button
 */
export class Button extends Command {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @returns {Dialog|*|null}
     */
    get dialog() {
        return this.controls.filter(instance => instance instanceof Dialog)[0] || null
    }

    /**
     * @returns {Form|*|null}
     */
    get form() {
        return this.closest(Form)
    }

    /**
     * @returns {Menu|*|null}
     */
    get menu() {
        return this.controls.filter(instance => instance instanceof Menu)[0] || null
    }

    /**
     * @param {boolean|string|undefined} pressed
     */
    set pressed(pressed) {
        this.setAttr(Pressed, pressed)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get pressed() {
        return this.getAttr(Pressed)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Button as ARIAButton }

Role.Button = Button
