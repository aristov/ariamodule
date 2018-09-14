// uimodule
import { TextArea } from 'htmlmodule/lib/TextArea'
import { TextBox } from './TextBox'

export class MultiTextBox extends TextBox {
    /**
     * @param {boolean} multiLine
     */
    set multiLine(multiLine) {}

    /**
     * @returns {boolean}
     */
    get multiLine() {
        return true
    }

    /**
     * @returns {TextArea}
     */
    static get inputAssembler() {
        return TextArea
    }
}
