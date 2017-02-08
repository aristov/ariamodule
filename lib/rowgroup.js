import { Structure } from './structure'

const map = Array.prototype.map

export class RowGroup extends Structure {

    get rows() {
        return map.call(this.node.rows, ({ assembler }) => assembler)
    }

    static get abstract() {
        return false
    }
}

export function rowGroup(init = {}) {
    let tagName = init.tagName || 'tbody'
    if('tagName' in init) delete init.tagName
    return new RowGroup(tagName, init)
}
