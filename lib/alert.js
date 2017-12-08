import { Section } from './section'

const LOCAL_NAME = 'div'

export class Alert extends Section {
    /**
     * Show the alert with specified message
     * @param {String} message
     */
    show(message) {
        this.textContent = message
        this.hidden = false
    }

    /**
     * Hide and clear the alert
     */
    hide() {
        this.textContent = ''
        this.hidden = true
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {Alert}
 */
export function alert(...init) {
    return new Alert(...init)
}
