import { ARIAPosInSet } from './ARIAPosInSet'
import { ARIASetSize } from './ARIASetSize'
import { Role } from './Role'
import { RoleDocument } from './RoleDocument'

/**
 * A section of a page that consists of a composition that forms
 *  an independent part of a document, page, or site.
 * @see https://www.w3.org/TR/wai-aria-1.1/#article
 */
export class RoleArticle extends RoleDocument {
    /**
     * @returns {RoleFeed|*|null}
     */
    get feed() {
        return this.closest(Role.Feed)
    }

    /**
     * @param {number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttr(ARIAPosInSet, posInSet)
    }

    /**
     * @returns {number}
     */
    get posInSet () {
        return this.getAttr(ARIAPosInSet)
    }

    /**
     * @param {number} setSize
     */
    set setSize(setSize) {
        this.setAttr(ARIASetSize, setSize)
    }

    /**
     * @returns {number}
     */
    get setSize () {
        return this.getAttr(ARIASetSize)
    }
}

export { RoleArticle as Article }

Role.Article = RoleArticle
