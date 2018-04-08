// uimodule
import { TextArea } from 'htmlmodule'
import { Textbox } from './textbox'

export class MultiTextbox extends Textbox {
    /**
     * @param {Boolean} multiline
     */
    set multiline(multiline) {}

    /**
     * @returns {Boolean}
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
