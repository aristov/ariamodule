import { NodeInit } from 'htmlmodule'
import { Structure } from './structure'

const map = Array.prototype.map

export class RowGroup extends Structure {
    constructor(object, init = {}) {
        super(init.tagName || object, {
            role : 'rowgroup',
            className : 'rowgroup'
        })
        if('tagName' in init) delete init.tagName
        if(init) this.init(init)
    }
    get rows() {
        return map.call(this.node.rows, ({ assembler }) => assembler)
    }
}

export function rowgroup(init) {
    return new RowGroup('tbody', NodeInit(init))
}

