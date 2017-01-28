import { Cell } from './cell'

export class ColumnHeader extends Cell {
    init(init) {
        super.init({
            role : 'columnheader',
            className : 'columnheader',
            scope : 'col'
        })
        if(init) super.init(init)
    }
}

export function columnheader(init) {
    return new ColumnHeader('th', init)
}

export function columnHeader(init) {
    return new ColumnHeader('th', init)
}
