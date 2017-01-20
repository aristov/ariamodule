import { grid, row, gridcell } from '../lib/index'
import { th } from 'htmlmodule'

const rows = Array.from(new Array(10))
const cells = Array.from(new Array(10))

const testgrid = grid(rows.map((r, j) =>
    row(cells.map((c, i) =>
        i? gridcell({
            disabled : i === 5 && j === 5,
            selected : false,
            children : j + '_' + c + '_' + i
        }) : th(j + '_' + i)))
))

document.body.appendChild(testgrid.node)
