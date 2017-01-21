import { Cell } from './cell'

export class ColumnHeader extends Cell {
    constructor(object, init) {
        super(object, {
            role : 'columnheader',
            className : 'columnheader',
            scope : 'col'
        })
        if(init) this.init(init)
    }
}

export function columnheader(init) {
    return new ColumnHeader('th', init)
}
