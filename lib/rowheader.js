import { Cell } from './cell'

export class RowHeader extends Cell {
    constructor(object, init) {
        super(object, {
            role : 'rowheader',
            className : 'rowheader',
            scope : 'row'
        })
        if(init) this.init(init)
    }
}

export function rowheader(init) {
    return new RowHeader('th', init)
}
