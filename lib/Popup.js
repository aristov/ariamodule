import { Div } from 'htmlmodule/lib/Div'

export class Popup extends Div {
    /**
     * @param {TransitionEvent} event
     */
    onTransitionEnd(event) {
        if(event.target === this.node) {
            if(this.getAttr('hidden') === 'to') {
                super.hidden = true
            }
            this.un('transitionend', this.onTransitionEnd)
        }
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        if(this.parentNode && getComputedStyle(this.node).transitionDuration !== '0s') {
            if(hidden) {
                this.on('transitionend', this.onTransitionEnd)
                this.setAttr('hidden', 'to')
            }
            else {
                this.setAttr('hidden', 'from')
                setTimeout(() => super.hidden = false, 20)
            }
        }
        else super.hidden = hidden
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
    }
}
