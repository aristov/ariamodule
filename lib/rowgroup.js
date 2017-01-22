import { NodeInit } from 'htmlmodule'
import { Structure } from './structure'

export class RowGroup extends Structure {
    constructor(object, init = {}) {
        super(init.tagName || object, {
            role : 'rowgroup',
            className : 'rowgroup'
        })
        if('tagName' in init) delete init.tagName
        if(init) this.init(init)
    }
}

export function rowgroup(init) {
    return new RowGroup('tbody', NodeInit(init))
}

