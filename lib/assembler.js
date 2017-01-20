import { NodeInit, HTMLDOMAssembler } from 'htmlmodule'

const { prototype : { reduce } } = Array
const ARIA_PREFIX = 'aria-'
const ARIA_PREFIX_LENGTH = ARIA_PREFIX.length

export class ARIADOMAssembler extends HTMLDOMAssembler {
    constructor(object, init) {
        super()
        if(typeof object === 'string') this.assemble(object, init)
        else if(object instanceof Node) {
            this.node = object
            if(init) this.init(init)
        }
        if(this.node) this.node.assembler = this
    }

    set role(role) {
        this.node.setAttribute('role', role)
    }

    get role() {
        return this.node.getAttribute('role') || ''
    }

    set aria(aria) {
        const node = this.node
        for(let name in aria) {
            const value = aria[name]
            if(typeof value === 'string') {
                node.setAttribute(ARIA_PREFIX + name, value)
            }
        }
    }

    get aria() {
        return reduce.call(this.node.attributes, (res, { name, value }) => {
            if(name.startsWith(ARIA_PREFIX)) {
                res[name.slice(ARIA_PREFIX_LENGTH)] = value
            }
            return res
        }, {})
    }

    init(init) {
        super.init(NodeInit(init))
    }
}
