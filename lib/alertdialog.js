import { Button } from './button'
import { Dialog } from './dialog'

const { assign } = Object

export class AlertDialog extends Dialog {
    /**
     * @param {*} init
     */
    init(init) {
        this.on('discard', () => this.remove())
        super.init(assign({ modal : true }, init))
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = [
            children,
            new Button({
                onclick : () => this.remove(),
                children : 'OK'
            })
        ]
    }

    /**
     * @returns {Array}
     */
    get children() {
        return super.children
    }
}

/**
 * @param {*} init
 * @returns {AlertDialog}
 */
export function alertDialog(...init) {
    return new AlertDialog(...init)
}
