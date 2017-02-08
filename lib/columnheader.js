import { Cell } from './cell'

export class ColumnHeader extends Cell {

    init(init) {
        this.node.scope = 'col'
        if(init) super.init(init)
    }
}

export function columnHeader(init) {
    return new ColumnHeader('th', init)
}
