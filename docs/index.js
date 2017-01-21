import { grid, rowgroup, row, gridcell } from '../lib/index'
import { thead, tr, th } from 'htmlmodule'

const rows = Array.from(new Array(24))
const cells = Array.from(new Array(10))

const testgrid = grid({
    multiselectable : true,
    children : [
        thead(tr(cells.map((c, i) => th('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i])))),
        rowgroup(rows.map((r, j) =>
            row({
                children : cells.map((c, i) =>
                    gridcell({
                        disabled : i === 5 && j === 5,
                        selected : false,
                        children : ''
                    }))
            })))
    ]
})

document.body.appendChild(testgrid.node)
