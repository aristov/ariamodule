import { grid, rowgroup, row, gridcell } from '../lib/index'
import { tbody } from 'htmlmodule'

const rows = Array.from(new Array(12))
const cells = Array.from(new Array(10))

const testgrid = grid({
    children : rowgroup(rows.map((r, j) =>
        row({
            multiselectable : true,
            children : cells.map((c, i) =>
                gridcell({
                    // disabled : i === 5 && j === 5,
                    // readOnly : false,
                    selected : false,
                    children : ''
                }))
        }))
    )
})

document.body.appendChild(testgrid.node)
