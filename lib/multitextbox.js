// uimodule
import { TextArea } from 'htmlmodule/lib/textarea'
import { Textbox } from './textbox'

export class MultiTextbox extends Textbox {
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
