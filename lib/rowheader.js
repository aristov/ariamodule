import { Cell } from './cell'

export class RowHeader extends Cell {
    init(init) {
        super.init({
            role : 'rowheader',
            className : 'rowheader',
            scope : 'row'
        })
        if(init) super.init(init)
    }
}

export function rowheader(init) {
    return new RowHeader('th', init)
}

export function rowHeader(init) {
    return new RowHeader('th', init)
}
