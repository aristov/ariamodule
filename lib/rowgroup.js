import { Structure } from './structure'

export class RowGroup extends Structure {
    constructor(object, init) {
        super(object, {
            role : 'rowgroup',
            className : 'rowgroup'
        })
        if(init) this.init(init)
    }
}

export function rowgroup(init) {
    return new RowGroup('tbody', init)
}

