import { Cell } from './cell'

export class RowHeader extends Cell {

    init(init) {
        this.node.scope = 'row'
        if(init) super.init(init)
    }

    static get role() {
        return ['rowheader', super.role]
    }

    static get classList() {
        return ['rowheader', super.classList]
    }
}

export function rowheader(init) {
    return new RowHeader('th', init)
}

export function rowHeader(init) {
    return new RowHeader('th', init)
}
