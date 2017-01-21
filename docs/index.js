import { grid, row, gridcell } from '../lib/index'
import { tbody } from 'htmlmodule'

const rows = Array.from(new Array(48))
const cells = Array.from(new Array(10))

const testgrid = grid({
    multiselectable : true,
    children : tbody(rows.map((r, j) =>
        row({
            children : cells.map((c, i) =>
                gridcell({
                    //disabled : i === 5 && j === 5,
                    selected : false,
                    children : ''
                }))
        }))
    )
})

document.body.appendChild(testgrid.node)
