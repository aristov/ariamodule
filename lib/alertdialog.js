import { Button } from './button'
import { ModalDialog } from './modaldialog'

export class AlertDialog extends ModalDialog {
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
