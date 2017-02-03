import { Cell } from './cell'

export class ColumnHeader extends Cell {

    init(init) {
        this.node.scope = 'col'
        if(init) super.init(init)
    }

    static get role() {
        return ['columnheader', super.role]
    }

    static get classList() {
        return ['columnheader', super.classList]
    }
}

export function columnHeader(init) {
    return new ColumnHeader('th', init)
}
