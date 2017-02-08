import { Cell } from './cell'

export class RowHeader extends Cell {

    init(init) {
        this.node.scope = 'row'
        if(init) super.init(init)
    }
}

export function rowHeader(init) {
    return new RowHeader('th', init)
}
