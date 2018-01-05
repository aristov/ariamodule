import { Article as HTMLArticle } from 'htmlmodule'
import { ARIADocument } from './document'
import { PosInSet, SetSize } from './aria'

/**
 * A section of a page that consists of a composition that forms
 * an independent part of a document, page, or site.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#article
 */
export class Article extends ARIADocument {
    /**
     * @param {Number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(PosInSet, posInSet)
    }

    /**
     * @returns {Number}
     */
    get posInSet () {
        return this.getAttribute(PosInSet)
    }

    /**
     * @param {Number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(SetSize, setSize)
    }

    /**
     * @returns {Number}
     */
    get setSize () {
        return this.getAttribute(SetSize)
    }

    /**
     * @returns {Function} Article
     */
    static get elementAssembler() {
        return HTMLArticle
    }
}

/**
 * @param {...*} [init]
 * @returns {Article}
 */
export function article(...init) {
    return new Article(...init)
}
