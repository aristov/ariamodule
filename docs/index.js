import { grid, rowgroup, row, gridcell } from '../lib/index'
import { thead, tr, th } from 'htmlmodule'

const rows = Array.from(new Array(18))
const cells = Array.from(new Array(26))

const testgrid = grid({
    multiselectable : true,
    children : [
        thead(tr([
            th(''),
            cells.map((c, i) => th('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i]))
        ])),
        rowgroup(rows.map((r, j) =>
            row({
                children : [
                    th(String(j)),
                    cells.map((c, i) => gridcell({
                        disabled : i === 5 && j === 5,
                        selected : false,
                        style : { width : 95 / cells.length + '%' },
                        children : ''
                    }))
                ]
            })))
    ]
})

document.body.appendChild(testgrid.node)
