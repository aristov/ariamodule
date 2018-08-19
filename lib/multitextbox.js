// uimodule
import { TextArea } from 'htmlmodule/lib/textarea'
import { TextBox } from './textbox'

export class MultiTextBox extends TextBox {
    /**
     * @param {boolean} multiline
     */
    set multiline(multiline) {}

    /**
     * @returns {boolean}
     */
    get multiline() {
        return true
    }

    /**
     * @returns {TextArea}
     */
    static get inputAssembler() {
        return TextArea
    }
}
