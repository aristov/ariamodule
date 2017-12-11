import { Article as HTMLArticle } from 'htmlmodule'
import { ARIADocument } from './document'
import { PosInSet, SetSize } from './aria'

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

    /**
     * @returns {String}
     */
    static get role() {
        return ROLE_TYPE + ' ' + super.role
    }
}

/**
 * @param {...*} [init]
 * @returns {Article}
 */
export function article(...init) {
    return new Article(...init)
}

/**
 * @type {String}
 */
const ROLE_TYPE = article.name
