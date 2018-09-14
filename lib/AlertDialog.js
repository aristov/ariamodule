import { Dialog } from './Dialog'

/**
 * @summary A type of dialog that contains an alert message,
 *  where initial focus goes to an element within the dialog.
 * @see https://www.w3.org/TR/wai-aria-1.1/#alertdialog
 */
export class AlertDialog extends Dialog {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.modal = true
    }
}

/**
 * @param {{}} init
 * @returns {AlertDialog}
 */
export function alertDialog(init) {
    return new AlertDialog(init)
}
