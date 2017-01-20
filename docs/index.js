import { grid, row, gridcell } from '../lib/index'
import { th } from 'htmlmodule'

const rows = Array.from(new Array(10))
const cells = Array.from(new Array(10))

const testgrid = grid({
    multiselectable : true,
    children : rows.map((r, j) =>
        row({
            children : cells.map((c, i) =>
                gridcell({
                    disabled : i === 5 && j === 5,
                    selected : false,
                    children : j + '_test_' + i
                }))
        })
    )
})

document.body.appendChild(testgrid.node)
