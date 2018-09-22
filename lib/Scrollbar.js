import { Div } from 'htmlmodule/lib/Div'
import { ARIARange } from './ARIARange'

/**
 * @summary A graphical object that controls the scrolling of content within a viewing area,
 *  regardless of whether the content is fully displayed within the viewing area.
 * @see https://www.w3.org/TR/wai-aria-1.1/#scrollbar
 */
export class Scrollbar extends ARIARange {
    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Div
    }
}
