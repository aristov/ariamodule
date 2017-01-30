import { Structure } from './structure'

const map = Array.prototype.map

export class RowGroup extends Structure {
    init(init) {
        super.init({
            role : 'rowgroup',
            className : 'rowgroup'
        })
        if(init) super.init(init)
    }
    get rows() {
        return map.call(this.node.rows, ({ assembler }) => assembler)
    }
}

export function rowGroup(init = {}) {
    let tagName = init.tagName || 'tbody'
    if('tagName' in init) delete init.tagName
    return new RowGroup(tagName, init)
}
