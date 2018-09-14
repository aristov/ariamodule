import { ARIADocument } from './document'
import { PosInSet } from './aria/posinset'
import { SetSize } from './aria/setsize'

/**
 * @summary A section of a page that consists of a composition that forms
 *  an independent part of a document, page, or site.
 * @see https://www.w3.org/TR/wai-aria-1.1/#article
 */
export class Article extends ARIADocument {
    /**
     * @param {number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttr(PosInSet, posInSet)
    }

    /**
     * @returns {number}
     */
    get posInSet () {
        return this.getAttr(PosInSet)
    }

    /**
     * @param {number} setSize
     */
    set setSize(setSize) {
        this.setAttr(SetSize, setSize)
    }

    /**
     * @returns {number}
     */
    get setSize () {
        return this.getAttr(SetSize)
    }
}

/**
 * @param {{}} init
 * @returns {Article}
 */
export function article(init) {
    return new Article(init)
}
