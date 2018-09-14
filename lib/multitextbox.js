// uimodule
import { TextArea } from 'htmlmodule/lib/TextArea'
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
